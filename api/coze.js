const jwt = require('jsonwebtoken');

export default async function handler(req, res) {
  // 允许跨域请求
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const CLIENT_ID = process.env.COZE_CLIENT_ID;
  const KEY_ID = process.env.COZE_KEY_ID;
  let PRIVATE_KEY = process.env.COZE_PRIVATE_KEY;

  if (!CLIENT_ID || !KEY_ID || !PRIVATE_KEY) {
     return res.status(500).json({ success: false, error: 'Vercel 环境变量未配置完整' });
  }

  // 处理 Vercel 环境变量中可能存在的换行符转义问题
  if (PRIVATE_KEY.includes('\\n')) {
    PRIVATE_KEY = PRIVATE_KEY.replace(/\\n/g, '\n');
  }

  const jti = Math.random().toString(36).substring(2, 15);
  const now = Math.floor(Date.now() / 1000);

  const payload = {
    iss: CLIENT_ID,
    aud: 'api.coze.cn',
    iat: now,
    exp: now + 3600,
    jti: jti
  };

  try {
    // 1. 生成 JWT 签名 (制作加密身份证)
    const token = jwt.sign(payload, PRIVATE_KEY, { 
        algorithm: 'RS256', 
        header: { alg: 'RS256', typ: 'JWT', kid: KEY_ID } 
    });

    // 2. 去扣子服务器兑换 Access Token (注意这里 headers 的修改！)
    const response = await fetch('https://api.coze.cn/api/permission/oauth2/token', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // 👈 【修复点】把加密身份证放在这里！
        },
        body: JSON.stringify({
            duration_seconds: 3600,
            grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer'
            // 👈 【修复点】删除了这里错误的 jwt 传参
        })
    });

    const data = await response.json();
    
    // 3. 将真实门票发给你的前端 Wiki
    if (data.access_token) {
        res.status(200).json({ success: true, token: data.access_token });
    } else {
        res.status(500).json({ success: false, error: data });
    }

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}