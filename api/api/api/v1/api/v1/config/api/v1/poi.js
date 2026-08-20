const {
  POI_SCENE_QUERIES,
  SCENE_LABELS,
  setCors,
  fallbackItem,
  poiToItem,
  fetchFirstPoi
} = require('../shared');

module.exports = async function handler(req, res) {
  setCors(res);
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).json({ detail: 'method not allowed' });

  const district = String(req.query.district || '黄浦区');
  const category = String(req.query.category || 'indoor');
  if (!POI_SCENE_QUERIES[category]) {
    return res.status(400).json({ detail: 'unsupported category' });
  }

  const amapKey = process.env.AMAP_WEB_SERVICE_KEY;
  if (!amapKey) {
    return res.status(200).json({
      district,
      category,
      items: SCENE_LABELS[category].map(scene => fallbackItem(district, category, scene)),
      source: 'fallback',
      message: '服务端未配置 AMAP_WEB_SERVICE_KEY，已返回兜底场景 TOP1。'
    });
  }

  const seen = new Set();
  const items = [];
  for (let index = 0; index < POI_SCENE_QUERIES[category].length; index += 1) {
    const keyword = POI_SCENE_QUERIES[category][index];
    const scene = SCENE_LABELS[category][index];
    try {
      const poi = await fetchFirstPoi(amapKey, district, keyword);
      if (poi && !seen.has(poi.name)) {
        seen.add(poi.name);
        items.push(poiToItem(poi, category, scene));
      } else {
        items.push(fallbackItem(district, category, scene));
      }
    } catch (error) {
      items.push(fallbackItem(district, category, scene));
    }
  }

  return res.status(200).json({
    district,
    category,
    items: items.slice(0, 10),
    source: 'amap_proxy',
    message: '已通过公网服务端代理按细分场景返回 TOP1。'
  });
};
