const AMAP_PLACE_TEXT_URL = 'https://restapi.amap.com/v3/place/text';

const POI_SCENE_QUERIES = {
  indoor: ['密室逃脱', '漂浮馆 新奇体验', '桌游', '剧本杀', '电玩城', '保龄球 台球', '美术馆 展览', '电影院', '手作体验', '购物中心'],
  outdoor: ['Citywalk', '公园 野餐', '滨江 夜景', '古镇 老街', '历史建筑', '湖景', '森林公园', '植物园 花园', '户外运动', '热门景点'],
  food: ['本帮菜', '火锅', '日料', '韩餐', '西餐', '粤菜 港式', '江浙菜', '烧烤 烤肉', '咖啡 甜品', '小吃 夜市'],
  fun: ['KTV', '清吧', 'Livehouse', '脱口秀 剧场', '酒吧 夜景', '夜游', '轰趴馆', '卡丁车 运动娱乐', '鬼屋 密室', '商圈 娱乐']
};

const SCENE_LABELS = {
  indoor: ['密室', '新奇体验', '桌游', '剧本杀', '电玩城', '保龄球台球', '看展', '影院', '手作', '商场'],
  outdoor: ['Citywalk', '公园野餐', '滨江夜景', '古镇老街', '历史建筑', '湖景', '森林郊野', '花园植物', '运动户外', '周末打卡'],
  food: ['本帮菜', '火锅', '日料', '韩餐', '西餐', '粤菜港式', '江浙菜', '烧烤烤肉', '咖啡甜品', '小吃夜市'],
  fun: ['KTV', '清吧', 'Livehouse', '脱口秀剧场', '酒吧夜景', '夜游', '轰趴', '运动娱乐', '刺激娱乐', '商圈续摊']
};

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function fallbackItem(district, category, scene) {
  return {
    name: `${district}${scene} TOP1`,
    description: '该细分场景暂未从高德 POI 获取到可用结果，保留为兜底候选。',
    scene,
    rank_type: category === 'food' ? '菜系TOP1' : '场景TOP1',
    rating: '高德评分暂无',
    cost: category === 'outdoor' ? '门票/费用暂无' : '人均/票价暂无',
    review_note: '服务端兜底：请确认 AMAP_WEB_SERVICE_KEY 已配置，或稍后重试。',
    source: '服务端兜底'
  };
}

function normalizeDistrict(district) {
  return String(district || '').replace('新区', '').replace('区', '');
}

function isPoiInDistrict(poi, district) {
  const adname = String(poi.adname || '');
  return !adname || district === '浦东新区' || adname.includes(normalizeDistrict(district));
}

function poiToItem(poi, category, scene) {
  const biz = poi.biz_ext || {};
  const rating = biz.rating && biz.rating !== '[]' ? `高德评分 ${biz.rating}` : '高德评分暂无';
  const cost = biz.cost && biz.cost !== '[]' ? `人均¥${biz.cost}` : (category === 'outdoor' ? '门票/费用暂无' : '人均/票价暂无');
  const address = Array.isArray(poi.address) ? poi.address.join('') : (poi.address || poi.adname || '地址暂无');
  const type = String(poi.type || 'POI').split(';').slice(0, 2).join(' / ');
  return {
    name: poi.name || '未命名地点',
    description: `${scene} 的高德 POI 优先结果：${address}。每个细分场景只取一个 TOP1，避免同质化重复。`,
    scene,
    rank_type: category === 'food' ? '菜系TOP1' : '场景TOP1',
    rating,
    cost,
    review_note: `真实POI：${type} · ${address}`,
    source: '高德场景TOP1'
  };
}

async function fetchFirstPoi(amapKey, district, keyword) {
  const params = new URLSearchParams({
    key: amapKey,
    keywords: `${district} ${keyword}`,
    city: '上海市',
    citylimit: 'true',
    offset: '10',
    page: '1',
    extensions: 'all'
  });
  const response = await fetch(`${AMAP_PLACE_TEXT_URL}?${params.toString()}`);
  if (!response.ok) return null;
  const data = await response.json();
  if (data.status !== '1') return null;
  const pois = (data.pois || []).filter(poi => poi.name && isPoiInDistrict(poi, district));
  return pois[0] || null;
}

module.exports = {
  POI_SCENE_QUERIES,
  SCENE_LABELS,
  setCors,
  fallbackItem,
  poiToItem,
  fetchFirstPoi
};
