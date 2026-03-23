// api/coze.js
const jwt = require('jsonwebtoken');

export default function handler(req, res) {
  // 允许跨域请求（让你的 Wiki 网页能顺利调用它）
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 从环境变量里读取绝密信息（这样代码传到 GitHub 上也不会泄露）
  const CLIENT_ID = process.env.COZE_CLIENT_ID;
  const KEY_ID = process.env.COZE_KEY_ID;
  const PRIVATE_KEY = process.env.COZE_PRIVATE_KEY.replace(/\\n/g, '\n');

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
    const token = jwt.sign(payload, PRIVATE_KEY, { 
        algorithm: 'RS256', 
        header: { alg: 'RS256', typ: 'JWT', kid: KEY_ID } 
    });
    res.status(200).json({ success: true, token: token });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}