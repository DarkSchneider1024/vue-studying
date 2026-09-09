<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import HeaderNav from './components/HeaderNav.vue';
import Sidebar from './components/Sidebar.vue';
import LessonContent from './components/LessonContent.vue';
import CodePlayground from './components/CodePlayground.vue';
import GlossaryView from './components/GlossaryView.vue';
import WelcomeView from './components/WelcomeView.vue';
import { TRACKS, getCurriculumByTrack, findTrackByLessonId } from './data/tracks.js';
import { initVisitorTracker } from './services/firebase';
import { Code2, BookOpen } from 'lucide-vue-next';
import { trackPageView, trackLessonSelect, trackLessonComplete } from './services/analytics';

// 檢視模式 ('lessons' | 'glossary' | 'welcome')
const currentView = ref('welcome');
const setView = (view) => {
  currentView.value = view;
  localStorage.setItem('program-study-last-view', view);
  trackPageView(`View: ${view} - Program Studying`, `/${view}`);
  // 切換檢視滾動回頂部
  if (view === 'welcome') {
    const welcomeWrap = document.querySelector('.welcome-wrapper');
    if (welcomeWrap) welcomeWrap.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

// 手機端 RWD 標籤分頁 ('doc' | 'playground')
const mobileTab = ref('doc');
const isDesktop = ref(typeof window !== 'undefined' ? window.innerWidth > 960 : true);

const handleResize = () => {
  isDesktop.value = window.innerWidth > 960;
  if (window.innerWidth <= 1024) {
    sidebarOpen.value = false;
  }
};

// 當前選中的技術領域 ('css' | 'html' | 'javascript' | 'vue')
const currentTrack = ref('vue');

// 當前領域對應的完整課綱列表
const activeCurriculum = computed(() => {
  return getCurriculumByTrack(currentTrack.value);
});

// 主題切換 (Dark / Light)
const isDark = ref(false);
const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('vue-study-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('vue-study-theme', 'light');
  }
};

// 側欄狀態
const sidebarOpen = ref(true);
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};
const closeSidebar = () => {
  if (window.innerWidth <= 1024) {
    sidebarOpen.value = false;
  }
};

// 當前選中單元 ID
const currentLessonId = ref('project-overview-setup');

const currentLessonIndex = computed(() => {
  const list = activeCurriculum.value;
  const idx = list.findIndex(l => l.id === currentLessonId.value);
  return idx >= 0 ? idx : 0;
});

const currentLesson = computed(() => {
  return activeCurriculum.value[currentLessonIndex.value] || activeCurriculum.value[0];
});

const hasPrev = computed(() => currentLessonIndex.value > 0);
const hasNext = computed(() => currentLessonIndex.value < activeCurriculum.value.length - 1);

// 領域切換邏輯
const selectTrack = (trackId) => {
  currentTrack.value = trackId;
  localStorage.setItem('program-study-last-track', trackId);

  // 如果目前在歡迎頁或字典，切回課程檢視
  if (currentView.value !== 'lessons') {
    currentView.value = 'lessons';
    localStorage.setItem('program-study-last-view', 'lessons');
  }

  const trackCurr = getCurriculumByTrack(trackId);
  const savedLesson = localStorage.getItem(`program-study-last-lesson-${trackId}`);

  if (savedLesson && trackCurr.some(l => l.id === savedLesson)) {
    currentLessonId.value = savedLesson;
  } else if (trackCurr.length > 0) {
    currentLessonId.value = trackCurr[0].id;
  }

  scrollDocToTop();
  closeSidebar();
};

// 從歡迎頁直接啟動特定領域
const startTrackFromWelcome = (trackId) => {
  selectTrack(trackId);
  currentView.value = 'lessons';
};

// 跨領域或導讀跳轉 (例如 Vue 導讀點擊 HTML/CSS/JS 卡片)
const handleJumpTrack = ({ track, lessonId }) => {
  if (track && track !== currentTrack.value) {
    currentTrack.value = track;
    localStorage.setItem('program-study-last-track', track);
  }

  const trackCurr = getCurriculumByTrack(currentTrack.value);
  if (lessonId && trackCurr.some(l => l.id === lessonId)) {
    currentLessonId.value = lessonId;
  } else if (trackCurr.length > 0) {
    currentLessonId.value = trackCurr[0].id;
  }

  localStorage.setItem(`program-study-last-lesson-${currentTrack.value}`, currentLessonId.value);
  scrollDocToTop();
  closeSidebar();
};

// 單元切換邏輯
const selectLesson = (id) => {
  const detectedTrack = findTrackByLessonId(id);
  if (detectedTrack !== currentTrack.value) {
    currentTrack.value = detectedTrack;
    localStorage.setItem('program-study-last-track', detectedTrack);
  }

  currentLessonId.value = id;
  localStorage.setItem(`program-study-last-lesson-${currentTrack.value}`, id);
  localStorage.setItem('vue-study-last-lesson', id);
  closeSidebar();
  scrollDocToTop();

  // 發送 GA4 事件
  if (currentLesson.value) {
    trackLessonSelect(currentTrack.value, id, currentLesson.value.title);
    trackPageView(`${currentLesson.value.title} - Program Studying`, `/${currentTrack.value}/${id}`);
  }

  // 手機版切換單元時，預設顯示文檔
  if (!isDesktop.value) {
    mobileTab.value = 'doc';
  }
};

const scrollDocToTop = () => {
  const docContainer = document.querySelector('.doc-viewport');
  if (docContainer) {
    docContainer.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const prevLesson = () => {
  if (hasPrev.value) {
    selectLesson(activeCurriculum.value[currentLessonIndex.value - 1].id);
  }
};

const nextLesson = () => {
  if (hasNext.value) {
    selectLesson(activeCurriculum.value[currentLessonIndex.value + 1].id);
  }
};

// 學習進度追蹤
const completedIds = ref([]);
const toggleComplete = (id) => {
  const index = completedIds.value.indexOf(id);
  if (index > -1) {
    completedIds.value.splice(index, 1);
  } else {
    completedIds.value.push(id);
    trackLessonComplete(currentTrack.value, id);
  }
  localStorage.setItem('vue-study-completed', JSON.stringify(completedIds.value));
};

// 當前領域完成進度計算
const trackCompletedCount = computed(() => {
  return activeCurriculum.value.filter(l => completedIds.value.includes(l.id)).length;
});

const trackTotalLessons = computed(() => {
  return activeCurriculum.value.length;
});

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();

  // 讀取儲存的主題
  const savedTheme = localStorage.getItem('vue-study-theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true;
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  // 讀取上次記憶的檢視模式（首次進入預設 welcome）
  const savedView = localStorage.getItem('program-study-last-view');
  if (savedView && ['lessons', 'glossary', 'welcome'].includes(savedView)) {
    currentView.value = savedView;
  }

  // 讀取上次記憶的領域與單元
  const savedTrack = localStorage.getItem('program-study-last-track');
  if (savedTrack && TRACKS.some(t => t.id === savedTrack)) {
    currentTrack.value = savedTrack;
  }

  const trackCurr = getCurriculumByTrack(currentTrack.value);
  const savedLesson = localStorage.getItem(`program-study-last-lesson-${currentTrack.value}`) || localStorage.getItem('vue-study-last-lesson');

  if (savedLesson && trackCurr.some(l => l.id === savedLesson)) {
    currentLessonId.value = savedLesson;
  } else if (trackCurr.length > 0) {
    currentLessonId.value = trackCurr[0].id;
  }

  // 讀取完成進度
  const savedCompleted = localStorage.getItem('vue-study-completed');
  if (savedCompleted) {
    try {
      completedIds.value = JSON.parse(savedCompleted);
    } catch (e) {
      completedIds.value = [];
    }
  }

  // 初始化 Firebase 即時線上人數與瀏覽量追蹤
  initVisitorTracker();

  // 初始 Google Analytics 上報
  if (currentView.value === 'welcome') {
    trackPageView('歡迎首頁 - Program Studying', '/welcome');
  } else if (currentLesson.value) {
    trackPageView(`${currentLesson.value.title} - Program Studying`, `/${currentTrack.value}/${currentLessonId.value}`);
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <div class="app-layout">
    <!-- 頂部導航 (包含 Program Studying 主標題與 CSS/HTML/Javascript/Vue 四大領域標籤) -->
    <HeaderNav 
      :is-dark="isDark"
      :sidebar-open="sidebarOpen"
      :current-view="currentView"
      :current-track="currentTrack"
      :tracks="TRACKS"
      :track-completed-count="trackCompletedCount"
      :track-total-lessons="trackTotalLessons"
      @toggle-theme="toggleTheme"
      @toggle-sidebar="toggleSidebar"
      @toggle-view="setView"
      @select-track="selectTrack"
    />

    <!-- 新手導覽：如何寫網站（歡迎頁全螢幕檢視模式） -->
    <div v-if="currentView === 'welcome'" class="welcome-wrapper">
      <WelcomeView 
        @start-track="startTrackFromWelcome" 
        @open-lessons="currentView = 'lessons'" 
      />
    </div>

    <!-- 技術名詞字典全螢幕檢視模式 -->
    <div v-else-if="currentView === 'glossary'" class="glossary-wrapper">
      <GlossaryView @close="currentView = 'lessons'" />
    </div>

    <!-- 主工作區 (左右雙欄桌面佈局，手機端支援 Tab 流暢切換) -->
    <div v-else class="main-workspace">
      <!-- 左側章節目錄導覽列 (支援行動端滑出抽屜) -->
      <Sidebar 
        :curriculum="activeCurriculum"
        :current-lesson-id="currentLessonId"
        :completed-ids="completedIds"
        :is-open="sidebarOpen"
        :current-track="currentTrack"
        :tracks="TRACKS"
        @select-lesson="selectLesson"
        @toggle-complete="toggleComplete"
        @close-sidebar="closeSidebar"
        @select-track="selectTrack"
      />

      <div class="workspace-main-area">
        <!-- 行動端 / 平板端專屬切換分頁列 (<= 960px 顯示) -->
        <div class="mobile-subnav-tabs" v-if="!isDesktop">
          <button 
            class="mobile-subnav-btn" 
            :class="{ 'is-active': mobileTab === 'doc' }"
            @click="mobileTab = 'doc'"
          >
            <BookOpen :size="15" />
            <span>課程教學文檔</span>
          </button>
          <button 
            class="mobile-subnav-btn" 
            :class="{ 'is-active': mobileTab === 'playground' }"
            @click="mobileTab = 'playground'"
          >
            <Code2 :size="15" />
            <span>即時互動演練台</span>
          </button>
        </div>

        <!-- 核心工作台視口 -->
        <div class="workspace-split">
          <!-- 左欄：教學課程文檔與任務 -->
          <div 
            class="doc-viewport" 
            v-show="isDesktop || mobileTab === 'doc'"
          >
            <div class="doc-inner-container">
              <LessonContent 
                :lesson="currentLesson"
                :is-completed="completedIds.includes(currentLesson.id)"
                :has-prev="hasPrev"
                :has-next="hasNext"
                @prev-lesson="prevLesson"
                @next-lesson="nextLesson"
                @toggle-complete="toggleComplete"
                @jump-track="handleJumpTrack"
              />

              <!-- 行動端文檔底部快捷切換按鈕 -->
              <div class="mobile-quick-jump" v-if="!isDesktop">
                <button class="quick-jump-btn" @click="mobileTab = 'playground'">
                  <Code2 :size="16" />
                  <span>動手打代碼：切換至即時演練台 &rarr;</span>
                </button>
              </div>
            </div>
          </div>

          <!-- 右欄：常駐即時編輯器與預覽 (Playground) -->
          <div 
            class="playground-viewport" 
            v-show="isDesktop || mobileTab === 'playground'"
          >
            <div class="playground-inner-container">
              <!-- 演練區標頭 -->
              <div class="playground-banner">
                <div class="banner-title-wrap">
                  <Code2 :size="18" class="banner-icon" />
                  <span class="banner-title">即時互動演練台 (Live Playground)</span>
                </div>
                <span class="banner-subtext">邊看教學，邊在下方動手打代碼！</span>
              </div>

              <!-- 即時編輯核心 -->
              <CodePlayground 
                :starter-code="currentLesson.starterCode"
                :solution-code="currentLesson.solutionCode"
                :lesson-id="currentLesson.id"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-app);
  overflow: hidden;
}

.main-workspace {
  display: flex;
  flex: 1;
  width: 100%;
  height: calc(100vh - 90px);
  position: relative;
  overflow: hidden;
}

.welcome-wrapper {
  flex: 1;
  height: calc(100vh - 90px);
  overflow-y: auto;
  background: var(--bg-app);
}

.glossary-wrapper {
  flex: 1;
  height: calc(100vh - 90px);
  overflow: hidden;
}

.workspace-main-area {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  min-width: 0;
  overflow: hidden;
}

/* 行動端專屬切換列 (RWD) */
.mobile-subnav-tabs {
  display: flex;
  height: 42px;
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border-color);
  flex-shrink: 0;
}

.mobile-subnav-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-muted);
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
}

.mobile-subnav-btn.is-active {
  color: var(--primary);
  border-bottom-color: var(--primary);
  background: var(--primary-light);
}

.mobile-quick-jump {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px dashed var(--border-color);
}

.quick-jump-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  background: var(--primary);
  color: white;
  border-radius: var(--radius-md, 8px);
  font-size: 0.9rem;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(66, 184, 131, 0.3);
}

/* 雙欄工作台 */
.workspace-split {
  display: flex;
  flex: 1;
  height: 100%;
  min-width: 0;
  overflow: hidden;
}

/* 左欄：教學課程文檔視口 */
.doc-viewport {
  flex: 1;
  height: 100%;
  overflow-y: auto;
  min-width: 320px;
  background-color: var(--bg-surface);
  border-right: 1px solid var(--border-color);
}

.doc-inner-container {
  max-width: 780px;
  margin: 0 auto;
  padding: 1.75rem 2rem 4rem;
}

/* 右欄：即時演練台視口 */
.playground-viewport {
  flex: 1.15;
  height: 100%;
  background-color: #0f172a;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.playground-inner-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.playground-banner {
  height: 38px;
  background: #1e293b;
  border-bottom: 1px solid #334155;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  flex-shrink: 0;
}

.banner-title-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.banner-icon {
  color: #38bdf8;
}

.banner-title {
  font-size: 0.82rem;
  font-weight: 600;
  color: #f1f5f9;
  letter-spacing: 0.02em;
}

.banner-subtext {
  font-size: 0.72rem;
  color: #94a3b8;
}

/* RWD 響應式優化 */
@media (max-width: 960px) {
  .doc-viewport {
    border-right: none;
    min-width: 0;
  }
  
  .doc-inner-container {
    padding: 1.25rem 1rem 3rem;
  }

  .banner-subtext {
    display: none;
  }
}

@media (max-width: 640px) {
  .welcome-wrapper {
    height: calc(100vh - 90px);
  }
}
</style>
