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

let state;

function freshState() {
  return {
    started: false,
    day: 1,
    fuel: 80,
    morale: 75,
    food: 70,
    data: 0,
    weather: weatherDeck[0],
    allocations: { heat: 3, comm: 2, lab: 4, food: 3 },
    log: ["站内安静得只剩风声，等待第一天值班。"]
  };
}

function init() {
  state = freshState();
  startBtn.addEventListener("click", start);
  endDayBtn.addEventListener("click", endDay);
  renderAllocations();
  render();
}

function start() {
  state = freshState();
  state.started = true;
  state.weather = pickWeather();
  resultEl.classList.add("hidden");
  addLog("值班开始，目标是撑过7天并尽量保住数据。");
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

  state.fuel -= spent + (state.weather.name === "暴风雪" ? 4 : 2);
  const heatGap = Math.max(0, state.weather.heat - state.allocations.heat);
  const commGap = Math.max(0, state.weather.comm - state.allocations.comm);

  state.morale -= heatGap * 9;
  state.morale -= commGap * 5;
  state.food -= Math.max(3, 8 - state.allocations.food);
  state.data += state.allocations.lab * 3 + (state.allocations.comm >= state.weather.comm ? 2 : 0);

  const eventText = randomEvent();
  addLog(`第${state.day}天结束：${eventText}`);

  if (state.fuel <= 0 || state.food <= 0 || state.morale <= 0) {
    finish(false);
    return;
  }

  if (state.day >= 7) {
    finish(true);
    return;
  }

  state.day += 1;
  state.weather = pickWeather();
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
    }
  ];
  return events[Math.floor(Math.random() * events.length)]();
}

function finish(success) {
  state.started = false;
  normalize();
  const score = Math.max(0, state.data + state.fuel + state.food + state.morale);
  resultEl.innerHTML = `<h2>${success ? "科考站撑过了7天" : "值班失败"}</h2><p>柴油${state.fuel}，食物${state.food}，士气${state.morale}，数据${state.data}，评分${score}。</p>`;
  resultEl.classList.remove("hidden");
  addLog(success ? "直升机抵达，样本和数据都被带回基地。" : "某项关键资源归零，任务提前中止。");
  render();
}

function pickWeather() {
  return weatherDeck[Math.floor(Math.random() * weatherDeck.length)];
}

function normalize() {
  state.fuel = Math.max(0, Math.min(100, Math.round(state.fuel)));
  state.food = Math.max(0, Math.min(100, Math.round(state.food)));
  state.morale = Math.max(0, Math.min(100, Math.round(state.morale)));
  state.data = Math.max(0, Math.round(state.data));
}

function totalPower() {
  return Object.values(state.allocations).reduce((sum, value) => sum + Number(value), 0);
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
    document.getElementById(`${system.id}Input`).value = state.allocations[system.id];
    document.getElementById(`${system.id}Value`).textContent = state.allocations[system.id];
  });
  const left = state.weather.power - totalPower();
  powerLeftEl.textContent = left;
  powerLeftEl.style.color = left < 0 ? "#d14c3f" : "";
}

function render() {
  dayEl.textContent = `${state.day}/7`;
  weatherEl.textContent = state.weather.name;
  weatherIconEl.textContent = state.weather.icon;
  fuelEl.textContent = state.fuel;
  moraleEl.textContent = state.morale;
  foodEl.textContent = state.food;
  dataEl.textContent = state.data;
  startBtn.textContent = state.started ? "重新开始" : "开始7天值班";
  endDayBtn.disabled = !state.started;
  forecastEl.textContent = state.started
    ? `今日${state.weather.name}，建议供暖至少${state.weather.heat}格，通信至少${state.weather.comm}格。剩余电力可以投给实验或食物储藏。`
    : "等待开始值班。";
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

init();
