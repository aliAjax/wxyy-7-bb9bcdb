const assert = require('assert');

const CUSTOM_LEVELS_KEY = "wxyy_custom_levels";
const CUSTOM_LEVEL_ID_PREFIX = "custom_";

const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = String(value); },
    removeItem: (key) => { delete store[key]; },
    clear: () => { store = {}; }
  };
})();

global.localStorage = localStorageMock;

function getDefaultEditorConfig() {
  return {
    name: "", tag: "自定义", color: "#4f8a5b", desc: "", days: 7,
    fuel: 80, morale: 75, food: 70, data: 0,
    allocHeat: 3, allocComm: 2, allocLab: 4, allocFood: 3,
    weightSunny: 1, weightCold: 1, weightBlizzard: 1, weightNight: 1,
    dataGoal: 150, returnedValueGoal: 0,
    commBonus: false, commBonusVal: 0, commMoraleBonus: false, foodReserve: false,
    emergencyChance: 40, minFuel: 0, minMorale: 0, minFood: 0,
    intro: "", emergencyEvents: []
  };
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

function validateEmergencyEvent(evt, idx) {
  const e = [];
  const w = [];
  const prefix = idx != null ? `事件#${idx + 1}「${evt.name || "未命名"}」：` : "";

  if (!evt.name || !String(evt.name).trim()) e.push(prefix + "名称不能为空");
  else if (String(evt.name).length > 20) e.push(prefix + "名称不能超过20个字符");
  if (!evt.desc || !String(evt.desc).trim()) e.push(prefix + "描述不能为空");
  if (!evt.weight || parseInt(evt.weight) < 1) e.push(prefix + "出现权重必须≥1");
  if (evt.dayMin == null || parseInt(evt.dayMin) < 1) e.push(prefix + "触发起始天必须≥1");
  if (evt.dayMax == null || parseInt(evt.dayMax) < 1) e.push(prefix + "触发结束天必须≥1");
  
  const dMin = parseInt(evt.dayMin) || 1;
  const dMax = parseInt(evt.dayMax) || 1;
  if (dMin > dMax) e.push(prefix + "触发起始天不能大于结束天");

  if (!Array.isArray(evt.options) || evt.options.length < 3) {
    e.push(prefix + "必须配置3个选项");
  } else {
    for (let i = 0; i < 3; i++) {
      const o = evt.options[i];
      const op = prefix + `选项${i + 1}`;
      if (!o || !o.label || !String(o.label).trim()) e.push(op + "：名称不能为空");
      if (!o || !o.desc || !String(o.desc).trim()) e.push(op + "：描述不能为空");
      if (o) {
        const fx = o.effects || {};
        const totalLoss = (parseInt(fx.fuel) < 0 ? Math.abs(parseInt(fx.fuel)) : 0) +
          (parseInt(fx.food) < 0 ? Math.abs(parseInt(fx.food)) : 0) +
          (parseInt(fx.morale) < 0 ? Math.abs(parseInt(fx.morale)) : 0);
        if (totalLoss > 40) w.push(op + "：总损失量超过40，选择后极易直接失败");
      }
    }
  }
  return { valid: e.length === 0, errors: e, warnings: w };
}

function validateLevelConfig(config) {
  const errors = [];
  const warnings = [];

  if (!config.name || config.name.length < 1) errors.push("关卡名称不能为空");
  if (config.name && config.name.length > 20) errors.push("关卡名称不能超过20个字符");
  if (config.days < 1) errors.push("值班天数至少为1天");
  else if (config.days > 30) errors.push("值班天数不能超过30天");
  if (config.fuel <= 0 && config.days > 1) errors.push("初始柴油为0，且天数>1，游戏将在第一天结束必然失败");
  if (config.food <= 0 && config.days > 1) errors.push("初始食物为0，且天数>1，游戏将在第一天结束必然失败");
  if (config.morale <= 0) errors.push("初始士气为0，游戏开始即失败");

  if (config.fuel < 10 && config.days > 3) warnings.push("初始柴油仅 " + config.fuel + "，天数 " + config.days + " 天，资源非常紧张");
  if (config.food < 15 && config.days > 3) warnings.push("初始食物仅 " + config.food + "，天数 " + config.days + " 天，食物可能不足");
  if (config.morale < 30) warnings.push("初始士气仅 " + config.morale + "，一个暴风雪天就可能导致士气归零");

  const totalWeight = config.weightSunny + config.weightCold + config.weightBlizzard + config.weightNight;
  if (totalWeight <= 0) errors.push("天气权重不能全部为0，至少要有一种天气可能出现");
  if (config.weightBlizzard >= 6 && config.days >= 5) warnings.push("暴风雪权重过高，游戏难度将非常大");

  const totalAlloc = config.allocHeat + config.allocComm + config.allocLab + config.allocFood;
  if (totalAlloc > 12) warnings.push("初始电力分配总和为 " + totalAlloc + "，而大部分天气可用电力仅10-12，开局即可能超配");

  if (config.dataGoal > 0) {
    const expectedDailyData = 15;
    const expectedTotal = expectedDailyData * config.days + config.data;
    if (config.dataGoal > expectedTotal * 2.5) {
      warnings.push("科研目标 " + config.dataGoal + " 偏高，按平均每天约" + expectedDailyData + "数据计算，" + config.days + "天预计可达成约" + expectedTotal + "。需要非常高的实验效率");
    }
  }

  if (config.returnedValueGoal > 0) {
    const expectedDailySampleValue = 20;
    const expectedTotalReturned = expectedDailySampleValue * config.days * 0.6;
    if (config.returnedValueGoal > expectedTotalReturned * 2) {
      warnings.push("返运价值目标 " + config.returnedValueGoal + " 偏高，按平均每天约" + expectedDailySampleValue + "样本价值、60%返运成功率计算，" + config.days + "天预计可返运约" + Math.round(expectedTotalReturned) + "。需要非常好的资源保障");
    }
  }

  if ((config.dataGoal > 0 || config.returnedValueGoal > 0) && config.allocLab < 2 && config.days < 5) {
    warnings.push("科研/返运目标>0但初始实验电力分配<2且天数<5，几乎不可能产出样本达成目标");
  }

  if (config.minFuel > config.fuel) errors.push("最终燃油最低要求 (" + config.minFuel + ") 高于初始燃油 (" + config.fuel + ")，必败");
  if (config.minMorale > config.morale) errors.push("最终士气最低要求 (" + config.minMorale + ") 高于初始士气 (" + config.morale + ")，必败");
  if (config.minFood > config.food) errors.push("最终食物最低要求 (" + config.minFood + ") 高于初始食物 (" + config.food + ")，必败");

  if (config.emergencyChance > 70) warnings.push("突发事件概率 " + config.emergencyChance + "% 过高，游戏会非常混乱");

  const evts = Array.isArray(config.emergencyEvents) ? config.emergencyEvents : [];
  if (evts.length > 0) {
    if (config.emergencyChance > 0 && evts.length < 2) {
      warnings.push("自定义突发事件仅配置了 " + evts.length + " 个，游戏体验会很单调，建议至少2个");
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
      for (let d = mn; d <= mx && d <= config.days; d++) allDays[d] = true;
    });
    const uncovered = [];
    for (let d = 1; d <= config.days; d++) if (!allDays[d]) uncovered.push(d);
    if (uncovered.length > 0 && config.emergencyChance > 0) {
      const sample = uncovered.slice(0, 5).join("、");
      const more = uncovered.length > 5 ? "…等" + uncovered.length + "天" : "";
      warnings.push("以下天数没有任何自定义突发事件可触发（第" + sample + more + "），这些天将不会触发突发事件");
    }
  }

  return { valid: errors.length === 0, errors, warnings };
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
    desc: config.desc || "自定义关卡：" + config.days + "天值班挑战。",
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
    emergencyChance: Math.max(0, Math.min(100, config.emergencyChance)) / 100,
    minFuel: Math.max(0, Math.min(100, config.minFuel)),
    minMorale: Math.max(0, Math.min(100, config.minMorale)),
    minFood: Math.max(0, Math.min(100, config.minFood)),
    isCustom: true,
    emergencyEvents: sanitizedEvents.length > 0 ? sanitizedEvents : undefined
  };
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

function checkCustomLevelVictoryConditions(state, finalResearchValue, returnedValue) {
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

function runTest(name, fn) {
  try {
    fn();
    console.log("  ✅ " + name);
    return { passed: true, name };
  } catch (err) {
    console.log("  ❌ " + name);
    console.log("     " + err.message);
    return { passed: false, name, error: err.message };
  }
}

function testSuite(name, tests) {
  console.log("\n📦 " + name);
  const results = tests.map(t => runTest(t.name, t.fn));
  const passed = results.filter(r => r.passed).length;
  const total = results.length;
  console.log("   " + passed + "/" + total + " 通过");
  return { results, passed, total };
}

function makeValidConfig(overrides) {
  if (overrides === void 0) overrides = {};
  const base = getDefaultEditorConfig();
  const result = {};
  for (var k in base) result[k] = base[k];
  result.name = "测试关卡";
  for (var k in overrides) result[k] = overrides[k];
  return result;
}

function makeValidEvent(overrides) {
  if (overrides === void 0) overrides = {};
  const base = {
    name: "测试事件",
    desc: "测试描述",
    weight: 1,
    dayMin: 1,
    dayMax: 7,
    options: [
      { label: "选项1", desc: "描述1", effects: {} },
      { label: "选项2", desc: "描述2", effects: {} },
      { label: "选项3", desc: "描述3", effects: {} }
    ]
  };
  for (var k in overrides) base[k] = overrides[k];
  return base;
}

let allResults = [];

// ========== 天气权重校验 ==========
const weatherSuite = testSuite("🌤️  天气权重校验", [
  {
    name: "默认配置天气权重有效",
    fn: () => {
      const config = makeValidConfig();
      const result = validateLevelConfig(config);
      assert.strictEqual(result.valid, true);
      assert.strictEqual(result.errors.length, 0);
    }
  },
  {
    name: "天气权重全部为0应该失败",
    fn: () => {
      const config = makeValidConfig({
        weightSunny: 0, weightCold: 0, weightBlizzard: 0, weightNight: 0
      });
      const result = validateLevelConfig(config);
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some(e => e.indexOf("天气权重不能全部为0") >= 0));
    }
  },
  {
    name: "部分天气权重为0但不全为0应该通过",
    fn: () => {
      const config = makeValidConfig({
        weightSunny: 5, weightCold: 0, weightBlizzard: 0, weightNight: 0
      });
      const result = validateLevelConfig(config);
      assert.strictEqual(result.valid, true);
      assert.strictEqual(result.errors.filter(e => e.indexOf("天气权重") >= 0).length, 0);
    }
  },
  {
    name: "暴风雪权重过高应该产生警告",
    fn: () => {
      const config = makeValidConfig({ weightBlizzard: 6, days: 5 });
      const result = validateLevelConfig(config);
      assert.ok(result.warnings.some(w => w.indexOf("暴风雪权重过高") >= 0));
    }
  },
  {
    name: "editorConfigToMission 全0权重转换为null",
    fn: () => {
      const config = makeValidConfig({
        weightSunny: 0, weightCold: 0, weightBlizzard: 0, weightNight: 0
      });
      const mission = editorConfigToMission(config, "test_001");
      assert.strictEqual(mission.weatherWeight, null);
    }
  },
  {
    name: "editorConfigToMission 非零权重保留",
    fn: () => {
      const config = makeValidConfig({
        weightSunny: 3, weightCold: 2, weightBlizzard: 1, weightNight: 4
      });
      const mission = editorConfigToMission(config, "test_002");
      assert.deepStrictEqual(mission.weatherWeight, {
        "晴朗": 3, "低温": 2, "暴风雪": 1, "极夜静风": 4
      });
    }
  }
]);
allResults.push(weatherSuite);

// ========== 初始电力分配校验 ==========
const powerSuite = testSuite("⚡ 初始电力分配校验", [
  {
    name: "默认电力分配总和正常",
    fn: () => {
      const config = makeValidConfig();
      const result = validateLevelConfig(config);
      assert.strictEqual(result.valid, true);
    }
  },
  {
    name: "电力分配总和>12应该产生警告",
    fn: () => {
      const config = makeValidConfig({
        allocHeat: 5, allocComm: 4, allocLab: 3, allocFood: 3
      });
      const result = validateLevelConfig(config);
      assert.ok(result.warnings.some(w => w.indexOf("初始电力分配总和为 15") >= 0));
    }
  },
  {
    name: "电力分配总和=12不警告",
    fn: () => {
      const config = makeValidConfig({
        allocHeat: 3, allocComm: 3, allocLab: 3, allocFood: 3
      });
      const result = validateLevelConfig(config);
      assert.strictEqual(result.warnings.filter(w => w.indexOf("初始电力分配总和") >= 0).length, 0);
    }
  },
  {
    name: "editorConfigToMission 电力越界自动裁剪到0-7",
    fn: () => {
      const config = makeValidConfig({
        allocHeat: 10, allocComm: -5, allocLab: 99, allocFood: -1
      });
      const mission = editorConfigToMission(config, "test_003");
      assert.deepStrictEqual(mission.allocations, {
        heat: 7, comm: 0, lab: 7, food: 0
      });
    }
  }
]);
allResults.push(powerSuite);

// ========== 科研目标与返运目标组合校验 ==========
const goalSuite = testSuite("🎯 科研目标与返运目标组合校验", [
  {
    name: "仅科研目标",
    fn: () => {
      const config = makeValidConfig({
        dataGoal: 150, returnedValueGoal: 0, days: 7, allocLab: 4
      });
      const result = validateLevelConfig(config);
      assert.strictEqual(result.valid, true);
    }
  },
  {
    name: "仅返运目标",
    fn: () => {
      const config = makeValidConfig({
        dataGoal: 0, returnedValueGoal: 100, days: 7, allocLab: 4
      });
      const result = validateLevelConfig(config);
      assert.strictEqual(result.valid, true);
    }
  },
  {
    name: "科研+返运双目标",
    fn: () => {
      const config = makeValidConfig({
        dataGoal: 150, returnedValueGoal: 100, days: 10, allocLab: 5
      });
      const result = validateLevelConfig(config);
      assert.strictEqual(result.valid, true);
    }
  },
  {
    name: "科研目标过高应该警告",
    fn: () => {
      const config = makeValidConfig({ dataGoal: 1000, days: 7, data: 0 });
      const result = validateLevelConfig(config);
      assert.ok(result.warnings.some(w => w.indexOf("科研目标 1000 偏高") >= 0));
    }
  },
  {
    name: "返运目标过高应该警告",
    fn: () => {
      const config = makeValidConfig({ returnedValueGoal: 500, days: 7 });
      const result = validateLevelConfig(config);
      assert.ok(result.warnings.some(w => w.indexOf("返运价值目标 500 偏高") >= 0));
    }
  },
  {
    name: "有目标但实验电力不足且天数少应该警告",
    fn: () => {
      const config = makeValidConfig({ dataGoal: 100, allocLab: 1, days: 3 });
      const result = validateLevelConfig(config);
      assert.ok(result.warnings.some(w => w.indexOf("科研/返运目标>0但初始实验电力分配<2且天数<5") >= 0));
    }
  },
  {
    name: "无目标时实验电力低不警告",
    fn: () => {
      const config = makeValidConfig({
        dataGoal: 0, returnedValueGoal: 0, allocLab: 1, days: 3
      });
      const result = validateLevelConfig(config);
      assert.strictEqual(result.warnings.filter(w => w.indexOf("科研/返运目标") >= 0).length, 0);
    }
  },
  {
    name: "胜利条件检查-科研目标达成",
    fn: () => {
      const state = {
        mission: { isCustom: true, dataGoal: 100, returnedValueGoal: 0 },
        data: 150, fuel: 50, morale: 50, food: 50
      };
      assert.strictEqual(checkCustomLevelVictoryConditions(state, undefined, 0), true);
    }
  },
  {
    name: "胜利条件检查-科研目标未达成",
    fn: () => {
      const state = {
        mission: { isCustom: true, dataGoal: 100, returnedValueGoal: 0 },
        data: 50, fuel: 50, morale: 50, food: 50
      };
      assert.strictEqual(checkCustomLevelVictoryConditions(state, undefined, 0), false);
    }
  },
  {
    name: "胜利条件检查-双目标都达成",
    fn: () => {
      const state = {
        mission: { isCustom: true, dataGoal: 100, returnedValueGoal: 50 },
        data: 150, fuel: 50, morale: 50, food: 50
      };
      assert.strictEqual(checkCustomLevelVictoryConditions(state, 150, 60), true);
    }
  },
  {
    name: "胜利条件检查-返运目标未达成",
    fn: () => {
      const state = {
        mission: { isCustom: true, dataGoal: 100, returnedValueGoal: 50 },
        data: 150, fuel: 50, morale: 50, food: 50
      };
      assert.strictEqual(checkCustomLevelVictoryConditions(state, 150, 30), false);
    }
  }
]);
allResults.push(goalSuite);

// ========== 自定义突发事件校验 ==========
const eventSuite = testSuite("⚠️ 自定义突发事件校验", [
  {
    name: "空事件数组通过校验",
    fn: () => {
      const config = makeValidConfig({ emergencyEvents: [] });
      const result = validateLevelConfig(config);
      assert.strictEqual(result.valid, true);
    }
  },
  {
    name: "单个事件名称为空应该失败",
    fn: () => {
      const evt = makeValidEvent({ name: "" });
      const result = validateEmergencyEvent(evt, 0);
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some(e => e.indexOf("名称不能为空") >= 0));
    }
  },
  {
    name: "事件描述为空应该失败",
    fn: () => {
      const evt = makeValidEvent({ desc: "" });
      const result = validateEmergencyEvent(evt, 0);
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some(e => e.indexOf("描述不能为空") >= 0));
    }
  },
  {
    name: "事件权重<1应该失败",
    fn: () => {
      const evt = makeValidEvent({ weight: 0 });
      const result = validateEmergencyEvent(evt, 0);
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some(e => e.indexOf("出现权重必须≥1") >= 0));
    }
  },
  {
    name: "事件触发起始天>结束天应该失败",
    fn: () => {
      const evt = makeValidEvent({ dayMin: 5, dayMax: 3 });
      const result = validateEmergencyEvent(evt, 0);
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some(e => e.indexOf("触发起始天不能大于结束天") >= 0));
    }
  },
  {
    name: "事件选项不足3个应该失败",
    fn: () => {
      const evt = makeValidEvent({ options: [{ label: "1", desc: "1" }] });
      const result = validateEmergencyEvent(evt, 0);
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some(e => e.indexOf("必须配置3个选项") >= 0));
    }
  },
  {
    name: "事件选项损失过大应该警告",
    fn: () => {
      const evt = makeValidEvent({
        options: [
          { label: "1", desc: "1", effects: { fuel: -20, food: -15, morale: -10 } },
          { label: "2", desc: "2", effects: {} },
          { label: "3", desc: "3", effects: {} }
        ]
      });
      const result = validateEmergencyEvent(evt, 0);
      assert.strictEqual(result.valid, true);
      assert.ok(result.warnings.some(w => w.indexOf("总损失量超过40") >= 0));
    }
  },
  {
    name: "非法事件对象被sanitizeEmergencyEvent过滤",
    fn: () => {
      const result = sanitizeEmergencyEvent(null);
      assert.strictEqual(result, null);
    }
  },
  {
    name: "sanitizeEmergencyEvent修复非法数据",
    fn: () => {
      const raw = { name: "测试", weight: -5, dayMin: -1, options: [] };
      const result = sanitizeEmergencyEvent(raw);
      assert.strictEqual(result.weight, 1);
      assert.strictEqual(result.dayMin, 1);
      assert.strictEqual(result.options.length, 3);
    }
  },
  {
    name: "配置了事件但概率0不警告数量少",
    fn: () => {
      const evt = makeValidEvent();
      const config = makeValidConfig({ emergencyEvents: [evt], emergencyChance: 0 });
      const result = validateLevelConfig(config);
      assert.strictEqual(result.warnings.filter(w => w.indexOf("自定义突发事件仅配置了") >= 0).length, 0);
    }
  },
  {
    name: "配置了事件且概率>0但仅1个应该警告",
    fn: () => {
      const evt = makeValidEvent();
      const config = makeValidConfig({ emergencyEvents: [evt], emergencyChance: 40 });
      const result = validateLevelConfig(config);
      assert.ok(result.warnings.some(w => w.indexOf("自定义突发事件仅配置了 1 个") >= 0));
    }
  },
  {
    name: "editorConfigToMission 事件自动sanitize",
    fn: () => {
      const config = makeValidConfig({
        emergencyEvents: [makeValidEvent(), null, "not_an_object", 123]
      });
      const mission = editorConfigToMission(config, "test_004");
      assert.strictEqual(mission.emergencyEvents.length, 1);
    }
  }
]);
allResults.push(eventSuite);

// ========== 自定义关卡保存流程 ==========
const saveSuite = testSuite("💾 自定义关卡保存流程", [
  {
    name: "保存和加载空列表",
    fn: () => {
      localStorage.clear();
      saveCustomLevels([]);
      const loaded = loadCustomLevels();
      assert.deepStrictEqual(loaded, []);
    }
  },
  {
    name: "保存单个关卡",
    fn: () => {
      localStorage.clear();
      const config = makeValidConfig();
      const mission = editorConfigToMission(config, "test_save_1");
      saveCustomLevels([mission]);
      const loaded = loadCustomLevels();
      assert.strictEqual(loaded.length, 1);
      assert.strictEqual(loaded[0].id, "test_save_1");
    }
  },
  {
    name: "保存多个关卡",
    fn: () => {
      localStorage.clear();
      const m1 = editorConfigToMission(makeValidConfig({ name: "关卡1" }), "m1");
      const m2 = editorConfigToMission(makeValidConfig({ name: "关卡2" }), "m2");
      saveCustomLevels([m1, m2]);
      const loaded = loadCustomLevels();
      assert.strictEqual(loaded.length, 2);
    }
  },
  {
    name: "保存流程-校验失败阻止保存",
    fn: () => {
      localStorage.clear();
      const invalidConfig = makeValidConfig({
        name: "", weightSunny: 0, weightCold: 0, weightBlizzard: 0, weightNight: 0
      });
      const validation = validateLevelConfig(invalidConfig);
      assert.strictEqual(validation.valid, false);
      const loaded = loadCustomLevels();
      assert.strictEqual(loaded.length, 0);
    }
  },
  {
    name: "保存流程-校验通过后保存",
    fn: () => {
      localStorage.clear();
      const config = makeValidConfig({ name: "保存测试" });
      const validation = validateLevelConfig(config);
      assert.strictEqual(validation.valid, true);
      const mission = editorConfigToMission(config, "save_test");
      saveCustomLevels([mission]);
      const loaded = loadCustomLevels();
      assert.strictEqual(loaded.length, 1);
      assert.strictEqual(loaded[0].name, "保存测试");
    }
  },
  {
    name: "加载时自动清理非法事件",
    fn: () => {
      localStorage.clear();
      const mission = editorConfigToMission(makeValidConfig(), "clean_test");
      mission.emergencyEvents = [makeValidEvent(), null, "bad_data"];
      localStorage.setItem(CUSTOM_LEVELS_KEY, JSON.stringify([mission]));
      const loaded = loadCustomLevels();
      assert.strictEqual(loaded.length, 1);
      assert.strictEqual(loaded[0].emergencyEvents.length, 1);
    }
  },
  {
    name: "损坏的localStorage数据优雅降级",
    fn: () => {
      localStorage.setItem(CUSTOM_LEVELS_KEY, "{invalid json");
      const loaded = loadCustomLevels();
      assert.deepStrictEqual(loaded, []);
    }
  }
]);
allResults.push(saveSuite);

// ========== 边界条件与综合场景 ==========
const boundarySuite = testSuite("🔍 边界条件与综合场景", [
  {
    name: "最终资源要求高于初始应该失败",
    fn: () => {
      const config = makeValidConfig({ fuel: 50, minFuel: 60 });
      const result = validateLevelConfig(config);
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some(e => e.indexOf("最终燃油最低要求") >= 0));
    }
  },
  {
    name: "初始柴油为0且天数>1应该失败",
    fn: () => {
      const config = makeValidConfig({ fuel: 0, days: 2 });
      const result = validateLevelConfig(config);
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some(e => e.indexOf("初始柴油为0") >= 0));
    }
  },
  {
    name: "初始士气为0应该失败",
    fn: () => {
      const config = makeValidConfig({ morale: 0 });
      const result = validateLevelConfig(config);
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some(e => e.indexOf("初始士气为0") >= 0));
    }
  },
  {
    name: "天数为0应该失败",
    fn: () => {
      const config = makeValidConfig({ days: 0 });
      const result = validateLevelConfig(config);
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some(e => e.indexOf("值班天数至少为1天") >= 0));
    }
  },
  {
    name: "天数超过30应该失败",
    fn: () => {
      const config = makeValidConfig({ days: 31 });
      const result = validateLevelConfig(config);
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some(e => e.indexOf("值班天数不能超过30天") >= 0));
    }
  },
  {
    name: "名称超过20字符应该失败",
    fn: () => {
      const config = makeValidConfig({ name: "aaaaaaaaaaaaaaaaaaaaa" });
      const result = validateLevelConfig(config);
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some(e => e.indexOf("关卡名称不能超过20个字符") >= 0));
    }
  },
  {
    name: "事件天数未全覆盖应该警告",
    fn: () => {
      const evt1 = makeValidEvent({ dayMin: 1, dayMax: 3 });
      const evt2 = makeValidEvent({ dayMin: 6, dayMax: 7 });
      const config = makeValidConfig({
        days: 7, emergencyEvents: [evt1, evt2], emergencyChance: 40
      });
      const result = validateLevelConfig(config);
      assert.ok(result.warnings.some(w => w.indexOf("以下天数没有任何自定义突发事件可触发") >= 0));
    }
  },
  {
    name: "事件天数全覆盖不警告",
    fn: () => {
      const evt = makeValidEvent({ dayMin: 1, dayMax: 7 });
      const config = makeValidConfig({
        days: 7, emergencyEvents: [evt], emergencyChance: 40
      });
      const result = validateLevelConfig(config);
      assert.strictEqual(result.warnings.filter(w => w.indexOf("没有任何自定义突发事件可触发") >= 0).length, 0);
    }
  },
  {
    name: "editorConfigToMission 初始资源裁剪到0-100",
    fn: () => {
      const config = makeValidConfig({
        fuel: 150, morale: -10, food: 200, data: 50
      });
      const mission = editorConfigToMission(config, "test_boundary");
      assert.deepStrictEqual(mission.initial, {
        fuel: 100, morale: 0, food: 100, data: 50
      });
    }
  },
  {
    name: "综合复杂场景配置通过",
    fn: () => {
      const evt = makeValidEvent({
        name: "冰裂预警",
        desc: "冰面出现裂缝，需要紧急决策",
        weight: 3, dayMin: 2, dayMax: 6,
        options: [
          { label: "坚守", desc: "继续实验", effects: { morale: -5 } },
          { label: "转移", desc: "转移设备", effects: { fuel: -10 } },
          { label: "报告", desc: "联系基地", effects: { food: -5 } }
        ]
      });
      const config = makeValidConfig({
        name: "极限挑战", days: 14,
        fuel: 60, morale: 70, food: 65,
        weightSunny: 2, weightCold: 3, weightBlizzard: 2, weightNight: 1,
        dataGoal: 300, returnedValueGoal: 150, allocLab: 5,
        emergencyEvents: [evt, makeValidEvent({ name: "设备故障", dayMin: 1, dayMax: 14 })],
        emergencyChance: 50, minFuel: 20, minMorale: 30, minFood: 25
      });
      const result = validateLevelConfig(config);
      assert.strictEqual(result.valid, true);
      const mission = editorConfigToMission(config, "complex_001");
      assert.strictEqual(mission.isCustom, true);
      assert.strictEqual(mission.days, 14);
      assert.strictEqual(mission.emergencyEvents.length, 2);
    }
  }
]);
allResults.push(boundarySuite);

console.log("\n" + "=".repeat(50));
const totalPassed = allResults.reduce((sum, s) => sum + s.passed, 0);
const totalTests = allResults.reduce((sum, s) => sum + s.total, 0);
const failedTests = allResults.flatMap(s => s.results.filter(r => !r.passed));

console.log("\n📊 测试总览: " + totalPassed + "/" + totalTests + " 通过");

if (failedTests.length > 0) {
  console.log("\n❌ 失败的测试:");
  failedTests.forEach(t => {
    console.log("  - " + t.name + ": " + t.error);
  });
  process.exit(1);
} else {
  console.log("\n🎉 所有测试通过！");
  process.exit(0);
}
