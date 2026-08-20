const { setCors } = require('../../shared');

module.exports = function handler(req, res) {
  setCors(res);
  if (req.method === 'OPTIONS') return res.status(204).end();
  const configured = Boolean(process.env.AMAP_WEB_SERVICE_KEY);
  return res.status(200).json({
    configured,
    source: configured ? 'env' : 'missing',
    runtime_admin_initialized: false,
    message: configured ? '高德 Key 已通过 Vercel 环境变量配置。' : '高德 Key 尚未配置，请在 Vercel 环境变量里添加 AMAP_WEB_SERVICE_KEY。'
  });
};
