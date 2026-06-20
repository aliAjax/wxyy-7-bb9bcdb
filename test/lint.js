const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const files = {
  html: path.join(ROOT, "index.html"),
  css: path.join(ROOT, "style.css"),
  js: path.join(ROOT, "app.js")
};

let passed = 0;
let failed = 0;

function check(name, fn) {
  try {
    fn();
    console.log("  OK  " + name);
    passed++;
  } catch (err) {
    console.log("  FAIL " + name);
    console.log("       " + err.message);
    failed++;
  }
}

console.log("\n文件存在性检查");

check("index.html 存在", () => {
  if (!fs.existsSync(files.html)) throw new Error("文件不存在");
});

check("style.css 存在", () => {
  if (!fs.existsSync(files.css)) throw new Error("文件不存在");
});

check("app.js 存在", () => {
  if (!fs.existsSync(files.js)) throw new Error("文件不存在");
});

console.log("\nHTML 结构检查");

const htmlContent = fs.readFileSync(files.html, "utf8");

check("HTML 包含 doctype", () => {
  if (!/<!DOCTYPE html>/i.test(htmlContent)) throw new Error("缺少 <!DOCTYPE html>");
});

check("HTML 包含 <html> 标签", () => {
  if (!/<html[\s>]/i.test(htmlContent)) throw new Error("缺少 <html> 标签");
});

check("HTML 包含 <head> 和 <body>", () => {
  if (!/<head[\s>]/i.test(htmlContent)) throw new Error("缺少 <head> 标签");
  if (!/<body[\s>]/i.test(htmlContent)) throw new Error("缺少 <body> 标签");
});

check("HTML 引用 app.js", () => {
  if (!/<script[^>]+src=["']app\.js["']/i.test(htmlContent)) {
    throw new Error("未引用 app.js");
  }
});

check("HTML 引用 style.css", () => {
  if (!/<link[^>]+href=["']style\.css["']/i.test(htmlContent)) {
    throw new Error("未引用 style.css");
  }
});

check("任务选择台面板存在", () => {
  if (!/id=["']missionDesk["']/.test(htmlContent)) {
    throw new Error("缺少 #missionDesk 元素");
  }
});

check("关卡编辑器面板存在", () => {
  if (!/id=["']levelEditorPanel["']/.test(htmlContent)) {
    throw new Error("缺少 #levelEditorPanel 元素");
  }
});

check("电力分配面板存在", () => {
  if (!/id=["']controlsPanel["']/.test(htmlContent)) {
    throw new Error("缺少 #controlsPanel 元素");
  }
});

check("结束今天按钮存在", () => {
  if (!/id=["']endDayBtn["']/.test(htmlContent)) {
    throw new Error("缺少 #endDayBtn 元素");
  }
});

check("关卡编辑器校验按钮存在", () => {
  if (!/id=["']editorValidateBtn["']/.test(htmlContent)) {
    throw new Error("缺少 #editorValidateBtn 元素");
  }
});

console.log("\nCSS 基本检查");

const cssContent = fs.readFileSync(files.css, "utf8");

check("CSS 文件非空", () => {
  if (cssContent.trim().length === 0) throw new Error("CSS 文件为空");
});

check("CSS 包含 .hidden 类", () => {
  if (!/\.hidden\s*\{/.test(cssContent)) throw new Error("缺少 .hidden 类");
});

check("CSS 包含 .mission-card 样式", () => {
  if (!/\.mission-card[\s\{,]/.test(cssContent)) throw new Error("缺少 .mission-card 样式");
});

console.log("\nJavaScript 语法检查");

check("app.js 语法有效", () => {
  const jsContent = fs.readFileSync(files.js, "utf8");
  try {
    new vm.Script(jsContent, { filename: "app.js" });
  } catch (err) {
    throw new Error("语法错误: " + err.message);
  }
});

check("app.js 包含 init 函数", () => {
  const jsContent = fs.readFileSync(files.js, "utf8");
  if (!/function\s+init\s*\(/.test(jsContent)) {
    throw new Error("缺少 init 函数");
  }
});

check("app.js 包含 endDay 函数", () => {
  const jsContent = fs.readFileSync(files.js, "utf8");
  if (!/function\s+endDay\s*\(/.test(jsContent)) {
    throw new Error("缺少 endDay 函数");
  }
});

check("app.js 包含关卡编辑器相关函数", () => {
  const jsContent = fs.readFileSync(files.js, "utf8");
  if (!/validateLevelConfig/.test(jsContent)) {
    throw new Error("缺少 validateLevelConfig 函数");
  }
  if (!/populateEditor/.test(jsContent)) {
    throw new Error("缺少 populateEditor 函数");
  }
});

check("app.js 包含筛选相关逻辑", () => {
  const jsContent = fs.readFileSync(files.js, "utf8");
  if (!/renderMissionCards/.test(jsContent)) {
    throw new Error("缺少 renderMissionCards 函数");
  }
  if (!/filterMissions/.test(jsContent)) {
    throw new Error("缺少 filterMissions 函数");
  }
});

console.log("\n单元测试文件检查");

check("level-editor.test.js 存在且有效", () => {
  const testPath = path.join(ROOT, "test", "level-editor.test.js");
  if (!fs.existsSync(testPath)) throw new Error("测试文件不存在");
  const testContent = fs.readFileSync(testPath, "utf8");
  new vm.Script(testContent, { filename: "level-editor.test.js" });
});

console.log("\n" + "=".repeat(50));
console.log("总计: " + passed + " 通过, " + failed + " 失败");

if (failed > 0) {
  process.exit(1);
}
