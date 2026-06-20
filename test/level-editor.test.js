const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const APP_PATH = path.join(__dirname, "..", "app.js");
const CUSTOM_LEVELS_KEY = "polar_station_custom_levels";

class FakeClassList {
  constructor() {
    this.classes = new Set();
  }

  add(...names) {
    names.forEach((name) => this.classes.add(name));
  }

  remove(...names) {
    names.forEach((name) => this.classes.delete(name));
  }

  contains(name) {
    return this.classes.has(name);
  }

  toggle(name, force) {
    if (force === true) {
      this.add(name);
      return true;
    }
    if (force === false) {
      this.remove(name);
      return false;
    }
    if (this.contains(name)) {
      this.remove(name);
      return false;
    }
    this.add(name);
    return true;
  }
}

class FakeElement {
  constructor(id = "") {
    this.id = id;
    this.value = "";
    this.checked = false;
    this.disabled = false;
    this.textContent = "";
    this.innerHTML = "";
    this.dataset = {};
    this.style = {};
    this.children = [];
    this.listeners = {};
    this.classList = new FakeClassList();
    this.className = "";
  }

  addEventListener(type, handler) {
    this.listeners[type] = this.listeners[type] || [];
    this.listeners[type].push(handler);
  }

  appendChild(child) {
    this.children.push(child);
    return child;
  }

  remove() {
    this.removed = true;
  }

  querySelector() {
    return new FakeElement();
  }

  querySelectorAll() {
    return [];
  }

  scrollIntoView() {}

  getBoundingClientRect() {
    return { top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0 };
  }
}

function createLocalStorageMock() {
  let store = {};
  return {
    getItem: (key) => Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null,
    setItem: (key, value) => {
      store[key] = String(value);
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    }
  };
}

function createDocumentMock() {
  const elements = new Map();
  const document = {
    body: new FakeElement("body"),
    addEventListener() {},
    createElement: (tagName) => new FakeElement(tagName),
    getElementById: (id) => {
      if (!elements.has(id)) elements.set(id, new FakeElement(id));
      return elements.get(id);
    },
    querySelector: (selector) => {
      if (!elements.has(selector)) elements.set(selector, new FakeElement(selector));
      return elements.get(selector);
    },
    querySelectorAll: () => []
  };
  return { document, elements };
}

function loadAppForTest() {
  const { document, elements } = createDocumentMock();
  const localStorage = createLocalStorageMock();
  const alerts = [];
  const confirms = [];
  const context = {
    console,
    document,
    localStorage,
    window: {
      innerWidth: 1280,
      innerHeight: 800,
      addEventListener() {},
      removeEventListener() {}
    },
    alert: (message) => alerts.push(message),
    confirm: (message) => {
      confirms.push(message);
      return true;
    },
    setTimeout: () => 1,
    clearTimeout() {},
    setInterval: () => 1,
    clearInterval() {},
    Date,
    Math,
    JSON,
    structuredClone: (value) => JSON.parse(JSON.stringify(value))
  };
  context.window.document = document;
  context.window.localStorage = localStorage;
  context.globalThis = context;

  const appSource = fs.readFileSync(APP_PATH, "utf8")
    .replace(/\ninitSimulatorUI\(\);\s*\n\s*init\(\);\s*$/, "");
  const exportSource = `
    state = freshState();
    globalThis.__levelEditorApi = {
      CUSTOM_LEVELS_KEY,
      freshState,
      getState: () => state,
      setState: (nextState) => { state = nextState; },
      getDefaultEditorConfig,
      populateEditor,
      collectEditorConfig,
      validateLevelConfig,
      validateEmergencyEvent,
      editorConfigToMission,
      loadCustomLevels,
      saveCustomLevels,
      saveEditorLevel,
      sanitizeEmergencyEvent,
      checkCustomLevelVictoryConditions
    };
  `;

  vm.createContext(context);
  vm.runInContext(appSource + exportSource, context, { filename: APP_PATH });
  return { api: context.__levelEditorApi, context, elements, localStorage, alerts, confirms };
}

function plain(value) {
  return JSON.parse(JSON.stringify(value));
}

function setEditorFields(harness, overrides = {}) {
  const config = { ...harness.api.getDefaultEditorConfig(), name: "测试关卡", ...overrides };
  harness.api.populateEditor(config);
  return config;
}

function makeValidConfig(api, overrides = {}) {
  return { ...api.getDefaultEditorConfig(), name: "测试关卡", ...overrides };
}

function makeValidEvent(overrides = {}) {
  return {
    name: "测试事件",
    desc: "测试描述",
    weight: 1,
    dayMin: 1,
    dayMax: 7,
    options: [
      { label: "选项1", desc: "描述1", effects: {} },
      { label: "选项2", desc: "描述2", effects: {} },
      { label: "选项3", desc: "描述3", effects: {} }
    ],
    ...overrides
  };
}

function runTest(name, fn) {
  try {
    fn();
    console.log("  OK " + name);
    return { passed: true, name };
  } catch (err) {
    console.log("  FAIL " + name);
    console.log("     " + err.stack);
    return { passed: false, name, error: err };
  }
}

function testSuite(name, tests) {
  console.log("\n" + name);
  const results = tests.map((test) => runTest(test.name, test.fn));
  const passed = results.filter((result) => result.passed).length;
  console.log("   " + passed + "/" + results.length + " passed");
  return results;
}

const allResults = [];

allResults.push(...testSuite("Weather validation", [
  {
    name: "default weather weights are valid",
    fn: () => {
      const { api } = loadAppForTest();
      const result = api.validateLevelConfig(makeValidConfig(api));
      assert.strictEqual(result.valid, true);
    }
  },
  {
    name: "all zero weather weights fail validation",
    fn: () => {
      const { api } = loadAppForTest();
      const result = api.validateLevelConfig(makeValidConfig(api, {
        weightSunny: 0,
        weightCold: 0,
        weightBlizzard: 0,
        weightNight: 0
      }));
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some((error) => error.includes("天气权重不能全部为0")));
    }
  },
  {
    name: "some zero weather weights are valid",
    fn: () => {
      const { api } = loadAppForTest();
      const result = api.validateLevelConfig(makeValidConfig(api, {
        weightSunny: 5,
        weightCold: 0,
        weightBlizzard: 0,
        weightNight: 0
      }));
      assert.strictEqual(result.valid, true);
      assert.strictEqual(result.errors.filter((error) => error.includes("天气权重")).length, 0);
    }
  },
  {
    name: "all zero weather weights convert to null only after validation is bypassed",
    fn: () => {
      const { api } = loadAppForTest();
      const mission = api.editorConfigToMission(makeValidConfig(api, {
        weightSunny: 0,
        weightCold: 0,
        weightBlizzard: 0,
        weightNight: 0
      }), "weather_001");
      assert.strictEqual(mission.weatherWeight, null);
    }
  }
]));

allResults.push(...testSuite("Power allocation validation", [
  {
    name: "allocation total above 12 warns",
    fn: () => {
      const { api } = loadAppForTest();
      const result = api.validateLevelConfig(makeValidConfig(api, {
        allocHeat: 5,
        allocComm: 4,
        allocLab: 3,
        allocFood: 3
      }));
      assert.ok(result.warnings.some((warning) => warning.includes("初始电力分配总和为 15")));
    }
  },
  {
    name: "allocation total at 12 does not warn",
    fn: () => {
      const { api } = loadAppForTest();
      const result = api.validateLevelConfig(makeValidConfig(api, {
        allocHeat: 3,
        allocComm: 3,
        allocLab: 3,
        allocFood: 3
      }));
      assert.strictEqual(result.warnings.filter((warning) => warning.includes("初始电力分配总和")).length, 0);
    }
  },
  {
    name: "out of range allocations are clamped when converted",
    fn: () => {
      const { api } = loadAppForTest();
      const mission = api.editorConfigToMission(makeValidConfig(api, {
        allocHeat: 10,
        allocComm: -5,
        allocLab: 99,
        allocFood: -1
      }), "power_001");
      assert.deepStrictEqual(plain(mission.allocations), {
        heat: 7,
        comm: 0,
        lab: 7,
        food: 0
      });
    }
  }
]));

allResults.push(...testSuite("Research and return goals", [
  {
    name: "research only goal is valid",
    fn: () => {
      const { api } = loadAppForTest();
      const result = api.validateLevelConfig(makeValidConfig(api, {
        dataGoal: 150,
        returnedValueGoal: 0,
        days: 7,
        allocLab: 4
      }));
      assert.strictEqual(result.valid, true);
    }
  },
  {
    name: "return only goal is valid",
    fn: () => {
      const { api } = loadAppForTest();
      const result = api.validateLevelConfig(makeValidConfig(api, {
        dataGoal: 0,
        returnedValueGoal: 100,
        days: 7,
        allocLab: 4
      }));
      assert.strictEqual(result.valid, true);
    }
  },
  {
    name: "combined research and return goals are valid",
    fn: () => {
      const { api } = loadAppForTest();
      const result = api.validateLevelConfig(makeValidConfig(api, {
        dataGoal: 150,
        returnedValueGoal: 100,
        days: 10,
        allocLab: 5
      }));
      assert.strictEqual(result.valid, true);
    }
  },
  {
    name: "high research goal warns",
    fn: () => {
      const { api } = loadAppForTest();
      const result = api.validateLevelConfig(makeValidConfig(api, { dataGoal: 1000, days: 7, data: 0 }));
      assert.ok(result.warnings.some((warning) => warning.includes("科研目标 1000 偏高")));
    }
  },
  {
    name: "high return goal warns",
    fn: () => {
      const { api } = loadAppForTest();
      const result = api.validateLevelConfig(makeValidConfig(api, { returnedValueGoal: 500, days: 7 }));
      assert.ok(result.warnings.some((warning) => warning.includes("返运价值目标 500 偏高")));
    }
  },
  {
    name: "custom victory requires both goals",
    fn: () => {
      const { api } = loadAppForTest();
      const state = api.getState();
      state.mission = { isCustom: true, dataGoal: 100, returnedValueGoal: 50 };
      state.data = 150;
      state.fuel = 50;
      state.morale = 50;
      state.food = 50;
      assert.strictEqual(api.checkCustomLevelVictoryConditions(150, 60), true);
      assert.strictEqual(api.checkCustomLevelVictoryConditions(150, 30), false);
      assert.strictEqual(api.checkCustomLevelVictoryConditions(80, 60), false);
    }
  }
]));

allResults.push(...testSuite("Emergency events", [
  {
    name: "empty custom emergency event list is valid",
    fn: () => {
      const { api } = loadAppForTest();
      const result = api.validateLevelConfig(makeValidConfig(api, { emergencyEvents: [] }));
      assert.strictEqual(result.valid, true);
    }
  },
  {
    name: "event without name fails",
    fn: () => {
      const { api } = loadAppForTest();
      const result = api.validateEmergencyEvent(makeValidEvent({ name: "" }), 0);
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some((error) => error.includes("名称不能为空")));
    }
  },
  {
    name: "event without description fails",
    fn: () => {
      const { api } = loadAppForTest();
      const result = api.validateEmergencyEvent(makeValidEvent({ desc: "" }), 0);
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some((error) => error.includes("描述不能为空")));
    }
  },
  {
    name: "event with weight below 1 fails",
    fn: () => {
      const { api } = loadAppForTest();
      const result = api.validateEmergencyEvent(makeValidEvent({ weight: 0 }), 0);
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some((error) => error.includes("出现权重必须≥1")));
    }
  },
  {
    name: "event start day after end day fails",
    fn: () => {
      const { api } = loadAppForTest();
      const result = api.validateEmergencyEvent(makeValidEvent({ dayMin: 5, dayMax: 3 }), 0);
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some((error) => error.includes("触发起始天不能大于结束天")));
    }
  },
  {
    name: "event with fewer than 3 options fails",
    fn: () => {
      const { api } = loadAppForTest();
      const result = api.validateEmergencyEvent(makeValidEvent({ options: [{ label: "1", desc: "1" }] }), 0);
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some((error) => error.includes("必须配置3个选项")));
    }
  },
  {
    name: "null event is filtered when converting mission",
    fn: () => {
      const { api } = loadAppForTest();
      const mission = api.editorConfigToMission(makeValidConfig(api, {
        emergencyEvents: [makeValidEvent(), null, "not_an_object", 123]
      }), "event_001");
      assert.strictEqual(mission.emergencyEvents.length, 1);
    }
  },
  {
    name: "sanitizer repairs partially invalid event object",
    fn: () => {
      const { api } = loadAppForTest();
      const result = api.sanitizeEmergencyEvent({ name: "测试", weight: -5, dayMin: -1, options: [] });
      assert.strictEqual(result.weight, 1);
      assert.strictEqual(result.dayMin, 1);
      assert.strictEqual(result.options.length, 3);
    }
  }
]));

allResults.push(...testSuite("Real custom level save flow", [
  {
    name: "load and save use the real app storage key",
    fn: () => {
      const { api, localStorage } = loadAppForTest();
      const mission = api.editorConfigToMission(makeValidConfig(api), "storage_001");
      api.saveCustomLevels([mission]);
      assert.ok(localStorage.getItem(CUSTOM_LEVELS_KEY));
      assert.strictEqual(api.loadCustomLevels()[0].id, "storage_001");
    }
  },
  {
    name: "real saveEditorLevel blocks invalid all-zero weather config",
    fn: () => {
      const harness = loadAppForTest();
      setEditorFields(harness, {
        name: "非法天气",
        weightSunny: 0,
        weightCold: 0,
        weightBlizzard: 0,
        weightNight: 0
      });
      harness.api.saveEditorLevel();
      assert.strictEqual(harness.api.loadCustomLevels().length, 0);
      assert.strictEqual(harness.alerts.length, 1);
      assert.ok(harness.elements.get("editorValidation").innerHTML.includes("天气权重不能全部为0"));
    }
  },
  {
    name: "real saveEditorLevel saves a valid custom level",
    fn: () => {
      const harness = loadAppForTest();
      setEditorFields(harness, { name: "保存测试", dataGoal: 120, returnedValueGoal: 50 });
      harness.api.saveEditorLevel();
      const levels = harness.api.loadCustomLevels();
      assert.strictEqual(levels.length, 1);
      assert.strictEqual(levels[0].name, "保存测试");
      assert.strictEqual(levels[0].dataGoal, 120);
      assert.strictEqual(levels[0].returnedValueGoal, 50);
      assert.ok(harness.localStorage.getItem(CUSTOM_LEVELS_KEY));
      assert.ok(harness.elements.get("editorValidation").innerHTML.includes("已保存"));
    }
  },
  {
    name: "loading saved data sanitizes illegal emergency entries",
    fn: () => {
      const { api, localStorage } = loadAppForTest();
      const mission = api.editorConfigToMission(makeValidConfig(api), "clean_001");
      mission.emergencyEvents = [makeValidEvent(), null, "bad_data"];
      localStorage.setItem(CUSTOM_LEVELS_KEY, JSON.stringify([mission]));
      const levels = api.loadCustomLevels();
      assert.strictEqual(levels.length, 1);
      assert.strictEqual(levels[0].emergencyEvents.length, 1);
    }
  }
]));

allResults.push(...testSuite("Boundaries", [
  {
    name: "minimum final resources above initial resources fail",
    fn: () => {
      const { api } = loadAppForTest();
      const result = api.validateLevelConfig(makeValidConfig(api, { fuel: 50, minFuel: 60 }));
      assert.strictEqual(result.valid, false);
      assert.ok(result.errors.some((error) => error.includes("最终燃油最低要求")));
    }
  },
  {
    name: "invalid day count fails",
    fn: () => {
      const { api } = loadAppForTest();
      const tooLow = api.validateLevelConfig(makeValidConfig(api, { days: 0 }));
      const tooHigh = api.validateLevelConfig(makeValidConfig(api, { days: 31 }));
      assert.strictEqual(tooLow.valid, false);
      assert.strictEqual(tooHigh.valid, false);
    }
  },
  {
    name: "initial resources clamp during mission conversion",
    fn: () => {
      const { api } = loadAppForTest();
      const mission = api.editorConfigToMission(makeValidConfig(api, {
        fuel: 150,
        morale: -10,
        food: 200,
        data: 50
      }), "boundary_001");
      assert.deepStrictEqual(plain(mission.initial), {
        fuel: 100,
        morale: 0,
        food: 100,
        data: 50
      });
    }
  }
]));

const failedResults = allResults.filter((result) => !result.passed);
const passedCount = allResults.length - failedResults.length;

console.log("\nSummary: " + passedCount + "/" + allResults.length + " passed");

if (failedResults.length > 0) {
  process.exit(1);
}
