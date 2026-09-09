// src/data/curriculum.js
export const curriculum = [
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
    你好，<strong>{{ username || '陌生訪客' }}</strong>！歡迎來到 Vue 的世界 🎉
  </p>
  
  <label style="display: block; margin-top: 10px;">
    <input type="checkbox" v-model="agreeTerms" /> 我同意學習條款
  </label>
  <p>條款狀態：{{ agreeTerms ? '✅ 已同意' : '❌ 尚未勾選' }}</p>
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
    你好，<strong>{{ username || '陌生訪客' }}</strong>！歡迎來到 Vue 的世界 🎉
  </p>
  
  <label style="display: block; margin-top: 10px;">
    <input type="checkbox" v-model="agreeTerms" /> 我同意學習條款
  </label>
  <p>條款狀態：{{ agreeTerms ? '✅ 已同意' : '❌ 尚未勾選' }}</p>
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
> 💡 **經驗法則**：頻繁切換（如收合面板、Tab 標籤頁）用 \`v-show\`；條件很少變更（如使用者權限、登入狀態）用 \`v-if\`。
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
      🎉 歡迎回來，尊貴的 VIP 會員！這是您的專屬折扣代碼：<strong>VUE3_2026</strong>
    </div>

    <!-- 任務：加上 v-else -->
    <div>
      🔒 您尚未登入，請點擊上方按鈕模擬登入以查看專屬內容。
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
      🎉 歡迎回來，尊貴的 VIP 會員！這是您的專屬折扣代碼：<strong>VUE3_2026</strong>
    </div>

    <div v-else>
      🔒 您尚未登入，請點擊上方按鈕模擬登入以查看專屬內容。
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
> ⚠️ **新手陷阱**：盡量使用唯一的 \`id\`（如 \`:key="item.id"\`），避免使用 \`index\` 作為 key，尤其是當列表會動態排序或刪除時。
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
> 💡 **最佳實踐**：Vue 官方推薦在多數情況下優先使用 \`ref()\`，因為它支援基本型別（number, string, boolean），且解構時不易遺失響應性。
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
    💡 小幫手回應：{{ answer }}
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
    💡 小幫手回應：{{ answer }}
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
        { id: 1, name: 'HTML & CSS 基礎', status: '已精通 ✅' },
        { id: 2, name: 'JavaScript ES6+', status: '已掌握 🚀' },
        { id: 3, name: 'Vue 3 全面啟航', status: '現正學習中 🔥' }
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
        { id: 1, name: 'HTML & CSS 基礎', status: '已精通 ✅' },
        { id: 2, name: 'JavaScript ES6+', status: '已掌握 🚀' },
        { id: 3, name: 'Vue 3 全面啟航', status: '現正學習中 🔥' }
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
  }
];
