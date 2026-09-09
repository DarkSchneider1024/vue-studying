<script setup>
import { 
  Globe, 
  Github, 
  BookOpen, 
  Sparkles, 
  Layers, 
  Palette, 
  FileCode, 
  Braces, 
  ExternalLink
} from 'lucide-vue-next';

const emit = defineEmits(['start-track', 'open-view']);

const handleJumpTrack = (trackId) => {
  emit('start-track', trackId);
};

const handleJumpView = (viewName) => {
  emit('open-view', viewName);
};
</script>

<template>
  <footer class="site-footer">
    <div class="footer-container">
      <!-- 上半部：四欄式資訊與導航區 -->
      <div class="footer-main-grid">
        <!-- 第 1 欄：品牌識別與宗旨理念 -->
        <div class="footer-col brand-col">
          <div class="footer-brand">
            <svg viewBox="0 0 261.76 226.69" width="26" height="26" class="footer-logo">
              <path d="M161.096.001l-30.225 52.35L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/>
              <path d="M161.096.001l-30.225 52.35L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/>
            </svg>
            <span class="footer-brand-title">網頁製作教學網站</span>
          </div>
          <p class="footer-slogan">
            在程式的脈絡裡，植入創意的種子。<br />
            用清晰直觀的語言，勾勒前端世界的無限可能。
          </p>
          <div class="footer-social-links">
            <a 
              href="https://github.com/DarkSchneider1024/vue-studying" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="social-link" 
              title="GitHub 專案原始碼"
            >
              <Github :size="16" />
            </a>
            <a 
              href="https://vuejs.org" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="social-link" 
              title="Vue.js 官方站點"
            >
              <Layers :size="16" />
            </a>
            <a 
              href="https://developer.mozilla.org" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="social-link" 
              title="MDN Web Docs 權威文檔"
            >
              <Globe :size="16" />
            </a>
          </div>
        </div>

        <!-- 第 2 欄：課程專題體系 -->
        <div class="footer-col">
          <h4 class="col-title">專題學程</h4>
          <ul class="footer-links">
            <li>
              <button class="footer-link-btn" @click="handleJumpTrack('html')">
                <FileCode :size="13" class="link-icon" />
                <span>HTML 5 結構基石篇</span>
              </button>
            </li>
            <li>
              <button class="footer-link-btn" @click="handleJumpTrack('css')">
                <Palette :size="13" class="link-icon" />
                <span>CSS 3 樣式與 RWD 篇</span>
              </button>
            </li>
            <li>
              <button class="footer-link-btn" @click="handleJumpTrack('javascript')">
                <Braces :size="13" class="link-icon" />
                <span>JavaScript 邏輯引擎篇</span>
              </button>
            </li>
            <li>
              <button class="footer-link-btn" @click="handleJumpTrack('vue')">
                <Layers :size="13" class="link-icon" />
                <span>Vue 3 企業架構實戰篇</span>
              </button>
            </li>
          </ul>
        </div>

        <!-- 第 3 欄：全站地圖與工具 -->
        <div class="footer-col">
          <h4 class="col-title">網站地圖</h4>
          <ul class="footer-links">
            <li>
              <button class="footer-link-btn" @click="handleJumpView('welcome')">
                <Sparkles :size="13" class="link-icon" />
                <span>如何寫網站 (新手導引)</span>
              </button>
            </li>
            <li>
              <button class="footer-link-btn" @click="handleJumpView('glossary')">
                <BookOpen :size="13" class="link-icon" />
                <span>前端技術名詞速查字典</span>
              </button>
            </li>
            <li>
              <button class="footer-link-btn" @click="handleJumpTrack('vue')">
                <Layers :size="13" class="link-icon" />
                <span>即時互動程式碼演練台</span>
              </button>
            </li>
            <li>
              <button class="footer-link-btn" @click="handleJumpTrack('css')">
                <Palette :size="13" class="link-icon" />
                <span>響應式網頁 (RWD) 全攻略</span>
              </button>
            </li>
          </ul>
        </div>

        <!-- 第 4 欄：權威學習資源 -->
        <div class="footer-col">
          <h4 class="col-title">權威資源</h4>
          <ul class="footer-links">
            <li>
              <a 
                href="https://vuejs.org/guide/introduction.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="footer-ext-link"
              >
                <span>Vue 3 官方指引手冊</span>
                <ExternalLink :size="11" class="ext-arrow" />
              </a>
            </li>
            <li>
              <a 
                href="https://developer.mozilla.org/zh-TW/" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="footer-ext-link"
              >
                <span>MDN Web Docs 繁體中文</span>
                <ExternalLink :size="11" class="ext-arrow" />
              </a>
            </li>
            <li>
              <a 
                href="https://vite.dev" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="footer-ext-link"
              >
                <span>Vite 極速建構工具</span>
                <ExternalLink :size="11" class="ext-arrow" />
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/DarkSchneider1024/vue-studying" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="footer-ext-link"
              >
                <span>GitHub 專案倉庫</span>
                <ExternalLink :size="11" class="ext-arrow" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 最下方：版權宣告列 (如同參考網站設計) -->
      <div class="footer-bottom-bar">
        <div class="copyright-text">
          &copy; 2026 網頁製作教學網站 版權所有。
        </div>
        <div class="bottom-policy-links">
          <span class="policy-item">開源學習專案</span>
          <span class="divider">|</span>
          <span class="policy-item">非營利教學指南</span>
          <span class="divider">|</span>
          <span class="policy-item designed-by">
            Designed for Modern Web Developers
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--bg-surface, #ffffff);
  border-top: 1px solid var(--border-color, #e2e8f0);
  color: var(--text-main, #334155);
  padding: 3.5rem 1.5rem 1.5rem;
  margin-top: 3.5rem;
  transition: background 0.3s ease, border-color 0.3s ease;
}

.footer-container {
  max-width: 1160px;
  margin: 0 auto;
}

/* 主四欄網格 */
.footer-main-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 2.5rem;
  margin-bottom: 3rem;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

/* 品牌欄 */
.footer-brand {
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer-brand-title {
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-main, #0f172a);
}

.footer-slogan {
  font-size: 0.86rem;
  line-height: 1.6;
  color: var(--text-muted, #64748b);
  margin: 0;
}

.footer-social-links {
  display: flex;
  gap: 8px;
  margin-top: 0.25rem;
}

.social-link {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--border-color, #cbd5e1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted, #64748b);
  background: var(--bg-subtle, #f8fafc);
  transition: all 0.2s ease;
  text-decoration: none;
}

.social-link:hover {
  background: var(--primary, #059669);
  color: #ffffff;
  border-color: var(--primary, #059669);
  transform: translateY(-2px);
}

/* 欄目標題 */
.col-title {
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--text-main, #0f172a);
  margin: 0 0 0.25rem 0;
  letter-spacing: 0.02em;
}

/* 連結清單 */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.footer-link-btn {
  background: none;
  border: none;
  padding: 0;
  font-size: 0.84rem;
  color: var(--text-muted, #64748b);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color 0.15s ease, transform 0.15s ease;
  text-align: left;
}

.footer-link-btn:hover {
  color: var(--primary, #059669);
  transform: translateX(2px);
}

.link-icon {
  opacity: 0.7;
  color: var(--primary, #059669);
  flex-shrink: 0;
}

.footer-ext-link {
  font-size: 0.84rem;
  color: var(--text-muted, #64748b);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: color 0.15s ease, transform 0.15s ease;
}

.footer-ext-link:hover {
  color: var(--primary, #059669);
  transform: translateX(2px);
}

.ext-arrow {
  opacity: 0.5;
}

/* 底層版權宣告列 (Copyright bar) */
.footer-bottom-bar {
  border-top: 1px solid var(--border-color, #e2e8f0);
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  font-size: 0.8rem;
  color: var(--text-muted, #64748b);
}

.copyright-text {
  font-size: 0.8rem;
  color: var(--text-muted, #64748b);
}

.bottom-policy-links {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.78rem;
}

.divider {
  color: var(--border-color, #cbd5e1);
  font-weight: 300;
}

.designed-by {
  font-weight: 600;
  color: var(--text-main, #334155);
}

/* RWD 響應式 */
@media (max-width: 900px) {
  .footer-main-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  .brand-col {
    grid-column: span 2;
  }
}

@media (max-width: 580px) {
  .site-footer {
    padding: 2.5rem 1rem 1.25rem;
  }
  .footer-main-grid {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
  .brand-col {
    grid-column: span 1;
  }
  .footer-bottom-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  .bottom-policy-links {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
}
</style>
