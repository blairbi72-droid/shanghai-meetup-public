const { setCors } = require('../shared');

module.exports = function handler(req, res) {
  setCors(res);
  if (req.method === 'OPTIONS') return res.status(204).end();
  return res.status(200).json({ ok: true, service: 'shanghai-meetup-public' });
};
