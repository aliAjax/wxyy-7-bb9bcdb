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
const crewPanelEl = document.getElementById("crewPanel");
const crewCardsEl = document.getElementById("crewCards");
const crewHeatEl = document.getElementById("crewHeat");
const crewCommEl = document.getElementById("crewComm");
const crewLabEl = document.getElementById("crewLab");
const crewFoodEl = document.getElementById("crewFood");
const crewRestEl = document.getElementById("crewRest");

const workshopPanelEl = document.getElementById("workshopPanel");
const equipmentCardsEl = document.getElementById("equipmentCards");

const samplesPanelEl = document.getElementById("samplesPanel");
const sampleCardsEl = document.getElementById("sampleCards");
const sampleIntegrityEl = document.getElementById("sampleIntegrity");
const sampleTotalValueEl = document.getElementById("sampleTotalValue");

const emergencyOverlay = document.getElementById("emergencyOverlay");
const emergencyIcon = document.getElementById("emergencyIcon");
const emergencyName = document.getElementById("emergencyName");
const emergencyDesc = document.getElementById("emergencyDesc");
const emergencyOptions = document.getElementById("emergencyOptions");
const emergencyDayInfo = document.getElementById("emergencyDayInfo");

const tutorialOverlay = document.getElementById("tutorialOverlay");
const tutorialHighlight = document.getElementById("tutorialHighlight");
const tutorialCard = document.getElementById("tutorialCard");
const tutorialTitle = document.getElementById("tutorialTitle");
const tutorialDesc = document.getElementById("tutorialDesc");
const tutorialStepNum = document.getElementById("tutorialStepNum");
const tutorialStepTotal = document.getElementById("tutorialStepTotal");
const tutorialSystems = document.getElementById("tutorialSystems");
const tutorialSkipBtn = document.getElementById("tutorialSkipBtn");
const tutorialPrevBtn = document.getElementById("tutorialPrevBtn");
const tutorialNextBtn = document.getElementById("tutorialNextBtn");

const ARCHIVE_KEY = "polar_station_archive";
const ARCHIVE_LIMIT = 20;
const TUTORIAL_KEY = "polar_station_tutorial_done";

const systems = [
  { id: "heat", name: "供暖", hint: "低于要求会冻伤士气，保障天文观测样本" },
  { id: "comm", name: "通信", hint: "保持求援和天气联系，保障气溶胶样本" },
  { id: "lab", name: "实验", hint: "产出各类科研样本（样本价值等价计入数据）" },
  { id: "food", name: "食物储藏", hint: "低于2会损耗食物，保障冰芯/生物样本冷藏" }
];

const equipmentDefs = [
  { id: "heat", name: "供暖锅炉", icon: "🔥", baseDurLoss: 6, repairFuel: 5, upgradeFuel: 12, upgradeData: 10, maxLevel: 3 },
  { id: "comm", name: "通信天线", icon: "📡", baseDurLoss: 5, repairFuel: 5, upgradeFuel: 10, upgradeData: 12, maxLevel: 3 },
  { id: "lab", name: "实验仪器", icon: "🔬", baseDurLoss: 4, repairFuel: 6, upgradeFuel: 8, upgradeData: 15, maxLevel: 3 },
  { id: "food", name: "冷库机组", icon: "🧊", baseDurLoss: 5, repairFuel: 5, upgradeFuel: 10, upgradeData: 8, maxLevel: 3 }
];

const sampleTypes = [
  {
    id: "icecore",
    name: "冰芯样本",
    icon: "🧊",
    desc: "钻探自深层冰盖，封存着远古气候信号",
    value: 15,
    color: "#6267a6",
    preserveReq: { food: 4 },
    preserveHint: "需食物储藏电力≥4维持低温冷藏",
    lossWhenFail: 28,
    labPowerThreshold: 3,
    labPowerBonus: 1.6
  },
  {
    id: "aerosol",
    name: "气溶胶样本",
    icon: "💨",
    desc: "极地大气微颗粒采样，需实时通信同步坐标",
    value: 12,
    color: "#357a90",
    preserveReq: { comm: 3 },
    preserveHint: "需通信电力≥3保持数据链路在线",
    lossWhenFail: 22,
    labPowerThreshold: 2,
    labPowerBonus: 1.3
  },
  {
    id: "astronomy",
    name: "天文观测记录",
    icon: "🔭",
    desc: "极光与宇宙射线观测，需稳定温度保护感光元件",
    value: 14,
    color: "#29464d",
    preserveReq: { heat: 3 },
    preserveHint: "需供暖电力≥3维持观测舱恒温",
    lossWhenFail: 25,
    labPowerThreshold: 4,
    labPowerBonus: 1.8
  },
  {
    id: "biotrace",
    name: "生物痕迹样本",
    icon: "🧬",
    desc: "极地微生物与冰层足迹，需多重条件保障",
    value: 20,
    color: "#4f8a5b",
    preserveReq: { food: 3, heat: 2, comm: 2 },
    preserveHint: "需冷藏+恒温+监控三重保障",
    lossWhenFail: 35,
    labPowerThreshold: 5,
    labPowerBonus: 2.2
  }
];

const sampleLossWarnThreshold = 15;

const weatherDurMultiplier = { "晴朗": 1.0, "低温": 1.3, "暴风雪": 1.8, "极夜静风": 1.1 };

const stations = [
  { id: "heat", name: "供暖", icon: "🔥", desc: "维护暖气" },
  { id: "comm", name: "通信", icon: "📡", desc: "值守电台" },
  { id: "lab", name: "实验", icon: "🔬", desc: "操作仪器" },
  { id: "food", name: "储藏", icon: "🧊", desc: "检查冷库" },
  { id: "rest", name: "休息", icon: "😴", desc: "养精蓄锐" }
];

const crewTemplates = [
  {
    id: "zhao",
    name: "赵工程师",
    specialty: "heat",
    specialtyName: "供暖专长",
    initialFatigue: 15,
    initialMood: 70,
    avatar: "🧑‍🔧"
  },
  {
    id: "qian",
    name: "钱通讯员",
    specialty: "comm",
    specialtyName: "通信专长",
    initialFatigue: 10,
    initialMood: 75,
    avatar: "👩‍💻"
  },
  {
    id: "sun",
    name: "孙研究员",
    specialty: "lab",
    specialtyName: "实验专长",
    initialFatigue: 20,
    initialMood: 65,
    avatar: "👨‍🔬"
  },
  {
    id: "li",
    name: "李营养师",
    specialty: "food",
    specialtyName: "储藏专长",
    initialFatigue: 12,
    initialMood: 72,
    avatar: "👩‍🍳"
  }
];

const crewSpecialtyBonus = {
  heat: { fuelSave: 3, moraleBoost: 2 },
  comm: { dataBoost: 4, moraleBoost: 1 },
  lab: { dataBoost: 6 },
  food: { foodSave: 4, moraleBoost: 1 }
};

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
    desc: "标准值守任务，维持科考站日常运转，撑过7天等待换班。实验电力分配将产出各类科研样本，样本价值计入最终成果。",
    color: "#29464d",
    days: 7,
    initial: { fuel: 80, morale: 75, food: 70, data: 0 },
    allocations: { heat: 3, comm: 2, lab: 4, food: 3 },
    dataGoal: 150,
    dataPerLab: 0,
    weatherWeight: null,
    intro: "值班开始，目标是撑过7天并尽量产出高价值科研样本。实验电力用于产出样本，样本价值等价计入数据总量。",
    successText: (s) =>
      `科考站撑过了7天，直升机抵达，样本和数据都被带回基地。科研成果（数据+样本价值）：${s.data}，最终评分：${s.score}。`,
    failText: (s) =>
      `值班失败，某项关键资源归零，任务提前中止。仅获得科研成果 ${s.data}，最终评分：${s.score}。`
  },
  {
    id: "weather",
    name: "气象观测专项",
    tag: "通信优先",
    desc: "连续记录极地气象数据，需要通信系统持续在线传输实时报文，并采集大气气溶胶样本。通信在线额外奖励数据。",
    color: "#357a90",
    days: 7,
    initial: { fuel: 70, morale: 70, food: 65, data: 0 },
    allocations: { heat: 3, comm: 3, lab: 3, food: 3 },
    dataGoal: 180,
    dataPerLab: 0,
    commBonus: 3,
    intro: "气象观测任务启动，保持通信畅通以获得额外观测数据，并分配足够电力产出气溶胶样本。目标科研成果≥180。",
    successText: (s) =>
      s.data >= s.mission.dataGoal
        ? `气象观测圆满完成！科研成果 ${s.data}（含大量气溶胶样本），数据质量优秀。最终评分：${s.score}。`
        : `撑过了7天，但科研成果仅 ${s.data}（目标≥${s.mission.dataGoal}），观测报告不够完整。最终评分：${s.score}。`,
    failText: (s) =>
      `气象任务中断，某项资源归零。仅获得科研成果 ${s.data}。最终评分：${s.score}。`
  },
  {
    id: "icecore",
    name: "冰芯采样远征",
    tag: "实验优先",
    desc: "钻探深层冰芯并在实验舱内分析，实验室电力越高，越有机会产出高价值冰芯样本。冰芯样本需要充足冷藏电力保存。",
    color: "#6267a6",
    days: 7,
    initial: { fuel: 85, morale: 80, food: 60, data: 0 },
    allocations: { heat: 4, comm: 2, lab: 4, food: 2 },
    dataGoal: 220,
    dataPerLab: 0,
    weatherWeight: { 暴风雪: 3, 晴朗: 1, 低温: 2, 极夜静风: 2 },
    intro: "冰芯采样任务启动，分配更多电力给实验舱以获取高质量冰芯样本，并确保冷藏电力充足防止样本融化。目标科研成果≥220。",
    successText: (s) =>
      s.data >= s.mission.dataGoal
        ? `冰芯采样大获成功！科研成果 ${s.data}，大量高价值冰芯样本被完整封装，发现远古气候信号。最终评分：${s.score}。`
        : `顺利返程，但科研成果仅 ${s.data}（目标≥${s.mission.dataGoal}），冰芯样本价值有限。最终评分：${s.score}。`,
    failText: (s) =>
      `冰芯远征被迫中止，资源耗尽。仅保留了科研成果 ${s.data}。最终评分：${s.score}。`
  },
  {
    id: "relay",
    name: "通信中继保障",
    tag: "士气优先",
    desc: "作为跨极区通信中继节点，稳定的信号能提振全体队员士气。通信在线可阻止士气下降，同时兼顾样本采集。",
    color: "#c85f46",
    days: 7,
    initial: { fuel: 75, morale: 85, food: 80, data: 0 },
    allocations: { heat: 3, comm: 3, lab: 3, food: 3 },
    dataGoal: 130,
    dataPerLab: 0,
    commMoraleBonus: true,
    foodReserve: true,
    intro: "通信中继任务启动，维持通信在线可阻止士气下降，甚至提振人心。兼顾样本产出，目标科研成果≥130。",
    successText: (s) =>
      s.data >= s.mission.dataGoal
        ? `跨极区通信中继全程在线！科研成果 ${s.data} 成功转发，队员状态极佳，样本保存完好。最终评分：${s.score}。`
        : `中继站撑过了7天，但科研成果 ${s.data} 未达目标（≥${s.mission.dataGoal}），部分样本和信号丢失。最终评分：${s.score}。`,
    failText: (s) =>
      `通信中继站失守，中继任务失败。仅获得科研成果 ${s.data}。最终评分：${s.score}。`
  }
];

const emergencyEvents = [
  {
    id: "antenna_ice",
    name: "天线结冰",
    icon: "❄️",
    desc: "室外天线被厚重的冰层覆盖，通信信号时断时续，若不处理将严重影响数据传输。",
    options: [
      {
        label: "启动除冰加热",
        desc: "消耗额外柴油对天线加热除冰，通信和数据传输恢复。",
        effects: { fuel: -6, morale: 2, data: 4 }
      },
      {
        label: "手动攀塔除冰",
        desc: "派队员冒着严寒手动清除冰层，省油但风险大。",
        effects: { fuel: -2, morale: -8, data: 2 }
      },
      {
        label: "暂时关闭天线",
        desc: "关闭天线节省资源，通信中断，数据无法传出。",
        effects: { fuel: 0, morale: -5, data: -8 }
      }
    ]
  },
  {
    id: "cold_storage",
    name: "样本冷藏故障",
    icon: "🧊",
    desc: "实验舱样本冷藏设备压缩机停转，冰芯样本温度正在上升，急需处置。",
    options: [
      {
        label: "紧急供电修复",
        desc: "调配大量电力重启压缩机，样本安全但柴油消耗巨大。",
        effects: { fuel: -9, morale: 2, data: 0 }
      },
      {
        label: "转移样本至备用冷柜",
        desc: "快速转移样本，部分样本可能因温度波动受损。",
        effects: { fuel: -3, morale: -2, data: -10 }
      },
      {
        label: "放弃冷藏修复",
        desc: "节省资源不管它，样本将大面积损毁。",
        effects: { fuel: 0, morale: -6, data: -22 }
      }
    ]
  },
  {
    id: "insomnia",
    name: "队员失眠",
    icon: "😩",
    desc: "多名队员连续失眠，精神状态极差，影响工作效率和站内氛围。",
    options: [
      {
        label: "调配热饮和休息时间",
        desc: "消耗额外食物，为队员提供热饮和灵活休息安排。",
        effects: { food: -7, morale: 6, data: 0 }
      },
      {
        label: "集体心理疏导",
        desc: "花时间组织团体疏导，占用部分工作精力。",
        effects: { food: 0, morale: 4, nextDayPowerPenalty: 1 }
      },
      {
        label: "硬扛过去",
        desc: "不采取额外措施，队员自行调整。",
        effects: { food: 0, morale: -12, data: -3 }
      }
    ]
  },
  {
    id: "fuel_line",
    name: "燃油管路异常",
    icon: "⚠️",
    desc: "供油管路压力读数异常波动，疑似管路微裂或阀门松动，有泄漏风险。",
    options: [
      {
        label: "全面检修管路",
        desc: "彻底排查并更换管件，消耗大量柴油但一劳永逸。",
        effects: { fuel: -10, morale: 3, data: 0 }
      },
      {
        label: "临时补漏处理",
        desc: "快速应急修补，节省资源但隐患犹存。",
        effects: { fuel: -4, morale: -2, nextDayFuelRisk: 8 }
      },
      {
        label: "忽略异常继续运行",
        desc: "节省资源不做处理，赌一把不会出大问题。",
        effects: { fuel: 0, morale: -3, nextDayFuelRisk: 16 }
      }
    ]
  }
];

const EMERGENCY_CHANCE = 0.4;

let state;
let tutorialActive = false;
let tutorialCurrentStep = 0;
let emergencyPending = null;

const tutorialSteps = [
  {
    title: "第一步：看懂今日天气需求",
    desc: "每天会随机出现不同天气，决定你需要应对的最低供暖格数、最低通信格数，以及当日可分配的电力上限。\n\n比如「暴风雪」天，供暖至少要5格，通信至少要3格，可用电力会被压缩到10。未达最低要求会扣士气并损坏样本，务必优先保证。",
    targetSelector: ".station",
    cardPosition: "below",
    showSystems: false
  },
  {
    title: "第二步：为四个系统分配电力",
    desc: "拖动下方四个滑块分配当天有限的电力。总和不得超过天气给出的可用电力（超出时会报错无法结束当天）。\n\n⚠️ 关键：实验电力只用于产出科研样本，数据来自样本产出等价转换+通信奖励。供暖/通信/冷藏不足会损坏已有样本！",
    targetSelector: "#controlsPanel",
    cardPosition: "above",
    showSystems: true
  },
  {
    title: "第三步：结束今天，观察资源变化",
    desc: "点击「结束今天」后，系统按你分配的电力结算：\n• 未满足供暖/通信最低要求 → 扣士气+损坏样本\n• 电力总和 + 天气附加 → 消耗柴油\n• 食物储藏电力不足 → 食物加速损耗+冰芯样本融化\n• 实验室电力 → 产出科研样本（价值等价计入数据）\n• 通信在线 → 获得额外观测数据\n\n然后进入下一天，直到任务结束或某项资源归零失败。",
    targetSelector: ".dashboard",
    cardPosition: "below",
    showSystems: false
  }
];

const systemColors = {
  heat: { bg: "#c85f46", name: "供暖", note: "低于天气要求 → 士气大降，天文样本损坏" },
  comm: { bg: "#357a90", name: "通信", note: "在线奖励：额外观测数据，保障气溶胶" },
  lab: { bg: "#6267a6", name: "实验", note: "电力越高 → 产出越多高价值样本" },
  food: { bg: "#4f8a5b", name: "食物储藏", note: "电力不足 → 食物损耗翻倍，冰芯样本融化" }
};

function isTutorialDone() {
  try {
    return localStorage.getItem(TUTORIAL_KEY) === "1";
  } catch (e) {
    return false;
  }
}

function markTutorialDone() {
  try {
    localStorage.setItem(TUTORIAL_KEY, "1");
  } catch (e) {}
}

function showTutorialStep(stepIndex) {
  if (stepIndex < 0 || stepIndex >= tutorialSteps.length) return;
  const step = tutorialSteps[stepIndex];

  tutorialStepNum.textContent = stepIndex + 1;
  tutorialStepTotal.textContent = tutorialSteps.length;
  tutorialTitle.textContent = step.title;
  tutorialDesc.textContent = step.desc;

  if (step.showSystems) {
    tutorialSystems.innerHTML = "";
    Object.keys(systemColors).forEach((key) => {
      const sys = systemColors[key];
      const item = document.createElement("div");
      item.className = "tutorial-sys-item";
      item.style.background = sys.bg;
      item.innerHTML = `${sys.name}<small>${sys.note}</small>`;
      tutorialSystems.appendChild(item);
    });
    tutorialSystems.classList.remove("hidden");
  } else {
    tutorialSystems.classList.add("hidden");
  }

  tutorialPrevBtn.disabled = stepIndex === 0;
  tutorialNextBtn.textContent = stepIndex === tutorialSteps.length - 1 ? "完成引导" : "下一步";

  const target = document.querySelector(step.targetSelector);
  if (target && target.offsetParent !== null) {
    positionHighlight(target);
    positionCard(step.cardPosition, target);
  } else {
    tutorialHighlight.style.display = "none";
    positionCardCenter();
  }
}

function positionHighlight(target) {
  const rect = target.getBoundingClientRect();
  const padding = 6;
  tutorialHighlight.style.display = "block";
  tutorialHighlight.style.left = rect.left - padding + "px";
  tutorialHighlight.style.top = rect.top - padding + "px";
  tutorialHighlight.style.width = rect.width + padding * 2 + "px";
  tutorialHighlight.style.height = rect.height + padding * 2 + "px";
}

function positionCard(position, target) {
  const rect = target.getBoundingClientRect();
  const cardWidth = Math.min(420, window.innerWidth - 32);
  tutorialCard.style.width = cardWidth + "px";
  const cardHeight = Math.min(
    tutorialCard.getBoundingClientRect().height,
    window.innerHeight - 32
  );
  const gap = 16;

  let left, top;

  if (window.innerWidth <= 900) {
    tutorialCard.style.left = "16px";
    tutorialCard.style.right = "16px";
    tutorialCard.style.bottom = "16px";
    tutorialCard.style.top = "auto";
    tutorialCard.style.transform = "none";
    return;
  }

  tutorialCard.style.right = "auto";
  tutorialCard.style.bottom = "auto";

  if (position === "below") {
    top = rect.bottom + gap;
    if (top + cardHeight > window.innerHeight - 16) {
      top = Math.max(16, rect.top - cardHeight - gap);
    }
  } else if (position === "above") {
    top = rect.top - cardHeight - gap;
    if (top < 16) {
      top = Math.min(window.innerHeight - cardHeight - 16, rect.bottom + gap);
    }
  } else {
    top = 16;
  }

  left = rect.left + rect.width / 2 - cardWidth / 2;
  left = Math.max(16, Math.min(window.innerWidth - cardWidth - 16, left));

  tutorialCard.style.left = left + "px";
  tutorialCard.style.top = top + "px";
  tutorialCard.style.transform = "none";
}

function positionCardCenter() {
  const cardWidth = Math.min(420, window.innerWidth - 32);
  tutorialCard.style.width = cardWidth + "px";
  tutorialCard.style.left = "50%";
  tutorialCard.style.top = "50%";
  tutorialCard.style.right = "auto";
  tutorialCard.style.bottom = "auto";
  tutorialCard.style.transform = "translate(-50%, -50%)";
}

function startTutorial() {
  if (tutorialActive) return;
  tutorialActive = true;
  tutorialCurrentStep = 0;
  tutorialOverlay.classList.remove("hidden");
  showTutorialStep(0);
  addLog("新手演练启动：按引导熟悉游戏玩法（可随时跳过）。");
  render();
}

function endTutorial() {
  tutorialActive = false;
  tutorialOverlay.classList.add("hidden");
  markTutorialDone();
}

function refreshTutorialHighlight() {
  if (!tutorialActive) return;
  const step = tutorialSteps[tutorialCurrentStep];
  const target = document.querySelector(step.targetSelector);
  if (target && target.offsetParent !== null) {
    positionHighlight(target);
    positionCard(step.cardPosition, target);
  } else {
    tutorialHighlight.style.display = "none";
    positionCardCenter();
  }
}

function initTutorialEvents() {
  tutorialSkipBtn.addEventListener("click", () => {
    endTutorial();
  });

  tutorialPrevBtn.addEventListener("click", () => {
    if (tutorialCurrentStep > 0) {
      tutorialCurrentStep--;
      showTutorialStep(tutorialCurrentStep);
    }
  });

  tutorialNextBtn.addEventListener("click", () => {
    if (tutorialCurrentStep >= tutorialSteps.length - 1) {
      endTutorial();
    } else {
      tutorialCurrentStep++;
      showTutorialStep(tutorialCurrentStep);
    }
  });

  window.addEventListener("resize", () => {
    refreshTutorialHighlight();
  });

  window.addEventListener("scroll", () => {
    refreshTutorialHighlight();
  }, true);
}

function createInitialCrew() {
  return crewTemplates.map((t) => ({
    id: t.id,
    name: t.name,
    specialty: t.specialty,
    specialtyName: t.specialtyName,
    avatar: t.avatar,
    fatigue: t.initialFatigue,
    mood: t.initialMood,
    station: null,
    previousStation: null,
    consecutiveDays: 0
  }));
}

function createInitialEquipment() {
  const eq = {};
  equipmentDefs.forEach((d) => { eq[d.id] = { durability: 100, level: 1 }; });
  return eq;
}

function createInitialSamples() {
  const samples = {};
  sampleTypes.forEach((t) => {
    samples[t.id] = {
      count: 0,
      integrity: 100,
      totalProduced: 0,
      totalLost: 0
    };
  });
  return samples;
}

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
    nextDayEffects: null,
    crew: createInitialCrew(),
    equipment: createInitialEquipment(),
    samples: createInitialSamples(),
    sampleValueLostToday: {},
    log: ["站内安静得只剩风声，等待选择任务。"]
  };
}

function init() {
  state = freshState();
  startBtn.addEventListener("click", start);
  endDayBtn.addEventListener("click", endDay);
  clearArchiveBtn.addEventListener("click", clearArchive);
  initTutorialEvents();
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
          目标：${mission.dataGoal ? `科研成果（数据+样本价值）≥ ${mission.dataGoal}` : `撑过 ${mission.days} 天`}
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
    nextDayEffects: null,
    crew: createInitialCrew(),
    equipment: createInitialEquipment(),
    samples: createInitialSamples(),
    sampleValueLostToday: {},
    log: [mission.intro]
  };
  resultEl.classList.add("hidden");
  missionDeskEl.classList.add("hidden");
  crewPanelEl.classList.remove("hidden");
  workshopPanelEl.classList.remove("hidden");
  samplesPanelEl.classList.remove("hidden");
  controlsPanelEl.classList.remove("hidden");
  autoAssignCrew();
  render();
  setTimeout(() => {
    refreshTutorialHighlight();
    if (!isTutorialDone() && !tutorialActive) {
      startTutorial();
    }
  }, 50);
}

function autoAssignCrew() {
  const unassigned = state.crew.filter((c) => c.station === null);
  const stationIds = ["heat", "comm", "lab", "food"];
  unassigned.forEach((member) => {
    if (stationIds.includes(member.specialty)) {
      const occupied = state.crew.some((c) => c.station === member.specialty);
      if (!occupied) {
        member.station = member.specialty;
      }
    }
  });
  const stillUnassigned = state.crew.filter((c) => c.station === null);
  const remainingStations = stationIds.filter((sid) => !state.crew.some((c) => c.station === sid));
  stillUnassigned.forEach((member, idx) => {
    if (remainingStations[idx]) {
      member.station = remainingStations[idx];
    } else {
      member.station = "rest";
    }
  });
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

function calculateEquipmentEffects() {
  const effects = {
    heatReqAdj: 0,
    commEfficiency: 1.0,
    labEfficiency: 1.0,
    foodLossAdj: 0,
    details: []
  };

  const heatEq = state.equipment.heat;
  if (heatEq.durability < 60) {
    const adj = Math.ceil((60 - heatEq.durability) / 20);
    effects.heatReqAdj += adj;
    effects.details.push(`供暖锅炉老化，最低供暖需求+${adj}`);
  }
  if (heatEq.level >= 2) effects.heatReqAdj -= 1;
  if (heatEq.level >= 3) effects.heatReqAdj -= 1;
  if (heatEq.level >= 2) effects.details.push(`供暖锅炉Lv${heatEq.level}，供暖需求-${heatEq.level - 1}`);

  const commEq = state.equipment.comm;
  if (commEq.durability < 60) {
    effects.commEfficiency = Math.max(0.3, commEq.durability / 60);
    effects.details.push(`通信天线老化，通信效率×${effects.commEfficiency.toFixed(1)}`);
  }
  if (commEq.level >= 2) effects.commEfficiency += 0.2;
  if (commEq.level >= 3) effects.commEfficiency += 0.3;
  if (commEq.level >= 2) effects.details.push(`通信天线Lv${commEq.level}，通信效率+${((commEq.level - 1) * 0.2 + (commEq.level >= 3 ? 0.1 : 0)).toFixed(1)}`);

  const labEq = state.equipment.lab;
  if (labEq.durability < 60) {
    effects.labEfficiency = Math.max(0.3, labEq.durability / 60);
    effects.details.push(`实验仪器老化，实验效率×${effects.labEfficiency.toFixed(1)}`);
  }
  if (labEq.level >= 2) effects.labEfficiency += 0.2;
  if (labEq.level >= 3) effects.labEfficiency += 0.3;
  if (labEq.level >= 2) effects.details.push(`实验仪器Lv${labEq.level}，实验效率+${((labEq.level - 1) * 0.2 + (labEq.level >= 3 ? 0.1 : 0)).toFixed(1)}`);

  const foodEq = state.equipment.food;
  if (foodEq.durability < 60) {
    const adj = Math.ceil((60 - foodEq.durability) / 15);
    effects.foodLossAdj += adj;
    effects.details.push(`冷库机组老化，食物损耗+${adj}`);
  }
  if (foodEq.level >= 2) effects.foodLossAdj -= 1;
  if (foodEq.level >= 3) effects.foodLossAdj -= 1;
  if (foodEq.level >= 2) effects.details.push(`冷库机组Lv${foodEq.level}，食物损耗-${foodEq.level - 1}`);

  return effects;
}

function produceSamples(labPower, labEfficiency, crewDataBoost) {
  const result = { produced: [], totalValueGained: 0, dataEquivalent: 0, details: [] };
  const alloc = state.allocations;
  sampleTypes.forEach((type) => {
    const s = state.samples[type.id];
    if (labPower < type.labPowerThreshold) return;
    const baseChance = 0.25 + (labPower - type.labPowerThreshold) * 0.12;
    const effMult = 0.8 + labEfficiency * 0.4;
    const crewBonus = crewDataBoost > 0 ? 1.15 : 1.0;
    const bonusMult = type.labPowerBonus !== undefined ? type.labPowerBonus : 1.0;
    const chance = Math.min(0.95, baseChance * effMult * crewBonus * bonusMult);
    const count = Math.random() < chance ? 1 : 0;
    if (count > 0) {
      const extra = Math.random() < (chance * 0.35) ? 1 : 0;
      const total = count + extra;
      s.count += total;
      s.integrity = Math.min(100, s.integrity + 2);
      s.totalProduced += total;
      const val = total * type.value;
      result.produced.push({ typeId: type.id, type, count: total, value: val });
      result.totalValueGained += val;
      result.dataEquivalent += val;
    }
  });
  return result;
}

function checkSamplePreservation(allocations, eqEffects) {
  const result = { damaged: [], totalIntegrityLost: 0, totalValueLost: 0, details: [] };
  sampleTypes.forEach((type) => {
    const s = state.samples[type.id];
    if (s.count <= 0) return;
    const req = type.preserveReq;
    let failedReqs = [];
    let shortfallRatio = 0;
    Object.keys(req).forEach((sysId) => {
      const needed = req[sysId];
      const have = allocations[sysId] || 0;
      if (have < needed) {
        failedReqs.push(sysId);
        shortfallRatio += (needed - have) / needed;
      }
    });
    if (failedReqs.length > 0) {
      const baseLoss = type.lossWhenFail;
      const weatherMult = state.weather.name === "暴风雪" ? 1.4 : state.weather.name === "低温" ? 1.2 : 1.0;
      const lossPct = Math.min(85, baseLoss * shortfallRatio * weatherMult * (0.6 + Math.random() * 0.8));
      const before = s.integrity;
      s.integrity = Math.max(0, Math.round(s.integrity - lossPct));
      const actualLoss = before - s.integrity;
      let lostCount = 0;
      if (s.integrity <= 25 && s.count > 0 && Math.random() < (1 - s.integrity / 100)) {
        lostCount = Math.min(s.count, 1 + Math.floor((100 - s.integrity) / 40));
      }
      if (lostCount > 0) {
        const lostVal = lostCount * type.value;
        s.count -= lostCount;
        s.totalLost += lostCount;
        result.totalValueLost += lostVal;
      }
      result.damaged.push({
        typeId: type.id,
        type,
        integrityLost: actualLoss,
        lostCount,
        lostValue: lostCount * type.value,
        failedReqs
      });
      result.totalIntegrityLost += actualLoss;
    } else if (s.integrity < 100) {
      s.integrity = Math.min(100, s.integrity + 3);
    }
  });
  return result;
}

function calculateSampleTotalValue() {
  let total = 0;
  let weightedIntegrity = 0;
  let totalWeight = 0;
  sampleTypes.forEach((type) => {
    const s = state.samples[type.id];
    const val = s.count * type.value;
    const integrityFactor = s.integrity / 100;
    total += val * integrityFactor;
    weightedIntegrity += s.integrity * val;
    totalWeight += val;
  });
  const avgIntegrity = totalWeight > 0 ? Math.round(weightedIntegrity / totalWeight) : 100;
  return { totalValue: Math.round(total), avgIntegrity };
}

function degradeEquipment() {
  const weatherMult = weatherDurMultiplier[state.weather.name] || 1.0;
  const degrades = [];
  equipmentDefs.forEach((def) => {
    const eq = state.equipment[def.id];
    let loss = def.baseDurLoss * weatherMult;

    let lowPowerMult = 1.0;
    if (def.id === "heat" && state.allocations.heat < state.weather.heat) lowPowerMult = 1.5;
    if (def.id === "comm" && state.allocations.comm < state.weather.comm) lowPowerMult = 1.5;
    if (def.id === "lab" && state.allocations.lab < 2) lowPowerMult = 1.4;
    if (def.id === "food" && state.allocations.food < 2) lowPowerMult = 1.4;

    loss *= lowPowerMult;
    const before = eq.durability;
    eq.durability = Math.max(0, Math.round(eq.durability - loss));
    const actualLoss = before - eq.durability;
    if (actualLoss > 0) degrades.push(`${def.icon}${def.name}-${actualLoss}`);
  });
  return degrades;
}

function repairEquipment(eqId) {
  const def = equipmentDefs.find((d) => d.id === eqId);
  const eq = state.equipment[eqId];
  if (!def || !eq) return;
  if (eq.durability >= 100) return;
  if (state.fuel < def.repairFuel) return;

  state.fuel -= def.repairFuel;
  eq.durability = Math.min(100, eq.durability + 25);
  addLog(`维修${def.name}：消耗柴油${def.repairFuel}，耐久恢复至${eq.durability}。`);
  render();
}

function upgradeEquipment(eqId) {
  const def = equipmentDefs.find((d) => d.id === eqId);
  const eq = state.equipment[eqId];
  if (!def || !eq) return;
  if (eq.level >= def.maxLevel) return;

  const costFuel = def.upgradeFuel * eq.level;
  const costData = def.upgradeData * eq.level;
  if (state.fuel < costFuel || state.data < costData) return;

  state.fuel -= costFuel;
  state.data -= costData;
  eq.level += 1;
  eq.durability = Math.min(100, eq.durability + 10);
  addLog(`升级${def.name}至Lv${eq.level}：消耗柴油${costFuel}、数据${costData}。`);
  render();
}

function endDay() {
  if (!state.started) return;
  const spent = totalPower();
  if (spent > state.weather.power) {
    addLog("电力分配超出今日可用上限，柴油机撑不住。");
    render();
    return;
  }

  const crewEffects = calculateCrewEffects();
  const eqEffects = calculateEquipmentEffects();

  let fuelCost = spent + (state.weather.name === "暴风雪" ? 4 : 2);
  const baseFuelCost = fuelCost;
  fuelCost = Math.max(1, fuelCost - crewEffects.fuelSave);
  state.fuel -= fuelCost;

  const effectiveHeatReq = Math.max(1, state.weather.heat + eqEffects.heatReqAdj);
  const heatGap = Math.max(0, effectiveHeatReq - state.allocations.heat);
  const commGap = Math.max(0, state.weather.comm - state.allocations.comm);
  const commOk = state.allocations.comm >= state.weather.comm;

  const baseMoraleLoss = heatGap * 9 + commGap * 5;
  state.morale -= baseMoraleLoss;

  let commMoraleGain = 0;
  if (state.mission.commMoraleBonus && commOk) {
    commMoraleGain = 3;
    state.morale += commMoraleGain;
  }
  state.morale += crewEffects.moraleBoost;

  let foodLoss = state.mission.foodReserve
    ? Math.max(2, 6 - state.allocations.food)
    : Math.max(3, 8 - state.allocations.food);
  const baseFoodLoss = foodLoss;
  foodLoss = Math.max(1, foodLoss - crewEffects.foodSave);
  const crewFoodSave = baseFoodLoss - foodLoss;
  foodLoss += eqEffects.foodLossAdj;
  const eqFoodLoss = eqEffects.foodLossAdj;
  foodLoss = Math.max(1, foodLoss);
  state.food -= foodLoss;

  state.sampleValueLostToday = {};
  const sampleResult = produceSamples(state.allocations.lab, eqEffects.labEfficiency, crewEffects.dataBoost);
  const sampleDamage = checkSamplePreservation(state.allocations, eqEffects);
  state.sampleValueLostToday = sampleDamage;

  let dataGain = 0;
  const baseDataGain = 0;
  let commDataGain = 0;
  if (commOk) {
    commDataGain = Math.round(2 * eqEffects.commEfficiency);
    dataGain += commDataGain;
  }
  let missionCommBonus = 0;
  if (state.mission.commBonus && commOk) {
    missionCommBonus = Math.round(state.mission.commBonus * eqEffects.commEfficiency);
    dataGain += missionCommBonus;
  }
  dataGain += crewEffects.dataBoost;
  const sampleDataGain = sampleResult.dataEquivalent;
  dataGain += sampleDataGain;
  state.data += dataGain;

  const durDegrades = degradeEquipment();

  updateCrewAfterDay();

  const crewLog = formatCrewDayLog(crewEffects);
  const eventText = randomEvent();
  addLog(`第${state.day}天结束：${crewLog}`);
  if (crewEffects.fatigueWarns.length > 0) {
    crewEffects.fatigueWarns.forEach((w) => addLog(`⚠ ${w}`));
  }

  const settlementLines = [];
  settlementLines.push(`【资源结算】`);
  settlementLines.push(`• 柴油消耗：${baseFuelCost}（基础）${crewEffects.fuelSave > 0 ? ` - ${crewEffects.fuelSave}（队员节省）` : ''} = ${fuelCost}`);
  if (baseMoraleLoss > 0) settlementLines.push(`• 士气损失：${baseMoraleLoss}（供暖缺口×9 + 通信缺口×5）`);
  if (commMoraleGain > 0) settlementLines.push(`• 士气增益：+${commMoraleGain}（通信中继任务奖励）`);
  if (crewEffects.moraleBoost > 0) settlementLines.push(`• 士气增益：+${crewEffects.moraleBoost}（队员专长）`);
  settlementLines.push(`• 食物损耗：${baseFoodLoss}（基础）${crewFoodSave > 0 ? ` - ${crewFoodSave}（队员节省）` : ''}${eqFoodLoss > 0 ? ` + ${eqFoodLoss}（冷库老化）` : eqFoodLoss < 0 ? ` ${eqFoodLoss}（冷库升级）` : ''} = ${foodLoss}`);
  const dataParts = [];
  if (sampleDataGain > 0) dataParts.push(`${sampleDataGain}（样本产出等价）`);
  if (commDataGain > 0) dataParts.push(`+${commDataGain}（通信在线）`);
  if (missionCommBonus > 0) dataParts.push(`+${missionCommBonus}（任务奖励）`);
  if (crewEffects.dataBoost > 0) dataParts.push(`+${crewEffects.dataBoost}（队员专长）`);
  settlementLines.push(`• 数据产出：${dataParts.length ? dataParts.join(' ') : '0（未产出样本）'} = ${dataGain}`);

  if (eqEffects.details.length > 0) {
    settlementLines.push(`【设备状态】${eqEffects.details.join('；')}`);
  }
  if (durDegrades.length > 0) {
    settlementLines.push(`【设备损耗】${durDegrades.join('，')}`);
  }

  if (sampleResult.produced.length > 0) {
    const parts = sampleResult.produced.map((p) => `${p.type.icon}${p.type.name}×${p.count}(+${p.value}分)`);
    settlementLines.push(`【样本产出】${parts.join('，')}，总价值+${sampleResult.totalValueGained}`);
  } else if (state.allocations.lab > 0) {
    settlementLines.push(`【样本产出】今日实验室电力${state.allocations.lab}格，未产出合格样本（部分样本对实验室电力门槛有要求）`);
  }
  if (sampleDamage.damaged.length > 0) {
    const dmgParts = sampleDamage.damaged.map((d) => {
      const reqNames = d.failedReqs.map((r) => {
        const map = { heat: '供暖', comm: '通信', lab: '实验', food: '冷藏' };
        return map[r] || r;
      }).join('+');
      let desc = `${d.type.icon}${d.type.name}完整度-${d.integrityLost}`;
      if (d.lostCount > 0) desc += `，损毁${d.lostCount}份(-${d.lostValue}分)`;
      desc += `【${reqNames}不足】`;
      return desc;
    });
    settlementLines.push(`【样本损坏】${dmgParts.join('，')}`);
    if (sampleDamage.totalValueLost > 0) {
      settlementLines.push(`【样本价值损失】总计-${sampleDamage.totalValueLost}分`);
    }
  }

  settlementLines.forEach((line) => addLog(line));
  addLog(`随机事件：${eventText}`);

  if (state.fuel <= 0 || state.food <= 0 || state.morale <= 0) {
    finish(false);
    return;
  }

  if (state.day >= state.mission.days) {
    finish(true);
    return;
  }

  if (Math.random() < EMERGENCY_CHANCE) {
    const evt = emergencyEvents[Math.floor(Math.random() * emergencyEvents.length)];
    addLog(`⚠ 突发事件：${evt.name}！`);
    showEmergencyEvent(evt);
    render();
    return;
  }

  state.day += 1;
  state.weather = pickWeatherForMission(state.mission);
  applyNextDayEffects();
  normalize();
  render();
  setTimeout(refreshTutorialHighlight, 50);
}

function applyNextDayEffects() {
  if (!state.nextDayEffects) return;
  const fx = state.nextDayEffects;
  if (fx.powerPenalty && fx.powerPenalty > 0) {
    state.weather = { ...state.weather, power: Math.max(4, state.weather.power - fx.powerPenalty) };
    addLog(`突发事件余波：今日可用电力减少${fx.powerPenalty}格。`);
  }
  if (fx.fuelRisk && fx.fuelRisk > 0) {
    if (Math.random() < 0.5) {
      state.fuel -= fx.fuelRisk;
      addLog(`燃油管路隐患爆发，额外损失${fx.fuelRisk}点柴油！`);
    } else {
      addLog("燃油管路暂时平稳，未发生泄漏。");
    }
  }
  state.nextDayEffects = null;
}

function showEmergencyEvent(event) {
  emergencyPending = event;
  emergencyIcon.textContent = event.icon;
  emergencyName.textContent = event.name;
  emergencyDesc.textContent = event.desc;
  emergencyDayInfo.textContent = `第${state.day}天 · 突发事件`;

  emergencyOptions.innerHTML = "";
  event.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "emergency-option";
    const tags = [];
    if (opt.effects.fuel) tags.push(`柴油${opt.effects.fuel > 0 ? "+" : ""}${opt.effects.fuel}`);
    if (opt.effects.food) tags.push(`食物${opt.effects.food > 0 ? "+" : ""}${opt.effects.food}`);
    if (opt.effects.morale) tags.push(`士气${opt.effects.morale > 0 ? "+" : ""}${opt.effects.morale}`);
    if (opt.effects.data) tags.push(`数据${opt.effects.data > 0 ? "+" : ""}${opt.effects.data}`);
    if (opt.effects.nextDayPowerPenalty) tags.push(`次日电力-${opt.effects.nextDayPowerPenalty}`);
    if (opt.effects.nextDayFuelRisk) tags.push(`次日漏油风险`);
    btn.innerHTML = `<strong>${opt.label}</strong><span class="emergency-option-desc">${opt.desc}</span><span class="emergency-option-tags">${tags.join("　")}</span>`;
    btn.addEventListener("click", () => handleEmergencyChoice(idx));
    emergencyOptions.appendChild(btn);
  });

  emergencyOverlay.classList.remove("hidden");
}

function handleEmergencyChoice(idx) {
  const event = emergencyPending;
  const opt = event.options[idx];
  const fx = opt.effects;

  if (fx.fuel) state.fuel += fx.fuel;
  if (fx.food) state.food += fx.food;
  if (fx.morale) state.morale += fx.morale;
  if (fx.data) state.data += fx.data;

  if (fx.nextDayPowerPenalty || fx.nextDayFuelRisk) {
    if (!state.nextDayEffects) state.nextDayEffects = {};
    if (fx.nextDayPowerPenalty) state.nextDayEffects.powerPenalty = fx.nextDayPowerPenalty;
    if (fx.nextDayFuelRisk) state.nextDayEffects.fuelRisk = (state.nextDayEffects.fuelRisk || 0) + fx.nextDayFuelRisk;
  }

  normalize();
  addLog(`【突发事件·${event.name}】选择「${opt.label}」— ${opt.desc}`);

  emergencyPending = null;
  emergencyOverlay.classList.add("hidden");

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
  applyNextDayEffects();
  normalize();
  render();
  setTimeout(refreshTutorialHighlight, 50);
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
  const sampleStats = calculateSampleTotalValue();
  const sampleValue = sampleStats.totalValue;
  const sampleIntegrity = sampleStats.avgIntegrity;
  const score = Math.max(
    0,
    state.data + state.fuel + state.food + state.morale + sampleValue
  );
  const summary = { score, data: state.data, mission: state.mission, sampleValue, sampleIntegrity };
  const resultText = success
    ? state.mission.successText(summary)
    : state.mission.failText(summary);
  let sampleBreakdown = "";
  sampleTypes.forEach((t) => {
    const s = state.samples[t.id];
    if (s.totalProduced > 0 || s.count > 0) {
      sampleBreakdown += `${t.icon}${t.name}：现存${s.count}份(完整度${s.integrity}%)，共产出${s.totalProduced}份，损毁${s.totalLost}份；`;
    }
  });
  saveArchiveRecord({
    success: success,
    missionName: state.mission.name,
    day: state.day,
    fuel: state.fuel,
    food: state.food,
    morale: state.morale,
    data: state.data,
    sampleValue: sampleValue,
    sampleIntegrity: sampleIntegrity,
    score: score,
    ending: resultText
  });
  const goalLine = state.mission.dataGoal
    ? `<p class="result-goal">任务目标：科研成果（数据+样本价值）≥ ${state.mission.dataGoal}，实际：${state.data}，${
        state.data >= state.mission.dataGoal ? "✅ 达成" : "❌ 未达成"
      }</p>`
    : "";
  const sampleScoreLine = sampleValue > 0 || sampleBreakdown
    ? `<p class="result-goal" style="background:rgba(143,169,174,0.25)">科研样本贡献分：+${sampleValue}（加权完整度${sampleIntegrity}%）</p>`
    : "";
  const sampleDetailLine = sampleBreakdown
    ? `<p style="font-size:13px;line-height:1.7;color:#c5d7da;margin-top:8px">${sampleBreakdown}</p>`
    : "";
  resultEl.innerHTML = `
    <h2>${success ? "任务结束" : "任务失败"}</h2>
    <p>${state.mission.name}</p>
    ${goalLine}
    ${sampleScoreLine}
    <p>柴油${state.fuel}，食物${state.food}，士气${state.morale}，科研成果${state.data}，样本价值${sampleValue}。</p>
    ${sampleDetailLine}
    <p>${resultText}</p>
    <button id="returnBtn" type="button">返回任务选择台</button>
  `;
  resultEl.classList.remove("hidden");
  crewPanelEl.classList.add("hidden");
  workshopPanelEl.classList.add("hidden");
  samplesPanelEl.classList.add("hidden");
  controlsPanelEl.classList.add("hidden");
  document.getElementById("returnBtn").addEventListener("click", () => {
    state = freshState();
    resultEl.classList.add("hidden");
    missionDeskEl.classList.remove("hidden");
    crewPanelEl.classList.add("hidden");
    workshopPanelEl.classList.add("hidden");
    samplesPanelEl.classList.add("hidden");
    controlsPanelEl.classList.add("hidden");
    renderMissionCards();
    startBtn.disabled = true;
    render();
    if (tutorialActive) endTutorial();
  });
  addLog(success ? "任务周期结束，结果如上。" : "某项关键资源归零，任务提前中止。");
  renderArchive();
  render();
  if (tutorialActive) endTutorial();
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
  if (state.started && state.equipment) {
    document.querySelectorAll(".module").forEach((el) => {
      const sysId = el.classList[1];
      const eq = state.equipment[sysId];
      if (eq) {
        const durColor = eq.durability >= 60 ? "" : eq.durability >= 30 ? "⚠" : "‼";
        el.querySelector(".eq-dur-indicator")?.remove();
        const indicator = document.createElement("span");
        indicator.className = "eq-dur-indicator";
        indicator.textContent = ` ${durColor}${eq.durability}`;
        el.appendChild(indicator);
      }
    });
  }
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
    const labPower = state.allocations.lab;
    const unlockTypes = sampleTypes.filter(t => labPower >= t.labPowerThreshold).length;
    if (unlockTypes > 0) {
      const names = sampleTypes.filter(t => labPower >= t.labPowerThreshold).map(t => t.icon).join("");
      extraHints.push(`实验${labPower}格可产出${unlockTypes}类样本${names}`);
    } else if (labPower > 0) {
      extraHints.push(`实验${labPower}格未达最低产出门槛（最低2格）`);
    }
    const crewPreview = previewCrewEffects();
    if (crewPreview.summary) extraHints.push(crewPreview.summary);
    const eqPreview = previewEquipmentEffects();
    if (eqPreview) extraHints.push(eqPreview);
    const effectiveHeatReq = Math.max(1, state.weather.heat + calculateEquipmentEffects().heatReqAdj);
    forecastEl.textContent = `今日${state.weather.name}，建议供暖至少${effectiveHeatReq}格（天气${state.weather.heat}+设备调整），通信至少${state.weather.comm}格。剩余电力投给实验产出样本（实验电力越高，样本类型越多、价值越高），食物储藏保障样本冷藏。${extraHints.length ? "【" + extraHints.join("，") + "】" : ""}`;
  } else {
    forecastEl.textContent = state.selectedMissionId
      ? "已选择任务，点击确认按钮进入电力分配。"
      : "请在上方任务选择台选择一项任务。";
  }
  if (state.started) {
    renderCrewCards();
    renderCrewSummary();
    renderEquipmentWorkshop();
    renderSamples();
  }
  renderAllocationValues();
  renderLog();
}

function previewEquipmentEffects() {
  if (!state.equipment) return "";
  const eqEffects = calculateEquipmentEffects();
  const parts = [];
  if (eqEffects.heatReqAdj !== 0) parts.push(`供暖需求${eqEffects.heatReqAdj > 0 ? "+" : ""}${eqEffects.heatReqAdj}`);
  if (eqEffects.commEfficiency !== 1.0) parts.push(`通信效率×${eqEffects.commEfficiency.toFixed(1)}`);
  if (eqEffects.labEfficiency !== 1.0) parts.push(`实验效率×${eqEffects.labEfficiency.toFixed(1)}`);
  if (eqEffects.foodLossAdj !== 0) parts.push(`食物损耗${eqEffects.foodLossAdj > 0 ? "+" : ""}${eqEffects.foodLossAdj}`);
  return parts.length ? `设备效果：${parts.join("，")}` : "";
}

function getEquipmentEffectDesc(def, eq) {
  const parts = [];
  if (def.id === "heat") {
    if (eq.durability < 60) parts.push(`老化：供暖需求+${Math.ceil((60 - eq.durability) / 20)}`);
    if (eq.level >= 2) parts.push(`Lv${eq.level}：供暖需求-${eq.level - 1}`);
    if (eq.durability >= 60 && eq.level < 2) parts.push("状态正常");
  }
  if (def.id === "comm") {
    let eff = 1.0;
    if (eq.durability < 60) eff = Math.max(0.3, eq.durability / 60);
    if (eq.level >= 2) eff += 0.2;
    if (eq.level >= 3) eff += 0.3;
    if (eff !== 1.0) parts.push(`通信效率×${eff.toFixed(1)}`);
    else parts.push("状态正常");
  }
  if (def.id === "lab") {
    let eff = 1.0;
    if (eq.durability < 60) eff = Math.max(0.3, eq.durability / 60);
    if (eq.level >= 2) eff += 0.2;
    if (eq.level >= 3) eff += 0.3;
    if (eff !== 1.0) parts.push(`实验效率×${eff.toFixed(1)}`);
    else parts.push("状态正常");
  }
  if (def.id === "food") {
    if (eq.durability < 60) parts.push(`老化：食物损耗+${Math.ceil((60 - eq.durability) / 15)}`);
    if (eq.level >= 2) parts.push(`Lv${eq.level}：食物损耗-${eq.level - 1}`);
    if (eq.durability >= 60 && eq.level < 2) parts.push("状态正常");
  }
  return parts.join("；");
}

function renderSamples() {
  if (!state.samples) return;
  sampleCardsEl.innerHTML = "";
  const sampleStats = calculateSampleTotalValue();
  sampleTotalValueEl.textContent = sampleStats.totalValue;
  sampleIntegrityEl.textContent = sampleStats.avgIntegrity + "%";

  sampleTypes.forEach((type) => {
    const s = state.samples[type.id];
    const reqNames = Object.keys(type.preserveReq).map((r) => {
      const map = { heat: '供暖', comm: '通信', lab: '实验', food: '冷藏' };
      return map[r] || r;
    }).join("+");
    const reqValues = Object.keys(type.preserveReq).map((r) => {
      const alloc = state.allocations[r] || 0;
      const needed = type.preserveReq[r];
      const ok = alloc >= needed;
      return `${ok ? "✅" : "⚠"}${mapReqName(r)}${alloc}/${needed}`;
    }).join(" ");
    const integrityColor = s.integrity >= 70 ? "#4f8a5b" : s.integrity >= 40 ? "#d18b3f" : "#d14c3f";
    const integrityFillColor = s.integrity >= 70 ? "#4f8a5b" : s.integrity >= 40 ? "#f2c14e" : "#d14c3f";
    const card = document.createElement("div");
    card.className = `sample-card sample-${type.id}`;
    card.innerHTML = `
      <div class="sample-card-head">
        <span class="sample-icon">${type.icon}</span>
        <div class="sample-card-info">
          <div class="sample-name">${type.name}</div>
          <div class="sample-desc">${type.desc}</div>
        </div>
        <span class="sample-count">×${s.count}<small>份</small></span>
      </div>
      <div class="sample-value-bar-wrap">
        <div class="sample-value-label"><span>完整度</span><strong style="color:${integrityColor}">${s.integrity}%</strong></div>
        <div class="sample-value-bar"><div class="sample-value-fill" style="width:${s.integrity}%;background:${integrityFillColor}"></div></div>
      </div>
      <div class="sample-req">
        <div class="sample-req-title">保存条件 <small>（需${reqNames}电力≥要求值）</small></div>
        <div class="sample-req-values">${reqValues}</div>
        <div class="sample-req-hint">${type.preserveHint}</div>
      </div>
      <div class="sample-stats-row">
        <span>单份价值<strong>${type.value}</strong></span>
        <span>实验门槛<strong>${type.labPowerThreshold}格</strong></span>
        <span>现存价值<strong>${Math.round(s.count * type.value * s.integrity / 100)}</strong></span>
      </div>
      <div class="sample-stats-row" style="opacity:.75;font-size:11px">
        <span>累计产出<strong>${s.totalProduced}</strong></span>
        <span>累计损毁<strong>${s.totalLost}</strong></span>
        <span>不达标惩罚<strong>-${type.lossWhenFail}%</strong></span>
      </div>
    `;
    sampleCardsEl.appendChild(card);
  });
}

function mapReqName(r) {
  const map = { heat: '供暖', comm: '通信', lab: '实验', food: '冷藏' };
  return map[r] || r;
}

function renderEquipmentWorkshop() {
  if (!state.equipment) return;
  equipmentCardsEl.innerHTML = "";
  equipmentDefs.forEach((def) => {
    const eq = state.equipment[def.id];
    const durColor = eq.durability >= 80 ? "#4f8a5b" : eq.durability >= 60 ? "#d18b3f" : eq.durability >= 30 ? "#d18b3f" : "#d14c3f";
    const durBarColor = eq.durability >= 60 ? "#4f8a5b" : eq.durability >= 30 ? "#f2c14e" : "#d14c3f";
    const statusLabel = eq.durability >= 80 ? "良好" : eq.durability >= 60 ? "一般" : eq.durability >= 30 ? "老化" : "严重老化";

    const canRepair = eq.durability < 100 && state.fuel >= def.repairFuel;
    const upgradeFuelCost = def.upgradeFuel * eq.level;
    const upgradeDataCost = def.upgradeData * eq.level;
    const canUpgrade = eq.level < def.maxLevel && state.fuel >= upgradeFuelCost && state.data >= upgradeDataCost;

    const effectDesc = getEquipmentEffectDesc(def, eq);

    const card = document.createElement("div");
    card.className = `eq-card eq-${def.id}`;
    card.innerHTML = `
      <div class="eq-card-head">
        <span class="eq-icon">${def.icon}</span>
        <div class="eq-card-info">
          <div class="eq-name">${def.name}</div>
          <div class="eq-level">Lv${eq.level}${eq.level < def.maxLevel ? ` → Lv${eq.level + 1}` : " (满级)"}</div>
        </div>
        <span class="eq-status" style="color:${durColor}">${statusLabel}</span>
      </div>
      <div class="eq-dur-bar-wrap">
        <div class="eq-dur-label"><span>耐久度</span><strong style="color:${durColor}">${eq.durability}/100</strong></div>
        <div class="eq-dur-bar"><div class="eq-dur-fill" style="width:${eq.durability}%;background:${durBarColor}"></div></div>
      </div>
      <div class="eq-effect">${effectDesc}</div>
      <div class="eq-actions">
        <button class="eq-repair-btn" type="button" ${canRepair ? "" : "disabled"}>维修（柴油${def.repairFuel}）</button>
        <button class="eq-upgrade-btn" type="button" ${canUpgrade ? "" : "disabled"}>${eq.level < def.maxLevel ? `升级（柴油${upgradeFuelCost} 数据${upgradeDataCost}）` : "已满级"}</button>
      </div>
    `;

    card.querySelector(".eq-repair-btn").addEventListener("click", () => repairEquipment(def.id));
    card.querySelector(".eq-upgrade-btn").addEventListener("click", () => upgradeEquipment(def.id));
    equipmentCardsEl.appendChild(card);
  });
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
        <span>样本<strong>${record.sampleValue || 0}</strong></span>
        <span>完整度<strong>${record.sampleIntegrity !== undefined ? record.sampleIntegrity + '%' : '—'}</strong></span>
      </div>
      <div class="archive-card-score">综合评分：${record.score}</div>
      <p class="archive-card-ending">${record.ending}</p>
    `;
    archiveListEl.appendChild(card);
  });
}

function calculateCrewEffects() {
  const effects = {
    fuelSave: 0,
    moraleBoost: 0,
    dataBoost: 0,
    foodSave: 0,
    fatigueWarns: [],
    moodPenalties: [],
    matched: [],
    fatiguedPenalty: { data: 0, food: 0, morale: 0 }
  };

  state.crew.forEach((member) => {
    if (member.station === "rest") return;

    const isMatched = member.specialty === member.station;
    const bonus = crewSpecialtyBonus[member.station] || {};

    const efficiency = getCrewEfficiency(member);

    if (isMatched) {
      if (bonus.fuelSave) effects.fuelSave += Math.round(bonus.fuelSave * efficiency);
      if (bonus.dataBoost) effects.dataBoost += Math.round(bonus.dataBoost * efficiency);
      if (bonus.foodSave) effects.foodSave += Math.round(bonus.foodSave * efficiency);
      if (bonus.moraleBoost) effects.moraleBoost += Math.round(bonus.moraleBoost * efficiency);
      effects.matched.push(member.name);
    } else {
      if (bonus.fuelSave) effects.fuelSave += Math.round(bonus.fuelSave * 0.4 * efficiency);
      if (bonus.dataBoost) effects.dataBoost += Math.round(bonus.dataBoost * 0.4 * efficiency);
      if (bonus.foodSave) effects.foodSave += Math.round(bonus.foodSave * 0.4 * efficiency);
      if (bonus.moraleBoost) effects.moraleBoost += Math.round(bonus.moraleBoost * 0.4 * efficiency);
    }

    if (efficiency < 0.5) {
      effects.fatiguedPenalty.data -= Math.round(3 * (0.5 - efficiency) * 10);
      effects.fatiguedPenalty.morale -= Math.round(4 * (0.5 - efficiency) * 10);
    }

    if (member.fatigue >= 85) {
      effects.fatigueWarns.push(`${member.name} 过度疲劳！效率严重下降，建议休息。`);
    } else if (member.fatigue >= 70) {
      effects.fatigueWarns.push(`${member.name} 疲劳过高（${member.fatigue}），效率受影响。`);
    }
  });

  effects.dataBoost += effects.fatiguedPenalty.data;
  effects.moraleBoost += effects.fatiguedPenalty.morale;

  effects.fuelSave = Math.max(0, effects.fuelSave);
  effects.foodSave = Math.max(0, effects.foodSave);
  effects.dataBoost = Math.max(0, effects.dataBoost);

  return effects;
}

function getCrewEfficiency(member) {
  if (member.station === "rest") return 0;
  let efficiency = 1;
  if (member.fatigue >= 90) efficiency *= 0.3;
  else if (member.fatigue >= 80) efficiency *= 0.5;
  else if (member.fatigue >= 70) efficiency *= 0.7;
  else if (member.fatigue >= 60) efficiency *= 0.85;
  if (member.mood <= 20) efficiency *= 0.7;
  else if (member.mood <= 40) efficiency *= 0.85;
  else if (member.mood >= 80) efficiency *= 1.05;
  return Math.max(0.2, efficiency);
}

function previewCrewEffects() {
  if (!state.crew || state.crew.length === 0) return { summary: "" };
  let dataBoost = 0;
  let fuelSave = 0;
  let foodSave = 0;
  let moraleBoost = 0;
  let matchedCount = 0;
  let fatiguedCount = 0;
  let restCount = 0;

  state.crew.forEach((m) => {
    if (m.station === "rest") {
      restCount++;
      return;
    }
    const matched = m.specialty === m.station;
    const efficiency = getCrewEfficiency(m);
    const bonus = crewSpecialtyBonus[m.station] || {};
    const mult = matched ? 1 : 0.4;
    if (bonus.fuelSave) fuelSave += Math.round(bonus.fuelSave * mult * efficiency);
    if (bonus.dataBoost) dataBoost += Math.round(bonus.dataBoost * mult * efficiency);
    if (bonus.foodSave) foodSave += Math.round(bonus.foodSave * mult * efficiency);
    if (bonus.moraleBoost) moraleBoost += Math.round(bonus.moraleBoost * mult * efficiency);
    if (matched) matchedCount++;
    if (m.fatigue >= 70) fatiguedCount++;
  });

  const parts = [];
  if (matchedCount > 0) parts.push(`专长匹配×${matchedCount}`);
  if (fuelSave > 0) parts.push(`柴油省${fuelSave}`);
  if (dataBoost > 0) parts.push(`数据+${dataBoost}`);
  if (foodSave > 0) parts.push(`食物省${foodSave}`);
  if (moraleBoost > 0) parts.push(`士气+${moraleBoost}`);
  if (restCount > 0) parts.push(`${restCount}人休息`);
  if (fatiguedCount > 0) parts.push(`⚠${fatiguedCount}人疲劳`);

  return { summary: parts.length ? `队员排班：${parts.join("，")}` : "" };
}

function updateCrewAfterDay() {
  state.crew.forEach((member) => {
    member.previousStation = member.station;

    if (member.station === "rest") {
      member.fatigue = Math.max(0, member.fatigue - 35);
      member.mood = Math.min(100, member.mood + 8);
      member.consecutiveDays = 0;
    } else {
      let fatigueDelta = 15;
      const isMatched = member.specialty === member.station;
      if (!isMatched) fatigueDelta += 5;

      if (member.consecutiveDays >= 2) {
        fatigueDelta += 8;
      }
      if (member.consecutiveDays >= 3) {
        fatigueDelta += 10;
      }
      if (member.consecutiveDays >= 4) {
        fatigueDelta += 12;
      }

      if (state.weather.name === "暴风雪") fatigueDelta += 6;
      else if (state.weather.name === "低温") fatigueDelta += 3;

      member.fatigue = Math.min(100, member.fatigue + fatigueDelta);

      let moodDelta = 0;
      if (isMatched) moodDelta += 2;
      if (member.consecutiveDays >= 2) moodDelta -= 2;
      if (member.consecutiveDays >= 3) moodDelta -= 4;
      if (member.fatigue >= 80) moodDelta -= 5;
      else if (member.fatigue >= 60) moodDelta -= 2;
      moodDelta += Math.round(state.morale >= 70 ? 1 : state.morale <= 30 ? -2 : 0);

      member.mood = Math.max(0, Math.min(100, member.mood + moodDelta));

      if (member.previousStation === member.station) {
        member.consecutiveDays++;
      } else {
        member.consecutiveDays = 1;
      }
    }

    member.station = member.station === "rest" ? null : null;
  });

  state.crew.forEach((m) => {
    if (m.station === null) {
      if (m.fatigue >= 80) {
        m.station = "rest";
      }
    }
  });

  const remaining = state.crew.filter((m) => m.station === null);
  const stationIds = ["heat", "comm", "lab", "food"];
  const takenStations = new Set(
    state.crew.filter((m) => m.station && m.station !== "rest").map((m) => m.station)
  );
  const available = stationIds.filter((s) => !takenStations.has(s));

  remaining.sort((a, b) => {
    if (available.includes(a.specialty) && !available.includes(b.specialty)) return -1;
    if (!available.includes(a.specialty) && available.includes(b.specialty)) return 1;
    return b.mood - a.mood;
  });

  remaining.forEach((member) => {
    if (member.station !== null) return;
    if (available.includes(member.specialty)) {
      member.station = member.specialty;
      const idx = available.indexOf(member.specialty);
      available.splice(idx, 1);
    }
  });

  const stillRemaining = state.crew.filter((m) => m.station === null);
  stillRemaining.forEach((member) => {
    if (available.length > 0) {
      member.station = available.shift();
    } else {
      member.station = "rest";
    }
  });
}

function formatCrewDayLog(crewEffects) {
  const parts = [];
  if (crewEffects.matched.length > 0) {
    parts.push(`【专长匹配】${crewEffects.matched.join("、")} 发挥出色`);
  }
  if (crewEffects.dataBoost > 0) parts.push(`额外数据+${crewEffects.dataBoost}`);
  if (crewEffects.fuelSave > 0) parts.push(`节省柴油${crewEffects.fuelSave}`);
  if (crewEffects.foodSave > 0) parts.push(`节省食物${crewEffects.foodSave}`);
  if (crewEffects.moraleBoost > 0) parts.push(`团队士气+${crewEffects.moraleBoost}`);

  state.crew.forEach((m) => {
    if (m.previousStation === "rest") {
      parts.push(`${m.name} 休息恢复良好`);
    }
  });

  return parts.length ? parts.join("，") : "队员正常值守。";
}

function renderCrewCards() {
  crewCardsEl.innerHTML = "";
  state.crew.forEach((member) => {
    const card = document.createElement("div");
    card.className = `crew-card head-specialty-${member.specialty}`;

    const fatigueColor = member.fatigue >= 80 ? "#d14c3f" : member.fatigue >= 60 ? "#d18b3f" : "#4f8a5b";
    const moodColor = member.mood <= 30 ? "#d14c3f" : member.mood <= 50 ? "#d18b3f" : "#4f8a5b";

    const warnHtml = [];
    if (member.fatigue >= 70) warnHtml.push(`<div class="crew-warn">⚠ 疲劳过高，效率下降</div>`);
    if (member.mood <= 30) warnHtml.push(`<div class="crew-warn">⚠ 心情低落</div>`);
    if (member.consecutiveDays >= 3 && member.station !== "rest") warnHtml.push(`<div class="crew-warn">⚠ 连续${member.consecutiveDays}天高强度工作</div>`);

    const efficiency = Math.round(getCrewEfficiency(member) * 100);

    card.innerHTML = `
      <div class="crew-card-head">
        <div>
          <div class="crew-name">${member.avatar} ${member.name}</div>
          <div style="font-size:11px;color:#63868c;margin-top:2px;">
            效率 ${efficiency}%${member.consecutiveDays > 0 && member.station !== "rest" ? ` · 连${member.consecutiveDays}天` : ""}
          </div>
        </div>
        <span class="crew-specialty specialty-${member.specialty}">${member.specialtyName}</span>
      </div>
      <div class="crew-stats">
        <div class="crew-stat">
          <div class="crew-stat-label"><span>疲劳</span><strong style="color:${fatigueColor}">${member.fatigue}</strong></div>
          <div class="crew-stat-bar"><div class="crew-stat-fill fill-fatigue" style="width:${member.fatigue}%"></div></div>
        </div>
        <div class="crew-stat">
          <div class="crew-stat-label"><span>心情</span><strong style="color:${moodColor}">${member.mood}</strong></div>
          <div class="crew-stat-bar"><div class="crew-stat-fill fill-mood" style="width:${member.mood}%"></div></div>
        </div>
      </div>
      ${warnHtml.join("")}
      <div class="crew-assignments" data-crew-id="${member.id}"></div>
    `;

    crewCardsEl.appendChild(card);

    const assignmentsEl = card.querySelector(".crew-assignments");
    stations.forEach((st) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "crew-assign-btn";
      const isMatched = member.specialty === st.id;
      const isActive = member.station === st.id;
      if (isActive) {
        btn.classList.add("active", st.id);
      }
      if (isMatched && st.id !== "rest") {
        btn.classList.add("matched");
      }
      btn.innerHTML = `${st.icon}<div>${st.name}</div>${isMatched && st.id !== "rest" ? "<small>专长</small>" : "<small>&nbsp;</small>"}`;
      btn.title = isMatched && st.id !== "rest" ? `${st.desc}（${member.specialtyName}，效率+60%）` : st.desc;
      btn.addEventListener("click", () => assignCrewStation(member.id, st.id));
      assignmentsEl.appendChild(btn);
    });
  });
}

function renderCrewSummary() {
  const map = { heat: [], comm: [], lab: [], food: [], rest: [] };
  state.crew.forEach((m) => {
    if (map[m.station]) map[m.station].push(m.name);
  });
  crewHeatEl.textContent = map.heat.length ? map.heat.join("、") : "无人";
  crewCommEl.textContent = map.comm.length ? map.comm.join("、") : "无人";
  crewLabEl.textContent = map.lab.length ? map.lab.join("、") : "无人";
  crewFoodEl.textContent = map.food.length ? map.food.join("、") : "无人";
  crewRestEl.textContent = map.rest.length;
}

function assignCrewStation(crewId, stationId) {
  const member = state.crew.find((m) => m.id === crewId);
  if (!member) return;

  const currentHolder = state.crew.find((m) => m.id !== crewId && m.station === stationId);
  const prevStation = member.station;

  if (currentHolder) {
    currentHolder.station = prevStation;
  }
  member.station = stationId;

  addLog(`排班调整：${member.name} → ${stations.find((s) => s.id === stationId).name}${currentHolder ? `，${currentHolder.name} 接替原岗位` : ""}。`);
  render();
}

init();
