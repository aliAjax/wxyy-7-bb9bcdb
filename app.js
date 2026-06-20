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
const missionEmptyEl = document.getElementById("missionEmpty");
const filterTagsEl = document.getElementById("filterTags");
const filterDaysEl = document.getElementById("filterDays");
const filterGoalEl = document.getElementById("filterGoal");
const sortOptionsEl = document.getElementById("sortOptions");
const resetFilterBtn = document.getElementById("resetFilterBtn");
const missionDeskEl = document.getElementById("missionDesk");
const controlsPanelEl = document.getElementById("controlsPanel");
const clearArchiveBtn = document.getElementById("clearArchiveBtn");
const archiveEmptyEl = document.getElementById("archiveEmpty");
const archiveListEl = document.getElementById("archiveList");
const archiveDetailOverlay = document.getElementById("archiveDetailOverlay");
const archiveDetailMission = document.getElementById("archiveDetailMission");
const archiveDetailTag = document.getElementById("archiveDetailTag");
const archiveDetailDate = document.getElementById("archiveDetailDate");
const archiveDetailFuel = document.getElementById("archiveDetailFuel");
const archiveDetailFood = document.getElementById("archiveDetailFood");
const archiveDetailMorale = document.getElementById("archiveDetailMorale");
const archiveDetailData = document.getElementById("archiveDetailData");
const archiveDetailSampleValue = document.getElementById("archiveDetailSampleValue");
const archiveDetailSampleDiscovered = document.getElementById("archiveDetailSampleDiscovered");
const archiveDetailSampleReturned = document.getElementById("archiveDetailSampleReturned");
const archiveDetailSampleIntegrity = document.getElementById("archiveDetailSampleIntegrity");
const archiveDetailComm = document.getElementById("archiveDetailComm");
const archiveDetailReturnSection = document.getElementById("archiveDetailReturnSection");
const archiveDetailReturnSummary = document.getElementById("archiveDetailReturnSummary");
const archiveDetailReturnDetails = document.getElementById("archiveDetailReturnDetails");
const archiveDetailScore = document.getElementById("archiveDetailScore");
const archiveDetailEnding = document.getElementById("archiveDetailEnding");
const archiveDetailCrew = document.getElementById("archiveDetailCrew");
const archiveDetailCloseBtn = document.getElementById("archiveDetailCloseBtn");
const archiveDetailOkBtn = document.getElementById("archiveDetailOkBtn");
const archiveDetailMask = document.querySelector(".archive-detail-mask");
const crewPanelEl = document.getElementById("crewPanel");
const crewCardsEl = document.getElementById("crewCards");
const crewHeatEl = document.getElementById("crewHeat");
const crewCommEl = document.getElementById("crewComm");
const crewLabEl = document.getElementById("crewLab");
const crewFoodEl = document.getElementById("crewFood");
const crewRestEl = document.getElementById("crewRest");

const dayPreviewPanelEl = document.getElementById("dayPreviewPanel");
const previewFuelCurrent = document.getElementById("previewFuelCurrent");
const previewFuelResult = document.getElementById("previewFuelResult");
const previewFuelDelta = document.getElementById("previewFuelDelta");
const previewMoraleCurrent = document.getElementById("previewMoraleCurrent");
const previewMoraleResult = document.getElementById("previewMoraleResult");
const previewMoraleDelta = document.getElementById("previewMoraleDelta");
const previewFoodCurrent = document.getElementById("previewFoodCurrent");
const previewFoodResult = document.getElementById("previewFoodResult");
const previewFoodDelta = document.getElementById("previewFoodDelta");
const previewDataCurrent = document.getElementById("previewDataCurrent");
const previewDataResult = document.getElementById("previewDataResult");
const previewDataDelta = document.getElementById("previewDataDelta");
const previewSampleDetails = document.getElementById("previewSampleDetails");
const previewEquipDetails = document.getElementById("previewEquipDetails");
const previewCommDetails = document.getElementById("previewCommDetails");
const previewWarnings = document.getElementById("previewWarnings");
const previewUncertainty = document.getElementById("previewUncertainty");

const workshopPanelEl = document.getElementById("workshopPanel");
const equipmentCardsEl = document.getElementById("equipmentCards");

const samplesPanelEl = document.getElementById("samplesPanel");
const sampleCardsEl = document.getElementById("sampleCards");
const sampleIntegrityEl = document.getElementById("sampleIntegrity");
const sampleTotalValueEl = document.getElementById("sampleTotalValue");
const sampleDiscoveredValueEl = document.getElementById("sampleDiscoveredValue");

const commPanelEl = document.getElementById("commPanel");
const commChainSelectorEl = document.getElementById("commChainSelector");
const commChainInterruptHintEl = document.getElementById("commChainInterruptHint");
const commChainTitleEl = document.getElementById("commChainTitle");
const commChainStatusEl = document.getElementById("commChainStatus");
const commChainProgressEl = document.getElementById("commChainProgress");
const commChainProgressBar = document.getElementById("commChainProgressBar");
const commChainDelayEl = document.getElementById("commChainDelay");
const commPhasesEl = document.getElementById("commPhases");
const commRewardsEl = document.getElementById("commRewards");
const commLogsEl = document.getElementById("commLogs");

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

const campaignProgressEl = document.getElementById("campaignProgress");
const campaignChapter1El = document.getElementById("campaignChapter1");
const campaignChapter2El = document.getElementById("campaignChapter2");
const campaignChapterNameEl = document.getElementById("campaignChapterName");

const chapterIntroOverlay = document.getElementById("chapterIntroOverlay");
const chapterIntroBadge = document.getElementById("chapterIntroBadge");
const chapterIntroTitle = document.getElementById("chapterIntroTitle");
const chapterIntroSubtitle = document.getElementById("chapterIntroSubtitle");
const chapterIntroNarrative = document.getElementById("chapterIntroNarrative");
const chapterIntroObjectives = document.getElementById("chapterIntroObjectives");
const chapterIntroCarryover = document.getElementById("chapterIntroCarryover");
const chapterIntroStartBtn = document.getElementById("chapterIntroStartBtn");

const branchEventOverlay = document.getElementById("branchEventOverlay");
const branchEventIcon = document.getElementById("branchEventIcon");
const branchEventTitle = document.getElementById("branchEventTitle");
const branchEventDayInfo = document.getElementById("branchEventDayInfo");
const branchEventDesc = document.getElementById("branchEventDesc");
const branchEventOptions = document.getElementById("branchEventOptions");

const chapterSettleOverlay = document.getElementById("chapterSettleOverlay");
const chapterSettleTitle = document.getElementById("chapterSettleTitle");
const chapterSettleSummary = document.getElementById("chapterSettleSummary");
const chapterSettleCarryover = document.getElementById("chapterSettleCarryover");
const chapterSettleNextBtn = document.getElementById("chapterSettleNextBtn");

const campaignEndingOverlay = document.getElementById("campaignEndingOverlay");
const campaignEndingIcon = document.getElementById("campaignEndingIcon");
const campaignEndingTitle = document.getElementById("campaignEndingTitle");
const campaignEndingRank = document.getElementById("campaignEndingRank");
const campaignEndingNarrative = document.getElementById("campaignEndingNarrative");
const campaignEndingStats = document.getElementById("campaignEndingStats");
const campaignEndingChoices = document.getElementById("campaignEndingChoices");
const campaignEndingBtn = document.getElementById("campaignEndingBtn");

const ARCHIVE_KEY = "polar_station_archive";
const ARCHIVE_LIMIT = 20;
const TUTORIAL_KEY = "polar_station_tutorial_done";
const CUSTOM_LEVELS_KEY = "polar_station_custom_levels";
const CUSTOM_LEVEL_ID_PREFIX = "custom_";

const CAMPAIGN_SAVE_KEY = "polar_station_campaign_saves";
const CAMPAIGN_SAVE_VERSION = 1;
const CAMPAIGN_SAVE_LIMIT = 5;
const AUTOSAVE_INTERVAL = 30000;

const filterState = {
  tags: [],
  days: "all",
  goal: "all",
  sort: "default"
};

const toggleEditorBtn = document.getElementById("toggleEditorBtn");
const closeEditorBtn = document.getElementById("closeEditorBtn");
const levelEditorPanel = document.getElementById("levelEditorPanel");
const editorValidation = document.getElementById("editorValidation");
const editorValidateBtn = document.getElementById("editorValidateBtn");
const editorLoadDefaultBtn = document.getElementById("editorLoadDefaultBtn");
const editorCopySelectedBtn = document.getElementById("editorCopySelectedBtn");
const editorSaveBtn = document.getElementById("editorSaveBtn");
const editorDeleteBtn = document.getElementById("editorDeleteBtn");
const editorSavedList = document.getElementById("editorSavedList");

const editorFields = {
  name: document.getElementById("editorName"),
  tag: document.getElementById("editorTag"),
  color: document.getElementById("editorColor"),
  desc: document.getElementById("editorDesc"),
  days: document.getElementById("editorDays"),
  fuel: document.getElementById("editorFuel"),
  morale: document.getElementById("editorMorale"),
  food: document.getElementById("editorFood"),
  data: document.getElementById("editorData"),
  allocHeat: document.getElementById("editorAllocHeat"),
  allocComm: document.getElementById("editorAllocComm"),
  allocLab: document.getElementById("editorAllocLab"),
  allocFood: document.getElementById("editorAllocFood"),
  weightSunny: document.getElementById("editorWeightSunny"),
  weightCold: document.getElementById("editorWeightCold"),
  weightBlizzard: document.getElementById("editorWeightBlizzard"),
  weightNight: document.getElementById("editorWeightNight"),
  dataGoal: document.getElementById("editorDataGoal"),
  returnedValueGoal: document.getElementById("editorReturnedValueGoal"),
  commBonus: document.getElementById("editorCommBonus"),
  commBonusVal: document.getElementById("editorCommBonusVal"),
  commMoraleBonus: document.getElementById("editorCommMoraleBonus"),
  foodReserve: document.getElementById("editorFoodReserve"),
  emergencyChance: document.getElementById("editorEmergencyChance"),
  minFuel: document.getElementById("editorMinFuel"),
  minMorale: document.getElementById("editorMinMorale"),
  minFood: document.getElementById("editorMinFood"),
  intro: document.getElementById("editorIntro")
};

let editorEditingId = null;
let editorSaveHintTimer = null;
let editorEmergencyEvents = [];
let eeEditingIndex = -1;

const eeEls = {
  overlay: document.getElementById("editorEmergencyOverlay"),
  mask: document.querySelector(".editor-emergency-mask"),
  title: document.getElementById("editorEmergencyCardTitle"),
  closeBtn: document.getElementById("editorEmergencyCardClose"),
  cancelBtn: document.getElementById("editorEmergencyCardCancel"),
  saveBtn: document.getElementById("editorEmergencyCardSave"),
  validation: document.getElementById("editorEmergencyCardValidation"),
  addBtn: document.getElementById("editorEmergencyAddBtn"),
  list: document.getElementById("editorEmergencyList"),
  count: document.getElementById("editorEmergencyCount"),
  name: document.getElementById("eeName"),
  icon: document.getElementById("eeIcon"),
  desc: document.getElementById("eeDesc"),
  weight: document.getElementById("eeWeight"),
  dayMin: document.getElementById("eeDayMin"),
  dayMax: document.getElementById("eeDayMax"),
  optionsWrap: document.getElementById("editorEmergencyOptions")
};

function hideAllOverlays() {
  emergencyOverlay.classList.add("hidden");
  tutorialOverlay.classList.add("hidden");
  chapterIntroOverlay.classList.add("hidden");
  branchEventOverlay.classList.add("hidden");
  chapterSettleOverlay.classList.add("hidden");
  campaignEndingOverlay.classList.add("hidden");
  resultEl.classList.add("hidden");
  eeEls.overlay.classList.add("hidden");
}

const systems = [
  { id: "heat", name: "供暖", hint: "低于要求会冻伤士气，保障天文样本恒温，提升返运成功率" },
  { id: "comm", name: "通信", hint: "保持天气/定位链路，保障气溶胶样本，<b>提升返运成功率+运力</b>" },
  { id: "lab", name: "实验", hint: "产出各类科研样本（<b>样本仅成功返运才计入成果</b>）" },
  { id: "food", name: "食物储藏", hint: "低于2会损耗食物，保障冰芯/生物冷藏，<b>提升返运运力+成功率</b>" }
];

const equipmentDefs = [
  { id: "heat", name: "供暖锅炉", icon: "🔥", baseDurLoss: 6, repairFuel: 5, upgradeFuel: 12, upgradeData: 10, maxLevel: 3 },
  { id: "comm", name: "通信天线", icon: "📡", baseDurLoss: 5, repairFuel: 5, upgradeFuel: 10, upgradeData: 12, maxLevel: 3 },
  { id: "lab", name: "实验仪器", icon: "🔬", baseDurLoss: 4, repairFuel: 6, upgradeFuel: 8, upgradeData: 15, maxLevel: 3 },
  { id: "food", name: "冷库机组", icon: "🧊", baseDurLoss: 5, repairFuel: 5, upgradeFuel: 10, upgradeData: 8, maxLevel: 3 }
];

const returnPriorityLevels = [
  { id: "critical", name: "最高优先级", label: "★★★", weight: 3, color: "#d14c3f", hint: "占用更多返运力，优先保障" },
  { id: "high", name: "高优先级", label: "★★", weight: 2, color: "#d18b3f", hint: "重点保护，尽量带回" },
  { id: "normal", name: "普通优先级", label: "★", weight: 1, color: "#8fa9ae", hint: "常规处理，视运力而定" },
  { id: "low", name: "低优先级", label: "—", weight: 0.5, color: "#5c6b70", hint: "可放弃，优先让位给高价值样本" }
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
    labPowerBonus: 1.6,
    weight: 4,
    baseRisk: 0.15,
    riskHint: "笨重易碎，极端天气下高损毁风险"
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
    labPowerBonus: 1.3,
    weight: 1,
    baseRisk: 0.08,
    riskHint: "轻便稳定，样本封装良好风险较低"
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
    labPowerBonus: 1.8,
    weight: 2,
    baseRisk: 0.10,
    riskHint: "数据介质敏感，温度骤变有损坏风险"
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
    labPowerBonus: 2.2,
    weight: 3,
    baseRisk: 0.18,
    riskHint: "高价值但极度脆弱，多重条件保障失败极易失活"
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

const skillLevelConfig = {
  thresholds: [0, 3, 7, 12, 20],
  names: ["入门", "熟练", "精通", "专家", "大师"],
  bonusMult: [1.0, 1.15, 1.3, 1.5, 1.75]
};

const tempStatusDefs = {
  exhausted: {
    id: "exhausted",
    name: "筋疲力尽",
    icon: "😵",
    desc: "连续疲劳过高，效率-25%，次日疲劳额外+10",
    efficiencyMult: 0.75,
    nextDayFatigueBonus: 10,
    trigger: (member) => member.fatigue >= 80 && (member._consecutiveHighFatigue || 0) >= 2,
    clearRestDays: 2
  },
  burnout: {
    id: "burnout",
    name: "职业倦怠",
    icon: "🫠",
    desc: "士气持续低落，效率-20%，专长匹配奖励减半",
    efficiencyMult: 0.8,
    specialtyBonusMult: 0.5,
    trigger: (member) => member.mood <= 30 && (member._consecutiveLowMood || 0) >= 2,
    clearRestDays: 3
  },
  shaken: {
    id: "shaken",
    name: "心神不宁",
    icon: "😰",
    desc: "暴风雪后应激反应，次日心情恢复减慢",
    moodRecoveryMult: 0.5,
    trigger: null,
    clearRestDays: 1
  },
  in_flow: {
    id: "in_flow",
    name: "得心应手",
    icon: "✨",
    desc: "连续专长匹配，效率+10%",
    efficiencyMult: 1.1,
    trigger: (member) => member.specialty === member.previousStation && member.consecutiveDays >= 3 && member.fatigue < 60 && member.mood > 50,
    clearRestDays: 1
  }
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
    desc: "标准值守任务，维持科考站日常运转，撑过7天等待换班。实验电力分配产出各类科研样本，<b>仅成功返运的样本才计入最终科研成果</b>。",
    color: "#29464d",
    days: 7,
    initial: { fuel: 80, morale: 75, food: 70, data: 0 },
    allocations: { heat: 3, comm: 2, lab: 4, food: 3 },
    dataGoal: 150,
    dataPerLab: 0,
    defaultCommChain: "supply_relay",
    weatherWeight: null,
    intro: "值班开始，目标是撑过7天并尽量产出高价值科研样本。实验电力用于产出样本，<b>样本需成功返运才能计入最终科研成果</b>。通信+冷藏+恒温+最终资源决定返运成功率，请在样本面板设置返运优先级。",
    successText: (s) => {
      const ret = s.returnedValue !== undefined ? s.returnedValue : s.sampleValue;
      const disc = s.discoveredValue !== undefined ? s.discoveredValue : s.sampleValue;
      return `科考站撑过了7天，直升机抵达！现场发现样本价值${disc}，经过精心打包和恶劣天气的考验，成功返运样本价值<b>${ret}</b>。科研成果（数据+返运样本）：${s.data}，最终评分：${s.score}。`;
    },
    failText: (s) => {
      const disc = s.discoveredValue !== undefined ? s.discoveredValue : s.sampleValue;
      return `值班失败，某项关键资源归零，任务提前中止。现场发现样本价值${disc}，但未及组织返运全部遗失。仅获得数据 ${s.data}，最终评分：${s.score}。`;
    }
  },
  {
    id: "weather",
    name: "气象观测专项",
    tag: "通信优先",
    desc: "连续记录极地气象数据，需要通信系统持续在线传输实时报文，并采集大气气溶胶样本。<b>通信在线额外奖励数据，且大幅提升样本返运成功率</b>。",
    color: "#357a90",
    days: 7,
    initial: { fuel: 70, morale: 70, food: 65, data: 0 },
    allocations: { heat: 3, comm: 3, lab: 3, food: 3 },
    dataGoal: 180,
    dataPerLab: 0,
    commBonus: 3,
    defaultCommChain: "research_data",
    intro: "气象观测任务启动，保持通信畅通以获得额外观测数据，并分配足够电力产出气溶胶样本。<b>气溶胶样本轻便稳定、返运风险低，优先设为高优先级</b>。目标科研成果（数据+返运样本）≥180。",
    successText: (s) => {
      const ret = s.returnedValue !== undefined ? s.returnedValue : s.sampleValue;
      const disc = s.discoveredValue !== undefined ? s.discoveredValue : s.sampleValue;
      const finalResearch = (s.data || 0) + ret;
      return finalResearch >= s.mission.dataGoal
        ? `气象观测圆满完成！现场发现${disc}，返运${ret}，最终科研成果 ${finalResearch}。通信全程在线，气溶胶样本定位精准返运顺利，数据质量优秀。最终评分：${s.score}。`
        : `撑过了7天，现场发现${disc}，返运${ret}，最终科研成果 ${finalResearch}（目标≥${s.mission.dataGoal}）。观测报告不够完整，部分样本因通信短暂中断定位失败。最终评分：${s.score}。`;
    },
    failText: (s) => {
      const disc = s.discoveredValue !== undefined ? s.discoveredValue : s.sampleValue;
      return `气象任务中断，某项资源归零。现场发现样本价值${disc}，未及返运全部遗失。仅获得数据 ${s.data}。最终评分：${s.score}。`;
    }
  },
  {
    id: "icecore",
    name: "冰芯采样远征",
    tag: "实验优先",
    desc: "钻探深层冰芯并在实验舱内分析，实验室电力越高越有机会产出高价值冰芯样本。<b>冰芯笨重易碎，返运需充足冷藏和运力资源</b>。",
    color: "#6267a6",
    days: 7,
    initial: { fuel: 85, morale: 80, food: 60, data: 0 },
    allocations: { heat: 4, comm: 2, lab: 4, food: 2 },
    dataGoal: 220,
    dataPerLab: 0,
    defaultCommChain: "research_data",
    weatherWeight: { 暴风雪: 3, 晴朗: 1, 低温: 2, 极夜静风: 2 },
    intro: "冰芯采样任务启动，分配更多电力给实验舱以获取高质量冰芯样本，并确保冷藏电力充足防止样本融化。<b>冰芯每份重4单位，必须设为高优先级才能保证返运运力</b>。目标科研成果（数据+返运样本）≥220。",
    successText: (s) => {
      const ret = s.returnedValue !== undefined ? s.returnedValue : s.sampleValue;
      const disc = s.discoveredValue !== undefined ? s.discoveredValue : s.sampleValue;
      const finalResearch = (s.data || 0) + ret;
      return finalResearch >= s.mission.dataGoal
        ? `冰芯采样大获成功！现场发现${disc}，成功返运${ret}，最终科研成果 ${finalResearch}。大量高价值冰芯样本被完整封装，发现远古气候信号。最终评分：${s.score}。`
        : `顺利返程，但现场发现${disc}仅返运${ret}，最终科研成果 ${finalResearch}（目标≥${s.mission.dataGoal}）。暴风雪天气下冰芯笨重易碎，部分样本运力不足被遗留。最终评分：${s.score}。`;
    },
    failText: (s) => {
      const disc = s.discoveredValue !== undefined ? s.discoveredValue : s.sampleValue;
      return `冰芯远征被迫中止，资源耗尽。现场发现${disc}未及返运全部遗失。仅保留了数据 ${s.data}。最终评分：${s.score}。`;
    }
  },
  {
    id: "relay",
    name: "通信中继保障",
    tag: "士气优先",
    desc: "作为跨极区通信中继节点，稳定信号提振士气。<b>高士气可增加返运运力，通信在线同时提升返运成功率</b>。",
    color: "#c85f46",
    days: 7,
    initial: { fuel: 75, morale: 85, food: 80, data: 0 },
    allocations: { heat: 3, comm: 3, lab: 3, food: 3 },
    dataGoal: 130,
    dataPerLab: 0,
    commMoraleBonus: true,
    foodReserve: true,
    defaultCommChain: "supply_relay",
    intro: "通信中继任务启动，维持通信在线可阻止士气下降甚至提振人心。<b>高士气带来更多返运运力，建议将生物痕迹等脆弱样本设为最高优先级</b>。兼顾样本产出，目标科研成果（数据+返运样本）≥130。",
    successText: (s) => {
      const ret = s.returnedValue !== undefined ? s.returnedValue : s.sampleValue;
      const disc = s.discoveredValue !== undefined ? s.discoveredValue : s.sampleValue;
      const finalResearch = (s.data || 0) + ret;
      return finalResearch >= s.mission.dataGoal
        ? `跨极区通信中继全程在线！现场发现${disc}，成功返运${ret}，最终科研成果 ${finalResearch}。队员状态极佳士气高昂，返运运力充足，样本保存完好。最终评分：${s.score}。`
        : `中继站撑过了7天，现场发现${disc}仅返运${ret}，最终科研成果 ${finalResearch}（目标≥${s.mission.dataGoal}）。部分样本和信号因暴风雪丢失。最终评分：${s.score}。`;
    },
    failText: (s) => {
      const disc = s.discoveredValue !== undefined ? s.discoveredValue : s.sampleValue;
      return `通信中继站失守，中继任务失败。现场发现${disc}未及返运全部遗失。仅获得数据 ${s.data}。最终评分：${s.score}。`;
    }
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

const campaignChapters = [
  {
    id: "ch1",
    name: "极夜初临",
    subtitle: "极夜降临，科考站第一次面对长达数月的黑暗与孤独",
    badge: "第一章",
    narrative: "极夜终于降临。太阳沉入地平线以下，至少三个月不会升起。四名队员必须在漫长的黑暗中维持科考站运转，完成基地委派的科研任务，同时应对极寒、暴风雪和精神压力的三重考验。\n\n这是你们第一次独自面对极夜。通讯偶尔能接通基地，但大部分时间只有风声和冰层的呻吟。队长的叮嘱犹在耳畔：「撑过前七天，后面的日子才有节奏。」",
    days: 7,
    initial: { fuel: 85, morale: 80, food: 75, data: 0 },
    allocations: { heat: 3, comm: 2, lab: 4, food: 3 },
    weatherWeight: { "暴风雪": 3, "低温": 2, "极夜静风": 2, "晴朗": 1 },
    dataGoal: 80,
    defaultCommChain: "supply_relay",
    objectives: [
      { id: "fuel", name: "柴油储备≥25", min: 25, icon: "⛽" },
      { id: "morale", name: "士气稳定≥35", min: 35, icon: "💪" },
      { id: "data", name: "科研成果≥80", min: 80, icon: "📊" }
    ],
    branchEvents: [
      {
        day: 3,
        id: "ch1_anomaly",
        name: "冰芯深层异常",
        icon: "🔬",
        desc: "孙研究员在分析深层冰芯样本时发现了异常数据——冰芯中封存的远古气泡成分与已知记录不符，暗示着一个未知的气候事件。这个发现可能是重大突破，也可能只是仪器校准偏差。如何处理？",
        options: [
          {
            id: "study_deep",
            label: "投入资源深入研究",
            desc: "调配更多实验电力和通信带宽，全力解析异常数据。科研产出会增加，但其他系统可能捉襟见肘。",
            impact: "开启科研路线：后续章节实验效率提升，但暴风雪更频繁",
            effects: { data: 12, fuel: -5, morale: 3 },
            routeTag: "research"
          },
          {
            id: "secure_store",
            label: "封存样本，优先生存",
            desc: "将异常样本妥善封存，集中精力维持站内运转。稳健但可能错过重大发现。",
            impact: "开启生存路线：后续章节天气更稳定，但科研产出偏低",
            effects: { data: 3, fuel: 3, morale: -2 },
            routeTag: "survival"
          }
        ]
      },
      {
        day: 5,
        id: "ch1_signal",
        name: "未知频段信号",
        icon: "📡",
        desc: "钱通讯员在例行扫描时截获了一段微弱但规律性极强的信号，来自东南方向约120公里的位置。信号模式不像自然源，但也不是已知的基地频率。可能是另一支科考队，也可能是设备误读。暴风雪即将来临，现在出发搜救风险极大。",
        options: [
          {
            id: "investigate",
            label: "冒着暴风雪搜救",
            desc: "组织小队携带通讯设备前往信号源搜救。成功将获得强力盟友和情报，失败则损失惨重。",
            impact: "救援路线：如成功，第二章获得额外队员和物资；失败则人员受损",
            effects: { fuel: -8, morale: 5, data: 6 },
            routeTag: "rescue"
          },
          {
            id: "ignore",
            label: "记录坐标，等待天气好转",
            desc: "将信号坐标记录在案，待暴风雪过后再计划行动。稳妥但可能错过黄金救援窗口。",
            impact: "等待路线：第二章收到神秘补给，但信号源可能已消失",
            effects: { data: 4, morale: -4 },
            routeTag: "wait"
          }
        ]
      }
    ],
    settlementPass: "极夜第一周艰难度过。虽然挑战重重，但站内运转基本正常，队员们也逐渐适应了黑暗中的节奏。基地发来简短电报：「收到你们的数据包，继续保持。换班队会按时出发。」",
    settlementFail: "极夜第一周的考验太过严酷，资源严重不足。队员们身心俱疲，站内秩序岌岌可危。基地回电简短而焦急：「收到求援信号。尽可能维持，我们正在协调。」"
  },
  {
    id: "ch2",
    name: "冰下回声",
    subtitle: "冰层之下传来不可思议的信号，真相与生存的抉择",
    badge: "第二章",
    narrative: "极夜第一周的煎熬刚刚过去，更大的挑战便接踵而至。\n\n根据你在第一章的抉择，冰下的秘密正在逐步揭开。那个异常信号的真实来源、冰芯深层的不明成分……所有线索都指向冰盖下方某个尚未被人类触及的空间。\n\n但暴风雪并未停歇，物资消耗远超预期，队员们的精神状态也在持续下滑。你必须在新一轮危机中做出更艰难的选择——是追索真相，还是守住底线？",
    days: 7,
    getInitial: function(carryover, choices) {
      const base = {
        fuel: Math.max(30, Math.round((carryover.fuel || 50) * 0.7)),
        morale: Math.max(25, Math.round((carryover.morale || 50) * 0.8)),
        food: Math.max(25, Math.round((carryover.food || 50) * 0.75)),
        data: Math.round((carryover.data || 0) * 0.5)
      };
      if (choices.ch1_signal === "investigate") {
        base.fuel = Math.max(base.fuel, 35);
        base.morale = Math.min(100, base.morale + 8);
      }
      if (choices.ch1_signal === "ignore") {
        base.food = Math.min(100, base.food + 10);
        base.fuel = Math.min(100, base.fuel + 5);
      }
      return base;
    },
    allocations: { heat: 3, comm: 3, lab: 3, food: 3 },
    getWeatherWeight: function(choices) {
      if (choices.ch1_anomaly === "study_deep") {
        return { "暴风雪": 4, "低温": 2, "极夜静风": 1, "晴朗": 1 };
      }
      return { "暴风雪": 1, "低温": 2, "极夜静风": 3, "晴朗": 2 };
    },
    dataGoal: 120,
    defaultCommChain: "research_data",
    getObjectives: function(choices) {
      const objs = [
        { id: "fuel", name: "柴油储备≥15", min: 15, icon: "⛽" },
        { id: "morale", name: "士气≥20", min: 20, icon: "💪" },
        { id: "data", name: "科研成果≥120", min: 120, icon: "📊" }
      ];
      if (choices.ch1_anomaly === "study_deep") {
        objs.push({ id: "commChain", name: "完成通信任务链", min: 1, icon: "📡" });
      }
      return objs;
    },
    branchEvents: [
      {
        day: 2,
        id: "ch2_contact",
        name: "冰下回声",
        icon: "🏔️",
        desc: "通信天线持续接收到来自冰盖下方的规律脉冲信号，频率与第一章发现的异常数据高度吻合。经过分析，孙研究员认为信号来自冰下约800米处的空洞空间，那里可能存在着一个被冰封数万年的微生态环境。\n\n这是一个前所未有的发现，但深入调查需要大量资源和精力。",
        options: [
          {
            id: "explore",
            label: "部署钻探，深入冰下",
            desc: "动用全部资源尝试钻探至信号源，这可能改写极地科考历史。但钻探会大量消耗柴油，且暴风雪期间风险极高。",
            impact: "探索路线：大量消耗资源，但若成功将获得最高评级",
            effects: { fuel: -10, data: 15, morale: 6 },
            routeTag: "explore"
          },
          {
            id: "monitor",
            label: "远程监测，积累数据",
            desc: "不冒险钻探，利用通信和实验系统持续监测并记录信号变化。安全但进展缓慢。",
            impact: "监测路线：稳步积累数据，安全性更高",
            effects: { data: 8, morale: -2 },
            routeTag: "monitor"
          }
        ]
      },
      {
        day: 5,
        id: "ch2_evacuate",
        name: "最终抉择",
        icon: "⚠️",
        desc: "基地突然发来紧急加密电报：冰架活动加剧，你所在的区域可能在72小时内发生大规模冰裂。基地建议立即启动撤离程序，但撤离意味着放弃所有未完成的实验和样本。\n\n你也可以选择留下来完成最后的关键实验——如果冰裂没有发生，你将带着完整的科学成果凯旋；但如果冰裂真的到来……",
        options: [
          {
            id: "stay",
            label: "留下完成实验",
            desc: "赌冰裂不会发生，坚持完成最后的科研目标。高风险但可能获得最高科学成就。",
            impact: "留守路线：最终评分大幅提升，但失败结局更严重",
            effects: { data: 10, morale: 8, fuel: -5 },
            routeTag: "stay"
          },
          {
            id: "evacuate",
            label: "立即撤离，保全人员",
            desc: "安全第一，打包所有可携带的样本和数据撤离。虽然科研目标未能全部完成，但全队平安。",
            impact: "撤离路线：保证人员安全，获得稳定评价",
            effects: { morale: 10, food: 5, data: -8 },
            routeTag: "evacuate"
          }
        ]
      }
    ],
    getSettlementPass: function(choices) {
      if (choices.ch2_evacuate === "evacuate") {
        return "你做出了艰难但明智的决定——撤离。虽然部分实验未完成，但所有队员安全脱险，已收集的数据和样本也得到妥善保存。直升机在暴风雪间隙降落，接走了全体队员。基地指挥官在电话里说：「人员安全永远是第一位的。你们做得很对。」";
      }
      return "冰裂的警告最终没有成为现实，你的坚持换来了丰厚的回报。冰下空洞的信号数据完整记录，冰芯异常的分析报告也全部完成。当救援直升机终于降临时，你手里握着足以改写极地科考史的成果。";
    },
    getSettlementFail: function(choices) {
      if (choices.ch2_evacuate === "stay") {
        return "你选择了留下，但冰裂比预期来得更早。站房剧烈晃动，所有队员不得不在零下四十度的暴风雪中紧急撤离到安全区。大量设备和样本被遗弃在崩塌区域。幸运的是，所有人都活了下来——但这代价太大了。";
      }
      return "第二章的考验远超预期，资源耗尽，队员状态崩溃。基地紧急协调了一次非常规撤离，直升机在暴风雪中冒险降落。你们活着离开了，但几乎什么都没带走。";
    }
  }
];

const campaignEndings = [
  {
    id: "aurora",
    name: "极光之路",
    rank: "S",
    rankClass: "rank-s",
    icon: "🌌",
    condition: function(score, choices, stats) {
      return score >= 280 && choices.ch1_anomaly === "study_deep" && choices.ch2_contact === "explore" && stats.commComplete;
    },
    narrative: "你的冒险精神和对真理的执着追求，最终换来了人类科学史上最辉煌的极地发现。冰下空洞中封存的远古微生物群落证明：生命在极端条件下的韧性远超想象。\n\n你的论文登上了《Nature》封面，全球媒体称你们为「冰原先驱者」。极地科考站因此获得了空前的经费支持，新一代科考队将在你的发现基础上继续深入。\n\n当极夜结束，第一缕极光在天际绽放时，你站在站房外，看着那片曾经只有黑暗的天空——你知道，这光芒里有你点燃的一份。"
  },
  {
    id: "guardian",
    name: "冰原守望",
    rank: "A",
    rankClass: "rank-a",
    icon: "🛡️",
    condition: function(score, choices, stats) {
      return score >= 200 && (choices.ch1_signal === "investigate" || choices.ch2_evacuate === "evacuate");
    },
    narrative: "在极端环境中，你选择了守护——守护队员的生命，守护与外界失联者的希望，守护作为科考人员最基本的责任感。\n\n虽然科研成果并非最顶尖，但你营救了冰原上被困的同行，或者在危险来临时做出了保全所有人的决定。基地在嘉奖令中写道：「在极端条件下将人员安全置于首位的指挥官，才是真正的极地守望者。」\n\n极夜终将过去，但你留下的精神遗产会永远铭刻在这片冰原上。"
  },
  {
    id: "lonely",
    name: "暗夜独行",
    rank: "B",
    rankClass: "rank-b",
    icon: "🌑",
    condition: function(score, choices, stats) {
      return score >= 120;
    },
    narrative: "极夜终于结束了，但代价沉重。你活了下来，也带回了一些科研成果，但过程中有太多遗憾——错过的信号、未能营救的同行、濒临崩溃的队员状态。\n\n你的报告被基地归档，不算出色也不算失败。在返程的直升机上，你望着那片渐行渐远的冰原，心中五味杂陈。也许下一次，你会做出不同的选择。\n\n但至少，你们都还活着。这本身就是一种胜利。"
  },
  {
    id: "frozen",
    name: "冰封遗志",
    rank: "C",
    rankClass: "rank-c",
    icon: "💀",
    condition: function() { return true; },
    narrative: "这次极夜值班的结局是沉重的。资源耗尽、士气崩溃、科研几乎停滞——你带回来的只有疲惫和遗憾。\n\n基地对这次任务的评级是「不合格」。你需要花很长时间来消化这次经历，队员们也各自选择了不同的道路。\n\n但即使在最黑暗的时刻，你收集到的那一点数据和样本仍然被封存在基地档案馆里。也许有一天，会有人从这些残缺的记录中发现价值。冰封的不仅是冰芯，还有你没有完成的意志。"
  }
];

const commChains = [
  {
    id: "supply_relay",
    name: "极地补给中继任务链",
    description: "基地要求建立完整通信链路，以便空投补给的精确定位与协调。侧重资源补给与士气提升，暴风雪影响较重。",
    icon: "📡",
    accentColor: "#357a90",
    interruptWeathers: ["暴风雪"],
    phases: [
      {
        id: "handshake",
        name: "握手同步",
        desc: "与基地卫星建立加密握手，校验时钟与频段。",
        requiredDays: 1,
        commMin: 2,
        reward: { morale: 3, data: 4 },
        log: "【通信】加密握手成功，与基地卫星建立稳定链路。时钟偏差已校准至毫秒级。"
      },
      {
        id: "coords",
        name: "坐标回传",
        desc: "以高功率发送 GPS 校准坐标，供空投系统快速锁定。",
        requiredDays: 1,
        commMin: 3,
        reward: { data: 10 },
        log: "【通信】坐标校准完毕。基地回复：已锁定站点位置，误差半径 < 12 米。"
      },
      {
        id: "sample_summary",
        name: "样本摘要传输",
        desc: "将样本元数据（类型、数量、完整度快照）压缩打包回传供基地预分析。",
        requiredDays: 1,
        commMin: 3,
        reward: { data: 18, morale: 4 },
        log: "【通信】样本摘要成功接收！基地科研组兴奋回复：冰芯年代数据远超预期，建议加强冷藏。"
      },
      {
        id: "supply_window",
        name: "申请补给窗口",
        desc: "发送物资需求清单并与调度中心确认补给空投的气象窗口。",
        requiredDays: 1,
        commMin: 4,
        reward: { fuel: 15, food: 12, morale: 8 },
        log: "【通信】补给窗口确认！基地调度：直升机将于换班日附带应急物资，预计燃油+15、食物+12。"
      },
      {
        id: "final_ack",
        name: "全链路确认",
        desc: "完成所有指令的最终确认并回传签收报文，任务链收尾。",
        requiredDays: 1,
        commMin: 3,
        reward: { data: 25, fuel: 5, morale: 5 },
        log: "【通信】全链路签收完成！基地授予「极区通信保障先锋」集体嘉奖，数据+25。"
      }
    ]
  },
  {
    id: "research_data",
    name: "科研数据回传任务链",
    description: "将站点采集的高价值科研数据分批传回国内数据中心。侧重数据产出，对通信稳定性要求高，低温天气会降低传输效率。",
    icon: "🔬",
    accentColor: "#6267a6",
    interruptWeathers: ["暴风雪", "低温"],
    phases: [
      {
        id: "bandwidth_test",
        name: "带宽测试",
        desc: "测试不同频段的数据传输速率，选择最优通道。",
        requiredDays: 1,
        commMin: 3,
        reward: { data: 8 },
        log: "【通信】带宽测试完成。选定 Ku 波段作为主数据通道，峰值速率 2.4 Mbps。"
      },
      {
        id: "ice_core_data",
        name: "冰芯数据上传",
        desc: "上传冰芯同位素分析原始数据与密度扫描图谱。",
        requiredDays: 2,
        commMin: 4,
        reward: { data: 22, morale: 2 },
        log: "【通信】冰芯数据包全部送达。数据中心回复：检测到末次冰期异常信号，需进一步验证。"
      },
      {
        id: "aerosol_data",
        name: "气溶胶观测数据回传",
        desc: "传输三个月来的气溶胶颗粒光谱采样与粒径分布。",
        requiredDays: 2,
        commMin: 4,
        reward: { data: 28 },
        log: "【通信】气溶胶观测数据入库。基地大气组：黑碳浓度曲线与北极站点高度相关，已联合发文。"
      },
      {
        id: "astronomy_data",
        name: "天文观测数据包",
        desc: "打包极夜期间的中微子探测与极光光谱数据回传。",
        requiredDays: 2,
        commMin: 5,
        reward: { data: 35, morale: 6 },
        log: "【通信】天文数据包完成校验。中微子实验组：发现新的能量阈值异常，可能改写模型。"
      },
      {
        id: "final_dataset",
        name: "完整数据集归档",
        desc: "生成最终校验和并将全量数据集标记为可发布。",
        requiredDays: 1,
        commMin: 3,
        reward: { data: 40, morale: 8 },
        log: "【通信】完整数据集归档成功！被收录进国家极地科学数据中心，数据+40，授予集体表彰。"
      }
    ]
  },
  {
    id: "emergency_medical",
    name: "紧急医疗联络任务链",
    description: "为队员建立与后方医疗专家组的远程会诊链路。侧重士气保障与应急处置，对实时性要求高，任何恶劣天气都可能造成会诊中断。",
    icon: "🏥",
    accentColor: "#c85f46",
    interruptWeathers: ["暴风雪", "低温", "极夜静风"],
    phases: [
      {
        id: "medical_handshake",
        name: "医疗专线握手",
        desc: "建立与基地医疗中心的加密专线，测试音视频连通性。",
        requiredDays: 1,
        commMin: 2,
        reward: { morale: 5, food: 3 },
        log: "【通信】医疗专线已接通。医疗中心：全员健康档案已同步，随时待命。"
      },
      {
        id: "crew_health_report",
        name: "队员健康评估上报",
        desc: "上传全员体征数据、心理健康问卷与体检报告供专家组评估。",
        requiredDays: 1,
        commMin: 3,
        reward: { morale: 6 },
        log: "【通信】健康评估完成。专家组建议：加强维生素 D 补充，注意心理疏导频次。"
      },
      {
        id: "tele_consultation",
        name: "远程会诊演练",
        desc: "模拟一例冻伤紧急处置，与后方医疗团队进行联合演练。",
        requiredDays: 2,
        commMin: 4,
        reward: { morale: 10, food: 5 },
        log: "【通信】远程会诊演练成功。医疗中心：站点处置流程规范，响应时间优于平均水平。"
      },
      {
        id: "emergency_protocol",
        name: "应急方案对接",
        desc: "与后方确认极端情况下的医疗后送、药品空投等应急方案细节。",
        requiredDays: 1,
        commMin: 4,
        reward: { morale: 8, fuel: 8 },
        log: "【通信】应急方案全部对接完成。直升机后送航线已标注，药品空投坐标已录入系统。"
      },
      {
        id: "medical_certification",
        name: "医疗保障资质认证",
        desc: "完成全部医疗流程考核，获得基地颁发的极地医疗保障资质。",
        requiredDays: 1,
        commMin: 3,
        reward: { morale: 15, data: 12 },
        log: "【通信】医疗保障资质认证通过！基地授予「极地医疗保障达标站」称号，士气大幅提升。"
      }
    ]
  }
];

const COMM_INTERRUPT_PENALTY = 0.35;
const COMM_DELAY_MAX = 3;

let state;
let tutorialActive = false;
let tutorialCurrentStep = 0;
let emergencyPending = null;

let campaignState = null;
let branchEventPending = null;

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
    desc: "拖动下方四个滑块分配当天有限的电力。总和不得超过天气给出的可用电力（超出时会报错无法结束当天）。\n\n⚠️ 关键：实验电力只用于产出科研样本，科研数据仅来自通信在线奖励+队员专长。供暖/通信/冷藏不足会损坏已有样本！",
    targetSelector: "#controlsPanel",
    cardPosition: "above",
    showSystems: true
  },
  {
    title: "第三步：结束今天，观察资源变化",
    desc: "点击「结束今天」后，系统按你分配的电力结算：\n• 未满足供暖/通信最低要求 → 扣士气+损坏样本完整度\n• 电力总和 + 天气附加 → 消耗柴油\n• 食物储藏电力不足 → 食物加速损耗+冰芯样本融化\n• 实验室电力 → 产出科研样本（现场发现价值累计，不计入数据）\n• 通信在线 → 获得额外观测数据，提升样本返运成功率\n• 即使保存达标，样本也会缓慢自然损耗（完整度衰减）\n\n【重要】样本需在任务结束时成功<b>返运</b>才计入最终科研成果！通信/冷藏/恒温/最终资源+天气+优先级共同决定返运成功率。\n\n直到任务结束（任务通关可返运）或某项资源归零失败（失败则无返运）。",
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
    consecutiveDays: 0,
    skills: {
      heat: 0,
      comm: 0,
      lab: 0,
      food: 0
    },
    skillLevels: {
      heat: 0,
      comm: 0,
      lab: 0,
      food: 0
    },
    tempStatuses: [],
    statusRestCounters: {},
    _consecutiveHighFatigue: 0,
    _consecutiveLowMood: 0,
    _growthLog: []
  }));
}

function getSkillLevel(member, stationId) {
  const exp = member.skills[stationId] || 0;
  let level = 0;
  for (let i = skillLevelConfig.thresholds.length - 1; i >= 0; i--) {
    if (exp >= skillLevelConfig.thresholds[i]) {
      level = i;
      break;
    }
  }
  return level;
}

function getSkillProgress(member, stationId) {
  const exp = member.skills[stationId] || 0;
  const level = getSkillLevel(member, stationId);
  const currentThreshold = skillLevelConfig.thresholds[level];
  const nextThreshold = skillLevelConfig.thresholds[level + 1];
  if (!nextThreshold) return { level, progress: 1, exp, nextExp: null };
  const progress = (exp - currentThreshold) / (nextThreshold - currentThreshold);
  return { level, progress: Math.min(1, progress), exp, nextExp: nextThreshold };
}

function getTempStatusEfficiencyMult(member) {
  let mult = 1;
  member.tempStatuses.forEach((sid) => {
    const def = tempStatusDefs[sid];
    if (def && def.efficiencyMult) mult *= def.efficiencyMult;
  });
  return mult;
}

function getTempStatusSpecialtyMult(member) {
  let mult = 1;
  member.tempStatuses.forEach((sid) => {
    const def = tempStatusDefs[sid];
    if (def && def.specialtyBonusMult) mult *= def.specialtyBonusMult;
  });
  return mult;
}

function hasTempStatus(member, statusId) {
  return member.tempStatuses.includes(statusId);
}

function addTempStatus(member, statusId) {
  if (!hasTempStatus(member, statusId)) {
    member.tempStatuses.push(statusId);
    member.statusRestCounters[statusId] = 0;
    return true;
  }
  return false;
}

function removeTempStatus(member, statusId) {
  const idx = member.tempStatuses.indexOf(statusId);
  if (idx >= 0) {
    member.tempStatuses.splice(idx, 1);
    delete member.statusRestCounters[statusId];
    return true;
  }
  return false;
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
      totalLost: 0,
      priority: "normal",
      returnAttempted: 0,
      returnSucceeded: 0,
      returnFailed: 0,
      returnedIntegrity: 0
    };
  });
  return samples;
}

function createInitialCommChainState(chain) {
  return {
    chainId: chain.id,
    currentPhaseIndex: 0,
    phaseProgress: 0,
    delayDays: 0,
    completedPhases: [],
    totalRewards: { fuel: 0, food: 0, morale: 0, data: 0 },
    isComplete: false,
    specialLogs: []
  };
}

function createInitialCommChains() {
  const chains = {};
  commChains.forEach((c) => {
    chains[c.id] = createInitialCommChainState(c);
  });
  return chains;
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
    commChains: createInitialCommChains(),
    activeCommChainId: commChains[0].id,
    lastCommAdvancedDay: 0,
    log: ["站内安静得只剩风声，等待选择任务。"]
  };
}

function createCampaignState() {
  return {
    active: true,
    chapterIndex: 0,
    choices: {},
    chapterOutcomes: [],
    triggeredBranches: [],
    completedEvents: [],
    labEfficiencyBonus: 0,
    weatherWeightOverride: null
  };
}

function serializeCampaignState() {
  if (!campaignState || !campaignState.active) return null;
  return {
    active: campaignState.active,
    chapterIndex: campaignState.chapterIndex,
    choices: { ...campaignState.choices },
    chapterOutcomes: JSON.parse(JSON.stringify(campaignState.chapterOutcomes || [])),
    triggeredBranches: [...(campaignState.triggeredBranches || [])],
    completedEvents: [...(campaignState.completedEvents || [])],
    labEfficiencyBonus: campaignState.labEfficiencyBonus || 0,
    weatherWeightOverride: campaignState.weatherWeightOverride ? { ...campaignState.weatherWeightOverride } : null
  };
}

function deserializeCampaignState(saved) {
  if (!saved) return null;
  return {
    active: saved.active !== false,
    chapterIndex: saved.chapterIndex || 0,
    choices: saved.choices || {},
    chapterOutcomes: saved.chapterOutcomes || [],
    triggeredBranches: saved.triggeredBranches || [],
    completedEvents: saved.completedEvents || [],
    labEfficiencyBonus: saved.labEfficiencyBonus || 0,
    weatherWeightOverride: saved.weatherWeightOverride || null
  };
}

function serializeGameState() {
  if (!state || !state.started) return null;
  return {
    started: state.started,
    mission: state.mission ? {
      id: state.mission.id,
      name: state.mission.name,
      tag: state.mission.tag,
      desc: state.mission.desc,
      color: state.mission.color,
      days: state.mission.days,
      initial: { ...state.mission.initial },
      allocations: { ...state.mission.allocations },
      dataGoal: state.mission.dataGoal,
      dataPerLab: state.mission.dataPerLab || 0,
      defaultCommChain: state.mission.defaultCommChain,
      weatherWeight: state.mission.weatherWeight ? { ...state.mission.weatherWeight } : null,
      intro: state.mission.intro,
      commBonus: state.mission.commBonus,
      commMoraleBonus: state.mission.commMoraleBonus,
      foodReserve: state.mission.foodReserve,
      emergencyChance: state.mission.emergencyChance,
      minFuel: state.mission.minFuel,
      minMorale: state.mission.minMorale,
      minFood: state.mission.minFood,
      isCustom: state.mission.isCustom
    } : null,
    selectedMissionId: state.selectedMissionId,
    day: state.day,
    fuel: state.fuel,
    morale: state.morale,
    food: state.food,
    data: state.data,
    weather: state.weather ? { ...state.weather } : null,
    allocations: { ...state.allocations },
    nextDayEffects: state.nextDayEffects ? { ...state.nextDayEffects } : null,
    crew: JSON.parse(JSON.stringify(state.crew || [])),
    equipment: JSON.parse(JSON.stringify(state.equipment || {})),
    samples: JSON.parse(JSON.stringify(state.samples || {})),
    sampleValueLostToday: state.sampleValueLostToday ? JSON.parse(JSON.stringify(state.sampleValueLostToday)) : {},
    commChains: JSON.parse(JSON.stringify(state.commChains || {})),
    activeCommChainId: state.activeCommChainId,
    lastCommAdvancedDay: state.lastCommAdvancedDay || 0,
    log: [...(state.log || [])]
  };
}

function deserializeGameState(saved) {
  if (!saved) return null;
  const mission = saved.mission;
  if (mission && !mission.successText) {
    mission.successText = function(s) {
      const ret = s.returnedValue !== undefined ? s.returnedValue : s.sampleValue;
      const disc = s.discoveredValue !== undefined ? s.discoveredValue : s.sampleValue;
      return `任务完成！现场发现样本价值${disc}，成功返运样本价值${ret}。科研成果：${s.data}，最终评分：${s.score}。`;
    };
    mission.failText = function(s) {
      const disc = s.discoveredValue !== undefined ? s.discoveredValue : s.sampleValue;
      return `任务失败，某项关键资源归零。现场发现样本价值${disc}，未及组织返运全部遗失。仅获得数据 ${s.data}，最终评分：${s.score}。`;
    };
  }
  return {
    started: saved.started,
    mission: mission,
    selectedMissionId: saved.selectedMissionId,
    day: saved.day,
    fuel: saved.fuel,
    morale: saved.morale,
    food: saved.food,
    data: saved.data,
    weather: saved.weather,
    allocations: saved.allocations,
    nextDayEffects: saved.nextDayEffects,
    crew: saved.crew,
    equipment: saved.equipment,
    samples: saved.samples,
    sampleValueLostToday: saved.sampleValueLostToday || {},
    commChains: saved.commChains,
    activeCommChainId: saved.activeCommChainId,
    lastCommAdvancedDay: saved.lastCommAdvancedDay || 0,
    log: saved.log || []
  };
}

function serializeUIState() {
  return {
    emergencyPending: emergencyPending ? JSON.parse(JSON.stringify(emergencyPending)) : null,
    branchEventPending: branchEventPending ? JSON.parse(JSON.stringify(branchEventPending)) : null,
    tutorialActive: tutorialActive || false,
    tutorialCurrentStep: tutorialCurrentStep || 0,
    activeOverlay: getActiveOverlay(),
    timestamp: Date.now()
  };
}

function getActiveOverlay() {
  if (!emergencyOverlay.classList.contains("hidden")) return "emergency";
  if (!branchEventOverlay.classList.contains("hidden")) return "branchEvent";
  if (!chapterIntroOverlay.classList.contains("hidden")) return "chapterIntro";
  if (!chapterSettleOverlay.classList.contains("hidden")) return "chapterSettle";
  if (!campaignEndingOverlay.classList.contains("hidden")) return "campaignEnding";
  if (!tutorialOverlay.classList.contains("hidden")) return "tutorial";
  return null;
}

function createCampaignSave(slotName) {
  const campaignSerialized = serializeCampaignState();
  const gameSerialized = serializeGameState();
  const uiSerialized = serializeUIState();
  if (!campaignSerialized || !gameSerialized) return null;
  const chapter = getCampaignChapter();
  return {
    version: CAMPAIGN_SAVE_VERSION,
    id: "campaign_save_" + Date.now(),
    slotName: slotName || `第${campaignSerialized.chapterIndex + 1}章 第${gameSerialized.day}天`,
    timestamp: Date.now(),
    lastPlayed: Date.now(),
    chapterIndex: campaignSerialized.chapterIndex,
    chapterName: chapter ? chapter.name : "",
    day: gameSerialized.day,
    totalDays: campaignState.chapterOutcomes.reduce((sum, o) => sum + 7, 0) + gameSerialized.day,
    fuel: gameSerialized.fuel,
    morale: gameSerialized.morale,
    food: gameSerialized.food,
    data: gameSerialized.data,
    choicesCount: Object.keys(campaignSerialized.choices).length,
    campaignState: campaignSerialized,
    gameState: gameSerialized,
    uiState: uiSerialized,
    extra: {}
  };
}

function loadCampaignSaves() {
  try {
    const raw = localStorage.getItem(CAMPAIGN_SAVE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map(save => migrateCampaignSave(save)).filter(Boolean);
  } catch (e) {
    console.error("Failed to load campaign saves:", e);
    return [];
  }
}

function saveCampaignSaves(saves) {
  try {
    localStorage.setItem(CAMPAIGN_SAVE_KEY, JSON.stringify(saves));
    return true;
  } catch (e) {
    console.error("Failed to save campaign saves:", e);
    return false;
  }
}

function migrateCampaignSave(save) {
  if (!save || !save.version) return null;
  try {
    if (save.version < CAMPAIGN_SAVE_VERSION) {
      if (save.version === 1 && CAMPAIGN_SAVE_VERSION >= 1) {
        if (!save.campaignState.completedEvents) {
          save.campaignState.completedEvents = save.campaignState.triggeredBranches || [];
        }
        if (!save.gameState.sampleValueLostToday) {
          save.gameState.sampleValueLostToday = {};
        }
        if (!save.uiState) {
          save.uiState = {
            emergencyPending: null,
            branchEventPending: null,
            tutorialActive: false,
            tutorialCurrentStep: 0,
            activeOverlay: null,
            timestamp: save.timestamp
          };
        }
        if (!save.extra) save.extra = {};
        save.version = CAMPAIGN_SAVE_VERSION;
      }
    }
    return save;
  } catch (e) {
    console.error("Failed to migrate campaign save:", e);
    return null;
  }
}

function writeCampaignSave(slotName) {
  if (!campaignState || !campaignState.active || !state || !state.started) {
    return { success: false, error: "没有可保存的战役进度" };
  }
  const newSave = createCampaignSave(slotName);
  if (!newSave) {
    return { success: false, error: "存档数据创建失败" };
  }
  const saves = loadCampaignSaves();
  saves.unshift(newSave);
  if (saves.length > CAMPAIGN_SAVE_LIMIT) {
    saves.length = CAMPAIGN_SAVE_LIMIT;
  }
  const success = saveCampaignSaves(saves);
  return {
    success,
    error: success ? null : "保存失败，请检查浏览器存储权限",
    save: newSave
  };
}

function readCampaignSave(saveId) {
  const saves = loadCampaignSaves();
  return saves.find(s => s.id === saveId) || null;
}

function deleteCampaignSave(saveId) {
  const saves = loadCampaignSaves();
  const filtered = saves.filter(s => s.id !== saveId);
  return saveCampaignSaves(filtered);
}

function hasCampaignSave() {
  const saves = loadCampaignSaves();
  return saves.length > 0;
}

function getLatestCampaignSave() {
  const saves = loadCampaignSaves();
  if (saves.length === 0) return null;
  return saves.sort((a, b) => b.lastPlayed - a.lastPlayed)[0];
}

function restoreCampaignSave(save) {
  if (!save) return { success: false, error: "存档不存在" };
  try {
    const migrated = migrateCampaignSave(save);
    if (!migrated) return { success: false, error: "存档版本不兼容，无法恢复" };
    campaignState = deserializeCampaignState(migrated.campaignState);
    state = deserializeGameState(migrated.gameState);
    if (!campaignState || !state) {
      return { success: false, error: "存档数据损坏，无法恢复" };
    }
    emergencyPending = migrated.uiState?.emergencyPending || null;
    branchEventPending = migrated.uiState?.branchEventPending || null;
    tutorialActive = migrated.uiState?.tutorialActive || false;
    tutorialCurrentStep = migrated.uiState?.tutorialCurrentStep || 0;
    const saves = loadCampaignSaves();
    const updated = saves.map(s => {
      if (s.id === migrated.id) {
        return { ...s, lastPlayed: Date.now() };
      }
      return s;
    });
    saveCampaignSaves(updated);
    return { success: true, save: migrated };
  } catch (e) {
    console.error("Failed to restore campaign save:", e);
    return { success: false, error: "存档恢复失败：" + e.message };
  }
}

function applyRestoredCampaignUI(save) {
  hideAllOverlays();
  missionDeskEl.classList.add("hidden");
  levelEditorPanel.classList.add("hidden");
  crewPanelEl.classList.remove("hidden");
  workshopPanelEl.classList.remove("hidden");
  samplesPanelEl.classList.remove("hidden");
  commPanelEl.classList.remove("hidden");
  controlsPanelEl.classList.remove("hidden");
  dayPreviewPanelEl.classList.remove("hidden");
  campaignProgressEl.classList.remove("hidden");
  const uiState = save?.uiState;
  if (uiState) {
    if (uiState.activeOverlay === "emergency" && emergencyPending) {
      showEmergencyEvent(emergencyPending);
    } else if (uiState.activeOverlay === "branchEvent" && branchEventPending) {
      showBranchEvent(branchEventPending);
    } else if (uiState.tutorialActive) {
      tutorialOverlay.classList.remove("hidden");
      showTutorialStep(uiState.tutorialCurrentStep);
    }
  }
  if (emergencyPending && emergencyOverlay.classList.contains("hidden")) {
    showEmergencyEvent(emergencyPending);
  } else if (branchEventPending && branchEventOverlay.classList.contains("hidden")) {
    showBranchEvent(branchEventPending);
  }
  renderCampaignProgress();
  render();
  addLog("📂 已从存档恢复战役进度。");
}

function abandonCampaign() {
  if (!confirm("确定要放弃当前战役吗？所有未保存的进度将丢失，已有的存档不会被删除。")) {
    return false;
  }
  hideAllOverlays();
  emergencyPending = null;
  branchEventPending = null;
  tutorialActive = false;
  campaignState = null;
  state = freshState();
  missionDeskEl.classList.remove("hidden");
  levelEditorPanel.classList.add("hidden");
  crewPanelEl.classList.add("hidden");
  workshopPanelEl.classList.add("hidden");
  samplesPanelEl.classList.add("hidden");
  commPanelEl.classList.add("hidden");
  controlsPanelEl.classList.add("hidden");
  dayPreviewPanelEl.classList.add("hidden");
  campaignProgressEl.classList.add("hidden");
  renderMissionCards();
  startBtn.disabled = true;
  render();
  addLog("已放弃当前战役，返回任务选择台。");
  return true;
}

let autosaveTimer = null;
function startAutosave() {
  stopAutosave();
  autosaveTimer = setInterval(() => {
    if (campaignState && campaignState.active && state && state.started) {
      const result = writeCampaignSave("自动存档");
      if (result.success) {
        showSaveToast("✅ 已自动保存");
      }
    }
  }, AUTOSAVE_INTERVAL);
}

function stopAutosave() {
  if (autosaveTimer) {
    clearInterval(autosaveTimer);
    autosaveTimer = null;
  }
}

function manualSave() {
  if (!campaignState || !campaignState.active) {
    showSaveToast("❌ 当前没有进行中的战役");
    return;
  }
  const chapter = getCampaignChapter();
  let slotName;
  try {
    slotName = prompt("为存档命名：", `${chapter ? chapter.name : "战役"} - 第${state.day}天`);
  } catch (e) {
    slotName = `${chapter ? chapter.name : "战役"} - 第${state.day}天`;
  }
  if (slotName === null) return;
  const result = writeCampaignSave(slotName || "手动存档");
  if (result.success) {
    showSaveToast("✅ 存档成功");
  } else {
    showSaveToast("❌ " + (result.error || "存档失败"));
  }
}

let saveToastTimer = null;
function showSaveToast(message) {
  let toast = document.getElementById("saveToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "saveToast";
    toast.className = "save-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  if (saveToastTimer) clearTimeout(saveToastTimer);
  saveToastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

function loadLatestCampaignSave() {
  const latest = getLatestCampaignSave();
  if (!latest) {
    showSaveToast("❌ 没有找到存档");
    return;
  }
  loadSpecificCampaignSave(latest.id);
}

function loadSpecificCampaignSave(saveId) {
  const save = readCampaignSave(saveId);
  if (!save) {
    showSaveToast("❌ 存档不存在");
    return;
  }
  if (!confirm(`确定要读取存档「${save.slotName}」吗？当前未保存的进度将丢失。`)) {
    return;
  }
  const result = restoreCampaignSave(save);
  if (result.success) {
    applyRestoredCampaignUI(save);
    showSaveToast("✅ 读档成功");
  } else {
    showSaveToast("❌ " + (result.error || "读档失败"));
  }
}

function showLoadSaveMenu() {
  const saves = loadCampaignSaves();
  if (saves.length === 0) {
    alert("暂无存档");
    return;
  }
  let html = "<div style='max-height:400px;overflow-y:auto'>";
  saves.forEach((save, idx) => {
    const d = new Date(save.lastPlayed);
    const dateStr = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
    html += `
      <div class="save-menu-item" data-save-id="${save.id}">
        <div class="save-menu-head">
          <strong>${save.slotName}</strong>
          <span class="save-menu-chapter">${save.chapterName || `第${save.chapterIndex + 1}章`} · 第${save.day}天</span>
        </div>
        <div class="save-menu-meta">
          <span>⛽${save.fuel}</span>
          <span>💪${save.morale}</span>
          <span>🍖${save.food}</span>
          <span>📊${save.data}</span>
          <span>选择×${save.choicesCount}</span>
        </div>
        <div class="save-menu-date">${dateStr}</div>
        <div class="save-menu-actions">
          <button type="button" class="save-menu-btn load" data-action="load">读取</button>
          <button type="button" class="save-menu-btn delete" data-action="delete">删除</button>
        </div>
      </div>
    `;
  });
  html += "</div>";
  const overlay = document.createElement("div");
  overlay.id = "loadSaveOverlay";
  overlay.className = "save-menu-overlay";
  overlay.innerHTML = `
    <div class="save-menu-mask"></div>
    <div class="save-menu-card">
      <div class="save-menu-head-bar">
        <h3>📂 战役存档</h3>
        <button type="button" class="save-menu-close" id="saveMenuClose">×</button>
      </div>
      ${html}
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.querySelector("#saveMenuClose").addEventListener("click", () => overlay.remove());
  overlay.querySelector(".save-menu-mask").addEventListener("click", () => overlay.remove());
  overlay.querySelectorAll(".save-menu-item").forEach(item => {
    const saveId = item.dataset.saveId;
    item.querySelector('[data-action="load"]').addEventListener("click", (e) => {
      e.stopPropagation();
      overlay.remove();
      loadSpecificCampaignSave(saveId);
    });
    item.querySelector('[data-action="delete"]').addEventListener("click", (e) => {
      e.stopPropagation();
      const save = readCampaignSave(saveId);
      if (confirm(`确定要删除存档「${save?.slotName || saveId}」吗？此操作不可撤销。`)) {
        deleteCampaignSave(saveId);
        overlay.remove();
        showSaveToast("✅ 存档已删除");
      }
    });
  });
}

function getCampaignChoicesSummary() {
  if (!campaignState || !campaignState.active) return [];
  const choiceLabels = {
    "ch1_anomaly": {
      "study_deep": { label: "深入研究异常", icon: "🔬", desc: "调配更多实验电力和通信带宽，全力解析异常数据" },
      "secure_store": { label: "封存样本优先生存", icon: "🛡️", desc: "将异常样本妥善封存，集中精力维持站内运转" }
    },
    "ch1_signal": {
      "investigate": { label: "冒着暴风雪搜救", icon: "🆘", desc: "组织小队携带通讯设备前往信号源搜救" },
      "ignore": { label: "记录坐标等待", icon: "⏳", desc: "将信号坐标记录在案，待暴风雪过后再计划行动" }
    },
    "ch2_contact": {
      "explore": { label: "部署钻探深入", icon: "⛏️", desc: "动用全部资源尝试钻探至信号源" },
      "monitor": { label: "远程监测积累", icon: "📡", desc: "利用通信和实验系统持续监测并记录信号变化" }
    },
    "ch2_evacuate": {
      "stay": { label: "留下完成实验", icon: "🔬", desc: "赌冰裂不会发生，坚持完成最后的科研目标" },
      "evacuate": { label: "立即撤离保全", icon: "🚁", desc: "安全第一，打包所有可携带的样本和数据撤离" }
    }
  };
  const summary = [];
  Object.keys(campaignState.choices).forEach(eventId => {
    const choiceId = campaignState.choices[eventId];
    const labels = choiceLabels[eventId] || {};
    const choice = labels[choiceId] || { label: choiceId, icon: "📜", desc: "已做出选择" };
    summary.push({
      eventId,
      choiceId,
      label: choice.label,
      icon: choice.icon,
      desc: choice.desc
    });
  });
  return summary;
}

function showCampaignChoices() {
  const choices = getCampaignChoicesSummary();
  if (choices.length === 0) {
    alert("当前战役尚未做出任何分支选择。");
    return;
  }
  let html = "<div style='max-height:500px;overflow-y:auto'>";
  choices.forEach(c => {
    html += `
      <div class="choice-summary-item">
        <div class="choice-summary-icon">${c.icon}</div>
        <div class="choice-summary-body">
          <div class="choice-summary-label">${c.label}</div>
          <div class="choice-summary-desc">${c.desc}</div>
        </div>
      </div>
    `;
  });
  html += "</div>";
  const overlay = document.createElement("div");
  overlay.id = "choicesOverlay";
  overlay.className = "save-menu-overlay";
  overlay.innerHTML = `
    <div class="save-menu-mask"></div>
    <div class="save-menu-card">
      <div class="save-menu-head-bar">
        <h3>📜 战役分支选择记录</h3>
        <button type="button" class="save-menu-close" id="choicesMenuClose">×</button>
      </div>
      ${html}
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.querySelector("#choicesMenuClose").addEventListener("click", () => overlay.remove());
  overlay.querySelector(".save-menu-mask").addEventListener("click", () => overlay.remove());
}

function markCampaignEventCompleted(eventId) {
  if (!campaignState || !campaignState.active) return;
  if (!campaignState.completedEvents) {
    campaignState.completedEvents = [];
  }
  if (!campaignState.completedEvents.includes(eventId)) {
    campaignState.completedEvents.push(eventId);
  }
}

function isCampaignEventCompleted(eventId) {
  if (!campaignState || !campaignState.active) return false;
  return campaignState.completedEvents?.includes(eventId) || false;
}

function getCampaignChapter() {
  if (!campaignState || !campaignState.active) return null;
  return campaignChapters[campaignState.chapterIndex] || null;
}

function getCampaignWeatherWeight() {
  if (!campaignState || !campaignState.active) return null;
  const chapter = getCampaignChapter();
  if (!chapter) return null;
  if (campaignState.weatherWeightOverride) return campaignState.weatherWeightOverride;
  if (typeof chapter.getWeatherWeight === "function") {
    return chapter.getWeatherWeight(campaignState.choices);
  }
  return chapter.weatherWeight || null;
}

function init() {
  state = freshState();
  startBtn.addEventListener("click", start);
  endDayBtn.addEventListener("click", endDay);
  clearArchiveBtn.addEventListener("click", clearArchive);
  archiveDetailCloseBtn.addEventListener("click", closeArchiveDetail);
  archiveDetailOkBtn.addEventListener("click", closeArchiveDetail);
  archiveDetailMask.addEventListener("click", closeArchiveDetail);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !archiveDetailOverlay.classList.contains("hidden")) {
      closeArchiveDetail();
    }
  });

  const continueCampaignBtn = document.getElementById("continueCampaignBtn");
  const saveBtn = document.getElementById("saveBtn");
  const loadBtn = document.getElementById("loadBtn");
  const choicesBtn = document.getElementById("choicesBtn");
  const abandonBtn = document.getElementById("abandonBtn");

  if (continueCampaignBtn) {
    continueCampaignBtn.addEventListener("click", showLoadSaveMenu);
  }
  if (saveBtn) {
    saveBtn.addEventListener("click", manualSave);
  }
  if (loadBtn) {
    loadBtn.addEventListener("click", showLoadSaveMenu);
  }
  if (choicesBtn) {
    choicesBtn.addEventListener("click", showCampaignChoices);
  }
  if (abandonBtn) {
    abandonBtn.addEventListener("click", () => {
      if (abandonCampaign()) {
        stopAutosave();
      }
    });
  }

  if (hasCampaignSave() && continueCampaignBtn) {
    continueCampaignBtn.classList.remove("hidden");
  }

  window.addEventListener("beforeunload", () => {
    if (campaignState && campaignState.active && state && state.started) {
      const saves = loadCampaignSaves();
      const existingAuto = saves.findIndex(s => s.slotName === "退出前自动存档");
      if (existingAuto > -1) {
        saves.splice(existingAuto, 1);
      }
      const newSave = createCampaignSave("退出前自动存档");
      if (newSave) {
        saves.unshift(newSave);
        if (saves.length > CAMPAIGN_SAVE_LIMIT) {
          saves.length = CAMPAIGN_SAVE_LIMIT;
        }
        try {
          localStorage.setItem(CAMPAIGN_SAVE_KEY, JSON.stringify(saves));
        } catch (e) {
          console.error("Failed to autosave on unload:", e);
        }
      }
    }
  });

  initTutorialEvents();
  initEditorEvents();
  initEmergencyEditorEvents();
  initFilterEvents();
  renderFilterTags();
  renderMissionCards();
  renderSavedLevels();
  renderAllocations();
  renderArchive();
  render();
}

function getMissionDifficultyScore(mission) {
  if (!mission.days) return 0;
  const daysScore = mission.days * 2;
  const goalScore = mission.dataGoal ? mission.dataGoal / 10 : 0;
  const fuelPenalty = Math.max(0, 80 - (mission.initial?.fuel ?? 80));
  const foodPenalty = Math.max(0, 70 - (mission.initial?.food ?? 70));
  const moralePenalty = Math.max(0, 75 - (mission.initial?.morale ?? 75));
  const resourcePenalty = (fuelPenalty + foodPenalty + moralePenalty) * 0.5;
  let extraReqsPenalty = 0;
  if (mission.minFuel) extraReqsPenalty += mission.minFuel * 0.3;
  if (mission.minFood) extraReqsPenalty += mission.minFood * 0.3;
  if (mission.minMorale) extraReqsPenalty += mission.minMorale * 0.2;
  return Math.round(daysScore + goalScore + resourcePenalty + extraReqsPenalty);
}

function getUniqueTags() {
  const tags = new Set();
  tags.add("剧情战役");
  getAllMissions().forEach((m) => {
    if (m.tag) tags.add(m.tag);
  });
  return Array.from(tags);
}

function filterMissions(missions) {
  return missions.filter((mission) => {
    if (filterState.tags.length > 0 && mission.tag) {
      if (!filterState.tags.includes(mission.tag)) return false;
    }
    if (filterState.days !== "all" && mission.days) {
      if (filterState.days === "short" && mission.days > 5) return false;
      if (filterState.days === "medium" && (mission.days < 6 || mission.days > 10)) return false;
      if (filterState.days === "long" && mission.days < 11) return false;
    }
    if (filterState.goal !== "all") {
      const goal = mission.dataGoal || 0;
      if (filterState.goal === "low" && goal > 100) return false;
      if (filterState.goal === "medium" && (goal < 101 || goal > 200)) return false;
      if (filterState.goal === "high" && goal < 201) return false;
    }
    return true;
  });
}

function sortMissions(missions) {
  const sorted = [...missions];
  if (filterState.sort === "difficultyAsc") {
    sorted.sort((a, b) => getMissionDifficultyScore(a) - getMissionDifficultyScore(b));
  } else if (filterState.sort === "difficultyDesc") {
    sorted.sort((a, b) => getMissionDifficultyScore(b) - getMissionDifficultyScore(a));
  }
  return sorted;
}

function renderFilterTags() {
  const tags = getUniqueTags();
  filterTagsEl.innerHTML = "";
  tags.forEach((tag) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `filter-chip tag-chip ${filterState.tags.includes(tag) ? "active" : ""}`;
    btn.dataset.tag = tag;
    btn.textContent = tag;
    btn.addEventListener("click", () => toggleTagFilter(tag));
    filterTagsEl.appendChild(btn);
  });
}

function toggleTagFilter(tag) {
  const idx = filterState.tags.indexOf(tag);
  if (idx > -1) {
    filterState.tags.splice(idx, 1);
  } else {
    filterState.tags.push(tag);
  }
  renderFilterTags();
  renderMissionCards();
}

function updateDayFilter(value) {
  filterState.days = value;
  filterDaysEl.querySelectorAll(".filter-chip").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.days === value);
  });
  renderMissionCards();
}

function updateGoalFilter(value) {
  filterState.goal = value;
  filterGoalEl.querySelectorAll(".filter-chip").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.goal === value);
  });
  renderMissionCards();
}

function updateSort(value) {
  filterState.sort = value;
  sortOptionsEl.querySelectorAll(".filter-chip").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.sort === value);
  });
  renderMissionCards();
}

function resetFilters() {
  filterState.tags = [];
  filterState.days = "all";
  filterState.goal = "all";
  filterState.sort = "default";
  renderFilterTags();
  filterDaysEl.querySelectorAll(".filter-chip").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.days === "all");
  });
  filterGoalEl.querySelectorAll(".filter-chip").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.goal === "all");
  });
  sortOptionsEl.querySelectorAll(".filter-chip").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.sort === "default");
  });
  renderMissionCards();
}

function initFilterEvents() {
  filterDaysEl.querySelectorAll(".filter-chip").forEach((btn) => {
    btn.addEventListener("click", () => updateDayFilter(btn.dataset.days));
  });
  filterGoalEl.querySelectorAll(".filter-chip").forEach((btn) => {
    btn.addEventListener("click", () => updateGoalFilter(btn.dataset.goal));
  });
  sortOptionsEl.querySelectorAll(".filter-chip").forEach((btn) => {
    btn.addEventListener("click", () => updateSort(btn.dataset.sort));
  });
  resetFilterBtn.addEventListener("click", resetFilters);
}

function syncSelectionWithVisibleMissions() {
  if (state.started || !state.selectedMissionId) return;

  const selectedCard = missionCardsEl.querySelector(
    `.mission-card[data-mission-id="${state.selectedMissionId}"]`
  );
  if (selectedCard) return;

  state.selectedMissionId = null;
  startBtn.disabled = true;
  startBtn.textContent = "确认任务并进入电力分配";
}

function renderMissionCards() {
  missionCardsEl.innerHTML = "";

  const campaignMission = {
    id: "campaign",
    tag: "剧情战役",
    name: "极夜征途",
    days: 14,
    dataGoal: 80,
    initial: { fuel: 85, morale: 80, food: 75 }
  };

  const campaignPassesFilter = filterMissions([campaignMission]).length > 0;

  if (campaignPassesFilter) {
    const campaignCard = document.createElement("div");
    campaignCard.className = `mission-card campaign-card ${state.selectedMissionId === "campaign" ? "selected" : ""}`;
    campaignCard.dataset.missionId = "campaign";
    campaignCard.innerHTML = `
    <div class="mission-card-head" style="background:linear-gradient(135deg,#13272b 0%,#357a90 100%)">
      <span class="mission-tag">剧情战役</span>
      <h3>极夜征途</h3>
    </div>
    <div class="mission-card-body">
      <p class="mission-card-desc">分章节剧情模式，你的每一个选择都将影响后续章节的天气、资源和故事走向。两章完整剧情，四种不同结局。</p>
      <div class="mission-stats">
        <span>章节<strong>2</strong></span>
        <span>柴油<strong>85</strong></span>
        <span>士气<strong>80</strong></span>
        <span>食物<strong>75</strong></span>
      </div>
      <div class="mission-goal">
        目标：完成两章剧情，达成最佳结局
      </div>
    </div>
  `;
    campaignCard.addEventListener("click", () => selectMission("campaign"));
    missionCardsEl.appendChild(campaignCard);
  }

  let allMissions = getAllMissions();
  allMissions = filterMissions(allMissions);
  allMissions = sortMissions(allMissions);

  allMissions.forEach((mission) => {
    const card = document.createElement("div");
    card.className = `mission-card ${mission.isCustom ? "custom-card" : ""} ${state.selectedMissionId === mission.id ? "selected" : ""}`;
    card.dataset.missionId = mission.id;
    const goalText = mission.dataGoal
      ? `科研成果（数据+返运样本价值）≥ ${mission.dataGoal}`
      : `撑过 ${mission.days} 天`;
    const extraReqs = [];
    if (mission.isCustom) {
      if (mission.minFuel) extraReqs.push(`柴油≥${mission.minFuel}`);
      if (mission.minMorale) extraReqs.push(`士气≥${mission.minMorale}`);
      if (mission.minFood) extraReqs.push(`食物≥${mission.minFood}`);
    }
    const goalFull = extraReqs.length > 0 ? `${goalText}；${extraReqs.join("，")}` : goalText;
    const diffScore = getMissionDifficultyScore(mission);
    const diffLabel = diffScore < 25 ? "简单" : diffScore < 45 ? "中等" : "困难";
    const diffClass = diffScore < 25 ? "diff-easy" : diffScore < 45 ? "diff-medium" : "diff-hard";
    const defaultChain = mission.defaultCommChain
      ? commChains.find((c) => c.id === mission.defaultCommChain)
      : null;
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
          目标：${goalFull}
        </div>
        ${defaultChain ? `
        <div class="mission-comm-chain">
          <span class="mission-comm-chain-label">推荐通信链</span>
          <span class="mission-comm-chain-name" style="color:${defaultChain.accentColor}">
            ${defaultChain.icon} ${defaultChain.name}
          </span>
        </div>
        ` : ""}
        <div class="mission-difficulty ${diffClass}">
          <span class="diff-label">难度</span>
          <span class="diff-bar"><span class="diff-fill"></span></span>
          <span class="diff-text">${diffLabel}</span>
        </div>
        ${mission.isCustom ? `
          <div class="mission-card-actions">
            <button type="button" class="mission-card-edit-btn" data-action="edit" data-id="${mission.id}">✏ 编辑</button>
            <button type="button" class="mission-card-delete-btn" data-action="delete" data-id="${mission.id}">🗑 删除</button>
          </div>
        ` : ""}
      </div>
    `;
    const fill = card.querySelector(".diff-fill");
    if (fill) {
      fill.style.width = Math.min(100, diffScore * 2) + "%";
    }
    card.addEventListener("click", (e) => {
      const action = e.target.dataset.action;
      const id = e.target.dataset.id;
      if (action === "edit") {
        e.stopPropagation();
        editLevel(id);
      } else if (action === "delete") {
        e.stopPropagation();
        deleteLevel(id);
      } else {
        selectMission(mission.id);
      }
    });
    missionCardsEl.appendChild(card);
  });

  const hasCards = missionCardsEl.children.length > 0;
  if (hasCards) {
    missionCardsEl.classList.remove("hidden");
    missionEmptyEl.classList.add("hidden");
  } else {
    missionCardsEl.classList.add("hidden");
    missionEmptyEl.classList.remove("hidden");
  }

  syncSelectionWithVisibleMissions();
}

function selectMission(missionId) {
  state.selectedMissionId = missionId;
  document.querySelectorAll(".mission-card").forEach((el) => {
    el.classList.toggle("selected", el.dataset.missionId === missionId);
  });
  startBtn.disabled = false;
  if (missionId === "campaign") {
    startBtn.textContent = "确认「极夜征途」剧情战役";
    addLog("已选择剧情战役：极夜征途。");
  } else {
    const mission = findMissionById(missionId);
    if (mission) {
      addLog(`已选择任务：${mission.name}${mission.isCustom ? "（自定义关卡）" : ""}。`);
      startBtn.textContent = `确认「${mission.name}」并进入电力分配`;
    }
  }
  render();
}

function start() {
  if (!state.selectedMissionId) return;

  if (state.selectedMissionId === "campaign") {
    startCampaign();
    return;
  }

  hideAllOverlays();
  emergencyPending = null;
  branchEventPending = null;
  tutorialActive = false;

  const mission = findMissionById(state.selectedMissionId);
  if (!mission) return;

  const customSuccessText = mission.isCustom ? function(s) {
    const base = s.data >= (mission.dataGoal || 0)
      ? `自定义关卡「${mission.name}」完成！科研成果 ${s.data}，达成目标。最终评分：${s.score}。`
      : `自定义关卡「${mission.name}」撑过了${mission.days}天，但科研成果仅 ${s.data}（目标≥${mission.dataGoal || 0}）。最终评分：${s.score}。`;
    const extra = [];
    if (mission.minFuel && s.fuel < mission.minFuel) extra.push(`柴油未达最低要求（${s.fuel}/${mission.minFuel}）`);
    if (mission.minMorale && s.morale < mission.minMorale) extra.push(`士气未达最低要求（${s.morale}/${mission.minMorale}）`);
    if (mission.minFood && s.food < mission.minFood) extra.push(`食物未达最低要求（${s.food}/${mission.minFood}）`);
    if (extra.length > 0) return base + ` 但部分条件未达成：${extra.join('，')}。`;
    return base;
  } : null;
  const customFailText = mission.isCustom ? function(s) {
    return `自定义关卡「${mission.name}」失败，某项关键资源归零。仅获得科研成果 ${s.data}。最终评分：${s.score}。`;
  } : null;

  campaignState = null;
  state = {
    started: true,
    mission: {
      ...mission,
      successText: customSuccessText || mission.successText,
      failText: customFailText || mission.failText
    },
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
    commChains: createInitialCommChains(),
    activeCommChainId: mission.defaultCommChain || commChains[0].id,
    lastCommAdvancedDay: 0,
    log: [mission.intro]
  };
  resultEl.classList.add("hidden");
  missionDeskEl.classList.add("hidden");
  levelEditorPanel.classList.add("hidden");
  crewPanelEl.classList.remove("hidden");
  workshopPanelEl.classList.remove("hidden");
  samplesPanelEl.classList.remove("hidden");
  commPanelEl.classList.remove("hidden");
  controlsPanelEl.classList.remove("hidden");
  dayPreviewPanelEl.classList.remove("hidden");
  campaignProgressEl.classList.add("hidden");
  autoAssignCrew();
  render();
  setTimeout(() => {
    refreshTutorialHighlight();
    if (!isTutorialDone() && !tutorialActive) {
      startTutorial();
    }
  }, 50);
}

function startCampaign() {
  hideAllOverlays();
  emergencyPending = null;
  branchEventPending = null;
  tutorialActive = false;
  campaignState = createCampaignState();
  missionDeskEl.classList.add("hidden");
  startAutosave();
  showChapterIntro(0);
}

function showChapterIntro(chapterIndex) {
  const chapter = campaignChapters[chapterIndex];
  if (!chapter) return;

  chapterIntroBadge.textContent = chapter.badge;
  chapterIntroTitle.textContent = chapter.name;
  chapterIntroSubtitle.textContent = chapter.subtitle;
  chapterIntroNarrative.innerHTML = chapter.narrative.split("\n").map(p => p ? `<p style="margin:0 0 8px">${p}</p>` : "").join("");

  const objectivesEl = chapterIntroObjectives;
  objectivesEl.innerHTML = "";
  const objectives = typeof chapter.getObjectives === "function"
    ? chapter.getObjectives(campaignState.choices)
    : chapter.objectives;
  if (objectives) {
    objectives.forEach((obj) => {
      const item = document.createElement("div");
      item.className = "chapter-obj-item";
      item.innerHTML = `<span class="obj-icon">${obj.icon}</span>${obj.name}`;
      objectivesEl.appendChild(item);
    });
  }

  if (chapterIndex > 0 && campaignState.chapterOutcomes.length > 0) {
    chapterIntroCarryover.classList.remove("hidden");
    const prev = campaignState.chapterOutcomes[campaignState.chapterOutcomes.length - 1];
    let nextInitial;
    if (typeof chapter.getInitial === "function") {
      nextInitial = chapter.getInitial(prev, campaignState.choices);
    } else {
      nextInitial = chapter.initial;
    }
    const parts = [];
    parts.push(`柴油 ${prev.fuel} → ${nextInitial ? nextInitial.fuel : "?"}`);
    parts.push(`士气 ${prev.morale} → ${nextInitial ? nextInitial.morale : "?"}`);
    parts.push(`食物 ${prev.food} → ${nextInitial ? nextInitial.food : "?"}`);
    parts.push(`数据 ${prev.data} → ${nextInitial ? nextInitial.data : "?"}`);
    chapterIntroCarryover.innerHTML = `<strong>上一章资源结转：</strong><br>${parts.join("　｜　")}`;
  } else {
    chapterIntroCarryover.classList.add("hidden");
  }

  chapterIntroStartBtn.onclick = function() {
    chapterIntroOverlay.classList.add("hidden");
    startCampaignChapter(chapterIndex);
  };

  chapterIntroOverlay.classList.remove("hidden");
}

function startCampaignChapter(chapterIndex) {
  const chapter = campaignChapters[chapterIndex];
  if (!chapter) return;

  hideAllOverlays();
  emergencyPending = null;
  branchEventPending = null;

  campaignState.chapterIndex = chapterIndex;
  campaignState.triggeredBranches = [];

  let initial, weatherWeight, dataGoal;

  if (chapterIndex === 0) {
    initial = { ...chapter.initial };
    dataGoal = chapter.dataGoal;
  } else {
    const carryover = campaignState.chapterOutcomes.length > 0
      ? campaignState.chapterOutcomes[campaignState.chapterOutcomes.length - 1]
      : { fuel: 50, morale: 50, food: 50, data: 0 };
    initial = typeof chapter.getInitial === "function"
      ? chapter.getInitial(carryover, campaignState.choices)
      : { ...chapter.initial };
    dataGoal = chapter.dataGoal;
  }

  weatherWeight = typeof chapter.getWeatherWeight === "function"
    ? chapter.getWeatherWeight(campaignState.choices)
    : chapter.weatherWeight;

  if (campaignState.weatherWeightOverride) {
    weatherWeight = campaignState.weatherWeightOverride;
  }

  const fakeMission = {
    id: "campaign_ch" + chapterIndex,
    name: chapter.name + "（剧情战役）",
    tag: chapter.badge,
    desc: chapter.subtitle,
    color: "#357a90",
    days: chapter.days,
    initial: initial,
    allocations: { ...chapter.allocations },
    dataGoal: dataGoal,
    dataPerLab: 0,
    weatherWeight: weatherWeight,
    intro: chapter.narrative.split("\n")[0],
    successText: function() { return ""; },
    failText: function() { return ""; }
  };

  const carryoverCrew = (chapterIndex > 0 && campaignState.chapterOutcomes.length > 0)
    ? campaignState.chapterOutcomes[campaignState.chapterOutcomes.length - 1].crew
    : null;
  const carryoverEquipment = (chapterIndex > 0 && campaignState.chapterOutcomes.length > 0)
    ? campaignState.chapterOutcomes[campaignState.chapterOutcomes.length - 1].equipment
    : null;
  const carryoverSamples = (chapterIndex > 0 && campaignState.chapterOutcomes.length > 0)
    ? campaignState.chapterOutcomes[campaignState.chapterOutcomes.length - 1].samples
    : null;

  let initCrew;
  if (carryoverCrew) {
    initCrew = JSON.parse(JSON.stringify(carryoverCrew));
    initCrew.forEach((m) => {
      m.station = null;
      m.previousStation = null;
      m.consecutiveDays = 0;
      m.tempStatuses = [];
      m.statusRestCounters = {};
      m._consecutiveHighFatigue = 0;
      m._consecutiveLowMood = 0;
      m.fatigue = Math.max(m.initialFatigue || 15, m.fatigue - 30);
      m.mood = Math.min(100, m.mood + 15);
    });
  } else {
    initCrew = createInitialCrew();
  }

  state = {
    started: true,
    mission: fakeMission,
    selectedMissionId: "campaign",
    day: 1,
    fuel: initial.fuel,
    morale: initial.morale,
    food: initial.food,
    data: initial.data,
    weather: pickWeatherForMission(fakeMission),
    allocations: { ...chapter.allocations },
    nextDayEffects: null,
    crew: initCrew,
    equipment: carryoverEquipment ? JSON.parse(JSON.stringify(carryoverEquipment)) : createInitialEquipment(),
    samples: carryoverSamples ? JSON.parse(JSON.stringify(carryoverSamples)) : createInitialSamples(),
    sampleValueLostToday: {},
    commChains: createInitialCommChains(),
    activeCommChainId: chapter.defaultCommChain || commChains[0].id,
    lastCommAdvancedDay: 0,
    log: [chapter.narrative.split("\n")[0]]
  };

  resultEl.classList.add("hidden");
  crewPanelEl.classList.remove("hidden");
  workshopPanelEl.classList.remove("hidden");
  samplesPanelEl.classList.remove("hidden");
  commPanelEl.classList.remove("hidden");
  controlsPanelEl.classList.remove("hidden");
  dayPreviewPanelEl.classList.remove("hidden");
  campaignProgressEl.classList.remove("hidden");
  autoAssignCrew();
  renderCampaignProgress();
  render();
}

function renderCampaignProgress() {
  if (!campaignState || !campaignState.active) {
    campaignProgressEl.classList.add("hidden");
    return;
  }
  campaignProgressEl.classList.remove("hidden");

  const ch1State = campaignState.chapterIndex >= 1 ? "done" : "current";
  const ch2State = campaignState.chapterIndex >= 2 ? "done" : campaignState.chapterIndex === 1 ? "current" : "";

  campaignChapter1El.className = "campaign-chapter-dot " + ch1State;
  campaignChapter2El.className = "campaign-chapter-dot " + ch2State;

  const chapter = getCampaignChapter();
  campaignChapterNameEl.textContent = chapter ? chapter.name : "";
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
  let weatherWeight = mission.weatherWeight;
  if (campaignState && campaignState.active && campaignState.weatherWeightOverride) {
    weatherWeight = campaignState.weatherWeightOverride;
  }
  if (!weatherWeight) {
    return weatherDeck[Math.floor(Math.random() * weatherDeck.length)];
  }
  const weighted = [];
  weatherDeck.forEach((w) => {
    const weight = weatherWeight.hasOwnProperty(w.name) ? weatherWeight[w.name] : 1;
    if (weight > 0) {
      for (let i = 0; i < weight; i++) weighted.push(w);
    }
  });
  if (weighted.length === 0) {
    return weatherDeck[Math.floor(Math.random() * weatherDeck.length)];
  }
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
  if (campaignState && campaignState.labEfficiencyBonus > 0) {
    effects.labEfficiency += campaignState.labEfficiencyBonus;
    effects.details.push(`剧情加成：实验效率+${campaignState.labEfficiencyBonus}`);
  }

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
      s.integrity = Math.min(100, s.integrity + 1);
    }
    if (s.count > 0) {
      const dailyDecay = Math.random() < 0.3 ? Math.random() * 1.5 : 0;
      if (dailyDecay > 0 && s.integrity > 30) {
        s.integrity = Math.max(30, Math.round(s.integrity - dailyDecay));
      }
    }
  });
  return result;
}

function calculateSampleTotalValue() {
  let total = 0;
  let weightedIntegrity = 0;
  let totalWeight = 0;
  let totalDiscoveredValue = 0;
  let detailByType = {};
  sampleTypes.forEach((type) => {
    const s = state.samples[type.id];
    const val = s.count * type.value;
    const integrityFactor = s.integrity / 100;
    const discoveredVal = s.totalProduced * type.value;
    const currentVal = val * integrityFactor;
    total += currentVal;
    totalDiscoveredValue += discoveredVal;
    weightedIntegrity += s.integrity * val;
    totalWeight += val;
    detailByType[type.id] = {
      typeId: type.id,
      type,
      count: s.count,
      integrity: s.integrity,
      currentValue: Math.round(currentVal),
      discoveredValue: discoveredVal,
      priority: s.priority,
      weight: type.weight
    };
  });
  const avgIntegrity = totalWeight > 0 ? Math.round(weightedIntegrity / totalWeight) : 100;
  return {
    totalValue: Math.round(total),
    avgIntegrity,
    discoveredValue: totalDiscoveredValue,
    detailByType
  };
}

function getPriorityConfig(priorityId) {
  return returnPriorityLevels.find((p) => p.id === priorityId) || returnPriorityLevels[2];
}

function performReturnSettlement(allocations, weather, finalResources) {
  const result = {
    succeeded: [],
    failed: [],
    totalAttempted: 0,
    totalSucceeded: 0,
    totalFailed: 0,
    returnedValue: 0,
    discoveredValue: 0,
    capacityUsed: 0,
    capacityTotal: 0,
    conditions: {},
    logs: []
  };

  const commPower = allocations.comm || 0;
  const foodPower = allocations.food || 0;
  const heatPower = allocations.heat || 0;
  const { fuel, food, morale } = finalResources;

  const weatherMultMap = { "晴朗": 1.0, "低温": 0.85, "暴风雪": 0.55, "极夜静风": 0.95 };
  const weatherMult = weatherMultMap[weather.name] || 1.0;

  const baseCapacity = 10;
  const commBonus = commPower >= 4 ? 4 : commPower >= 3 ? 2 : commPower >= 2 ? 1 : 0;
  const foodBonus = foodPower >= 4 ? 3 : foodPower >= 3 ? 1 : 0;
  const moraleBonus = morale >= 70 ? 2 : morale >= 50 ? 1 : 0;
  const capacity = Math.max(4, baseCapacity + commBonus + foodBonus + moraleBonus);
  result.capacityTotal = capacity;

  const commSuccessRate = Math.min(0.95, 0.4 + commPower * 0.12);
  const foodPreserveRate = Math.min(0.95, 0.5 + foodPower * 0.10);
  const heatStableRate = Math.min(0.95, 0.5 + heatPower * 0.10);
  const resourceRate = Math.min(1.0, (fuel >= 20 ? 1.0 : fuel / 20) * 0.3 + (food >= 20 ? 1.0 : food / 20) * 0.3 + (morale >= 40 ? 1.0 : morale / 40) * 0.4);

  result.conditions = {
    weather: { name: weather.name, multiplier: weatherMult },
    comm: { power: commPower, rate: commSuccessRate },
    food: { power: foodPower, rate: foodPreserveRate },
    heat: { power: heatPower, rate: heatStableRate },
    resources: { fuel, food, morale, rate: resourceRate },
    capacity
  };

  result.logs.push(`返运运力：基础${baseCapacity} + 通信+${commBonus} + 冷藏+${foodBonus} + 士气+${moraleBonus} = 总${capacity}单位`);
  result.logs.push(`环境系数：天气${weather.name}×${weatherMult.toFixed(2)}，通信成功率${Math.round(commSuccessRate*100)}%，冷藏保障${Math.round(foodPreserveRate*100)}%，恒温保障${Math.round(heatStableRate*100)}%，综合资源${Math.round(resourceRate*100)}%`);

  const priorityOrder = { critical: 0, high: 1, normal: 2, low: 3 };
  const allItems = [];

  sampleTypes.forEach((type) => {
    const s = state.samples[type.id];
    const discoveredVal = s.totalProduced * type.value;
    result.discoveredValue += discoveredVal;

    for (let i = 0; i < s.count; i++) {
      allItems.push({
        typeId: type.id,
        type,
        index: i,
        priority: s.priority,
        priorityRank: priorityOrder[s.priority] || 2,
        priorityWeight: getPriorityConfig(s.priority).weight,
        sampleWeight: type.weight,
        integrity: s.integrity,
        baseRisk: type.baseRisk
      });
    }
  });

  allItems.sort((a, b) => {
    if (a.priorityRank !== b.priorityRank) return a.priorityRank - b.priorityRank;
    const va = a.type.value * (a.integrity / 100);
    const vb = b.type.value * (b.integrity / 100);
    return vb - va;
  });

  result.totalAttempted = allItems.length;

  const acceptedByType = {};
  allItems.forEach((item) => {
    const effectiveWeight = item.sampleWeight * item.priorityWeight;
    if (result.capacityUsed + effectiveWeight > capacity) {
      result.failed.push({
        ...item,
        reason: "capacity",
        reasonText: "运力不足，样本被遗留在科考站"
      });
      return;
    }

    const finalSuccessRate = Math.max(0.05,
      weatherMult * commSuccessRate * foodPreserveRate * heatStableRate * resourceRate * (1 - item.baseRisk)
    );
    const priorityBoost = { critical: 0.20, high: 0.10, normal: 0.00, low: -0.10 }[item.priority] || 0;
    const actualRate = Math.min(0.99, finalSuccessRate + priorityBoost);

    const roll = Math.random();
    if (roll < actualRate) {
      result.capacityUsed += effectiveWeight;
      result.totalSucceeded++;
      const finalIntegrity = Math.max(5, Math.round(item.integrity * (0.75 + Math.random() * 0.25)));
      const val = Math.round(item.type.value * finalIntegrity / 100);
      result.returnedValue += val;
      if (!acceptedByType[item.typeId]) acceptedByType[item.typeId] = [];
      acceptedByType[item.typeId].push(finalIntegrity);
      result.succeeded.push({
        ...item,
        finalIntegrity,
        value: val
      });
    } else {
      result.totalFailed++;
      const reasons = [];
      if (weatherMult < 0.7) reasons.push("恶劣天气");
      if (commSuccessRate < 0.7) reasons.push("通信不畅定位失败");
      if (foodPreserveRate < 0.7) reasons.push("冷藏中断样本失活");
      if (heatStableRate < 0.7) reasons.push("温度失控样本损坏");
      if (resourceRate < 0.6) reasons.push("队员状态不佳操作失误");
      if (item.baseRisk > 0.12) reasons.push("样本本身高风险");
      result.failed.push({
        ...item,
        reason: "failed",
        reasonText: reasons.length > 0 ? reasons.join("、") : "运输途中意外损坏"
      });
    }
  });

  sampleTypes.forEach((type) => {
    const s = state.samples[type.id];
    const accepted = acceptedByType[type.id] || [];
    s.returnAttempted = allItems.filter((it) => it.typeId === type.id).length;
    s.returnSucceeded = accepted.length;
    s.returnFailed = s.returnAttempted - accepted.length;
    if (accepted.length > 0) {
      s.returnedIntegrity = Math.round(accepted.reduce((a, b) => a + b, 0) / accepted.length);
    } else {
      s.returnedIntegrity = 0;
    }
  });

  if (result.totalSucceeded > 0) {
    const avgInt = result.succeeded.reduce((a, b) => a + b.finalIntegrity, 0) / result.succeeded.length;
    result.logs.push(`成功带回 ${result.totalSucceeded}/${result.totalAttempted} 份样本，平均完整度 ${Math.round(avgInt)}%，返运价值 ${result.returnedValue}`);
  } else if (result.totalAttempted > 0) {
    result.logs.push(`全部 ${result.totalAttempted} 份样本未能成功返运`);
  }

  return result;
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
  state.data += dataGain;

  const commResult = processCommChainDay(eqEffects);

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
  if (commDataGain > 0) dataParts.push(`${commDataGain}（通信在线）`);
  if (missionCommBonus > 0) dataParts.push(`+${missionCommBonus}（任务奖励）`);
  if (crewEffects.dataBoost > 0) dataParts.push(`+${crewEffects.dataBoost}（队员专长）`);
  settlementLines.push(`• 数据产出：${dataParts.length ? dataParts.join(' ') : '0'} = ${dataGain}`);

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

  if (commResult && commResult.log) {
    if (commResult.phaseCompleted) {
      const rw = [];
      if (commResult.rewardApplied) {
        if (commResult.rewardApplied.fuel) rw.push(`柴油+${commResult.rewardApplied.fuel}`);
        if (commResult.rewardApplied.food) rw.push(`食物+${commResult.rewardApplied.food}`);
        if (commResult.rewardApplied.morale) rw.push(`士气+${commResult.rewardApplied.morale}`);
        if (commResult.rewardApplied.data) rw.push(`数据+${commResult.rewardApplied.data}`);
      }
      settlementLines.push(`【通信任务·阶段完成】✅「${commResult.chainName || "任务链"}」${commResult.phaseName} 完成！${rw.length ? `奖励：${rw.join('，')}` : ''}`);
      settlementLines.push(`【通信任务·基地密文】${commResult.log.replace(/^【通信】/, '').replace(/^【通信.*?】/, '')}`);
    } else if (commResult.completed) {
      settlementLines.push(`【通信任务链·全部完成】🎉「${commResult.chainName || "远程通信任务链"}」圆满收尾，基地集体嘉奖令已颁发！`);
    } else {
      settlementLines.push(commResult.log);
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

  if (campaignState && campaignState.active) {
    const chapter = getCampaignChapter();
    if (chapter && chapter.branchEvents) {
      const branch = chapter.branchEvents.find((b) => b.day === state.day && !isCampaignEventCompleted(b.id) && !campaignState.triggeredBranches.includes(b.id));
      if (branch) {
        showBranchEvent(branch);
        render();
        return;
      }
    }
  }

  if (Math.random() < getCustomEmergencyChance()) {
    const pool = getEmergencyPool();
    const evt = pickWeightedEmergency(pool);
    if (evt) {
      addLog(`⚠ 突发事件：${evt.name}！`);
      showEmergencyEvent(evt);
      render();
      return;
    }
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

function showBranchEvent(event) {
  if (isCampaignEventCompleted(event.id)) {
    return;
  }
  branchEventPending = event;
  branchEventIcon.textContent = event.icon;
  branchEventTitle.textContent = event.name;
  branchEventDesc.textContent = event.desc;
  branchEventDayInfo.textContent = `第${state.day}天 · 剧情分支`;

  branchEventOptions.innerHTML = "";
  event.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "branch-event-option";
    btn.innerHTML = `<strong>${opt.label}</strong><span class="branch-event-option-desc">${opt.desc}</span><span class="branch-event-option-impact">${opt.impact}</span>`;
    btn.addEventListener("click", () => handleBranchChoice(idx));
    branchEventOptions.appendChild(btn);
  });

  branchEventOverlay.classList.remove("hidden");
}

function handleBranchChoice(idx) {
  const event = branchEventPending;
  const opt = event.options[idx];
  const fx = opt.effects;

  if (fx.fuel) state.fuel += fx.fuel;
  if (fx.food) state.food += fx.food;
  if (fx.morale) state.morale += fx.morale;
  if (fx.data) state.data += fx.data;

  campaignState.choices[event.id] = opt.id;
  campaignState.triggeredBranches.push(event.id);
  markCampaignEventCompleted(event.id);

  if (opt.routeTag === "research") {
    campaignState.labEfficiencyBonus = 0.2;
  } else if (opt.routeTag === "survival") {
    campaignState.weatherWeightOverride = { "暴风雪": 1, "低温": 2, "极夜静风": 3, "晴朗": 2 };
  }

  normalize();
  addLog(`【剧情分支·${event.name}】选择「${opt.label}」— ${opt.impact}`);

  branchEventPending = null;
  branchEventOverlay.classList.add("hidden");

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

function finishCampaignChapter(success) {
  normalize();
  const chapter = getCampaignChapter();
  if (!chapter) return;

  crewPanelEl.classList.add("hidden");
  workshopPanelEl.classList.add("hidden");
  samplesPanelEl.classList.add("hidden");
  commPanelEl.classList.add("hidden");
  controlsPanelEl.classList.add("hidden");
  dayPreviewPanelEl.classList.add("hidden");

  const sampleStats = calculateSampleTotalValue();
  const discoveredValue = sampleStats.discoveredValue;

  const returnSettlement = success
    ? performReturnSettlement(
        state.allocations,
        state.weather,
        { fuel: state.fuel, food: state.food, morale: state.morale }
      )
    : {
        succeeded: [],
        failed: [],
        totalAttempted: 0,
        totalSucceeded: 0,
        totalFailed: 0,
        returnedValue: 0,
        discoveredValue: discoveredValue,
        capacityUsed: 0,
        capacityTotal: 0,
        conditions: {},
        logs: success ? [] : ["任务失败，未组织返运，所有样本遗失"]
      };

  const returnedValue = returnSettlement.returnedValue;
  const finalResearchValue = state.data + returnedValue;
  const finalScore = Math.max(0, finalResearchValue + state.fuel + state.food + state.morale);

  const chainsComplete = {};
  Object.keys(state.commChains).forEach((cid) => {
    chainsComplete[cid] = state.commChains[cid].isComplete;
  });
  const anyChainComplete = Object.values(chainsComplete).some((v) => v);

  const outcome = {
    chapterId: chapter.id,
    chapterIndex: campaignState.chapterIndex,
    success: success,
    fuel: state.fuel,
    morale: state.morale,
    food: state.food,
    data: state.data,
    sampleValue: sampleStats.totalValue,
    sampleDiscoveredValue: discoveredValue,
    sampleReturnedValue: returnedValue,
    sampleIntegrity: sampleStats.avgIntegrity,
    returnSettlement: JSON.parse(JSON.stringify(returnSettlement)),
    finalResearchValue,
    crew: JSON.parse(JSON.stringify(state.crew)),
    equipment: JSON.parse(JSON.stringify(state.equipment)),
    samples: JSON.parse(JSON.stringify(state.samples)),
    commComplete: anyChainComplete,
    commChainsComplete: chainsComplete
  };
  campaignState.chapterOutcomes.push(outcome);

  const objectives = typeof chapter.getObjectives === "function"
    ? chapter.getObjectives(campaignState.choices)
    : chapter.objectives;

  let passCount = 0;
  const objResults = objectives ? objectives.map((obj) => {
    let val, passed;
    if (obj.id === "commChain") {
      val = anyChainComplete ? 1 : 0;
      passed = val >= obj.min;
    } else if (obj.id.startsWith("commChain_")) {
      const targetId = obj.id.replace("commChain_", "");
      val = state.commChains[targetId] && state.commChains[targetId].isComplete ? 1 : 0;
      passed = val >= obj.min;
    } else if (obj.id === "returnedData") {
      val = finalResearchValue;
      passed = val >= obj.min;
    } else if (obj.id === "data") {
      val = finalResearchValue;
      passed = val >= obj.min;
    } else {
      val = state[obj.id] || 0;
      passed = val >= obj.min;
    }
    if (passed) passCount++;
    return { ...obj, val, passed };
  }) : [];

  const allObjectivesMet = passCount === objResults.length;

  saveArchiveRecord({
    success: success && allObjectivesMet,
    missionName: chapter.name + "（剧情战役）",
    day: state.day,
    fuel: state.fuel,
    food: state.food,
    morale: state.morale,
    data: state.data,
    sampleValue: sampleStats.totalValue,
    sampleDiscoveredValue: discoveredValue,
    sampleReturnedValue: returnedValue,
    returnSettlement: JSON.parse(JSON.stringify(returnSettlement)),
    sampleIntegrity: sampleStats.avgIntegrity,
    commComplete: anyChainComplete,
    commChainsComplete: chainsComplete,
    score: finalScore,
    ending: success ? `章节通过（返运${returnedValue}，科研成果${finalResearchValue}）` : `章节失败（发现${discoveredValue}，未能返运）`,
    crew: JSON.parse(JSON.stringify(state.crew)),
    campaignChoices: { ...campaignState.choices },
    campaignChapterIndex: campaignState.chapterIndex
  });

  writeCampaignSave(`${chapter.name} 结算`);

  if (campaignState.chapterIndex >= campaignChapters.length - 1) {
    showCampaignEnding(success, allObjectivesMet, outcome);
  } else {
    showChapterSettlement(chapter, success, allObjectivesMet, objResults, outcome);
  }
}

function showChapterSettlement(chapter, success, allObjectivesMet, objResults, outcome) {
  chapterSettleTitle.textContent = `${chapter.badge}「${chapter.name}」结算`;

  const summaryEl = chapterSettleSummary;
  summaryEl.innerHTML = "";

  const finalResearch = (outcome.data || 0) + (outcome.sampleReturnedValue || 0);
  const stats = [
    { label: "柴油", val: outcome.fuel },
    { label: "士气", val: outcome.morale },
    { label: "食物", val: outcome.food },
    { label: "科研数据", val: outcome.data },
    { label: "现场发现价值", val: `<span style="color:#8fa9ae">${outcome.sampleDiscoveredValue || outcome.sampleValue || 0}</span>` },
    { label: "成功返运价值", val: `<span style="color:#f2c14e">${outcome.sampleReturnedValue || 0}</span>` },
    { label: "最终科研成果", val: `<b>${finalResearch}</b>` }
  ];
  if (outcome.commChainsComplete) {
    Object.keys(outcome.commChainsComplete).forEach((cid) => {
      const chain = commChains.find((c) => c.id === cid);
      const name = chain ? `${chain.icon}${chain.name}` : cid;
      stats.push({ label: name, val: outcome.commChainsComplete[cid] ? "✅" : "❌" });
    });
  } else {
    stats.push({ label: "通信完成", val: outcome.commComplete ? "✅" : "❌" });
  }
  stats.forEach((s) => {
    const el = document.createElement("div");
    el.className = "chapter-settle-stat";
    el.innerHTML = `<span>${s.label}</span><strong>${s.val}</strong>`;
    summaryEl.appendChild(el);
  });

  objResults.forEach((obj) => {
    const el = document.createElement("div");
    el.className = `chapter-settle-stat ${obj.passed ? "pass" : "fail"}`;
    el.innerHTML = `<span>${obj.icon} ${obj.name}</span><strong>${obj.passed ? "✅ 达成" : "❌ 未达成"}${typeof obj.val === "number" ? ` (${obj.val})` : ""}</strong>`;
    summaryEl.appendChild(el);
  });

  const settlePassGetter = typeof chapter.getSettlementPass === "function"
    ? chapter.getSettlementPass
    : (typeof chapter.settlementPass === "function" ? chapter.settlementPass : null);
  const settleFailGetter = typeof chapter.getSettlementFail === "function"
    ? chapter.getSettlementFail
    : (typeof chapter.settlementFail === "function" ? chapter.settlementFail : null);

  const settleText = success
    ? (settlePassGetter ? settlePassGetter(campaignState.choices) : (chapter.settlementPass || ""))
    : (settleFailGetter ? settleFailGetter(campaignState.choices) : (chapter.settlementFail || ""));

  const nextChapter = campaignChapters[campaignState.chapterIndex + 1];
  let carryoverText = "";
  if (nextChapter) {
    const nextInitial = typeof nextChapter.getInitial === "function"
      ? nextChapter.getInitial(outcome, campaignState.choices)
      : nextChapter.initial;
    carryoverText = `<strong>下一章「${nextChapter.name}」开局资源：</strong><br>`;
    carryoverText += `柴油 ${nextInitial.fuel}　士气 ${nextInitial.morale}　食物 ${nextInitial.food}　数据 ${nextInitial.data}<br>`;
    carryoverText += `<br>${settleText}`;
  } else {
    carryoverText = settleText;
  }

  chapterSettleCarryover.innerHTML = carryoverText;

  chapterSettleNextBtn.textContent = nextChapter ? `进入${nextChapter.badge}「${nextChapter.name}」` : "查看结局";
  chapterSettleNextBtn.onclick = function() {
    chapterSettleOverlay.classList.add("hidden");
    if (nextChapter) {
      showChapterIntro(campaignState.chapterIndex + 1);
    }
  };

  chapterSettleOverlay.classList.remove("hidden");
}

function showCampaignEnding(lastChapterSuccess, allObjectivesMet, lastOutcome) {
  stopAutosave();
  const totalDiscovered = campaignState.chapterOutcomes.reduce((sum, o) => sum + (o.sampleDiscoveredValue || o.sampleValue || 0), 0);
  const totalReturned = campaignState.chapterOutcomes.reduce((sum, o) => sum + (o.sampleReturnedValue || (o.success ? (o.sampleValue || 0) : 0)), 0);
  const totalScore = campaignState.chapterOutcomes.reduce((sum, o) => {
    const research = (o.data || 0) + (o.sampleReturnedValue || (o.success ? (o.sampleValue || 0) : 0));
    return sum + research + o.fuel + o.food + o.morale;
  }, 0);
  const totalResearch = campaignState.chapterOutcomes.reduce((sum, o) => {
    return sum + (o.data || 0) + (o.sampleReturnedValue || (o.success ? (o.sampleValue || 0) : 0));
  }, 0);

  const commComplete = campaignState.chapterOutcomes.some((o) => o.commComplete);
  const stats = { commComplete: commComplete, totalResearch, totalReturned, totalDiscovered };

  let ending = campaignEndings[campaignEndings.length - 1];
  for (let i = 0; i < campaignEndings.length - 1; i++) {
    if (campaignEndings[i].condition(totalScore, campaignState.choices, stats)) {
      ending = campaignEndings[i];
      break;
    }
  }

  campaignEndingIcon.textContent = ending.icon;
  campaignEndingTitle.textContent = ending.name;
  campaignEndingRank.textContent = `${ending.rank} 级评价`;
  campaignEndingRank.className = `campaign-ending-rank ${ending.rankClass}`;
  campaignEndingNarrative.innerHTML = ending.narrative.split("\n").map(p => p ? `<p style="margin:0 0 8px">${p}</p>` : "").join("");

  lastOutcome = lastOutcome || campaignState.chapterOutcomes[campaignState.chapterOutcomes.length - 1];
  const firstOutcome = campaignState.chapterOutcomes[0];
  const finalResearch = (lastOutcome.data || 0) + (lastOutcome.sampleReturnedValue || 0);
  campaignEndingStats.innerHTML = `
    <div class="campaign-ending-stat"><span>总评分</span><strong>${totalScore}</strong></div>
    <div class="campaign-ending-stat"><span>累计科研成果</span><strong>${totalResearch}</strong></div>
    <div class="campaign-ending-stat"><span>累计现场发现</span><strong style="color:#8fa9ae">${totalDiscovered}</strong></div>
    <div class="campaign-ending-stat"><span>累计成功返运</span><strong style="color:#f2c14e">${totalReturned}</strong></div>
    <div class="campaign-ending-stat"><span>第一章数据</span><strong>${firstOutcome.data}</strong></div>
    <div class="campaign-ending-stat"><span>最终章数据</span><strong>${lastOutcome.data}</strong></div>
    <div class="campaign-ending-stat"><span>最终章返运</span><strong style="color:#f2c14e">${lastOutcome.sampleReturnedValue || 0}</strong></div>
    <div class="campaign-ending-stat"><span>最终科研成果</span><strong>${finalResearch}</strong></div>
    <div class="campaign-ending-stat"><span>最终柴油</span><strong>${lastOutcome.fuel}</strong></div>
    <div class="campaign-ending-stat"><span>最终士气</span><strong>${lastOutcome.morale}</strong></div>
    <div class="campaign-ending-stat"><span>通信链路</span><strong>${commComplete ? "✅完成" : "❌未完成"}</strong></div>
  `;

  const choiceLabels = {
    "ch1_anomaly": { "study_deep": "深入研究异常", "secure_store": "封存优先生存" },
    "ch1_signal": { "investigate": "暴风雪搜救", "ignore": "记录坐标等待" },
    "ch2_contact": { "explore": "部署钻探深入", "monitor": "远程监测积累" },
    "ch2_evacuate": { "stay": "留下完成实验", "evacuate": "立即撤离保全" }
  };

  let choiceHtml = "<strong>你的抉择：</strong><br>";
  Object.keys(campaignState.choices).forEach((key) => {
    const choiceId = campaignState.choices[key];
    const labels = choiceLabels[key] || {};
    const label = labels[choiceId] || choiceId;
    choiceHtml += `<span class="choice-label">▸ ${label}</span><br>`;
  });
  campaignEndingChoices.innerHTML = choiceHtml;

  campaignEndingBtn.onclick = function() {
    hideAllOverlays();
    emergencyPending = null;
    branchEventPending = null;
    tutorialActive = false;
    campaignState = null;
    state = freshState();
    missionDeskEl.classList.remove("hidden");
    crewPanelEl.classList.add("hidden");
    workshopPanelEl.classList.add("hidden");
    samplesPanelEl.classList.add("hidden");
    commPanelEl.classList.add("hidden");
    controlsPanelEl.classList.add("hidden");
    dayPreviewPanelEl.classList.add("hidden");
    campaignProgressEl.classList.add("hidden");
    renderMissionCards();
    startBtn.disabled = true;
    render();
  };

  saveArchiveRecord({
    success: ending.rank === "S" || ending.rank === "A",
    missionName: "极夜征途·" + ending.name,
    day: campaignState.chapterOutcomes.reduce((sum, o) => sum + 7, 0),
    fuel: lastOutcome.fuel,
    food: lastOutcome.food,
    morale: lastOutcome.morale,
    data: lastOutcome.data,
    sampleValue: lastOutcome.sampleValue,
    sampleDiscoveredValue: totalDiscovered,
    sampleReturnedValue: totalReturned,
    returnSettlement: lastOutcome.returnSettlement ? JSON.parse(JSON.stringify(lastOutcome.returnSettlement)) : null,
    sampleIntegrity: lastOutcome.sampleIntegrity,
    commComplete: commComplete,
    score: totalScore,
    ending: `${ending.rank}级·${ending.name}（发现${totalDiscovered}·返运${totalReturned}·科研${totalResearch}）`,
    crew: JSON.parse(JSON.stringify(lastOutcome.crew || state.crew))
  });

  campaignEndingOverlay.classList.remove("hidden");
}

function finish(success) {
  state.started = false;
  normalize();

  if (campaignState && campaignState.active) {
    finishCampaignChapter(success);
    return;
  }

  let actualSuccess = success;
  const isCustom = state.mission && state.mission.isCustom;

  const sampleStats = calculateSampleTotalValue();
  const sampleValue = sampleStats.totalValue;
  const sampleIntegrity = sampleStats.avgIntegrity;
  const discoveredValue = sampleStats.discoveredValue;

  const returnSettlement = actualSuccess
    ? performReturnSettlement(
        state.allocations,
        state.weather,
        { fuel: state.fuel, food: state.food, morale: state.morale }
      )
    : {
        succeeded: [],
        failed: [],
        totalAttempted: 0,
        totalSucceeded: 0,
        totalFailed: 0,
        returnedValue: 0,
        discoveredValue: discoveredValue,
        capacityUsed: 0,
        capacityTotal: 0,
        conditions: {},
        logs: actualSuccess ? [] : ["任务失败，未组织返运，所有样本遗失在科考站"]
      };

  const returnedValue = returnSettlement.returnedValue;
  const finalResearchValue = state.data + returnedValue;

  if (isCustom && success) {
    const customConditionsMet = checkCustomLevelVictoryConditions(finalResearchValue, returnedValue);
    if (!customConditionsMet) {
      actualSuccess = false;
    }
  }

  const score = Math.max(
    0,
    finalResearchValue + state.fuel + state.food + state.morale
  );
  const summary = { score, data: state.data, fuel: state.fuel, morale: state.morale, food: state.food, mission: state.mission, sampleValue, sampleIntegrity, discoveredValue, returnedValue, returnSettlement };

  let resultText;
  if (actualSuccess) {
    resultText = state.mission.successText(summary);
  } else if (success) {
    const unmet = [];
    if (isCustom) {
      if (state.mission.dataGoal && state.mission.dataGoal > 0 && finalResearchValue < state.mission.dataGoal) {
        unmet.push(`科研成果未达标（${finalResearchValue}/${state.mission.dataGoal}）`);
      }
      if (state.mission.returnedValueGoal && state.mission.returnedValueGoal > 0 && returnedValue < state.mission.returnedValueGoal) {
        unmet.push(`返运价值未达标（${returnedValue}/${state.mission.returnedValueGoal}）`);
      }
      if (state.mission.minFuel && state.fuel < state.mission.minFuel) {
        unmet.push(`柴油未达最低要求（${state.fuel}/${state.mission.minFuel}）`);
      }
      if (state.mission.minMorale && state.morale < state.mission.minMorale) {
        unmet.push(`士气未达最低要求（${state.morale}/${state.mission.minMorale}）`);
      }
      if (state.mission.minFood && state.food < state.mission.minFood) {
        unmet.push(`食物未达最低要求（${state.food}/${state.mission.minFood}）`);
      }
    }
    const unmetStr = unmet.length > 0 ? `未达成条件：${unmet.join('，')}。` : '';
    resultText = isCustom
      ? `自定义关卡「${state.mission.name}」撑过了${state.mission.days}天，但部分胜利条件未达成。${unmetStr}成功返运样本价值${returnedValue}，最终评分：${score}。`
      : `撑过了${state.mission.days}天，但未达成全部胜利条件。成功返运样本价值${returnedValue}，最终评分：${score}。`;
  } else {
    resultText = state.mission.failText(summary);
  }

  let sampleBreakdown = "";
  sampleTypes.forEach((t) => {
    const s = state.samples[t.id];
    if (s.totalProduced > 0 || s.count > 0 || s.returnAttempted > 0) {
      const discVal = s.totalProduced * t.value;
      const retVal = s.returnSucceeded > 0
        ? Math.round(s.returnSucceeded * t.value * s.returnedIntegrity / 100)
        : 0;
      sampleBreakdown += `${t.icon}${t.name}：现场发现${s.totalProduced}份(价值${discVal})→现存${s.count}份(完整度${s.integrity}%)，返运尝试${s.returnAttempted}→成功${s.returnSucceeded}份(完整度${s.returnedIntegrity}%，返运价值${retVal})，损毁${s.totalLost}份；`;
    }
  });

  const returnBreakdown = returnSettlement.logs && returnSettlement.logs.length > 0
    ? returnSettlement.logs.map((l) => `• ${l}`).join("<br>")
    : "";

  const returnDetailLines = [];
  if (returnSettlement.succeeded && returnSettlement.succeeded.length > 0) {
    const byType = {};
    returnSettlement.succeeded.forEach((it) => {
      if (!byType[it.typeId]) byType[it.typeId] = { count: 0, value: 0, type: it.type };
      byType[it.typeId].count++;
      byType[it.typeId].value += it.value;
    });
    const parts = Object.keys(byType).map((tid) => {
      const b = byType[tid];
      return `${b.type.icon}${b.type.name}×${b.count}(+${b.value})`;
    });
    returnDetailLines.push(`✅ 成功带回：${parts.join("，")}`);
  }
  if (returnSettlement.failed && returnSettlement.failed.length > 0) {
    const byReason = {};
    returnSettlement.failed.forEach((it) => {
      if (!byReason[it.reasonText]) byReason[it.reasonText] = 0;
      byReason[it.reasonText]++;
    });
    const parts = Object.keys(byReason).map((r) => `${r}×${byReason[r]}`);
    returnDetailLines.push(`❌ 未能带回：${parts.join("，")}`);
  }

  const extraGoals = [];
  if (isCustom) {
    if (state.mission.minFuel) {
      extraGoals.push(`柴油≥${state.mission.minFuel}，实际${state.fuel}，${state.fuel >= state.mission.minFuel ? "✅ 达成" : "❌ 未达成"}`);
    }
    if (state.mission.minMorale) {
      extraGoals.push(`士气≥${state.mission.minMorale}，实际${state.morale}，${state.morale >= state.mission.minMorale ? "✅ 达成" : "❌ 未达成"}`);
    }
    if (state.mission.minFood) {
      extraGoals.push(`食物≥${state.mission.minFood}，实际${state.food}，${state.food >= state.mission.minFood ? "✅ 达成" : "❌ 未达成"}`);
    }
  }
  const extraGoalLines = extraGoals.length
    ? extraGoals.map((g) => `<p class="result-goal" style="background:rgba(143,169,174,0.25);margin-top:6px">${g}</p>`).join("")
    : "";

  const chainsComplete = {};
  Object.keys(state.commChains).forEach((cid) => {
    chainsComplete[cid] = state.commChains[cid].isComplete;
  });
  const anyChainComplete = Object.values(chainsComplete).some((v) => v);

  saveArchiveRecord({
    success: actualSuccess,
    missionName: state.mission.name + (isCustom ? "（自定义）" : ""),
    day: state.day,
    fuel: state.fuel,
    food: state.food,
    morale: state.morale,
    data: state.data,
    sampleValue: sampleValue,
    sampleIntegrity: sampleIntegrity,
    sampleDiscoveredValue: discoveredValue,
    sampleReturnedValue: returnedValue,
    returnSettlement: JSON.parse(JSON.stringify(returnSettlement)),
    commComplete: anyChainComplete,
    commChainsComplete: chainsComplete,
    score: score,
    ending: resultText,
    crew: JSON.parse(JSON.stringify(state.crew))
  });

  const goalLine = state.mission.dataGoal
    ? `<p class="result-goal">任务目标：科研成果（数据+<b style="color:#f2c14e">返运样本价值</b>）≥ ${state.mission.dataGoal}，实际：${state.data} + <b style="color:#f2c14e">${returnedValue}</b> = <b>${finalResearchValue}</b>，${
        finalResearchValue >= state.mission.dataGoal ? "✅ 达成" : "❌ 未达成"
      }</p>`
    : "";

  const sampleScoreLine = discoveredValue > 0 || sampleBreakdown
    ? `<p class="result-goal" style="background:rgba(143,169,174,0.25)">
         <span>现场发现样本价值：<b style="color:#8fa9ae">${discoveredValue}</b></span>
         <span style="margin:0 10px">→</span>
         <span>当前完整价值：<b>${sampleValue}</b>（${sampleIntegrity}%）</span>
         <span style="margin:0 10px">→</span>
         <span>成功返运价值：<b style="color:#f2c14e">${returnedValue}</b>（${returnSettlement.totalSucceeded}/${returnSettlement.totalAttempted || 0}份）</span>
       </p>`
    : "";

  const returnConditionLine = actualSuccess && returnSettlement.conditions && Object.keys(returnSettlement.conditions).length > 0
    ? `<p class="result-goal" style="background:rgba(242,193,78,0.12);margin-top:6px">
         🚚 <b>返运条件</b>：运力 ${returnSettlement.capacityUsed}/${returnSettlement.capacityTotal}单位 · 
         天气${returnSettlement.conditions.weather?.name || "—"}×${(returnSettlement.conditions.weather?.multiplier || 1).toFixed(2)} · 
         通信${returnSettlement.conditions.comm?.power || 0}格（${Math.round((returnSettlement.conditions.comm?.rate || 0)*100)}%） · 
         冷藏${returnSettlement.conditions.food?.power || 0}格（${Math.round((returnSettlement.conditions.food?.rate || 0)*100)}%） · 
         恒温${returnSettlement.conditions.heat?.power || 0}格（${Math.round((returnSettlement.conditions.heat?.rate || 0)*100)}%） · 
         综合资源${Math.round((returnSettlement.conditions.resources?.rate || 0)*100)}%
       </p>`
    : ( !actualSuccess && sampleValue > 0
        ? `<p class="result-goal" style="background:rgba(209,76,63,0.18);margin-top:6px">⚠️ 任务失败，无法组织返运，所有样本遗留在科考站（现场发现价值未计入最终成果）</p>`
        : "" );

  const sampleDetailLine = sampleBreakdown
    ? `<div style="margin-top:10px;padding:10px 12px;background:rgba(30,40,45,0.6);border-radius:8px">
         <div style="font-weight:600;margin-bottom:6px;color:#cfe0e3">📋 样本明细（现场发现 → 现存 → 返运结果）</div>
         <div style="font-size:12.5px;line-height:1.85;color:#b8cdd1">${sampleBreakdown}</div>
       </div>`
    : "";

  const returnProcessLine = returnBreakdown || returnDetailLines.length > 0
    ? `<div style="margin-top:10px;padding:10px 12px;background:rgba(50,60,40,0.5);border-radius:8px">
         <div style="font-weight:600;margin-bottom:6px;color:#d5e2b5">🚚 返运过程</div>
         ${returnBreakdown ? `<div style="font-size:12.5px;line-height:1.75;color:#c5d7b5;margin-bottom:6px">${returnBreakdown}</div>` : ""}
         ${returnDetailLines.length > 0 ? `<div style="font-size:12.5px;line-height:1.75;color:#d9e6d0">${returnDetailLines.join("<br>")}</div>` : ""}
       </div>`
    : "";

  resultEl.innerHTML = `
    <h2>${actualSuccess ? "任务结束" : (success ? "任务结束（部分条件未达成）" : "任务失败")}</h2>
    <p>${state.mission.name}${isCustom ? " <span style='color:#f2c14e'>【自定义关卡】</span>" : ""}</p>
    ${goalLine}
    ${extraGoalLines}
    ${sampleScoreLine}
    ${returnConditionLine}
    <p>柴油${state.fuel}，食物${state.food}，士气${state.morale}，科研数据${state.data}，<b style="color:#8fa9ae">现场发现${discoveredValue}</b> → <b style="color:#f2c14e">返运价值${returnedValue}</b> → <b>科研成果${finalResearchValue}</b></p>
    ${sampleDetailLine}
    ${returnProcessLine}
    <p style="margin-top:12px">${resultText}</p>
    <button id="returnBtn" type="button">返回任务选择台</button>
  `;
  resultEl.classList.remove("hidden");
  crewPanelEl.classList.add("hidden");
  workshopPanelEl.classList.add("hidden");
  samplesPanelEl.classList.add("hidden");
  commPanelEl.classList.add("hidden");
  controlsPanelEl.classList.add("hidden");
  dayPreviewPanelEl.classList.add("hidden");
  campaignProgressEl.classList.add("hidden");
  document.getElementById("returnBtn").addEventListener("click", () => {
    hideAllOverlays();
    emergencyPending = null;
    branchEventPending = null;
    tutorialActive = false;
    state = freshState();
    campaignState = null;
    missionDeskEl.classList.remove("hidden");
    levelEditorPanel.classList.add("hidden");
    crewPanelEl.classList.add("hidden");
    workshopPanelEl.classList.add("hidden");
    samplesPanelEl.classList.add("hidden");
    commPanelEl.classList.add("hidden");
    controlsPanelEl.classList.add("hidden");
    dayPreviewPanelEl.classList.add("hidden");
    campaignProgressEl.classList.add("hidden");
    renderMissionCards();
    startBtn.disabled = true;
    render();
    if (tutorialActive) endTutorial();
  });
  addLog(actualSuccess ? "任务周期结束，结果如上。" : (success ? "任务周期结束，但部分胜利条件未达成。" : "某项关键资源归零，任务提前中止。"));
  renderArchive();
  render();
  if (tutorialActive) endTutorial();
}

function getCommChain(chainId) {
  const id = chainId || state.activeCommChainId;
  return commChains.find((c) => c.id === id);
}

function getCommChainState(chainId) {
  const id = chainId || state.activeCommChainId;
  return state.commChains[id];
}

function getCurrentPhase(chainId) {
  const chain = getCommChain(chainId);
  if (!chain) return null;
  const cs = getCommChainState(chainId);
  if (!cs) return null;
  const idx = cs.currentPhaseIndex;
  if (idx >= chain.phases.length) return null;
  return chain.phases[idx];
}

function processCommChainDay(eqEffects) {
  const result = {
    advanced: false,
    completed: false,
    phaseCompleted: false,
    interrupted: false,
    delayed: false,
    rewardApplied: null,
    log: null,
    phaseName: null,
    chainId: state.activeCommChainId,
    chainName: null,
    skipped: false
  };

  const activeChainId = state.activeCommChainId;
  const chain = getCommChain(activeChainId);
  const cs = getCommChainState(activeChainId);
  if (!chain || !cs) return result;

  result.chainName = chain.name;

  if (cs.isComplete) {
    result.log = `【通信】「${chain.name}」已全部完成，今日无推进。`;
    return result;
  }

  if (state.lastCommAdvancedDay === state.day) {
    result.skipped = true;
    result.log = `【通信】今日已推进过其他任务链，同一天只能推进一条，跳过「${chain.name}」。`;
    return result;
  }

  const phase = getCurrentPhase(activeChainId);
  if (!phase) return result;

  result.phaseName = phase.name;

  const commAllocated = state.allocations.comm;
  const commRequired = state.weather.comm;
  const commOk = commAllocated >= commRequired;
  const commEfficiency = eqEffects ? eqEffects.commEfficiency : 1.0;

  const effectiveCommMin = Math.ceil(phase.commMin / Math.max(0.4, commEfficiency));

  const isInterruptWeather = chain.interruptWeathers && chain.interruptWeathers.includes(state.weather.name);

  if (isInterruptWeather) {
    result.interrupted = true;
    const loss = Math.ceil(cs.phaseProgress * COMM_INTERRUPT_PENALTY);
    cs.phaseProgress = Math.max(0, cs.phaseProgress - loss);
    if (cs.delayDays < COMM_DELAY_MAX) {
      cs.delayDays += 1;
      result.delayed = true;
    }
    result.log = `【通信中断·${chain.name}】${state.weather.name}干扰信号，${phase.name}进度-${loss}天（保留${cs.phaseProgress}天）。${cs.delayDays > 0 ? `累计延迟${cs.delayDays}天。` : ""}`;
    return result;
  }

  if (!commOk || commAllocated < effectiveCommMin) {
    result.interrupted = true;
    const reason = !commOk ? "未达天气通信最低需求" : `通信格数${commAllocated}未达阶段需求${effectiveCommMin}`;
    const loss = Math.ceil(cs.phaseProgress * COMM_INTERRUPT_PENALTY);
    cs.phaseProgress = Math.max(0, cs.phaseProgress - loss);
    if (cs.delayDays < COMM_DELAY_MAX) {
      cs.delayDays += 1;
      result.delayed = true;
    }
    result.log = `【通信中断·${chain.name}】${reason}，${phase.name}进度-${loss}天（保留${cs.phaseProgress}天）。${cs.delayDays > 0 ? `累计延迟${cs.delayDays}天。` : ""}`;
    return result;
  }

  cs.delayDays = Math.max(0, cs.delayDays - 1);
  cs.phaseProgress += 1;
  result.advanced = true;
  state.lastCommAdvancedDay = state.day;

  if (cs.phaseProgress >= phase.requiredDays) {
    result.phaseCompleted = true;
    cs.completedPhases.push(phase.id);

    if (phase.reward) {
      result.rewardApplied = { ...phase.reward };
      if (phase.reward.fuel) { state.fuel += phase.reward.fuel; cs.totalRewards.fuel += phase.reward.fuel; }
      if (phase.reward.food) { state.food += phase.reward.food; cs.totalRewards.food += phase.reward.food; }
      if (phase.reward.morale) { state.morale += phase.reward.morale; cs.totalRewards.morale += phase.reward.morale; }
      if (phase.reward.data) { state.data += phase.reward.data; cs.totalRewards.data += phase.reward.data; }
    }

    if (phase.log) {
      cs.specialLogs.push({ phaseId: phase.id, phaseName: phase.name, text: phase.log, day: state.day });
      result.log = phase.log;
    }

    cs.currentPhaseIndex += 1;
    cs.phaseProgress = 0;

    if (cs.currentPhaseIndex >= chain.phases.length) {
      cs.isComplete = true;
      result.completed = true;
    }
  } else {
    result.log = `【通信推进·${chain.name}】${phase.name}进度+1天（${cs.phaseProgress}/${phase.requiredDays}天）。`;
  }

  return result;
}

function renderCommChain() {
  if (commChainSelectorEl) {
    commChainSelectorEl.innerHTML = "";
    commChains.forEach((chain) => {
      const cs = state.commChains[chain.id];
      const isActive = state.activeCommChainId === chain.id;
      const isComplete = cs && cs.isComplete;
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = `comm-chain-chip ${isActive ? "active" : ""} ${isComplete ? "done" : ""}`;
      if (chain.accentColor) chip.style.setProperty("--chain-accent", chain.accentColor);
      chip.innerHTML = `<span class="comm-chain-chip-icon">${chain.icon}</span><span class="comm-chain-chip-name">${chain.name}</span>${isComplete ? '<span class="comm-chain-chip-done">✓</span>' : ""}`;
      chip.addEventListener("click", () => {
        state.activeCommChainId = chain.id;
        render();
      });
      commChainSelectorEl.appendChild(chip);
    });
  }

  const chain = getCommChain();
  if (!chain) return;
  const cc = getCommChainState();
  if (!cc) return;

  commChainTitleEl.textContent = chain.name;
  const descEl = document.querySelector(".comm-chain-desc");
  if (descEl) descEl.textContent = chain.description;

  const panel = document.getElementById("commPanel");
  if (panel && chain.accentColor) {
    panel.style.setProperty("--chain-accent", chain.accentColor);
  }

  let statusClass = "";
  let statusText = "";

  if (cc.isComplete) {
    statusClass = "complete";
    statusText = "全部完成 ✅";
  } else if (cc.delayDays >= COMM_DELAY_MAX) {
    statusClass = "delayed";
    statusText = "严重延迟 ⚠";
  } else if (cc.phaseProgress > 0 || cc.currentPhaseIndex > 0) {
    statusClass = "active";
    statusText = "进行中 ▶";
  } else {
    statusText = "待启动";
  }

  commChainStatusEl.className = `comm-status ${statusClass}`;
  commChainStatusEl.textContent = statusText;

  const phase = getCurrentPhase();
  if (phase && !cc.isComplete) {
    commChainProgressEl.textContent = `${cc.phaseProgress} / ${phase.requiredDays} 天`;
    const pct = Math.round((cc.phaseProgress / phase.requiredDays) * 100);
    const bar = commChainProgressBar.querySelector(".comm-progress-fill");
    if (bar) {
      bar.style.width = pct + "%";
      if (chain.accentColor) bar.style.background = `linear-gradient(90deg, ${chain.accentColor}, ${lightenColor(chain.accentColor, 20)})`;
    }
  } else if (cc.isComplete) {
    commChainProgressEl.textContent = `${chain.phases.length} / ${chain.phases.length} 阶段`;
    const bar = commChainProgressBar.querySelector(".comm-progress-fill");
    if (bar) {
      bar.style.width = "100%";
      if (chain.accentColor) bar.style.background = `linear-gradient(90deg, ${chain.accentColor}, ${lightenColor(chain.accentColor, 20)})`;
    }
  } else {
    commChainProgressEl.textContent = "0 / 0 天";
    const bar = commChainProgressBar.querySelector(".comm-progress-fill");
    if (bar) bar.style.width = "0%";
  }

  if (cc.delayDays > 0 && !cc.isComplete) {
    commChainDelayEl.classList.remove("hidden");
    commChainDelayEl.textContent = `⏱ 延迟 ${cc.delayDays}天`;
  } else {
    commChainDelayEl.classList.add("hidden");
  }

  if (commChainInterruptHintEl) {
    if (chain.interruptWeathers && chain.interruptWeathers.length > 0 && !cc.isComplete) {
      commChainInterruptHintEl.classList.remove("hidden");
      commChainInterruptHintEl.textContent = `⚠ 中断天气：${chain.interruptWeathers.join("、")}`;
    } else {
      commChainInterruptHintEl.classList.add("hidden");
    }
  }

  commPhasesEl.innerHTML = "";
  chain.phases.forEach((p, idx) => {
    const isDone = cc.completedPhases.includes(p.id);
    const isCurrent = idx === cc.currentPhaseIndex && !cc.isComplete;
    const isDelayed = isCurrent && cc.delayDays >= COMM_DELAY_MAX;

    const phaseEl = document.createElement("div");
    phaseEl.className = `comm-phase ${isDone ? "done" : ""} ${isCurrent ? "current" : ""} ${isDelayed ? "delayed" : ""}`;
    if (chain.accentColor) phaseEl.style.setProperty("--chain-accent", chain.accentColor);

    let iconText = String(idx + 1);
    if (isDone) iconText = "✓";
    if (isDelayed) iconText = "!";

    const rewardsParts = [];
    if (p.reward) {
      if (p.reward.fuel) rewardsParts.push(`⛽+${p.reward.fuel}`);
      if (p.reward.food) rewardsParts.push(`🍞+${p.reward.food}`);
      if (p.reward.morale) rewardsParts.push(`😊+${p.reward.morale}`);
      if (p.reward.data) rewardsParts.push(`📊+${p.reward.data}`);
    }

    const tagText = isDone ? "已完成" : isCurrent ? (isDelayed ? "进行中·延迟" : "进行中") : "未开始";
    const progressText = isCurrent ? `${cc.phaseProgress}/${p.requiredDays}天` : isDone ? `${p.requiredDays}/${p.requiredDays}天` : `需${p.requiredDays}天`;

    phaseEl.innerHTML = `
      <div class="comm-phase-icon">${iconText}</div>
      <div class="comm-phase-body">
        <div class="comm-phase-name">
          ${p.name}
          <span class="comm-phase-tag">${tagText}</span>
        </div>
        <div class="comm-phase-desc">${p.desc}</div>
        <div class="comm-phase-meta">
          <span>📡 通信≥${p.commMin}格</span>
          <span>⏳ ${progressText}</span>
        </div>
        ${rewardsParts.length ? `<div class="comm-phase-rewards">奖励：${rewardsParts.join(" ")}</div>` : ""}
      </div>
    `;
    commPhasesEl.appendChild(phaseEl);
  });

  const rw = cc.totalRewards;
  const totalRewardSum = rw.fuel + rw.food + rw.morale + rw.data;
  if (totalRewardSum > 0) {
    commRewardsEl.classList.remove("hidden");
    const listEl = commRewardsEl.querySelector(".comm-rewards-list");
    const parts = [];
    if (rw.fuel) parts.push(`<span>⛽ 柴油 +${rw.fuel}</span>`);
    if (rw.food) parts.push(`<span>🍞 食物 +${rw.food}</span>`);
    if (rw.morale) parts.push(`<span>😊 士气 +${rw.morale}</span>`);
    if (rw.data) parts.push(`<span>📊 数据 +${rw.data}</span>`);
    listEl.innerHTML = parts.join("");
  } else {
    commRewardsEl.classList.add("hidden");
  }

  if (cc.specialLogs.length > 0) {
    commLogsEl.classList.remove("hidden");
    const listEl = commLogsEl.querySelector(".comm-logs-list");
    listEl.innerHTML = cc.specialLogs.map((l) =>
      `<p>【第${l.day}天·${l.phaseName}】${l.text.replace(/^【通信】/, "")}</p>`
    ).join("");
  } else {
    commLogsEl.classList.add("hidden");
  }
}

function lightenColor(hex, percent) {
  const num = parseInt(hex.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return "#" + (0x1000000 +
    (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255)
  ).toString(16).slice(1);
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
  if (state.started) renderDayPreview();
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
    if (state.selectedMissionId === "campaign") {
      startBtn.textContent = "确认「极夜征途」剧情战役";
    } else {
      const mission = findMissionById(state.selectedMissionId);
      if (mission) {
        startBtn.textContent = `确认「${mission.name}」${mission.isCustom ? "（自定义关卡）" : ""}并进入电力分配`;
      } else {
        startBtn.textContent = "确认任务并进入电力分配";
      }
    }
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
    const curChain = getCommChain();
    const curChainState = getCommChainState();
    const curPhase = getCurrentPhase();
    if (curChain && curChainState && curPhase && !curChainState.isComplete) {
      const eqEff = calculateEquipmentEffects();
      const effCommMin = Math.ceil(curPhase.commMin / Math.max(0.4, eqEff.commEfficiency));
      const isInterruptWeather = curChain.interruptWeathers && curChain.interruptWeathers.includes(state.weather.name);
      const alreadyAdvanced = state.lastCommAdvancedDay === state.day;
      if (alreadyAdvanced) {
        extraHints.push(`📡今日已推进过任务链，「${curChain.name}」暂不推进`);
      } else if (isInterruptWeather) {
        extraHints.push(`📡「${curChain.name}」${state.weather.name}将中断「${curPhase.name}」进度（不清零）`);
      } else {
        extraHints.push(`📡「${curChain.name}」「${curPhase.name}」需通信≥${Math.max(effCommMin, state.weather.comm)}格以推进（${curChainState.phaseProgress}/${curPhase.requiredDays}）`);
      }
    } else if (curChainState && curChainState.isComplete) {
      extraHints.push(`📡「${curChain.name}」全部完成 ✅`);
    }
    const crewPreview = previewCrewEffects();
    if (crewPreview.summary) extraHints.push(crewPreview.summary);
    const eqPreview = previewEquipmentEffects();
    if (eqPreview) extraHints.push(eqPreview);
    const effectiveHeatReq = Math.max(1, state.weather.heat + calculateEquipmentEffects().heatReqAdj);
    if (campaignState && campaignState.active) {
      const chapter = getCampaignChapter();
      if (chapter) {
        const objectives = typeof chapter.getObjectives === "function"
          ? chapter.getObjectives(campaignState.choices)
          : chapter.objectives;
        const objHints = objectives ? objectives.map(o => {
          let val;
          if (o.id === "commChain") {
            const anyComplete = Object.values(state.commChains).some(c => c.isComplete);
            val = anyComplete ? "✅" : "❌";
          } else if (o.id.startsWith("commChain_")) {
            const targetId = o.id.replace("commChain_", "");
            const cs = state.commChains[targetId];
            val = cs && cs.isComplete ? "✅" : "❌";
          } else {
            val = state[o.id] || 0;
          }
          return `${o.icon}${o.name}${typeof val === "number" ? ":" + val + "/≥" + o.min : val}`;
        }).join(" ") : "";
        extraHints.push(`📖 ${chapter.badge}「${chapter.name}」${objHints}`);
      }
      if (campaignState.labEfficiencyBonus > 0) extraHints.push(`🔬剧情加成：实验效率+${campaignState.labEfficiencyBonus}`);
    }
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
    renderCommChain();
    renderDayPreview();
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
  sampleDiscoveredValueEl.textContent = sampleStats.discoveredValue;

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
    const riskColor = type.baseRisk >= 0.15 ? "#d14c3f" : type.baseRisk >= 0.10 ? "#d18b3f" : "#4f8a5b";
    const riskLabel = type.baseRisk >= 0.15 ? "高风险" : type.baseRisk >= 0.10 ? "中风险" : "低风险";
    const priorityCfg = getPriorityConfig(s.priority);
    const discoveredVal = s.totalProduced * type.value;
    const currentVal = Math.round(s.count * type.value * s.integrity / 100);

    const priorityButtons = returnPriorityLevels.map((p) => `
      <button type="button" class="priority-btn ${s.priority === p.id ? 'active' : ''}" 
              data-type="${type.id}" data-priority="${p.id}" 
              style="border-color:${s.priority === p.id ? p.color : 'transparent'};${s.priority === p.id ? `background:${p.color}22;` : ''}">
        <span class="priority-stars" style="color:${p.color}">${p.label}</span>
        <span class="priority-name">${p.name}</span>
      </button>
    `).join("");

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
      <div class="sample-physical">
        <span class="sample-weight">📦 每份重量 <strong>${type.weight}</strong> 单位</span>
        <span class="sample-risk" style="color:${riskColor}">⚠ 运输风险 <strong>${riskLabel}</strong>（${Math.round(type.baseRisk * 100)}%）</span>
      </div>
      <div class="sample-risk-hint" style="font-size:11px;opacity:.7;margin-top:2px;padding:0 4px">${type.riskHint}</div>
      <div class="sample-req">
        <div class="sample-req-title">保存条件 <small>（需${reqNames}电力≥要求值）</small></div>
        <div class="sample-req-values">${reqValues}</div>
        <div class="sample-req-hint">${type.preserveHint}</div>
      </div>
      <div class="sample-priority-section">
        <div class="sample-priority-title">
          <span>🚚 返运优先级</span>
          <span class="sample-priority-current" style="color:${priorityCfg.color}">当前：${priorityCfg.label} ${priorityCfg.name}</span>
        </div>
        <div class="sample-priority-buttons">${priorityButtons}</div>
        <div class="sample-priority-hint" style="font-size:11px;opacity:.7;margin-top:4px">${priorityCfg.hint}（运力系数×${priorityCfg.weight}）</div>
      </div>
      <div class="sample-stats-row">
        <span>单份价值<strong>${type.value}</strong></span>
        <span>实验门槛<strong>${type.labPowerThreshold}格</strong></span>
        <span>现存价值<strong>${currentVal}</strong></span>
      </div>
      <div class="sample-stats-row sample-values-row">
        <span>现场发现<strong style="color:#8fa9ae">${discoveredVal}</strong></span>
        <span>预计返运<strong style="color:#f2c14e">${s.count > 0 ? '~' + Math.round(currentVal * (0.4 + (type.weight > 2 ? 0.1 : 0))) : '—'}</strong></span>
        <span>损毁惩罚<strong>-${type.lossWhenFail}%</strong></span>
      </div>
      <div class="sample-stats-row" style="opacity:.75;font-size:11px">
        <span>累计产出<strong>${s.totalProduced}</strong></span>
        <span>累计损毁<strong>${s.totalLost}</strong></span>
        <span>现存<strong>${s.count}</strong></span>
      </div>
    `;

    card.querySelectorAll(".priority-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const typeId = btn.dataset.type;
        const priorityId = btn.dataset.priority;
        if (state.samples[typeId]) {
          state.samples[typeId].priority = priorityId;
          renderSamples();
        }
      });
    });

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

function showArchiveDetail(record) {
  archiveDetailMission.textContent = record.missionName;
  archiveDetailTag.textContent = record.success ? "通关" : "失败";
  archiveDetailTag.className = `archive-card-tag ${record.success ? "success" : "fail"}`;
  archiveDetailDate.textContent = `${formatDate(record.timestamp)} · 第 ${record.day} 天`;
  archiveDetailFuel.textContent = record.fuel;
  archiveDetailFood.textContent = record.food;
  archiveDetailMorale.textContent = record.morale;
  archiveDetailData.textContent = record.data;
  archiveDetailSampleValue.textContent = record.sampleValue || 0;
  archiveDetailSampleDiscovered.textContent = record.sampleDiscoveredValue !== undefined ? record.sampleDiscoveredValue : (record.sampleValue || 0);
  archiveDetailSampleReturned.textContent = record.sampleReturnedValue !== undefined ? record.sampleReturnedValue : (record.success ? (record.sampleValue || 0) : 0);
  archiveDetailSampleIntegrity.textContent = record.sampleIntegrity !== undefined ? record.sampleIntegrity + '%' : '—';
  if (record.commChainsComplete) {
    const parts = [];
    Object.keys(record.commChainsComplete).forEach((cid) => {
      const chain = commChains.find((c) => c.id === cid);
      const name = chain ? chain.name : cid;
      parts.push(`${chain ? chain.icon : "📡"}${name}：${record.commChainsComplete[cid] ? "✅" : "❌"}`);
    });
    archiveDetailComm.innerHTML = parts.join("<br>");
  } else if (record.commComplete !== undefined) {
    archiveDetailComm.textContent = record.commComplete ? "✅完成" : "❌未完成";
  } else {
    archiveDetailComm.textContent = "—";
  }
  const finalResearch = (record.data || 0) + (record.sampleReturnedValue !== undefined ? record.sampleReturnedValue : (record.success ? (record.sampleValue || 0) : 0));
  archiveDetailScore.textContent = `综合评分：${record.score} （科研成果 ${finalResearch}）`;
  archiveDetailEnding.textContent = record.ending;

  if (record.returnSettlement && (record.returnSettlement.logs || record.returnSettlement.succeeded?.length || record.returnSettlement.failed?.length || record.returnSettlement.totalAttempted > 0)) {
    archiveDetailReturnSection.style.display = "";
    const rs = record.returnSettlement;
    const summaryHtml = [];
    summaryHtml.push(`<div class="archive-return-summary-row"><span>运力使用</span><strong>${rs.capacityUsed || 0}/${rs.capacityTotal || 0} 单位</strong></div>`);
    summaryHtml.push(`<div class="archive-return-summary-row"><span>返运尝试</span><strong>${rs.totalAttempted || 0} 份</strong></div>`);
    summaryHtml.push(`<div class="archive-return-summary-row"><span>成功带回</span><strong style="color:#4f8a5b">${rs.totalSucceeded || 0} 份</strong></div>`);
    summaryHtml.push(`<div class="archive-return-summary-row"><span>未能带回</span><strong style="color:#d14c3f">${rs.totalFailed || 0} 份</strong></div>`);
    summaryHtml.push(`<div class="archive-return-summary-row"><span>返运价值</span><strong style="color:#f2c14e">${rs.returnedValue || 0}</strong></div>`);
    if (rs.conditions) {
      const c = rs.conditions;
      const cHtml = [];
      if (c.weather) cHtml.push(`天气${c.weather.name}×${(c.weather.multiplier||1).toFixed(2)}`);
      if (c.comm) cHtml.push(`通信${c.comm.power||0}格(${Math.round((c.comm.rate||0)*100)}%)`);
      if (c.food) cHtml.push(`冷藏${c.food.power||0}格(${Math.round((c.food.rate||0)*100)}%)`);
      if (c.heat) cHtml.push(`恒温${c.heat.power||0}格(${Math.round((c.heat.rate||0)*100)}%)`);
      if (c.resources) cHtml.push(`资源${Math.round((c.resources.rate||0)*100)}%`);
      summaryHtml.push(`<div class="archive-return-summary-row"><span>环境系数</span><strong style="font-size:12px;opacity:.9">${cHtml.join(" · ")}</strong></div>`);
    }
    archiveDetailReturnSummary.innerHTML = `<div class="archive-return-summary-grid">${summaryHtml.join("")}</div>`;

    const detailHtml = [];
    if (rs.logs && rs.logs.length > 0) {
      detailHtml.push(`<div class="archive-return-logs"><h4>返运日志</h4>${rs.logs.map(l => `<p>• ${l}</p>`).join("")}</div>`);
    }
    if (rs.succeeded && rs.succeeded.length > 0) {
      const byType = {};
      rs.succeeded.forEach((it) => {
        if (!byType[it.typeId]) byType[it.typeId] = { count: 0, value: 0, typeName: it.type?.name || it.typeId, icon: it.type?.icon || "📦" };
        byType[it.typeId].count++;
        byType[it.typeId].value += it.value || 0;
      });
      const parts = Object.keys(byType).map((tid) => {
        const b = byType[tid];
        return `${b.icon}${b.typeName}×${b.count}(+${b.value})`;
      });
      detailHtml.push(`<div class="archive-return-list"><h4 style="color:#4f8a5b">✅ 成功带回样本</h4><p>${parts.join("，")}</p></div>`);
    }
    if (rs.failed && rs.failed.length > 0) {
      const byReason = {};
      rs.failed.forEach((it) => {
        const r = it.reasonText || "未知原因";
        if (!byReason[r]) byReason[r] = 0;
        byReason[r]++;
      });
      const parts = Object.keys(byReason).map((r) => `${r}×${byReason[r]}`);
      detailHtml.push(`<div class="archive-return-list"><h4 style="color:#d14c3f">❌ 未能带回样本</h4><p>${parts.join("，")}</p></div>`);
    }
    archiveDetailReturnDetails.innerHTML = detailHtml.join("");
  } else if (!record.success && (record.sampleDiscoveredValue || record.sampleValue) > 0) {
    archiveDetailReturnSection.style.display = "";
    archiveDetailReturnSummary.innerHTML = `<div class="archive-return-summary-grid"><div class="archive-return-summary-row"><span>任务状态</span><strong style="color:#d14c3f">任务失败，未组织返运</strong></div><div class="archive-return-summary-row"><span>遗失价值</span><strong style="color:#8fa9ae">${record.sampleDiscoveredValue || record.sampleValue || 0}（样本遗留在科考站）</strong></div></div>`;
    archiveDetailReturnDetails.innerHTML = "";
  } else {
    archiveDetailReturnSection.style.display = "none";
  }

  if (record.crew && Array.isArray(record.crew)) {
    let html = "";
    record.crew.forEach((m) => {
      const topStation = Object.entries(m.skills || {})
        .sort((a, b) => (b[1] || 0) - (a[1] || 0))[0];
      const topSkillName = topStation
        ? (stations.find((s) => s.id === topStation[0])?.name || topStation[0])
        : "—";
      const topSkillLevel = topStation
        ? skillLevelConfig.names[getSkillLevelLocal(topStation[1])] || "入门"
        : "—";
      const statusNames = (m.tempStatuses || [])
        .map((sid) => tempStatusDefs[sid]?.name)
        .filter(Boolean);
      html += `
        <div class="archive-crew-item">
          <div class="archive-crew-head">
            <span class="archive-crew-name">${m.avatar || "👤"} ${m.name}</span>
            <span class="crew-specialty specialty-${m.specialty}">${m.specialtyName}</span>
          </div>
          <div class="archive-crew-meta">
            疲劳 ${m.fatigue} · 心情 ${m.mood} · 最强技能：${topSkillName}（${topSkillLevel}）
          </div>
          ${statusNames.length > 0 ? `<div class="archive-crew-meta" style="color:#8e2b22">状态：${statusNames.join("、")}</div>` : ""}
        </div>
      `;
    });
    archiveDetailCrew.innerHTML = html;
    archiveDetailCrew.style.display = "";
  } else {
    archiveDetailCrew.innerHTML = '<p style="margin:0;color:#63868c;font-size:13px;">暂无队员成长记录（旧版本档案）</p>';
  }

  archiveDetailOverlay.classList.remove("hidden");
}

function getSkillLevelLocal(exp) {
  exp = exp || 0;
  let level = 0;
  for (let i = skillLevelConfig.thresholds.length - 1; i >= 0; i--) {
    if (exp >= skillLevelConfig.thresholds[i]) {
      level = i;
      break;
    }
  }
  return level;
}

function closeArchiveDetail() {
  archiveDetailOverlay.classList.add("hidden");
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
    const discoveredVal = record.sampleDiscoveredValue !== undefined ? record.sampleDiscoveredValue : (record.sampleValue || 0);
    const returnedVal = record.sampleReturnedValue !== undefined ? record.sampleReturnedValue : (record.success ? (record.sampleValue || 0) : 0);
    const finalResearch = (record.data || 0) + returnedVal;
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
        <span style="color:#8fa9ae">发现<strong>${discoveredVal}</strong></span>
        <span style="color:#f2c14e">返运<strong>${returnedVal}</strong></span>
      </div>
      <div class="archive-card-stats" style="font-size:12px;opacity:.85">
        <span>完整度<strong>${record.sampleIntegrity !== undefined ? record.sampleIntegrity + '%' : '—'}</strong></span>
        <span>科研成果<strong>${finalResearch}</strong></span>
      </div>
      <div class="archive-card-score">综合评分：${record.score}</div>
      <p class="archive-card-ending">${record.ending}</p>
    `;
    card.addEventListener("click", () => showArchiveDetail(record));
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
    fatiguedPenalty: { data: 0, food: 0, morale: 0 },
    skillUps: [],
    statusGained: [],
    statusCleared: []
  };

  state.crew.forEach((member) => {
    if (member.station === "rest") return;

    const isMatched = member.specialty === member.station;
    const bonus = crewSpecialtyBonus[member.station] || {};

    const efficiency = getCrewEfficiency(member);
    const skillLevel = getSkillLevel(member, member.station);
    const skillMult = skillLevelConfig.bonusMult[skillLevel] || 1.0;
    const statusSpecialtyMult = getTempStatusSpecialtyMult(member);

    if (isMatched) {
      if (bonus.fuelSave) effects.fuelSave += Math.round(bonus.fuelSave * efficiency * skillMult * statusSpecialtyMult);
      if (bonus.dataBoost) effects.dataBoost += Math.round(bonus.dataBoost * efficiency * skillMult * statusSpecialtyMult);
      if (bonus.foodSave) effects.foodSave += Math.round(bonus.foodSave * efficiency * skillMult * statusSpecialtyMult);
      if (bonus.moraleBoost) effects.moraleBoost += Math.round(bonus.moraleBoost * efficiency * skillMult * statusSpecialtyMult);
      effects.matched.push(member.name);
    } else {
      if (bonus.fuelSave) effects.fuelSave += Math.round(bonus.fuelSave * 0.4 * efficiency * skillMult);
      if (bonus.dataBoost) effects.dataBoost += Math.round(bonus.dataBoost * 0.4 * efficiency * skillMult);
      if (bonus.foodSave) effects.foodSave += Math.round(bonus.foodSave * 0.4 * efficiency * skillMult);
      if (bonus.moraleBoost) effects.moraleBoost += Math.round(bonus.moraleBoost * 0.4 * efficiency * skillMult);
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

    member.tempStatuses.forEach((sid) => {
      const def = tempStatusDefs[sid];
      if (def && def.nextDayFatigueBonus) {
      }
    });
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
  efficiency *= getTempStatusEfficiencyMult(member);
  if (member.station && member.station !== "rest") {
    const skillLevel = getSkillLevel(member, member.station);
    efficiency *= 1 + (skillLevel * 0.05);
  }
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
  const dayGrowthEvents = [];
  const dayStatusEvents = [];

  state.crew.forEach((member) => {
    const todayStation = member.station;
    const yesterdayStation = member.previousStation;

    if (todayStation === "rest") {
      member.fatigue = Math.max(0, member.fatigue - 35);
      const moodRecoveryMult = hasTempStatus(member, "shaken") ? tempStatusDefs.shaken.moodRecoveryMult : 1;
      member.mood = Math.min(100, member.mood + Math.round(8 * moodRecoveryMult));
      member.consecutiveDays = 0;

      member.tempStatuses.slice().forEach((sid) => {
        const def = tempStatusDefs[sid];
        if (!def) return;
        member.statusRestCounters[sid] = (member.statusRestCounters[sid] || 0) + 1;
        if (member.statusRestCounters[sid] >= def.clearRestDays) {
          removeTempStatus(member, sid);
          dayStatusEvents.push(`${member.name} 连续休息解除状态「${def.name}」`);
        }
      });
    } else {
      Object.keys(member.statusRestCounters).forEach((sid) => {
        member.statusRestCounters[sid] = 0;
      });
      member.statusRestCounters = {};

      let fatigueDelta = 15;
      const isMatched = member.specialty === todayStation;
      if (!isMatched) fatigueDelta += 5;

      if (member.consecutiveDays >= 2) fatigueDelta += 8;
      if (member.consecutiveDays >= 3) fatigueDelta += 10;
      if (member.consecutiveDays >= 4) fatigueDelta += 12;

      if (state.weather.name === "暴风雪") fatigueDelta += 6;
      else if (state.weather.name === "低温") fatigueDelta += 3;

      if (hasTempStatus(member, "exhausted")) {
        fatigueDelta += tempStatusDefs.exhausted.nextDayFatigueBonus;
      }

      member.fatigue = Math.min(100, member.fatigue + fatigueDelta);

      let moodDelta = 0;
      if (isMatched) moodDelta += 2;
      if (member.consecutiveDays >= 2) moodDelta -= 2;
      if (member.consecutiveDays >= 3) moodDelta -= 4;
      if (member.fatigue >= 80) moodDelta -= 5;
      else if (member.fatigue >= 60) moodDelta -= 2;
      moodDelta += Math.round(state.morale >= 70 ? 1 : state.morale <= 30 ? -2 : 0);

      member.mood = Math.max(0, Math.min(100, member.mood + moodDelta));

      if (yesterdayStation === todayStation && todayStation && todayStation !== "rest") {
        member.consecutiveDays = (member.consecutiveDays || 0) + 1;
      } else {
        member.consecutiveDays = 1;
      }

      if (todayStation && todayStation !== "rest") {
        let gainExp = isMatched ? 2 : 1;
        if (member.consecutiveDays >= 5) gainExp += 2;
        else if (member.consecutiveDays >= 3) gainExp += 1;

        const oldLevel = getSkillLevel(member, todayStation);
        member.skills[todayStation] = (member.skills[todayStation] || 0) + gainExp;
        const newLevel = getSkillLevel(member, todayStation);
        member.skillLevels[todayStation] = newLevel;
        if (newLevel > oldLevel) {
          const stationName = stations.find((s) => s.id === todayStation)?.name || todayStation;
          const levelName = skillLevelConfig.names[newLevel];
          dayGrowthEvents.push(`🌟 ${member.name} ${stationName}技能提升至「${levelName}」！（连续${member.consecutiveDays}天）`);
          member._growthLog.push({ day: state.day, station: todayStation, level: newLevel });
        } else if (gainExp > 2) {
          member._growthLog.push({ day: state.day, station: todayStation, level: newLevel, bonus: true, exp: gainExp });
        }
      }
    }

    member.previousStation = todayStation;

    if (member.fatigue >= 80) {
      member._consecutiveHighFatigue = (member._consecutiveHighFatigue || 0) + 1;
    } else {
      member._consecutiveHighFatigue = 0;
    }
    if (member.mood <= 30) {
      member._consecutiveLowMood = (member._consecutiveLowMood || 0) + 1;
    } else {
      member._consecutiveLowMood = 0;
    }

    if (todayStation !== "rest" && state.weather.name === "暴风雪" && !hasTempStatus(member, "shaken") && member.fatigue >= 50) {
      if (Math.random() < 0.3) {
        if (addTempStatus(member, "shaken")) {
          dayStatusEvents.push(`😰 ${member.name} 受暴风雪影响出现「心神不宁」`);
        }
      }
    }

    if (todayStation !== "rest") {
      Object.values(tempStatusDefs).forEach((def) => {
        if (!def.trigger) return;
        if (def.trigger(member)) {
          if (addTempStatus(member, def.id)) {
            dayStatusEvents.push(`${def.icon} ${member.name} 获得临时状态「${def.name}」`);
          }
        }
      });
    }

    member.station = todayStation === "rest" ? null : null;
  });

  if (dayGrowthEvents.length > 0 || dayStatusEvents.length > 0) {
    setTimeout(() => {
      dayGrowthEvents.forEach((e) => addLog(e));
      dayStatusEvents.forEach((e) => addLog(e));
    }, 0);
  }

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

  state.crew.forEach((m) => {
    const statusNames = m.tempStatuses
      .map((sid) => tempStatusDefs[sid]?.name)
      .filter(Boolean);
    if (statusNames.length > 0) {
      parts.push(`${m.name} 状态：${statusNames.join("、")}`);
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

    const statusHtml = member.tempStatuses.length > 0
      ? `<div class="crew-status-row">
          ${member.tempStatuses.map((sid) => {
            const def = tempStatusDefs[sid];
            if (!def) return "";
            const isNegative = sid === "exhausted" || sid === "burnout" || sid === "shaken";
            const cls = isNegative ? "crew-status-tag negative" : "crew-status-tag positive";
            return `<span class="${cls}" title="${def.desc}">${def.icon} ${def.name}</span>`;
          }).join("")}
        </div>`
      : "";

    const displayStation = member.station || member.previousStation || member.specialty;
    const skillProg = getSkillProgress(member, displayStation);
    const levelName = skillLevelConfig.names[skillProg.level] || "入门";
    const stationInfo = stations.find((s) => s.id === displayStation);
    const stationName = stationInfo ? stationInfo.icon + stationInfo.name : displayStation;
    const progressPct = Math.round(skillProg.progress * 100);
    const nextExpStr = skillProg.nextExp !== null
      ? `${skillProg.exp}/${skillProg.nextExp}`
      : `${skillProg.exp} (已满级)`;

    const skillHtml = `<div class="crew-skill-section">
      <div class="crew-skill-head">
        <span class="crew-skill-label">📈 ${stationName}技能</span>
        <span class="crew-skill-level">${levelName}</span>
      </div>
      <div class="crew-skill-bar-wrap">
        <div class="crew-skill-bar"><div class="crew-skill-fill" style="width:${progressPct}%"></div></div>
        <span class="crew-skill-exp">${nextExpStr}</span>
      </div>
    </div>`;

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
      ${skillHtml}
      ${statusHtml}
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
      const skillLv = st.id !== "rest" ? getSkillLevel(member, st.id) : 0;
      const skillHint = st.id !== "rest" && skillLv > 0 ? `（${skillLevelConfig.names[skillLv]}，收益×${skillLevelConfig.bonusMult[skillLv]}）` : "";
      btn.innerHTML = `${st.icon}<div>${st.name}</div>${isMatched && st.id !== "rest" ? "<small>专长</small>" : "<small>&nbsp;</small>"}`;
      btn.title = isMatched && st.id !== "rest"
        ? `${st.desc}（${member.specialtyName}，效率+60%${skillHint}）`
        : st.id !== "rest"
          ? `${st.desc}${skillHint}`
          : st.desc;
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

function loadCustomLevels() {
  try {
    const raw = localStorage.getItem(CUSTOM_LEVELS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((l) => l && l.id && l.name).map((l) => {
      try {
        if (Array.isArray(l.emergencyEvents) && l.emergencyEvents.length > 0) {
          const sanitized = [];
          l.emergencyEvents.forEach((e) => {
            const s = sanitizeEmergencyEvent(e);
            if (s) sanitized.push(s);
          });
          l.emergencyEvents = sanitized.length > 0 ? sanitized : undefined;
        }
      } catch (ee) {}
      return l;
    });
  } catch (e) {
    return [];
  }
}

function saveCustomLevels(levels) {
  try {
    localStorage.setItem(CUSTOM_LEVELS_KEY, JSON.stringify(levels));
  } catch (e) {}
}

function getAllMissions() {
  const customs = loadCustomLevels().map((l) => ({
    ...l,
    isCustom: true,
    successText: function(s) {
      const base = s.data >= (l.dataGoal || 0)
        ? `自定义关卡「${l.name}」完成！科研成果 ${s.data}，达成目标。最终评分：${s.score}。`
        : `自定义关卡「${l.name}」撑过了${l.days}天，但科研成果仅 ${s.data}（目标≥${l.dataGoal || 0}）。最终评分：${s.score}。`;
      const extra = [];
      if (l.minFuel && s.fuel < l.minFuel) extra.push(`柴油未达最低要求（${s.fuel}/${l.minFuel}）`);
      if (l.minMorale && s.morale < l.minMorale) extra.push(`士气未达最低要求（${s.morale}/${l.minMorale}）`);
      if (l.minFood && s.food < l.minFood) extra.push(`食物未达最低要求（${s.food}/${l.minFood}）`);
      if (extra.length > 0) return base + ` 但部分条件未达成：${extra.join('，')}。`;
      return base;
    },
    failText: function(s) {
      return `自定义关卡「${l.name}」失败，某项关键资源归零。仅获得科研成果 ${s.data}。最终评分：${s.score}。`;
    }
  }));
  return [...missions, ...customs];
}

function findMissionById(id) {
  return getAllMissions().find((m) => m.id === id);
}

function getDefaultEditorConfig() {
  return {
    name: "",
    tag: "自定义",
    color: "#4f8a5b",
    desc: "",
    days: 7,
    fuel: 80,
    morale: 75,
    food: 70,
    data: 0,
    allocHeat: 3,
    allocComm: 2,
    allocLab: 4,
    allocFood: 3,
    weightSunny: 1,
    weightCold: 1,
    weightBlizzard: 1,
    weightNight: 1,
    dataGoal: 150,
    returnedValueGoal: 0,
    commBonus: false,
    commBonusVal: 0,
    commMoraleBonus: false,
    foodReserve: false,
    emergencyChance: 40,
    minFuel: 0,
    minMorale: 0,
    minFood: 0,
    intro: "",
    emergencyEvents: []
  };
}

function populateEditor(config) {
  const f = editorFields;
  f.name.value = config.name || "";
  f.tag.value = config.tag || "自定义";
  f.color.value = config.color || "#4f8a5b";
  f.desc.value = config.desc || "";
  f.days.value = config.days ?? 7;
  f.fuel.value = config.fuel ?? 80;
  f.morale.value = config.morale ?? 75;
  f.food.value = config.food ?? 70;
  f.data.value = config.data ?? 0;
  f.allocHeat.value = config.allocHeat ?? 3;
  f.allocComm.value = config.allocComm ?? 2;
  f.allocLab.value = config.allocLab ?? 4;
  f.allocFood.value = config.allocFood ?? 3;
  f.weightSunny.value = config.weightSunny ?? 1;
  f.weightCold.value = config.weightCold ?? 1;
  f.weightBlizzard.value = config.weightBlizzard ?? 1;
  f.weightNight.value = config.weightNight ?? 1;
  f.dataGoal.value = config.dataGoal ?? 150;
  f.returnedValueGoal.value = config.returnedValueGoal ?? 0;
  f.commBonus.checked = !!config.commBonus;
  f.commBonusVal.value = config.commBonusVal ?? 0;
  f.commMoraleBonus.checked = !!config.commMoraleBonus;
  f.foodReserve.checked = !!config.foodReserve;
  f.emergencyChance.value = config.emergencyChance ?? 40;
  f.minFuel.value = config.minFuel ?? 0;
  f.minMorale.value = config.minMorale ?? 0;
  f.minFood.value = config.minFood ?? 0;
  f.intro.value = config.intro || "";

  const rawEvents = Array.isArray(config.emergencyEvents) ? config.emergencyEvents : [];
  editorEmergencyEvents = [];
  rawEvents.forEach((e) => {
    const s = sanitizeEmergencyEvent(e);
    if (s) editorEmergencyEvents.push(s);
  });
  renderEditorEmergencyList();
}

function collectEditorConfig() {
  const f = editorFields;
  return {
    name: (f.name.value || "").trim(),
    tag: (f.tag.value || "自定义").trim(),
    color: (f.color.value || "#4f8a5b").trim(),
    desc: (f.desc.value || "").trim(),
    days: parseInt(f.days.value) || 0,
    fuel: parseInt(f.fuel.value) || 0,
    morale: parseInt(f.morale.value) || 0,
    food: parseInt(f.food.value) || 0,
    data: parseInt(f.data.value) || 0,
    allocHeat: parseInt(f.allocHeat.value) || 0,
    allocComm: parseInt(f.allocComm.value) || 0,
    allocLab: parseInt(f.allocLab.value) || 0,
    allocFood: parseInt(f.allocFood.value) || 0,
    weightSunny: parseInt(f.weightSunny.value) || 0,
    weightCold: parseInt(f.weightCold.value) || 0,
    weightBlizzard: parseInt(f.weightBlizzard.value) || 0,
    weightNight: parseInt(f.weightNight.value) || 0,
    dataGoal: parseInt(f.dataGoal.value) || 0,
    returnedValueGoal: parseInt(f.returnedValueGoal.value) || 0,
    commBonus: f.commBonus.checked,
    commBonusVal: parseInt(f.commBonusVal.value) || 0,
    commMoraleBonus: f.commMoraleBonus.checked,
    foodReserve: f.foodReserve.checked,
    emergencyChance: parseInt(f.emergencyChance.value) || 0,
    minFuel: parseInt(f.minFuel.value) || 0,
    minMorale: parseInt(f.minMorale.value) || 0,
    minFood: parseInt(f.minFood.value) || 0,
    intro: (f.intro.value || "").trim(),
    emergencyEvents: JSON.parse(JSON.stringify(editorEmergencyEvents || []))
  };
}

function editorConfigToMission(config, id) {
  const weatherWeight = {
    "晴朗": config.weightSunny,
    "低温": config.weightCold,
    "暴风雪": config.weightBlizzard,
    "极夜静风": config.weightNight
  };
  const hasAnyWeight = Object.values(weatherWeight).some((v) => v > 0);

  const sanitizedEvents = [];
  const rawEvents = Array.isArray(config.emergencyEvents) ? config.emergencyEvents : [];
  rawEvents.forEach((e) => {
    const s = sanitizeEmergencyEvent(e);
    if (s) sanitizedEvents.push(s);
  });

  return {
    id: id,
    name: config.name,
    tag: config.tag,
    desc: config.desc || `自定义关卡：${config.days}天值班挑战。`,
    color: config.color,
    days: config.days,
    initial: {
      fuel: Math.max(0, Math.min(100, config.fuel)),
      morale: Math.max(0, Math.min(100, config.morale)),
      food: Math.max(0, Math.min(100, config.food)),
      data: Math.max(0, config.data)
    },
    allocations: {
      heat: Math.max(0, Math.min(7, config.allocHeat)),
      comm: Math.max(0, Math.min(7, config.allocComm)),
      lab: Math.max(0, Math.min(7, config.allocLab)),
      food: Math.max(0, Math.min(7, config.allocFood))
    },
    dataGoal: Math.max(0, config.dataGoal),
    returnedValueGoal: Math.max(0, config.returnedValueGoal),
    dataPerLab: 0,
    weatherWeight: hasAnyWeight ? weatherWeight : null,
    commBonus: config.commBonus ? Math.max(0, Math.min(20, config.commBonusVal)) : undefined,
    commMoraleBonus: config.commMoraleBonus || undefined,
    foodReserve: config.foodReserve || undefined,
    emergencyChance: Math.max(0, Math.min(100, config.emergencyChance)) / 100,
    minFuel: Math.max(0, Math.min(100, config.minFuel)),
    minMorale: Math.max(0, Math.min(100, config.minMorale)),
    minFood: Math.max(0, Math.min(100, config.minFood)),
    intro: config.intro || `自定义关卡「${config.name}」开始：${config.days}天值班，目标科研成果≥${config.dataGoal}${config.returnedValueGoal > 0 ? `，返运价值≥${config.returnedValueGoal}` : ''}。祝你好运！`,
    isCustom: true,
    successText: null,
    failText: null,
    emergencyEvents: sanitizedEvents.length > 0 ? sanitizedEvents : undefined
  };
}

function validateEmergencyEvent(evt, idx) {
  const e = [];
  const w = [];
  const prefix = idx != null ? `事件#${idx + 1}「${evt.name || "未命名"}」：` : "";

  if (!evt.name || !String(evt.name).trim()) {
    e.push(prefix + "名称不能为空");
  } else if (String(evt.name).length > 20) {
    e.push(prefix + "名称不能超过20个字符");
  }
  if (!evt.desc || !String(evt.desc).trim()) {
    e.push(prefix + "描述不能为空");
  }
  if (!evt.weight || parseInt(evt.weight) < 1) {
    e.push(prefix + "出现权重必须≥1");
  }
  if (evt.dayMin == null || parseInt(evt.dayMin) < 1) {
    e.push(prefix + "触发起始天必须≥1");
  }
  if (evt.dayMax == null || parseInt(evt.dayMax) < 1) {
    e.push(prefix + "触发结束天必须≥1");
  }
  const dMin = parseInt(evt.dayMin) || 1;
  const dMax = parseInt(evt.dayMax) || 1;
  if (dMin > dMax) {
    e.push(prefix + "触发起始天不能大于结束天");
  }

  if (!Array.isArray(evt.options) || evt.options.length < 3) {
    e.push(prefix + "必须配置3个选项");
  } else {
    for (let i = 0; i < 3; i++) {
      const o = evt.options[i];
      const op = prefix + `选项${i + 1}`;
      if (!o || !o.label || !String(o.label).trim()) {
        e.push(op + "：名称不能为空");
      }
      if (!o || !o.desc || !String(o.desc).trim()) {
        e.push(op + "：描述不能为空");
      }
      if (o) {
        const fx = o.effects || {};
        const totalLoss = (parseInt(fx.fuel) < 0 ? Math.abs(parseInt(fx.fuel)) : 0) +
          (parseInt(fx.food) < 0 ? Math.abs(parseInt(fx.food)) : 0) +
          (parseInt(fx.morale) < 0 ? Math.abs(parseInt(fx.morale)) : 0);
        if (totalLoss > 40) {
          w.push(op + "：总损失量超过40，选择后极易直接失败");
        }
      }
    }
  }

  return { valid: e.length === 0, errors: e, warnings: w };
}

function validateLevelConfig(config) {
  const errors = [];
  const warnings = [];

  if (!config.name || config.name.length < 1) {
    errors.push("关卡名称不能为空");
  }
  if (config.name && config.name.length > 20) {
    errors.push("关卡名称不能超过20个字符");
  }

  if (config.days < 1) {
    errors.push("值班天数至少为1天");
  } else if (config.days > 30) {
    errors.push("值班天数不能超过30天");
  }

  if (config.fuel <= 0 && config.days > 1) {
    errors.push("初始柴油为0，且天数>1，游戏将在第一天结束必然失败（电力消耗会导致柴油≤0）");
  }
  if (config.food <= 0 && config.days > 1) {
    errors.push("初始食物为0，且天数>1，游戏将在第一天结束必然失败（每天都会损耗食物）");
  }
  if (config.morale <= 0) {
    errors.push("初始士气为0，游戏开始即失败");
  }

  if (config.fuel < 10 && config.days > 3) {
    warnings.push(`初始柴油仅 ${config.fuel}，天数 ${config.days} 天，资源非常紧张，极有可能失败`);
  }
  if (config.food < 15 && config.days > 3) {
    warnings.push(`初始食物仅 ${config.food}，天数 ${config.days} 天，食物可能不足`);
  }
  if (config.morale < 30) {
    warnings.push(`初始士气仅 ${config.morale}，一个暴风雪天就可能导致士气归零`);
  }

  const totalWeight = config.weightSunny + config.weightCold + config.weightBlizzard + config.weightNight;
  if (totalWeight <= 0) {
    errors.push("天气权重不能全部为0，至少要有一种天气可能出现");
  }

  if (config.weightBlizzard >= 6 && config.days >= 5) {
    warnings.push("暴风雪权重过高，游戏难度将非常大");
  }

  const totalAlloc = config.allocHeat + config.allocComm + config.allocLab + config.allocFood;
  if (totalAlloc > 12) {
    warnings.push(`初始电力分配总和为 ${totalAlloc}，而大部分天气可用电力仅10-12，开局即可能超配`);
  }

  if (config.dataGoal > 0) {
    const expectedDailyData = 15;
    const expectedTotal = expectedDailyData * config.days + config.data;
    if (config.dataGoal > expectedTotal * 2.5) {
      warnings.push(`科研目标 ${config.dataGoal} 偏高，按平均每天约${expectedDailyData}数据计算，${config.days}天预计可达成约${expectedTotal}。需要非常高的实验效率`);
    }
  }

  if (config.returnedValueGoal > 0) {
    const expectedDailySampleValue = 20;
    const expectedTotalReturned = expectedDailySampleValue * config.days * 0.6;
    if (config.returnedValueGoal > expectedTotalReturned * 2) {
      warnings.push(`返运价值目标 ${config.returnedValueGoal} 偏高，按平均每天约${expectedDailySampleValue}样本价值、60%返运成功率计算，${config.days}天预计可返运约${Math.round(expectedTotalReturned)}。需要非常好的资源保障`);
    }
  }

  if ((config.dataGoal > 0 || config.returnedValueGoal > 0) && config.allocLab < 2 && config.days < 5) {
    warnings.push("科研/返运目标>0但初始实验电力分配<2且天数<5，几乎不可能产出样本达成目标");
  }

  if (config.minFuel > config.fuel) {
    errors.push(`最终燃油最低要求 (${config.minFuel}) 高于初始燃油 (${config.fuel})，必败`);
  }
  if (config.minMorale > config.morale) {
    errors.push(`最终士气最低要求 (${config.minMorale}) 高于初始士气 (${config.morale})，必败`);
  }
  if (config.minFood > config.food) {
    errors.push(`最终食物最低要求 (${config.minFood}) 高于初始食物 (${config.food})，必败`);
  }

  const minTotalReq = config.minFuel + config.minMorale + config.minFood;
  if (minTotalReq > 0 && config.days <= 1) {
    warnings.push("设置了胜败最低要求但仅1天，资源基本不会变化，意义不大");
  }

  if (config.emergencyChance > 70) {
    warnings.push(`突发事件概率 ${config.emergencyChance}% 过高，游戏会非常混乱`);
  }

  const evts = Array.isArray(config.emergencyEvents) ? config.emergencyEvents : [];
  if (evts.length > 0) {
    if (config.emergencyChance > 0 && evts.length < 2) {
      warnings.push(`自定义突发事件仅配置了 ${evts.length} 个，游戏体验会很单调，建议至少2个`);
    }
    for (let i = 0; i < evts.length; i++) {
      const vr = validateEmergencyEvent(evts[i], i);
      errors.push(...vr.errors);
      warnings.push(...vr.warnings);
    }
    const allDays = {};
    evts.forEach((e) => {
      if (!e) return;
      const mn = parseInt(e.dayMin) || 1;
      const mx = parseInt(e.dayMax) || config.days;
      for (let d = mn; d <= mx && d <= config.days; d++) {
        allDays[d] = true;
      }
    });
    const uncovered = [];
    for (let d = 1; d <= config.days; d++) {
      if (!allDays[d]) uncovered.push(d);
    }
    if (uncovered.length > 0 && config.emergencyChance > 0) {
      const sample = uncovered.slice(0, 5).join("、");
      const more = uncovered.length > 5 ? `…等${uncovered.length}天` : "";
      warnings.push(`以下天数没有任何自定义突发事件可触发（第${sample}${more}），这些天将不会触发突发事件`);
    }
  }

  return { valid: errors.length === 0, errors, warnings };
}

function showValidationResult(result) {
  clearEditorSaveHintTimer();

  if (!result) {
    editorValidation.classList.add("hidden");
    editorValidation.className = "editor-validation hidden";
    return;
  }

  editorValidation.classList.remove("hidden");

  if (result.valid && result.warnings.length === 0) {
    editorValidation.className = "editor-validation success";
    editorValidation.innerHTML = `<strong>✅ 配置校验通过！</strong>此配置可正常游玩。`;
  } else if (result.valid) {
    editorValidation.className = "editor-validation warning";
    editorValidation.innerHTML = `
      <strong>⚠ 配置校验通过，但有以下警告：</strong>
      <ul>${result.warnings.map((w) => `<li>${w}</li>`).join("")}</ul>
    `;
  } else {
    editorValidation.className = "editor-validation error";
    editorValidation.innerHTML = `
      <strong>❌ 配置校验失败，存在以下问题：</strong>
      <ul>${result.errors.map((e) => `<li>${e}</li>`).join("")}</ul>
      ${result.warnings.length ? `<hr style="border-color:#e0c070;margin:8px 0"><strong style="color:#8e5a1a">同时有以下警告：</strong><ul>${result.warnings.map((w) => `<li>${w}</li>`).join("")}</ul>` : ""}
    `;
  }
}

function openEditor() {
  clearEditorSaveHintTimer();
  levelEditorPanel.classList.remove("hidden");
  editorEditingId = null;
  editorDeleteBtn.classList.add("hidden");
  editorSaveBtn.textContent = "💾 保存为新关卡";
  populateEditor(getDefaultEditorConfig());
  editorValidation.classList.add("hidden");
  renderSavedLevels();
  levelEditorPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeEditor() {
  levelEditorPanel.classList.add("hidden");
  editorEditingId = null;
}

function editLevel(id) {
  const levels = loadCustomLevels();
  const level = levels.find((l) => l.id === id);
  if (!level) return;

  clearEditorSaveHintTimer();
  editorEditingId = id;
  editorDeleteBtn.classList.remove("hidden");
  editorSaveBtn.textContent = "💾 更新此关卡";

  populateEditor({
    name: level.name,
    tag: level.tag,
    color: level.color,
    desc: level.desc,
    days: level.days,
    fuel: level.initial.fuel,
    morale: level.initial.morale,
    food: level.initial.food,
    data: level.initial.data,
    allocHeat: level.allocations.heat,
    allocComm: level.allocations.comm,
    allocLab: level.allocations.lab,
    allocFood: level.allocations.food,
    weightSunny: level.weatherWeight ? level.weatherWeight["晴朗"] ?? 1 : 1,
    weightCold: level.weatherWeight ? level.weatherWeight["低温"] ?? 1 : 1,
    weightBlizzard: level.weatherWeight ? level.weatherWeight["暴风雪"] ?? 1 : 1,
    weightNight: level.weatherWeight ? level.weatherWeight["极夜静风"] ?? 1 : 1,
    dataGoal: level.dataGoal,
    commBonus: !!level.commBonus,
    commBonusVal: level.commBonus || 0,
    commMoraleBonus: !!level.commMoraleBonus,
    foodReserve: !!level.foodReserve,
    emergencyChance: level.emergencyChance !== undefined ? Math.round(level.emergencyChance * 100) : 40,
    minFuel: level.minFuel || 0,
    minMorale: level.minMorale || 0,
    minFood: level.minFood || 0,
    intro: level.intro,
    emergencyEvents: level.emergencyEvents || []
  });

  editorValidation.classList.add("hidden");
  levelEditorPanel.classList.remove("hidden");
  levelEditorPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function deleteLevel(id) {
  if (!confirm("确定要删除这个自定义关卡吗？此操作不可撤销。")) return;
  const levels = loadCustomLevels().filter((l) => l.id !== id);
  saveCustomLevels(levels);

  if (editorEditingId === id) {
    editorEditingId = null;
    editorDeleteBtn.classList.add("hidden");
    editorSaveBtn.textContent = "💾 保存为新关卡";
    populateEditor(getDefaultEditorConfig());
  }

  renderSavedLevels();
  renderFilterTags();
  renderMissionCards();
}

function saveEditorLevel() {
  clearEditorSaveHintTimer();
  const config = collectEditorConfig();
  const validation = validateLevelConfig(config);

  if (!validation.valid) {
    showValidationResult(validation);
    alert("配置存在错误，请先修正后再保存。");
    return;
  }

  const levels = loadCustomLevels();
  const missionData = editorConfigToMission(config, editorEditingId || (CUSTOM_LEVEL_ID_PREFIX + Date.now()));

  let saveLevels;
  if (editorEditingId) {
    saveLevels = levels.map((l) => (l.id === editorEditingId ? missionData : l));
  } else {
    saveLevels = [...levels, missionData];
  }

  saveCustomLevels(saveLevels);
  renderSavedLevels();
  renderFilterTags();
  renderMissionCards();

  editorValidation.classList.remove("hidden");
  editorValidation.className = "editor-validation success";
  editorValidation.innerHTML = `<strong>✅ 已保存！</strong>关卡「${config.name}」已保存，可以在任务选择台中找到并游玩。`;

  editorSaveHintTimer = setTimeout(() => {
    editorValidation.classList.add("hidden");
    editorSaveHintTimer = null;
  }, 2500);
}

function clearEditorSaveHintTimer() {
  if (editorSaveHintTimer) {
    clearTimeout(editorSaveHintTimer);
    editorSaveHintTimer = null;
  }
}

function renderSavedLevels() {
  const levels = loadCustomLevels();
  if (levels.length === 0) {
    editorSavedList.innerHTML = `<div class="editor-saved-empty">暂无保存的自定义关卡，完成配置后点击上方「保存为新关卡」。</div>`;
    return;
  }

  editorSavedList.innerHTML = "";
  levels.forEach((level) => {
    const item = document.createElement("div");
    item.className = "editor-saved-item";
    item.innerHTML = `
      <div class="editor-saved-item-head">
        <span class="editor-saved-item-name">${level.name}</span>
        <span class="editor-saved-item-tag" style="background:${level.color}">${level.tag}</span>
      </div>
      <div class="editor-saved-item-desc">${level.desc || "（无描述）"}</div>
      <div class="editor-saved-item-stats">
        <span>天数<strong>${level.days}</strong></span>
        <span>目标<strong>${level.dataGoal}</strong></span>
        <span>柴油<strong>${level.initial.fuel}</strong></span>
        <span>食物<strong>${level.initial.food}</strong></span>
        <span>事件<strong>${Array.isArray(level.emergencyEvents) ? level.emergencyEvents.length : 0}${level.emergencyEvents && level.emergencyEvents.length ? "✨" : "♻"}</strong></span>
      </div>
    `;
    item.addEventListener("click", () => editLevel(level.id));
    editorSavedList.appendChild(item);
  });
}

function copyFromSelectedLevel() {
  clearEditorSaveHintTimer();

  if (!state.selectedMissionId || state.selectedMissionId === "campaign") {
    editorValidation.classList.remove("hidden");
    editorValidation.className = "editor-validation error";
    editorValidation.innerHTML = `<strong>⚠ 请先选择关卡</strong>请在任务选择台中选中一个默认关卡或自定义关卡，然后再点击复制。`;
    return;
  }

  const mission = findMissionById(state.selectedMissionId);
  if (!mission) {
    editorValidation.classList.remove("hidden");
    editorValidation.className = "editor-validation error";
    editorValidation.innerHTML = `<strong>❌ 未找到关卡</strong>选中的关卡不存在，请重新选择。`;
    return;
  }

  const config = {
    name: mission.name,
    tag: mission.tag,
    color: mission.color,
    desc: mission.desc,
    days: mission.days,
    fuel: mission.initial.fuel,
    morale: mission.initial.morale,
    food: mission.initial.food,
    data: mission.initial.data,
    allocHeat: mission.allocations.heat,
    allocComm: mission.allocations.comm,
    allocLab: mission.allocations.lab,
    allocFood: mission.allocations.food,
    weightSunny: mission.weatherWeight ? mission.weatherWeight["晴朗"] ?? 1 : 1,
    weightCold: mission.weatherWeight ? mission.weatherWeight["低温"] ?? 1 : 1,
    weightBlizzard: mission.weatherWeight ? mission.weatherWeight["暴风雪"] ?? 1 : 1,
    weightNight: mission.weatherWeight ? mission.weatherWeight["极夜静风"] ?? 1 : 1,
    dataGoal: mission.dataGoal || 0,
    commBonus: !!mission.commBonus,
    commBonusVal: mission.commBonus || 0,
    commMoraleBonus: !!mission.commMoraleBonus,
    foodReserve: !!mission.foodReserve,
    emergencyChance: mission.emergencyChance !== undefined ? Math.round(mission.emergencyChance * 100) : 40,
    minFuel: mission.minFuel || 0,
    minMorale: mission.minMorale || 0,
    minFood: mission.minFood || 0,
    intro: mission.intro || "",
    emergencyEvents: (mission.isCustom && mission.emergencyEvents) ? mission.emergencyEvents : []
  };

  if (mission.isCustom && editorEditingId === mission.id) {
    populateEditor(config);
    editorValidation.classList.remove("hidden");
    editorValidation.className = "editor-validation success";
    editorValidation.innerHTML = `<strong>✅ 已刷新配置</strong>已重新载入当前编辑的自定义关卡「${mission.name}」的配置。`;
  } else if (mission.isCustom) {
    config.name = mission.name + " 副本";
    populateEditor(config);
    editorEditingId = null;
    editorDeleteBtn.classList.add("hidden");
    editorSaveBtn.textContent = "💾 保存为新关卡";
    editorValidation.classList.remove("hidden");
    editorValidation.className = "editor-validation success";
    editorValidation.innerHTML = `<strong>✅ 已复制配置</strong>已从自定义关卡「${mission.name}」复制配置，名称已自动添加「副本」后缀，调整后可保存为新关卡。`;
  } else {
    config.name = mission.name + " 副本";
    config.tag = config.tag || "自定义";
    populateEditor(config);
    editorEditingId = null;
    editorDeleteBtn.classList.add("hidden");
    editorSaveBtn.textContent = "💾 保存为新关卡";
    editorValidation.classList.remove("hidden");
    editorValidation.className = "editor-validation success";
    editorValidation.innerHTML = `<strong>✅ 已复制配置</strong>已从默认关卡「${mission.name}」复制配置，名称已自动添加「副本」后缀，调整后可保存为新的自定义关卡。默认关卡不会被覆盖。`;
  }

  levelEditorPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderEditorEmergencyList() {
  if (!eeEls.list || !eeEls.count) return;
  const evts = editorEmergencyEvents || [];
  eeEls.count.textContent = evts.length;

  if (evts.length === 0) {
    eeEls.list.innerHTML = `<div class="editor-emergency-list-empty">📭 尚未配置自定义事件。留空则游玩时使用默认突发事件（天线结冰、样本冷藏故障等）。<br>点击右上角「+ 新增事件」可配置专属事件牌组。</div>`;
    return;
  }

  eeEls.list.innerHTML = "";
  evts.forEach((e, idx) => {
    const card = document.createElement("div");
    card.className = "editor-emergency-card";
    const tags = [];
    tags.push(`权重 ${e.weight || 1}`);
    tags.push(`第${e.dayMin || 1}-${e.dayMax || 30}天`);
    const tagHtml = tags.map((t, i) => `<span class="editor-emergency-meta-chip ${i === 0 ? "" : "warn"}">${t}</span>`).join("");

    let optsHtml = "";
    (e.options || []).forEach((o, oi) => {
      const fx = o.effects || {};
      const arr = [];
      if (fx.fuel) arr.push(`柴油${fx.fuel > 0 ? "+" : ""}${fx.fuel}`);
      if (fx.food) arr.push(`食物${fx.food > 0 ? "+" : ""}${fx.food}`);
      if (fx.morale) arr.push(`士气${fx.morale > 0 ? "+" : ""}${fx.morale}`);
      if (fx.data) arr.push(`数据${fx.data > 0 ? "+" : ""}${fx.data}`);
      optsHtml += `<div><strong>${oi + 1}.</strong> ${o.label || "-"} — ${arr.join("、") || "无影响"}</div>`;
    });

    card.innerHTML = `
      <div class="editor-emergency-card-head">
        <span class="editor-emergency-card-icon">${e.icon || "⚠️"}</span>
        <span class="editor-emergency-card-name">${e.name || "未命名"}</span>
        <div class="editor-emergency-card-actions">
          <button type="button" class="editor-emergency-card-btn" title="编辑">✏️</button>
          <button type="button" class="editor-emergency-card-btn del" title="删除">🗑</button>
        </div>
      </div>
      <div class="editor-emergency-card-desc">${e.desc || "（无描述）"}</div>
      <div class="editor-emergency-card-meta">${tagHtml}</div>
      <div class="editor-emergency-options-preview">${optsHtml || "（无选项配置）"}</div>
    `;

    const btns = card.querySelectorAll(".editor-emergency-card-btn");
    btns[0].addEventListener("click", (ev) => {
      ev.stopPropagation();
      openEmergencyEditor(idx);
    });
    btns[1].addEventListener("click", (ev) => {
      ev.stopPropagation();
      deleteEmergencyEvent(idx);
    });
    card.addEventListener("click", () => openEmergencyEditor(idx));
    eeEls.list.appendChild(card);
  });
}

function openEmergencyEditor(idx) {
  eeEditingIndex = (typeof idx === "number" && idx >= 0) ? idx : -1;
  eeEls.validation.classList.add("hidden");
  eeEls.validation.className = "editor-validation hidden";

  if (eeEditingIndex >= 0) {
    const evt = editorEmergencyEvents[eeEditingIndex];
    eeEls.title.textContent = `编辑事件 #${eeEditingIndex + 1}：${evt.name || ""}`;
    populateEmergencyEditor(evt);
  } else {
    eeEls.title.textContent = "新增突发事件";
    populateEmergencyEditor(null);
  }

  eeEls.overlay.classList.remove("hidden");
}

function closeEmergencyEditor() {
  eeEditingIndex = -1;
  eeEls.overlay.classList.add("hidden");
}

function populateEmergencyEditor(evt) {
  const opts = Array.isArray(evt && evt.options) ? evt.options : [];
  eeEls.name.value = (evt && evt.name) || "";
  eeEls.icon.value = (evt && evt.icon) || "⚠️";
  eeEls.desc.value = (evt && evt.desc) || "";
  eeEls.weight.value = (evt && evt.weight) || 1;
  eeEls.dayMin.value = (evt && evt.dayMin) || 1;
  eeEls.dayMax.value = (evt && evt.dayMax) || 30;

  const cards = eeEls.optionsWrap.querySelectorAll(".editor-emergency-option-card");
  cards.forEach((card, i) => {
    const o = opts[i] || { label: "", desc: "", effects: {} };
    const fx = o.effects || {};
    card.querySelector(".eeOptLabel").value = o.label || "";
    card.querySelector(".eeOptDesc").value = o.desc || "";
    card.querySelector(".eeOptFuel").value = fx.fuel || 0;
    card.querySelector(".eeOptFood").value = fx.food || 0;
    card.querySelector(".eeOptMorale").value = fx.morale || 0;
    card.querySelector(".eeOptData").value = fx.data || 0;
    const powerChk = card.querySelector(".eeOptPowerChk");
    const powerInp = card.querySelector(".eeOptPower");
    powerChk.checked = !!(fx.nextDayPowerPenalty && fx.nextDayPowerPenalty > 0);
    powerInp.value = fx.nextDayPowerPenalty || 0;
    powerInp.disabled = !powerChk.checked;
    const riskChk = card.querySelector(".eeOptFuelRiskChk");
    const riskInp = card.querySelector(".eeOptFuelRisk");
    riskChk.checked = !!(fx.nextDayFuelRisk && fx.nextDayFuelRisk > 0);
    riskInp.value = fx.nextDayFuelRisk || 0;
    riskInp.disabled = !riskChk.checked;

    powerChk.onchange = () => { powerInp.disabled = !powerChk.checked; if (!powerChk.checked) powerInp.value = 0; };
    riskChk.onchange = () => { riskInp.disabled = !riskChk.checked; if (!riskChk.checked) riskInp.value = 0; };
  });
}

function collectEmergencyEditor() {
  const cards = eeEls.optionsWrap.querySelectorAll(".editor-emergency-option-card");
  const options = [];
  cards.forEach((card) => {
    const fx = {};
    const fuel = parseInt(card.querySelector(".eeOptFuel").value);
    const food = parseInt(card.querySelector(".eeOptFood").value);
    const morale = parseInt(card.querySelector(".eeOptMorale").value);
    const data = parseInt(card.querySelector(".eeOptData").value);
    const powerChk = card.querySelector(".eeOptPowerChk").checked;
    const power = parseInt(card.querySelector(".eeOptPower").value);
    const riskChk = card.querySelector(".eeOptFuelRiskChk").checked;
    const risk = parseInt(card.querySelector(".eeOptFuelRisk").value);
    if (fuel) fx.fuel = fuel;
    if (food) fx.food = food;
    if (morale) fx.morale = morale;
    if (data) fx.data = data;
    if (powerChk && power > 0) fx.nextDayPowerPenalty = power;
    if (riskChk && risk > 0) fx.nextDayFuelRisk = risk;
    options.push({
      label: (card.querySelector(".eeOptLabel").value || "").trim(),
      desc: (card.querySelector(".eeOptDesc").value || "").trim(),
      effects: fx
    });
  });

  return {
    name: (eeEls.name.value || "").trim(),
    icon: (eeEls.icon.value || "⚠️").trim(),
    desc: (eeEls.desc.value || "").trim(),
    weight: parseInt(eeEls.weight.value) || 1,
    dayMin: parseInt(eeEls.dayMin.value) || 1,
    dayMax: parseInt(eeEls.dayMax.value) || 1,
    options: options
  };
}

function showEmergencyCardValidation(result) {
  if (!result) {
    eeEls.validation.classList.add("hidden");
    eeEls.validation.className = "editor-validation hidden";
    return;
  }
  eeEls.validation.classList.remove("hidden");
  if (result.valid && result.warnings.length === 0) {
    eeEls.validation.className = "editor-validation success";
    eeEls.validation.innerHTML = `<strong>✅ 校验通过</strong>`;
  } else if (result.valid) {
    eeEls.validation.className = "editor-validation warning";
    eeEls.validation.innerHTML = `<strong>⚠ 校验通过，但有警告：</strong><ul>${result.warnings.map((w) => `<li>${w}</li>`).join("")}</ul>`;
  } else {
    eeEls.validation.className = "editor-validation error";
    eeEls.validation.innerHTML = `<strong>❌ 配置存在错误：</strong><ul>${result.errors.map((e) => `<li>${e}</li>`).join("")}</ul>${result.warnings.length ? `<hr style="border-color:#e0c070;margin:8px 0"><strong style="color:#8e5a1a">同时警告：</strong><ul>${result.warnings.map((w) => `<li>${w}</li>`).join("")}</ul>` : ""}`;
  }
}

function saveEmergencyEditor() {
  const raw = collectEmergencyEditor();
  const result = validateEmergencyEvent(raw, eeEditingIndex >= 0 ? eeEditingIndex : null);
  if (!result.valid) {
    showEmergencyCardValidation(result);
    return;
  }
  const sanitized = sanitizeEmergencyEvent(raw);
  if (!sanitized) {
    alert("事件数据格式异常，请重试。");
    return;
  }

  if (eeEditingIndex >= 0) {
    editorEmergencyEvents[eeEditingIndex] = sanitized;
  } else {
    editorEmergencyEvents.push(sanitized);
  }
  closeEmergencyEditor();
  renderEditorEmergencyList();
  clearEditorSaveHintTimer();
}

function deleteEmergencyEvent(idx) {
  const name = (editorEmergencyEvents[idx] && editorEmergencyEvents[idx].name) || `事件 #${idx + 1}`;
  if (!confirm(`确定要删除突发事件「${name}」吗？`)) return;
  editorEmergencyEvents.splice(idx, 1);
  renderEditorEmergencyList();
  clearEditorSaveHintTimer();
}

function initEmergencyEditorEvents() {
  eeEls.addBtn.addEventListener("click", () => openEmergencyEditor(-1));
  eeEls.closeBtn.addEventListener("click", closeEmergencyEditor);
  eeEls.cancelBtn.addEventListener("click", closeEmergencyEditor);
  eeEls.mask.addEventListener("click", closeEmergencyEditor);
  eeEls.saveBtn.addEventListener("click", saveEmergencyEditor);

  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape" && !eeEls.overlay.classList.contains("hidden")) {
      closeEmergencyEditor();
    }
  });
}

function initEditorEvents() {
  toggleEditorBtn.addEventListener("click", openEditor);
  closeEditorBtn.addEventListener("click", closeEditor);
  editorLoadDefaultBtn.addEventListener("click", () => {
    clearEditorSaveHintTimer();
    populateEditor(getDefaultEditorConfig());
    editorEditingId = null;
    editorDeleteBtn.classList.add("hidden");
    editorSaveBtn.textContent = "💾 保存为新关卡";
    editorValidation.classList.add("hidden");
  });
  editorValidateBtn.addEventListener("click", () => {
    const config = collectEditorConfig();
    const result = validateLevelConfig(config);
    showValidationResult(result);
  });
  editorCopySelectedBtn.addEventListener("click", copyFromSelectedLevel);
  editorSaveBtn.addEventListener("click", saveEditorLevel);
  editorDeleteBtn.addEventListener("click", () => {
    if (editorEditingId) deleteLevel(editorEditingId);
  });
}

function getEmergencyPool() {
  try {
    const mission = state.mission;
    const day = state.day || 1;
    if (mission && mission.isCustom && mission.emergencyEvents && Array.isArray(mission.emergencyEvents) && mission.emergencyEvents.length > 0) {
      const filtered = mission.emergencyEvents.filter((e) => {
        if (!e || typeof e !== "object") return false;
        const minD = e.dayMin != null ? parseInt(e.dayMin) || 1 : 1;
        const maxD = e.dayMax != null ? parseInt(e.dayMax) || 999 : 999;
        return day >= minD && day <= maxD;
      });
      if (filtered.length > 0) return filtered;
      return [];
    }
    return emergencyEvents.filter((e) => !!e);
  } catch (e) {
    return emergencyEvents;
  }
}

function pickWeightedEmergency(pool) {
  try {
    if (!pool || pool.length === 0) return null;
    const weights = pool.map((e) => Math.max(1, parseInt(e.weight) || 1));
    const total = weights.reduce((a, b) => a + b, 0);
    if (total <= 0) return pool[Math.floor(Math.random() * pool.length)];
    let r = Math.random() * total;
    for (let i = 0; i < pool.length; i++) {
      r -= weights[i];
      if (r <= 0) return pool[i];
    }
    return pool[pool.length - 1];
  } catch (e) {
    return pool && pool.length ? pool[0] : null;
  }
}

function sanitizeEmergencyEvent(evt) {
  try {
    if (!evt || typeof evt !== "object") return null;
    const safeOpts = [];
    const rawOpts = Array.isArray(evt.options) ? evt.options : [];
    for (let i = 0; i < 3; i++) {
      const o = rawOpts[i] || {};
      const fx = o.effects || {};
      safeOpts.push({
        label: String(o.label || ("选项 " + (i + 1))).slice(0, 30),
        desc: String(o.desc || "").slice(0, 120),
        effects: {
          fuel: parseInt(fx.fuel) || 0,
          food: parseInt(fx.food) || 0,
          morale: parseInt(fx.morale) || 0,
          data: parseInt(fx.data) || 0,
          nextDayPowerPenalty: parseInt(fx.nextDayPowerPenalty) || 0,
          nextDayFuelRisk: parseInt(fx.nextDayFuelRisk) || 0
        }
      });
    }
    return {
      id: String(evt.id || ("evt_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8))),
      name: String(evt.name || "未命名事件").slice(0, 30),
      icon: String(evt.icon || "⚠️").slice(0, 8),
      desc: String(evt.desc || "").slice(0, 300),
      weight: Math.max(1, Math.min(100, parseInt(evt.weight) || 1)),
      dayMin: Math.max(1, parseInt(evt.dayMin) || 1),
      dayMax: Math.max(1, parseInt(evt.dayMax) || 1),
      options: safeOpts
    };
  } catch (e) {
    return null;
  }
}

function getCustomEmergencyChance() {
  if (state.mission && state.mission.emergencyChance !== undefined) {
    return state.mission.emergencyChance;
  }
  return EMERGENCY_CHANCE;
}

function checkCustomLevelVictoryConditions(finalResearchValue, returnedValue) {
  if (!state.mission || !state.mission.isCustom) return true;
  let ok = true;
  const research = finalResearchValue !== undefined ? finalResearchValue : state.data;
  const returned = returnedValue !== undefined ? returnedValue : 0;
  if (state.mission.dataGoal && state.mission.dataGoal > 0 && research < state.mission.dataGoal) ok = false;
  if (state.mission.returnedValueGoal && state.mission.returnedValueGoal > 0 && returned < state.mission.returnedValueGoal) ok = false;
  if (state.mission.minFuel && state.fuel < state.mission.minFuel) ok = false;
  if (state.mission.minMorale && state.morale < state.mission.minMorale) ok = false;
  if (state.mission.minFood && state.food < state.mission.minFood) ok = false;
  return ok;
}

function computeDayPreview() {
  if (!state.started) return null;
  const spent = totalPower();
  if (spent > state.weather.power) return { overBudget: true };

  const crewEffects = calculateCrewEffects();
  const eqEffects = calculateEquipmentEffects();

  let fuelCost = spent + (state.weather.name === "暴风雪" ? 4 : 2);
  fuelCost = Math.max(1, fuelCost - crewEffects.fuelSave);
  let previewFuel = state.fuel - fuelCost;

  const effectiveHeatReq = Math.max(1, state.weather.heat + eqEffects.heatReqAdj);
  const heatGap = Math.max(0, effectiveHeatReq - state.allocations.heat);
  const commGap = Math.max(0, state.weather.comm - state.allocations.comm);
  const commOk = state.allocations.comm >= state.weather.comm;

  const baseMoraleLoss = heatGap * 9 + commGap * 5;
  let previewMorale = state.morale - baseMoraleLoss;

  if (state.mission.commMoraleBonus && commOk) {
    previewMorale += 3;
  }
  previewMorale += crewEffects.moraleBoost;

  let foodLoss = state.mission.foodReserve
    ? Math.max(2, 6 - state.allocations.food)
    : Math.max(3, 8 - state.allocations.food);
  foodLoss = Math.max(1, foodLoss - crewEffects.foodSave);
  foodLoss += eqEffects.foodLossAdj;
  foodLoss = Math.max(1, foodLoss);
  let previewFood = state.food - foodLoss;

  let dataGain = 0;
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

  const labPower = state.allocations.lab;
  const labEfficiency = eqEffects.labEfficiency;
  const crewDataBoost = crewEffects.dataBoost;
  const sampleProducedPreview = [];
  sampleTypes.forEach((type) => {
    const s = state.samples[type.id];
    if (labPower < type.labPowerThreshold) return;
    const baseChance = 0.25 + (labPower - type.labPowerThreshold) * 0.12;
    const effMult = 0.8 + labEfficiency * 0.4;
    const crewBonus = crewDataBoost > 0 ? 1.15 : 1.0;
    const bonusMult = type.labPowerBonus !== undefined ? type.labPowerBonus : 1.0;
    const chance = Math.min(0.95, baseChance * effMult * crewBonus * bonusMult);
    const avgCount = chance * (1 + chance * 0.35);
    const avgValue = Math.round(avgCount * type.value);
    sampleProducedPreview.push({
      type,
      chance: chance,
      avgValue
    });
  });
  let previewData = state.data + dataGain;

  const sampleDamagePreview = [];
  sampleTypes.forEach((type) => {
    const s = state.samples[type.id];
    if (s.count <= 0) return;
    const req = type.preserveReq;
    let failedReqs = [];
    let shortfallRatio = 0;
    Object.keys(req).forEach((sysId) => {
      const needed = req[sysId];
      const have = state.allocations[sysId] || 0;
      if (have < needed) {
        failedReqs.push(sysId);
        shortfallRatio += (needed - have) / needed;
      }
    });
    if (failedReqs.length > 0) {
      const baseLoss = type.lossWhenFail;
      const weatherMult = state.weather.name === "暴风雪" ? 1.4 : state.weather.name === "低温" ? 1.2 : 1.0;
      const avgLossPct = Math.min(85, baseLoss * shortfallRatio * weatherMult * 1.0);
      const previewIntegrity = Math.max(0, Math.round(s.integrity - avgLossPct));
      let avgLostCount = 0;
      if (previewIntegrity <= 25 && s.count > 0) {
        const lossProb = 1 - previewIntegrity / 100;
        avgLostCount = lossProb * (1 + (100 - previewIntegrity) / 40);
      }
      sampleDamagePreview.push({
        type,
        integrityLost: Math.round(avgLossPct),
        previewIntegrity,
        avgLostCount: Math.round(avgLostCount * 10) / 10,
        failedReqs,
        severe: previewIntegrity <= 25 || avgLostCount >= 1
      });
    }
  });

  const equipDegradePreview = [];
  const weatherMult = weatherDurMultiplier[state.weather.name] || 1.0;
  equipmentDefs.forEach((def) => {
    const eq = state.equipment[def.id];
    let loss = def.baseDurLoss * weatherMult;
    let lowPowerMult = 1.0;
    if (def.id === "heat" && state.allocations.heat < state.weather.heat) lowPowerMult = 1.5;
    if (def.id === "comm" && state.allocations.comm < state.weather.comm) lowPowerMult = 1.5;
    if (def.id === "lab" && state.allocations.lab < 2) lowPowerMult = 1.4;
    if (def.id === "food" && state.allocations.food < 2) lowPowerMult = 1.4;
    loss *= lowPowerMult;
    const previewDur = Math.max(0, Math.round(eq.durability - loss));
    equipDegradePreview.push({
      def,
      currentDur: eq.durability,
      previewDur,
      loss: Math.round(loss),
      level: eq.level,
      critical: previewDur < 30
    });
  });

  const commPreview = { advanced: false, interrupted: false, phaseName: null, chainName: null, skipped: false };
  const curChain = getCommChain();
  const curChainState = getCommChainState();
  const curPhase = getCurrentPhase();
  if (curChain && curChainState && curPhase && !curChainState.isComplete) {
    commPreview.phaseName = curPhase.name;
    commPreview.chainName = curChain.name;
    const alreadyAdvanced = state.lastCommAdvancedDay === state.day;
    if (alreadyAdvanced) {
      commPreview.skipped = true;
      commPreview.reason = "今日已推进过其他任务链，同一天只能推进一条";
      commPreview.progressAfter = curChainState.phaseProgress;
      commPreview.requiredDays = curPhase.requiredDays;
    } else {
      const commEfficiency = eqEffects ? eqEffects.commEfficiency : 1.0;
      const effectiveCommMin = Math.ceil(curPhase.commMin / Math.max(0.4, commEfficiency));
      const isInterruptWeather = curChain.interruptWeathers && curChain.interruptWeathers.includes(state.weather.name);
      if (isInterruptWeather) {
        commPreview.interrupted = true;
        const loss = Math.ceil(curChainState.phaseProgress * COMM_INTERRUPT_PENALTY);
        commPreview.progressAfter = Math.max(0, curChainState.phaseProgress - loss);
        commPreview.reason = `${state.weather.name}将中断进度（不清零）`;
      } else if (!commOk || state.allocations.comm < effectiveCommMin) {
        commPreview.interrupted = true;
        const loss = Math.ceil(curChainState.phaseProgress * COMM_INTERRUPT_PENALTY);
        commPreview.progressAfter = Math.max(0, curChainState.phaseProgress - loss);
        commPreview.reason = !commOk ? "未达天气通信最低需求" : `通信格数未达阶段需求${effectiveCommMin}`;
      } else {
        commPreview.advanced = true;
        commPreview.progressAfter = curChainState.phaseProgress + 1;
        if (commPreview.progressAfter >= curPhase.requiredDays) {
          commPreview.phaseCompleted = true;
          if (curPhase.reward) {
            commPreview.rewardApplied = { ...curPhase.reward };
            if (curPhase.reward.fuel) previewFuel += curPhase.reward.fuel;
            if (curPhase.reward.food) previewFood += curPhase.reward.food;
            if (curPhase.reward.morale) previewMorale += curPhase.reward.morale;
            if (curPhase.reward.data) previewData += curPhase.reward.data;
          }
        }
      }
      commPreview.requiredDays = curPhase.requiredDays;
    }
  }

  previewFuel = Math.max(0, Math.min(100, Math.round(previewFuel)));
  previewFood = Math.max(0, Math.min(100, Math.round(previewFood)));
  previewMorale = Math.max(0, Math.min(100, Math.round(previewMorale)));
  previewData = Math.max(0, Math.round(previewData));

  const warnings = [];
  if (previewFuel <= 0) warnings.push({ level: "critical", text: "柴油可能归零，任务将直接失败！" });
  else if (previewFuel <= 10) warnings.push({ level: "danger", text: `柴油仅剩${previewFuel}，濒临归零` });
  if (previewMorale <= 0) warnings.push({ level: "critical", text: "士气可能归零，任务将直接失败！" });
  else if (previewMorale <= 15) warnings.push({ level: "danger", text: `士气仅剩${previewMorale}，濒临归零` });
  if (previewFood <= 0) warnings.push({ level: "critical", text: "食物可能归零，任务将直接失败！" });
  else if (previewFood <= 15) warnings.push({ level: "danger", text: `食物仅剩${previewFood}，濒临归零` });
  sampleDamagePreview.forEach((d) => {
    if (d.severe) {
      warnings.push({ level: "danger", text: `${d.type.icon}${d.type.name}完整度可能降至${d.previewIntegrity}%，样本严重损坏风险！` });
    } else if (d.integrityLost > 0) {
      warnings.push({ level: "warning", text: `${d.type.icon}${d.type.name}完整度预估-${d.integrityLost}%` });
    }
  });
  equipDegradePreview.forEach((e) => {
    if (e.critical) {
      warnings.push({ level: "danger", text: `${e.def.icon}${e.def.name}耐久将降至${e.previewDur}，设备严重老化！` });
    }
  });

  const uncertainties = [];
  const emergencyChance = getCustomEmergencyChance();
  if (emergencyChance > 0) {
    uncertainties.push(`突发事件概率${Math.round(emergencyChance * 100)}%，可能带来额外资源变动`);
  }
  if (state.nextDayEffects) {
    if (state.nextDayEffects.powerPenalty) uncertainties.push(`次日电力将减少${state.nextDayEffects.powerPenalty}格`);
    if (state.nextDayEffects.fuelRisk) uncertainties.push(`管路隐患：50%概率额外损失${state.nextDayEffects.fuelRisk}柴油`);
  }
  if (campaignState && campaignState.active) {
    const chapter = getCampaignChapter();
    if (chapter && chapter.branchEvents) {
      const branch = chapter.branchEvents.find((b) => b.day === state.day && !isCampaignEventCompleted(b.id) && !campaignState.triggeredBranches.includes(b.id));
      if (branch) {
        uncertainties.push(`今日存在剧情分支「${branch.name}」，选择将影响后续走向`);
      }
    }
  }
  if (sampleProducedPreview.length > 0) {
    uncertainties.push("样本产出有概率波动，实际结果可能偏离预览");
  }
  const randomEventChance = 1.0;
  if (randomEventChance > 0) {
    uncertainties.push("每日随机事件不可预测，可能带来±5~8点资源变动");
  }

  return {
    overBudget: false,
    fuel: { current: state.fuel, preview: previewFuel, delta: previewFuel - state.fuel },
    morale: { current: state.morale, preview: previewMorale, delta: previewMorale - state.morale },
    food: { current: state.food, preview: previewFood, delta: previewFood - state.food },
    data: { current: state.data, preview: previewData, delta: previewData - state.data },
    sampleProducedPreview,
    sampleDamagePreview,
    equipDegradePreview,
    commPreview,
    warnings,
    uncertainties
  };
}

function renderDayPreview() {
  if (!state.started) {
    dayPreviewPanelEl.classList.add("hidden");
    return;
  }
  dayPreviewPanelEl.classList.remove("hidden");

  const preview = computeDayPreview();
  if (!preview || preview.overBudget) {
    previewFuelCurrent.textContent = state.fuel;
    previewFuelResult.textContent = "—";
    previewFuelDelta.textContent = "电力超限";
    previewFuelDelta.className = "preview-delta delta-danger";
    previewMoraleCurrent.textContent = state.morale;
    previewMoraleResult.textContent = "—";
    previewMoraleDelta.textContent = "";
    previewFoodCurrent.textContent = state.food;
    previewFoodResult.textContent = "—";
    previewFoodDelta.textContent = "";
    previewDataCurrent.textContent = state.data;
    previewDataResult.textContent = "—";
    previewDataDelta.textContent = "";
    previewSampleDetails.innerHTML = '<span class="preview-hint">请先调整电力分配至可用范围内</span>';
    previewEquipDetails.innerHTML = "";
    previewCommDetails.innerHTML = "";
    previewWarnings.classList.add("hidden");
    previewUncertainty.classList.add("hidden");
    return;
  }

  function setPreviewItem(currentEl, resultEl, deltaEl, current, preview, key) {
    currentEl.textContent = current;
    resultEl.textContent = preview;
    const delta = preview - current;
    const sign = delta >= 0 ? "+" : "";
    deltaEl.textContent = delta !== 0 ? `${sign}${delta}` : "—";
    if (preview <= 0) {
      resultEl.className = "preview-result result-zero";
      deltaEl.className = "preview-delta delta-danger";
    } else if (delta < -10) {
      resultEl.className = "preview-result result-bad";
      deltaEl.className = "preview-delta delta-danger";
    } else if (delta < 0) {
      resultEl.className = "preview-result result-slight";
      deltaEl.className = "preview-delta delta-slight";
    } else if (delta > 0) {
      resultEl.className = "preview-result result-good";
      deltaEl.className = "preview-delta delta-good";
    } else {
      resultEl.className = "preview-result";
      deltaEl.className = "preview-delta";
    }
  }

  setPreviewItem(previewFuelCurrent, previewFuelResult, previewFuelDelta, preview.fuel.current, preview.fuel.preview, "fuel");
  setPreviewItem(previewMoraleCurrent, previewMoraleResult, previewMoraleDelta, preview.morale.current, preview.morale.preview, "morale");
  setPreviewItem(previewFoodCurrent, previewFoodResult, previewFoodDelta, preview.food.current, preview.food.preview, "food");
  setPreviewItem(previewDataCurrent, previewDataResult, previewDataDelta, preview.data.current, preview.data.preview, "data");

  let sampleHtml = "";
  if (preview.sampleProducedPreview.length > 0 || preview.sampleDamagePreview.length > 0) {
    if (preview.sampleProducedPreview.length > 0) {
      sampleHtml += '<div class="preview-sample-row preview-sample-produce">';
      preview.sampleProducedPreview.forEach((sp) => {
        sampleHtml += `<span class="preview-sample-chip">${sp.type.icon}${sp.type.name} ${Math.round(sp.chance * 100)}%概率 ≈+${sp.avgValue}</span>`;
      });
      sampleHtml += '</div>';
    }
    if (preview.sampleDamagePreview.length > 0) {
      sampleHtml += '<div class="preview-sample-row preview-sample-damage">';
      preview.sampleDamagePreview.forEach((d) => {
        const cls = d.severe ? "preview-sample-chip chip-danger" : "preview-sample-chip chip-warn";
        const reqNames = d.failedReqs.map((r) => {
          const map = { heat: '供暖', comm: '通信', lab: '实验', food: '冷藏' };
          return map[r] || r;
        }).join("+");
        sampleHtml += `<span class="${cls}">${d.type.icon}${d.type.name} 完整度${state.samples[d.type.id].integrity}→${d.previewIntegrity}%${d.avgLostCount >= 1 ? '，损毁≈' + d.avgLostCount + '份' : ''}【${reqNames}不足】</span>`;
      });
      sampleHtml += '</div>';
    }
  } else {
    sampleHtml = '<span class="preview-hint">当前分配下样本无产出也无损坏风险</span>';
  }
  previewSampleDetails.innerHTML = sampleHtml;

  let equipHtml = "";
  preview.equipDegradePreview.forEach((e) => {
    const cls = e.critical ? "preview-equip-chip chip-danger" : e.loss > 0 ? "preview-equip-chip" : "preview-equip-chip chip-ok";
    equipHtml += `<span class="${cls}">${e.def.icon}${e.def.name} ${e.currentDur}→${e.previewDur}(-${e.loss})</span>`;
  });
  previewEquipDetails.innerHTML = equipHtml || '<span class="preview-hint">设备正常</span>';

  let commHtml = "";
  const cp = preview.commPreview;
  const activeChainState = getCommChainState();
  if (activeChainState && activeChainState.isComplete) {
    commHtml = `<span class="preview-hint">「${getCommChain().name}」已完成 ✅</span>`;
  } else if (cp.phaseName) {
    if (cp.skipped) {
      commHtml = `<span class="preview-comm-chip chip-warn">📡「${cp.chainName || "任务链"}」${cp.reason}</span>`;
    } else if (cp.advanced) {
      if (cp.phaseCompleted) {
        const rewards = [];
        if (cp.rewardApplied) {
          if (cp.rewardApplied.fuel) rewards.push(`柴油+${cp.rewardApplied.fuel}`);
          if (cp.rewardApplied.food) rewards.push(`食物+${cp.rewardApplied.food}`);
          if (cp.rewardApplied.morale) rewards.push(`士气+${cp.rewardApplied.morale}`);
          if (cp.rewardApplied.data) rewards.push(`科研成果+${cp.rewardApplied.data}`);
        }
        commHtml = `<span class="preview-comm-chip chip-good">📡「${cp.chainName || "任务链"}」「${cp.phaseName}」阶段完成！进度 ${cp.progressAfter}/${cp.requiredDays}${rewards.length ? `，奖励：${rewards.join("、")}` : ""}</span>`;
      } else {
        commHtml = `<span class="preview-comm-chip chip-ok">📡「${cp.chainName || "任务链"}」「${cp.phaseName}」推进中 ${cp.progressAfter}/${cp.requiredDays}</span>`;
      }
    } else {
      commHtml = `<span class="preview-comm-chip chip-warn">📡「${cp.chainName || "任务链"}」「${cp.phaseName}」${cp.reason}，进度${cp.progressAfter}/${cp.requiredDays}</span>`;
    }
  } else {
    commHtml = '<span class="preview-hint">通信链未激活</span>';
  }
  previewCommDetails.innerHTML = commHtml;

  if (preview.warnings.length > 0) {
    previewWarnings.classList.remove("hidden");
    previewWarnings.innerHTML = preview.warnings.map((w) => {
      const cls = w.level === "critical" ? "warning-critical" : w.level === "danger" ? "warning-danger" : "warning-warn";
      return `<div class="preview-warning ${cls}">${w.text}</div>`;
    }).join("");
  } else {
    previewWarnings.classList.add("hidden");
  }

  if (preview.uncertainties.length > 0) {
    previewUncertainty.classList.remove("hidden");
    previewUncertainty.innerHTML = preview.uncertainties.map((u) => {
      return `<div class="preview-uncertainty-item">⚠ ${u}</div>`;
    }).join("");
  } else {
    previewUncertainty.classList.add("hidden");
  }
}

init();
