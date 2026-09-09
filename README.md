# 網頁製作教學網站：全方位實戰自學指南

> 專為初學者與工程師打造的 **MDN Web Docs 風格** 現代網頁製作自學教學平台！涵蓋 HTML5、CSS3、JavaScript (ES6+) 基礎特訓，以及 Vue 3 核心語法與現代化企業級系統實戰。邊讀中文教學觀念，邊在內建編輯器中動手寫代碼，並在 **Live output** 沙盒中即時體驗效果！

![網頁製作教學網站 Banner](https://vuejs.org/images/logo.png)

## 核心特色

- **MDN 風格排版**：深入淺出的觀念講解、重要語法拆解（Note / Tip / Warning）與實戰任務目標。
- **即時互動演練區 (Live Playground)**：
  - **Live output**：獨立沙盒 iframe 即時編譯與渲染，點擊按鈕、輸入表單具備真實響應式動態！
  - **Editable code**：支援行號、Tab 縮排、即時自動編譯。
  - **Play / Reset / Show solution**：
    - **Play**：手動立即重新執行。
    - **Reset**：一鍵恢復為初始挑戰代碼。
    - **Show solution**：卡關時一鍵載入參考解答。
- **現代質感 UI**：
  - 支援深色 / 淺色模式（Dark / Light Theme）一鍵切換。
  - 整合 Google Firebase Realtime Database 實現真實即時在線人數（Presence）與全站累計瀏覽量統計。
  - 具備學習進度追蹤（自動保存在 LocalStorage，刷新不遺失）。
  - 支援行動裝置與平板響應式選單。
- **技術專業術語手冊 (Technical Glossary)**：
  - 內建 26 個關鍵架構術語（包含 jQuery、Tailwind CSS、SPA、Reactive、Composable、Pinia、Virtual DOM 等）。
  - 提供國際音標 (IPA)、中文近似發音諧音、真實 Web Speech API 語音發音朗讀、工程定義與生活化比喻。

---

## 課程目錄 (Curriculum - 全方位 48 單元)

1. **專案導讀與概念篇**
   - 00. Vue 專案全局導讀：架構、安裝與學習地圖
2. **HTML 核心專題篇**
   - HTML 01. 網頁標準骨架與 DOM 樹建構觀念
   - HTML 02. 語意化標籤 (Semantic Tags) 與現代版面結構
   - HTML 03. 文字階層、超連結安全與現代多媒體資源
   - HTML 04. 現代表單 (Forms) 與互動控制元件
   - HTML 05. 結構化表格 (Table) 與複雜數據展示
3. **CSS 樣式專題篇**
   - CSS 01. 選擇器大全與權重階層 (Specificity)
   - CSS 02. 深度拆解盒子模型 (Box Model) 與外距摺疊
   - CSS 03. 現代排版王道：Flexbox 彈性佈局徹底搞懂
   - CSS 04. 二維網格排版：CSS Grid 實務與儀表板佈局
   - CSS 05. 定位模式 (Position) 與圖層階層 (z-index)
   - CSS 06. 響應式網頁設計 (RWD) 與媒體查詢 (Media Queries)
   - CSS 07. 現代動態轉場、變形與 CSS 設計變數
4. **JavaScript 邏輯專題篇**
   - JS 01. 現代變數與作用域：const、let、型別與 Hoisting
   - JS 02. 解構賦值 (Destructuring) 與展開運算子 (Spread/Rest)
   - JS 03. 函式全解析：箭頭函式、閉包 (Closure) 與 this 之謎
   - JS 04. 陣列高階方法大全 (Functional Programming)
   - JS 05. DOM 操作與事件處理機制 (Event Delegation)
   - JS 06. 非同步核心攻略：Promise 與 async / await
   - JS 07. 現代 Fetch API 網路通訊實戰與 Headers 設定
   - JS 08. 模組化機制 (ES Modules) 與前端工程化打包思維
5. **生態工具庫篇**
   - 工具 01. 生態演進導讀：jQuery 傳統王者與 Tailwind CSS 現代原子化
6. **基礎入門篇**
   - 01. 認識 Vue.js 與第一個應用（宣告式渲染、`createApp`、`.mount()`）
   - 02. 雙花括號與文字插值（`{{ }}` Mustache 語法與 JavaScript 表達式）
   - 03. 屬性動態綁定（`v-bind` 與縮寫 `:`）
   - 04. 事件監聽處理（`v-on` 與縮寫 `@`）
   - 05. 雙向資料綁定（`v-model` 與表單元件）
7. **條件與列表篇**
   - 06. 條件渲染（`v-if` vs `v-show` 差異與效能考量）
   - 07. 列表渲染（`v-for` 與虛擬 DOM 關鍵屬性 `:key`）
8. **核心響應式篇**
   - 08. 響應式基礎（Composition API、`ref()` 與 `reactive()`）
   - 09. 計算屬性（`computed()` 快取機制與簡化模板）
   - 10. 偵聽器與副作用（`watch()` 監聽狀態變更）
9. **進階組件篇**
   - 11. 組件基礎與 Props 傳值（自訂元件與模組化）
   - 12. 子傳父通訊：自訂事件 (`defineEmits` 與 `$emit`)
   - 13. 組件插槽設計 (`Slots`)：打造通用卡片與彈窗外框
   - 14. 組合式邏輯抽離 (`Composables`：封裝 `use...` 邏輯)
10. **系統現代化篇**
    - 15. 單頁應用 (SPA) 與拆除 iframe 導航思維
    - 16. 路由歷史模式：為什麼內網系統推薦 Hash 模式 (`createWebHashHistory`)
    - 17. 路由守衛與權限驗證 (`beforeEach` 與 `meta` 攔截)
    - 18. 全局狀態管理：Pinia 核心實戰 (告別 `window.parent` 全域變數)
    - 19. 現代 API 層封裝：Axios 攔截器與 Token 處理 (告別 `$.ajax`)
11. **架構實戰與決策篇**
   - 20. 隔離開發技巧：Mock 模式與環境切換 (不依賴後端真機開發)
   - 21. 即時推播通訊：WebSocket 與 STOMP 協定實戰 (就地更新防抖動)
   - 22. 企業級主題架構：CSS 變數與設計代碼 (Design Tokens)
   - 23. 行動端適配與 RWD 實戰 (Mobile-First, 安全區與 44px 觸控熱區)
   - 24. 什麼是 PWA？離線快取與 HTTPS 安全限制
   - 25. 舊系統改造策略：絞殺者模式 (Strangler Pattern) 與向主管報告指引

---

## 本地開發與啟動

### 1. 安裝相依套件
```bash
npm install
```

### 2. 啟動開發伺服器
```bash
npm run dev
```
瀏覽器開啟：`http://localhost:5173/`

### 3. 打包建置生產版本
```bash
npm run build
```

---

## 技術棧

- **Core**: Vue 3 (Composition API, `<script setup>`)
- **Build Tool**: Vite
- **Icons**: `lucide-vue-next`
- **Design System**: Vanilla CSS Variables (支援深淺色主題切換)
