<script setup>
import { computed } from 'vue';
import { 
  Sun, 
  Moon, 
  BookOpen, 
  CheckCircle2, 
  Menu, 
  ExternalLink,
  Users,
  Eye,
  Palette,
  FileCode,
  Braces,
  Layers,
  Sparkles
} from 'lucide-vue-next';
import { onlineCount, totalViews, isRealtimeConnected } from '../services/firebase';

const props = defineProps({
  isDark: Boolean,
  sidebarOpen: Boolean,
  currentView: {
    type: String,
    default: 'lessons'
  },
  currentTrack: {
    type: String,
    default: 'vue'
  },
  tracks: {
    type: Array,
    default: () => []
  },
  trackCompletedCount: {
    type: Number,
    default: 0
  },
  trackTotalLessons: {
    type: Number,
    default: 0
  }
});

const emit = defineEmits(['toggle-theme', 'toggle-sidebar', 'toggle-view', 'select-track']);

const currentTrackMeta = computed(() => {
  return props.tracks.find(t => t.id === props.currentTrack) || props.tracks[0];
});

const currentTrackLabel = computed(() => {
  return currentTrackMeta.value ? currentTrackMeta.value.label : 'Vue';
});

const trackProgressPercentage = computed(() => {
  if (!props.trackTotalLessons) return 0;
  return Math.round((props.trackCompletedCount / props.trackTotalLessons) * 100);
});

const getTrackIcon = (id) => {
  switch (id) {
    case 'css':
      return Palette;
    case 'html':
      return FileCode;
    case 'javascript':
      return Braces;
    case 'vue':
      return Layers;
    default:
      return Layers;
  }
};
</script>

<template>
  <header class="header-nav">
    <!-- 第一行：品牌識別與功能操作列 -->
    <div class="header-top-row">
      <div class="header-left">
        <button 
          class="icon-btn mobile-menu-btn" 
          @click="emit('toggle-sidebar')"
          aria-label="選單開關"
        >
          <Menu :size="20" />
        </button>

        <div class="brand" @click="emit('select-track', 'vue')" title="網頁製作教學網站 - 全方位實戰指南">
          <div class="brand-logo">
            <svg viewBox="0 0 261.76 226.69" width="24" height="24">
              <path d="M161.096.001l-30.225 52.35L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/>
              <path d="M161.096.001l-30.225 52.35L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/>
            </svg>
          </div>
          <div class="brand-text">
            <span class="brand-title">網頁製作教學網站</span>
            <span class="brand-badge">全方位實戰</span>
          </div>
        </div>
      </div>

      <div class="header-right">
        <!-- 訪客與即時在線狀態儀表 (Firebase Realtime Database) -->
        <div class="visitor-stats-badge" :title="isRealtimeConnected ? '已連線 Firebase 即時統計' : 'Firebase 連線中...'">
          <div class="stat-item online-stat">
            <span class="pulse-dot" :class="{ 'is-active': isRealtimeConnected }"></span>
            <Users :size="13" class="stat-icon" />
            <span class="stat-val">{{ onlineCount }}</span>
            <span class="stat-unit">在線</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item views-stat" title="全站累計瀏覽人次">
            <Eye :size="13" class="stat-icon" />
            <span class="stat-val">{{ totalViews > 0 ? totalViews.toLocaleString() : '...' }}</span>
            <span class="stat-unit">次瀏覽</span>
          </div>
        </div>

        <!-- 如何寫網站（新手導引歡迎頁）按鈕 -->
        <button 
          class="nav-toggle-btn welcome-nav-btn"
          :class="{ 'is-active': currentView === 'welcome' }"
          @click="emit('toggle-view', currentView === 'welcome' ? 'lessons' : 'welcome')"
          title="新手導引：如何寫網站與前端全貌"
        >
          <Sparkles :size="15" />
          <span class="nav-toggle-text">{{ currentView === 'welcome' ? '返回課程' : '如何寫網站' }}</span>
        </button>

        <!-- 技術名詞字典切換按鈕 -->
        <button 
          class="nav-toggle-btn"
          :class="{ 'is-active': currentView === 'glossary' }"
          @click="emit('toggle-view', currentView === 'glossary' ? 'lessons' : 'glossary')"
          title="切換至技術名詞字典（附發音與比喻）"
        >
          <BookOpen :size="15" />
          <span class="nav-toggle-text">{{ currentView === 'glossary' ? '返回課程' : '名詞字典' }}</span>
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
    </div>

    <!-- 第二行：四大領域 Tags 標籤列 (CSS / HTML / Javascript / Vue) -->
    <div class="header-tags-row">
      <div class="track-tags-container">
        <button 
          v-for="track in tracks" 
          :key="track.id"
          class="track-tag-item"
          :class="{ 
            'is-active': currentTrack === track.id,
            [`tag-${track.id}`]: true
          }"
          @click="emit('select-track', track.id)"
          :title="track.title + '：' + (track.description || '')"
        >
          <component :is="getTrackIcon(track.id)" :size="14" class="track-tag-icon" />
          <span class="track-tag-name">{{ track.label }}</span>
          <span class="track-tag-count">{{ track.count }} 課</span>
        </button>
      </div>

      <!-- 右側：當前領域學習進度 -->
      <div class="track-progress-wrapper" v-if="currentView === 'lessons'">
        <div class="progress-details">
          <span class="progress-track-name">
            <CheckCircle2 :size="13" class="progress-check-icon" />
            {{ currentTrackLabel }} 進度
          </span>
          <span class="progress-num">{{ trackCompletedCount }} / {{ trackTotalLessons }} 單元 ({{ trackProgressPercentage }}%)</span>
        </div>
        <div class="progress-track-bg">
          <div class="progress-track-fill" :style="{ width: trackProgressPercentage + '%' }"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-nav {
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

/* 第一行：標題與工具 */
.header-top-row {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  border-bottom: 1px solid var(--border-color);
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
  user-select: none;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.brand:hover {
  opacity: 0.9;
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
  font-size: 0.68rem;
  padding: 1px 7px;
  border-radius: 9999px;
  background: var(--primary-light);
  color: var(--primary);
  font-weight: 600;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

/* 訪客與在線統計儀表 */
.visitor-stats-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.65rem;
  background: var(--bg-subtle);
  border: 1px solid var(--border-color);
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-muted);
  user-select: none;
}

.visitor-stats-badge:hover {
  border-color: var(--primary);
  background: var(--bg-surface);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.stat-icon {
  opacity: 0.8;
  color: var(--text-muted);
}

.stat-val {
  font-weight: 700;
  color: var(--text-main);
  font-variant-numeric: tabular-nums;
}

.stat-unit {
  font-size: 0.7rem;
  opacity: 0.85;
}

.stat-divider {
  width: 1px;
  height: 12px;
  background: var(--border-color);
}

.pulse-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #94a3b8;
  display: inline-block;
  transition: background-color 0.3s ease;
}

.pulse-dot.is-active {
  background-color: #10b981;
  box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  animation: pulse-ring 2s infinite;
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 5px rgba(16, 185, 129, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}

.nav-toggle-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  font-size: 0.8rem;
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
  color: white;
  border-color: var(--primary);
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.8rem;
  color: var(--text-muted);
  text-decoration: none;
  padding: 4px 8px;
  border-radius: var(--radius-sm);
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: var(--primary);
  background: var(--primary-light);
}

.external-icon {
  opacity: 0.7;
}

.icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-color);
  background: var(--bg-surface);
  color: var(--text-main);
  cursor: pointer;
  transition: all 0.2s ease;
}

.icon-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
  background: var(--primary-light);
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

/* 第二行：四大領域 Tags 標籤列 */
.header-tags-row {
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  background: var(--bg-subtle);
  border-top: 1px solid rgba(0, 0, 0, 0.02);
  overflow-x: auto;
  scrollbar-width: none;
}

.header-tags-row::-webkit-scrollbar {
  display: none;
}

.track-tags-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.track-tag-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted);
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  cursor: pointer;
  user-select: none;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
}

.track-tag-icon {
  opacity: 0.7;
}

.track-tag-count {
  font-size: 0.68rem;
  padding: 1px 6px;
  border-radius: 9999px;
  background: var(--bg-subtle);
  color: var(--text-muted);
  font-weight: 600;
  transition: all 0.2s ease;
}

.track-tag-item:hover {
  color: var(--text-main);
  border-color: #94a3b8;
  transform: translateY(-1px);
}

/* 領域 Active 特殊視覺 */
.track-tag-item.is-active {
  color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
}

.track-tag-item.is-active .track-tag-icon {
  opacity: 1;
}

.track-tag-item.is-active .track-tag-count {
  background: rgba(255, 255, 255, 0.25);
  color: white;
}

/* 各領域專屬顏色 */
.track-tag-item.tag-css.is-active {
  background: #2563eb;
  border-color: #1d4ed8;
}

.track-tag-item.tag-html.is-active {
  background: #ea580c;
  border-color: #c2410c;
}

.track-tag-item.tag-javascript.is-active {
  background: #d97706;
  border-color: #b45309;
}

.track-tag-item.tag-vue.is-active {
  background: #059669;
  border-color: #047857;
}

/* 進度條容器 */
.track-progress-wrapper {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 220px;
  flex-shrink: 0;
}

.progress-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.72rem;
  color: var(--text-muted);
}

.progress-track-name {
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  color: var(--text-main);
}

.progress-check-icon {
  color: var(--primary);
}

.progress-num {
  font-variant-numeric: tabular-nums;
  font-weight: 500;
}

.progress-track-bg {
  width: 100%;
  height: 5px;
  background: var(--border-color);
  border-radius: 9999px;
  overflow: hidden;
}

.progress-track-fill {
  height: 100%;
  background: linear-gradient(90deg, #10b981, #3b82f6);
  border-radius: 9999px;
  transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 響應式佈局 */
@media (max-width: 860px) {
  .mobile-menu-btn {
    display: flex;
  }
  .track-progress-wrapper {
    display: none;
  }
  .nav-link-text {
    display: none;
  }
  .brand-badge {
    display: none;
  }
}

@media (max-width: 640px) {
  .header-top-row {
    padding: 0 0.75rem;
  }
  .header-tags-row {
    padding: 0 0.75rem;
  }
  .visitor-stats-badge {
    padding: 0.2rem 0.45rem;
    gap: 0.3rem;
  }
  .stat-unit {
    display: none;
  }
  .nav-toggle-text {
    display: none;
  }
}
</style>
