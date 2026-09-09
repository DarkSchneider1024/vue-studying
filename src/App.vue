<script setup>
import { ref, computed, onMounted } from 'vue';
import HeaderNav from './components/HeaderNav.vue';
import Sidebar from './components/Sidebar.vue';
import LessonContent from './components/LessonContent.vue';
import CodePlayground from './components/CodePlayground.vue';
import { curriculum } from './data/curriculum';

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
  if (window.innerWidth <= 860) {
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
  // 平滑滾動至頂部
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
  if (window.innerWidth <= 860) {
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
      :completed-ids="completedIds"
      :total-lessons="curriculum.length"
      @toggle-theme="toggleTheme"
      @toggle-sidebar="toggleSidebar"
    />

    <!-- 主體雙欄排版 -->
    <div class="main-container">
      <!-- 左側導覽列 -->
      <Sidebar 
        :curriculum="curriculum"
        :current-lesson-id="currentLessonId"
        :completed-ids="completedIds"
        :is-open="sidebarOpen"
        @select-lesson="selectLesson"
        @toggle-complete="toggleComplete"
        @close-sidebar="closeSidebar"
      />

      <!-- 右側學習與實作區 -->
      <main class="content-viewport">
        <div class="learning-container">
          <!-- 教學文檔解說 -->
          <LessonContent 
            :lesson="currentLesson"
            :is-completed="completedIds.includes(currentLesson.id)"
            :has-prev="hasPrev"
            :has-next="hasNext"
            @prev-lesson="prevLesson"
            @next-lesson="nextLesson"
            @toggle-complete="toggleComplete"
          />

          <!-- 核心即時互動編輯器 (Live Playground) -->
          <section class="playground-section">
            <div class="playground-intro">
              <h2 class="playground-heading">不要光是看：動手試試看！</h2>
              <p class="playground-desc">
                編輯下面輸入區域中的代碼，嘗試修改或完成上方任務。你可以在上面的 <strong>Live output</strong> 即時看到渲染出的變化。
                如果一不小心打錯了，可以點擊 <strong>Reset</strong> 重置；如果卡關了，也可以點擊 <strong>Show solution</strong> 參考解答！
              </p>
            </div>

            <CodePlayground 
              :starter-code="currentLesson.starterCode"
              :solution-code="currentLesson.solutionCode"
              :lesson-id="currentLesson.id"
            />
          </section>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-app);
}

.main-container {
  display: flex;
  flex: 1;
  width: 100%;
  position: relative;
}

.content-viewport {
  flex: 1;
  min-width: 0;
  display: flex;
  justify-content: center;
  overflow-y: auto;
}

.learning-container {
  width: 100%;
  max-width: 960px;
  padding: 1.5rem 1.25rem 4rem;
}

.playground-section {
  max-width: 800px;
  margin: 1.5rem auto 2rem;
}

.playground-intro {
  margin-bottom: 0.75rem;
}

.playground-heading {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.playground-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .learning-container {
    padding: 0.75rem 0.5rem 3rem;
  }
}
</style>
