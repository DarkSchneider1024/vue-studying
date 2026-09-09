<script setup>
import { computed } from 'vue';
import { 
  Sun, 
  Moon, 
  BookOpen, 
  CheckCircle2, 
  Menu, 
  ExternalLink,
  Sparkles
} from 'lucide-vue-next';

const props = defineProps({
  isDark: Boolean,
  sidebarOpen: Boolean,
  currentView: {
    type: String,
    default: 'lessons'
  },
  completedIds: {
    type: Array,
    default: () => []
  },
  totalLessons: {
    type: Number,
    default: 29
  }
});

const emit = defineEmits(['toggle-theme', 'toggle-sidebar', 'toggle-view']);

const progressPercentage = computed(() => {
  if (!props.totalLessons) return 0;
  return Math.round((props.completedIds.length / props.totalLessons) * 100);
});
</script>

<template>
  <header class="header-nav">
    <div class="header-left">
      <button 
        class="icon-btn mobile-menu-btn" 
        @click="emit('toggle-sidebar')"
        aria-label="選單開關"
      >
        <Menu :size="20" />
      </button>

      <div class="brand">
        <div class="brand-logo">
          <svg viewBox="0 0 261.76 226.69" width="26" height="26">
            <path d="M161.096.001l-30.225 52.35L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/>
            <path d="M161.096.001l-30.225 52.35L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/>
          </svg>
        </div>
        <div class="brand-text">
          <span class="brand-title">Vue 3 實戰自學指南</span>
          <span class="brand-badge">MDN 互動風格</span>
        </div>
      </div>
    </div>

    <!-- 學習進度條 -->
    <div class="progress-section" v-if="currentView === 'lessons'">
      <div class="progress-info">
        <span class="progress-label">
          <CheckCircle2 :size="15" class="progress-icon" />
          學習進度
        </span>
        <span class="progress-count">{{ completedIds.length }} / {{ totalLessons }} 完成 ({{ progressPercentage }}%)</span>
      </div>
      <div class="progress-bar-bg">
        <div class="progress-bar-fill" :style="{ width: progressPercentage + '%' }"></div>
      </div>
    </div>

    <div class="header-right">
      <!-- 技術名詞字典切換按鈕 -->
      <button 
        class="nav-toggle-btn"
        :class="{ 'is-active': currentView === 'glossary' }"
        @click="emit('toggle-view', currentView === 'glossary' ? 'lessons' : 'glossary')"
        title="切換至技術名詞字典（附發音與比喻）"
      >
        <BookOpen :size="16" />
        <span>{{ currentView === 'glossary' ? '返回課程學習' : '技術名詞字典' }}</span>
      </button>

      <a 
        href="https://vuejs.org/guide/introduction.html" 
        target="_blank" 
        rel="noopener noreferrer"
        class="nav-link"
        title="前往 Vue 官方文檔"
      >
        <span class="nav-link-text">Vue 官網</span>
        <ExternalLink :size="13" class="external-icon" />
      </a>

      <button 
        class="icon-btn theme-toggle-btn" 
        @click="emit('toggle-theme')" 
        :title="isDark ? '切換淺色模式' : '切換深色模式'"
      >
        <Sun v-if="isDark" :size="18" class="theme-icon sun" />
        <Moon v-else :size="18" class="theme-icon moon" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.header-nav {
  height: 60px;
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: var(--shadow-sm);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.brand-logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.brand-title {
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: -0.01em;
  color: var(--text-main);
}

.brand-badge {
  font-size: 0.7rem;
  padding: 2px 7px;
  border-radius: 9999px;
  background: var(--primary-light);
  color: var(--primary);
  font-weight: 600;
}

.progress-section {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 220px;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: var(--text-muted);
}

.progress-label {
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  color: var(--primary);
}

.progress-bar-bg {
  width: 100%;
  height: 6px;
  background: var(--bg-subtle);
  border-radius: 9999px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #42b883, #3b82f6);
  border-radius: 9999px;
  transition: width 0.35s ease;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.nav-toggle-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-main);
  background: var(--bg-subtle);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-toggle-btn:hover {
  background: var(--primary-light);
  border-color: var(--primary);
  color: var(--primary);
}

.nav-toggle-btn.is-active {
  background: var(--primary);
  border-color: var(--primary);
  color: #ffffff;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 0.85rem;
  color: var(--text-muted);
  text-decoration: none;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-color);
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: var(--primary);
  border-color: var(--primary);
  background: var(--primary-light);
}

.external-icon {
  opacity: 0.6;
}

.icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  color: var(--text-muted);
  background: var(--bg-subtle);
  border: 1px solid var(--border-color);
  transition: all 0.2s ease;
}

.icon-btn:hover {
  color: var(--text-main);
  background: var(--border-color);
}

.theme-icon.sun {
  color: #f59e0b;
}

.theme-icon.moon {
  color: #6366f1;
}

.mobile-menu-btn {
  display: none;
}

@media (max-width: 860px) {
  .mobile-menu-btn {
    display: flex;
  }
  .progress-section {
    display: none;
  }
  .nav-link-text {
    display: none;
  }
}
</style>
