// api/lead.js
// 接收前端表单 POST，并行执行：
// 任务 A：写入飞书多维表格
// 任务 B：发送邮件通知（Resend）
//
// 所有凭据从环境变量读取，禁止硬编码（见 CLAUDE.md 第七节）。
// 需要在部署平台配置：
//   RESEND_API_KEY / FEISHU_APP_ID / FEISHU_APP_SECRET
//   FEISHU_BITABLE_ID / FEISHU_TABLE_ID / SALES_EMAIL
//   LEAD_MAIL_FROM（可选，默认 onboarding@resend.dev）
import { Resend } from 'resend';

const REQUIRED_ENV = [
  'RESEND_API_KEY',
  'FEISHU_APP_ID',
  'FEISHU_APP_SECRET',
  'FEISHU_BITABLE_ID',
  'FEISHU_TABLE_ID',
  'SALES_EMAIL',
];

// 字段长度上限，防止超大 payload 写进多维表和邮件正文
const MAX_FIELD_LENGTH = 200;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getMissingEnv() {
  return REQUIRED_ENV.filter((key) => !process.env[key]);
}

// 邮件正文由用户提交内容拼成，必须转义，否则任意 HTML 会被投递进销售邮箱
function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// 校验单个字段：必须是非空字符串且不超长
function normalizeField(value, {required = true} = {}) {
  if (typeof value !== 'string') {
    return required ? null : '';
  }
  const trimmed = value.trim();
  if (!trimmed) {
    return required ? null : '';
  }
  if (trimmed.length > MAX_FIELD_LENGTH) {
    return null;
  }
  return trimmed;
}

// 任务 A：写入飞书多维表格
async function writeToFeishu(name, company, email, fileName) {
  const tokenRes = await fetch('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      app_id: process.env.FEISHU_APP_ID,
      app_secret: process.env.FEISHU_APP_SECRET,
    }),
  });
  const tokenData = await tokenRes.json();
  if (tokenData.code !== 0 || !tokenData.tenant_access_token) {
    // 不要把 tokenData 整体拼进错误信息，它含 tenant_access_token
    throw new Error(`Feishu token failed (code=${tokenData.code})`);
  }

  const recordRes = await fetch(
    `https://open.feishu.cn/open-apis/bitable/v1/apps/${process.env.FEISHU_BITABLE_ID}/tables/${process.env.FEISHU_TABLE_ID}/records`,
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
          fileName: fileName || 'Unknown',
        },
      }),
    }
  );
  const recordData = await recordRes.json();
  if (recordData.code !== 0) {
    throw new Error(`Feishu write failed (code=${recordData.code}): ${recordData.msg || ''}`);
  }
  return recordData;
}

// 任务 B：发送邮件通知（Resend）
async function sendEmailNotification(name, company, email, fileName) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const safeFileName = fileName || 'Unknown';
  const row = (label, value) => `
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">${label}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(value)}</td>
        </tr>`;

  const { error } = await resend.emails.send({
    from: process.env.LEAD_MAIL_FROM || 'onboarding@resend.dev',
    to: process.env.SALES_EMAIL,
    subject: `官网新线索：${name} 下载了 ${safeFileName}`,
    html: `
      <h2>📢 官网新增高意向下载客户</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 500px;">${row('name', name)}${row('company', company)}${row('email', email)}${row('fileName', safeFileName)}
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
  //    前端为不带凭据的普通 fetch，因此不设置 Allow-Credentials
  //    （它与 Allow-Origin: * 组合本身也会被浏览器拒绝）
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 2. 处理浏览器的 OPTIONS 预检请求
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 3. 拦截非 POST 请求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 4. 缺少环境变量时直接失败，不要静默降级
  const missingEnv = getMissingEnv();
  if (missingEnv.length > 0) {
    console.error('Missing required env vars:', missingEnv.join(', '));
    return res.status(500).json({ error: 'Server is not configured' });
  }

  // 5. 校验请求体。无 body 或非 JSON 时 req.body 为 undefined，必须先兜住
  const body = req.body && typeof req.body === 'object' ? req.body : null;
  if (!body) {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  const name = normalizeField(body.name);
  const company = normalizeField(body.company);
  const email = normalizeField(body.email);
  const fileName = normalizeField(body.fileName, {required: false});

  if (!name || !company || !email || fileName === null) {
    return res.status(400).json({ error: 'Missing or invalid fields' });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
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
