<script setup>
import { ref } from 'vue';
import { 
  Globe, 
  FileCode, 
  Palette, 
  Braces, 
  Layers, 
  ArrowRight, 
  Monitor, 
  Cpu, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  Terminal, 
  Play, 
  Zap,
  Sliders,
  Code2,
  HardDrive,
  Eye
} from 'lucide-vue-next';

const emit = defineEmits(['start-track', 'open-lessons']);

// 互動式三要素演練開關
const enableHtml = ref(true);
const enableCss = ref(true);
const enableJs = ref(true);

// 演練台互動計數
const interactiveCount = ref(10);
const handleIncrement = () => {
  if (enableJs.value) {
    interactiveCount.value += 5;
  }
};
const handleReset = () => {
  if (enableJs.value) {
    interactiveCount.value = 0;
  }
};
</script>

<template>
  <div class="welcome-container">
    <!-- Hero 頂部主視覺 -->
    <section class="welcome-hero">
      <div class="hero-badge">
        <Sparkles :size="14" class="badge-icon" />
        <span>新手前端導引入門</span>
      </div>
      <h1 class="hero-title">如何寫出你的第一個網站？</h1>
      <p class="hero-subtitle">
        拋開艱澀的技術術語。用最清晰直觀的方式，搞懂網頁在瀏覽器裡的運作原理，以及 HTML、CSS、JavaScript 與 Vue 如何協力打造現代網路世界！
      </p>

      <div class="hero-actions">
        <button class="primary-action-btn" @click="emit('start-track', 'vue')">
          <Play :size="16" />
          <span>直接進入 Vue 3 實戰課程</span>
        </button>
        <button class="secondary-action-btn" @click="emit('start-track', 'html')">
          <BookOpen :size="16" />
          <span>從 HTML 基礎開始打底</span>
        </button>
      </div>
    </section>

    <!-- 第一章：網頁到底是怎麼運作的？ -->
    <section class="info-section">
      <div class="section-header">
        <div class="section-tag">核心底層觀念</div>
        <h2 class="section-title">1. 網頁是怎麼在瀏覽器跑起來的？</h2>
        <p class="section-desc">
          你在電腦上寫的網頁，本質上只是純文字檔案。瀏覽器就像一位技藝高超的建築師，負責將這些文字轉譯成你在螢幕上看到的豐富畫面。
        </p>
      </div>

      <div class="pipeline-grid">
        <div class="pipeline-step">
          <div class="step-num">01</div>
          <div class="step-icon-wrap icon-code">
            <FileCode :size="24" />
          </div>
          <h3 class="step-title">撰寫文字源碼</h3>
          <p class="step-desc">
            工程師使用編輯器，編寫以 <code>.html</code>、<code>.css</code>、<code>.js</code> 為結尾的純文字檔案。
          </p>
        </div>

        <div class="pipeline-arrow">
          <ArrowRight :size="20" />
        </div>

        <div class="pipeline-step">
          <div class="step-num">02</div>
          <div class="step-icon-wrap icon-parse">
            <HardDrive :size="24" />
          </div>
          <h3 class="step-title">瀏覽器解析結構</h3>
          <p class="step-desc">
            瀏覽器讀入 HTML 生成骨架（DOM 樹），讀入 CSS 建立樣式規則（CSSOM 樹），並將兩者合成為渲染樹。
          </p>
        </div>

        <div class="pipeline-arrow">
          <ArrowRight :size="20" />
        </div>

        <div class="pipeline-step">
          <div class="step-num">03</div>
          <div class="step-icon-wrap icon-paint">
            <Monitor :size="24" />
          </div>
          <h3 class="step-title">排版與繪製畫面</h3>
          <p class="step-desc">
            計算每個元素在螢幕上的精確座標與幾何尺寸（Layout），最後把顏色、文字與陰影逐像素繪製出來（Paint）。
          </p>
        </div>

        <div class="pipeline-arrow">
          <ArrowRight :size="20" />
        </div>

        <div class="pipeline-step">
          <div class="step-num">04</div>
          <div class="step-icon-wrap icon-engine">
            <Cpu :size="24" />
          </div>
          <h3 class="step-title">JavaScript 注入靈魂</h3>
          <p class="step-desc">
            JS 引擎隨時待命，當使用者點擊按鈕、輸入文字或滾動滑鼠時，即時更新資料並重新驅動畫面變換！
          </p>
        </div>
      </div>
    </section>

    <!-- 第二章：前端四劍客的角色分工（極度生動好懂的造屋比喻） -->
    <section class="info-section">
      <div class="section-header">
        <div class="section-tag">分工與定位</div>
        <h2 class="section-title">2. 前端四劍客各自在做什麼？</h2>
        <p class="section-desc">
          如果把建立一個網站比喻成「建造一棟現代智慧住宅」，那麼四套技術的分工一目了然：
        </p>
      </div>

      <div class="roles-cards-grid">
        <!-- HTML -->
        <div class="role-card card-html" @click="emit('start-track', 'html')">
          <div class="role-card-top">
            <div class="role-icon-box">
              <FileCode :size="22" />
            </div>
            <span class="role-sublabel">骨架與磚瓦</span>
          </div>
          <h3 class="role-name">HTML</h3>
          <div class="role-metaphor">負責定義網頁「有什麼內容」</div>
          <p class="role-body">
            負責建立房屋的樑柱、隔間與樓層。在網頁中用來標註文章標題（<code>h1</code>）、段落文字（<code>p</code>）、按鈕（<code>button</code>）與表單輸入欄位。
          </p>
          <div class="role-footer-action">
            <span>探索 HTML 專題 (5 單元)</span>
            <ArrowRight :size="14" />
          </div>
        </div>

        <!-- CSS -->
        <div class="role-card card-css" @click="emit('start-track', 'css')">
          <div class="role-card-top">
            <div class="role-icon-box">
              <Palette :size="22" />
            </div>
            <span class="role-sublabel">裝潢與外觀</span>
          </div>
          <h3 class="role-name">CSS</h3>
          <div class="role-metaphor">負責定義網頁「長什麼模樣」</div>
          <p class="role-body">
            負責房間的粉刷配色、壁紙挑選、採光與家具擺放排版（Flexbox 與 Grid）。讓網頁不只美觀，還能自動適應手機與電腦螢幕（RWD 響應式）。
          </p>
          <div class="role-footer-action">
            <span>探索 CSS 專題 (7 單元)</span>
            <ArrowRight :size="14" />
          </div>
        </div>

        <!-- JavaScript -->
        <div class="role-card card-js" @click="emit('start-track', 'javascript')">
          <div class="role-card-top">
            <div class="role-icon-box">
              <Braces :size="22" />
            </div>
            <span class="role-sublabel">水電智慧神經</span>
          </div>
          <h3 class="role-name">JavaScript</h3>
          <div class="role-metaphor">負責定義網頁「如何動態互動」</div>
          <p class="role-body">
            就像房屋裡的智慧開關與水電網絡。點擊電燈會發光、自動感應門會開啟、冷氣會依室溫調整。在網頁中負責處理點擊、算錢、驗證與傳輸資料。
          </p>
          <div class="role-footer-action">
            <span>探索 JS 專題 (8 單元)</span>
            <ArrowRight :size="14" />
          </div>
        </div>

        <!-- Vue -->
        <div class="role-card card-vue" @click="emit('start-track', 'vue')">
          <div class="role-card-top">
            <div class="role-icon-box">
              <Layers :size="22" />
            </div>
            <span class="role-sublabel">現代工業化引擎</span>
          </div>
          <h3 class="role-name">Vue 3</h3>
          <div class="role-metaphor">用「資料驅動」擺脫繁瑣手工操作</div>
          <p class="role-body">
            傳統 JS 每次資料改變都要手動查找 DOM 節點並逐一修改。Vue 引入「響應式資料 (Reactivity)」：只要狀態變了，畫面自動精密同步更新，是現代大型專案的標準利器！
          </p>
          <div class="role-footer-action">
            <span>探索 Vue 3 核心 (28 單元)</span>
            <ArrowRight :size="14" />
          </div>
        </div>
      </div>
    </section>

    <!-- 第三章：互動體驗區（感受 HTML + CSS + JS 疊加威力） -->
    <section class="info-section interactive-demo-section">
      <div class="section-header">
        <div class="section-tag">動手親身體會</div>
        <h2 class="section-title">3. 網頁三要素疊加威力演示</h2>
        <p class="section-desc">
          切換下方的開關，親眼觀察「只有骨架」、「加上樣式」以及「賦予動態響應」的畫面演進過程！
        </p>
      </div>

      <div class="interactive-sandbox">
        <!-- 控制開關列 -->
        <div class="sandbox-controls">
          <label class="control-toggle">
            <input type="checkbox" v-model="enableHtml" />
            <span class="toggle-name">
              <FileCode :size="15" />
              1. HTML 骨架
            </span>
          </label>

          <label class="control-toggle">
            <input type="checkbox" v-model="enableCss" :disabled="!enableHtml" />
            <span class="toggle-name">
              <Palette :size="15" />
              2. CSS 裝潢樣式
            </span>
          </label>

          <label class="control-toggle">
            <input type="checkbox" v-model="enableJs" :disabled="!enableHtml" />
            <span class="toggle-name">
              <Zap :size="15" />
              3. JS / Vue 響應動能
            </span>
          </label>
        </div>

        <!-- 演示結果畫布 -->
        <div class="sandbox-stage">
          <!-- 情況 A: 連 HTML 都關閉 -->
          <div v-if="!enableHtml" class="empty-stage-state">
            <Code2 :size="32" class="empty-icon" />
            <p>沒有 HTML，畫面就是一片虛無，不存在任何可見的內容或結構。</p>
          </div>

          <!-- 情況 B: 只有 HTML (純文字排版、瀏覽器預設黑白骨架) -->
          <div v-else-if="!enableCss" class="raw-html-preview">
            <div class="raw-note">提示：這是只有 HTML 的狀態（無任何 CSS 樣式修飾）</div>
            <h1>設備能源監控卡片</h1>
            <p>主機狀態：運轉中 (已連線)</p>
            <p>累計發電功率點數：{{ interactiveCount }} 點</p>
            <button @click="handleIncrement">
              點我累積功率 ({{ enableJs ? 'JS 動態響應有效' : '無 JS，點擊無反應' }})
            </button>
            <button @click="handleReset" style="margin-left: 5px;">歸零</button>
          </div>

          <!-- 情況 C: HTML + CSS (現代精美卡片) -->
          <div v-else class="styled-preview-card">
            <div class="preview-card-header">
              <div class="preview-badge-status">
                <span class="status-dot"></span>
                <span>系統運轉中</span>
              </div>
              <span class="preview-chip">現代設計系統</span>
            </div>

            <div class="preview-card-body">
              <h3 class="preview-title">儲能與發電監控儀表</h3>
              <p class="preview-desc">透過 CSS 彈性排版與漸層配色，將原本單調的文字轉化為極具質感的科技介面。</p>
              
              <div class="preview-counter-display">
                <span class="counter-label">即時電力回饋點數</span>
                <div class="counter-val-wrap">
                  <span class="counter-num">{{ interactiveCount }}</span>
                  <span class="counter-unit">kW</span>
                </div>
              </div>
            </div>

            <div class="preview-card-footer">
              <button 
                class="btn-interactive" 
                :class="{ 'is-disabled': !enableJs }"
                @click="handleIncrement"
              >
                <Zap :size="15" />
                <span>{{ enableJs ? '點我增加 +5 點（Vue 驅動）' : 'JS 未啟動（按鈕無反應）' }}</span>
              </button>
              <button 
                class="btn-reset" 
                :class="{ 'is-disabled': !enableJs }"
                @click="handleReset"
              >
                重設
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 第四章：如何開始動手寫你的第一個網站？（三步驟起步路線） -->
    <section class="info-section">
      <div class="section-header">
        <div class="section-tag">實戰起步路線</div>
        <h2 class="section-title">4. 如何自己動手開始寫網站？</h2>
        <p class="section-desc">
          寫網頁的門檻比你想像的還要低！你不需要昂貴的付費軟體，只需要按照以下三步驟即可展開旅程：
        </p>
      </div>

      <div class="start-steps-grid">
        <div class="start-step-card">
          <div class="step-card-header">
            <span class="step-badge">第一步：最簡單起手式</span>
            <span class="step-tool">零門檻安裝</span>
          </div>
          <h3 class="step-card-title">建立一個 index.html 檔案</h3>
          <p class="step-card-body">
            在電腦桌面建立一個純文字檔案，將檔名改為 <code>index.html</code>。用記事本打開，貼上一段 <code>&lt;h1&gt;哈囉世界&lt;/h1&gt;</code>，存檔後對著它雙擊滑鼠左鍵，瀏覽器就會立刻為你打開第一個網頁！
          </p>
          <div class="step-links">
            <a href="https://developer.mozilla.org/zh-TW/docs/Learn/Getting_started_with_the_web/HTML_basics" target="_blank" rel="noopener noreferrer" class="step-link-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              MDN 官方 HTML 入門教學
            </a>
          </div>
        </div>

        <div class="start-step-card">
          <div class="step-card-header">
            <span class="step-badge">第二步：工欲善其事</span>
            <span class="step-tool">標準工程工具</span>
          </div>
          <h3 class="step-card-title">下載 VS Code 專業編輯器</h3>
          <p class="step-card-body">
            前往微軟官方下載免費的 <strong>VS Code</strong> 編輯器，並安裝 <strong>Live Server</strong> 擴充套件。它能讓你每次儲存代碼時，瀏覽器自動即時重新整理，體驗流暢的寫代碼節奏！
          </p>
          <div class="step-links">
            <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" class="step-link-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              VS Code 微軟官網下載
            </a>
            <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank" rel="noopener noreferrer" class="step-link-btn sub">
              Live Server 擴充外掛
            </a>
          </div>
        </div>

        <div class="start-step-card">
          <div class="step-card-header">
            <span class="step-badge">第三步：邁向現代化</span>
            <span class="step-tool">企業級標準</span>
          </div>
          <h3 class="step-card-title">安裝 Node.js 與啟動 Vite + Vue 3</h3>
          <p class="step-card-body">
            下載 Node.js LTS 穩定版，在終端機輸入 <code>npm create vite@latest my-app -- --template vue</code>，你就擁有了包含熱重載（Hot Reload）、組件化與最新打包工具的現代化專業前端環境！
          </p>
          <div class="step-links">
            <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" class="step-link-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              Node.js 官方載點 (LTS)
            </a>
            <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer" class="step-link-btn sub">
              Vite 官方網站
            </a>
            <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" class="step-link-btn sub">
              Vue.js 官方文件
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 底部行動呼籲 -->
    <section class="welcome-cta">
      <div class="cta-inner">
        <h2 class="cta-title">準備好開啟你的前端學習之旅了嗎？</h2>
        <p class="cta-desc">
          本平台提供完整的「左側觀念文檔 + 右側即時互動代碼演練台 (Live Playground)」，無須在本機安裝任何環境，在瀏覽器裡就能邊看邊寫邊出結果！
        </p>
        <div class="cta-buttons">
          <button class="cta-btn cta-btn-vue" @click="emit('start-track', 'vue')">
            <Layers :size="18" />
            <span>前往 Vue 3 實戰課程 (28 單元)</span>
          </button>
          <button class="cta-btn cta-btn-base" @click="emit('start-track', 'html')">
            <FileCode :size="18" />
            <span>先修基礎：HTML (5) / CSS (7) / JS (8)</span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.welcome-container {
  max-width: 1060px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

/* Hero 區域 */
.welcome-hero {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 2.5rem 1rem 1rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 9999px;
  background: var(--primary-light);
  color: var(--primary);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.badge-icon {
  color: var(--primary);
}

.hero-title {
  font-size: 2.6rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text-main);
  line-height: 1.2;
}

.hero-subtitle {
  max-width: 680px;
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 0.5rem;
}

.primary-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: var(--radius-md, 10px);
  background: var(--primary);
  color: white;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 14px rgba(66, 184, 131, 0.35);
}

.primary-action-btn:hover {
  background: var(--primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(66, 184, 131, 0.45);
}

.secondary-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: var(--radius-md, 10px);
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  color: var(--text-main);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.secondary-action-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
  background: var(--primary-light);
}

/* 區塊共通樣式 */
.info-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.section-header {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.section-tag {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--primary);
}

.section-title {
  font-size: 1.65rem;
  font-weight: 800;
  color: var(--text-main);
  letter-spacing: -0.01em;
}

.section-desc {
  font-size: 0.95rem;
  color: var(--text-muted);
  max-width: 800px;
  line-height: 1.6;
}

/* 第一章：流水線流程圖 */
.pipeline-grid {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg, 14px);
  padding: 1.75rem 1.25rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
}

.pipeline-step {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.65rem;
}

.step-num {
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--text-muted);
  letter-spacing: 0.05em;
}

.step-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.pipeline-step:hover .step-icon-wrap {
  transform: translateY(-3px);
}

.icon-code { background: rgba(59, 130, 246, 0.12); color: #3b82f6; }
.icon-parse { background: rgba(234, 88, 12, 0.12); color: #ea580c; }
.icon-paint { background: rgba(16, 185, 129, 0.12); color: #10b981; }
.icon-engine { background: rgba(217, 119, 6, 0.12); color: #d97706; }

.step-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-main);
}

.step-desc {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.step-desc code {
  background: var(--bg-subtle);
  padding: 1px 4px;
  border-radius: 4px;
  font-size: 0.75rem;
}

.pipeline-arrow {
  color: var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 860px) {
  .pipeline-grid {
    flex-direction: column;
    gap: 1.5rem;
  }
  .pipeline-arrow {
    transform: rotate(90deg);
  }
}

/* 第二章：四大角色卡片 */
.roles-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.25rem;
}

.role-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg, 14px);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

.role-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.card-html:hover { border-color: #ea580c; }
.card-css:hover { border-color: #2563eb; }
.card-js:hover { border-color: #d97706; }
.card-vue:hover { border-color: #10b981; }

.role-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.85rem;
}

.role-icon-box {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-html .role-icon-box { background: rgba(234, 88, 12, 0.12); color: #ea580c; }
.card-css .role-icon-box { background: rgba(37, 99, 235, 0.12); color: #2563eb; }
.card-js .role-icon-box { background: rgba(217, 119, 6, 0.12); color: #d97706; }
.card-vue .role-icon-box { background: rgba(16, 185, 129, 0.12); color: #10b981; }

.role-sublabel {
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 9999px;
  background: var(--bg-subtle);
  color: var(--text-muted);
}

.role-name {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 4px;
}

.role-metaphor {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 0.75rem;
}

.card-html .role-metaphor { color: #ea580c; }
.card-css .role-metaphor { color: #2563eb; }
.card-js .role-metaphor { color: #d97706; }
.card-vue .role-metaphor { color: #10b981; }

.role-body {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
}

.role-footer-action {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text-main);
  transition: color 0.2s ease;
}

.role-card:hover .role-footer-action {
  color: var(--primary);
}

/* 第三章：互動體驗區 */
.interactive-sandbox {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg, 14px);
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
}

.sandbox-controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 1.5rem;
  background: var(--bg-subtle);
  border-bottom: 1px solid var(--border-color);
}

.control-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}

.control-toggle input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: var(--primary);
}

.toggle-name {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-main);
}

.sandbox-stage {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 260px;
}

/* 純 HTML 狀態 */
.raw-html-preview {
  width: 100%;
  max-width: 500px;
  border: 1px dashed #94a3b8;
  padding: 1.25rem;
  background: #ffffff;
  color: #000000;
  font-family: serif;
}

:root[data-theme="dark"] .raw-html-preview {
  background: #18181b;
  color: #e4e4e7;
  border-color: #52525b;
}

.raw-note {
  font-size: 0.72rem;
  color: #ef4444;
  font-family: sans-serif;
  font-weight: bold;
  margin-bottom: 0.75rem;
}

.raw-html-preview h1 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.raw-html-preview p {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.raw-html-preview button {
  border: 1px solid #71717a;
  padding: 3px 8px;
  font-size: 0.85rem;
  cursor: pointer;
}

/* CSS + HTML + JS 現代卡片狀態 */
.styled-preview-card {
  width: 100%;
  max-width: 440px;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md, 12px);
  padding: 1.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.preview-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.preview-badge-status {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #10b981;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #10b981;
}

.preview-chip {
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 9999px;
  background: var(--primary-light);
  color: var(--primary);
  font-weight: 700;
}

.preview-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 4px;
}

.preview-desc {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 1rem;
}

.preview-counter-display {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: var(--bg-subtle);
  border-radius: var(--radius-sm, 8px);
  border: 1px solid var(--border-color);
}

.counter-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-muted);
}

.counter-val-wrap {
  display: flex;
  align-items: baseline;
  gap: 3px;
}

.counter-num {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--primary);
  font-variant-numeric: tabular-nums;
}

.counter-unit {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
}

.preview-card-footer {
  display: flex;
  gap: 8px;
}

.btn-interactive {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: var(--radius-sm, 6px);
  background: var(--primary);
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-interactive:hover:not(.is-disabled) {
  background: var(--primary-hover);
}

.btn-reset {
  padding: 8px 12px;
  border-radius: var(--radius-sm, 6px);
  background: var(--bg-subtle);
  border: 1px solid var(--border-color);
  color: var(--text-muted);
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
}

.btn-interactive.is-disabled, .btn-reset.is-disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.empty-stage-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.empty-icon {
  opacity: 0.4;
}

/* 第四章：三步驟卡片 */
.start-steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
}

.start-step-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg, 14px);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.step-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.step-badge {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--primary);
}

.step-tool {
  font-size: 0.7rem;
  padding: 2px 7px;
  border-radius: 9999px;
  background: var(--bg-subtle);
  color: var(--text-muted);
  font-weight: 600;
}

.step-card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-main);
}

.step-card-body {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.step-card-body code {
  background: var(--bg-subtle);
  padding: 1px 5px;
  border-radius: 4px;
  font-size: 0.8em;
  color: var(--primary);
}

.step-links {
  margin-top: auto;
  padding-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.step-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: var(--radius-sm, 6px);
  background: var(--bg-subtle);
  color: var(--primary);
  border: 1px solid var(--border-color);
  text-decoration: none;
  transition: all 0.2s ease;
}

.step-link-btn:hover {
  background: var(--primary);
  color: #ffffff;
  border-color: var(--primary);
  transform: translateY(-1px);
}

.step-link-btn.sub {
  color: var(--text-muted);
}

.step-link-btn.sub:hover {
  color: #ffffff;
  background: #3b82f6;
  border-color: #3b82f6;
}

/* 底部 CTA */
.welcome-cta {
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.08), rgba(59, 130, 246, 0.08));
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg, 16px);
  padding: 3rem 1.5rem;
  text-align: center;
}

.cta-inner {
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.cta-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--text-main);
  letter-spacing: -0.01em;
}

.cta-desc {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 0.75rem;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 22px;
  border-radius: var(--radius-md, 10px);
  font-size: 0.92rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cta-btn-vue {
  background: #059669;
  color: white;
  box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35);
}

.cta-btn-vue:hover {
  background: #047857;
  transform: translateY(-2px);
}

.cta-btn-base {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  color: var(--text-main);
}

.cta-btn-base:hover {
  border-color: var(--primary);
  color: var(--primary);
}
</style>
