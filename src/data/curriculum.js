// src/data/curriculum.js
export const curriculum = [
  {
    id: 'project-overview-setup',
    category: '專案導讀與概念篇',
    title: '00. Vue 專案全局導讀：架構、安裝與學習地圖',
    summary: '在寫下第一行代碼前，先搞懂為什麼要學 Vue？專案裡面有哪些檔案？以及如何用 npm 安裝並啟動專案！',
    readTime: '6 分鐘',
    concept: `
### 1. 為什麼要學 Vue？我們在解決什麼問題？
在傳統 JavaScript 開發中，若想做一個「計數器」或「購物車」，你必須寫繁瑣的命令式 (Imperative) 代碼：
\`\`\`javascript
// 傳統 DOM 操作：手動尋找元素 -> 手動修改內容
const btn = document.getElementById('btn');
const text = document.getElementById('count');
let count = 0;
btn.addEventListener('click', () => {
  count++;
  text.innerText = count; // 一旦漏掉這行，畫面就不會更新！
});
\`\`\`
當專案越來越大，到處都是 \`document.getElementById\`，程式碼很容易出錯且極難維護。

而在 Vue 中，我們採用**資料驅動 (Data-Driven)** 理念：
> **你只負責維護變數資料（Data / State），Vue 會自動幫你搞定畫面的同步與重繪！**

---

### 2. 一個標準的 Vue 專案長什麼樣子？
當你使用現代工具建立一個 Vue 專案時，最關鍵的檔案架構如下：

\`\`\`
my-vue-app/
├── index.html        # 網頁唯一的 HTML 入口容器 (<div id="app"></div>)
├── package.json      # 專案套件設定檔與啟動腳本 (npm run dev)
├── vite.config.js    # Vite 打包建置工具設定檔
└── src/
    ├── main.js       # 專案引擎啟動點 (createApp 並掛載到 #app)
    ├── App.vue       # 專案的「根組件」
    └── components/   # 存放可重複使用的各個自訂小組件
\`\`\`

#### 什麼是 \`.vue\` 檔案？（SFC 單文件組件）
Vue 最強大的特色就是 **SFC (Single File Component)**，把一個介面需要的全部要素寫在同一個檔案內：
1. **\`<template>\`**：寫 HTML 模板結構。
2. **\`<script setup>\`**：寫 JavaScript 邏輯與響應式資料（Vue 3 Composition API）。
3. **\`<style scoped>\`**：寫 CSS 樣式，\`scoped\` 保證樣式不會污染到其他組件！

---

### 3. 如何在自己電腦安裝並啟動 Vue？
要在本機開發 Vue 專案，只需要 3 個步驟：

#### 第一步：安裝 Node.js
前往 [Node.js 官方網站](https://nodejs.org/) 下載並安裝 LTS 穩定版本（安裝後電腦就會具備 \`npm\` 指令）。

#### 第二步：終端機執行建立指令
打開終端機 (Terminal / PowerShell / CMD)，輸入官方建立指令：
\`\`\`bash
# 官方最新建立工具
npm create vue@latest

# 或者使用超快的 Vite 模板建立：
npm create vite@latest my-vue-app -- --template vue
\`\`\`
依提示輸入專案名稱後，工具就會自動幫你生成整套專案結構！

#### 第三步：安裝依賴並啟動本機伺服器
\`\`\`bash
cd my-vue-app     # 進入專案資料夾
npm install       # 安裝所有相依套件
npm run dev       # 啟動開發伺服器
\`\`\`
此時終端機會顯示 \`http://localhost:5173/\`，在瀏覽器打開就能立刻看到你的 Vue 網站！

---

### 4. 接下來的自學地圖（為什麼這樣安排？）
為了避免初學者一開始就被複雜的打包設定嚇到，接下來的課程會循序漸進：
- **階段 1（01 ~ 05 課）基礎語法**：學會如何把變數印出 (\`{{ }}\`)、綁定屬性 (\`:\`)、監聽按鈕 (\`@\`) 與表單輸入 (\`v-model\`)。
- **階段 2（06 ~ 07 課）條件與迴圈**：學會隱藏/顯示元素 (\`v-if\`) 與遍歷清單 (\`v-for\`)。
- **階段 3（08 ~ 10 課）響應式核心**：學會 Vue 3 的核心心臟 \`ref\`、\`reactive\`、\`computed\` 與 \`watch\`。
- **階段 4（11 課後）組件化開發**：學會像組積木一樣組合大型應用程式！
    `,
    task: `
**體驗任務：**
1. 右側編輯器展示了一個標準的 Vue 3 核心運作實例。
2. 找到 \`setup()\` 裡面的 \`frameworkInfo\`，將 \`learner\` 改成**你的暱稱或名字**！
3. 點擊按鈕試試看，體驗 Vue 3 的資料響應性！
    `,
    starterCode: `<div id="app">
  <!-- 這是標準 Vue 組件的模板區塊 -->
  <div style="padding: 16px; border: 2px solid #42b883; border-radius: 8px; background: #f0fdf4;">
    <h2 style="color: #35495e; margin-bottom: 8px;">
       歡迎踏上 Vue 3 實戰自學之旅！
    </h2>
    <p>目前學習者：<strong style="color: #42b883; font-size: 1.1rem;">{{ learner }}</strong></p>
    <p>核心學習心法：<em>{{ corePrinciple }}</em></p>
    
    <div style="margin-top: 15px;">
      <button @click="levelUp" style="background: #42b883; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">
         點我累積學習點數：{{ exp }} 點
      </button>
    </div>
  </div>
</div>

<script>
  // 這是標準 Vue 3 的核心邏輯 (Composition API)
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      // 宣告響應式狀態變數
      const learner = ref('Vue 新手小隊員');
      const corePrinciple = ref('資料驅動視圖，再也不用寫 document.getElementById！');
      const exp = ref(0);

      const levelUp = () => {
        exp.value += 10;
      };

      return {
        learner,
        corePrinciple,
        exp,
        levelUp
      };
    }
  }).mount('#app');
</script>`,
    solutionCode: `<div id="app">
  <div style="padding: 16px; border: 2px solid #42b883; border-radius: 8px; background: #f0fdf4;">
    <h2 style="color: #35495e; margin-bottom: 8px;">
       歡迎踏上 Vue 3 實戰自學之旅！
    </h2>
    <p>目前學習者：<strong style="color: #42b883; font-size: 1.1rem;">{{ learner }}</strong></p>
    <p>核心學習心法：<em>{{ corePrinciple }}</em></p>
    
    <div style="margin-top: 15px;">
      <button @click="levelUp" style="background: #42b883; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">
         點我累積學習點數：{{ exp }} 點
      </button>
    </div>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const learner = ref('前端未來的架構大師');
      const corePrinciple = ref('資料驅動視圖，再也不用寫 document.getElementById！');
      const exp = ref(100);

      const levelUp = () => {
        exp.value += 10;
      };

      return {
        learner,
        corePrinciple,
        exp,
        levelUp
      };
    }
  }).mount('#app');
</script>`,
    hints: [
      '在 script 中將 learner 變數改為您的名字，例如 ref("Alex");',
      '點擊預覽區塊中的按鈕，exp 點數會自動即時往上跳！'
    ]
  },
  {
    id: 'foundation-html',
    category: '網頁基石先修篇',
    title: '前置 01. HTML 核心基石：骨架、常用標籤與屬性',
    summary: '網頁的骨架！快速掌握標籤結構、巢狀層級與常用標籤屬性，理解它在 Vue 單文件組件 template 中的角色。',
    readTime: '5 分鐘',
    concept: `
### 1. HTML 是什麼？
HTML (HyperText Markup Language，超文本標記語言) 是網頁的**結構骨架**。
它不是程式語言，而是一組標籤 (Tags)，告訴瀏覽器這段文字是標題、段落、按鈕還是輸入框。

> **對應 Vue 的觀念**：在 Vue 單文件組件 (.vue) 中，所有的 HTML 都寫在 \`<template>\` 區塊內。

---

### 2. 標籤與屬性核心語法
HTML 標籤通常成對出現，包含「起始標籤」、「內容」與「結束標籤」：
\`\`\`html
<button class="primary-btn" id="submit-btn" disabled>送出表單</button>
\`\`\`
- **標籤名稱**：例如 \`button\`、\`div\`、\`p\`。
- **屬性 (Attributes)**：例如 \`class="primary-btn"\`、\`id="submit-btn"\`。屬性提供額外資訊給 CSS 選取或給 JavaScript 控制。
- **布林屬性**：例如 \`disabled\`，寫上去就代表 true，拿掉代表 false。

---

### 3. 三大最常用標籤分類

#### 結構容器型（用來包裝排版區塊）
- \`<div>\`：最通用的區塊容器（Block Element），會自動換行。
- \`<span>\`：行內容器（Inline Element），不會換行，常用來替局部文字加上特殊樣式。
- \`<section>\`、\`<header>\`、\`<main>\`：具備語意化的現代結構標籤。

#### 文字呈現型
- \`<h1>\` 到 \`<h6>\`：主標題到次標題（重要性遞減）。
- \`<p>\`：一般段落文字。
- \`<strong>\`：加粗強調；\`<em>\`：斜體。
- \`<ul>\` 與 \`<li>\`：無序清單項目。

#### 表單與互動型（與使用者互動的核心）
- \`<button>\`：點擊按鈕。
- \`<input type="text">\`：單行文字輸入框（其他常見 type：password, checkbox, radio）。
- \`<select>\` 與 \`<option>\`：下拉選單。
- \`<a href="...">\`：超連結。

---

### 4. 延伸進階學習資源推薦
如果您想更系統性地查詢 HTML 標籤細節，推薦以下標準學習資源：
- **MDN Web Docs - HTML 基礎結構教學**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/Structuring_content
- **W3Schools HTML Tutorial (英文/繁中翻譯)**：https://www.w3schools.com/html/
    `,
    task: `
任務指引：
1. 右側編輯器是一段標準的 HTML 結構。
2. 嘗試在標籤中加入一個輸入框 <input type="text" placeholder="請輸入設備代碼..." />。
3. 觀察下方的 Live output 即時渲染出的表單元素！
    `,
    starterCode: `<!-- 純 HTML 骨架練習 -->
<div style="font-family: sans-serif; padding: 16px;">
  <h2>廠區監控主機資訊</h2>
  <p>這是最基礎的 HTML 結構，標籤決定了瀏覽器如何排列文字與元件。</p>
  
  <div style="margin: 15px 0;">
    <!-- 請在下方加入一個 input 輸入框與按鈕 -->
    <input type="text" placeholder="請輸入設備名稱..." style="padding: 6px 10px; border-radius: 4px; border: 1px solid #cbd5e1;" />
    <button style="padding: 6px 14px; background: #2563eb; color: white; border: none; border-radius: 4px; cursor: pointer;">
      查詢
    </button>
  </div>
</div>`,
    solutionCode: `<!-- 純 HTML 骨架練習 -->
<div style="font-family: sans-serif; padding: 16px;">
  <h2>廠區監控主機資訊</h2>
  <p>這是最基礎的 HTML 結構，標籤決定了瀏覽器如何排列文字與元件。</p>
  
  <div style="margin: 15px 0;">
    <input type="text" placeholder="請輸入設備名稱..." style="padding: 6px 10px; border-radius: 4px; border: 1px solid #cbd5e1;" />
    <button style="padding: 6px 14px; background: #2563eb; color: white; border: none; border-radius: 4px; cursor: pointer;">
      查詢
    </button>
  </div>
</div>`,
    hints: [
      'HTML 的本質就是標籤嵌套，所有 Vue 模板都基於這套標準語法展開。'
    ]
  },
  {
    id: 'foundation-css',
    category: '網頁基石先修篇',
    title: '前置 02. CSS 核心基石：盒模型、Flexbox 與樣式系統',
    summary: '網頁的外觀皮肉！快速理解選擇器、盒模型 (Margin/Padding)、現代 Flexbox 排版神器與 CSS 變數。',
    readTime: '6 分鐘',
    concept: `
### 1. CSS 是什麼？
CSS (Cascading Style Sheets，階層式樣式表) 負責幫 HTML 骨架**穿上衣服、排版位置與美化外觀**。

> **對應 Vue 的觀念**：在 Vue 單文件組件中，樣式通常寫在 \`<style scoped>\` 區塊內。scoped 能確保此樣式僅作用於當前組件，不會意外污染全域！

---

### 2. 核心三大選擇器
- **標籤選擇器**：\`button { color: red; }\`（對全頁面所有 button 生效）。
- **類別選擇器 (最常用)**：\`.card-box { background: #fff; }\`（對帶有 \`class="card-box"\` 的元素生效）。
- **識別碼選擇器**：\`#main-nav { height: 60px; }\`（對特定 \`id="main-nav"\` 生效）。

---

### 3. 盒模型 (Box Model) —— 前端工程師必背
瀏覽器把每一個 HTML 元素都視為一個矩形盒子，由內向外分為四層：
1. **Content (內容區)**：文字或圖片的實際寬度 (\`width\`) 與高度 (\`height\`)。
2. **Padding (內邊距)**：內容與邊框之間的留白距離。
3. **Border (邊框)**：圍繞在 Padding 外圍的線條（如 \`1px solid #e2e8f0\`）。
4. **Margin (外邊距)**：這個盒子與外面其他相鄰盒子之間的間隔距離。

\`\`\`
+---------------------------+
|          Margin           |
|  +---------------------+  |
|  |       Border        |  |
|  |  +---------------+  |  |
|  |  |    Padding    |  |  |
|  |  |  +---------+  |  |  |
|  |  |  | Content |  |  |  |
|  |  |  +---------+  |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
\`\`\`

---

### 4. 現代排版神器：Flexbox (彈性盒佈局)
過去排版需要計算浮動 (float)，現代前端 95% 的橫向排列、居中對齊全靠 Flexbox：
\`\`\`css
.container {
  display: flex;                  /* 啟動彈性排版 */
  justify-content: space-between; /* 左右兩端對齊（或 center 置中） */
  align-items: center;            /* 垂直方向置中 */
  gap: 12px;                      /* 子元素之間的間隔 */
}
\`\`\`

---

### 5. 延伸進階學習資源推薦
- **MDN Web Docs - CSS 第一步教學**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/Styling_basics
- **CSS-Tricks - A Complete Guide to Flexbox (圖解版)**：https://css-tricks.com/snippets/css/a-guide-to-flexbox/
    `,
    task: `
任務指引：
1. 觀察右側使用 display: flex 的卡片排版。
2. 嘗試修改 justify-content 為 center，或修改 background 背景顏色。
3. 體驗 CSS 樣式如何決定整個界面的視覺質感！
    `,
    starterCode: `<div style="padding: 16px; font-family: sans-serif;">
  <h3>CSS 盒模型與 Flexbox 實戰</h3>

  <!-- 彈性排版卡片容器 -->
  <div style="display: flex; justify-content: space-between; align-items: center; padding: 16px; border: 1px solid #cbd5e1; border-radius: 8px; background: #f8fafc;">
    <div>
      <h4 style="margin: 0 0 4px 0; color: #1e293b;">1 號空調冰水主機</h4>
      <span style="font-size: 13px; color: #64748b;">運轉率：85%</span>
    </div>

    <!-- 狀態指示標籤 -->
    <span style="padding: 4px 12px; background: #dcfce7; color: #15803d; border-radius: 9999px; font-size: 12px; font-weight: bold;">
      正常運轉
    </span>
  </div>
</div>`,
    solutionCode: `<div style="padding: 16px; font-family: sans-serif;">
  <h3>CSS 盒模型與 Flexbox 實戰</h3>

  <div style="display: flex; justify-content: space-between; align-items: center; padding: 16px; border: 1px solid #cbd5e1; border-radius: 8px; background: #f8fafc;">
    <div>
      <h4 style="margin: 0 0 4px 0; color: #1e293b;">1 號空調冰水主機</h4>
      <span style="font-size: 13px; color: #64748b;">運轉率：85%</span>
    </div>

    <span style="padding: 4px 12px; background: #dcfce7; color: #15803d; border-radius: 9999px; font-size: 12px; font-weight: bold;">
      正常運轉
    </span>
  </div>
</div>`,
    hints: [
      '透過 display: flex 與 justify-content，可以毫不費力地完成左右並排與響應式佈局。'
    ]
  },
  {
    id: 'foundation-javascript',
    category: '網頁基石先修篇',
    title: '前置 03. JavaScript 核心基石：變數、箭頭函式與非同步',
    summary: '網頁的大腦神經！快速整理現代 ES6+ 必備文法：const/let、箭頭函式、陣列方法與 async/await 非同步核心。',
    readTime: '7 分鐘',
    concept: `
### 1. JavaScript 是什麼？
如果 HTML 是骨架、CSS 是外觀，那麼 JavaScript (JS) 就是**大腦與神經系統**。
它賦予網頁計算資料、與伺服器通信、以及回應使用者點擊的能力。

> **對應 Vue 的觀念**：在 Vue 3 中，所有業務邏輯、響應式變數與打 API 的程式碼，全部寫在 \`<script setup>\` 區塊內！

---

### 2. 現代變數宣告：const 與 let
- **\`const\`**：宣告常數（不可重新賦值）。**優先使用**！例如定義函式、陣列、物件。
- **\`let\`**：宣告可變變數（例如計數器 \`let count = 0\`）。
- **完全棄用 \`var\`**：舊時代的 var 存在變數提升 (Hoisting) 與作用域污染，現代前端一律不用。

---

### 3. 箭頭函式 (Arrow Functions)
更精簡的函式語法：
\`\`\`javascript
// 傳統寫法
function add(a, b) {
  return a + b;
}

// 現代箭頭函式寫法
const add = (a, b) => a + b;
\`\`\`

---

### 4. 必備陣列處理三劍客
在 Vue 渲染清單（如設備列表）時，這三個陣列方法每天都會用到：
1. **\`filter\`（過濾篩選）**：
   \`\`\`javascript
   const onlineDevices = devices.filter(d => d.status === 'online');
   \`\`\`
2. **\`map\`（轉換對應）**：
   \`\`\`javascript
   const deviceNames = devices.map(d => d.name);
   \`\`\`
3. **\`forEach\`（巡訪走訪）**：走訪陣列中的每個項目執行動作。

---

### 5. 非同步通訊核心：Promise 與 async / await
向後端伺服器請求資料需要等待網路傳輸，這就是**非同步 (Asynchronous)**：
\`\`\`javascript
// 現代標準寫法：直覺如同步程式碼
async function loadData() {
  try {
    const response = await fetch('/api/devices');
    const data = await response.json();
    console.log('取得設備清單：', data);
  } catch (error) {
    console.error('連線失敗：', error);
  }
}
\`\`\`

---

### 6. 延伸進階學習資源推薦
- **現代 JavaScript 深度教程 (JavaScript.info - 中文版)**：https://zh.javascript.info/
- **MDN Web Docs - JavaScript 第一步教學**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/Scripting
    `,
    task: `
任務指引：
1. 觀察右側 JavaScript 執行的陣列篩選邏輯。
2. 點擊「篩選在線設備」按鈕，體驗 JavaScript 如何透過 filter 即時運算出目標清單！
    `,
    starterCode: `<div style="padding: 16px; font-family: sans-serif;">
  <h3>JavaScript 陣列過濾運算展示</h3>

  <button id="filter-btn" style="padding: 6px 14px; background: #0284c7; color: white; border: none; border-radius: 4px; cursor: pointer;">
    點我篩選：僅保留在線設備
  </button>

  <ul id="device-list" style="margin-top: 15px; padding-left: 20px;">
    <li>機台 A (在線)</li>
    <li>機台 B (離線)</li>
    <li>機台 C (在線)</li>
  </ul>
</div>

<script>
  // 原始設備陣列
  const allDevices = [
    { name: '機台 A', status: '在線' },
    { name: '機台 B', status: '離線' },
    { name: '機台 C', status: '在線' }
  ];

  document.getElementById('filter-btn').addEventListener('click', () => {
    // 使用 ES6 filter 方法進行篩選
    const onlineOnly = allDevices.filter(d => d.status === '在線');
    
    // 更新清單 DOM
    const listEl = document.getElementById('device-list');
    listEl.innerHTML = onlineOnly.map(d => '<li>' + d.name + ' (' + d.status + ')</li>').join('');
  });
</script>`,
    solutionCode: `<div style="padding: 16px; font-family: sans-serif;">
  <h3>JavaScript 陣列過濾運算展示</h3>

  <button id="filter-btn" style="padding: 6px 14px; background: #0284c7; color: white; border: none; border-radius: 4px; cursor: pointer;">
    點我篩選：僅保留在線設備
  </button>

  <ul id="device-list" style="margin-top: 15px; padding-left: 20px;">
    <li>機台 A (在線)</li>
    <li>機台 B (離線)</li>
    <li>機台 C (在線)</li>
  </ul>
</div>

<script>
  const allDevices = [
    { name: '機台 A', status: '在線' },
    { name: '機台 B', status: '離線' },
    { name: '機台 C', status: '在線' }
  ];

  document.getElementById('filter-btn').addEventListener('click', () => {
    const onlineOnly = allDevices.filter(d => d.status === '在線');
    const listEl = document.getElementById('device-list');
    listEl.innerHTML = onlineOnly.map(d => '<li>' + d.name + ' (' + d.status + ')</li>').join('');
  });
</script>`,
    hints: [
      'Vue 3 本質就是建立在現代 JavaScript (ES6+) 之上，熟練 filter、map 與 async/await 後續事半功倍！'
    ]
  },
  {
    id: 'intro-hello-world',
    category: '基礎入門篇',
    title: '01. 認識 Vue.js 與第一個應用',
    summary: '了解宣告式渲染的核心理念，並使用 createApp 啟動第一個 Vue 應用程式。',
    readTime: '3 分鐘',
    concept: `
### 什麼是 Vue.js？
Vue（讀作 /vjuː/，類似 view）是一套用於構建使用者介面的**漸進式 JavaScript 框架**。
在傳統 JavaScript (DOM 操作) 中，你必須手動找到元素並修改內容：
\`\`\`javascript
// 傳統 DOM 操作（命令式 Imperative）
document.getElementById('title').innerText = 'Hello World';
\`\`\`
而在 Vue 中，我們採用**宣告式渲染 (Declarative Rendering)**：你只需要定義「資料」，當資料改變時，畫面會自動同步更新！

### 核心結構拆解
1. **HTML 模板容器**：例如 \`<div id="app">\`，這是 Vue 接管並渲染畫面的根節點。
2. **\`Vue.createApp({ ... })\`**：建立 Vue 應用實例。在 Vue 3 中，最推薦使用 **Composition API** 中的 \`setup()\` 函式來定義資料與邏輯。
3. **\`.mount('#app')\`**：將 Vue 應用掛載到指定的 DOM 元素上。
    `,
    task: `
**今日任務：**
1. 在右側編輯器中，找到 \`message\` 的初始文字 \`'哈囉，Vue！'\`。
2. 嘗試將它修改為：\`'我正在自學 Vue 3，超酷的！'\`。
3. 觀察下方的 **Live output** 即時渲染出新內容！
    `,
    starterCode: `<div id="app">
  <h1>{{ message }}</h1>
  <p>這是我的第一個 Vue 3 應用程式！</p>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      // 宣告一個響應式字串變數
      const message = ref('哈囉，Vue！');

      return {
        message
      };
    }
  }).mount('#app');
</script>`,
    solutionCode: `<div id="app">
  <h1>{{ message }}</h1>
  <p>這是我的第一個 Vue 3 應用程式！</p>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      // 宣告一個響應式字串變數
      const message = ref('我正在自學 Vue 3，超酷的！');

      return {
        message
      };
    }
  }).mount('#app');
</script>`,
    hints: [
      '請直接修改 script 標籤內 message 變數的值。',
      '注意字串外面的引號要成對保留喔！'
    ]
  },
  {
    id: 'text-interpolation',
    category: '基礎入門篇',
    title: '02. 雙花括號與文字插值 ({{ }})',
    summary: '掌握 Mustache 雙花括號語法，學習在 HTML 中輸出動態資料與 JavaScript 表達式。',
    readTime: '4 分鐘',
    concept: `
### Mustache「雙花括號」語法
最基礎的資料綁定形式是使用「雙花括號」\`{{ expression }}\`（又稱 Mustache 語法）。
每當對應的響應式狀態改變時，雙花括號內的文字會自動更新。

### 支援 JavaScript 表達式！
在 \`{{ }}\` 之中，你可以放入任何**單一的 JavaScript 表達式**：
- 數學運算：\`{{ price * quantity }}\`
- 三元運算子：\`{{ isLogin ? '歡迎回來' : '請先登入' }}\`
- 字串方法：\`{{ username.toUpperCase() }}\`
- 陣列處理：\`{{ tags.join(' / ') }}\`

> **注意：** 雙花括號只能接受「表達式 (Expression)」，不能包含宣告或語句（例如不能寫 \`{{ var a = 1 }}\` 或 \`{{ if (ok) { return msg } }}\`）。
    `,
    task: `
**今日任務：**
1. 模板中目前顯示原價 \`{{ price }}\` 與折扣 \`{{ discount }}\`。
2. 請在下方新增一個 \`<p>\` 標籤，使用表達式計算**特惠價**（公式：\`price * discount\`）。
3. 也可以試試使用三元運算子，判斷折扣後價格是否小於 800，顯示「超划算！」或「原價優惠」。
    `,
    starterCode: `<div id="app">
  <h2>商品結帳清單</h2>
  <p>商品名稱：{{ productName }}</p>
  <p>原價：NT$ {{ price }} 元</p>
  <p>折扣折數：{{ discount * 10 }} 折</p>
  
  <!-- 請在下方加入特惠價計算標籤 -->
  <p>特惠價：NT$ {{ /* 填入計算表達式 */ }} 元</p>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const productName = ref('Vue 3 深入淺出實戰手冊');
      const price = ref(1000);
      const discount = ref(0.75); // 75折

      return {
        productName,
        price,
        discount
      };
    }
  }).mount('#app');
</script>`,
    solutionCode: `<div id="app">
  <h2>商品結帳清單</h2>
  <p>商品名稱：{{ productName }}</p>
  <p>原價：NT$ {{ price }} 元</p>
  <p>折扣折數：{{ discount * 10 }} 折</p>
  
  <p style="color: #42b883; font-weight: bold; font-size: 1.2rem;">
    特惠價：NT$ {{ price * discount }} 元
  </p>
  <p>評價：{{ (price * discount) < 800 ? '超划算！限量搶購中' : '現正優惠中' }}</p>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const productName = ref('Vue 3 深入淺出實戰手冊');
      const price = ref(1000);
      const discount = ref(0.75);

      return {
        productName,
        price,
        discount
      };
    }
  }).mount('#app');
</script>`,
    hints: [
      '在 {{ }} 中直接輸入 price * discount 即可進行數值相乘！',
      '你也可以在標籤加上 style 樣式讓特惠價更醒目。'
    ]
  },
  {
    id: 'attribute-binding',
    category: '基礎入門篇',
    title: '03. 屬性綁定 (v-bind 與 :)',
    summary: '雙花括號不能寫在 HTML 屬性中！學習使用 v-bind 或冒號縮寫綁定 href、src、disabled 與 class。',
    readTime: '4 分鐘',
    concept: `
### 為什麼不能在屬性中使用 {{ }}？
很多人初學時會嘗試這樣寫：\`<a href="{{ url }}">連結</a>\`，這是**錯誤的**！
HTML 屬性無法直接使用 Mustache 語法解析。

### 使用 v-bind 指令
Vue 提供 \`v-bind\` 指令來響應式綁定 HTML 屬性：
\`\`\`html
<!-- 完整語法 -->
<a v-bind:href="linkUrl">前往網站</a>

<!-- 縮寫語法（最常使用，強烈推薦！） -->
<a :href="linkUrl">前往網站</a>
<button :disabled="isButtonDisabled">送出</button>
<img :src="imageUrl" :alt="imageTitle" />
\`\`\`

### 動態 Class 與 Style 綁定
\`v-bind:class\` 支援物件語法：
\`\`\`html
<!-- 當 isActive 為 true 時，元素會自動套用 'active' class -->
<div :class="{ active: isActive }">內容</div>
\`\`\`
    `,
    task: `
**今日任務：**
1. 右側畫面中的按鈕處於可點擊狀態。
2. 請使用 \`:disabled="isDisabled"\` 將變數綁定到按鈕屬性上。
3. 嘗試把 \`linkUrl\` 綁定到 \`<a>\` 標籤的 \`href\` 屬性，讓點擊能前往正確網址！
    `,
    starterCode: `<div id="app">
  <h3>屬性動態綁定練習</h3>
  
  <!-- 任務 1: 請使用 :href 綁定動態網址 -->
  <p>推薦文件：<a href="#">點我前往 Vue 官方網站</a></p>

  <!-- 任務 2: 請使用 :disabled 綁定 isDisabled 狀態 -->
  <button>立即送出表單</button>

  <p>目前狀態：{{ isDisabled ? '按鈕已停用 (不可點擊)' : '按鈕可正常使用' }}</p>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const linkUrl = ref('https://vuejs.org');
      const isDisabled = ref(true);

      return {
        linkUrl,
        isDisabled
      };
    }
  }).mount('#app');
</script>`,
    solutionCode: `<div id="app">
  <h3>屬性動態綁定練習</h3>
  
  <!-- 任務 1: 使用 :href 綁定 -->
  <p>推薦文件：<a :href="linkUrl" target="_blank">點我前往 Vue 官方網站</a></p>

  <!-- 任務 2: 使用 :disabled 綁定 -->
  <button :disabled="isDisabled">立即送出表單</button>

  <p>目前狀態：{{ isDisabled ? '按鈕已停用 (不可點擊)' : '按鈕可正常使用' }}</p>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const linkUrl = ref('https://vuejs.org');
      const isDisabled = ref(true);

      return {
        linkUrl,
        isDisabled
      };
    }
  }).mount('#app');
</script>`,
    hints: [
      '將 href="#" 改為 :href="linkUrl"',
      '在 button 標籤中加上 :disabled="isDisabled"'
    ]
  },
  {
    id: 'event-handling',
    category: '基礎入門篇',
    title: '04. 事件監聽 (v-on 與 @)',
    summary: '學習使用 v-on 與 @ 監聽點擊、鍵盤等 DOM 事件，並撰寫處理函式驅動畫面變化。',
    readTime: '4 分鐘',
    concept: `
### 監聽事件：v-on 與 @
我們可以使用 \`v-on\` 指令來監聽 DOM 事件，並在事件觸發時執行 JavaScript。
\`\`\`html
<!-- 完整寫法 -->
<button v-on:click="count++">加 1</button>

<!-- 縮寫語法（業界標準） -->
<button @click="count++">加 1</button>
<button @click="sayHello">打招呼</button>
\`\`\`

### 呼叫方法與傳遞參數
當邏輯比較複雜時，我們會在 \`setup()\` 中宣告一個方法函式並傳回：
\`\`\`javascript
const handleClick = (step) => {
  count.value += step;
};
\`\`\`
在模板中呼叫：\`<button @click="handleClick(5)">加 5</button>\`。

### 事件修飾符 (Event Modifiers)
Vue 提供了很貼心的修飾符，例如：
- \`@click.prevent\`：等同於呼叫 \`event.preventDefault()\`（防止跳轉頁面）。
- \`@click.stop\`：等同於 \`event.stopPropagation()\`（防止事件冒泡）。
    `,
    task: `
**今日任務：**
1. 完成一個計數器！
2. 為「減少」按鈕添加點擊事件 \`@click="decrement"\`。
3. 為「歸零」按鈕添加點擊事件 \`@click="reset"\`。
4. 點擊下方按鈕測試，確認數字會即時加減並歸零！
    `,
    starterCode: `<div id="app">
  <h3>計數器：{{ count }}</h3>

  <!-- 點擊增加按鈕已綁定 -->
  <button @click="increment">+ 增加 1</button>

  <!-- 任務：請為以下兩個按鈕加上 @click 監聽 -->
  <button>- 減少 1</button>
  <button>歸零 (Reset)</button>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const count = ref(0);

      const increment = () => {
        count.value++;
      };

      const decrement = () => {
        count.value--;
      };

      const reset = () => {
        count.value = 0;
      };

      return {
        count,
        increment,
        decrement,
        reset
      };
    }
  }).mount('#app');
</script>`,
    solutionCode: `<div id="app">
  <h3>計數器：{{ count }}</h3>

  <button @click="increment">+ 增加 1</button>
  <button @click="decrement">- 減少 1</button>
  <button @click="reset">歸零 (Reset)</button>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const count = ref(0);

      const increment = () => {
        count.value++;
      };

      const decrement = () => {
        count.value--;
      };

      const reset = () => {
        count.value = 0;
      };

      return {
        count,
        increment,
        decrement,
        reset
      };
    }
  }).mount('#app');
</script>`,
    hints: [
      '在減少按鈕上寫 @click="decrement"',
      '在歸零按鈕上寫 @click="reset"'
    ]
  },
  {
    id: 'form-binding-vmodel',
    category: '基礎入門篇',
    title: '05. 雙向資料綁定 (v-model)',
    summary: '掌握 v-model 神奇的雙向同步能力，輕鬆處理 input、checkbox、select 等表單元件。',
    readTime: '5 分鐘',
    concept: `
### 什麼是雙向綁定 (Two-way Binding)？
以往在表單中，我們需要：
1. 把變數值綁定到 input 的 \`value\`（資料到畫面）
2. 監聽 \`@input\` 事件，在使用者輸入時手動更新變數（畫面到資料）

Vue 的 \`v-model\` 一次性幫你搞定！它會自動建立資料與表單輸入之間的雙向同步：
\`\`\`html
<input v-model="inputText" placeholder="請輸入..." />
<p>您輸入的是：{{ inputText }}</p>
\`\`\`

### 常見表單元素應用
- **單行輸入框**：\`<input v-model="name" />\`
- **多行文字**：\`<textarea v-model="message"></textarea>\`
- **核取方塊 (Checkbox)**：\`<input type="checkbox" v-model="isChecked" />\`（對應 boolean 值）
- **下拉選單 (Select)**：\`<select v-model="selectedFruit">\`
    `,
    task: `
**今日任務：**
1. 目前 input 輸入框輸入內容時，下方文字並未同步。
2. 請在 \`<input>\` 標籤加上 \`v-model="username"\`。
3. 嘗試在右側即時輸入你的名字，看看下方是否立刻出現問候語！
    `,
    starterCode: `<div id="app">
  <h3>請輸入您的稱呼：</h3>
  
  <!-- 任務：為 input 加入 v-model="username" -->
  <input type="text" placeholder="例如：Alex" />

  <p style="margin-top: 15px;">
    你好，<strong>{{ username || '陌生訪客' }}</strong>！歡迎來到 Vue 的世界 
  </p>
  
  <label style="display: block; margin-top: 10px;">
    <input type="checkbox" v-model="agreeTerms" /> 我同意學習條款
  </label>
  <p>條款狀態：{{ agreeTerms ? ' 已同意' : ' 尚未勾選' }}</p>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const username = ref('');
      const agreeTerms = ref(false);

      return {
        username,
        agreeTerms
      };
    }
  }).mount('#app');
</script>`,
    solutionCode: `<div id="app">
  <h3>請輸入您的稱呼：</h3>
  
  <!-- 成功加入 v-model 雙向綁定 -->
  <input type="text" v-model="username" placeholder="例如：Alex" />

  <p style="margin-top: 15px;">
    你好，<strong>{{ username || '陌生訪客' }}</strong>！歡迎來到 Vue 的世界 
  </p>
  
  <label style="display: block; margin-top: 10px;">
    <input type="checkbox" v-model="agreeTerms" /> 我同意學習條款
  </label>
  <p>條款狀態：{{ agreeTerms ? ' 已同意' : ' 尚未勾選' }}</p>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const username = ref('');
      const agreeTerms = ref(false);

      return {
        username,
        agreeTerms
      };
    }
  }).mount('#app');
</script>`,
    hints: [
      '在 input 標籤中加上 v-model="username"',
      '此時你在 input 輸入的任何文字，都會即時更新 username.value'
    ]
  },
  {
    id: 'conditional-rendering',
    category: '條件與列表篇',
    title: '06. 條件渲染 (v-if 與 v-show)',
    summary: '學會依據條件決定元素的顯示與隱藏，並理解 v-if 與 v-show 的本質差異與效能考量。',
    readTime: '5 分鐘',
    concept: `
### v-if, v-else-if, v-else
依據表達式的真假值，決定是否在 DOM 中渲染該元素：
\`\`\`html
<div v-if="score >= 90">太神啦！等級 A</div>
<div v-else-if="score >= 60">恭喜及格！等級 B</div>
<div v-else>再接再厲！等級 C</div>
\`\`\`

### v-if vs v-show 怎麼選？
- **\`v-if\`**：真正的條件渲染。條件為假時，元素根本**不會存在於 DOM 結構中**。切換開銷較大。
- **\`v-show\`**：無論條件真假，元素**都會渲染到 DOM 中**，僅僅是透過 CSS \`display: none\` 來控制隱藏。初次載入開銷稍高，但頻繁切換時效能極佳。
>  **經驗法則**：頻繁切換（如收合面板、Tab 標籤頁）用 \`v-show\`；條件很少變更（如使用者權限、登入狀態）用 \`v-if\`。
    `,
    task: `
**今日任務：**
1. 練習切換登入狀態。
2. 使用 \`v-if="isLoggedIn"\` 顯示會員歡迎訊息。
3. 使用 \`v-else\` 顯示「請先登入」提示。
4. 點擊「切換狀態」按鈕觀察畫面動態變化！
    `,
    starterCode: `<div id="app">
  <h3>會員登入狀態展示</h3>
  <button @click="toggleLogin">
    點我切換狀態（目前：{{ isLoggedIn ? '已登入' : '未登入' }}）
  </button>

  <div style="margin-top: 20px; padding: 15px; border-radius: 8px; background: #f0fdf4;">
    <!-- 任務：加上 v-if="isLoggedIn" -->
    <div>
       歡迎回來，尊貴的 VIP 會員！這是您的專屬折扣代碼：<strong>VUE3_2026</strong>
    </div>

    <!-- 任務：加上 v-else -->
    <div>
       您尚未登入，請點擊上方按鈕模擬登入以查看專屬內容。
    </div>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const isLoggedIn = ref(false);

      const toggleLogin = () => {
        isLoggedIn.value = !isLoggedIn.value;
      };

      return {
        isLoggedIn,
        toggleLogin
      };
    }
  }).mount('#app');
</script>`,
    solutionCode: `<div id="app">
  <h3>會員登入狀態展示</h3>
  <button @click="toggleLogin">
    點我切換狀態（目前：{{ isLoggedIn ? '已登入' : '未登入' }}）
  </button>

  <div style="margin-top: 20px; padding: 15px; border-radius: 8px; background: #f0fdf4;">
    <div v-if="isLoggedIn">
       歡迎回來，尊貴的 VIP 會員！這是您的專屬折扣代碼：<strong>VUE3_2026</strong>
    </div>

    <div v-else>
       您尚未登入，請點擊上方按鈕模擬登入以查看專屬內容。
    </div>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const isLoggedIn = ref(false);

      const toggleLogin = () => {
        isLoggedIn.value = !isLoggedIn.value;
      };

      return {
        isLoggedIn,
        toggleLogin
      };
    }
  }).mount('#app');
</script>`,
    hints: [
      '在第一個 div 標籤加上 v-if="isLoggedIn"',
      '在緊鄰的第二個 div 標籤加上 v-else'
    ]
  },
  {
    id: 'list-rendering-vfor',
    category: '條件與列表篇',
    title: '07. 列表渲染 (v-for 與 :key)',
    summary: '使用 v-for 迴圈巡訪陣列與物件，並理解為什麼在 Vue 列表渲染中 :key 必不可少。',
    readTime: '5 分鐘',
    concept: `
### 使用 v-for 渲染清單
\`v-for\` 指令基於來源陣列來重複渲染元素：
\`\`\`html
<ul>
  <li v-for="(item, index) in items" :key="item.id">
    {{ index + 1 }}. {{ item.name }}
  </li>
</ul>
\`\`\`

### 為什麼一定要綁定 :key？
\`key\` 是 Vue 用來追蹤每個節點身份（Identity）的唯一識別標記。
當陣列順序改變、新增或刪除項目時，Vue 的虛擬 DOM (Virtual DOM) 可以透過 \`key\` 進行精準高效的複用，避免不必要的重新渲染或表單狀態錯亂。
>  **新手陷阱**：盡量使用唯一的 \`id\`（如 \`:key="item.id"\`），避免使用 \`index\` 作為 key，尤其是當列表會動態排序或刪除時。
    `,
    task: `
**今日任務：**
1. 將待辦事項（todos 陣列）使用 \`v-for\` 渲染至 \`<ul>\` 清單中。
2. 記得加上 \`:key="todo.id"\` 屬性。
3. 勾選核取方塊，觀察已完成項目是否會自動呈現刪除線效果！
    `,
    starterCode: `<div id="app">
  <h3>我的待辦清單 (Todo List)</h3>

  <ul>
    <!-- 任務：為 li 加上 v-for="todo in todos" :key="todo.id" -->
    <li>
      <input type="checkbox" v-model="todos[0].done" />
      <span :style="{ textDecoration: todos[0].done ? 'line-through' : 'none' }">
        {{ todos[0].text }}
      </span>
    </li>
  </ul>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const todos = ref([
        { id: 1, text: '學會 Vue 3 基本語法', done: true },
        { id: 2, text: '熟練 Composition API (ref, reactive)', done: false },
        { id: 3, text: '完成一個全端 Todo 實戰專案', done: false }
      ]);

      return {
        todos
      };
    }
  }).mount('#app');
</script>`,
    solutionCode: `<div id="app">
  <h3>我的待辦清單 (Todo List)</h3>

  <ul>
    <li v-for="todo in todos" :key="todo.id" style="margin-bottom: 8px;">
      <input type="checkbox" v-model="todo.done" />
      <span :style="{ textDecoration: todo.done ? 'line-through' : 'none', marginLeft: '8px' }">
        {{ todo.text }}
      </span>
    </li>
  </ul>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const todos = ref([
        { id: 1, text: '學會 Vue 3 基本語法', done: true },
        { id: 2, text: '熟練 Composition API (ref, reactive)', done: false },
        { id: 3, text: '完成一個全端 Todo 實戰專案', done: false }
      ]);

      return {
        todos
      };
    }
  }).mount('#app');
</script>`,
    hints: [
      '將 li 標籤修改為 <li v-for="todo in todos" :key="todo.id">',
      '將裡面的 todos[0] 改為當前迭代變數 todo'
    ]
  },
  {
    id: 'reactivity-ref-reactive',
    category: '核心響應式篇',
    title: '08. 響應式基礎 (ref 與 reactive)',
    summary: '深入 Vue 3 Composition API 的心臟：理解 ref() 的 .value 解包機制與 reactive() 物件代理。',
    readTime: '6 分鐘',
    concept: `
### ref()：可包裝任何型別
\`ref()\` 接受內部值，並回傳一個響應式且可變的 ref 物件：
\`\`\`javascript
const count = ref(0);
const name = ref('Vue');
\`\`\`
- **在 JS 邏輯中**：必須透過 \`.value\` 讀取或寫入（例如 \`count.value++\`）。
- **在 Template 模板中**：Vue 會自動「頂層解包 (Unwrapping)」，因此**不需要**寫 \`.value\`，直接寫 \`{{ count }}\` 即可！

### reactive()：專為物件打造
\`reactive()\` 透過 ES6 Proxy 將整個物件轉為深層響應式：
\`\`\`javascript
const state = reactive({ count: 0, title: '測試' });
state.count++; // 不需要寫 .value
\`\`\`
>  **最佳實踐**：Vue 官方推薦在多數情況下優先使用 \`ref()\`，因為它支援基本型別（number, string, boolean），且解構時不易遺失響應性。
    `,
    task: `
**今日任務：**
1. 查看 \`addStock()\` 函式，目前沒有正確增加庫存。
2. 請記得在 JavaScript 代碼中存取 ref 時，必須使用 \`.value\`！
3. 修正 \`stock.value += 5\`，點擊按鈕檢查庫存是否有順利增加。
    `,
    starterCode: `<div id="app">
  <h3>商品即時庫存監控</h3>
  <p>商品：旗艦降噪耳機</p>
  <p>目前庫存量：<strong style="color: #3b82f6;">{{ stock }}</strong> 件</p>

  <button @click="addStock">緊急進貨 +5 件</button>
  <button @click="sellOne" :disabled="stock <= 0">售出 1 件</button>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const stock = ref(10);

      const addStock = () => {
        // 錯誤寫法：直接對 ref 本身賦值會導致報錯或響應性失效
        // stock = stock + 5;
        // 請修正為使用 .value:
      };

      const sellOne = () => {
        if (stock.value > 0) {
          stock.value--;
        }
      };

      return {
        stock,
        addStock,
        sellOne
      };
    }
  }).mount('#app');
</script>`,
    solutionCode: `<div id="app">
  <h3>商品即時庫存監控</h3>
  <p>商品：旗艦降噪耳機</p>
  <p>目前庫存量：<strong style="color: #3b82f6;">{{ stock }}</strong> 件</p>

  <button @click="addStock">緊急進貨 +5 件</button>
  <button @click="sellOne" :disabled="stock <= 0">售出 1 件</button>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const stock = ref(10);

      const addStock = () => {
        stock.value += 5;
      };

      const sellOne = () => {
        if (stock.value > 0) {
          stock.value--;
        }
      };

      return {
        stock,
        addStock,
        sellOne
      };
    }
  }).mount('#app');
</script>`,
    hints: [
      '在 setup 函式內部，讀取或修改 ref 必須加上 .value，例如 stock.value += 5',
      '而在 HTML 模板中，Vue 會自動解包，直接寫 {{ stock }} 即可。'
    ]
  },
  {
    id: 'computed-properties',
    category: '核心響應式篇',
    title: '09. 計算屬性 (computed)',
    summary: '避免在模板中寫過於複雜的運算邏輯！認識具備響應式依賴緩存 (Cache) 的 computed()。',
    readTime: '5 分鐘',
    concept: `
### 為什麼需要 computed？
如果在模板中寫太長的表達式：
\`\`\`html
<!-- 糟糕！難以維護且容易寫錯 -->
<span>{{ author.books.length > 0 ? '已有出版書籍' : '尚未出版' }}</span>
\`\`\`
這會讓模板變得臃腫。此時應該使用**計算屬性 (computed)**！

\`\`\`javascript
import { ref, computed } from 'vue';

const books = ref(['Vue3 指南', 'JavaScript 核心']);
const publishedMessage = computed(() => {
  return books.value.length > 0 ? '已有出版書籍' : '尚未出版';
});
\`\`\`

### computed vs 普通函數 (methods)
- **\`computed\` 具備快取 (Cache)**：只要它依賴的響應式狀態沒有改變，多次讀取時會立即返回快取的結果，不會重新計算，效能極高！
- **函數 (Methods)**：每當頁面重新渲染，方法函式每次都會被重新執行一遍。
    `,
    task: `
**今日任務：**
1. 購物車中有商品單價與數量。
2. 請使用 \`computed()\` 建立一個 \`totalPrice\` 計算屬性（總金額 = \`price.value * quantity.value\`）。
3. 改變數量時，觀察總金額是否自動即時重新計算！
    `,
    starterCode: `<div id="app">
  <h3>購物車金額試算</h3>
  <p>商品名稱：{{ item }}</p>
  <p>單價：NT$ {{ price }}</p>
  
  <p>
    購買數量：
    <button @click="quantity > 1 ? quantity-- : null">-</button>
    <span style="margin: 0 10px; font-weight: bold;">{{ quantity }}</span>
    <button @click="quantity++">+</button>
  </p>

  <hr />
  <h4>
    訂單總金額：
    <span style="color: #ef4444;">NT$ {{ totalPrice }}</span> 元
  </h4>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  createApp({
    setup() {
      const item = ref('無線藍牙機械鍵盤');
      const price = ref(2500);
      const quantity = ref(1);

      // 任務：使用 computed 計算 totalPrice
      const totalPrice = computed(() => {
        // 請完成計算並 return
        return 0;
      });

      return {
        item,
        price,
        quantity,
        totalPrice
      };
    }
  }).mount('#app');
</script>`,
    solutionCode: `<div id="app">
  <h3>購物車金額試算</h3>
  <p>商品名稱：{{ item }}</p>
  <p>單價：NT$ {{ price }}</p>
  
  <p>
    購買數量：
    <button @click="quantity > 1 ? quantity-- : null">-</button>
    <span style="margin: 0 10px; font-weight: bold;">{{ quantity }}</span>
    <button @click="quantity++">+</button>
  </p>

  <hr />
  <h4>
    訂單總金額：
    <span style="color: #ef4444;">NT$ {{ totalPrice }}</span> 元
  </h4>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  createApp({
    setup() {
      const item = ref('無線藍牙機械鍵盤');
      const price = ref(2500);
      const quantity = ref(1);

      const totalPrice = computed(() => {
        return price.value * quantity.value;
      });

      return {
        item,
        price,
        quantity,
        totalPrice
      };
    }
  }).mount('#app');
</script>`,
    hints: [
      '在 computed 函式內部使用 return price.value * quantity.value;'
    ]
  },
  {
    id: 'watchers-side-effects',
    category: '核心響應式篇',
    title: '10. 偵聽器 (watch 與副作用)',
    summary: '當需要在資料變化時執行異步請求、寫入 LocalStorage 或紀錄 Log 等副作用時，使用 watch。',
    readTime: '6 分鐘',
    concept: `
### 什麼時候使用 watch？
雖然 \`computed\` 適合計算同步純值，但如果你需要在資料變更時執行**副作用 (Side Effects)**（例如打 API、計時器、操作 LocalStorage），就必須使用 \`watch\`：

\`\`\`javascript
import { ref, watch } from 'vue';

const search = ref('');

// 監聽 search 的變更
watch(search, (newVal, oldVal) => {
  console.log(\`搜尋關鍵字從 "\${oldVal}" 變為 "\${newVal}"\`);
  // 可以在此發送非同步網路請求
});
\`\`\`
    `,
    task: `
**今日任務：**
1. 當使用者在輸入框中打字時，透過 \`watch\` 監聽 \`question\` 變數。
2. 當包含問號 \`?\` 或 \`？\` 時，將 \`answer\` 變為 \`'問題正在為您搜尋解答中...'\`。
    `,
    starterCode: `<div id="app">
  <h3>智慧搜尋小幫手</h3>
  <p>提出一個問題（請以問號結尾）：</p>
  <input v-model="question" placeholder="例如：Vue 3 好學嗎？" style="width: 250px;" />

  <p style="margin-top: 15px; color: #6366f1;">
     小幫手回應：{{ answer }}
  </p>
</div>

<script>
  const { createApp, ref, watch } = Vue;

  createApp({
    setup() {
      const question = ref('');
      const answer = ref('請在上方輸入您的問題...');

      // 任務：使用 watch 監聽 question
      watch(question, (newQuestion) => {
        if (newQuestion.includes('?') || newQuestion.includes('？')) {
          answer.value = '已收到您的問題！Vue 3 採用 Composition API，直覺又強大！';
        } else {
          answer.value = '請在問題最後加上「？」我才能為您解答喔～';
        }
      });

      return {
        question,
        answer
      };
    }
  }).mount('#app');
</script>`,
    solutionCode: `<div id="app">
  <h3>智慧搜尋小幫手</h3>
  <p>提出一個問題（請以問號結尾）：</p>
  <input v-model="question" placeholder="例如：Vue 3 好學嗎？" style="width: 250px;" />

  <p style="margin-top: 15px; color: #6366f1;">
     小幫手回應：{{ answer }}
  </p>
</div>

<script>
  const { createApp, ref, watch } = Vue;

  createApp({
    setup() {
      const question = ref('');
      const answer = ref('請在上方輸入您的問題...');

      watch(question, (newQuestion) => {
        if (newQuestion.includes('?') || newQuestion.includes('？')) {
          answer.value = '已收到您的問題！Vue 3 採用 Composition API，直覺又強大！';
        } else {
          answer.value = '請在問題最後加上「？」我才能為您解答喔～';
        }
      });

      return {
        question,
        answer
      };
    }
  }).mount('#app');
</script>`,
    hints: [
      '在輸入框最後打一個「？」試試看！小幫手就會即時觸發 watch 並更新 answer'
    ]
  },
  {
    id: 'component-basics-props',
    category: '進階與組件篇',
    title: '11. 組件基礎與 Props 傳值',
    summary: '認識組件化開發 (Components)，學習如何封裝自訂標籤並透過 Props 向下傳遞資料。',
    readTime: '6 分鐘',
    concept: `
### 什麼是組件？
組件允許我們將 UI 拆分為獨立、可複用的代碼片段，並對每個片段進行單獨思考。
在 Vue 中，我們可以使用 \`app.component('MyComponent', { ... })\` 定義組件。

### Props：由外向內傳遞資料
Props 是你可以在組件上註冊的自定義屬性。當一個值被傳遞給 prop 時，它就變成了該組件實例上的一個屬性：
\`\`\`html
<!-- 父級模板使用自訂標籤並傳值 -->
<user-card username="小明" role="前端工程師"></user-card>
\`\`\`
    `,
    task: `
**今日任務：**
1. 觀察頁面中已經定義好的 \`todo-card\` 組件。
2. 在父模板中傳遞 \`:name="course.name"\` 與 \`:status="course.status"\`。
3. 體驗將介面模組化封裝的優雅之處！
    `,
    starterCode: `<div id="app">
  <h3>課程學習進度卡片（組件化實作）</h3>

  <!-- 任務：使用自訂的 todo-card 組件 -->
  <todo-card 
    v-for="course in courses" 
    :key="course.id"
    :name="course.name"
    :status="course.status">
  </todo-card>
</div>

<script>
  const { createApp, ref } = Vue;

  const app = createApp({
    setup() {
      const courses = ref([
        { id: 1, name: 'HTML & CSS 基礎', status: '已精通 ' },
        { id: 2, name: 'JavaScript ES6+', status: '已掌握 ' },
        { id: 3, name: 'Vue 3 全面啟航', status: '現正學習中 ' }
      ]);

      return { courses };
    }
  });

  // 註冊可重複使用的子組件
  app.component('todo-card', {
    props: ['name', 'status'],
    template: \`
      <div style="padding: 10px; margin: 8px 0; background: #f8fafc; border-left: 4px solid #42b883; border-radius: 4px;">
        <strong>{{ name }}</strong> - <span style="color: #64748b;">{{ status }}</span>
      </div>
    \`
  });

  app.mount('#app');
</script>`,
    solutionCode: `<div id="app">
  <h3>課程學習進度卡片（組件化實作）</h3>

  <todo-card 
    v-for="course in courses" 
    :key="course.id"
    :name="course.name"
    :status="course.status">
  </todo-card>
</div>

<script>
  const { createApp, ref } = Vue;

  const app = createApp({
    setup() {
      const courses = ref([
        { id: 1, name: 'HTML & CSS 基礎', status: '已精通 ' },
        { id: 2, name: 'JavaScript ES6+', status: '已掌握 ' },
        { id: 3, name: 'Vue 3 全面啟航', status: '現正學習中 ' }
      ]);

      return { courses };
    }
  });

  app.component('todo-card', {
    props: ['name', 'status'],
    template: \`
      <div style="padding: 10px; margin: 8px 0; background: #f8fafc; border-left: 4px solid #42b883; border-radius: 4px; display: flex; justify-content: space-between;">
        <strong>{{ name }}</strong>
        <span style="color: #42b883; font-weight: 500;">{{ status }}</span>
      </div>
    \`
  });

  app.mount('#app');
</script>`,
    hints: [
      '透過 app.component 建立獨立元件，在模板裡就能像寫原生 HTML 標籤一樣使用！'
    ]
  },
  {
    id: 'component-emits',
    category: '進階組件篇',
    title: '12. 子傳父通訊：自訂事件 (defineEmits 與 $emit)',
    summary: '組件不能只是單向接收資料！學習子組件如何透過自訂事件通知父層更新狀態或觸發操作。',
    readTime: '6 分鐘',
    concept: `
### 單向資料流 (One-Way Data Flow)
在 Vue 中，父組件透過 Props 向下傳遞資料給子組件。
但**子組件不能直接修改父組件傳過來的 prop**，否則會破壞資料流向，造成難以追蹤的 Bug。

### 子組件如何通知父層？
子組件必須透過「發射事件 (Emit)」來主動通知父組件：
1. **在子組件中**：使用 \`emit('事件名稱', 傳遞參數)\` 發射事件。
2. **在父組件中**：使用 \`@事件名稱="處理函式"\` 監聽該事件並做出對應動作。

\`\`\`html
<!-- 子組件發射自訂 change 狀態 -->
<button @click="$emit('toggle-switch')">切換狀態</button>

<!-- 父組件監聽並改變資料 -->
<my-switch @toggle-switch="handleSwitchChange"></my-switch>
\`\`\`

在現代 Vue 3 \`<script setup>\` 中，推薦使用 \`defineEmits(['toggle-switch'])\` 進行明確聲明。
    `,
    task: `
任務指引：
1. 觀察畫面上的開關切換組件。
2. 目前點擊子組件按鈕時，並未正確通知父層切換狀態。
3. 為子組件按鈕加入點擊發射事件，讓父層的「設備運轉狀態」能夠即時連動切換！
    `,
    starterCode: `<div id="app">
  <h3>設備遠端控制台</h3>
  <p>目前設備運轉狀態：<strong>{{ isPowerOn ? '運轉中 (ON)' : '已停機 (OFF)' }}</strong></p>

  <!-- 監聽子組件發出的 power-toggle 事件 -->
  <power-switch :is-on="isPowerOn" @power-toggle="handleToggle"></power-switch>
</div>

<script>
  const { createApp, ref } = Vue;

  const app = createApp({
    setup() {
      const isPowerOn = ref(false);

      const handleToggle = () => {
        isPowerOn.value = !isPowerOn.value;
      };

      return {
        isPowerOn,
        handleToggle
      };
    }
  });

  // 子組件：電源開關按鈕
  app.component('power-switch', {
    props: ['isOn'],
    emits: ['power-toggle'],
    template: \`
      <button 
        @click="$emit('power-toggle')"
        :style="{
          padding: '8px 16px',
          background: isOn ? '#42b883' : '#e2e8f0',
          color: isOn ? '#ffffff' : '#475569',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }">
        {{ isOn ? '關閉設備' : '啟動設備' }}
      </button>
    \`
  });

  app.mount('#app');
</script>`,
    solutionCode: `<div id="app">
  <h3>設備遠端控制台</h3>
  <p>目前設備運轉狀態：<strong>{{ isPowerOn ? '運轉中 (ON)' : '已停機 (OFF)' }}</strong></p>

  <power-switch :is-on="isPowerOn" @power-toggle="handleToggle"></power-switch>
</div>

<script>
  const { createApp, ref } = Vue;

  const app = createApp({
    setup() {
      const isPowerOn = ref(false);

      const handleToggle = () => {
        isPowerOn.value = !isPowerOn.value;
      };

      return {
        isPowerOn,
        handleToggle
      };
    }
  });

  app.component('power-switch', {
    props: ['isOn'],
    emits: ['power-toggle'],
    template: \`
      <button 
        @click="$emit('power-toggle')"
        :style="{
          padding: '8px 16px',
          background: isOn ? '#42b883' : '#e2e8f0',
          color: isOn ? '#ffffff' : '#475569',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }">
        {{ isOn ? '關閉設備' : '啟動設備' }}
      </button>
    \`
  });

  app.mount('#app');
</script>`,
    hints: [
      '子組件透過 @click="$emit(\'power-toggle\')" 即可把事件冒泡給父組件。',
      '父組件在標籤上用 @power-toggle="handleToggle" 接收並改變 isPowerOn 狀態。'
    ]
  },
  {
    id: 'component-slots',
    category: '進階組件篇',
    title: '13. 組件插槽設計 (Slots)：打造通用版面外框',
    summary: '除了傳遞字串與數值，如何把一整段 HTML 結構傳入組件中？學會使用 Slot 封裝彈窗、卡片與頁面容器。',
    readTime: '6 分鐘',
    concept: `
### 為什麼需要插槽 (Slots)？
如果只有 Props，當我們想做一個「通用卡片 (Card)」或「彈窗 (Modal)」時，很難客製化內部的複雜排版。
Vue 提供了 \`<slot></slot>\` 作為插槽出口，讓父組件可以在子組件的標籤內部插入自訂的 HTML 結構！

\`\`\`html
<!-- 子組件模板定義插槽位置 -->
<div class="card">
  <div class="card-header">{{ title }}</div>
  <div class="card-body">
    <slot><!-- 外部傳進來的內容會呈現在這裡 --></slot>
  </div>
</div>

<!-- 父組件呼叫並填入內容 -->
<base-card title="監控告警通知">
  <p>冷卻水塔水溫超過安全閥值！</p>
  <button>立即處理</button>
</base-card>
\`\`\`

### 具名插槽 (Named Slots)
當一個組件有多個區塊需要自訂（例如 header, content, footer）時，可以使用具名插槽：
- 子組件：\`<slot name="header"></slot>\`
- 父組件：\`<template #header>自訂標頭內容</template>\`
    `,
    task: `
任務指引：
1. 觀察定義好的通用監控卡片組件 \`monitor-card\`。
2. 嘗試在組件內部加入一段表格或警告提示，觀察內容如何精確嵌入在卡片主體中！
    `,
    starterCode: `<div id="app">
  <h3>監控面板外框展示</h3>

  <!-- 使用通用卡片組件 -->
  <monitor-card title="空調主機系統">
    <!-- 透過預設插槽傳入內容 -->
    <p style="color: #42b883; font-weight: bold;">運轉頻率：60 Hz</p>
    <p>冰水進水溫度：12.5 度</p>
    <p>冰水出水溫度：7.2 度</p>
  </monitor-card>

  <monitor-card title="電力需量總覽">
    <p style="color: #f59e0b; font-weight: bold;">目前負載率：78%</p>
    <p>契約容量：500 kW</p>
  </monitor-card>
</div>

<script>
  const { createApp } = Vue;

  const app = createApp({});

  // 註冊通用卡片容器
  app.component('monitor-card', {
    props: ['title'],
    template: \`
      <div style="border: 1px solid #cbd5e1; border-radius: 8px; margin-bottom: 12px; background: white; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <div style="background: #f8fafc; padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #e2e8f0; color: #1e293b;">
          {{ title }}
        </div>
        <div style="padding: 14px;">
          <!-- 核心插槽出口 -->
          <slot></slot>
        </div>
      </div>
    \`
  });

  app.mount('#app');
</script>`,
    solutionCode: `<div id="app">
  <h3>監控面板外框展示</h3>

  <monitor-card title="空調主機系統">
    <p style="color: #42b883; font-weight: bold;">運轉頻率：60 Hz</p>
    <p>冰水進水溫度：12.5 度</p>
    <p>冰水出水溫度：7.2 度</p>
  </monitor-card>

  <monitor-card title="電力需量總覽">
    <p style="color: #f59e0b; font-weight: bold;">目前負載率：78%</p>
    <p>契約容量：500 kW</p>
  </monitor-card>
</div>

<script>
  const { createApp } = Vue;

  const app = createApp({});

  app.component('monitor-card', {
    props: ['title'],
    template: \`
      <div style="border: 1px solid #cbd5e1; border-radius: 8px; margin-bottom: 12px; background: white; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <div style="background: #f8fafc; padding: 10px 14px; font-weight: bold; border-bottom: 1px solid #e2e8f0; color: #1e293b;">
          {{ title }}
        </div>
        <div style="padding: 14px;">
          <slot></slot>
        </div>
      </div>
    \`
  });

  app.mount('#app');
</script>`,
    hints: [
      'Slot 就像是組件預留的一個佔位插槽，外部傳什麼 HTML，裡面就渲染什麼。'
    ]
  },
  {
    id: 'composables-pattern',
    category: '進階組件篇',
    title: '14. 組合式邏輯抽離 (Composables：use...)',
    summary: '告別舊式 Mixins 命名衝突！學習如何將重複的業務邏輯（計時器、分頁、網路請求）封裝為獨立函式。',
    readTime: '7 分鐘',
    concept: `
### 什麼是 Composable（組合式函式）？
在 Vue 3 Composition API 中，「Composable」是一個利用 Vue 響應式系統來封裝和重用**有狀態邏輯 (Stateful Logic)** 的函式。
按照約定，函式名稱一律以 \`use\` 開頭，例如 \`useRealtime\`、\`useTable\`、\`useWindowSize\`。

### 為什麼它比舊版 Mixins 強大？
1. **來源清晰**：在組件中明確解構呼叫，一眼看出變數來自哪個函式。
2. **無命名衝突**：可自由重命名變數。
3. **低耦合、易於單元測試**：不依賴組件實例也能獨立運作。

\`\`\`javascript
// 一個獨立的 Composable 範例
function useTimer() {
  const seconds = ref(0);
  let timer = null;

  onMounted(() => {
    timer = setInterval(() => { seconds.value++; }, 1000);
  });

  onUnmounted(() => {
    clearInterval(timer);
  });

  return { seconds };
}
\`\`\`
    `,
    task: `
任務指引：
1. 右側定義了一個封裝好的 \`useCounter(initialValue, step)\` 組合式函式。
2. 觀察兩個獨立的計數器如何共用這套邏輯，卻擁有各自完全隔離的狀態！
    `,
    starterCode: `<div id="app">
  <h3>Composable 邏輯複用實戰</h3>

  <div style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; margin-bottom: 10px;">
    <h4>A 主機計數：{{ counterA.count }}</h4>
    <button @click="counterA.inc">增加 1</button>
    <button @click="counterA.reset">歸零</button>
  </div>

  <div style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px;">
    <h4>B 主機計數（每次加 5）：{{ counterB.count }}</h4>
    <button @click="counterB.inc">增加 5</button>
    <button @click="counterB.reset">歸零</button>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  // 定義可複用的 Composable 函式
  function useCounter(initialVal = 0, step = 1) {
    const count = ref(initialVal);
    const inc = () => { count.value += step; };
    const reset = () => { count.value = initialVal; };
    return { count, inc, reset };
  }

  createApp({
    setup() {
      // 呼叫兩次，各自擁有獨立狀態
      const counterA = useCounter(0, 1);
      const counterB = useCounter(10, 5);

      return {
        counterA,
        counterB
      };
    }
  }).mount('#app');
</script>`,
    solutionCode: `<div id="app">
  <h3>Composable 邏輯複用實戰</h3>

  <div style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; margin-bottom: 10px;">
    <h4>A 主機計數：{{ counterA.count }}</h4>
    <button @click="counterA.inc">增加 1</button>
    <button @click="counterA.reset">歸零</button>
  </div>

  <div style="padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px;">
    <h4>B 主機計數（每次加 5）：{{ counterB.count }}</h4>
    <button @click="counterB.inc">增加 5</button>
    <button @click="counterB.reset">歸零</button>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  function useCounter(initialVal = 0, step = 1) {
    const count = ref(initialVal);
    const inc = () => { count.value += step; };
    const reset = () => { count.value = initialVal; };
    return { count, inc, reset };
  }

  createApp({
    setup() {
      const counterA = useCounter(0, 1);
      const counterB = useCounter(10, 5);

      return {
        counterA,
        counterB
      };
    }
  }).mount('#app');
</script>`,
    hints: [
      'Composable 函式返回的響應式 ref 在外部呼叫時依然保持響應性。'
    ]
  },
  {
    id: 'spa-router-vs-iframe',
    category: '系統現代化篇',
    title: '15. 單頁應用 (SPA) 與拆除 iframe 導航思維',
    summary: '深入理解傳統系統使用 iframe 導航的核心痛點，以及如何用 Vue Router 實現無縫平滑的單頁應用。',
    readTime: '7 分鐘',
    concept: `
### 傳統後台系統使用 iframe 的三大痛點
許多傳統專案會使用 \`index.html\` 作為外框，透過 \`<iframe src="page1.html">\` 來切換頁面。看似簡單，但帶來嚴重後遺症：
1. **響應式 (RWD) 的硬傷**：iframe 內部頁面無法感知外部瀏覽器的真實視窗尺寸，導致 CSS 媒體查詢 (Media Queries) 互相衝突打架。
2. **全域狀態嚴重耦合**：子頁面為了拿到登入者資料，被迫寫滿 \`window.parent.userData\` 或 \`window.top.findWindow()\`，元件無法獨立測試與模組化。
3. **頁面效能與重複載入**：每次切換 iframe，子頁面就必須把 jQuery、Bootstrap、CSS 全部重新下載並解析一遍，造成行動端首屏極慢。

### Vue Router 解決方案
在 Vue SPA（單頁應用程式）中：
- 整個網站只有一個 \`index.html\`，所有頁面由 **Vue Router** 動態抽換。
- 透過 \`<router-view></router-view>\` 作為視圖容器。
- 透過 \`<router-link to="/devices">\` 導航，切換時只抽換組件，**不重新整理整個瀏覽器，秒開且資料完全共享**！
    `,
    task: `
任務指引：
1. 體驗右側模擬的 SPA 路由切換機制。
2. 點擊「設備監控」與「系統告警」選單，觀察視圖如何在不重新整理頁面的情況下平滑抽換。
    `,
    starterCode: `<div id="app">
  <div style="display: flex; gap: 10px; margin-bottom: 15px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
    <button 
      @click="currentRoute = 'devices'"
      :style="{ fontWeight: currentRoute === 'devices' ? 'bold' : 'normal', color: currentRoute === 'devices' ? '#42b883' : '#64748b' }">
      設備監控清單
    </button>
    <button 
      @click="currentRoute = 'alarms'"
      :style="{ fontWeight: currentRoute === 'alarms' ? 'bold' : 'normal', color: currentRoute === 'alarms' ? '#42b883' : '#64748b' }">
      即時告警中心
    </button>
  </div>

  <!-- 模擬 RouterView：依當前路徑渲染不同組件 -->
  <div style="padding: 16px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
    <component :is="activeComponent"></component>
  </div>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  // 定義兩個不同路由對應的頁面組件
  const DevicesPage = {
    template: '<div><h4>設備列表</h4><p>在線設備：12 台 | 離線設備：0 台</p></div>'
  };

  const AlarmsPage = {
    template: '<div><h4>即時告警</h4><p style="color: #ef4444;">目前系統運行正常，無未處理告警。</p></div>'
  };

  createApp({
    setup() {
      const currentRoute = ref('devices');

      const activeComponent = computed(() => {
        return currentRoute.value === 'devices' ? DevicesPage : AlarmsPage;
      });

      return {
        currentRoute,
        activeComponent
      };
    }
  }).mount('#app');
</script>`,
    solutionCode: `<div id="app">
  <div style="display: flex; gap: 10px; margin-bottom: 15px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
    <button 
      @click="currentRoute = 'devices'"
      :style="{ fontWeight: currentRoute === 'devices' ? 'bold' : 'normal', color: currentRoute === 'devices' ? '#42b883' : '#64748b' }">
      設備監控清單
    </button>
    <button 
      @click="currentRoute = 'alarms'"
      :style="{ fontWeight: currentRoute === 'alarms' ? 'bold' : 'normal', color: currentRoute === 'alarms' ? '#42b883' : '#64748b' }">
      即時告警中心
    </button>
  </div>

  <div style="padding: 16px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
    <component :is="activeComponent"></component>
  </div>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  const DevicesPage = {
    template: '<div><h4>設備列表</h4><p>在線設備：12 台 | 離線設備：0 台</p></div>'
  };

  const AlarmsPage = {
    template: '<div><h4>即時告警</h4><p style="color: #ef4444;">目前系統運行正常，無未處理告警。</p></div>'
  };

  createApp({
    setup() {
      const currentRoute = ref('devices');

      const activeComponent = computed(() => {
        return currentRoute.value === 'devices' ? DevicesPage : AlarmsPage;
      });

      return {
        currentRoute,
        activeComponent
      };
    }
  }).mount('#app');
</script>`,
    hints: [
      'SPA 的核心本質就是：頁面外框不重載，透過 JS 狀態動態抽換內容組件。'
    ]
  },
  {
    id: 'hash-router-vs-history',
    category: '系統現代化篇',
    title: '16. 路由歷史模式：為什麼內網系統推薦 Hash 模式？',
    summary: '搞懂 createWebHistory 與 createWebHashHistory 的差別，以及為什麼在舊伺服器環境中 Hash 模式是零風險上線的最佳選擇。',
    readTime: '6 分鐘',
    concept: `
### History 模式 vs Hash 模式

#### 1. HTML5 History 模式 (\`createWebHistory\`)
- 網址外觀：\`https://example.com/devices/123\`
- **致命前置條件**：必須在後端伺服器（Nginx、Apache 或 Node）配置 **URL 重寫 (Rewrite Rule)**。
  因為當使用者在 \`/devices/123\` 按下 F5 重新整理時，瀏覽器會向伺服器請求該路徑，若伺服器沒有把請求導回 \`index.html\`，就會直接噴 **404 Not Found**！

#### 2. Hash 模式 (\`createWebHashHistory\`)
- 網址外觀：\`https://example.com/#/devices/123\`
- 核心優勢：**\`#\` 井字號後面的路徑，瀏覽器永遠不會發送給後端伺服器！**
  所有的路由全在客戶端瀏覽器內部解析。

### 為什麼改造傳統後台時極力推薦 Hash 模式？
在許多既有企業系統中，後端採用嵌入式 Jetty、舊版 Tomcat 或單純的靜態檔案伺服器，**根本沒有設定 SPA 重寫規則**。
如果貿然採用 History 模式，就必須動用後端工程師去改伺服器配置。
而採用 **Hash 模式搭配 \`base: './'\` 相對路徑**，前端建置產物丟進任何子資料夾就能直接跑，完全不需要修改任何後端設定！
    `,
    task: `
任務指引：
1. 觀察頁面中模擬的 URL Hash 變化。
2. 點擊不同頁面按鈕，觀察 window.location.hash 是如何帶動頁面即時變更的。
    `,
    starterCode: `<div id="app">
  <h3>Hash 路由運作原理展示</h3>
  <p>模擬目前瀏覽器網址：<code>http://localhost:8080/#/{{ activeHash }}</code></p>

  <div style="margin: 15px 0;">
    <button @click="navigate('dashboard')">前往 /#/dashboard</button>
    <button @click="navigate('device-list')">前往 /#/device-list</button>
    <button @click="navigate('user-profile')">前往 /#/user-profile</button>
  </div>

  <div style="padding: 14px; background: #f1f5f9; border-left: 4px solid #3b82f6;">
    當前顯示頁面：<strong>{{ pageTitle }}</strong>
  </div>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  createApp({
    setup() {
      const activeHash = ref('dashboard');

      const navigate = (hash) => {
        activeHash.value = hash;
      };

      const pageTitle = computed(() => {
        switch(activeHash.value) {
          case 'device-list': return '設備清單頁面';
          case 'user-profile': return '個人資料設定頁面';
          default: return '總覽儀表板頁面';
        }
      });

      return {
        activeHash,
        navigate,
        pageTitle
      };
    }
  }).mount('#app');
</script>`,
    solutionCode: `<div id="app">
  <h3>Hash 路由運作原理展示</h3>
  <p>模擬目前瀏覽器網址：<code>http://localhost:8080/#/{{ activeHash }}</code></p>

  <div style="margin: 15px 0;">
    <button @click="navigate('dashboard')">前往 /#/dashboard</button>
    <button @click="navigate('device-list')">前往 /#/device-list</button>
    <button @click="navigate('user-profile')">前往 /#/user-profile</button>
  </div>

  <div style="padding: 14px; background: #f1f5f9; border-left: 4px solid #3b82f6;">
    當前顯示頁面：<strong>{{ pageTitle }}</strong>
  </div>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  createApp({
    setup() {
      const activeHash = ref('dashboard');

      const navigate = (hash) => {
        activeHash.value = hash;
      };

      const pageTitle = computed(() => {
        switch(activeHash.value) {
          case 'device-list': return '設備清單頁面';
          case 'user-profile': return '個人資料設定頁面';
          default: return '總覽儀表板頁面';
        }
      });

      return {
        activeHash,
        navigate,
        pageTitle
      };
    }
  }).mount('#app');
</script>`,
    hints: [
      'Hash 模式在任何環境下按重新整理都不會報 404，是舊系統升級最安全的手段。'
    ]
  },
  {
    id: 'router-guards-auth',
    category: '系統現代化篇',
    title: '17. 路由守衛與權限驗證 (beforeEach 與 meta)',
    summary: '未登入不能看內部頁面！學習使用 Vue Router 全域前置守衛 beforeEach 檢查 Token 與自動導向。',
    readTime: '7 分鐘',
    concept: `
### 什麼是路由守衛 (Navigation Guards)？
在商業系統中，許多頁面（如設備列表、系統設定）必須驗證登入身分才允許存取。
Vue Router 提供了 \`router.beforeEach\` 全域鉤子，在每一次路由切換前進行檢查與攔截。

### 路由 meta 定義公開頁面
我們可以在路由表中加上 \`meta\` 屬性標記：
\`\`\`javascript
const routes = [
  { path: '/login', component: Login, meta: { public: true } },
  { path: '/devices', component: Devices, meta: { public: false } }
];
\`\`\`

### 經典登入守衛邏輯
\`\`\`javascript
router.beforeEach((to, from) => {
  const token = localStorage.getItem('auth_token');

  // 如果目標頁面不是公開頁面，且使用者尚未登入
  if (!to.meta.public && !token) {
    // 攔截並導回登入頁，同時把原本要去的路徑存入 query.r
    return { path: '/login', query: { r: to.fullPath } };
  }
});
\`\`\`
當使用者在登入頁成功登入後，就能精準導回原本想去的頁面（例如 \`/devices\`）。
    `,
    task: `
任務指引：
1. 目前系統處於「未登入狀態」。
2. 嘗試點擊進入「受保護的內部設備清單」，觀察守衛如何自動攔截並強制跳轉至登入頁。
3. 點擊「模擬登入」後，再次點擊即可暢行無阻！
    `,
    starterCode: `<div id="app">
  <h3>導航守衛權限模擬器</h3>
  <div style="margin-bottom: 12px;">
    目前登入狀態：<strong>{{ isAuthed ? '已登入 (Token 存在)' : '未登入 (無 Token)' }}</strong>
    <button @click="isAuthed = !isAuthed" style="margin-left: 10px;">
      {{ isAuthed ? '登出系統' : '模擬成功登入' }}
    </button>
  </div>

  <div style="display: flex; gap: 8px; margin-bottom: 15px;">
    <button @click="tryNavigate('home', true)">前往 公開首頁 (免登入)</button>
    <button @click="tryNavigate('devices', false)">前往 內部設備頁 (需登入)</button>
    <button @click="tryNavigate('settings', false)">前往 系統設定頁 (需登入)</button>
  </div>

  <div style="padding: 14px; border-radius: 6px; background: #f8fafc; border: 1px solid #cbd5e1;">
    <p>目前所在頁面：<strong>{{ currentPage }}</strong></p>
    <p v-if="guardMessage" style="color: #ef4444; font-weight: bold;">
      攔截通知：{{ guardMessage }}
    </p>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const isAuthed = ref(false);
      const currentPage = ref('公開首頁');
      const guardMessage = ref('');

      // 模擬 beforeEach 路由守衛
      const tryNavigate = (pageKey, isPublic) => {
        guardMessage.value = '';

        if (!isPublic && !isAuthed.value) {
          guardMessage.value = '權限不足！偵測到尚未登入，路由守衛自動攔截並跳轉至登入頁。';
          currentPage.value = '登入頁面 (Login)';
          return;
        }

        currentPage.value = pageKey === 'home' ? '公開首頁' : pageKey === 'devices' ? '內部設備管理頁' : '系統後台設定頁';
      };

      return {
        isAuthed,
        currentPage,
        guardMessage,
        tryNavigate
      };
    }
  }).mount('#app');
</script>`,
    solutionCode: `<div id="app">
  <h3>導航守衛權限模擬器</h3>
  <div style="margin-bottom: 12px;">
    目前登入狀態：<strong>{{ isAuthed ? '已登入 (Token 存在)' : '未登入 (無 Token)' }}</strong>
    <button @click="isAuthed = !isAuthed" style="margin-left: 10px;">
      {{ isAuthed ? '登出系統' : '模擬成功登入' }}
    </button>
  </div>

  <div style="display: flex; gap: 8px; margin-bottom: 15px;">
    <button @click="tryNavigate('home', true)">前往 公開首頁 (免登入)</button>
    <button @click="tryNavigate('devices', false)">前往 內部設備頁 (需登入)</button>
    <button @click="tryNavigate('settings', false)">前往 系統設定頁 (需登入)</button>
  </div>

  <div style="padding: 14px; border-radius: 6px; background: #f8fafc; border: 1px solid #cbd5e1;">
    <p>目前所在頁面：<strong>{{ currentPage }}</strong></p>
    <p v-if="guardMessage" style="color: #ef4444; font-weight: bold;">
      攔截通知：{{ guardMessage }}
    </p>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const isAuthed = ref(false);
      const currentPage = ref('公開首頁');
      const guardMessage = ref('');

      const tryNavigate = (pageKey, isPublic) => {
        guardMessage.value = '';

        if (!isPublic && !isAuthed.value) {
          guardMessage.value = '權限不足！偵測到尚未登入，路由守衛自動攔截並跳轉至登入頁。';
          currentPage.value = '登入頁面 (Login)';
          return;
        }

        currentPage.value = pageKey === 'home' ? '公開首頁' : pageKey === 'devices' ? '內部設備管理頁' : '系統後台設定頁';
      };

      return {
        isAuthed,
        currentPage,
        guardMessage,
        tryNavigate
      };
    }
  }).mount('#app');
</script>`,
    hints: [
      '透過 beforeEach 可以在使用者點擊連結的第一時間攔截，保護內部機密頁面。'
    ]
  },
  {
    id: 'pinia-state-management',
    category: '系統現代化篇',
    title: '18. 全局狀態管理：Pinia 核心實戰',
    summary: '徹底告別 window.parent 與全域變數混亂！學習使用官方推薦的 Pinia Store 集中管理 Token、使用者資訊與跨頁資料。',
    readTime: '7 分鐘',
    concept: `
### 傳統系統全域變數的災難
傳統專案常把登入資訊直接掛在全域：
\`\`\`javascript
// 傳統危險寫法：任何腳本都能隨意修改，出 Bug 找不到源頭
window.userData = { name: 'admin', role: 'root' };
window.token = 'abc123xyz';
\`\`\`
跨頁面時還得透過 \`window.parent\` 存取，極易發生 undefined 錯誤。

### 現代狀態管理標準：Pinia
Pinia 是 Vue 官方推薦的狀態管理庫：
1. **定義 Store**：使用 \`defineStore('auth', () => { ... })\`。
2. **三核心要素**：
   - **State**：存放資料（如 \`token\`, \`user\`）。
   - **Getters**：衍生計算（如 \`isLoggedIn\`）。
   - **Actions**：業務方法（如 \`login()\`, \`logout()\`）。
3. **跨組件自由取用**：任何組件只需 \`const auth = useAuthStore()\` 就能取得最新資料，資料修改時全站所有使用到的畫面自動連動更新！
    `,
    task: `
任務指引：
1. 觀察右側模擬的 Pinia 集中式狀態庫。
2. 在頂部修改使用者名稱或登入狀態，觀察下方兩個不同的子組件如何即時同步更新！
    `,
    starterCode: `<div id="app">
  <h3>Pinia 全局狀態集中管理模擬</h3>

  <div style="padding: 12px; background: #e0f2fe; border-radius: 6px; margin-bottom: 15px;">
    <strong>全域 Store 控制台：</strong>
    <button @click="authStore.login('系統工程師 Alex')">登入帳號</button>
    <button @click="authStore.logout">登出帳號</button>
  </div>

  <!-- 組件 1：頂部導覽列頭像 -->
  <div style="padding: 10px; border: 1px solid #cbd5e1; margin-bottom: 10px; border-radius: 6px;">
    <span>【導覽列組件】狀態：{{ authStore.isAuthed ? '在線' : '離線' }} | 使用者：{{ authStore.username }}</span>
  </div>

  <!-- 組件 2：主內容操作頁 -->
  <div style="padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px;">
    <span>【儀表板組件】歡迎詞：{{ authStore.isAuthed ? '歡迎回來，' + authStore.username : '請先點擊上方登入' }}</span>
  </div>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  // 模擬 Pinia Store 的封裝
  function createAuthStore() {
    const username = ref('訪客');
    const token = ref(null);

    const isAuthed = computed(() => !!token.value);

    const login = (name) => {
      username.value = name;
      token.value = 'jwt_token_sample_12345';
    };

    const logout = () => {
      username.value = '訪客';
      token.value = null;
    };

    return { username, token, isAuthed, login, logout };
  }

  createApp({
    setup() {
      // 實例化全域單例 Store
      const authStore = createAuthStore();

      return {
        authStore
      };
    }
  }).mount('#app');
</script>`,
    solutionCode: `<div id="app">
  <h3>Pinia 全局狀態集中管理模擬</h3>

  <div style="padding: 12px; background: #e0f2fe; border-radius: 6px; margin-bottom: 15px;">
    <strong>全域 Store 控制台：</strong>
    <button @click="authStore.login('系統工程師 Alex')">登入帳號</button>
    <button @click="authStore.logout">登出帳號</button>
  </div>

  <div style="padding: 10px; border: 1px solid #cbd5e1; margin-bottom: 10px; border-radius: 6px;">
    <span>【導覽列組件】狀態：{{ authStore.isAuthed ? '在線' : '離線' }} | 使用者：{{ authStore.username }}</span>
  </div>

  <div style="padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px;">
    <span>【儀表板組件】歡迎詞：{{ authStore.isAuthed ? '歡迎回來，' + authStore.username : '請先點擊上方登入' }}</span>
  </div>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  function createAuthStore() {
    const username = ref('訪客');
    const token = ref(null);

    const isAuthed = computed(() => !!token.value);

    const login = (name) => {
      username.value = name;
      token.value = 'jwt_token_sample_12345';
    };

    const logout = () => {
      username.value = '訪客';
      token.value = null;
    };

    return { username, token, isAuthed, login, logout };
  }

  createApp({
    setup() {
      const authStore = createAuthStore();

      return {
        authStore
      };
    }
  }).mount('#app');
</script>`,
    hints: [
      'Pinia 讓資料不用層層傳遞，跨頁面、跨組件只要引入同一個 Store 即可隨取隨用。'
    ]
  },
  {
    id: 'axios-interceptor-api',
    category: '系統現代化篇',
    title: '19. 現代 API 層封裝：Axios 攔截器與 Token 處理',
    summary: '淘汰舊式 $.ajax 回呼地獄！學習封裝 Axios 實例，透過 Request 攔截器自動附帶 Token，透過 Response 攔截器自動處理 401 登出。',
    readTime: '8 分鐘',
    concept: `
### 為什麼要淘汰 $.ajax？
舊系統常看到滿滿的 \`$.ajax({ url, success: function(res) { ... } })\`，除了無法妥善使用現代 \`async/await\` 語法外，最大問題是：**每支 API 都必須手動傳遞 Token、手動檢查錯誤碼**，漏寫一個就會引發資安或崩潰問題。

### 現代 API 模組化封裝三步驟
1. **建立專屬實例 (Instance)**：
   \`\`\`javascript
   const http = axios.create({ baseURL: '/api', timeout: 10000 });
   \`\`\`
2. **Request 請求攔截器 (攔截出站)**：
   在送出請求前，自動從儲存庫取出 Token 並塞入 Header：
   \`\`\`javascript
   http.interceptors.request.use(config => {
     const token = localStorage.getItem('token');
     if (token) config.headers.Authorization = token;
     return config;
   });
   \`\`\`
3. **Response 回應攔截器 (攔截進站)**：
   統一處理 HTTP 401 / 403 憑證過期，或在後端習慣回傳 \`{ result: 1 }\` 時自動 throw 例外，讓前端頁面只需寫乾淨的 \`try/catch\`！
    `,
    task: `
任務指引：
1. 查看右側模擬的 Axios 攔截器管道。
2. 點擊「送出帶有 Token 的請求」與「模擬 Token 過期 401」，體會攔截器自動為開發者省下的龐大重複代碼！
    `,
    starterCode: `<div id="app">
  <h3>API 請求攔截器管道展示</h3>

  <div style="margin-bottom: 15px;">
    <button @click="sendRequest(false)">正常發送 API 請求</button>
    <button @click="sendRequest(true)">模擬 Token 過期 (401 錯誤)</button>
  </div>

  <div style="padding: 12px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px;">
    <p><strong>請求紀錄 Log：</strong></p>
    <ul>
      <li v-for="(log, i) in requestLogs" :key="i">{{ log }}</li>
    </ul>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const requestLogs = ref([]);

      // 模擬攔截器發送邏輯
      const sendRequest = (isExpired) => {
        requestLogs.value = [];

        // 1. Request 攔截器階段
        requestLogs.value.push('[Request 攔截器] 檢查 Token... 自動注入 Header: Authorization: sample_token_8899');

        // 2. 模擬網路發送
        setTimeout(() => {
          if (isExpired) {
            // 3. Response 攔截器階段 (異常)
            requestLogs.value.push('[Response 攔截器] 收到 401 授權過期！自動清除本地 Token 並準備重導向至登入頁。');
          } else {
            // 3. Response 攔截器階段 (正常)
            requestLogs.value.push('[Response 攔截器] 收到 200 OK，unwrap 資料成功解包傳回組件！');
          }
        }, 300);
      };

      return {
        requestLogs,
        sendRequest
      };
    }
  }).mount('#app');
</script>`,
    solutionCode: `<div id="app">
  <h3>API 請求攔截器管道展示</h3>

  <div style="margin-bottom: 15px;">
    <button @click="sendRequest(false)">正常發送 API 請求</button>
    <button @click="sendRequest(true)">模擬 Token 過期 (401 錯誤)</button>
  </div>

  <div style="padding: 12px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px;">
    <p><strong>請求紀錄 Log：</strong></p>
    <ul>
      <li v-for="(log, i) in requestLogs" :key="i">{{ log }}</li>
    </ul>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const requestLogs = ref([]);

      const sendRequest = (isExpired) => {
        requestLogs.value = [];

        requestLogs.value.push('[Request 攔截器] 檢查 Token... 自動注入 Header: Authorization: sample_token_8899');

        setTimeout(() => {
          if (isExpired) {
            requestLogs.value.push('[Response 攔截器] 收到 401 授權過期！自動清除本地 Token 並準備重導向至登入頁。');
          } else {
            requestLogs.value.push('[Response 攔截器] 收到 200 OK，unwrap 資料成功解包傳回組件！');
          }
        }, 300);
      };

      return {
        requestLogs,
        sendRequest
      };
    }
  }).mount('#app');
</script>`,
    hints: [
      '透過 Axios 攔截器，全專案幾百個 API 請求都不需要重複手寫 Token 設定與 401 判斷。'
    ]
  },
  {
    id: 'mock-mode-architecture',
    category: '架構實戰篇',
    title: '20. 隔離開發技巧：Mock 模式與環境切換',
    summary: '後端機台還沒準備好怎麼辦？學習透過環境變數無縫切換 Mock 資料與真實 API，實現前端零依賴獨立開發。',
    readTime: '6 分鐘',
    concept: `
### 為什麼企業開發極度需要 Mock 模式？
在硬體、物聯網、廠區監控等專案中，開發者常常無法隨時連線到實體機台（可能在現場內網、或者機台尚未通電）。
若前端完全依賴真實機台才能開發，專案進度會嚴重卡死。

### 優秀的 Mock 架構原則
1. **形狀完全對齊真實 API**：Mock 回傳的 JSON 欄位名稱必須與後端規格 100% 一致。
2. **切換時零改動組件**：透過 \`VITE_USE_MOCK=true\` 或 \`false\` 環境變數，由 API 轉接層自動決定返回真實請求還是假資料，Vue 畫面組件完全不需要改動任何一行代碼！
    `,
    task: `
任務指引：
1. 觀察畫面上的「資料來源切換開關」。
2. 切換為 Mock 模式與真實 API 模式，體驗前端如何做到無縫隔離開發！
    `,
    starterCode: `<div id="app">
  <h3>Mock 模式切換架構展示</h3>

  <div style="padding: 10px; background: #f1f5f9; border-radius: 6px; margin-bottom: 12px;">
    目前資料來源模式：
    <strong :style="{ color: isMock ? '#f59e0b' : '#3b82f6' }">
      {{ isMock ? '示範 Mock 假資料模式 (不連真實機台)' : '真實連線模式 (直接呼叫後端 API)' }}
    </strong>
    <br />
    <button @click="isMock = !isMock" style="margin-top: 8px;">
      切換為 {{ isMock ? '真實 API' : 'Mock 模式' }}
    </button>
  </div>

  <h4>設備即時讀值：</h4>
  <ul>
    <li v-for="dev in devices" :key="dev.id">
      {{ dev.name }} - 狀態：{{ dev.status }} (溫度：{{ dev.temp }} 度)
    </li>
  </ul>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  createApp({
    setup() {
      const isMock = ref(true);

      const mockData = [
        { id: 'dev-01', name: '1 號發電機 (模擬)', status: '正常', temp: 42.5 },
        { id: 'dev-02', name: '2 號水冷主機 (模擬)', status: '運轉中', temp: 18.2 }
      ];

      const realData = [
        { id: 'dev-01', name: '現場 1 號實體機台', status: '在線', temp: 46.1 },
        { id: 'dev-02', name: '現場 2 號實體機台', status: '在線', temp: 19.8 }
      ];

      const devices = computed(() => isMock.value ? mockData : realData);

      return {
        isMock,
        devices
      };
    }
  }).mount('#app');
</script>`,
    solutionCode: `<div id="app">
  <h3>Mock 模式切換架構展示</h3>

  <div style="padding: 10px; background: #f1f5f9; border-radius: 6px; margin-bottom: 12px;">
    目前資料來源模式：
    <strong :style="{ color: isMock ? '#f59e0b' : '#3b82f6' }">
      {{ isMock ? '示範 Mock 假資料模式 (不連真實機台)' : '真實連線模式 (直接呼叫後端 API)' }}
    </strong>
    <br />
    <button @click="isMock = !isMock" style="margin-top: 8px;">
      切換為 {{ isMock ? '真實 API' : 'Mock 模式' }}
    </button>
  </div>

  <h4>設備即時讀值：</h4>
  <ul>
    <li v-for="dev in devices" :key="dev.id">
      {{ dev.name }} - 狀態：{{ dev.status }} (溫度：{{ dev.temp }} 度)
    </li>
  </ul>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  createApp({
    setup() {
      const isMock = ref(true);

      const mockData = [
        { id: 'dev-01', name: '1 號發電機 (模擬)', status: '正常', temp: 42.5 },
        { id: 'dev-02', name: '2 號水冷主機 (模擬)', status: '運轉中', temp: 18.2 }
      ];

      const realData = [
        { id: 'dev-01', name: '現場 1 號實體機台', status: '在線', temp: 46.1 },
        { id: 'dev-02', name: '現場 2 號實體機台', status: '在線', temp: 19.8 }
      ];

      const devices = computed(() => isMock.value ? mockData : realData);

      return {
        isMock,
        devices
      };
    }
  }).mount('#app');
</script>`,
    hints: [
      '透過封裝好的 API 層切換 Mock，能讓前端團隊在後端未完成前提前 100% 交付 UI 與功能。'
    ]
  },
  {
    id: 'realtime-stomp-websocket',
    category: '架構實戰篇',
    title: '21. 即時推播通訊：WebSocket 與 STOMP 協定實戰',
    summary: '工業監控與儀表板的核心！理解 WebSocket 雙向通道，學習就地更新 (In-place update) 避免清單閃爍重繪。',
    readTime: '8 分鐘',
    concept: `
### HTTP 輪詢 vs WebSocket 即時推播
- **HTTP 輪詢 (Polling)**：瀏覽器每 3 秒發一次 GET 請求向伺服器問「有新數據嗎？」，浪費伺服器資源與頻寬。
- **WebSocket 雙向長連線**：連線建立後通道永遠保持暢通，伺服器一有感測器數據變更，主動推播給瀏覽器。

### 什麼是 STOMP 協定？
WebSocket 只定義了傳輸通道，而 **STOMP (Simple Text Oriented Messaging Protocol)** 是在 WebSocket 之上定義了「發布/訂閱 (Pub/Sub)」標準訊息格式（如訂閱 \`/topic/device_values\`）。

### 關鍵效能心法：就地更新 (In-place Update)
當每秒有數十筆感測器數值推播進來時，**千萬不能把整包設備清單重新請求或重設**，否則畫面會瘋狂閃爍重繪！
正確做法是：**直接找到該設備的物件，僅更新其數值欄位（\`device.val = newVal\`）**，Vue 的細粒度響應系統只會重繪該數值節點，效能極高。
    `,
    task: `
任務指引：
1. 觀察頁面中模擬的感測器就地即時推播。
2. 點擊「模擬接收推播封包」，觀察數字變更時，清單完全不閃爍、平滑就地更新的效果！
    `,
    starterCode: `<div id="app">
  <h3>即時數據就地更新 (In-Place Update) 展示</h3>

  <button @click="simulateIncomingPush">模擬接收機台即時推播封包</button>

  <div style="margin-top: 15px;">
    <div 
      v-for="item in sensorList" 
      :key="item.id"
      style="display: flex; justify-content: space-between; padding: 10px; border-bottom: 1px solid #e2e8f0;">
      <span>{{ item.title }}</span>
      <strong style="color: #42b883; font-family: monospace;">{{ item.currentValue }} {{ item.unit }}</strong>
    </div>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const sensorList = ref([
        { id: 'sensor-1', title: '高壓變壓器溫度', currentValue: 54.2, unit: '度' },
        { id: 'sensor-2', title: '太陽能發電瞬間功率', currentValue: 128.5, unit: 'kW' },
        { id: 'sensor-3', title: '自來水進水流量', currentValue: 3.8, unit: 'm3/h' }
      ]);

      // 模擬收到 STOMP 推播封包時的就地更新
      const simulateIncomingPush = () => {
        // 隨機挑選一個感測器就地更新數值
        const target = sensorList.value[Math.floor(Math.random() * sensorList.value.length)];
        target.currentValue = +(target.currentValue + (Math.random() * 2 - 1)).toFixed(1);
      };

      return {
        sensorList,
        simulateIncomingPush
      };
    }
  }).mount('#app');
</script>`,
    solutionCode: `<div id="app">
  <h3>即時數據就地更新 (In-Place Update) 展示</h3>

  <button @click="simulateIncomingPush">模擬接收機台即時推播封包</button>

  <div style="margin-top: 15px;">
    <div 
      v-for="item in sensorList" 
      :key="item.id"
      style="display: flex; justify-content: space-between; padding: 10px; border-bottom: 1px solid #e2e8f0;">
      <span>{{ item.title }}</span>
      <strong style="color: #42b883; font-family: monospace;">{{ item.currentValue }} {{ item.unit }}</strong>
    </div>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const sensorList = ref([
        { id: 'sensor-1', title: '高壓變壓器溫度', currentValue: 54.2, unit: '度' },
        { id: 'sensor-2', title: '太陽能發電瞬間功率', currentValue: 128.5, unit: 'kW' },
        { id: 'sensor-3', title: '自來水進水流量', currentValue: 3.8, unit: 'm3/h' }
      ]);

      const simulateIncomingPush = () => {
        const target = sensorList.value[Math.floor(Math.random() * sensorList.value.length)];
        target.currentValue = +(target.currentValue + (Math.random() * 2 - 1)).toFixed(1);
      };

      return {
        sensorList,
        simulateIncomingPush
      };
    }
  }).mount('#app');
</script>`,
    hints: [
      '就地更新 (In-place update) 保留了原始 DOM 結構，避免大量推播造成瀏覽器 CPU 飆高。'
    ]
  },
  {
    id: 'design-tokens-themes',
    category: '架構實戰篇',
    title: '22. 企業級主題架構：CSS 變數與設計代碼 (Design Tokens)',
    summary: '多品牌與深淺色主題的終極解法！學習使用 CSS 自訂屬性 (Tokens) 實現一鍵換膚，收斂重複的樣式檔案。',
    readTime: '6 分鐘',
    concept: `
### 傳統多品牌換皮的痛點
許多傳統系統為了支援 5 個不同客戶的品牌配色，會將整份 CSS 複製 5 次（Skin 複製）。
這會導致：**一個簡單的按鈕樣式修改，工程師必須手動同步 5 次！**

### 現代解法：CSS Variables 設計代碼 (Design Tokens)
只保留一份核心樣式，把所有顏色、圓角、字級抽成 CSS 變數：
\`\`\`css
:root {
  --theme-primary: #214d7c;
  --theme-bg: #ffffff;
  --theme-text: #212529;
}

body.dark {
  --theme-bg: #060709;
  --theme-text: #f8fafc;
}
\`\`\`
所有元件直接使用 \`var(--theme-primary)\`，換主題只需要在 \`<body>\` 切換 class，或是替換一套主題變數，程式碼重複度直接降低 85%！
    `,
    task: `
任務指引：
1. 觀察頁面中只依靠 CSS 變數實現的主題切換。
2. 點擊「切換品牌風格」按鈕，體驗一鍵全站變色的強大威力！
    `,
    starterCode: `<div id="app" :style="currentTheme">
  <div style="padding: 16px; border: 1px solid var(--border); background: var(--bg); color: var(--text); border-radius: 8px;">
    <h3>品牌主題切換實戰展示</h3>
    <p>目前套用配色方案：<strong>{{ themeName }}</strong></p>

    <button @click="toggleTheme" style="background: var(--primary); color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer;">
      點我切換品牌色彩
    </button>
  </div>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  createApp({
    setup() {
      const isBrandB = ref(false);

      const toggleTheme = () => {
        isBrandB.value = !isBrandB.value;
      };

      const themeName = computed(() => isBrandB.value ? '品牌 B (典雅綠)' : '品牌 A (企業藍)');

      const currentTheme = computed(() => {
        return isBrandB.value ? {
          '--primary': '#42b883',
          '--bg': '#f0fdf4',
          '--text': '#064e3b',
          '--border': '#86efac'
        } : {
          '--primary': '#214d7c',
          '--bg': '#f8fafc',
          '--text': '#0f172a',
          '--border': '#cbd5e1'
        };
      });

      return {
        isBrandB,
        toggleTheme,
        themeName,
        currentTheme
      };
    }
  }).mount('#app');
</script>`,
    solutionCode: `<div id="app" :style="currentTheme">
  <div style="padding: 16px; border: 1px solid var(--border); background: var(--bg); color: var(--text); border-radius: 8px;">
    <h3>品牌主題切換實戰展示</h3>
    <p>目前套用配色方案：<strong>{{ themeName }}</strong></p>

    <button @click="toggleTheme" style="background: var(--primary); color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer;">
      點我切換品牌色彩
    </button>
  </div>
</div>

<script>
  const { createApp, ref, computed } = Vue;

  createApp({
    setup() {
      const isBrandB = ref(false);

      const toggleTheme = () => {
        isBrandB.value = !isBrandB.value;
      };

      const themeName = computed(() => isBrandB.value ? '品牌 B (典雅綠)' : '品牌 A (企業藍)');

      const currentTheme = computed(() => {
        return isBrandB.value ? {
          '--primary': '#42b883',
          '--bg': '#f0fdf4',
          '--text': '#064e3b',
          '--border': '#86efac'
        } : {
          '--primary': '#214d7c',
          '--bg': '#f8fafc',
          '--text': '#0f172a',
          '--border': '#cbd5e1'
        };
      });

      return {
        isBrandB,
        toggleTheme,
        themeName,
        currentTheme
      };
    }
  }).mount('#app');
</script>`,
    hints: [
      '將顏色抽離為 CSS Tokens，不同客戶或深淺色模式再也不需要重複寫 5 份 CSS。'
    ]
  },
  {
    id: 'mobile-first-rwd',
    category: '架構實戰篇',
    title: '23. 行動端適配與 RWD 實戰：Mobile-First 關鍵設計',
    summary: '從桌面到手機的跨越！學習安全區 (safe-area-inset)、最小觸控尺寸 (44px) 與防誤觸放大等實戰技巧。',
    readTime: '7 分鐘',
    concept: `
### 行動端開發的三大實務陷阱
1. **觸控熱區太小**：桌面用滑鼠指標可以精準點選 20px 小按鈕，但在手機上拇指操作需要**最小 44x44px**（\`min-height: 44px\`）。
2. **iOS Safari 輸入框自動放大**：只要 \`<input>\` 的字級小於 16px，iPhone 點擊輸入框時整頁就會自動強制放大，破壞排版！因此行動端輸入框字級**必須維持 16px**。
3. **瀏海與底部指示條 (Home Indicator)**：必須在 CSS 套用安全區變數：
   \`\`\`css
   padding-top: env(safe-area-inset-top);
   padding-bottom: env(safe-area-inset-bottom);
   \`\`\`
   確保底部選單不會被 iPhone 底線遮住。
    `,
    task: `
任務指引：
1. 觀察頁面中示範的行動端友善開關按鈕。
2. 注意其觸控熱區與符合拇指操作的適配規範！
    `,
    starterCode: `<div id="app">
  <h3>行動端友善操作規範展示</h3>

  <div style="margin-bottom: 15px;">
    <p>行動端最小觸控推薦尺寸：<strong>44 x 44 px</strong></p>
    <!-- 友善的大尺寸切換按鈕 -->
    <button 
      @click="toggled = !toggled"
      :style="{
        minHeight: '44px',
        padding: '0 20px',
        background: toggled ? '#42b883' : '#64748b',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        cursor: 'pointer'
      }">
      {{ toggled ? '狀態已開啟 (ON)' : '狀態已關閉 (OFF)' }}
    </button>
  </div>

  <p style="font-size: 14px; color: #64748b;">
    提示：在行動端，輸入框字級務必設定為 16px 以上，可避免 iOS Safari 彈跳縮放整頁。
  </p>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const toggled = ref(false);
      return { toggled };
    }
  }).mount('#app');
</script>`,
    solutionCode: `<div id="app">
  <h3>行動端友善操作規範展示</h3>

  <div style="margin-bottom: 15px;">
    <p>行動端最小觸控推薦尺寸：<strong>44 x 44 px</strong></p>
    <button 
      @click="toggled = !toggled"
      :style="{
        minHeight: '44px',
        padding: '0 20px',
        background: toggled ? '#42b883' : '#64748b',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        cursor: 'pointer'
      }">
      {{ toggled ? '狀態已開啟 (ON)' : '狀態已關閉 (OFF)' }}
    </button>
  </div>

  <p style="font-size: 14px; color: #64748b;">
    提示：在行動端，輸入框字級務必設定為 16px 以上，可避免 iOS Safari 彈跳縮放整頁。
  </p>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const toggled = ref(false);
      return { toggled };
    }
  }).mount('#app');
</script>`,
    hints: [
      '透過維持 44px 最小高度與 16px 字級，能大幅提升在手機上的使用舒適度。'
    ]
  },
  {
    id: 'pwa-service-worker-https',
    category: '架構實戰篇',
    title: '24. 什麼是 PWA？離線快取與 HTTPS 安全限制',
    summary: '理解漸進式網頁應用 (PWA)，搞懂 Service Worker 的離線快取能力，以及為什麼在 HTTP 內網環境無法啟用。',
    readTime: '7 分鐘',
    concept: `
### 什麼是 PWA (Progressive Web App)？
PWA 讓網頁擁有接近原生 App 的體驗：
1. **可安裝至主畫面**：手機瀏覽器會跳出「安裝到桌面」提示，擁有獨立桌面圖示。
2. **離線快取 (Offline Cache)**：在無網路或網路中斷時，依然能打開介面並瀏覽快取資料。

### 核心引擎：Service Worker
Service Worker 是一段獨立運行在瀏覽器後台的腳本，能攔截網頁的所有網路請求並決定是否從快取回傳。

### 關鍵限制：HTTPS 安全上下文 (Secure Context)
這是很多系統導入 PWA 時踩的第一個大坑：
> **瀏覽器嚴格限制：Service Worker 只能在 HTTPS 或 localhost 環境下運作！**
如果企業內部系統是走普通 \`http://192.168.x.x\` 內網 IP，瀏覽器出於資安考量會**直接拒絕註冊 Service Worker**。
因此要完整開啟 PWA，必須配合網通/維運團隊掛上 SSL 憑證 (HTTPS)。前端程式碼必須做好防禦判斷，在無 HTTPS 時靜默降級，不影響主功能！
    `,
    task: `
任務指引：
1. 觀察畫面中展示的 Service Worker 安全環境檢測邏輯。
2. 體會前端如何在不安全的 HTTP 環境下平穩降級，確保基本操作不受影響！
    `,
    starterCode: `<div id="app">
  <h3>PWA 安全上下文環境檢測展示</h3>

  <div style="padding: 12px; border-radius: 6px; background: #f8fafc; border: 1px solid #cbd5e1;">
    <p>目前執行環境是否為 Secure Context (HTTPS / localhost)：</p>
    <strong :style="{ color: isSecure ? '#42b883' : '#ef4444' }">
      {{ isSecure ? '符合安全標準 (支援完整 PWA 離線快取)' : '未採用 HTTPS (PWA 自動靜默降級，主功能正常運作)' }}
    </strong>
  </div>
</div>

<script>
  const { createApp, ref, onMounted } = Vue;

  createApp({
    setup() {
      const isSecure = ref(false);

      onMounted(() => {
        // 檢測瀏覽器是否支援安全上下文
        isSecure.value = window.isSecureContext || window.location.hostname === 'localhost';
      });

      return { isSecure };
    }
  }).mount('#app');
</script>`,
    solutionCode: `<div id="app">
  <h3>PWA 安全上下文環境檢測展示</h3>

  <div style="padding: 12px; border-radius: 6px; background: #f8fafc; border: 1px solid #cbd5e1;">
    <p>目前執行環境是否為 Secure Context (HTTPS / localhost)：</p>
    <strong :style="{ color: isSecure ? '#42b883' : '#ef4444' }">
      {{ isSecure ? '符合安全標準 (支援完整 PWA 離線快取)' : '未採用 HTTPS (PWA 自動靜默降級，主功能正常運作)' }}
    </strong>
  </div>
</div>

<script>
  const { createApp, ref, onMounted } = Vue;

  createApp({
    setup() {
      const isSecure = ref(false);

      onMounted(() => {
        isSecure.value = window.isSecureContext || window.location.hostname === 'localhost';
      });

      return { isSecure };
    }
  }).mount('#app');
</script>`,
    hints: [
      '防禦性程式碼判斷能避免網站在未走 HTTPS 時產生控制台報錯。'
    ]
  },
  {
    id: 'strangler-pattern-migration-report',
    category: '決策與匯報篇',
    title: '25. 舊系統改造策略：絞殺者模式與主管報告指引',
    summary: '如何向主管匯報這套系統該怎麼改成 Vue？學會企業級「絞殺者模式」，避免全部重寫的巨大風險，胸有成竹提出分階段落地計畫！',
    readTime: '10 分鐘',
    concept: `
### 1. 核心大原則：為什麼「千萬不要整套全部重寫」？
當主管問你：「這套舊系統要怎麼改成 Vue？」
初學者最容易犯的錯誤回答是：「我們把所有頁面全部打掉重寫！」
這是極度危險的：
- 既有系統是穩定營運中的業務，有數百個邊界情況與商業規則。
- 一次性大改版工期不可控，往往在半年甚至一年內看不到任何產出，最終專案爛尾。

---

### 2. 什麼是「絞殺者模式 (Strangler Pattern)」？
這是微軟、Martin Fowler 極力推崇的企業現代化遷移模式：
> **像絞殺藤一樣：新功能或新建的 Vue SPA 與舊系統「並存」在同一個伺服器內，逐步蠶食、逐頁平移，最終無痛取代舊系統！**

#### 實戰落地佈局：
\`\`\`
伺服器主機/
├── web/          # 既有舊系統（原封不動，維持既有營運）
└── web/m/        # 新建的 Vue 3 現代化 SPA（本次改造新增）
\`\`\`
兩者部署在一起，吃同一套後端 API，既有功能完全不中斷，新版隨時上線驗收！

---

### 3. 向主管報告時的四階段藍圖 (Phase 0 ~ Phase 4)

#### Phase 0：概念驗證與最小可用產品 (MVP)
- **目標**：用極短時間（例如 1~2 週）建立一個獨立的 Vue 3 行動端 SPA 骨架。
- **亮點**：引入 Vue 3 + Vite + Hash Router + Pinia，實現「首頁、設備列表、登入」基本流轉，先用可運作的成品向主管與利害關係人證明技術可行！

#### Phase 1：抽出共用 API 層（低風險、高效益）
- **痛點**：舊系統的 API 與 \`$.ajax\` 散落在各個 HTML 中。
- **作法**：用現代 Axios 封裝統一的 API 模組（包含 Request / Response 攔截器、Token 集中注入）。
- **效益**：新舊系統都能呼叫同一套 API，後續修改只需改一處。

#### Phase 2：拆除 iframe 導航（關鍵路徑）
- **痛點**：iframe 巢狀是行動化 (RWD) 的最大元兇，全域變數 \`window.parent\` 導致系統無法維護。
- **作法**：用 Vue Router 取代 iframe 切換，將全域變數遷移至 Pinia Store。
- **策略**：先挑選業務單純的一頁（如設備管理頁）做概念驗證 (Spike)，確認工期後逐頁遷移。

#### Phase 3：收斂重複的主題樣式 (Skins)
- **痛點**：5 個客戶版本之間有 85% 代碼是逐字複製貼上。
- **作法**：改用 CSS Variables (Design Tokens) 統一收斂為單一版型，只抽換色票變數，維護成本瞬間降低 80%。

#### Phase 4：推動 HTTPS 與開啟 PWA
- 向維運或網通團隊提出 SSL 憑證支援，為離線存取與桌面安裝做最後收尾。

---

### 4. 主管必問的三大靈魂拷問與標準回答

**問題一：「改這個需要動到後端 Java 程式碼嗎？」**
- **回答**：**完全不需要動任何一行後端程式碼！** 後端現有的 REST API 與 WebSocket 保持 100% 不變，我們只在前端進行架構換皮與 API 封裝對齊。

**問題二：「會不會影響現在線上正在用的使用者？」**
- **回答**：**完全不會！** 我們採用「絞殺者模式」，新版 Vue 應用放在獨立路徑（如 \`/m/\`）與舊系統並存，舊版系統原封不動，使用者想用哪套就用哪套，風險為零。

**問題三：「為什麼有些功能（如複雜自訂報表、資料庫備份）不建議現在移到手機版？」**
- **回答**：在小螢幕手機上做 20 欄複雜報表或誤觸成本極高的資料備份並不符合使用體驗。我們策略性採取**「看與監控移到行動端，繁重設定留在桌面版」**，集中資源把最核心的設備監控與即時告警做到極致！
    `,
    task: `
任務指引：
1. 恭喜你完整掌握了 Vue 3 核心語法與現代化系統改造全貌！
2. 閱讀完本章節的四階段改造藍圖與主管回答指引，你已經具備向團隊與主管提案的專業能力。
    `,
    starterCode: `<div id="app">
  <div style="padding: 16px; border: 2px solid #42b883; border-radius: 8px; background: #f0fdf4;">
    <h3 style="color: #065f46; margin-top: 0;">系統改造提案摘要檢視器</h3>
    <p><strong>核心改造模式：</strong>絞殺者模式 (Strangler Pattern) - 新舊並存零風險</p>
    <p><strong>後端依賴衝擊：</strong>後端程式碼 0 修改，維持既有 REST 與 WebSocket 服務</p>
    <p><strong>架構升級關鍵：</strong>拆除 iframe 導航、Pinia 統一狀態、Axios 模組化封裝、Design Tokens 收斂樣式</p>
    
    <div style="margin-top: 15px; padding-top: 10px; border-top: 1px dashed #86efac;">
      <button @click="showReady = true" style="background: #42b883; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold;">
        驗證我的提案準備度
      </button>
      <p v-if="showReady" style="color: #047857; margin-top: 8px; font-weight: bold;">
        已完全具備向主管匯報 Vue 系統改造方案的專業知識與技術底氣！
      </p>
    </div>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const showReady = ref(false);
      return { showReady };
    }
  }).mount('#app');
</script>`,
    solutionCode: `<div id="app">
  <div style="padding: 16px; border: 2px solid #42b883; border-radius: 8px; background: #f0fdf4;">
    <h3 style="color: #065f46; margin-top: 0;">系統改造提案摘要檢視器</h3>
    <p><strong>核心改造模式：</strong>絞殺者模式 (Strangler Pattern) - 新舊並存零風險</p>
    <p><strong>後端依賴衝擊：</strong>後端程式碼 0 修改，維持既有 REST 與 WebSocket 服務</p>
    <p><strong>架構升級關鍵：</strong>拆除 iframe 導航、Pinia 統一狀態、Axios 模組化封裝、Design Tokens 收斂樣式</p>
    
    <div style="margin-top: 15px; padding-top: 10px; border-top: 1px dashed #86efac;">
      <button @click="showReady = true" style="background: #42b883; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold;">
        驗證我的提案準備度
      </button>
      <p v-if="showReady" style="color: #047857; margin-top: 8px; font-weight: bold;">
        已完全具備向主管匯報 Vue 系統改造方案的專業知識與技術底氣！
      </p>
    </div>
  </div>
</div>

<script>
  const { createApp, ref } = Vue;

  createApp({
    setup() {
      const showReady = ref(false);
      return { showReady };
    }
  }).mount('#app');
</script>`,
    hints: [
      '熟記四階段進程（Phase 0~4）與三不原則（不動後端、不中斷線上營運、不盲目重寫），提案必勝！'
    ]
  }
];

