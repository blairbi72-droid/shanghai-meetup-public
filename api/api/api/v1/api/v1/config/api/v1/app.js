const categories = [
  { key: 'indoor', label: '室内游玩', icon: '🏛️' },
  { key: 'outdoor', label: '室外景点', icon: '🌿' },
  { key: 'food', label: '美食', icon: '🍜' },
  { key: 'fun', label: '娱乐', icon: '🎤' }
];

const sceneTemplates = {
  indoor: [
    ['密室', '适合 4-8 人沉浸式互动，优先推荐该区密室场景 TOP1。', '场景TOP1', '人均¥120-260'],
    ['新奇体验', '如漂浮馆、减压馆、VR 体验等，适合想玩点不一样的朋友。', '场景TOP1', '人均¥120-300'],
    ['桌游', '适合低预算多人局，方便聊天破冰。', '场景TOP1', '人均¥50-100'],
    ['剧本杀', '适合熟人局和沉浸推理局。', '场景TOP1', '人均¥120-220'],
    ['电玩城', '适合轻竞技、抓娃娃、音游和快速破冰。', '场景TOP1', '人均¥80-180'],
    ['保龄球台球', '适合饭前饭后轻运动。', '场景TOP1', '人均¥80-180'],
    ['看展', '适合文艺型聚会和雨天路线。', '场景TOP1', '票价依展览'],
    ['影院', '电影后直接聚餐续摊，决策成本低。', '场景TOP1', '人均¥60-120'],
    ['手作', '适合陶艺、香薰、银饰等互动体验。', '场景TOP1', '人均¥120-280'],
    ['商场', '适合天气不稳定时吃喝玩乐一次解决。', '场景TOP1', '人均/票价待核验']
  ],
  outdoor: [
    ['Citywalk', '适合拍照、咖啡和饭后散步串联。', '场景TOP1', '免费/低消费'],
    ['公园野餐', '适合草坪、飞盘和低成本聚会。', '场景TOP1', '免费/依项目'],
    ['滨江夜景', '适合傍晚和夜景路线。', '场景TOP1', '免费'],
    ['古镇老街', '适合半日慢逛和小吃路线。', '场景TOP1', '费用待核验'],
    ['历史建筑', '适合轻文化路线和咖啡小店。', '场景TOP1', '免费/低消费'],
    ['湖景', '适合看湖、骑行和周末放空。', '场景TOP1', '免费/依项目'],
    ['森林郊野', '适合露营、骑行和自然路线。', '场景TOP1', '费用待核验'],
    ['花园植物', '适合花季拍照和轻户外。', '场景TOP1', '票价待核验'],
    ['运动户外', '适合飞盘、骑行、皮划艇等互动局。', '场景TOP1', '人均依项目'],
    ['周末打卡', '适合半日游和朋友圈拍照。', '场景TOP1', '费用待核验']
  ],
  food: [
    ['本帮菜', '适合体验上海味道，优先推荐该区本帮菜 TOP1。', '菜系TOP1', '人均¥100-220'],
    ['火锅', '多人聚餐容错率高，口味接受度广。', '菜系TOP1', '人均¥120-220'],
    ['日料', '适合小桌精致聚餐或居酒屋小酌。', '菜系TOP1', '人均¥150-350'],
    ['韩餐', '适合烤肉、部队锅和热闹朋友局。', '菜系TOP1', '人均¥100-200'],
    ['西餐', '适合约会感、仪式感和轻奢晚餐。', '菜系TOP1', '人均¥180-350'],
    ['粤菜港式', '适合口味稳妥、点心和多人分享。', '菜系TOP1', '人均¥100-220'],
    ['江浙菜', '适合环境友好、菜品稳定的聚餐。', '菜系TOP1', '人均¥100-180'],
    ['烧烤烤肉', '适合夜宵和聊天续摊。', '菜系TOP1', '人均¥100-180'],
    ['咖啡甜品', '适合下午茶和轻量约见。', '菜系TOP1', '人均¥50-100'],
    ['小吃夜市', '适合边走边吃、预算友好的烟火气路线。', '菜系TOP1', '人均¥30-100']
  ],
  fun: [
    ['KTV', '适合生日局和饭后续摊。', '场景TOP1', '人均¥100-240'],
    ['清吧', '适合聊天型夜间聚会。', '场景TOP1', '人均¥100-220'],
    ['Livehouse', '适合音乐朋友和夜间活动。', '场景TOP1', '票价依演出'],
    ['脱口秀剧场', '适合轻松观演和饭后安排。', '场景TOP1', '票价依演出'],
    ['酒吧夜景', '适合微醺和城市夜景。', '场景TOP1', '人均¥150-350'],
    ['夜游', '适合晚餐后散步、拍照和续摊。', '场景TOP1', '人均依消费'],
    ['轰趴', '适合大团、生日、桌游和唱歌混合局。', '场景TOP1', '人均¥150-300'],
    ['运动娱乐', '适合高能朋友局。', '场景TOP1', '人均¥150-300'],
    ['刺激娱乐', '适合想要刺激和互动的朋友。', '场景TOP1', '人均¥120-260'],
    ['商圈续摊', '适合晚餐后临时决定，选择丰富。', '场景TOP1', '人均依消费']
  ]
};

const districts = [
  { id: 'huangpu', name: '黄浦区', x: 352, y: 260, w: 92, h: 62, color: '#73f1d4' },
  { id: 'xuhui', name: '徐汇区', x: 245, y: 320, w: 102, h: 70, color: '#8ca7ff' },
  { id: 'jingan', name: '静安区', x: 325, y: 182, w: 102, h: 64, color: '#ffd166' },
  { id: 'changning', name: '长宁区', x: 190, y: 230, w: 108, h: 70, color: '#ff9f7a' },
  { id: 'putuo', name: '普陀区', x: 225, y: 150, w: 110, h: 66, color: '#b18cff' },
  { id: 'hongkou', name: '虹口区', x: 440, y: 166, w: 104, h: 66, color: '#7bdff2' },
  { id: 'yangpu', name: '杨浦区', x: 535, y: 206, w: 114, h: 72, color: '#73f1d4' },
  { id: 'pudong', name: '浦东新区', x: 480, y: 300, w: 160, h: 106, color: '#89f7a7' },
  { id: 'minhang', name: '闵行区', x: 140, y: 390, w: 130, h: 78, color: '#ff7ab6' },
  { id: 'baoshan', name: '宝山区', x: 385, y: 86, w: 128, h: 72, color: '#9ee493' },
  { id: 'jiading', name: '嘉定区', x: 95, y: 92, w: 118, h: 76, color: '#ffd166' },
  { id: 'qingpu', name: '青浦区', x: 30, y: 300, w: 120, h: 76, color: '#8ca7ff' },
  { id: 'songjiang', name: '松江区', x: 120, y: 482, w: 132, h: 66, color: '#7bdff2' },
  { id: 'jinshan', name: '金山区', x: 254, y: 492, w: 112, h: 62, color: '#ff9f7a' },
  { id: 'fengxian', name: '奉贤区', x: 372, y: 446, w: 134, h: 76, color: '#b18cff' },
  { id: 'chongming', name: '崇明区', x: 480, y: 28, w: 188, h: 50, color: '#89f7a7' }
];

let currentDistrict = 'huangpu';
let currentCategory = 'indoor';
let currentSelections = new Set();
let votes = JSON.parse(localStorage.getItem('meetupVotes') || '[]');

const mapEl = document.querySelector('#districtMap');
const stripEl = document.querySelector('#districtStrip');
const tabsEl = document.querySelector('#categoryTabs');
const cardsEl = document.querySelector('#cards');
const nameEl = document.querySelector('#currentDistrictName');
const sourceStatusEl = document.querySelector('#sourceStatus');
const POI_API_BASE = '';

function getDistrict(id) {
  return districts.find(d => d.id === id);
}

function keyOf(district, category, index) {
  return `${district}|${category}|${index}`;
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[char]));
}

function setSourceStatus(message) {
  if (sourceStatusEl) sourceStatusEl.textContent = message;
}

function makeFallbackItem(districtId, categoryKey, index) {
  const district = getDistrict(districtId);
  const template = sceneTemplates[categoryKey][index];
  return [
    `${district.name}${template[0]} TOP1`,
    template[1],
    template[0],
    template[2],
    '高德评分暂无',
    template[3],
    `内置兜底：${template[0]} · ${template[2]}`,
    '内置场景TOP1'
  ];
}

function getLocalItems(districtId, categoryKey) {
  return sceneTemplates[categoryKey].map((_, index) => makeFallbackItem(districtId, categoryKey, index));
}

function getCurrentItems() {
  const district = getDistrict(currentDistrict);
  return district?.data?.[currentCategory] || getLocalItems(currentDistrict, currentCategory);
}

function getItemFromKey(key) {
  const [districtId, categoryKey, index] = key.split('|');
  const district = getDistrict(districtId);
  const category = categories.find(c => c.key === categoryKey);
  const item = (district?.data?.[categoryKey] || getLocalItems(districtId, categoryKey))[Number(index)];
  return item ? { district, category, item } : null;
}

async function loadLivePoi() {
  const district = getDistrict(currentDistrict);
  const category = categories.find(c => c.key === currentCategory);
  setSourceStatus(`正在通过服务端代理加载：${district.name} / ${category.label} ...`);

  try {
    const params = new URLSearchParams({ district: district.name, category: currentCategory });
    const response = await fetch(`${POI_API_BASE}/api/v1/poi?${params.toString()}`);
    if (!response.ok) throw new Error(`status ${response.status}`);

    const data = await response.json();
    const items = (data.items || []).map(item => [
      item.name,
      item.description,
      item.scene,
      item.rank_type,
      item.rating,
      item.cost,
      item.review_note,
      item.source
    ]);

    if (!items.length) {
      setSourceStatus(`服务端暂未返回 ${district.name} / ${category.label} 的可用结果，已保留内置推荐。`);
      return;
    }

    district.data = district.data || {};
    district.data[currentCategory] = items.slice(0, 10);
    currentSelections.clear();
    renderCards();
    renderStats();
    renderMap();

    setSourceStatus(`${data.message || '已通过服务端代理返回场景化 POI。'}朋友无需输入 Key，Key 不会出现在前端。`);
    if (data.source !== 'fallback') toast('服务端真实 POI 已加载');
  } catch (error) {
    console.error(error);
    setSourceStatus('服务端代理加载失败，当前保留内置场景 TOP1 推荐。');
  }
}

function autoLoadLivePoi() {
  loadLivePoi();
}

function countByDistrict() {
  const counts = {};
  votes.flatMap(v => v.items).concat([...currentSelections]).forEach(k => {
    const info = getItemFromKey(k);
    if (info) counts[info.district.id] = (counts[info.district.id] || 0) + 1;
  });
  return counts;
}

function renderMap() {
  const districtCounts = countByDistrict();
  mapEl.innerHTML = '<defs><filter id="glow"><feGaussianBlur stdDeviation="3.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>';

  districts.forEach(tile => {
    const count = districtCounts[tile.id] || 0;
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.classList.add('district-node');
    if (tile.id === currentDistrict) g.classList.add('active');
    if (count > 0) g.classList.add('hot');
    g.setAttribute('tabindex', '0');
    g.setAttribute('role', 'button');
    g.dataset.id = tile.id;

    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', tile.x);
    rect.setAttribute('y', tile.y);
    rect.setAttribute('width', tile.w);
    rect.setAttribute('height', tile.h);
    rect.setAttribute('rx', 18);
    rect.style.fill = count > 0 ? `${tile.color}3b` : 'rgba(255,255,255,.08)';

    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', tile.x + tile.w / 2);
    text.setAttribute('y', tile.y + tile.h / 2 - 2);
    text.setAttribute('text-anchor', 'middle');
    text.textContent = tile.name;

    const countText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    countText.setAttribute('x', tile.x + tile.w / 2);
    countText.setAttribute('y', tile.y + tile.h / 2 + 21);
    countText.setAttribute('text-anchor', 'middle');
    countText.classList.add('count');
    countText.textContent = count ? `${count} 票` : '点击选择';

    g.append(rect, text, countText);
    g.addEventListener('click', () => selectDistrict(tile.id));
    g.addEventListener('keydown', e => {
      if (e.key === 'Enter') selectDistrict(tile.id);
    });
    mapEl.appendChild(g);
  });
}

function renderStrip() {
  stripEl.innerHTML = '';
  districts.forEach(d => {
    const btn = document.createElement('button');
    btn.className = `district-chip ${d.id === currentDistrict ? 'active' : ''}`;
    btn.textContent = d.name;
    btn.onclick = () => selectDistrict(d.id);
    stripEl.appendChild(btn);
  });
}

function renderTabs() {
  tabsEl.innerHTML = '';
  categories.forEach(c => {
    const btn = document.createElement('button');
    btn.className = `tab ${c.key === currentCategory ? 'active' : ''}`;
    btn.textContent = `${c.icon} ${c.label}`;
    btn.onclick = () => {
      currentCategory = c.key;
      renderAll();
      autoLoadLivePoi();
    };
    tabsEl.appendChild(btn);
  });
}

function renderCards() {
  const district = getDistrict(currentDistrict);
  const items = getCurrentItems();
  nameEl.textContent = district.name;
  cardsEl.innerHTML = '';

  items.forEach((item, index) => {
    const id = keyOf(currentDistrict, currentCategory, index);
    const label = document.createElement('label');
    label.className = 'card';

    const safe = item.map(escapeHtml);
    const sourceBadge = safe[7] ? `<span>${safe[7]}</span>` : '';

    label.innerHTML = `<input type="checkbox" ${currentSelections.has(id) ? 'checked' : ''}/>
      <h3>TOP${index + 1} · ${safe[0]}</h3>
      <p>${safe[1]}</p>
      <div class="meta-row"><span>⭐ ${safe[4]}</span><span>${safe[5]}</span></div>
      <div class="review-note">${safe[6]}</div>
      <div class="tags"><span>${safe[2]}</span><span>${safe[3]}</span><span>${escapeHtml(categories.find(c => c.key === currentCategory).label)}</span>${sourceBadge}</div>`;

    label.querySelector('input').onchange = e => {
      e.target.checked ? currentSelections.add(id) : currentSelections.delete(id);
      renderStats();
      renderMap();
    };

    cardsEl.appendChild(label);
  });
}

function selectDistrict(id) {
  currentDistrict = id;
  renderAll();
  autoLoadLivePoi();
}

function renderStats() {
  const allKeys = votes.flatMap(v => v.items).concat([...currentSelections]);
  document.querySelector('#heroSelectedCount').textContent = allKeys.length;
  document.querySelector('#statPeople').textContent = votes.length;
  document.querySelector('#statItems').textContent = allKeys.length;

  const itemCounts = {};
  allKeys.forEach(k => itemCounts[k] = (itemCounts[k] || 0) + 1);

  const ranking = Object.entries(itemCounts).sort((a, b) => b[1] - a[1]).slice(0, 10);
  const rankingEl = document.querySelector('#rankingList');

  if (!ranking.length) {
    rankingEl.className = 'ranking-list empty';
    rankingEl.textContent = '暂无数据';
    document.querySelector('#winnerText').textContent = '还没有选择';
    document.querySelector('#winnerSub').textContent = '先从地图上选一个区域开始吧。';
  } else {
    rankingEl.className = 'ranking-list';
    rankingEl.innerHTML = ranking.map(([k, count], i) => {
      const info = getItemFromKey(k);
      return `<div class="rank-item"><strong>${i + 1}. ${escapeHtml(info.item[0])} · ${count} 票</strong><span>${escapeHtml(info.district.name)} / ${escapeHtml(info.category.label)} / ${escapeHtml(info.item[2])}</span></div>`;
    }).join('');

    const top = getItemFromKey(ranking[0][0]);
    document.querySelector('#winnerText').textContent = `${top.item[0]}（${ranking[0][1]} 票）`;
    document.querySelector('#winnerSub').textContent = `${top.district.name} · ${top.category.label}。${top.item[1]}`;
  }

  const dCounts = countByDistrict();
  const max = Math.max(1, ...Object.values(dCounts));
  const districtStats = Object.entries(dCounts).sort((a, b) => b[1] - a[1]).slice(0, 8);
  const dEl = document.querySelector('#districtStats');

  if (!districtStats.length) {
    dEl.className = 'bar-list empty';
    dEl.textContent = '暂无数据';
  } else {
    dEl.className = 'bar-list';
    dEl.innerHTML = districtStats.map(([id, count]) => `<div class="bar"><div class="bar-label"><span>${getDistrict(id).name}</span><span>${count} 票</span></div><div class="bar-track"><div class="bar-fill" style="width:${count / max * 100}%"></div></div></div>`).join('');
  }
}

function renderAll() {
  renderMap();
  renderStrip();
  renderTabs();
  renderCards();
  renderStats();
}

function toast(msg) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2100);
}

async function refreshConfigStatus() {
  try {
    const response = await fetch(`${POI_API_BASE}/api/v1/config/status`);
    if (!response.ok) throw new Error(`status ${response.status}`);
    const data = await response.json();
    const label = data.configured ? '已配置' : '尚未配置';
    setSourceStatus(`服务端代理已启用：高德 Key ${label}。朋友打开链接无需输入 Key，页面会通过后端获取高德 POI。`);
  } catch (error) {
    console.error(error);
    setSourceStatus('服务端代理已启用，但暂时无法读取配置状态；可直接刷新真实 POI 测试。');
  }
}

document.querySelector('#saveVoter').onclick = () => {
  if (!currentSelections.size) return toast('请至少勾选 1 个想玩的内容');

  const name = document.querySelector('#voterName').value.trim() || `朋友${votes.length + 1}`;
  votes.push({ name, items: [...currentSelections] });
  localStorage.setItem('meetupVotes', JSON.stringify(votes));

  currentSelections.clear();
  document.querySelector('#voterName').value = '';
  renderAll();
  toast(`${name} 的选择已保存`);
};

document.querySelector('#resetAll').onclick = () => {
  if (!confirm('确定清空所有选择和统计吗？')) return;
  votes = [];
  currentSelections.clear();
  localStorage.removeItem('meetupVotes');
  renderAll();
  toast('已清空');
};

document.querySelector('#copySummary').onclick = async () => {
  const allKeys = votes.flatMap(v => v.items).concat([...currentSelections]);
  const itemCounts = {};
  allKeys.forEach(k => itemCounts[k] = (itemCounts[k] || 0) + 1);

  const ranking = Object.entries(itemCounts).sort((a, b) => b[1] - a[1]).slice(0, 10);
  const text = ranking.length ? ranking.map(([k, c], i) => {
    const info = getItemFromKey(k);
    return `${i + 1}. ${info.item[0]}｜${info.district.name}｜${info.category.label}｜${c}票`;
  }).join('\n') : '暂无聚会选择结果';

  await navigator.clipboard.writeText(`上海朋友聚会选择结果\n${text}`);
  toast('统计摘要已复制');
};

document.querySelector('#refreshPoi').onclick = () => loadLivePoi();
document.querySelector('#scrollToPlanner').onclick = () => document.querySelector('#planner').scrollIntoView({ behavior: 'smooth' });

document.querySelector('#loadDemo').onclick = () => {
  votes = [
    { name: '阿宇', items: ['huangpu|outdoor|0', 'jingan|food|0', 'xuhui|fun|1'] },
    { name: 'Mia', items: ['huangpu|outdoor|0', 'xuhui|outdoor|0', 'pudong|food|0'] },
    { name: 'Leo', items: ['jingan|food|0', 'changning|fun|0', 'huangpu|indoor|1'] }
  ];
  localStorage.setItem('meetupVotes', JSON.stringify(votes));
  renderAll();
  toast('已载入示例投票');
};

renderAll();
refreshConfigStatus();
autoLoadLivePoi();
