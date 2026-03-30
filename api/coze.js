const jwt = require('jsonwebtoken');

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 🚨 接收前端传过来的唯一用户 ID
  const { userId } = req.query;
  if (!userId) {
    return res.status(400).json({ success: false, error: 'Missing userId parameter' });
  }

  const CLIENT_ID = process.env.COZE_CLIENT_ID;
  const KEY_ID = process.env.COZE_KEY_ID;
  let PRIVATE_KEY = process.env.COZE_PRIVATE_KEY;

  if (PRIVATE_KEY && PRIVATE_KEY.includes('\\n')) {
    PRIVATE_KEY = PRIVATE_KEY.replace(/\\n/g, '\n');
  }

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: CLIENT_ID,
    aud: 'api.coze.cn',
    iat: now,
    exp: now + 3600,
    jti: Math.random().toString(36).substring(2, 15)
  };

  try {
    const token = jwt.sign(payload, PRIVATE_KEY, { 
        algorithm: 'RS256', 
        header: { alg: 'RS256', typ: 'JWT', kid: KEY_ID } 
    });

    const response = await fetch('https://api.coze.cn/api/permission/oauth2/token', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            duration_seconds: 3600,
            grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            // 🚨 【最关键的修复】：把用户 ID 传给 Coze 服务器
            user_id: userId 
        })
    });

    const data = await response.json();
    if (data.access_token) {
        res.status(200).json({ success: true, token: data.access_token });
    } else {
        res.status(500).json({ success: false, error: data });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}