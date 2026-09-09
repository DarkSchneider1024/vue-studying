<script setup>
import { ref, computed, onMounted } from 'vue';
import HeaderNav from './components/HeaderNav.vue';
import Sidebar from './components/Sidebar.vue';
import LessonContent from './components/LessonContent.vue';
import CodePlayground from './components/CodePlayground.vue';
import GlossaryView from './components/GlossaryView.vue';
import { TRACKS, getCurriculumByTrack, findTrackByLessonId } from './data/tracks.js';
import { initVisitorTracker } from './services/firebase';
import { Code2 } from 'lucide-vue-next';

// 檢視模式 ('lessons' | 'glossary')
const currentView = ref('lessons');
const setView = (view) => {
  currentView.value = view;
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

  const trackCurr = getCurriculumByTrack(trackId);
  const savedLesson = localStorage.getItem(`program-study-last-lesson-${trackId}`);

  if (savedLesson && trackCurr.some(l => l.id === savedLesson)) {
    currentLessonId.value = savedLesson;
  } else if (trackCurr.length > 0) {
    currentLessonId.value = trackCurr[0].id;
  }

  // 滾動回頂部
  scrollDocToTop();
  closeSidebar();
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
  // 自動偵測單元所屬領域，避免跨領域單元被誤選
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
  // 讀取儲存的主題
  const savedTheme = localStorage.getItem('vue-study-theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true;
    document.documentElement.setAttribute('data-theme', 'dark');
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

  // 根據螢幕寬度初始側欄
  if (window.innerWidth <= 1024) {
    sidebarOpen.value = false;
  }

  // 初始化 Firebase 即時線上人數與瀏覽量追蹤
  initVisitorTracker();
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

    <!-- 技術名詞字典全螢幕檢視模式 -->
    <div v-if="currentView === 'glossary'" class="glossary-wrapper">
      <GlossaryView @close="currentView = 'lessons'" />
    </div>

    <!-- 主工作區 (左右分欄桌面佈局) -->
    <div v-else class="main-workspace">
      <!-- 左側章節目錄導覽列 -->
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

      <!-- 核心雙欄工作台：左為教學說明，右為即時編輯與輸出 -->
      <div class="workspace-split">
        <!-- 左欄：教學課程文檔與任務 -->
        <div class="doc-viewport">
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
          </div>
        </div>

        <!-- 右欄：常駐即時編輯器與預覽 (Playground) -->
        <div class="playground-viewport">
          <div class="playground-inner-container">
            <!-- 演練區標頭 -->
            <div class="playground-banner">
              <div class="banner-title-wrap">
                <Code2 :size="18" class="banner-icon" />
                <span class="banner-title">即時互動演練台 (Live Playground)</span>
              </div>
              <span class="banner-subtext">邊看左側教學，邊在下方動手打代碼！</span>
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

.glossary-wrapper {
  flex: 1;
  height: calc(100vh - 90px);
  overflow: hidden;
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
  max-width: 760px;
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

/* 響應式佈局 (平板與手機切換為單欄垂直佈局) */
@media (max-width: 1024px) {
  .main-workspace {
    height: calc(100vh - 90px);
    overflow-y: auto;
  }

  .workspace-split {
    flex-direction: column;
    height: auto;
    overflow: visible;
  }

  .doc-viewport {
    height: auto;
    border-right: none;
    border-bottom: 1px solid var(--border-color);
    overflow: visible;
  }

  .doc-inner-container {
    padding: 1.25rem 1.25rem 2rem;
  }

  .playground-viewport {
    height: 720px;
    flex: none;
  }
}

@media (max-width: 640px) {
  .playground-viewport {
    height: 640px;
  }
  .banner-subtext {
    display: none;
  }
}
</style>
