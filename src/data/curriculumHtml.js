// src/data/curriculumHtml.js
// HTML 核心專題篇：惡補前端基礎結構課程 (5 單元)

export const htmlCurriculum = [
  {
    id: 'html-01-structure',
    category: 'HTML 核心專題篇',
    title: 'HTML 01. 網頁標準骨架與 DOM 樹建構觀念',
    summary: '從 DOCTYPE 到 body，全面理解 HTML 文件的底層骨架，以及瀏覽器如何將標籤解析為記憶體中的 DOM 樹狀結構。',
    readTime: '7 分鐘',
    concept: `
### 1. 什麼是 HTML 與文件類型宣告 (DOCTYPE)？
HTML (HyperText Markup Language) 負責定義網頁的「結構與內容」。
每一份符合現代標準的 HTML 文件，第一行必須是 \`<!DOCTYPE html>\`：
\`\`\`html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>設備監控系統</title>
</head>
<body>
  <h1>系統主控台</h1>
</body>
</html>
\`\`\`

#### 核心標籤逐行拆解：
- **\`<!DOCTYPE html>\`**：告知瀏覽器採用現代標準模式 (Standards Mode) 渲染，防止進入怪異模式 (Quirks Mode)。
- **\`<html lang="zh-TW">\`**：文件的根元素，\`lang\` 屬性有助於搜尋引擎優化 (SEO) 與語音閱讀器識別正確語音庫。
- **\`<head>\`**：存放文件的「中繼資料 (Metadata)」，不會直接畫在螢幕上。
  - **\`<meta charset="UTF-8">\`**：宣告編碼為萬國碼 UTF-8，防止中文或特殊字元亂碼。
  - **\`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`**：**RWD 響應式佈局命脈**！讓視窗寬度等於裝置實體寬度，禁止手機瀏覽器預設縮放成桌面 980px。
- **\`<body>\`**：瀏覽器實際繪製在視窗中的所有視覺內容容器。

---

### 2. 什麼是 DOM 樹 (Document Object Model)？
當瀏覽器下載 HTML 文字檔案後，會依據巢狀標籤將其轉換為記憶體中的**樹狀資料結構 (DOM Tree)**：
- 每個標籤對應一個 **元素節點 (Element Node)**。
- 標籤內的文字對應 **文字節點 (Text Node)**。
- 標籤上的屬性對應 **屬性節點 (Attribute Node)**。

> **對應 Vue 的核心觀念**：
> 傳統 jQuery 是「直接在真實 DOM 樹上頻繁進行插入、刪除節點」，這會引發瀏覽器昂貴的重繪 (Repaint) 與重排 (Reflow)。
> Vue 3 則在記憶體中建立一套輕量的 **虛擬 DOM (Virtual DOM)**，比對狀態差異後，才批次更新真實 DOM 樹。

---

### 3. 權威延伸學習資源
- **MDN Web Docs - HTML 入門與標準文件結構**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/Structuring_content
- **W3Schools HTML 核心標準教學**：https://www.w3schools.com/html/html_intro.asp
    `,
    task: `
任務指引：
1. 觀察右側編輯器中的完整 HTML 文件結構。
2. 在 <body> 內部加入一個主容器 <div class="app-container">，並在其中放置 <h2>監控主機</h2> 與段落標籤 <p>。
3. 觀察右側 Live output 即時編譯並渲染出的 DOM 節點效果。
    `,
    starterCode: `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <title>廠區監控平台</title>
</head>
<body style="margin: 0; padding: 16px; font-family: sans-serif; background: #f8fafc;">
  <!-- 請在下方編寫你的 DOM 結構 -->
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
    <h2 style="margin-top: 0; color: #0f172a;">A 棟水電監控站</h2>
    <p style="color: #64748b; margin-bottom: 0;">DOM 樹正在瀏覽器記憶體中完成建構與渲染。</p>
  </div>
</body>
</html>`,
    solutionCode: `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <title>廠區監控平台</title>
</head>
<body style="margin: 0; padding: 16px; font-family: sans-serif; background: #f8fafc;">
  <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
    <h2 style="margin-top: 0; color: #0f172a;">A 棟水電監控站</h2>
    <p style="color: #64748b; margin-bottom: 0;">DOM 樹正在瀏覽器記憶體中完成建構與渲染。</p>
  </div>
</body>
</html>`,
    hints: [
      '所有在畫面上看得到的 HTML 標籤都必須寫在 <body> 與 </body> 之間。',
      'HTML 的標籤嵌套規則直接決定了 DOM 樹的父子兄弟層級關係。'
    ]
  },
  {
    id: 'html-02-semantic',
    category: 'HTML 核心專題篇',
    title: 'HTML 02. 語意化標籤 (Semantic Tags) 與現代版面結構',
    summary: '擺脫濫用 div 的義大利麵標籤結構！掌握 header、nav、main、section、article、aside、footer 的正確版面劃分。',
    readTime: '8 分鐘',
    concept: `
### 1. 什麼是語意化 (Semantic)？為什麼重要？
在舊時代，工程師喜歡在網頁中到處寫 \`<div class="header">\`、\`<div class="nav">\`、\`<div class="footer">\`。
這被稱為 **"Div 濃湯 (Div Soup)"**：
- 瀏覽器與搜尋引擎爬蟲無法理解哪裡是「核心本文」，哪裡是「選單」或「頁尾」。
- 盲人使用的螢幕閱讀器 (Screen Reader) 無法快速跳轉段落。

HTML5 引入了標準的**語意化標籤**，直接用標籤名稱說明該區塊的用途：

\`\`\`html
<header>  <!-- 頁首：Logo、全站標題、頂部功能列 -->
<nav>     <!-- 導航列：超連結選單項目 -->
<main>    <!-- 全站核心本文：每頁僅能有一個 main -->
<section> <!-- 具有獨立標題的章節主題區塊 -->
<article> <!-- 可獨立被分享、轉載的完整文章或卡片 -->
<aside>   <!-- 側邊欄：次要資訊、目錄、相關推薦 -->
<footer>  <!-- 頁尾：版權宣告、聯絡資訊 -->
\`\`\`

---

### 2. 語意化標籤架構示範
\`\`\`html
<div class="layout">
  <header>
    <h1>儀表板監控系統</h1>
  </header>
  
  <div class="body-wrap">
    <aside>
      <nav>
        <ul>
          <li><a href="#summary">即時概況</a></li>
          <li><a href="#alerts">告警清單</a></li>
        </ul>
      </nav>
    </aside>

    <main>
      <section id="summary">
        <h2>能源耗損摘要</h2>
        <article>
          <h3>冰水主機 1 號</h3>
          <p>運轉負載正常。</p>
        </article>
      </section>
    </main>
  </div>

  <footer>
    <small>Copyright 2026 企業管理系統. All rights reserved.</small>
  </footer>
</div>
\`\`\`

---

### 3. 與 Vue 3 組件架構的對照
在 Vue 3 單文件組件 (.vue) 中：
- 一個 \`AppHeader.vue\` 的內部根節點應優先使用 \`<header>\` 而非 \`<div>\`。
- 一個 \`SidebarNav.vue\` 應使用 \`<aside><nav>...\`。
- 這樣組合出來的最終 SPA 頁面才具有高水準的 SEO 與現代軟工品質。

---

### 4. 權威延伸學習資源
- **MDN Web Docs - HTML 語意化結構指南**：https://developer.mozilla.org/zh-TW/docs/Glossary/Semantics#html_中的語意
- **W3Schools HTML Semantic Elements**：https://www.w3schools.com/html/html5_semantic_elements.asp
    `,
    task: `
任務指引：
1. 觀察右側編輯器中的結構。
2. 嘗試使用 <header>、<main>、<section> 與 <footer> 取代原本混亂的普通 div。
3. 體驗語意化帶來的代碼清晰度提升！
    `,
    starterCode: `<div style="font-family: sans-serif; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden;">
  <!-- 頁首語意標籤 -->
  <header style="background: #1e293b; color: white; padding: 12px 16px;">
    <h3 style="margin: 0; font-size: 16px;">廠區營運中控系統</h3>
  </header>

  <!-- 主要內容區 (main) -->
  <main style="padding: 16px; background: #f8fafc;">
    <!-- 獨立區塊 (section) -->
    <section style="background: white; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0; margin-bottom: 12px;">
      <h4 style="margin: 0 0 6px 0; color: #0f172a;">全廠即時負載</h4>
      <p style="margin: 0; font-size: 14px; color: #16a34a; font-weight: bold;">目前總功率：1,240 kW (正常)</p>
    </section>
  </main>

  <!-- 頁尾語意標籤 -->
  <footer style="background: #e2e8f0; padding: 8px 16px; font-size: 12px; color: #64748b; text-align: center;">
    系統正常運行中 · 支援標準 HTML5 語意規範
  </footer>
</div>`,
    solutionCode: `<div style="font-family: sans-serif; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden;">
  <header style="background: #1e293b; color: white; padding: 12px 16px;">
    <h3 style="margin: 0; font-size: 16px;">廠區營運中控系統</h3>
  </header>

  <main style="padding: 16px; background: #f8fafc;">
    <section style="background: white; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0; margin-bottom: 12px;">
      <h4 style="margin: 0 0 6px 0; color: #0f172a;">全廠即時負載</h4>
      <p style="margin: 0; font-size: 14px; color: #16a34a; font-weight: bold;">目前總功率：1,240 kW (正常)</p>
    </section>
  </main>

  <footer style="background: #e2e8f0; padding: 8px 16px; font-size: 12px; color: #64748b; text-align: center;">
    系統正常運行中 · 支援標準 HTML5 語意規範
  </footer>
</div>`,
    hints: [
      '每個 HTML 頁面通常只允許一個 <main> 元素，用來包裹該頁的核心內容。',
      '語意化標籤在 CSS 預設外觀上與 div 大多相同，但對爬蟲、螢幕閱讀器與代碼維護具有無可取代的價值。'
    ]
  },
  {
    id: 'html-03-text-media',
    category: 'HTML 核心專題篇',
    title: 'HTML 03. 文字階層、超連結安全與現代多媒體資源',
    summary: '掌握 h1~h6 階層標準、段落與行內強調，以及 a 標籤的 target/rel 資安防禦機制與 img 的 lazy loading。',
    readTime: '7 分鐘',
    concept: `
### 1. 標題與內文排版階層
HTML 提供了六個等級的標題：
- \`<h1>\`：全頁最重要標題。**每頁強烈建議只有一個 \`<h1>\`**，代表頁面核心宗旨。
- \`<h2>\`：各大主分區標題。
- \`<h3>\` ~ \`<h6>\`：次分區與卡片內部標題。
- \`<p>\`：內文段落。瀏覽器會自動為段落添加上下外距 (margin)。
- \`<strong>\`：重要性加粗強調（不僅是視覺加粗，還具備語意重要度）。
- \`<em>\`：語氣加重傾斜。

---

### 2. 超連結 \`<a>\` 與關鍵資安屬性
超連結是全球資訊網 (Web) 的根基：
\`\`\`html
<a href="https://vuejs.org" target="_blank" rel="noopener noreferrer">
  前往 Vue.js 官方站點
</a>
\`\`\`
- **\`href\`**：目標網址。支援相對路徑 (\`./about.html\`)、絕對網址 (\`https://...\`)、或是頁內錨點 (\`#section2\`)。
- **\`target="_blank"\`**：在「新分頁」中開啟。
- **關鍵資安屬性 \`rel="noopener noreferrer"\`**：
  > **防雷警報**：若未加上 \`rel="noopener"\`，新分頁的頁面可以透過 JavaScript 的 \`window.opener\` 反向竄改你原本網頁的內容（例如偷偷重導向到釣魚網站，稱為 Tabnabbing 攻擊）！現代前端只要有 \`target="_blank"\`，務必搭配此屬性。

---

### 3. 圖片 \`<img>\` 與效能最佳化
\`\`\`html
<img src="https://vuejs.org/images/logo.png" 
     alt="Vue.js 綠色標誌" 
     width="80" 
     height="80" 
     loading="lazy" />
\`\`\`
- **\`alt\` 屬性不可省略**：當網路失敗圖片破圖時顯示替代文字，也是盲人無障礙輔具必讀資訊。
- **明確標註 \`width\` 與 \`height\`**：防止圖片載入瞬間引發版面劇烈跳動 (CLS, Cumulative Layout Shift)。
- **\`loading="lazy"\`**：**瀏覽器原生延遲載入**！圖片在滑鼠滾動到接近視窗範圍時才開始下載，節省行動端網路流量與加速首屏載入。

---

### 4. 權威延伸學習資源
- **MDN Web Docs - HTML 建立超連結**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/Structuring_content/Creating_hyperlinks
- **MDN Web Docs - HTML 中的圖片與響應式**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/Structuring_content/Images_in_HTML
    `,
    task: `
任務指引：
1. 觀察右側編輯器中的圖文卡片。
2. 嘗試為 <a> 標籤補上 target="_blank" 與 rel="noopener noreferrer"。
3. 觀察 <img> 的 loading="lazy" 與 alt 屬性設定。
    `,
    starterCode: `<div style="font-family: sans-serif; padding: 16px; border: 1px solid #e2e8f0; border-radius: 8px; max-width: 420px; background: white;">
  <div style="display: flex; gap: 14px; align-items: center;">
    <img 
      src="https://vuejs.org/images/logo.png" 
      alt="Vue 官方標誌" 
      width="60" 
      height="60" 
      loading="lazy" 
      style="display: block;"
    />
    <div>
      <h3 style="margin: 0 0 4px 0; color: #0f172a;">Vue.js 開發框架</h3>
      <p style="margin: 0; font-size: 13px; color: #64748b;">
        <strong>漸進式</strong> JavaScript 現代前端生態系統。
      </p>
    </div>
  </div>

  <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid #f1f5f9;">
    <!-- 請在此處設定具備資安防禦的超連結 -->
    <a 
      href="https://vuejs.org" 
      target="_blank" 
      rel="noopener noreferrer"
      style="color: #2563eb; text-decoration: none; font-size: 14px; font-weight: bold;"
    >
      前往官方入門手冊 &rarr;
    </a>
  </div>
</div>`,
    solutionCode: `<div style="font-family: sans-serif; padding: 16px; border: 1px solid #e2e8f0; border-radius: 8px; max-width: 420px; background: white;">
  <div style="display: flex; gap: 14px; align-items: center;">
    <img 
      src="https://vuejs.org/images/logo.png" 
      alt="Vue 官方標誌" 
      width="60" 
      height="60" 
      loading="lazy" 
      style="display: block;"
    />
    <div>
      <h3 style="margin: 0 0 4px 0; color: #0f172a;">Vue.js 開發框架</h3>
      <p style="margin: 0; font-size: 13px; color: #64748b;">
        <strong>漸進式</strong> JavaScript 現代前端生態系統。
      </p>
    </div>
  </div>

  <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid #f1f5f9;">
    <a 
      href="https://vuejs.org" 
      target="_blank" 
      rel="noopener noreferrer"
      style="color: #2563eb; text-decoration: none; font-size: 14px; font-weight: bold;"
    >
      前往官方入門手冊 &rarr;
    </a>
  </div>
</div>`,
    hints: [
      '所有跳出原網站的外部連結，都強烈建議加上 rel="noopener noreferrer" 防範安全漏洞。',
      '清晰的 alt 說明文字能在圖片載入失敗時提供足夠的替代文字資訊。'
    ]
  },
  {
    id: 'html-04-forms-inputs',
    category: 'HTML 核心專題篇',
    title: 'HTML 04. 現代表單 (Forms) 與互動控制元件',
    summary: '深入探討與使用者互動的核心：input 各種 type、label 綁定、select 下拉選單與原生表單驗證機制。',
    readTime: '9 分鐘',
    concept: `
### 1. 表單容器 \`<form>\` 與 \`<label>\` 關聯
表單是前端向後端提交資料的基礎入口：
\`\`\`html
<form action="/api/login" method="POST">
  <div class="field">
    <!-- label 的 for 必須對應 input 的 id -->
    <label for="user-email">電子郵件信箱：</label>
    <input type="email" id="user-email" name="email" required />
  </div>
  <button type="submit">登入系統</button>
</form>
\`\`\`
- **\`<label for="...">\` 的重要性**：點擊 label 的文字時，瀏覽器會**自動將游標聚焦到對應的 input**，大幅增加行動裝置上的可點擊觸控熱區！

---

### 2. 核心 \`<input>\` 類型大全
- **\`type="text"\`**：一般單行文字輸入。
- **\`type="password"\`**：密碼遮蔽輸入。
- **\`type="number"\`**：數值輸入（可配合 \`min="0"\`、\`max="100"\`、\`step="0.5"\`）。
- **\`type="checkbox"\`**：多選核取方塊（多個選項可複選）。
- **\`type="radio"\`**：單選圓鈕（相同 \`name\` 屬性的 radio 會互斥，只能單選一個）。
- **\`type="date"\`**：原生日曆日期選擇器。
- **\`type="file"\`**：檔案上傳。

---

### 3. 下拉選單與多行文本
\`\`\`html
<!-- 下拉選單 -->
<select id="device-type" name="type">
  <option value="chiller">冰水主機</option>
  <option value="pump" selected>水泵浦 (預設選中)</option>
  <option value="fan">通風風機</option>
</select>

<!-- 多行文本輸入框 -->
<textarea id="notes" rows="4" placeholder="請填寫故障狀況備註..."></textarea>
\`\`\`

---

### 4. 原生驗證屬性與按鈕類型
- **\`required\`**：必填欄位，未填寫點擊送出時瀏覽器會主動跳出提示並阻斷送出。
- **\`placeholder\`**：輸入框內的淺色預設提示文字。
- **\`disabled\`**：禁用該元件（不可輸入、不可點擊、且表單送出時不會攜帶此值）。
- **\`readonly\`**：唯讀（可以選取反白複製，但不能修改）。
- **按鈕的 \`type\`**：
  - \`type="submit"\`：預設值！點擊會提交整個表單。
  - \`type="button"\`：普通按鈕，僅供 JavaScript 綁定點擊事件，不會觸發頁面刷新提交。

> **對應 Vue 3 的觀念**：
> 在 Vue 中，我們通常會對表單加上 \`@submit.prevent="handleSubmit"\`，阻斷原生 HTML 表單導致整頁重新載入的預設行為，改由 AJAX / Axios 發送非同步請求。

---

### 5. 權威延伸學習資源
- **MDN Web Docs - 你的第一個 HTML 表單**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/Forms/Your_first_form
- **W3Schools HTML Input Types**：https://www.w3schools.com/html/html_form_input_types.asp
    `,
    task: `
任務指引：
1. 觀察右側設備保養報修表單。
2. 嘗試加入一個選取維修優先等級的 <select> 元件，包含「一般」、「緊急」與「重大災損」三個選項。
3. 體驗原生 HTML 表單元件的排版與點擊反應！
    `,
    starterCode: `<form style="font-family: sans-serif; padding: 16px; border: 1px solid #cbd5e1; border-radius: 8px; max-width: 440px; background: white;" onsubmit="alert('表單送出成功！'); return false;">
  <h3 style="margin-top: 0; color: #1e293b;">設備維護工單填報</h3>

  <div style="margin-bottom: 12px;">
    <label for="dev-name" style="display: block; font-size: 13px; font-weight: bold; margin-bottom: 4px; color: #334155;">
      設備編號 (必填)：
    </label>
    <input 
      type="text" 
      id="dev-name" 
      placeholder="例如：DEV-2026-08" 
      required 
      style="width: 100%; box-sizing: border-box; padding: 8px 10px; border: 1px solid #cbd5e1; border-radius: 4px;"
    />
  </div>

  <div style="margin-bottom: 12px;">
    <label for="priority" style="display: block; font-size: 13px; font-weight: bold; margin-bottom: 4px; color: #334155;">
      優先等級：
    </label>
    <select id="priority" style="width: 100%; box-sizing: border-box; padding: 8px 10px; border: 1px solid #cbd5e1; border-radius: 4px; background: white;">
      <option value="low">一般保養</option>
      <option value="urgent" selected>緊急維修 (優先處理)</option>
      <option value="critical">重大停機事故</option>
    </select>
  </div>

  <button 
    type="submit" 
    style="width: 100%; padding: 10px; background: #2563eb; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;"
  >
    建立工單
  </button>
</form>`,
    solutionCode: `<form style="font-family: sans-serif; padding: 16px; border: 1px solid #cbd5e1; border-radius: 8px; max-width: 440px; background: white;" onsubmit="alert('表單送出成功！'); return false;">
  <h3 style="margin-top: 0; color: #1e293b;">設備維護工單填報</h3>

  <div style="margin-bottom: 12px;">
    <label for="dev-name" style="display: block; font-size: 13px; font-weight: bold; margin-bottom: 4px; color: #334155;">
      設備編號 (必填)：
    </label>
    <input 
      type="text" 
      id="dev-name" 
      placeholder="例如：DEV-2026-08" 
      required 
      style="width: 100%; box-sizing: border-box; padding: 8px 10px; border: 1px solid #cbd5e1; border-radius: 4px;"
    />
  </div>

  <div style="margin-bottom: 12px;">
    <label for="priority" style="display: block; font-size: 13px; font-weight: bold; margin-bottom: 4px; color: #334155;">
      優先等級：
    </label>
    <select id="priority" style="width: 100%; box-sizing: border-box; padding: 8px 10px; border: 1px solid #cbd5e1; border-radius: 4px; background: white;">
      <option value="low">一般保養</option>
      <option value="urgent" selected>緊急維修 (優先處理)</option>
      <option value="critical">重大停機事故</option>
    </select>
  </div>

  <button 
    type="submit" 
    style="width: 100%; padding: 10px; background: #2563eb; color: white; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;"
  >
    建立工單
  </button>
</form>`,
    hints: [
      '給 input 加上 required 屬性，點擊提交時若為空，瀏覽器會自動產生防呆提示。',
      'label 的 for 屬性與 input 的 id 配對，能極大改善使用者的點擊體驗。'
    ]
  },
  {
    id: 'html-05-tables',
    category: 'HTML 核心專題篇',
    title: 'HTML 05. 結構化表格 (Table) 與複雜數據展示',
    summary: '企業級後台系統最常用的報表核心：完整拆解 thead、tbody、tfoot、跨欄 colspan 與跨列 rowspan 實務技術。',
    readTime: '8 分鐘',
    concept: `
### 1. 為什麼後台系統少不了 HTML 表格？
雖然現在排版多用 Flexbox 或 Grid，但在展示**大量結構化二維資料**（如設備點檢記錄、電費分攤明細、告警歷史紀錄）時，標準的 \`<table>\` 具有天然的欄寬對齊與無障礙報表解析優勢。

---

### 2. 標準表格完整骨架拆解
嚴格的 HTML 表格必須包含表頭、表身與表尾結構：
\`\`\`html
<table border="1">
  <thead> <!-- 表頭區塊 -->
    <tr>  <!-- table row: 列 -->
      <th>設備名稱</th> <!-- table header: 標題單元格 (預設加粗置中) -->
      <th>運轉狀態</th>
      <th>即時功率</th>
    </tr>
  </thead>
  <tbody> <!-- 表身主資料區塊 -->
    <tr>
      <td>空調主機 #1</td> <!-- table data: 資料單元格 -->
      <td>運轉中</td>
      <td>45 kW</td>
    </tr>
  </tbody>
  <tfoot> <!-- 表尾區塊：常用來放合計或平均值 -->
    <tr>
      <td colspan="2">合計用電量</td>
      <td>45 kW</td>
    </tr>
  </tfoot>
</table>
\`\`\`

---

### 3. 跨欄與跨列高階技巧
- **\`colspan="數字"\`（Column Span 橫向跨欄）**：合併左右多個欄位。例如 \`colspan="3"\` 表示這一個單元格橫跨佔據 3 欄寬度。
- **\`rowspan="數字"\`（Row Span 垂直跨列）**：合併上下多個列位。例如某一棟樓有三個樓層，大樓名稱單元格可設 \`rowspan="3"\`。

---

### 4. 權威延伸學習資源
- **MDN Web Docs - HTML 表格基礎指南**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics
- **W3Schools HTML Tables**：https://www.w3schools.com/html/html_tables.asp
    `,
    task: `
任務指引：
1. 觀察右側編輯器中的廠區設備狀態數據表。
2. 嘗試在 <tfoot> 中使用 colspan="2" 合併儲存格，並呈現「總計設備數：2 台」。
3. 感受標準 HTML 表格在結構化報表中的清晰層次。
    `,
    starterCode: `<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">廠區耗電量監控日報表</h3>

  <table style="width: 100%; border-collapse: collapse; font-size: 14px; text-align: left;">
    <thead>
      <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
        <th style="padding: 10px;">機台編號</th>
        <th style="padding: 10px;">安裝區域</th>
        <th style="padding: 10px;">運轉電壓 (V)</th>
        <th style="padding: 10px;">狀態</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 10px; font-weight: bold;">CH-001</td>
        <td style="padding: 10px;">B1 機房</td>
        <td style="padding: 10px;">380 V</td>
        <td style="padding: 10px; color: #16a34a; font-weight: bold;">正常運轉</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 10px; font-weight: bold;">PUMP-002</td>
        <td style="padding: 10px;">1F 蓄水池</td>
        <td style="padding: 10px;">220 V</td>
        <td style="padding: 10px; color: #ea580c; font-weight: bold;">保養待機</td>
      </tr>
    </tbody>
    <tfoot>
      <tr style="background: #f8fafc; font-weight: bold;">
        <td colspan="3" style="padding: 10px; text-align: right; color: #475569;">已監控機台統計：</td>
        <td style="padding: 10px; color: #0284c7;">2 台設備</td>
      </tr>
    </tfoot>
  </table>
</div>`,
    solutionCode: `<div style="font-family: sans-serif; padding: 16px; background: white; border: 1px solid #cbd5e1; border-radius: 8px;">
  <h3 style="margin-top: 0; color: #1e293b;">廠區耗電量監控日報表</h3>

  <table style="width: 100%; border-collapse: collapse; font-size: 14px; text-align: left;">
    <thead>
      <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
        <th style="padding: 10px;">機台編號</th>
        <th style="padding: 10px;">安裝區域</th>
        <th style="padding: 10px;">運轉電壓 (V)</th>
        <th style="padding: 10px;">狀態</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 10px; font-weight: bold;">CH-001</td>
        <td style="padding: 10px;">B1 機房</td>
        <td style="padding: 10px;">380 V</td>
        <td style="padding: 10px; color: #16a34a; font-weight: bold;">正常運轉</td>
      </tr>
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 10px; font-weight: bold;">PUMP-002</td>
        <td style="padding: 10px;">1F 蓄水池</td>
        <td style="padding: 10px;">220 V</td>
        <td style="padding: 10px; color: #ea580c; font-weight: bold;">保養待機</td>
      </tr>
    </tbody>
    <tfoot>
      <tr style="background: #f8fafc; font-weight: bold;">
        <td colspan="3" style="padding: 10px; text-align: right; color: #475569;">已監控機台統計：</td>
        <td style="padding: 10px; color: #0284c7;">2 台設備</td>
      </tr>
    </tfoot>
  </table>
</div>`,
    hints: [
      'border-collapse: collapse 是現代 CSS 渲染表格必設屬性，可將相鄰邊框合併為單線條。',
      '使用 colspan 橫跨多欄時，對應的那一行需要減少相應數量的 td，以維持總欄數平衡。'
    ]
  }
];
