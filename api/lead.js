// api/lead.js
// 接收前端表单 POST，并行执行：
// 任务 A：写入飞书多维表格
// 任务 B：发送邮件通知（Resend）
import { Resend } from 'resend';

const resend = new Resend('re_GV6L3qsZ_J3GDqKNRJGQHM5ough2RmPyc');

const FEISHU_APP_ID = 'cli_a976e444b2395cc2';
const FEISHU_APP_SECRET = 'V6swUxewwW30KewCbOfkIgjnelwuzLvg';
const FEISHU_BITABLE_ID = 'RMlEbJB31aHs9osVolDcrCTLn2e';
const FEISHU_TABLE_ID = 'tblNWIv1ygCSeosv';
const SALES_EMAIL = 'a1597188965114@gmail.com';

// 任务 A：写入飞书多维表格
async function writeToFeishu(name, company, email, fileName) {
  const tokenRes = await fetch('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ app_id: FEISHU_APP_ID, app_secret: FEISHU_APP_SECRET }),
  });
  const tokenData = await tokenRes.json();
  if (tokenData.code !== 0 || !tokenData.tenant_access_token) {
    throw new Error('Feishu token failed: ' + JSON.stringify(tokenData));
  }

  const recordRes = await fetch(
    `https://open.feishu.cn/open-apis/bitable/v1/apps/${FEISHU_BITABLE_ID}/tables/${FEISHU_TABLE_ID}/records`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenData.tenant_access_token}`,
      },
      body: JSON.stringify({
        fields: {
          name: name,
          company: company,
          email: email,
          fileName: fileName || '未知',
        },
      }),
    }
  );
  const recordData = await recordRes.json();
  if (recordData.code !== 0) {
    throw new Error('Feishu write failed: ' + JSON.stringify(recordData));
  }
  return recordData;
}

// 任务 B：发送邮件通知（Resend）
async function sendEmailNotification(name, company, email, fileName) {
  const { error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: SALES_EMAIL,
    subject: `官网新线索：${name} 下载了 ${fileName || '未知文件'}`,
    html: `
      <h2>📢 官网新增高意向下载客户</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">name</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">company</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${company}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">email</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">fileName</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${fileName || 'Unknown'}</td>
        </tr>
      </table>
      <p style="margin-top: 16px; color: #666;">请及时跟进！</p>
    `,
  });
  if (error) {
    throw new Error('Resend error: ' + error.message);
  }
}

export default async function handler(req, res) {
  // 1. 设置允许跨域 (CORS) 的响应头
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // 允许所有域名访问，或者写死你们的 wiki 域名
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // 2. 处理浏览器的 OPTIONS 预检请求
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 3. 拦截非 POST 请求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, company, email, fileName } = req.body;

  if (!name || !company || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // 并行执行两个任务，任一失败不影响另一个
  const results = await Promise.allSettled([
    writeToFeishu(name, company, email, fileName),
    sendEmailNotification(name, company, email, fileName),
  ]);

  const feishuOk = results[0].status === 'fulfilled';
  const emailOk = results[1].status === 'fulfilled';

  if (!feishuOk) {
    console.error('Feishu failed:', results[0].reason);
  }
  if (!emailOk) {
    console.error('Email failed:', results[1].reason);
  }

  if (!feishuOk && !emailOk) {
    return res.status(500).json({ error: 'Both Feishu and Email failed' });
  }

  return res.status(200).json({
    success: true,
    feishu: feishuOk ? 'ok' : 'failed',
    email: emailOk ? 'ok' : 'failed',
  });
}