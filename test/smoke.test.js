const fs = require("fs");
const path = require("path");
const { spawn, execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const PORT = 8765;
const BASE_URL = "http://localhost:" + PORT;

let serverProc = null;
let browser = null;
let page = null;
let passed = 0;
let failed = 0;

function startStaticServer() {
  return new Promise(function(resolve, reject) {
    const httpServerPath = path.join(ROOT, "node_modules", ".bin", "http-server");
    
    serverProc = spawn(httpServerPath, [
      "-p", String(PORT),
      "-c-1",
      "--silent"
    ], {
      cwd: ROOT,
      stdio: ["ignore", "pipe", "pipe"]
    });

    let started = false;
    let output = "";

    serverProc.stdout.on("data", function(data) {
      output += data.toString();
      if (!started && output.indexOf("Available on") > -1) {
        started = true;
        setTimeout(resolve);
      }
    });

    serverProc.stderr.on("data", function(data) {
      output += data.toString();
    });

    serverProc.on("error", function(err) {
      if (!started) {
        reject(new Error("启动静态服务器失败: " + err.message));
      }
    });

    serverProc.on("close", function(code) {
      if (!started) {
        reject(new Error("静态服务器启动失败，退出码: " + code + "\n" + output));
      }
    });

    setTimeout(function() {
      if (!started) {
        started = true;
        resolve();
      }
    }, 2000);
  });
}

function stopStaticServer() {
  if (serverProc) {
    try {
      serverProc.kill("SIGTERM");
    } catch (_) {}
    serverProc = null;
  }
}

function loadPlaywright() {
  try {
    return require("playwright");
  } catch (e) {
    console.log("正在安装 Playwright 依赖...");
    try {
      execSync("npm install playwright --no-save", { stdio: "inherit", cwd: ROOT });
      return require("playwright");
    } catch (installErr) {
      throw new Error(
        "Playwright 不可用。请运行: npm install\n" +
        "或运行轻量检查跳过浏览器测试: npm run check"
      );
    }
  }
}

function ensureBrowser(pw) {
  try {
    return pw.chromium.executablePath();
  } catch (e) {
    console.log("正在下载 Playwright Chromium 浏览器...");
    execSync("npx playwright install chromium", { stdio: "inherit", cwd: ROOT });
    return pw.chromium.executablePath();
  }
}

async function runTest(name, fn) {
  try {
    await fn();
    console.log("  OK  " + name);
    passed++;
  } catch (err) {
    console.log("  FAIL " + name);
    console.log("       " + err.message);
    failed++;
    if (page) {
      try {
        var safeName = name.replace(/\s+/g, "-").replace(/[^\w\u4e00-\u9fa5\-]/g, "");
        var screenshotPath = path.join(ROOT, ".test-failures", Date.now() + "-" + safeName + ".png");
        fs.mkdirSync(path.dirname(screenshotPath), { recursive: true });
        await page.screenshot({ path: screenshotPath, fullPage: true });
        console.log("       截图: " + path.relative(ROOT, screenshotPath));
      } catch (_) {}
    }
  }
}

async function waitForPageReady() {
  await page.goto(BASE_URL, { waitUntil: "domcontentloaded" });
  await page.waitForFunction("typeof state !== 'undefined'", { timeout: 5000 });
  await page.waitForTimeout(300);
}

async function runTests() {
  console.log("\n=== 浏览器冒烟测试 ===");
  console.log("验证核心功能在真实浏览器中可运行\n");

  await runTest("页面可正常加载并显示任务选择台", async function() {
    await waitForPageReady();
    var title = await page.title();
    if (!title || title.length < 2) throw new Error("页面标题异常: " + title);

    var missionDesk = await page.$("#missionDesk");
    if (!missionDesk) throw new Error("#missionDesk 不存在");

    var isVisible = await missionDesk.isVisible();
    if (!isVisible) throw new Error("任务选择台不可见");
  });

  await runTest("任务卡片已渲染且数量大于0", async function() {
    await page.waitForSelector(".mission-card", { timeout: 3000 });
    var cardCount = await page.$$eval(".mission-card", function(els) { return els.length; });
    if (cardCount === 0) throw new Error("没有渲染任何任务卡片");
  });

  await runTest("筛选标签已渲染", async function() {
    var tagCount = await page.$$eval("#filterTags .tag-chip", function(els) { return els.length; });
    if (tagCount === 0) throw new Error("没有渲染筛选标签");
  });

  await runTest("天数筛选可用 - 点击后按钮激活状态变化", async function() {
    var shortBtn = await page.$('.filter-chip[data-days="short"]');
    if (!shortBtn) throw new Error("找不到短期筛选按钮");

    var activeBefore = await shortBtn.evaluate(function(el) { return el.classList.contains("active"); });
    await shortBtn.click();
    await page.waitForTimeout(200);
    var activeAfter = await shortBtn.evaluate(function(el) { return el.classList.contains("active"); });

    var resetBtn = await page.$("#resetFilterBtn");
    if (resetBtn) await resetBtn.click();

    if (activeBefore === activeAfter) {
      throw new Error("点击筛选按钮后激活状态未变化");
    }
  });

  await runTest("科研目标筛选可用", async function() {
    var lowBtn = await page.$('.filter-chip[data-goal="low"]');
    if (!lowBtn) throw new Error("找不到低目标筛选按钮");

    await lowBtn.click();
    await page.waitForTimeout(200);

    var hasActive = await lowBtn.evaluate(function(el) { return el.classList.contains("active"); });
    if (!hasActive) throw new Error("点击后按钮未激活");

    var resetBtn = await page.$("#resetFilterBtn");
    if (resetBtn) await resetBtn.click();
  });

  await runTest("选中任务后开始按钮可用", async function() {
    var cards = await page.$$(".mission-card");
    if (cards.length === 0) throw new Error("没有任务卡片可选");

    var targetCard = null;
    for (var i = 0; i < cards.length; i++) {
      var cardId = await cards[i].evaluate(function(el) { return el.dataset.missionId; });
      if (cardId !== "campaign") {
        targetCard = cards[i];
        break;
      }
    }
    if (!targetCard) targetCard = cards[0];

    await targetCard.click();
    await page.waitForTimeout(200);

    var startBtn = await page.$("#startBtn");
    if (!startBtn) throw new Error("找不到开始按钮");

    var isDisabled = await startBtn.evaluate(function(el) { return el.disabled; });
    if (isDisabled) throw new Error("选中任务后开始按钮仍为禁用状态");

    var isSelected = await targetCard.evaluate(function(el) { return el.classList.contains("selected"); });
    if (!isSelected) throw new Error("任务卡片未显示选中状态");
  });

  await runTest("点击开始按钮后进入电力分配界面", async function() {
    var startBtn = await page.$("#startBtn");
    await startBtn.click();
    await page.waitForTimeout(1000);

    var tutorialOverlay = await page.$("#tutorialOverlay");
    if (tutorialOverlay) {
      var isTutorialVisible = await tutorialOverlay.evaluate(function(el) {
        return !el.classList.contains("hidden");
      });
      if (isTutorialVisible) {
        var skipBtn = await page.$("#tutorialSkipBtn");
        if (skipBtn) {
          await skipBtn.click();
          await page.waitForTimeout(300);
        }
      }
    }

    var controlsPanel = await page.$("#controlsPanel");
    if (!controlsPanel) throw new Error("找不到电力分配面板");

    var isVisible = await controlsPanel.isVisible();
    if (!isVisible) throw new Error("电力分配面板不可见");
  });

  await runTest("电力分配区域可交互", async function() {
    var allocItems = await page.$$("#allocations .allocation");
    if (allocItems.length === 0) throw new Error("找不到电力分配项");

    var powerText = await page.$eval("#powerLeft", function(el) { return el.textContent.trim(); });
    if (!powerText || powerText.length === 0) throw new Error("剩余电力显示为空");
  });

  await runTest("点击结束今天按钮可触发一天结算", async function() {
    var dayBefore = await page.$eval("#day", function(el) { return el.textContent.trim(); });
    var powerLeft = await page.$eval("#powerLeft", function(el) { return parseInt(el.textContent) || 0; });

    if (powerLeft < 0) {
      await page.evaluate(function() {
        if (state && state.allocations) {
          state.allocations.heat = 1;
          state.allocations.comm = 1;
          state.allocations.lab = 2;
          state.allocations.food = 1;
          renderAllocationValues();
        }
      });
      await page.waitForTimeout(200);
    }

    var endDayBtn = await page.$("#endDayBtn");
    if (!endDayBtn) throw new Error("找不到结束今天按钮");

    var isDisabled = await endDayBtn.evaluate(function(el) { return el.disabled; });
    if (isDisabled) throw new Error("结束今天按钮为禁用状态");

    await endDayBtn.click();
    await page.waitForTimeout(500);

    var dayAfter = await page.$eval("#day", function(el) { return el.textContent.trim(); });

    if (dayBefore === dayAfter) {
      throw new Error("结束一天后天数未变化: " + dayBefore + " -> " + dayAfter);
    }
  });

  await runTest("返回任务选择台", async function() {
    await page.goto(BASE_URL, { waitUntil: "domcontentloaded" });
    await page.waitForFunction("typeof state !== 'undefined'", { timeout: 5000 });
    await page.waitForTimeout(300);

    var missionDesk = await page.$("#missionDesk");
    if (!missionDesk) throw new Error("任务选择台不存在");
  });

  await runTest("打开关卡编辑器", async function() {
    var toggleBtn = await page.$("#toggleEditorBtn");
    if (!toggleBtn) throw new Error("找不到关卡编辑器按钮");

    await toggleBtn.click();
    await page.waitForTimeout(300);

    var editorPanel = await page.$("#levelEditorPanel");
    if (!editorPanel) throw new Error("找不到关卡编辑器面板");

    var isVisible = await editorPanel.isVisible();
    if (!isVisible) throw new Error("关卡编辑器面板不可见");
  });

  await runTest("关卡编辑器表单字段存在", async function() {
    var fields = [
      "#editorName", "#editorTag", "#editorDays",
      "#editorFuel", "#editorMorale", "#editorFood", "#editorData",
      "#editorAllocHeat", "#editorAllocComm", "#editorAllocLab", "#editorAllocFood",
      "#editorDataGoal"
    ];

    for (var i = 0; i < fields.length; i++) {
      var el = await page.$(fields[i]);
      if (!el) throw new Error("编辑器字段不存在: " + fields[i]);
    }
  });

  await runTest("关卡编辑器校验按钮可执行校验", async function() {
    var validateBtn = await page.$("#editorValidateBtn");
    if (!validateBtn) throw new Error("找不到校验按钮");

    await validateBtn.click();
    await page.waitForTimeout(300);

    var validationEl = await page.$("#editorValidation");
    if (!validationEl) throw new Error("找不到校验结果区域");

    var html = await validationEl.evaluate(function(el) { return el.innerHTML; });
    var isHidden = await validationEl.evaluate(function(el) { return el.classList.contains("hidden"); });

    if (isHidden && html.trim().length === 0) {
      throw new Error("校验后未显示校验结果");
    }
  });

  await runTest("关闭关卡编辑器", async function() {
    var closeBtn = await page.$("#closeEditorBtn");
    if (!closeBtn) throw new Error("找不到关闭编辑器按钮");

    await closeBtn.click();
    await page.waitForTimeout(200);

    var editorPanel = await page.$("#levelEditorPanel");
    var isHidden = await editorPanel.evaluate(function(el) { return el.classList.contains("hidden"); });
    if (!isHidden) throw new Error("关卡编辑器未关闭");
  });
}

async function main() {
  try {
    await startStaticServer();
    console.log("静态服务器已启动: " + BASE_URL);

    var pw;
    try {
      pw = loadPlaywright();
    } catch (e) {
      console.log("\n" + "=".repeat(50));
      console.log("跳过浏览器冒烟测试: " + e.message);
      console.log("=".repeat(50));
      stopStaticServer();
      process.exit(0);
    }

    try {
      ensureBrowser(pw);
    } catch (e) {
      console.log("\n" + "=".repeat(50));
      console.log("跳过浏览器冒烟测试: 浏览器安装失败 - " + e.message);
      console.log("=".repeat(50));
      stopStaticServer();
      process.exit(0);
    }

    browser = await pw.chromium.launch({
      headless: true
    });

    var context = await browser.newContext({
      viewport: { width: 1280, height: 800 }
    });

    page = await context.newPage();

    var consoleErrors = [];
    page.on("console", function(msg) {
      if (msg.type() === "error") {
        consoleErrors.push("[console] " + msg.text());
      }
    });

    page.on("pageerror", function(err) {
      consoleErrors.push("[pageerror] " + err.message);
    });

    await runTests();

    if (consoleErrors.length > 0) {
      console.log("\n浏览器控制台错误 (" + consoleErrors.length + " 条):");
      for (var i = 0; i < Math.min(consoleErrors.length, 5); i++) {
        console.log("  " + consoleErrors[i]);
      }
    }

    console.log("\n" + "=".repeat(50));
    console.log("冒烟测试结果: " + passed + " 通过, " + failed + " 失败");

    await browser.close();
    stopStaticServer();

    if (failed > 0) {
      process.exit(1);
    }
  } catch (err) {
    console.error("\n测试运行失败:", err.message);
    if (browser) {
      try { await browser.close(); } catch (_) {}
    }
    stopStaticServer();
    process.exit(1);
  }
}

main();
