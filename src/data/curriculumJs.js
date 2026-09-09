// src/data/curriculumJs.js
// JavaScript 邏輯專題篇：惡補前端大腦引擎與 ES6+ 現代語法 (8 單元)

export const jsCurriculum = [
  {
    id: 'js-01-variables-scope',
    category: 'JavaScript 邏輯專題篇',
    title: 'JS 01. 現代變數與作用域：const、let、型別與 Hoisting',
    summary: '告別 var 的痛苦陷阱！深入剖析原始型別與引用型別、暫時性死區 (TDZ) 與區塊級作用域 (Block Scope)。',
    readTime: '9 分鐘',
    concept: `
### 1. 現代前端變數黃金法則：const 優先，let 次之，完全捨棄 var
在 2015 年 (ES6) 之前，JavaScript 只有 \`var\`：
\`\`\`javascript
// 舊時代 var 的兩大地雷：
// 1. 變數提升 (Hoisting)
console.log(x); // 不會報錯！而是輸出 undefined，因為宣告被偷偷拉到最頂端
var x = 10;

// 2. 沒有區塊作用域 (Block Scope)
if (true) {
  var secret = 'abc';
}
console.log(secret); // 'abc'！變數直接洩漏到區塊外面，極易引發全局污染
\`\`\`

#### 現代最佳實務：
- **\`const\`（常數）**：**預設 90% 的情況都該使用它**！宣告後不可重新指派（Assignment）。注意：物件與陣列用 \`const\` 宣告，其內部屬性仍可修改。
- **\`let\`（可變變數）**：僅在確定變數後續會被重新賦值時使用（例如 \`for\` 迴圈計數器、累積數值）。
- **暫時性死區 (TDZ, Temporal Dead Zone)**：\`let\` 與 \`const\` 在宣告之前存取會直接拋出 \`ReferenceError\`，徹底杜絕舊時代未宣告先使用的不良壞習慣！

---

### 2. JavaScript 的兩大型別體系
1. **原始型別 (Primitives)**：按值傳遞 (Pass by Value)。
   - \`string\`, \`number\`, \`boolean\`, \`null\`, \`undefined\`, \`symbol\`, \`bigint\`。
2. **物件引用型別 (Objects / References)**：按記憶體位址傳遞 (Pass by Reference)。
   - \`Object\`, \`Array\`, \`Function\`。
   \`\`\`javascript
   const a = { count: 1 };
   const b = a; // 複製的是同一個記憶體位址！
   b.count = 2;
   console.log(a.count); // 2！a 的內容也被修改了
   \`\`\`

> **對應 Vue 3 的核心觀念**：
> 為什麼 Vue 3 的響應式宣告通常寫 \`const count = ref(0)\`？
> 因為 \`ref\` 回傳的是一個封裝物件，我們修改的是它的內部屬性 \`count.value = 1\`，該物件位址並沒有改變，因此永遠可以使用 \`const\` 宣告！

---

### 3. 權威延伸學習資源
- **MDN Web Docs - JavaScript 變數與資料型別**：https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Data_structures
- **JavaScript.info - 變數宣告與作用域 (中文推薦)**：https://zh.javascript.info/variables
    `,
    task: `
任務指引：
1. 觀察右側編輯器中的 JavaScript 變數運算邏輯。
2. 點擊「執行計算」按鈕，觀察 const 常數與 let 可變變數的運算結果。
3. 體會 const 帶來的代碼穩定性！
    `,
    starterCode: `<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">變數與作用域演練</h3>
  
  <button id="calc-btn" style="padding: 8px 14px; background: #2563eb; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
    執行能源消耗累計
  </button>

  <div id="output" style="margin-top: 14px; padding: 10px; background: #f8fafc; border-radius: 4px; font-size: 14px; color: #334155;">
    等待執行計算...
  </div>
</div>

<script>
  document.getElementById('calc-btn').addEventListener('click', () => {
    // 使用 const 定義固定費率 (不可被竄改)
    const UNIT_PRICE = 3.5; // 每度電 3.5 元
    
    // 使用 let 定義隨計時累加的用電度數
    let totalKwh = 120;
    totalKwh += 80; // 模擬產生新用電

    const totalCost = totalKwh * UNIT_PRICE;

    document.getElementById('output').innerHTML = 
      '累積度數：<strong>' + totalKwh + ' kWh</strong><br>' +
      '電費單價：' + UNIT_PRICE + ' 元/度<br>' +
      '總計金額：<strong style="color: #16a34a;">' + totalCost + ' 元</strong>';
  });
</script>`,
    solutionCode: `<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">變數與作用域演練</h3>
  
  <button id="calc-btn" style="padding: 8px 14px; background: #2563eb; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
    執行能源消耗累計
  </button>

  <div id="output" style="margin-top: 14px; padding: 10px; background: #f8fafc; border-radius: 4px; font-size: 14px; color: #334155;">
    等待執行計算...
  </div>
</div>

<script>
  document.getElementById('calc-btn').addEventListener('click', () => {
    const UNIT_PRICE = 3.5;
    let totalKwh = 120;
    totalKwh += 80;
    const totalCost = totalKwh * UNIT_PRICE;

    document.getElementById('output').innerHTML = 
      '累積度數：<strong>' + totalKwh + ' kWh</strong><br>' +
      '電費單價：' + UNIT_PRICE + ' 元/度<br>' +
      '總計金額：<strong style="color: #16a34a;">' + totalCost + ' 元</strong>';
  });
</script>`,
    hints: [
      '所有不需要被重新指派的變數，一律使用 const 宣告，這是現代 JavaScript 的核心標準。',
      'let 具備區塊級作用域，不會像 var 一樣洩漏到外部甚至覆蓋 window 全域變數。'
    ]
  },
  {
    id: 'js-02-destructuring-spread',
    category: 'JavaScript 邏輯專題篇',
    title: 'JS 02. 解構賦值 (Destructuring) 與展開運算子 (Spread/Rest)',
    summary: '優雅處理 API 回傳資料！掌握物件與陣列解構、預設值指派，以及 ... 展開運算子的淺拷貝與合併技巧。',
    readTime: '9 分鐘',
    concept: `
### 1. 什麼是解構賦值 (Destructuring Assignment)？
在傳統寫法中，要從後端回傳的物件取出資料，需要寫好幾行重複宣告：
\`\`\`javascript
// 傳統寫法
const user = res.data.user;
const name = user.name;
const role = user.role;
const email = user.email;

// 現代解構賦值寫法：一行完成！
const { name, role, email, status = 'active' } = res.data.user;
\`\`\`

#### 物件解構高階技巧：
- **預設值 (Default Values)**：若該屬性為 \`undefined\`，自動套用預設值（例如上例 \`status = 'active'\`）。
- **重新命名 (Aliasing)**：\`const { name: userName } = res.data;\`，將 \`name\` 重新命名為 \`userName\` 避免變數命名衝突。

#### 陣列解構：
\`\`\`javascript
const [firstDevice, secondDevice] = ['冷卻塔', '空調泵'];
\`\`\`

---

### 2. 展開運算子 (Spread / Rest Operator: \`...\`)
三個點點 \`...\` 是現代前端寫法中最常見的符號：
1. **陣列展開與合併**：
   \`\`\`javascript
   const listA = ['機台1', '機台2'];
   const listB = ['機台3', '機台4'];
   const allList = [...listA, ...listB]; // ['機台1', '機台2', '機台3', '機台4']
   \`\`\`
2. **物件淺拷貝與屬性覆蓋**：
   \`\`\`javascript
   const originalConfig = { host: '192.168.1.1', port: 8080, retry: 3 };
   // 快速建立新物件，並只覆蓋特定屬性
   const newConfig = { ...originalConfig, port: 9000 };
   \`\`\`
3. **Rest 剩餘參數**：收集其餘所有傳入參數。
   \`\`\`javascript
   function logAlarms(primaryAlarm, ...otherAlarms) {
     console.log('主要告警：', primaryAlarm);
     console.log('其餘附帶告警：', otherAlarms);
   }
   \`\`\`

---

### 3. 權威延伸學習資源
- **MDN Web Docs - 解構賦值語法詳解**：https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
- **MDN Web Docs - 展開語法 (Spread syntax)**：https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    `,
    task: `
任務指引：
1. 觀察右側編輯器中的 API 回傳處理範例。
2. 點擊「解析設備資料」按鈕，體驗解構賦值如何精準抽取出屬性與套用預設值！
    `,
    starterCode: `<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">解構賦值與展開運算實務</h3>

  <button id="extract-btn" style="padding: 8px 14px; background: #0284c7; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
    解析後端設備詳細資料
  </button>

  <div id="output" style="margin-top: 14px; padding: 12px; background: #f8fafc; border-radius: 6px; font-size: 14px;">
    點擊上方按鈕執行解構...
  </div>
</div>

<script>
  // 模擬後端回傳的複雜監控資料
  const apiResponse = {
    code: 200,
    payload: {
      deviceId: 'DEV-8821',
      spec: {
        model: 'CH-Turbo-500',
        voltage: 380
      },
      tags: ['空調系統', '重大資產']
    }
  };

  document.getElementById('extract-btn').addEventListener('click', () => {
    // 透過多層物件解構，直接抽取核心數值
    const { deviceId, spec: { model, voltage }, location = 'B1 機房 (預設值)' } = apiResponse.payload;

    document.getElementById('output').innerHTML = 
      '設備編號：<strong>' + deviceId + '</strong><br>' +
      '機型型號：' + model + '<br>' +
      '額定電壓：' + voltage + ' V<br>' +
      '安裝位置：<span style="color: #2563eb;">' + location + '</span>';
  });
</script>`,
    solutionCode: `<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">解構賦值與展開運算實務</h3>

  <button id="extract-btn" style="padding: 8px 14px; background: #0284c7; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
    解析後端設備詳細資料
  </button>

  <div id="output" style="margin-top: 14px; padding: 12px; background: #f8fafc; border-radius: 6px; font-size: 14px;">
    點擊上方按鈕執行解構...
  </div>
</div>

<script>
  const apiResponse = {
    code: 200,
    payload: {
      deviceId: 'DEV-8821',
      spec: {
        model: 'CH-Turbo-500',
        voltage: 380
      },
      tags: ['空調系統', '重大資產']
    }
  };

  document.getElementById('extract-btn').addEventListener('click', () => {
    const { deviceId, spec: { model, voltage }, location = 'B1 機房 (預設值)' } = apiResponse.payload;

    document.getElementById('output').innerHTML = 
      '設備編號：<strong>' + deviceId + '</strong><br>' +
      '機型型號：' + model + '<br>' +
      '額定電壓：' + voltage + ' V<br>' +
      '安裝位置：<span style="color: #2563eb;">' + location + '</span>';
  });
</script>`,
    hints: [
      '解構賦值可以深層嵌套：{ spec: { model } } 能直接把 spec 裡面的 model 抽出來。',
      '展開運算子 ... 是建立淺拷貝、避免直接修改原始物件的重要工具。'
    ]
  },
  {
    id: 'js-03-functions-this',
    category: 'JavaScript 邏輯專題篇',
    title: 'JS 03. 函式全解析：箭頭函式、閉包 (Closure) 與 this 之謎',
    summary: '搞懂箭頭函式為什麼沒有自己的 this，以及閉包如何封裝私有狀態，掃除 JavaScript 最棘手的面試與重構難題。',
    readTime: '10 分鐘',
    concept: `
### 1. 傳統函式 vs 現代箭頭函式 (Arrow Functions)
\`\`\`javascript
// 傳統函式宣告
function multiply(a, b) {
  return a * b;
}

// 箭頭函式簡化版：單行表達式自動 return
const multiply = (a, b) => a * b;
\`\`\`

#### 箭頭函式的重大特性差異：
1. **語意簡潔**：單一參數可省括號，單行回傳可省 \`return\` 與花括號。
2. **沒有自己的 \`this\`**：
   - 傳統函式中的 \`this\` 是**動態綁定的**，取決於「是誰呼叫它」（例如在 setTimeout 中常變成 window 或 undefined，導致很多舊程式碼到處寫 \`var self = this\` 或 \`var _that = this\`）。
   - **箭頭函式的 \`this\` 是詞法綁定 (Lexical \`this\`)**：直接繼承自外部定義時的作用域，永遠不會莫名其妙變質！

---

### 2. 什麼是閉包 (Closure)？
**閉包是：一個函式有能力記住並存取其被宣告時所在的外部詞法作用域，即使該外部函式已經執行完畢。**

\`\`\`javascript
function createCounter(initialValue) {
  let count = initialValue; // 私有變數，外部無法直接竄改！

  return {
    increment: () => ++count,
    getValue: () => count
  };
}

const deviceCounter = createCounter(10);
console.log(deviceCounter.increment()); // 11
console.log(deviceCounter.count); // undefined (安全封裝！)
\`\`\`

> **對應 Vue 3 的核心觀念**：
> Vue 3 的 Composition API（如自訂 \`useDeviceList()\` Composable）本質就是大量運用**閉包機制**，在函式內維護響應式狀態並匯出操作方法！

---

### 3. 權威延伸學習資源
- **MDN Web Docs - 箭頭函式語法**：https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- **MDN Web Docs - 深入理解閉包 (Closures)**：https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Closures
    `,
    task: `
任務指引：
1. 觀察右側編輯器中使用閉包所建立的獨立計數器工廠函式。
2. 點擊「累加泵浦 A」與「累加泵浦 B」按鈕。
3. 體驗閉包如何讓兩個設備的運轉時數各自獨立封裝、互不干擾！
    `,
    starterCode: `<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">閉包獨立狀態封裝實作</h3>

  <div style="display: flex; gap: 12px; margin-bottom: 14px;">
    <button id="pump-a-btn" style="padding: 8px 14px; background: #2563eb; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
      泵浦 A 運轉 +1 小時
    </button>
    <button id="pump-b-btn" style="padding: 8px 14px; background: #0284c7; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
      泵浦 B 運轉 +1 小時
    </button>
  </div>

  <div id="status-panel" style="padding: 12px; background: #f8fafc; border-radius: 6px; font-size: 14px;">
    點擊按鈕增加運轉時數...
  </div>
</div>

<script>
  // 閉包工廠函式
  function createHourTracker(deviceName) {
    let hours = 0; // 私有狀態
    
    return function() {
      hours += 1;
      return deviceName + ' 累積運轉：' + hours + ' 小時';
    };
  }

  // 建立兩個完全獨立的閉包實例
  const trackPumpA = createHourTracker('冷卻泵 A');
  const trackPumpB = createHourTracker('備用泵 B');

  const panel = document.getElementById('status-panel');

  document.getElementById('pump-a-btn').addEventListener('click', () => {
    panel.innerHTML = '<span style="color: #2563eb; font-weight: bold;">' + trackPumpA() + '</span>';
  });

  document.getElementById('pump-b-btn').addEventListener('click', () => {
    panel.innerHTML = '<span style="color: #0284c7; font-weight: bold;">' + trackPumpB() + '</span>';
  });
</script>`,
    solutionCode: `<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">閉包獨立狀態封裝實作</h3>

  <div style="display: flex; gap: 12px; margin-bottom: 14px;">
    <button id="pump-a-btn" style="padding: 8px 14px; background: #2563eb; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
      泵浦 A 運轉 +1 小時
    </button>
    <button id="pump-b-btn" style="padding: 8px 14px; background: #0284c7; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
      泵浦 B 運轉 +1 小時
    </button>
  </div>

  <div id="status-panel" style="padding: 12px; background: #f8fafc; border-radius: 6px; font-size: 14px;">
    點擊按鈕增加運轉時數...
  </div>
</div>

<script>
  function createHourTracker(deviceName) {
    let hours = 0;
    
    return function() {
      hours += 1;
      return deviceName + ' 累積運轉：' + hours + ' 小時';
    };
  }

  const trackPumpA = createHourTracker('冷卻泵 A');
  const trackPumpB = createHourTracker('備用泵 B');
  const panel = document.getElementById('status-panel');

  document.getElementById('pump-a-btn').addEventListener('click', () => {
    panel.innerHTML = '<span style="color: #2563eb; font-weight: bold;">' + trackPumpA() + '</span>';
  });

  document.getElementById('pump-b-btn').addEventListener('click', () => {
    panel.innerHTML = '<span style="color: #0284c7; font-weight: bold;">' + trackPumpB() + '</span>';
  });
</script>`,
    hints: [
      '箭頭函式繼承外部 this，在 Vue 組件中的 setTimeout 內使用箭頭函式，可以安全取用 this 或外部變數。',
      '閉包允許函式擁有私有變數，是現代前端狀態管理的重要基礎。'
    ]
  },
  {
    id: 'js-04-array-methods',
    category: 'JavaScript 邏輯專題篇',
    title: 'JS 04. 陣列高階方法大全 (Functional Programming)',
    summary: '前端處理資料的最強利器：全面掌握 map、filter、reduce、find、some、every 與鏈式調用實戰技巧。',
    readTime: '10 分鐘',
    concept: `
### 1. 為什麼現代前端不用傳統 for 迴圈處理陣列？
傳統 \`for (let i = 0; i < len; i++)\` 寫法冗長、容易產生陣列越界 (\`i <= len\`) 錯誤，且程式碼充斥著索引計算，模糊了商業運算核心。
現代 JavaScript 提倡**函式庫式程式設計 (Functional Programming)**，不直接修改原陣列（純函式思維）：

---

### 2. 六大陣列高階方法速查表
1. **\`map(fn)\`（投影轉換）**：長度不變，每個元素經過處理後回傳全新陣列。
   \`\`\`javascript
   const names = devices.map(d => d.name);
   \`\`\`
2. **\`filter(fn)\`（條件過濾）**：回傳符合條件 (true) 的元素組成的新陣列。
   \`\`\`javascript
   const alerts = devices.filter(d => d.status === 'alarm');
   \`\`\`
3. **\`find(fn)\`（尋找單筆）**：回傳「第一個」符合條件的項目，若無回傳 \`undefined\`。
   \`\`\`javascript
   const target = devices.find(d => d.id === 'DEV-01');
   \`\`\`
4. **\`reduce(fn, init)\`（摺疊歸納）**：最強大的聚合金鑰！將陣列累算為單一數值、物件或總計。
   \`\`\`javascript
   // 計算全廠總發電功率
   const totalPower = devices.reduce((sum, d) => sum + d.power, 0);
   \`\`\`
5. **\`some(fn)\`**：是否有任一項目符合？回傳布林值 (\`true / false\`)。
6. **\`every(fn)\`**：是否全部項目都符合？回傳布林值。

---

### 3. 鏈式調用 (Method Chaining)
多個方法可以像流水線一樣一氣呵成：
\`\`\`javascript
// 取得所有「正常運轉中」設備的「總發電功率」
const activeTotalPower = devices
  .filter(d => d.status === 'running')
  .map(d => d.power)
  .reduce((acc, curr) => acc + curr, 0);
\`\`\`

---

### 4. 權威延伸學習資源
- **MDN Web Docs - 陣列方法手冊**：https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array
- **JavaScript.info - 陣列方法教學**：https://zh.javascript.info/array-methods
    `,
    task: `
任務指引：
1. 觀察右側編輯器中的設備資料清單。
2. 點擊「篩選並加總」按鈕，執行 filter 與 reduce 鏈式運算。
3. 觀察函式庫式處理資料的高效與清晰。
    `,
    starterCode: `<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">陣列高階方法實戰統計</h3>

  <button id="calc-btn" style="padding: 8px 14px; background: #16a34a; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
    統計「運轉中」設備總耗電功率
  </button>

  <div id="output" style="margin-top: 14px; padding: 12px; background: #f8fafc; border-radius: 6px; font-size: 14px;">
    點擊上方按鈕執行運算...
  </div>
</div>

<script>
  const plantDevices = [
    { name: '1 號空調主機', status: 'running', power: 45 },
    { name: '2 號空調主機', status: 'stopped', power: 0 },
    { name: '1 號冷卻泵', status: 'running', power: 15 },
    { name: '排氣風機 A', status: 'running', power: 8 },
    { name: '備用水泵 B', status: 'maintenance', power: 0 }
  ];

  document.getElementById('calc-btn').addEventListener('click', () => {
    // 鏈式呼叫：過濾 running -> 計算累計總功率
    const runningDevices = plantDevices.filter(d => d.status === 'running');
    const totalKw = runningDevices.reduce((sum, d) => sum + d.power, 0);

    document.getElementById('output').innerHTML = 
      '運轉設備數量：<strong>' + runningDevices.length + ' 台</strong><br>' +
      '設備名稱：' + runningDevices.map(d => d.name).join('、') + '<br>' +
      '即時總功率：<strong style="color: #16a34a; font-size: 16px;">' + totalKw + ' kW</strong>';
  });
</script>`,
    solutionCode: `<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">陣列高階方法實戰統計</h3>

  <button id="calc-btn" style="padding: 8px 14px; background: #16a34a; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
    統計「運轉中」設備總耗電功率
  </button>

  <div id="output" style="margin-top: 14px; padding: 12px; background: #f8fafc; border-radius: 6px; font-size: 14px;">
    點擊上方按鈕執行運算...
  </div>
</div>

<script>
  const plantDevices = [
    { name: '1 號空調主機', status: 'running', power: 45 },
    { name: '2 號空調主機', status: 'stopped', power: 0 },
    { name: '1 號冷卻泵', status: 'running', power: 15 },
    { name: '排氣風機 A', status: 'running', power: 8 },
    { name: '備用水泵 B', status: 'maintenance', power: 0 }
  ];

  document.getElementById('calc-btn').addEventListener('click', () => {
    const runningDevices = plantDevices.filter(d => d.status === 'running');
    const totalKw = runningDevices.reduce((sum, d) => sum + d.power, 0);

    document.getElementById('output').innerHTML = 
      '運轉設備數量：<strong>' + runningDevices.length + ' 台</strong><br>' +
      '設備名稱：' + runningDevices.map(d => d.name).join('、') + '<br>' +
      '即時總功率：<strong style="color: #16a34a; font-size: 16px;">' + totalKw + ' kW</strong>';
  });
</script>`,
    hints: [
      'map 與 filter 不會修改原本的陣列，而是回傳一個全新的運算結果陣列。',
      'reduce 的第二個參數是初始值 (Initial Value)，統計數值時通常傳入 0。'
    ]
  },
  {
    id: 'js-05-dom-events',
    category: 'JavaScript 邏輯專題篇',
    title: 'JS 05. DOM 操作與事件處理機制 (Event Delegation)',
    summary: '理解事件是如何在網頁中傳遞的！掌握事件冒泡 (Bubbling)、事件委託 (Delegation) 與 preventDefault 實務。',
    readTime: '9 分鐘',
    concept: `
### 1. 原生 DOM 元素選取與事件監聽
\`\`\`javascript
// 現代標準選取器 (取代 getElementById 與 querySelectorAll)
const submitBtn = document.querySelector('.submit-btn');
const allCards = document.querySelectorAll('.card');

// 綁定事件監聽器
submitBtn.addEventListener('click', (event) => {
  event.preventDefault(); // 阻斷預設行為（如表單自動整頁跳轉）
  event.stopPropagation(); // 阻止事件向上冒泡
});
\`\`\`

---

### 2. 什麼是事件冒泡 (Event Bubbling)？
當你點擊一個按鈕時，點擊事件不是只發生在按鈕身上！
它會由內向外像氣泡一樣依序浮升傳遞：
\`\`\`
按鈕 (<button>) -> 卡片 (<div>) -> 內容區 (<main>) -> <body> -> <html> -> window
\`\`\`

---

### 3. 高效效能大招：事件委託 (Event Delegation)
**痛點**：假設監控系統有 1000 個設備清單項目，如果你為每個 \`<li>\` 都綁定一個 \`addEventListener\`，會耗費大量的瀏覽器記憶體！

**解法**：**只在父層 \`<ul>\` 綁定一個事件監聽器**，利用事件冒泡捕獲點擊目標：
\`\`\`javascript
const list = document.querySelector('#device-list');

list.addEventListener('click', (e) => {
  // 利用 e.target 判斷點擊的是不是目標按鈕
  if (e.target.matches('.delete-btn')) {
    const id = e.target.dataset.id;
    console.log('刪除設備編號：', id);
  }
});
\`\`\`

---

### 4. 權威延伸學習資源
- **MDN Web Docs - 事件介紹與事件流**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/Scripting/Events
- **JavaScript.info - 事件冒泡與捕獲 (超生動圖解)**：https://zh.javascript.info/bubbling-and-capturing
    `,
    task: `
任務指引：
1. 觀察右側編輯器中的事件委託實例。
2. 點擊清單中的各個「切換開關」按鈕。
3. 體會為什麼只要在父容器 ul 綁定一個事件監聽器，就能管理所有子項目！
    `,
    starterCode: `<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">事件委託 (Event Delegation) 實戰</h3>
  <p style="font-size: 13px; color: #64748b;">全清單僅在父層 UL 綁定單一監聽器：</p>

  <ul id="device-ul" style="list-style: none; padding: 0; margin: 0;">
    <li style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; border-bottom: 1px solid #f1f5f9;">
      <span>水處理機組 #1</span>
      <button class="toggle-btn" data-name="水處理機組 #1" style="padding: 4px 10px; background: #e2e8f0; border: none; border-radius: 4px; cursor: pointer;">
        切換狀態
      </button>
    </li>
    <li style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; border-bottom: 1px solid #f1f5f9;">
      <span>空調排風扇 #2</span>
      <button class="toggle-btn" data-name="空調排風扇 #2" style="padding: 4px 10px; background: #e2e8f0; border: none; border-radius: 4px; cursor: pointer;">
        切換狀態
      </button>
    </li>
    <li style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px;">
      <span>照明回路 #3</span>
      <button class="toggle-btn" data-name="照明回路 #3" style="padding: 4px 10px; background: #e2e8f0; border: none; border-radius: 4px; cursor: pointer;">
        切換狀態
      </button>
    </li>
  </ul>

  <div id="log-box" style="margin-top: 14px; padding: 10px; background: #0f172a; color: #38bdf8; border-radius: 4px; font-size: 13px;">
    點擊按鈕查看事件捕獲...
  </div>
</div>

<script>
  // 僅在父層綁定一次監聽
  document.getElementById('device-ul').addEventListener('click', (event) => {
    // 檢查點擊目標是否為按鈕
    if (event.target && event.target.classList.contains('toggle-btn')) {
      const devName = event.target.getAttribute('data-name');
      document.getElementById('log-box').innerText = '事件冒泡成功！已點擊：' + devName;
    }
  });
</script>`,
    solutionCode: `<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">事件委託 (Event Delegation) 實戰</h3>
  <p style="font-size: 13px; color: #64748b;">全清單僅在父層 UL 綁定單一監聽器：</p>

  <ul id="device-ul" style="list-style: none; padding: 0; margin: 0;">
    <li style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; border-bottom: 1px solid #f1f5f9;">
      <span>水處理機組 #1</span>
      <button class="toggle-btn" data-name="水處理機組 #1" style="padding: 4px 10px; background: #e2e8f0; border: none; border-radius: 4px; cursor: pointer;">
        切換狀態
      </button>
    </li>
    <li style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; border-bottom: 1px solid #f1f5f9;">
      <span>空調排風扇 #2</span>
      <button class="toggle-btn" data-name="空調排風扇 #2" style="padding: 4px 10px; background: #e2e8f0; border: none; border-radius: 4px; cursor: pointer;">
        切換狀態
      </button>
    </li>
    <li style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px;">
      <span>照明回路 #3</span>
      <button class="toggle-btn" data-name="照明回路 #3" style="padding: 4px 10px; background: #e2e8f0; border: none; border-radius: 4px; cursor: pointer;">
        切換狀態
      </button>
    </li>
  </ul>

  <div id="log-box" style="margin-top: 14px; padding: 10px; background: #0f172a; color: #38bdf8; border-radius: 4px; font-size: 13px;">
    點擊按鈕查看事件捕獲...
  </div>
</div>

<script>
  document.getElementById('device-ul').addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('toggle-btn')) {
      const devName = event.target.getAttribute('data-name');
      document.getElementById('log-box').innerText = '事件冒泡成功！已點擊：' + devName;
    }
  });
</script>`,
    hints: [
      '事件委託避免了為數百個動態產生的 DOM 子節點重複綁定監聽器。',
      'e.target 指向實際觸發點擊的那個最小子節點。'
    ]
  },
  {
    id: 'js-06-async-promise',
    category: 'JavaScript 邏輯專題篇',
    title: 'JS 06. 非同步核心攻略：Promise 與 async / await',
    summary: '從回呼地獄 (Callback Hell) 到優雅同步寫法！深入理解非同步生命週期、Promise 三態與 Promise.all 並發。',
    readTime: '10 分鐘',
    concept: `
### 1. 為什麼 JavaScript 需要非同步 (Asynchronous)？
JavaScript 是**單線程 (Single Thread)** 的語言，同一時間只能做一件事。
如果向伺服器請求資料需要耗時 2 秒，如果採用「同步」方式，整個網頁瀏覽器會被卡死 2 秒，使用者滑鼠點不動、畫面凍結！
因此，網路請求、定時器 (\`setTimeout\`) 全都以「非同步」方式執行。

---

### 2. Promise 的三種狀態
Promise 是一個用來代表「未來某個時間點會完成或失敗的操作」的承諾物件：
- **\`pending\`（進行中）**：初始狀態，正在等待伺服器回應。
- **\`fulfilled\` / \`resolved\`（已成功）**：操作成功完成，攜帶成功資料。
- **\`rejected\`（已拒絕/失敗）**：操作失敗，攜帶錯誤訊息。

\`\`\`javascript
// 傳統 Promise.then 寫法
fetchData()
  .then(data => processData(data))
  .catch(error => console.error(error));
\`\`\`

---

### 3. 現代終極解法：\`async\` / \`await\`
ES2017 引入的 \`async/await\` 是基於 Promise 的語法糖，讓非同步代碼讀起來跟傳統同步代碼一樣直觀優雅：

\`\`\`javascript
async function syncDeviceTelemetry() {
  try {
    console.log('開始連線伺服器...');
    const result = await fetchDeviceData(); // 暫停在此處，等待 Promise 完成，不阻塞主線程
    console.log('取得成功：', result);
  } catch (error) {
    console.error('連線異常捕捉：', error);
  } finally {
    console.log('操作結束，關閉 Loading 轉圈');
  }
}
\`\`\`

---

### 4. 並發請求神器：\`Promise.all()\`
如果需要同時請求 3 個獨立的 API，不要一個一個依序 await（那樣總耗時相加）：
\`\`\`javascript
// 同時發送請求，全部完成後才回傳陣列！大幅縮減首屏時間
const [devices, alerts, users] = await Promise.all([
  fetch('/api/devices'),
  fetch('/api/alerts'),
  fetch('/api/users')
]);
\`\`\`

---

### 5. 權威延伸學習資源
- **MDN Web Docs - 如何使用 Promise**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Extensions/Async_JS/Promises
- **JavaScript.info - async/await 現代教學**：https://zh.javascript.info/async-await
    `,
    task: `
任務指引：
1. 觀察右側編輯器中模擬的 async/await 連線請求。
2. 點擊「模擬非同步 API 請求」按鈕，體驗 await 等待 1 秒後成功取回數據並渲染的過程。
    `,
    starterCode: `<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">Promise 與 async/await 演練</h3>

  <button id="fetch-btn" style="padding: 8px 14px; background: #2563eb; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
    模擬非同步 API 請求 (耗時 1 秒)
  </button>

  <div id="display-area" style="margin-top: 14px; padding: 12px; background: #f8fafc; border-radius: 6px; font-size: 14px;">
    等待發起連線...
  </div>
</div>

<script>
  // 模擬後端非同步延遲函式
  function mockFetchTelemetry() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          timestamp: new Date().toLocaleTimeString(),
          temp: '24.8 度C',
          status: '正常'
        });
      }, 1000);
    });
  }

  document.getElementById('fetch-btn').addEventListener('click', async () => {
    const area = document.getElementById('display-area');
    area.innerHTML = '<span style="color: #64748b;">連線通訊中，請稍候...</span>';

    try {
      // 使用 await 等待非同步完成
      const data = await mockFetchTelemetry();
      area.innerHTML = 
        '通訊成功時間：' + data.timestamp + '<br>' +
        '機房即時溫度：<strong style="color: #16a34a;">' + data.temp + '</strong> (' + data.status + ')';
    } catch (err) {
      area.innerHTML = '<span style="color: #ef4444;">連線失敗</span>';
    }
  });
</script>`,
    solutionCode: `<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">Promise 與 async/await 演練</h3>

  <button id="fetch-btn" style="padding: 8px 14px; background: #2563eb; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
    模擬非同步 API 請求 (耗時 1 秒)
  </button>

  <div id="display-area" style="margin-top: 14px; padding: 12px; background: #f8fafc; border-radius: 6px; font-size: 14px;">
    等待發起連線...
  </div>
</div>

<script>
  function mockFetchTelemetry() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          timestamp: new Date().toLocaleTimeString(),
          temp: '24.8 度C',
          status: '正常'
        });
      }, 1000);
    });
  }

  document.getElementById('fetch-btn').addEventListener('click', async () => {
    const area = document.getElementById('display-area');
    area.innerHTML = '<span style="color: #64748b;">連線通訊中，請稍候...</span>';

    try {
      const data = await mockFetchTelemetry();
      area.innerHTML = 
        '通訊成功時間：' + data.timestamp + '<br>' +
        '機房即時溫度：<strong style="color: #16a34a;">' + data.temp + '</strong> (' + data.status + ')';
    } catch (err) {
      area.innerHTML = '<span style="color: #ef4444;">連線失敗</span>';
    }
  });
</script>`,
    hints: [
      'await 必須寫在標註為 async 的函式內部方能使用。',
      '搭配 try...catch 是處理 async/await 網路錯誤與異常的最佳方式。'
    ]
  },
  {
    id: 'js-07-fetch-api',
    category: 'JavaScript 邏輯專題篇',
    title: 'JS 07. 現代 Fetch API 網路通訊實戰與 Headers 設定',
    summary: '告別 XMLHttpRequest！掌握原生 fetch 發送 GET/POST 請求、傳遞 JSON 資料、設定授權 Token 與 HTTP 錯誤處理。',
    readTime: '9 分鐘',
    concept: `
### 1. 什麼是 Fetch API？
在過去，原生 JS 要發送 HTTP 請求必須實例化複雜的 \`XMLHttpRequest\` 物件。
現代瀏覽器內建了標準的 **\`fetch()\`** 函式，直接基於 Promise 設計：

\`\`\`javascript
// 最基礎的 GET 請求
async function loadDeviceList() {
  const response = await fetch('/api/devices');
  
  // 關鍵：需要第二步解析 JSON 格式！
  const data = await response.json();
  console.log('取得資料：', data);
}
\`\`\`

---

### 2. POST 請求與 Headers 標頭設定
當需要將表單或設定發送回後端資料庫時，使用 POST 請求：
\`\`\`javascript
async function createDevice(newDevice) {
  const response = await fetch('/api/devices', {
    method: 'POST',
    headers: {
      // 告訴伺服器傳送的內容是 JSON 格式
      'Content-Type': 'application/json',
      // 攜帶 JWT 身分驗證 Token
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
    // 將 JavaScript 物件轉換為 JSON 字串
    body: JSON.stringify(newDevice)
  });

  if (!response.ok) {
    throw new Error('HTTP 錯誤狀態碼：' + response.status);
  }

  const result = await response.json();
  return result;
}
\`\`\`

> **防雷警報：fetch 的 catch 不會攔截 404 或 500！**
> \`fetch()\` 只有在「網路斷線」或「DNS 解析失敗」時才會進入 reject。如果後端回傳 404 Not Found 或 500 Server Error，fetch 依然算成功，只是 \`response.ok\` 會是 \`false\`！因此實務上必須檢查 \`if (!response.ok)\`。

---

### 3. 權威延伸學習資源
- **MDN Web Docs - 使用 Fetch API**：https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API/Using_Fetch
- **JavaScript.info - Fetch 核心教學**：https://zh.javascript.info/fetch
    `,
    task: `
任務指引：
1. 觀察右側編輯器中的 Fetch POST 請求封裝。
2. 點擊「送出 JSON 設備資料」按鈕。
3. 體驗 JSON.stringify 與 Headers 設定在現代前後端分離架構中的核心角色！
    `,
    starterCode: `<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">Fetch API 與 JSON 通訊實作</h3>

  <button id="post-btn" style="padding: 8px 14px; background: #0284c7; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
    送出 JSON 設備資料 (POST 模擬)
  </button>

  <div id="output" style="margin-top: 14px; padding: 12px; background: #f8fafc; border-radius: 6px; font-size: 13px; font-family: monospace;">
    點擊按鈕查看序列化與回應...
  </div>
</div>

<script>
  document.getElementById('post-btn').addEventListener('click', () => {
    // 欲提交至後端的 JS 物件
    const payload = {
      name: 'B1 變電開關箱',
      location: '地下一樓機房',
      installedDate: '2026-09-09'
    };

    // 序列化為標準 JSON 字串
    const jsonBody = JSON.stringify(payload, null, 2);

    document.getElementById('output').innerHTML = 
      '<span style="color: #64748b;">// 準備送出的 HTTP Headers：</span><br>' +
      'Content-Type: application/json<br>' +
      'Authorization: Bearer eyJhbGciOi...<br><br>' +
      '<span style="color: #64748b;">// 序列化傳送的 Body (JSON)：</span><br>' +
      '<pre style="color: #0369a1; margin: 4px 0;">' + jsonBody + '</pre><br>' +
      '<span style="color: #16a34a; font-weight: bold;">通訊格式封裝完成！</span>';
  });
</script>`,
    solutionCode: `<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">Fetch API 與 JSON 通訊實作</h3>

  <button id="post-btn" style="padding: 8px 14px; background: #0284c7; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
    送出 JSON 設備資料 (POST 模擬)
  </button>

  <div id="output" style="margin-top: 14px; padding: 12px; background: #f8fafc; border-radius: 6px; font-size: 13px; font-family: monospace;">
    點擊按鈕查看序列化與回應...
  </div>
</div>

<script>
  document.getElementById('post-btn').addEventListener('click', () => {
    const payload = {
      name: 'B1 變電開關箱',
      location: '地下一樓機房',
      installedDate: '2026-09-09'
    };

    const jsonBody = JSON.stringify(payload, null, 2);

    document.getElementById('output').innerHTML = 
      '<span style="color: #64748b;">// 準備送出的 HTTP Headers：</span><br>' +
      'Content-Type: application/json<br>' +
      'Authorization: Bearer eyJhbGciOi...<br><br>' +
      '<span style="color: #64748b;">// 序列化傳送的 Body (JSON)：</span><br>' +
      '<pre style="color: #0369a1; margin: 4px 0;">' + jsonBody + '</pre><br>' +
      '<span style="color: #16a34a; font-weight: bold;">通訊格式封裝完成！</span>';
  });
</script>`,
    hints: [
      '發送 POST 請求時，必須設定 headers 的 Content-Type: application/json。',
      '物件需經過 JSON.stringify() 轉為文字字串才能作為 HTTP body 送出。'
    ]
  },
  {
    id: 'js-08-es-modules',
    category: 'JavaScript 邏輯專題篇',
    title: 'JS 08. 模組化機制 (ES Modules) 與前端工程化打包思維',
    summary: '邁入現代前端工程化！掌握 export、import、具名與預設匯出，理解為什麼現代專案需要 Vite 與 Webpack 打包器。',
    readTime: '9 分鐘',
    concept: `
### 1. 舊時代的痛點：全域污染與檔案引用順序地獄
在沒有模組化之前，HTML 必須引入十幾個 \`<script>\`：
\`\`\`html
<script src="js/jquery.js"></script>
<script src="js/pluginA.js"></script> <!-- 如果順序排在 jquery 前面就會壞掉！ -->
<script src="js/utils.js"></script>
<script src="js/main.js"></script>
\`\`\`
所有檔案定義的變數全部掛在全域 \`window\` 上，很容易發生命名衝突被意外覆蓋。

---

### 2. 現代標準：ES Modules (ESM)
每個 JS 檔案都是獨立的作用域，只將需要的東西「匯出 (export)」，其餘都是私有的：

#### (1) 具名匯出 (Named Export) - 一個檔案可多個
\`\`\`javascript
// mathUtils.js
export const calculateTax = (amount) => amount * 0.05;
export const formatCurrency = (val) => '$' + val.toLocaleString();

// main.js 取用
import { calculateTax, formatCurrency } from './mathUtils.js';
\`\`\`

#### (2) 預設匯出 (Default Export) - 一個檔案僅能有一個
\`\`\`javascript
// DeviceService.js
export default class DeviceService { ... }

// main.js 取用 (名稱可自訂)
import DeviceService from './DeviceService.js';
\`\`\`

---

### 3. 為什麼需要 Vite / 打包工具？
現代 Vue 專案由數百個 \`.vue\` 單文件組件、TypeScript 與 Sass 檔案組成。
瀏覽器原生只認識標準的 HTML/CSS/JavaScript，無法直接執行 \`.vue\` 檔案！
**Vite 打包工具** 的角色就是：
1. **編譯**：把 \`.vue\` 檔案編譯拆解成標準的 JS 與 CSS。
2. **打包與最佳化 (Tree-shaking)**：自動去除沒用到的代碼，壓縮體積。
3. **極速熱更新 (HMR, Hot Module Replacement)**：改一行代碼，畫面幾毫秒內局部更新，免整頁重新刷新！

---

### 4. 權威延伸學習資源
- **MDN Web Docs - JavaScript 模組 (Modules) 指南**：https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Modules
- **Vite 官方網站 (現代建構工具指南)**：https://vitejs.dev/guide/
    `,
    task: `
任務指引：
1. 觀察右側編輯器中展示的模組化拆分概念。
2. 體驗透過 import/export 組織程式碼，實現高內聚低耦合的現代軟工架構。
    `,
    starterCode: `<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">ES Modules 模組化規範展示</h3>

  <div style="background: #0f172a; color: #e2e8f0; padding: 14px; border-radius: 6px; font-family: monospace; font-size: 13px;">
    <div style="color: #94a3b8;">// utils/telemetry.js</div>
    <span style="color: #f43f5e;">export const</span> <span style="color: #38bdf8;">calculateEfficiency</span> = (inKw, outKw) => (outKw / inKw) * 100;<br><br>
    
    <div style="color: #94a3b8;">// main.js (Vue 3 組件引用)</div>
    <span style="color: #f43f5e;">import</span> { <span style="color: #38bdf8;">calculateEfficiency</span> } <span style="color: #f43f5e;">from</span> <span style="color: #a7f3d0;">'./utils/telemetry.js'</span>;
  </div>

  <div style="margin-top: 14px; font-size: 14px; color: #334155;">
    模組化使各檔案作用域完全隔離，徹底告別 window 全域變數衝突。
  </div>
</div>`,
    solutionCode: `<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">ES Modules 模組化規範展示</h3>

  <div style="background: #0f172a; color: #e2e8f0; padding: 14px; border-radius: 6px; font-family: monospace; font-size: 13px;">
    <div style="color: #94a3b8;">// utils/telemetry.js</div>
    <span style="color: #f43f5e;">export const</span> <span style="color: #38bdf8;">calculateEfficiency</span> = (inKw, outKw) => (outKw / inKw) * 100;<br><br>
    
    <div style="color: #94a3b8;">// main.js (Vue 3 組件引用)</div>
    <span style="color: #f43f5e;">import</span> { <span style="color: #38bdf8;">calculateEfficiency</span> } <span style="color: #f43f5e;">from</span> <span style="color: #a7f3d0;">'./utils/telemetry.js'</span>;
  </div>

  <div style="margin-top: 14px; font-size: 14px; color: #334155;">
    模組化使各檔案作用域完全隔離，徹底告別 window 全域變數衝突。
  </div>
</div>`,
    hints: [
      'export 具名匯出在引用時必須加上花括號 import { name }。',
      '現代打包器 Vite 便是原生利用瀏覽器的 ES Modules 特性實現秒級熱更新。'
    ]
  }
];
