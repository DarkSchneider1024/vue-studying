# Vue 3 實戰自學指南 (Vue 3 Interactive Learning Platform)

> 專為初學者打造的 **MDN Web Docs 風格** Vue 3 互動教學平台！邊讀中文教學觀念，邊在內建編輯器中動手寫代碼，並在 **Live output** 沙盒中即時體驗響應式效果。

![Vue 3 Tutorial Banner](https://vuejs.org/images/logo.png)

## 🌟 核心特色

- 📖 **MDN 風格排版**：深入淺出的觀念講解、重要語法拆解（Note / Tip / Warning）與實戰任務目標。
- ⚡ **即時互動演練區 (Live Playground)**：
  - **Live output**：獨立沙盒 iframe 即時編譯與渲染，點擊按鈕、輸入表單具備真實響應式動態！
  - **Editable code**：支援行號、Tab 縮排、即時自動編譯。
  - **Play / Reset / Show solution**：
    - ▶ **Play**：手動立即重新執行。
    - 🔄 **Reset**：一鍵恢復為初始挑戰代碼。
    - 💡 **Show solution**：卡關時一鍵載入參考解答。
- 🎨 **現代質感 UI**：
  - 支援深色 / 淺色模式（Dark / Light Theme）一鍵切換。
  - 具備學習進度追蹤（自動保存在 LocalStorage，刷新不遺失）。
  - 支援行動裝置與平板響應式選單。

---

## 📚 課程目錄 (Curriculum)

1. **基礎入門篇**
   - 01. 認識 Vue.js 與第一個應用（宣告式渲染、`createApp`、`.mount()`）
   - 02. 雙花括號與文字插值（`{{ }}` Mustache 語法與 JavaScript 表達式）
   - 03. 屬性動態綁定（`v-bind` 與縮寫 `:`）
   - 04. 事件監聽處理（`v-on` 與縮寫 `@`）
   - 05. 雙向資料綁定（`v-model` 與表單元件）
2. **條件與列表篇**
   - 06. 條件渲染（`v-if` vs `v-show`）
   - 07. 列表渲染（`v-for` 與重要屬性 `:key`）
3. **核心響應式篇**
   - 08. 響應式基礎（Composition API、`ref()` 與 `reactive()`）
   - 09. 計算屬性（`computed()` 快取機制與簡化模板）
   - 10. 偵聽器與副作用（`watch()` 監聽狀態變更）
4. **進階與組件篇**
   - 11. 組件基礎與 Props 傳值（自訂元件與模組化）

---

## 🚀 本地開發與啟動

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

## 🛠 技術棧

- **Core**: Vue 3 (Composition API, `<script setup>`)
- **Build Tool**: Vite
- **Icons**: `@lucide/vue`
- **Design System**: Vanilla CSS Variables (支援深淺色主題切換)
