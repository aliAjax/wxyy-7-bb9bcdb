const startBtn = document.getElementById("startBtn");
const endDayBtn = document.getElementById("endDayBtn");
const allocationsEl = document.getElementById("allocations");
const logEl = document.getElementById("log");
const resultEl = document.getElementById("result");
const forecastEl = document.getElementById("forecast");
const dayEl = document.getElementById("day");
const weatherEl = document.getElementById("weather");
const weatherIconEl = document.getElementById("weatherIcon");
const fuelEl = document.getElementById("fuel");
const moraleEl = document.getElementById("morale");
const foodEl = document.getElementById("food");
const dataEl = document.getElementById("data");
const powerLeftEl = document.getElementById("powerLeft");
const missionCardsEl = document.getElementById("missionCards");
const missionDeskEl = document.getElementById("missionDesk");
const controlsPanelEl = document.getElementById("controlsPanel");
const clearArchiveBtn = document.getElementById("clearArchiveBtn");
const archiveEmptyEl = document.getElementById("archiveEmpty");
const archiveListEl = document.getElementById("archiveList");

const ARCHIVE_KEY = "polar_station_archive";
const ARCHIVE_LIMIT = 20;

const systems = [
  { id: "heat", name: "供暖", hint: "低于3会冻伤士气" },
  { id: "comm", name: "通信", hint: "保持求援和天气联系" },
  { id: "lab", name: "实验", hint: "产出科考数据" },
  { id: "food", name: "食物储藏", hint: "低于2会损耗食物" }
];

const weatherDeck = [
  { name: "晴朗", icon: "晴", heat: 2, comm: 1, power: 12 },
  { name: "低温", icon: "冷", heat: 4, comm: 1, power: 11 },
  { name: "暴风雪", icon: "雪", heat: 5, comm: 3, power: 10 },
  { name: "极夜静风", icon: "夜", heat: 3, comm: 2, power: 12 }
];

const missions = [
  {
    id: "standard",
    name: "常规7天值班",
    tag: "默认",
    desc: "标准值守任务，维持科考站日常运转，撑过7天等待换班。",
    color: "#29464d",
    days: 7,
    initial: { fuel: 80, morale: 75, food: 70, data: 0 },
    allocations: { heat: 3, comm: 2, lab: 4, food: 3 },
    dataGoal: null,
    dataPerLab: 3,
    weatherWeight: null,
    intro: "值班开始，目标是撑过7天并尽量保住数据。",
    successText: (s) =>
      `科考站撑过了7天，直升机抵达，样本和数据都被带回基地。最终评分：${s.score}。`,
    failText: (s) =>
      `值班失败，某项关键资源归零，任务提前中止。最终评分：${s.score}。`
  },
  {
    id: "weather",
    name: "气象观测专项",
    tag: "通信优先",
    desc: "连续记录极地气象数据，需要通信系统持续在线以传输实时报文。",
    color: "#357a90",
    days: 7,
    initial: { fuel: 70, morale: 70, food: 65, data: 0 },
    allocations: { heat: 3, comm: 3, lab: 3, food: 3 },
    dataGoal: 120,
    dataPerLab: 3,
    commBonus: 3,
    intro: "气象观测任务启动，保持通信畅通以获得额外观测数据。目标数据≥120。",
    successText: (s) =>
      s.data >= s.mission.dataGoal
        ? `气象观测圆满完成！完整记录了${s.data}份气象报文，数据质量优秀。最终评分：${s.score}。`
        : `撑过了7天，但仅采集到${s.data}份报文（目标≥${s.mission.dataGoal}），观测报告不够完整。最终评分：${s.score}。`,
    failText: (s) =>
      `气象任务中断，某项资源归零。仅采集到${s.data}份报文。最终评分：${s.score}。`
  },
  {
    id: "icecore",
    name: "冰芯采样远征",
    tag: "实验优先",
    desc: "钻探深层冰芯并在实验舱内分析，实验室电力越高，产出数据越多。",
    color: "#6267a6",
    days: 7,
    initial: { fuel: 85, morale: 80, food: 60, data: 0 },
    allocations: { heat: 4, comm: 2, lab: 4, food: 2 },
    dataGoal: 150,
    dataPerLab: 4,
    weatherWeight: { 暴风雪: 3, 晴朗: 1, 低温: 2, 极夜静风: 2 },
    intro: "冰芯采样任务启动，分配更多电力给实验舱以获取高质量数据。目标数据≥150。",
    successText: (s) =>
      s.data >= s.mission.dataGoal
        ? `冰芯采样大获成功！${s.data}份冰芯分析数据被完整封装，发现远古气候信号。最终评分：${s.score}。`
        : `顺利返程，但${s.data}份数据未达目标（≥${s.mission.dataGoal}），冰芯样本价值有限。最终评分：${s.score}。`,
    failText: (s) =>
      `冰芯远征被迫中止，资源耗尽。只保留了${s.data}份分析数据。最终评分：${s.score}。`
  },
  {
    id: "relay",
    name: "通信中继保障",
    tag: "士气优先",
    desc: "作为跨极区通信中继节点，稳定的信号能提振全体队员士气。",
    color: "#c85f46",
    days: 7,
    initial: { fuel: 75, morale: 85, food: 80, data: 0 },
    allocations: { heat: 3, comm: 3, lab: 3, food: 3 },
    dataGoal: 100,
    dataPerLab: 3,
    commMoraleBonus: true,
    foodReserve: true,
    intro: "通信中继任务启动，维持通信在线可阻止士气下降，甚至提振人心。目标数据≥100。",
    successText: (s) =>
      s.data >= s.mission.dataGoal
        ? `跨极区通信中继全程在线！${s.data}份中继数据成功转发，队员状态极佳。最终评分：${s.score}。`
        : `中继站撑过了7天，但转发数据量${s.data}未达目标（≥${s.mission.dataGoal}），部分信号丢失。最终评分：${s.score}。`,
    failText: (s) =>
      `通信中继站失守，中继任务失败。仅转发了${s.data}份数据。最终评分：${s.score}。`
  }
];

let state;

function freshState() {
  const mission = missions.find((m) => m.id === "standard");
  return {
    started: false,
    mission: mission,
    selectedMissionId: null,
    day: 1,
    fuel: mission.initial.fuel,
    morale: mission.initial.morale,
    food: mission.initial.food,
    data: mission.initial.data,
    weather: weatherDeck[0],
    allocations: { ...mission.allocations },
    log: ["站内安静得只剩风声，等待选择任务。"]
  };
}

function init() {
  state = freshState();
  startBtn.addEventListener("click", start);
  endDayBtn.addEventListener("click", endDay);
  clearArchiveBtn.addEventListener("click", clearArchive);
  renderMissionCards();
  renderAllocations();
  renderArchive();
  render();
}

function renderMissionCards() {
  missionCardsEl.innerHTML = "";
  missions.forEach((mission) => {
    const card = document.createElement("div");
    card.className = "mission-card";
    card.dataset.missionId = mission.id;
    card.innerHTML = `
      <div class="mission-card-head" style="background:${mission.color}">
        <span class="mission-tag">${mission.tag}</span>
        <h3>${mission.name}</h3>
      </div>
      <div class="mission-card-body">
        <p class="mission-card-desc">${mission.desc}</p>
        <div class="mission-stats">
          <span>柴油<strong>${mission.initial.fuel}</strong></span>
          <span>士气<strong>${mission.initial.morale}</strong></span>
          <span>食物<strong>${mission.initial.food}</strong></span>
          <span>天数<strong>${mission.days}</strong></span>
        </div>
        <div class="mission-goal">
          目标：${mission.dataGoal ? `数据 ≥ ${mission.dataGoal}` : `撑过 ${mission.days} 天`}
        </div>
      </div>
    `;
    card.addEventListener("click", () => selectMission(mission.id));
    missionCardsEl.appendChild(card);
  });
}

function selectMission(missionId) {
  state.selectedMissionId = missionId;
  document.querySelectorAll(".mission-card").forEach((el) => {
    el.classList.toggle("selected", el.dataset.missionId === missionId);
  });
  startBtn.disabled = false;
  const mission = missions.find((m) => m.id === missionId);
  addLog(`已选择任务：${mission.name}。`);
  render();
}

function start() {
  if (!state.selectedMissionId) return;
  const mission = missions.find((m) => m.id === state.selectedMissionId);
  state = {
    started: true,
    mission: mission,
    selectedMissionId: mission.id,
    day: 1,
    fuel: mission.initial.fuel,
    morale: mission.initial.morale,
    food: mission.initial.food,
    data: mission.initial.data,
    weather: pickWeatherForMission(mission),
    allocations: { ...mission.allocations },
    log: [mission.intro]
  };
  resultEl.classList.add("hidden");
  missionDeskEl.classList.add("hidden");
  controlsPanelEl.classList.remove("hidden");
  render();
}

function pickWeatherForMission(mission) {
  if (!mission.weatherWeight) {
    return weatherDeck[Math.floor(Math.random() * weatherDeck.length)];
  }
  const weighted = [];
  weatherDeck.forEach((w) => {
    const weight = mission.weatherWeight[w.name] || 1;
    for (let i = 0; i < weight; i++) weighted.push(w);
  });
  return weighted[Math.floor(Math.random() * weighted.length)];
}

function endDay() {
  if (!state.started) return;
  const spent = totalPower();
  if (spent > state.weather.power) {
    addLog("电力分配超出今日可用上限，柴油机撑不住。");
    render();
    return;
  }

  state.fuel -= spent + (state.weather.name === "暴风雪" ? 4 : 2);
  const heatGap = Math.max(0, state.weather.heat - state.allocations.heat);
  const commGap = Math.max(0, state.weather.comm - state.allocations.comm);
  const commOk = state.allocations.comm >= state.weather.comm;

  state.morale -= heatGap * 9;
  state.morale -= commGap * 5;

  if (state.mission.commMoraleBonus && commOk) {
    state.morale += 3;
  }

  const foodLoss = state.mission.foodReserve
    ? Math.max(2, 6 - state.allocations.food)
    : Math.max(3, 8 - state.allocations.food);
  state.food -= foodLoss;

  let dataGain = state.allocations.lab * state.mission.dataPerLab;
  if (commOk) dataGain += 2;
  if (state.mission.commBonus && commOk) dataGain += state.mission.commBonus;
  state.data += dataGain;

  const eventText = randomEvent();
  addLog(`第${state.day}天结束：${eventText}`);

  if (state.fuel <= 0 || state.food <= 0 || state.morale <= 0) {
    finish(false);
    return;
  }

  if (state.day >= state.mission.days) {
    finish(true);
    return;
  }

  state.day += 1;
  state.weather = pickWeatherForMission(state.mission);
  normalize();
  render();
}

function randomEvent() {
  const events = [
    () => {
      state.fuel -= 4;
      return "柴油滤芯结霜，额外消耗4点柴油。";
    },
    () => {
      state.morale += 5;
      return "队员修好了旧唱机，士气回升5点。";
    },
    () => {
      state.food -= 5;
      return "储藏室门封松动，食物损耗5点。";
    },
    () => {
      state.data += 8;
      return "夜空观测顺利，数据增加8点。";
    },
    () => {
      state.fuel += 3;
      return "找到了备用油桶，柴油+3。";
    },
    () => {
      state.morale -= 4;
      return "极夜的压抑感袭来，士气-4。";
    }
  ];
  return events[Math.floor(Math.random() * events.length)]();
}

function finish(success) {
  state.started = false;
  normalize();
  const score = Math.max(
    0,
    state.data + state.fuel + state.food + state.morale
  );
  const summary = { score, data: state.data, mission: state.mission };
  const resultText = success
    ? state.mission.successText(summary)
    : state.mission.failText(summary);
  saveArchiveRecord({
    success: success,
    missionName: state.mission.name,
    day: state.day,
    fuel: state.fuel,
    food: state.food,
    morale: state.morale,
    data: state.data,
    score: score,
    ending: resultText
  });
  const goalLine = state.mission.dataGoal
    ? `<p class="result-goal">任务目标：数据 ≥ ${state.mission.dataGoal}，实际：${state.data}，${
        state.data >= state.mission.dataGoal ? "✅ 达成" : "❌ 未达成"
      }</p>`
    : "";
  resultEl.innerHTML = `
    <h2>${success ? "任务结束" : "任务失败"}</h2>
    <p>${state.mission.name}</p>
    ${goalLine}
    <p>柴油${state.fuel}，食物${state.food}，士气${state.morale}，数据${state.data}。</p>
    <p>${resultText}</p>
    <button id="returnBtn" type="button">返回任务选择台</button>
  `;
  resultEl.classList.remove("hidden");
  controlsPanelEl.classList.add("hidden");
  document.getElementById("returnBtn").addEventListener("click", () => {
    state = freshState();
    resultEl.classList.add("hidden");
    missionDeskEl.classList.remove("hidden");
    controlsPanelEl.classList.add("hidden");
    renderMissionCards();
    startBtn.disabled = true;
    render();
  });
  addLog(success ? "任务周期结束，结果如上。" : "某项关键资源归零，任务提前中止。");
  renderArchive();
  render();
}

function normalize() {
  state.fuel = Math.max(0, Math.min(100, Math.round(state.fuel)));
  state.food = Math.max(0, Math.min(100, Math.round(state.food)));
  state.morale = Math.max(0, Math.min(100, Math.round(state.morale)));
  state.data = Math.max(0, Math.round(state.data));
}

function totalPower() {
  return Object.values(state.allocations).reduce(
    (sum, value) => sum + Number(value),
    0
  );
}

function addLog(text) {
  state.log.push(text);
  state.log = state.log.slice(-28);
}

function renderAllocations() {
  allocationsEl.innerHTML = "";
  systems.forEach((system) => {
    const wrap = document.createElement("div");
    wrap.className = "allocation";
    wrap.innerHTML = `<label><span>${system.name}</span><strong id="${system.id}Value">0</strong></label><input id="${system.id}Input" type="range" min="0" max="7" value="0"><p>${system.hint}</p>`;
    allocationsEl.appendChild(wrap);
    const input = wrap.querySelector("input");
    input.addEventListener("input", () => {
      state.allocations[system.id] = Number(input.value);
      renderAllocationValues();
    });
  });
}

function renderAllocationValues() {
  systems.forEach((system) => {
    document.getElementById(`${system.id}Input`).value =
      state.allocations[system.id];
    document.getElementById(`${system.id}Value`).textContent =
      state.allocations[system.id];
  });
  const left = state.weather.power - totalPower();
  powerLeftEl.textContent = left;
  powerLeftEl.style.color = left < 0 ? "#d14c3f" : "";
}

function render() {
  dayEl.textContent = `${state.day}/${state.mission.days}`;
  weatherEl.textContent = state.weather.name;
  weatherIconEl.textContent = state.weather.icon;
  fuelEl.textContent = state.fuel;
  moraleEl.textContent = state.morale;
  foodEl.textContent = state.food;
  dataEl.textContent = state.data;
  if (state.started) {
    startBtn.textContent = "重新开始";
  } else if (state.selectedMissionId) {
    const mission = missions.find((m) => m.id === state.selectedMissionId);
    startBtn.textContent = `确认「${mission.name}」并进入电力分配`;
  } else {
    startBtn.textContent = "确认任务并进入电力分配";
  }
  endDayBtn.disabled = !state.started;
  if (state.started) {
    const extraHints = [];
    if (state.mission.commBonus)
      extraHints.push(`通信达标额外+${state.mission.commBonus}数据`);
    if (state.mission.commMoraleBonus) extraHints.push("通信达标士气+3");
    if (state.mission.foodReserve) extraHints.push("食物储备加成，消耗降低");
    forecastEl.textContent = `今日${state.weather.name}，建议供暖至少${state.weather.heat}格，通信至少${state.weather.comm}格。剩余电力可以投给实验或食物储藏。${extraHints.length ? "【" + extraHints.join("，") + "】" : ""}`;
  } else {
    forecastEl.textContent = state.selectedMissionId
      ? "已选择任务，点击确认按钮进入电力分配。"
      : "请在上方任务选择台选择一项任务。";
  }
  renderAllocationValues();
  renderLog();
}

function renderLog() {
  logEl.innerHTML = "";
  state.log.forEach((entry) => {
    const p = document.createElement("p");
    p.textContent = entry;
    logEl.appendChild(p);
  });
}

function loadArchive() {
  try {
    const raw = localStorage.getItem(ARCHIVE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function saveArchive(records) {
  try {
    localStorage.setItem(ARCHIVE_KEY, JSON.stringify(records));
  } catch (e) {
  }
}

function saveArchiveRecord(record) {
  const records = loadArchive();
  records.unshift({
    ...record,
    timestamp: Date.now()
  });
  if (records.length > ARCHIVE_LIMIT) {
    records.length = ARCHIVE_LIMIT;
  }
  saveArchive(records);
}

function clearArchive() {
  if (!confirm("确定要清空所有值班档案吗？此操作不可撤销。")) return;
  saveArchive([]);
  renderArchive();
}

function formatDate(timestamp) {
  const d = new Date(timestamp);
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function renderArchive() {
  const records = loadArchive();
  if (records.length === 0) {
    archiveEmptyEl.classList.remove("hidden");
    archiveListEl.innerHTML = "";
    return;
  }
  archiveEmptyEl.classList.add("hidden");
  archiveListEl.innerHTML = "";
  records.forEach((record) => {
    const card = document.createElement("div");
    card.className = "archive-card";
    card.innerHTML = `
      <div class="archive-card-head">
        <span class="archive-card-mission">${record.missionName}</span>
        <span class="archive-card-tag ${record.success ? "success" : "fail"}">${record.success ? "通关" : "失败"}</span>
      </div>
      <div class="archive-card-date">${formatDate(record.timestamp)} · 第 ${record.day} 天</div>
      <div class="archive-card-stats">
        <span>柴油<strong>${record.fuel}</strong></span>
        <span>食物<strong>${record.food}</strong></span>
        <span>士气<strong>${record.morale}</strong></span>
      </div>
      <div class="archive-card-stats">
        <span>数据<strong>${record.data}</strong></span>
        <span style="grid-column: span 2;">评分<strong>${record.score}</strong></span>
      </div>
      <div class="archive-card-score">综合评分：${record.score}</div>
      <p class="archive-card-ending">${record.ending}</p>
    `;
    archiveListEl.appendChild(card);
  });
}

init();
