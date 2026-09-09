// src/data/curriculumCss.js
// CSS 樣式專題篇：惡補前端外觀排版與動畫課程 (7 單元)

export const cssCurriculum = [
  {
    id: 'css-01-selectors-specificity',
    category: 'CSS 樣式專題篇',
    title: 'CSS 01. 選擇器大全與權重階層 (Specificity)',
    summary: '搞懂樣式為什麼覆蓋不了！掌握標籤、類別、ID、偽類選擇器與 (0,0,0) 權重計分規則，杜絕 !important 濫用。',
    readTime: '8 分鐘',
    concept: `
### 1. 選擇器種類清單
CSS (Cascading Style Sheets，階層樣式表) 的核心在於「選取目標」並「指派樣式」：
- **標籤選擇器**：\`p { ... }\`、\`button { ... }\`（作用範圍最廣）。
- **類別選擇器 (Class)**：\`.card { ... }\`、\`.btn-primary { ... }\`（最推薦的主流用法）。
- **識別碼選擇器 (ID)**：\`#main-header { ... }\`（唯一性高，權重過大不建議常用於樣式）。
- **屬性選擇器**：\`input[type="text"] { ... }\`。
- **後代選擇器 vs 子選擇器**：
  - 後代：\`.nav a\`（不論第幾層後代都套用）。
  - 子代：\`.nav > li\`（僅直接下一層子節點套用）。
- **動態偽類 (Pseudo-classes)**：
  - \`:hover\`（滑鼠游標懸浮移入）。
  - \`:active\`（滑鼠按住當下）。
  - \`:focus\`（輸入框聚焦）。
  - \`:nth-child(even/odd/2n+1)\`（依序號指定）。
- **偽元素 (Pseudo-elements)**：
  - \`::before\` 與 \`::after\`（免加 HTML 標籤，直接用 CSS 插入裝飾圖示或清除浮動）。

---

### 2. 權重階層計分表 (Specificity)
當同一個 HTML 元素被多條 CSS 規則命中時，瀏覽器會依據**權重分數**決定誰生效：

| 選擇器類型 | 代表符號 | 權重分數 |
|---|---|---|
| 行內樣式 (Inline Style) | \`style="..."\` | 1000 分 |
| ID 選擇器 | \`#id\` | 100 分 |
| 類別、偽類、屬性選擇器 | \`.class\`, \`:hover\`, \`[type]\` | 10 分 |
| 標籤與偽元素選擇器 | \`div\`, \`p\`, \`::before\` | 1 分 |
| 通用選擇器與繼承 | \`*\`, 繼承樣式 | 0 分 |

> **防雷警報：為什麼不要隨便用 \`!important\`？**
> \`!important\` 會直接跳出計分規則強制最高優先級。一旦專案中濫用 \`!important\`，未來要修改該樣式時就必須寫出更多 \`!important\` 來覆蓋，造成「特異性核武器競賽」，最終導致 CSS 完全無法維護！

---

### 3. 權威延伸學習資源
- **MDN Web Docs - CSS 選擇器基礎指南**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/Styling_basics/Basic_selectors
- **MDN Web Docs - 特異性 (Specificity) 深度解析**：https://developer.mozilla.org/zh-TW/docs/Web/CSS/Specificity
    `,
    task: `
任務指引：
1. 觀察右側編輯器中的按鈕與狀態徽章。
2. 嘗試使用類別選擇器與 :hover 偽類，讓按鈕在滑鼠懸浮時呈現深藍色轉變。
3. 觀察權重覆蓋的渲染順序。
    `,
    starterCode: `<style>
  /* 基礎標籤樣式 (權重 1 分) */
  button {
    font-family: sans-serif;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
  }

  /* 類別選擇器 (權重 10 分，覆蓋標籤樣式) */
  .action-btn {
    background-color: #2563eb;
    color: #ffffff;
    transition: background-color 0.2s ease;
  }

  /* 偽類選擇器 (權重 10 + 10 = 20 分) */
  .action-btn:hover {
    background-color: #1d4ed8;
  }

  .action-btn:active {
    background-color: #1e40af;
  }
</style>

<div style="padding: 16px; font-family: sans-serif;">
  <h3>選擇器與動態偽類演練</h3>
  <p style="color: #64748b; font-size: 14px;">請將滑鼠移到下方按鈕上體驗 :hover 狀態：</p>
  
  <button class="action-btn">
    啟動冷卻水泵
  </button>
</div>`,
    solutionCode: `<style>
  button {
    font-family: sans-serif;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
  }

  .action-btn {
    background-color: #2563eb;
    color: #ffffff;
    transition: background-color 0.2s ease;
  }

  .action-btn:hover {
    background-color: #1d4ed8;
  }

  .action-btn:active {
    background-color: #1e40af;
  }
</style>

<div style="padding: 16px; font-family: sans-serif;">
  <h3>選擇器與動態偽類演練</h3>
  <p style="color: #64748b; font-size: 14px;">請將滑鼠移到下方按鈕上體驗 :hover 狀態：</p>
  
  <button class="action-btn">
    啟動冷卻水泵
  </button>
</div>`,
    hints: [
      '給選擇器加上 :hover 可以定義滑鼠經過時的外觀。',
      '利用 class 取代 id 撰寫樣式是現代前端的最佳實踐，避免權重過高難以擴充。'
    ]
  },
  {
    id: 'css-02-box-model',
    category: 'CSS 樣式專題篇',
    title: 'CSS 02. 深度拆解盒子模型 (Box Model) 與外距摺疊',
    summary: '所有網頁排版的靈魂！拆解 Content、Padding、Border、Margin，並掌握 box-sizing: border-box 的必備防雷技巧。',
    readTime: '8 分鐘',
    concept: `
### 1. 什麼是盒子模型 (Box Model)？
在瀏覽器眼中，**每一個 HTML 元素都是一個矩形盒子**。
這個盒子由內向外分為四層：
1. **Content (內容區)**：文字、圖片實際顯示的寬高 (\`width\` / \`height\`)。
2. **Padding (內距)**：內容與邊框之間的留白距離。通常會繼承元素的背景色。
3. **Border (邊框)**：包覆在內距外圍的實體線條 (\`border: 1px solid #ccc\`)。
4. **Margin (外距)**：此盒子與其他相鄰盒子之間的空白隔離距離（透明）。

---

### 2. 最嚴重的排版地雷：\`box-sizing\`
這是所有前端初學者最容易碰到的崩潰痛點：
\`\`\`css
/* 傳統預設模式：content-box */
.box {
  box-sizing: content-box; /* 瀏覽器預設 */
  width: 200px;
  padding: 20px;
  border: 5px solid black;
}
\`\`\`
- **傳統計算公式**：
  實際佔用寬度 = \`width(200)\` + \`padding(20*2)\` + \`border(5*2)\` = **250px**！
  你明明設定寬度 200px，元素卻被撐大成 250px，把隔壁的排版硬生生擠出螢幕破版！

\`\`\`css
/* 現代標準解法：border-box */
* {
  box-sizing: border-box;
}
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
}
\`\`\`
- **border-box 計算公式**：
  實際佔用寬度 = **精確等於 200px**！Padding 與 Border 會自動向內吸收，內容區縮減為 150px，絕對不會撐破外層容器。

---

### 3. 外距摺疊 (Margin Collapse)
當兩個垂直相鄰的區塊元素接觸時，上方盒子的 \`margin-bottom: 20px\` 與下方盒子的 \`margin-top: 30px\` **不會相加變成 50px**，而是會發生「摺疊」，**取最大值 30px**！

---

### 4. 權威延伸學習資源
- **MDN Web Docs - 深入盒模型 (Box Model)**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/Styling_basics/Box_model
- **W3Schools CSS Box Model**：https://www.w3schools.com/css/css_boxmodel.asp
    `,
    task: `
任務指引：
1. 觀察右側兩組卡片：上方是預設的 content-box，下方是 border-box。
2. 調整內距 padding 與邊框 border，觀察為什麼 border-box 能夠牢牢鎖定寬度不撐爆容器！
    `,
    starterCode: `<div style="font-family: sans-serif; padding: 16px; background: #f1f5f9;">
  <!-- 卡片 1：傳統 content-box (易撐爆破版) -->
  <div style="width: 200px; padding: 20px; border: 4px solid #ef4444; background: white; margin-bottom: 16px; box-sizing: content-box;">
    <div style="font-size: 13px; font-weight: bold; color: #ef4444;">content-box</div>
    <div style="font-size: 12px; color: #64748b;">設定 width: 200px，實體被撐大至 248px！</div>
  </div>

  <!-- 卡片 2：現代 border-box (嚴格鎖定寬度) -->
  <div style="width: 200px; padding: 20px; border: 4px solid #16a34a; background: white; box-sizing: border-box;">
    <div style="font-size: 13px; font-weight: bold; color: #16a34a;">border-box (推薦)</div>
    <div style="font-size: 12px; color: #64748b;">設定 width: 200px，實體維持 200px！</div>
  </div>
</div>`,
    solutionCode: `<div style="font-family: sans-serif; padding: 16px; background: #f1f5f9;">
  <div style="width: 200px; padding: 20px; border: 4px solid #ef4444; background: white; margin-bottom: 16px; box-sizing: content-box;">
    <div style="font-size: 13px; font-weight: bold; color: #ef4444;">content-box</div>
    <div style="font-size: 12px; color: #64748b;">設定 width: 200px，實體被撐大至 248px！</div>
  </div>

  <div style="width: 200px; padding: 20px; border: 4px solid #16a34a; background: white; box-sizing: border-box;">
    <div style="font-size: 13px; font-weight: bold; color: #16a34a;">border-box (推薦)</div>
    <div style="font-size: 12px; color: #64748b;">設定 width: 200px，實體維持 200px！</div>
  </div>
</div>`,
    hints: [
      '在全站 CSS 最開頭加入 * { box-sizing: border-box; } 是現代所有前端專案的標準起手法。',
      'Padding 適合用來增加元件內部的點擊範圍與視覺呼吸感。'
    ]
  },
  {
    id: 'css-03-flexbox',
    category: 'CSS 樣式專題篇',
    title: 'CSS 03. 現代排版王道：Flexbox 彈性佈局徹底搞懂',
    summary: '告別 float 與繁複計算！徹底掌握 display: flex、主軸 justify-content、交叉軸 align-items 與 flex-grow 彈性伸縮。',
    readTime: '9 分鐘',
    concept: `
### 1. Flexbox 彈性盒子解決了什麼？
在過去，要讓兩個按鈕左右並排、或把文字在方塊中**垂直置中**，必須寫出複雜且脆弱的 \`float: left\` 與 \`clearfix\`。
**Flexbox（一維彈性排版）** 徹底改變了這一切：只要在父容器宣告 \`display: flex\`，子元素立刻獲得彈性伸縮自如的排版能力！

---

### 2. 容器屬性 (Flex Container)
- **\`flex-direction\`**：主軸方向。
  - \`row\`（預設值：由左至右橫向排列）。
  - \`column\`（由上至下直向排列）。
- **\`justify-content\`**：**沿著主軸 (Main Axis) 的對齊方式**。
  - \`flex-start\`：靠起點對齊。
  - \`center\`：主軸置中。
  - \`space-between\`：兩端貼齊，其餘空間平均分配在中間！
  - \`space-around\` / \`space-evenly\`：間距均分。
- **\`align-items\`**：**沿著交叉軸 (Cross Axis) 的對齊方式**。
  - \`center\`：**垂直置中**（前端最常使用的終極大招）！
  - \`stretch\`（預設值：拉伸高度與容器相同）。
- **\`gap: 16px\`**：子元素之間的間距（免去對每個子元素寫 margin-right 的麻煩）。
- **\`flex-wrap: wrap\`**：當子元素總寬度超過一行時，允許自動折行。

---

### 3. 項目屬性 (Flex Items)
- **\`flex-grow: 1\`**：當容器有剩餘空間時，該子元素吸收剩餘空間的比例。
- **\`flex-shrink: 0\`**：當容器空間不足時，禁止該子元素被壓縮變形（例如固定寬度圖示）。
- **\`flex: 1\`**：等同於 \`flex: 1 1 0%\`，讓多個卡片等寬均分整行！

---

### 4. 權威延伸學習資源
- **MDN Web Docs - Flexbox 核心概念**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/CSS_layout/Flexbox
- **CSS-Tricks - A Complete Guide to Flexbox (圖解字典)**：https://css-tricks.com/snippets/css/a-guide-to-flexbox/
    `,
    task: `
任務指引：
1. 觀察右側編輯器中的頂部狀態列。
2. 使用 display: flex、justify-content: space-between 與 align-items: center。
3. 達成左側 Logo 與右側狀態按鈕精美兩端對齊與垂直置中！
    `,
    starterCode: `<div style="font-family: sans-serif; background: #0f172a; color: white; padding: 12px 20px; border-radius: 8px;">
  <!-- Flex 容器 -->
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <div style="display: flex; align-items: center; gap: 10px;">
      <div style="width: 12px; height: 12px; border-radius: 50%; background: #10b981;"></div>
      <span style="font-weight: bold; font-size: 15px;">能源監控主機</span>
    </div>

    <div style="display: flex; gap: 8px;">
      <button style="background: #334155; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 13px; cursor: pointer;">
        重新整理
      </button>
      <button style="background: #2563eb; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 13px; cursor: pointer;">
        設定參數
      </button>
    </div>
  </div>
</div>`,
    solutionCode: `<div style="font-family: sans-serif; background: #0f172a; color: white; padding: 12px 20px; border-radius: 8px;">
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <div style="display: flex; align-items: center; gap: 10px;">
      <div style="width: 12px; height: 12px; border-radius: 50%; background: #10b981;"></div>
      <span style="font-weight: bold; font-size: 15px;">能源監控主機</span>
    </div>

    <div style="display: flex; gap: 8px;">
      <button style="background: #334155; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 13px; cursor: pointer;">
        重新整理
      </button>
      <button style="background: #2563eb; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 13px; cursor: pointer;">
        設定參數
      </button>
    </div>
  </div>
</div>`,
    hints: [
      'justify-content: space-between 能夠將元素分別推向容器的最左端與最右端。',
      'align-items: center 是解決所有文字與按鈕垂直對不齊的最佳良方。'
    ]
  },
  {
    id: 'css-04-grid',
    category: 'CSS 樣式專題篇',
    title: 'CSS 04. 二維網格排版：CSS Grid 實務與儀表板佈局',
    summary: 'Flexbox 是直線排版，Grid 是棋盤維度！掌握 grid-template-columns、fr 單位與 repeat(auto-fit) 打造自適應監控卡片網格。',
    readTime: '9 分鐘',
    concept: `
### 1. Flexbox vs CSS Grid 的本質差異
- **Flexbox 是「一維排版」**：一次只處理一條軸線（橫排或直排），適合導航列、按鈕群、卡片內部圖文對齊。
- **CSS Grid 是「二維排版」**：同時控制「欄 (Column)」與「列 (Row)」，像在切棋盤格子，最適合整個系統儀表板 (Dashboard) 與卡片網格。

---

### 2. Grid 核心語法快速掌握
\`\`\`css
.dashboard-grid {
  display: grid;
  /* 定義 3 欄，寬度依比例均分 (1fr) */
  grid-template-columns: 1fr 1fr 1fr;
  /* 欄與列之間的間距 */
  gap: 16px;
}
\`\`\`

#### \`fr\` 彈性分數單位 (Fraction)
\`1fr\` 代表「瓜分容器剩餘空間的 1 等份」。
\`grid-template-columns: 200px 1fr 2fr;\` 表示第一欄固定 200px，剩下寬度分成 3 等份，第二欄分 1 份，第三欄分 2 份。

---

### 3. 一行代碼實現極致響應式：\`repeat(auto-fit, minmax(...))\`
在過去要為手機、平板、桌面寫一堆 \`@media\` 斷點，Grid 提供了革命性的一行語法：
\`\`\`css
.responsive-card-grid {
  display: grid;
  /* 每個卡片最小 240px，最大 1fr 撐滿；空間夠就自動擺多欄，不夠自動折行 */
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}
\`\`\`
無需寫任何媒體查詢，畫面縮小時自動從 4 欄變成 2 欄，手機上自動變 1 欄！

---

### 4. 權威延伸學習資源
- **MDN Web Docs - CSS Grid 網格佈局教學**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/CSS_layout/Grids
- **CSS-Tricks - A Complete Guide to CSS Grid**：https://css-tricks.com/snippets/css/complete-guide-grid/
    `,
    task: `
任務指引：
1. 觀察右側編輯器中的 4 塊設備監控卡片。
2. 透過 display: grid 與 grid-template-columns: repeat(2, 1fr) 實現 2x2 對齊的網格。
3. 觀察卡片在網格中的整齊切齊效果。
    `,
    starterCode: `<div style="font-family: sans-serif; padding: 16px; background: #f8fafc;">
  <!-- Grid 容器 -->
  <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px;">
    <div style="background: white; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0;">
      <div style="font-size: 13px; color: #64748b;">冰水主機 #01</div>
      <div style="font-size: 20px; font-weight: bold; color: #0f172a; margin-top: 4px;">42.5 kW</div>
    </div>
    <div style="background: white; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0;">
      <div style="font-size: 13px; color: #64748b;">冷卻水塔 #01</div>
      <div style="font-size: 20px; font-weight: bold; color: #0f172a; margin-top: 4px;">18.2 kW</div>
    </div>
    <div style="background: white; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0;">
      <div style="font-size: 13px; color: #64748b;">空壓機組 #02</div>
      <div style="font-size: 20px; font-weight: bold; color: #0f172a; margin-top: 4px;">85.0 kW</div>
    </div>
    <div style="background: white; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0;">
      <div style="font-size: 13px; color: #64748b;">變電站總開關</div>
      <div style="font-size: 20px; font-weight: bold; color: #16a34a; margin-top: 4px;">運轉正常</div>
    </div>
  </div>
</div>`,
    solutionCode: `<div style="font-family: sans-serif; padding: 16px; background: #f8fafc;">
  <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px;">
    <div style="background: white; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0;">
      <div style="font-size: 13px; color: #64748b;">冰水主機 #01</div>
      <div style="font-size: 20px; font-weight: bold; color: #0f172a; margin-top: 4px;">42.5 kW</div>
    </div>
    <div style="background: white; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0;">
      <div style="font-size: 13px; color: #64748b;">冷卻水塔 #01</div>
      <div style="font-size: 20px; font-weight: bold; color: #0f172a; margin-top: 4px;">18.2 kW</div>
    </div>
    <div style="background: white; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0;">
      <div style="font-size: 13px; color: #64748b;">空壓機組 #02</div>
      <div style="font-size: 20px; font-weight: bold; color: #0f172a; margin-top: 4px;">85.0 kW</div>
    </div>
    <div style="background: white; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0;">
      <div style="font-size: 13px; color: #64748b;">變電站總開關</div>
      <div style="font-size: 20px; font-weight: bold; color: #16a34a; margin-top: 4px;">運轉正常</div>
    </div>
  </div>
</div>`,
    hints: [
      'repeat(2, 1fr) 等同於 1fr 1fr，會將容器均分成兩欄。',
      'gap 屬性能夠讓子網格元件之間保有精確的留白間距。'
    ]
  },
  {
    id: 'css-05-position-zindex',
    category: 'CSS 樣式專題篇',
    title: 'CSS 05. 定位模式 (Position) 與圖層階層 (z-index)',
    summary: '掌握 relative、absolute、fixed、sticky 的定位基準，解析 z-index 為什麼失效與堆疊上下文 (Stacking Context)。',
    readTime: '8 分鐘',
    concept: `
### 1. 五大定位屬性 (Position) 比較
\`position\` 決定元素在頁面上的空間座標規則：
- **\`static\`（預設值）**：正常文件流。此時 \`top\`, \`left\`, \`z-index\` 設定完全無效！
- **\`relative\`（相對定位）**：留在正常文件流中佔位，但可以依據自身原本位置產生偏移；**最常用來作為子元素 absolute 的定位基準參考點**！
- **\`absolute\`（絕對定位）**：**抽離文件流 (脫離排版)**，依據「最近一層非 static 的祖先元素」做座標定位 (\`top/bottom/left/right\`)。
- **\`fixed\`（固定定位）**：抽離文件流，直接釘在瀏覽器視窗 (Viewport) 特定位置，頁面捲動時固定不動（例如釘在頂部的導航列或右下角回到頂端按鈕）。
- **\`sticky\`（黏性定位）**：滾動到指定門檻前像 \`relative\`，滾動超過時吸附在視窗像 \`fixed\`（常做表格表頭凍結或文章章節目錄）。

---

### 2. 圖層覆蓋與 \`z-index\`
當元素重疊時，\`z-index\`（數值越大越上層）決定誰蓋在誰上面。

> **防雷警報：為什麼我的 \`z-index: 9999\` 還是被蓋過去？**
> 1. \`z-index\` 只對有定位屬性（非 static）的元素生效。
> 2. **堆疊上下文 (Stacking Context)**：如同「拼爹原則」！如果父容器 A 的 z-index 只有 1，那麼即使 A 底下的子元素寫 \`z-index: 99999\`，也永遠無法蓋過同層級中 \`z-index: 2\` 的父容器 B。

---

### 3. 權威延伸學習資源
- **MDN Web Docs - CSS 定位模式**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/CSS_layout/Positioning
- **MDN Web Docs - 深入理解 z-index 與堆疊上下文**：https://developer.mozilla.org/zh-TW/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context
    `,
    task: `
任務指引：
1. 觀察右側編輯器中的卡片與告警紅點。
2. 讓外層卡片設為 position: relative，讓內部的告警徽章設為 position: absolute 並定位在右上角 (top: -8px; right: -8px;)。
3. 體會子絕父相 (Absolute in Relative) 的定位魅力。
    `,
    starterCode: `<div style="font-family: sans-serif; padding: 24px; background: #f1f5f9;">
  <!-- 父容器：作為絕對定位的基準點 (relative) -->
  <div style="position: relative; width: 220px; background: white; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <!-- 右上角角標：絕對定位 (absolute) -->
    <span style="position: absolute; top: -8px; right: -8px; background: #ef4444; color: white; font-size: 11px; font-weight: bold; padding: 2px 8px; border-radius: 9999px; box-shadow: 0 2px 4px rgba(239,68,68,0.3);">
      1 則告警
    </span>

    <h4 style="margin: 0 0 6px 0; color: #0f172a;">冷卻水泵 B 組</h4>
    <p style="margin: 0; font-size: 13px; color: #64748b;">水壓過載提醒通報</p>
  </div>
</div>`,
    solutionCode: `<div style="font-family: sans-serif; padding: 24px; background: #f1f5f9;">
  <div style="position: relative; width: 220px; background: white; padding: 16px; border-radius: 8px; border: 1px solid #cbd5e1; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <span style="position: absolute; top: -8px; right: -8px; background: #ef4444; color: white; font-size: 11px; font-weight: bold; padding: 2px 8px; border-radius: 9999px; box-shadow: 0 2px 4px rgba(239,68,68,0.3);">
      1 則告警
    </span>

    <h4 style="margin: 0 0 6px 0; color: #0f172a;">冷卻水泵 B 組</h4>
    <p style="margin: 0; font-size: 13px; color: #64748b;">水壓過載提醒通報</p>
  </div>
</div>`,
    hints: [
      '口訣「子絕父相」：內部要自由飛翔的元素設 absolute，外層當邊界的容器設 relative。',
      '給徽章加上負座標 (如 top: -8px) 即可讓它半凸出於卡片邊界。'
    ]
  },
  {
    id: 'css-06-rwd-mediaqueries',
    category: 'CSS 樣式專題篇',
    title: 'CSS 06. 響應式網頁設計 (RWD) 與媒體查詢 (Media Queries)',
    summary: '一套代碼適應手機、平板與桌機！掌握 Mobile-First 設計哲學、常用斷點切換與 rem/vw 流體排版策略。',
    readTime: '9 分鐘',
    concept: `
### 1. 什麼是響應式網頁設計 (RWD, Responsive Web Design)？
在行動網路普及前，很多公司會做兩套網站：一套桌面版、一套手機版 (m.domain.com)。這導致維護成本翻倍且資料容易不同步。
現代標準做法是：**單一 HTML 代碼，由 CSS 根據不同螢幕寬度自動切換排版版型**！

---

### 2. 媒體查詢 (Media Queries) 語法
\`\`\`css
/* 1. 基礎預設樣式：以手機版為基礎 (Mobile-First) */
.dashboard-container {
  display: flex;
  flex-direction: column; /* 手機上單欄直排 */
  padding: 12px;
}

/* 2. 平板斷點：螢幕寬度 >= 768px */
@media (min-width: 768px) {
  .dashboard-container {
    flex-direction: row; /* 平板以上切換為左右橫排 */
    padding: 24px;
  }
}

/* 3. 桌面大螢幕斷點：螢幕寬度 >= 1024px */
@media (min-width: 1024px) {
  .dashboard-container {
    max-width: 1200px;
    margin: 0 auto; /* 水平居中 */
  }
}
\`\`\`

---

### 3. 現代相對單位
- **\`rem\`**：相對於 \`<html>\` 根元素的字級大小（預設 1rem = 16px）。使用者在手機調整無障礙字體時會自動等比放大，比寫死 \`px\` 更親和。
- **\`vw\` / \`vh\`**：視窗寬度 (Viewport Width) 與高度的百分比（100vw = 螢幕滿寬）。
- **\`clamp(最小值, 理想值, 最大值)\`**：例如 \`font-size: clamp(14px, 2.5vw, 24px)\`，字體隨螢幕寬度平滑流體縮放，且不低於 14px、不高於 24px。

---

### 4. 權威延伸學習資源
- **MDN Web Docs - 響應式網頁設計基礎**：https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Core/CSS_layout/Responsive_Design
- **MDN Web Docs - 使用媒體查詢 (Media Queries)**：https://developer.mozilla.org/zh-TW/docs/Web/CSS/CSS_media_queries/Using_media_queries
    `,
    task: `
任務指引：
1. 觀察右側編輯器中的響應式佈局代碼。
2. 了解 @media (min-width: 600px) 如何在寬度足夠時將單欄切換為雙欄並排。
3. 體會 Mobile-First（手機優先）的優雅之處。
    `,
    starterCode: `<style>
  .rwd-demo-box {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-family: sans-serif;
  }

  .rwd-card {
    background: #ffffff;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    padding: 16px;
    flex: 1;
  }

  /* 平板與桌面以上：橫向並排 (雙欄) */
  @media (min-width: 500px) {
    .rwd-demo-box {
      flex-direction: row;
    }
  }
</style>

<div style="background: #f8fafc; padding: 16px;">
  <p style="font-size: 13px; color: #64748b; margin-top: 0;">
    拉動視窗或調整寬度時，下方卡片會在單欄直排與雙欄橫排之間自動切換：
  </p>

  <div class="rwd-demo-box">
    <div class="rwd-card">
      <h4 style="margin: 0 0 6px 0; color: #1e293b;">即時監控數據區</h4>
      <span style="font-size: 22px; font-weight: bold; color: #2563eb;">238 V</span>
    </div>
    <div class="rwd-card">
      <h4 style="margin: 0 0 6px 0; color: #1e293b;">今日累積發電量</h4>
      <span style="font-size: 22px; font-weight: bold; color: #16a34a;">1,420 kWh</span>
    </div>
  </div>
</div>`,
    solutionCode: `<style>
  .rwd-demo-box {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-family: sans-serif;
  }

  .rwd-card {
    background: #ffffff;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    padding: 16px;
    flex: 1;
  }

  @media (min-width: 500px) {
    .rwd-demo-box {
      flex-direction: row;
    }
  }
</style>

<div style="background: #f8fafc; padding: 16px;">
  <p style="font-size: 13px; color: #64748b; margin-top: 0;">
    拉動視窗或調整寬度時，下方卡片會在單欄直排與雙欄橫排之間自動切換：
  </p>

  <div class="rwd-demo-box">
    <div class="rwd-card">
      <h4 style="margin: 0 0 6px 0; color: #1e293b;">即時監控數據區</h4>
      <span style="font-size: 22px; font-weight: bold; color: #2563eb;">238 V</span>
    </div>
    <div class="rwd-card">
      <h4 style="margin: 0 0 6px 0; color: #1e293b;">今日累積發電量</h4>
      <span style="font-size: 22px; font-weight: bold; color: #16a34a;">1,420 kWh</span>
    </div>
  </div>
</div>`,
    hints: [
      'Mobile-First 思維是：先寫手機版樣式，再使用 min-width 漸進增強為平板與桌機。',
      'HTML <head> 中的 meta viewport 宣告是所有 RWD 效果得以在手機上生效的前提。'
    ]
  },
  {
    id: 'css-07-transitions-variables',
    category: 'CSS 樣式專題篇',
    title: 'CSS 07. 現代動態轉場、變形與 CSS 設計變數',
    summary: '打造極致視覺質感！靈活運用 CSS 自訂變數 (CSS Variables)、transition 平滑轉場與 @keyframes 關鍵影格動畫。',
    readTime: '8 分鐘',
    concept: `
### 1. 什麼是 CSS 自訂變數 (CSS Variables)？
在以前，若要更換全站主色，必須在幾十個 CSS 檔案中手動搜尋取代 \`#2563eb\`。
現代 CSS 支援原生的自訂變數：
\`\`\`css
:root {
  /* 定義全局設計代碼 (Design Tokens) */
  --primary-color: #2563eb;
  --bg-card: #ffffff;
  --radius-md: 8px;
}

[data-theme="dark"] {
  /* 一鍵切換深色主題！ */
  --bg-card: #1e293b;
  --text-main: #f8fafc;
}

.card {
  background-color: var(--bg-card);
  border-radius: var(--radius-md);
}
\`\`\`

---

### 2. 平滑過渡 (Transitions)
不使用 JavaScript，僅靠 CSS 就能讓狀態改變具有絲滑動態：
\`\`\`css
.btn {
  background-color: var(--primary-color);
  /* 轉場動畫：作用屬性、耗時、緩動曲線 */
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn:hover {
  /* 搭配 transform 啟用 GPU 硬體加速，不卡頓 */
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}
\`\`\`

---

### 3. 關鍵影格動畫 (@keyframes)
讓元素自主循環播放動畫（如設備運轉呼吸燈）：
\`\`\`css
@keyframes pulse-light {
  0% {
    opacity: 0.4;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 0.4;
    transform: scale(0.9);
  }
}

.status-indicator {
  animation: pulse-light 2s infinite ease-in-out;
}
\`\`\`

---

### 4. 權威延伸學習資源
- **MDN Web Docs - 使用 CSS 自訂屬性 (變數)**：https://developer.mozilla.org/zh-TW/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties
- **MDN Web Docs - CSS 動畫指南 (@keyframes)**：https://developer.mozilla.org/zh-TW/docs/Web/CSS/CSS_animations/Using_CSS_animations
    `,
    task: `
任務指引：
1. 觀察右側編輯器中的儀表板狀態指示燈。
2. 體驗透過 @keyframes 動態呼吸燈與 CSS 變數切換打造的現代工控質感介面！
    `,
    starterCode: `<style>
  :root {
    --brand-blue: #0284c7;
    --running-green: #16a34a;
  }

  @keyframes breathing {
    0% {
      box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.7);
    }
    70% {
      box-shadow: 0 0 0 8px rgba(22, 163, 74, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(22, 163, 74, 0);
    }
  }

  .device-monitor-card {
    font-family: sans-serif;
    padding: 16px;
    background: #0f172a;
    color: white;
    border-radius: 8px;
    max-width: 320px;
  }

  .online-indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--running-green);
    display: inline-block;
    animation: breathing 2s infinite;
  }
</style>

<div class="device-monitor-card">
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <span style="font-weight: bold; font-size: 14px;">1 號冰水泵浦</span>
    <div style="display: flex; align-items: center; gap: 6px;">
      <span class="online-indicator"></span>
      <span style="font-size: 12px; color: #94a3b8;">即時連線中</span>
    </div>
  </div>
</div>`,
    solutionCode: `<style>
  :root {
    --brand-blue: #0284c7;
    --running-green: #16a34a;
  }

  @keyframes breathing {
    0% {
      box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.7);
    }
    70% {
      box-shadow: 0 0 0 8px rgba(22, 163, 74, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(22, 163, 74, 0);
    }
  }

  .device-monitor-card {
    font-family: sans-serif;
    padding: 16px;
    background: #0f172a;
    color: white;
    border-radius: 8px;
    max-width: 320px;
  }

  .online-indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--running-green);
    display: inline-block;
    animation: breathing 2s infinite;
  }
</style>

<div class="device-monitor-card">
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <span style="font-weight: bold; font-size: 14px;">1 號冰水泵浦</span>
    <div style="display: flex; align-items: center; gap: 6px;">
      <span class="online-indicator"></span>
      <span style="font-size: 12px; color: #94a3b8;">即時連線中</span>
    </div>
  </div>
</div>`,
    hints: [
      'CSS Variables (--名稱) 可在任何地方透過 var(--名稱) 取用，實現全站主題色統一管理。',
      '使用 transform 與 opacity 動畫能善用硬體加速，比頻繁修改 top、left 或 margin 更流暢不卡頓。'
    ]
  }
];
