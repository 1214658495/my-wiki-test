const jwt = require('jsonwebtoken');

export default async function handler(req, res) {
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
     return res.status(500).json({ success: false, error: '环境变量缺失' });
  }
  if (PRIVATE_KEY.includes('\\n')) {
    PRIVATE_KEY = PRIVATE_KEY.replace(/\\n/g, '\n');
  }

  // 🚨 【核心修复 1】：接收前端传来的访客 ID（如果没有则给个随机默认值）
  const visitorId = req.query.visitorId || ('guest_' + Date.now());

  const jti = Math.random().toString(36).substring(2, 15);
  const now = Math.floor(Date.now() / 1000);

  const payload = {
    iss: CLIENT_ID,
    aud: 'api.coze.cn',
    iat: now,
    exp: now + 3600,
    jti: jti,
    // 🚨 【核心修复 2】：严格按照官方文档，将访客 ID 刻入加密门票中！
    session_name: String(visitorId) 
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
            grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer'
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