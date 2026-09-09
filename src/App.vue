<script setup>
import { ref, computed, onMounted } from 'vue';
import HeaderNav from './components/HeaderNav.vue';
import Sidebar from './components/Sidebar.vue';
import LessonContent from './components/LessonContent.vue';
import CodePlayground from './components/CodePlayground.vue';
import GlossaryView from './components/GlossaryView.vue';
import { curriculum } from './data/curriculum';
import { Code2, BookOpen, Columns, Maximize2 } from 'lucide-vue-next';

// 檢視模式 ('lessons' | 'glossary')
const currentView = ref('lessons');
const setView = (view) => {
  currentView.value = view;
};

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

// 當前選中單元
const currentLessonId = ref(curriculum[0].id);
const currentLessonIndex = computed(() => {
  return curriculum.findIndex(l => l.id === currentLessonId.value);
});
const currentLesson = computed(() => {
  return curriculum[currentLessonIndex.value] || curriculum[0];
});

const hasPrev = computed(() => currentLessonIndex.value > 0);
const hasNext = computed(() => currentLessonIndex.value < curriculum.length - 1);

const selectLesson = (id) => {
  currentLessonId.value = id;
  localStorage.setItem('vue-study-last-lesson', id);
  closeSidebar();
  
  // 文檔區滾動回頂部
  const docContainer = document.querySelector('.doc-viewport');
  if (docContainer) {
    docContainer.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const prevLesson = () => {
  if (hasPrev.value) {
    selectLesson(curriculum[currentLessonIndex.value - 1].id);
  }
};

const nextLesson = () => {
  if (hasNext.value) {
    selectLesson(curriculum[currentLessonIndex.value + 1].id);
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

onMounted(() => {
  // 讀取儲存的主題
  const savedTheme = localStorage.getItem('vue-study-theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true;
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  // 讀取上次學習章節
  const savedLesson = localStorage.getItem('vue-study-last-lesson');
  if (savedLesson && curriculum.some(l => l.id === savedLesson)) {
    currentLessonId.value = savedLesson;
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
});
</script>

<template>
  <div class="app-layout">
    <!-- 頂部導航 -->
    <HeaderNav 
      :is-dark="isDark"
      :sidebar-open="sidebarOpen"
      :current-view="currentView"
      :completed-ids="completedIds"
      :total-lessons="curriculum.length"
      @toggle-theme="toggleTheme"
      @toggle-sidebar="toggleSidebar"
      @toggle-view="setView"
    />

    <!-- 技術名詞字典全螢幕檢視模式 -->
    <div v-if="currentView === 'glossary'" class="glossary-wrapper">
      <GlossaryView @close="currentView = 'lessons'" />
    </div>

    <!-- 主工作區 (左右分欄桌面佈局) -->
    <div v-else class="main-workspace">
      <!-- 左側章節目錄導覽列 -->
      <Sidebar 
        :curriculum="curriculum"
        :current-lesson-id="currentLessonId"
        :completed-ids="completedIds"
        :is-open="sidebarOpen"
        @select-lesson="selectLesson"
        @toggle-complete="toggleComplete"
        @close-sidebar="closeSidebar"
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
  height: calc(100vh - 60px);
  position: relative;
  overflow: hidden;
}

.glossary-wrapper {
  flex: 1;
  height: calc(100vh - 60px);
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

/* 左欄：教學文檔 */
.doc-viewport {
  flex: 1;
  min-width: 380px;
  height: 100%;
  overflow-y: auto;
  border-right: 1px solid var(--border-color);
  background: var(--bg-app);
}

.doc-inner-container {
  max-width: 760px;
  margin: 0 auto;
  padding: 1rem 1.25rem 3rem;
}

/* 右欄：即時演練與編輯器 */
.playground-viewport {
  flex: 1.15;
  min-width: 440px;
  height: 100%;
  overflow-y: auto;
  background: var(--bg-surface);
  padding: 1rem 1.25rem 3rem;
  display: flex;
  flex-direction: column;
}

.playground-inner-container {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.playground-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.65rem 1rem;
  background: var(--primary-light);
  border: 1px solid rgba(66, 184, 131, 0.25);
  border-radius: var(--radius-sm);
  margin-bottom: 0.85rem;
}

.banner-title-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.banner-icon {
  color: var(--primary);
}

.banner-title {
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--text-main);
}

.banner-subtext {
  font-size: 0.75rem;
  color: var(--text-muted);
}

/* 平板與手機版響應式切換為上下堆疊 */
@media (max-width: 1024px) {
  .app-layout {
    height: auto;
    min-height: 100vh;
    overflow-y: auto;
  }

  .main-workspace {
    height: auto;
    overflow: visible;
  }

  .workspace-split {
    flex-direction: column;
    height: auto;
    overflow: visible;
  }

  .doc-viewport {
    min-width: 100%;
    height: auto;
    overflow: visible;
    border-right: none;
    border-bottom: 2px dashed var(--border-color);
  }

  .playground-viewport {
    min-width: 100%;
    height: auto;
    overflow: visible;
  }

  .banner-subtext {
    display: none;
  }
}
</style>
