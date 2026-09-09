<script setup>
import { computed } from 'vue';
import { 
  Check, 
  ChevronRight, 
  Layers, 
  Compass, 
  Code2, 
  Boxes,
  CheckCircle2,
  X,
  Rocket,
  Cpu,
  Server,
  FileText,
  Globe,
  FileCode,
  Palette,
  Braces,
  Wrench,
  Sparkles,
  BookOpen,
  ExternalLink,
  Sun,
  Moon,
  Users,
  Eye
} from 'lucide-vue-next';
import { onlineCount, totalViews, isRealtimeConnected } from '../services/firebase';

const props = defineProps({
  curriculum: {
    type: Array,
    required: true
  },
  currentLessonId: {
    type: String,
    required: true
  },
  completedIds: {
    type: Array,
    default: () => []
  },
  isOpen: {
    type: Boolean,
    default: true
  },
  currentTrack: {
    type: String,
    default: 'vue'
  },
  tracks: {
    type: Array,
    default: () => []
  },
  currentView: {
    type: String,
    default: 'lessons'
  },
  isDark: {
    type: Boolean,
    default: false
  }
});

const currentTrackMeta = computed(() => {
  return props.tracks.find(t => t.id === props.currentTrack) || { label: '課程', count: props.curriculum.length };
});

const emit = defineEmits([
  'select-lesson',
  'toggle-complete',
  'close-sidebar',
  'select-track',
  'toggle-view',
  'toggle-theme'
]);

const handleNavigateView = (view) => {
  emit('toggle-view', view);
  emit('close-sidebar');
};

// 根據 category 分組
const groupedLessons = computed(() => {
  const groups = {};
  props.curriculum.forEach(lesson => {
    if (!groups[lesson.category]) {
      groups[lesson.category] = [];
    }
    groups[lesson.category].push(lesson);
  });
  return groups;
});

const getCategoryIcon = (category) => {
  switch (category) {
    case '專案導讀與概念篇':
      return Rocket;
    case 'HTML 核心專題篇':
      return FileCode;
    case 'CSS 樣式專題篇':
      return Palette;
    case 'JavaScript 邏輯專題篇':
      return Braces;
    case '生態工具庫篇':
      return Wrench;
    case '基礎入門篇':
      return Compass;
    case '條件與列表篇':
      return Layers;
    case '核心響應式篇':
      return Code2;
    case '進階組件篇':
    case '進階與組件篇':
      return Boxes;
    case '系統現代化篇':
      return Cpu;
    case '架構實戰篇':
      return Server;
    case '決策與匯報篇':
      return FileText;
    default:
      return Compass;
  }
};
</script>

<template>
  <!-- 行動裝置遮罩 -->
  <div 
    v-if="isOpen" 
    class="sidebar-backdrop"
    @click="emit('close-sidebar')"
  ></div>

  <aside class="sidebar" :class="{ 'is-open': isOpen }">
    <div class="sidebar-header">
      <div class="sidebar-title">
        <Compass :size="18" class="title-icon" />
        <div class="sidebar-track-info">
          <span class="track-title-text">{{ currentTrackMeta.label }} 單元列表</span>
          <span class="track-total-badge">{{ curriculum.length }} 篇</span>
        </div>
      </div>
      <button 
        class="close-btn" 
        @click="emit('close-sidebar')" 
        aria-label="關閉選單"
      >
        <X :size="18" />
      </button>
    </div>

    <!-- 全站功能導覽與快捷工具 (原頂部超連結與設定移至側欄抽屜) -->
    <div class="sidebar-quick-nav">
      <div class="quick-nav-header">
        <span class="quick-nav-title">全站捷徑與設定</span>
      </div>
      <div class="quick-nav-grid">
        <!-- 如何寫網站 (新手導引) -->
        <button 
          class="quick-nav-btn"
          :class="{ 'is-active': currentView === 'welcome' }"
          @click="handleNavigateView('welcome')"
          title="新手入門：如何自己動手開始寫網站"
        >
          <Sparkles :size="14" class="quick-icon welcome-icon" />
          <span class="quick-text">如何寫網站</span>
        </button>

        <!-- 前端技術名詞字典 -->
        <button 
          class="quick-nav-btn"
          :class="{ 'is-active': currentView === 'glossary' }"
          @click="handleNavigateView('glossary')"
          title="前端專用名詞字典速查"
        >
          <BookOpen :size="14" class="quick-icon glossary-icon" />
          <span class="quick-text">名詞字典</span>
        </button>

        <!-- Vue 官方文檔外鏈 -->
        <a 
          href="https://vuejs.org/guide/introduction.html" 
          target="_blank" 
          rel="noopener noreferrer"
          class="quick-nav-btn"
          title="前往 Vue 3 官方權威手冊"
        >
          <Globe :size="14" class="quick-icon" />
          <span class="quick-text">Vue 官網</span>
          <ExternalLink :size="11" class="ext-icon" />
        </a>

        <!-- 深淺色主題切換 -->
        <button 
          class="quick-nav-btn theme-btn"
          @click="emit('toggle-theme')"
          :title="isDark ? '切換淺色模式' : '切換深色模式'"
        >
          <Sun v-if="isDark" :size="14" class="quick-icon sun-icon" />
          <Moon v-else :size="14" class="quick-icon moon-icon" />
          <span class="quick-text">{{ isDark ? '淺色模式' : '深色模式' }}</span>
        </button>
      </div>

      <!-- 即時在線人數與訪客統計卡片 -->
      <div class="sidebar-stats-badge">
        <div class="sidebar-stat-item">
          <span class="sidebar-pulse-dot" :class="{ 'is-active': isRealtimeConnected }"></span>
          <Users :size="12" class="stat-icon" />
          <span class="stat-val">{{ onlineCount }}</span>
          <span class="stat-unit">在線</span>
        </div>
        <div class="sidebar-stat-divider"></div>
        <div class="sidebar-stat-item">
          <Eye :size="12" class="stat-icon" />
          <span class="stat-val">{{ totalViews > 0 ? totalViews.toLocaleString() : '...' }}</span>
          <span class="stat-unit">次瀏覽</span>
        </div>
      </div>
    </div>
    
    <!-- 領域切換快捷分段列 (方便手機與桌機在側邊欄直接跨科切換) -->
    <div class="sidebar-track-tabs" v-if="tracks.length > 0">
      <button 
        v-for="t in tracks" 
        :key="t.id"
        class="sidebar-track-tab-btn"
        :class="{ 
          'is-active': currentTrack === t.id,
          [`tab-${t.id}`]: true 
        }"
        @click="emit('select-track', t.id)"
        :title="t.title"
      >
        <span class="tab-label">{{ t.id === 'javascript' ? 'JS' : t.label }}</span>
        <span class="tab-badge">{{ t.count }}</span>
      </button>
    </div>

    <div class="sidebar-content">
      <div 
        v-for="(lessons, category) in groupedLessons" 
        :key="category" 
        class="category-group"
      >
        <div class="category-header">
          <component :is="getCategoryIcon(category)" :size="16" class="cat-icon" />
          <span class="category-title">{{ category }}</span>
          <span class="category-count">({{ lessons.length }})</span>
        </div>

        <ul class="lesson-list">
          <li 
            v-for="lesson in lessons" 
            :key="lesson.id"
            class="lesson-item"
            :class="{ 
              'active': lesson.id === currentLessonId,
              'completed': completedIds.includes(lesson.id)
            }"
            @click="emit('select-lesson', lesson.id)"
          >
            <!-- 完成勾選方塊 -->
            <button 
              class="complete-checkbox"
              :class="{ 'is-checked': completedIds.includes(lesson.id) }"
              @click.stop="emit('toggle-complete', lesson.id)"
              :title="completedIds.includes(lesson.id) ? '標記為未完成' : '標記為已完成'"
            >
              <Check v-if="completedIds.includes(lesson.id)" :size="13" class="check-mark" />
            </button>

            <!-- 章節標題 -->
            <div class="lesson-info">
              <span class="lesson-title">{{ lesson.title }}</span>
              <span class="lesson-time">{{ lesson.readTime }}</span>
            </div>

            <ChevronRight :size="14" class="arrow-icon" />
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 290px;
  background: var(--bg-surface);
  border-right: 1px solid var(--border-color);
  height: calc(100vh - 60px);
  position: sticky;
  top: 60px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  z-index: 40;
}

.sidebar-header {
  padding: 1rem 1.25rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-subtle);
}

.sidebar-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--text-main);
}

.sidebar-track-info {
  display: flex;
  align-items: center;
  gap: 6px;
}

.track-title-text {
  font-weight: 700;
  font-size: 0.92rem;
  color: var(--text-main);
}

.track-total-badge {
  font-size: 0.7rem;
  padding: 1px 6px;
  border-radius: 9999px;
  background: var(--bg-subtle);
  color: var(--text-muted);
  font-weight: 600;
  border: 1px solid var(--border-color);
}

.title-icon {
  color: var(--primary);
  flex-shrink: 0;
}

.close-btn {
  display: none;
  padding: 4px;
  border-radius: 4px;
  color: var(--text-muted);
}

.close-btn:hover {
  background: var(--bg-subtle);
  color: var(--text-main);
}

/* 側邊欄全站捷徑與工具區塊 (僅在行動端抽屜顯示，桌機端已有頂部 HeaderNav 避免重複) */
.sidebar-quick-nav {
  display: none;
  padding: 0.65rem 0.85rem;
  background: var(--bg-subtle);
  border-bottom: 1px solid var(--border-color);
  flex-direction: column;
  gap: 0.5rem;
}

.quick-nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.quick-nav-title {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
}

.quick-nav-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
}

.quick-nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 7px 8px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background: var(--bg-surface);
  color: var(--text-main);
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
}

.quick-nav-btn:hover {
  background: var(--bg-hover);
  border-color: var(--primary);
  color: var(--primary);
  transform: translateY(-1px);
}

.quick-nav-btn.is-active {
  background: var(--primary-light);
  border-color: var(--primary);
  color: var(--primary);
  font-weight: 700;
}

.quick-icon {
  flex-shrink: 0;
}

.welcome-icon {
  color: #10b981;
}

.glossary-icon {
  color: #8b5cf6;
}

.sun-icon {
  color: #f59e0b;
}

.moon-icon {
  color: #6366f1;
}

.ext-icon {
  opacity: 0.6;
}

/* 側邊欄訪客與在線狀態儀表 */
.sidebar-stats-badge {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px 8px;
  border-radius: 6px;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  font-size: 0.72rem;
}

.sidebar-stat-item {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--text-muted);
}

.sidebar-stat-divider {
  width: 1px;
  height: 12px;
  background: var(--border-color);
}

.sidebar-pulse-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #94a3b8;
}

.sidebar-pulse-dot.is-active {
  background: #10b981;
  box-shadow: 0 0 6px #10b981;
}

.sidebar-stats-badge .stat-val {
  font-weight: 700;
  color: var(--text-main);
  font-family: monospace;
}

/* 側邊欄領域切換分段列 */
.sidebar-track-tabs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
  padding: 0.5rem 0.75rem;
  background: var(--bg-subtle);
  border-bottom: 1px solid var(--border-color);
}

.sidebar-track-tab-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  padding: 5px 2px;
  border-radius: 6px;
  border: 1px solid var(--border-color);
  background: var(--bg-surface);
  color: var(--text-muted);
  font-size: 0.74rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.sidebar-track-tab-btn:hover {
  color: var(--text-main);
  border-color: #94a3b8;
}

.sidebar-track-tab-btn.is-active {
  color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}

.sidebar-track-tab-btn.tab-css.is-active {
  background: #2563eb;
  border-color: #1d4ed8;
}

.sidebar-track-tab-btn.tab-html.is-active {
  background: #ea580c;
  border-color: #c2410c;
}

.sidebar-track-tab-btn.tab-javascript.is-active {
  background: #d97706;
  border-color: #b45309;
}

.sidebar-track-tab-btn.tab-vue.is-active {
  background: #059669;
  border-color: #047857;
}

.sidebar-track-tab-btn .tab-badge {
  font-size: 0.65rem;
  padding: 0 4px;
  border-radius: 9999px;
  background: var(--bg-subtle);
  color: var(--text-muted);
}

.sidebar-track-tab-btn.is-active .tab-badge {
  background: rgba(255, 255, 255, 0.25);
  color: white;
}

.sidebar-content {
  overflow-y: auto;
  padding: 0.75rem 0.75rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.category-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0.35rem 0.6rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
}

.cat-icon {
  color: var(--primary);
}

.category-count {
  font-size: 0.7rem;
  opacity: 0.7;
}

.lesson-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.lesson-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.15s ease;
  border: 1px solid transparent;
}

.lesson-item:hover {
  background: var(--bg-subtle);
}

.lesson-item.active {
  background: var(--primary-light);
  border-color: rgba(66, 184, 131, 0.3);
}

.lesson-item.active .lesson-title {
  color: var(--primary);
  font-weight: 600;
}

.complete-checkbox {
  width: 18px;
  height: 18px;
  border-radius: 4px;
  border: 1.5px solid var(--text-light);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: var(--bg-surface);
  transition: all 0.15s ease;
}

.complete-checkbox:hover {
  border-color: var(--primary);
}

.complete-checkbox.is-checked {
  background: var(--primary);
  border-color: var(--primary);
  color: #ffffff;
}

.check-mark {
  stroke-width: 3px;
}

.lesson-info {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}

.lesson-title {
  font-size: 0.85rem;
  color: var(--text-main);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.lesson-time {
  font-size: 0.7rem;
  color: var(--text-muted);
}

.arrow-icon {
  color: var(--text-light);
  opacity: 0;
  transform: translateX(-4px);
  transition: all 0.15s ease;
}

.lesson-item:hover .arrow-icon,
.lesson-item.active .arrow-icon {
  opacity: 1;
  transform: translateX(0);
}

.lesson-item.active .arrow-icon {
  color: var(--primary);
}

/* 行動版響應式 */
@media (max-width: 860px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 290px;
    max-width: 85vw;
    height: 100vh;
    transform: translateX(-100%);
    box-shadow: var(--shadow-lg);
    z-index: 100;
  }

  .sidebar.is-open {
    transform: translateX(0);
  }

  .close-btn {
    display: flex;
  }

  .sidebar-quick-nav {
    display: flex;
  }

  .sidebar-backdrop {
    position: fixed;
    inset: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
    z-index: 90;
  }
}
</style>
