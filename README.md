# Vue 3 實戰自學指南 (Vue 3 Interactive Learning Platform)

> 專為初學者打造的 **MDN Web Docs 風格** Vue 3 互動教學平台！邊讀中文教學觀念，邊在內建編輯器中動手寫代碼，並在 **Live output** 沙盒中即時體驗響應式效果。

![Vue 3 Tutorial Banner](https://vuejs.org/images/logo.png)

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
  - 具備學習進度追蹤（自動保存在 LocalStorage，刷新不遺失）。
  - 支援行動裝置與平板響應式選單。
- **技術專業術語手冊 (Technical Glossary)**：
  - 內建 24 個關鍵架構術語（如 SPA、Reactive、Composable、Pinia、Virtual DOM 等）。
  - 提供國際音標 (IPA)、中文近似發音諧音、真實 Web Speech API 語音發音朗讀、工程定義與生活化比喻。

---

## 課程目錄 (Curriculum - 共 29 單元)

1. **專案導讀與概念篇**
   - 00. Vue 專案全局導讀：架構、安裝與學習地圖
2. **網頁基石先修篇**
   - 前置 01. HTML 結構基石：標籤骨架、語意化與表單控制元件
   - 前置 02. CSS 樣式視覺：選擇器、盒子模型 (Box Model) 與 Flexbox 現代彈性佈局
   - 前置 03. JavaScript 邏輯引擎：變數、箭頭函式、陣列方法與非同步 Promise
3. **基礎入門篇**
   - 01. 認識 Vue.js 與第一個應用（宣告式渲染、`createApp`、`.mount()`）
   - 02. 雙花括號與文字插值（`{{ }}` Mustache 語法與 JavaScript 表達式）
   - 03. 屬性動態綁定（`v-bind` 與縮寫 `:`）
   - 04. 事件監聽處理（`v-on` 與縮寫 `@`）
   - 05. 雙向資料綁定（`v-model` 與表單元件）
4. **條件與列表篇**
   - 06. 條件渲染（`v-if` vs `v-show` 差異與效能考量）
   - 07. 列表渲染（`v-for` 與虛擬 DOM 關鍵屬性 `:key`）
5. **核心響應式篇**
   - 08. 響應式基礎（Composition API、`ref()` 與 `reactive()`）
   - 09. 計算屬性（`computed()` 快取機制與簡化模板）
   - 10. 偵聽器與副作用（`watch()` 監聽狀態變更）
6. **進階組件篇**
   - 11. 組件基礎與 Props 傳值（自訂元件與模組化）
   - 12. 子傳父通訊：自訂事件 (`defineEmits` 與 `$emit`)
   - 13. 組件插槽設計 (`Slots`)：打造通用卡片與彈窗外框
   - 14. 組合式邏輯抽離 (`Composables`：封裝 `use...` 邏輯)
7. **系統現代化篇**
   - 15. 單頁應用 (SPA) 與拆除 iframe 導航思維
   - 16. 路由歷史模式：為什麼內網系統推薦 Hash 模式 (`createWebHashHistory`)
   - 17. 路由守衛與權限驗證 (`beforeEach` 與 `meta` 攔截)
   - 18. 全局狀態管理：Pinia 核心實戰 (告別 `window.parent` 全域變數)
   - 19. 現代 API 層封裝：Axios 攔截器與 Token 處理 (告別 `$.ajax`)
8. **架構實戰與決策篇**
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
