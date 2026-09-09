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
  Wrench
} from 'lucide-vue-next';

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
  }
});

const currentTrackMeta = computed(() => {
  return props.tracks.find(t => t.id === props.currentTrack) || { label: '課程', count: props.curriculum.length };
});

const emit = defineEmits(['select-lesson', 'toggle-complete', 'close-sidebar', 'select-track']);

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
    top: 60px;
    left: 0;
    bottom: 0;
    height: calc(100vh - 60px);
    transform: translateX(-100%);
    box-shadow: var(--shadow-lg);
  }

  .sidebar.is-open {
    transform: translateX(0);
  }

  .close-btn {
    display: flex;
  }

  .sidebar-backdrop {
    position: fixed;
    inset: 0;
    top: 60px;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
    z-index: 35;
  }
}
</style>
