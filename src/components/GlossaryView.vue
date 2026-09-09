<script setup>
import { ref, computed, onUnmounted } from 'vue';
import { glossaryCategories, glossaryTerms } from '../data/glossary';
import { 
  Volume2, 
  VolumeX, 
  Search, 
  BookOpen, 
  Layers, 
  Compass, 
  Cpu, 
  Server, 
  Code2,
  X
} from 'lucide-vue-next';

const emit = defineEmits(['close']);

const searchQuery = ref('');
const selectedCat = ref('all');
const speakingTerm = ref(null);

// 判斷瀏覽器是否支援語音朗讀
const isTtsSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

// 語音朗讀功能
const speak = (text) => {
  if (!isTtsSupported) return;
  window.speechSynthesis.cancel(); // 停止先前的朗讀

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.9; // 稍慢發音，利於學習

  utterance.onstart = () => {
    speakingTerm.value = text;
  };
  utterance.onend = () => {
    speakingTerm.value = null;
  };
  utterance.onerror = () => {
    speakingTerm.value = null;
  };

  window.speechSynthesis.speak(utterance);
};

const stopSpeak = () => {
  if (!isTtsSupported) return;
  window.speechSynthesis.cancel();
  speakingTerm.value = null;
};

onUnmounted(() => {
  if (isTtsSupported) {
    window.speechSynthesis.cancel();
  }
});

// 過濾詞條清單
const filteredTerms = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();
  return glossaryTerms.filter(item => {
    const matchCat = selectedCat.value === 'all' || item.category === selectedCat.value;
    if (!matchCat) return false;
    if (!q) return true;

    return (
      item.en.toLowerCase().includes(q) ||
      item.zh.toLowerCase().includes(q) ||
      item.pinyin.toLowerCase().includes(q) ||
      item.definition.toLowerCase().includes(q) ||
      item.analogy.toLowerCase().includes(q)
    );
  });
});

const getCategoryCount = (catId) => {
  if (catId === 'all') return glossaryTerms.length;
  return glossaryTerms.filter(t => t.category === catId).length;
};
</script>

<template>
  <div class="glossary-container">
    <!-- 頂部資訊與搜尋列 -->
    <header class="glossary-header">
      <div class="header-main-row">
        <div class="glossary-brand">
          <BookOpen :size="22" class="brand-icon" />
          <div class="brand-titles">
            <h2 class="glossary-title">前端與系統架構專業名詞字典</h2>
            <span class="glossary-subtitle">附真人發音、軟工核心定義與白話生活比喻</span>
          </div>
        </div>

        <button class="close-glossary-btn" @click="emit('close')" title="返回課程學習">
          <X :size="18" />
          <span>返回課程</span>
        </button>
      </div>

      <!-- 控制列：搜尋與停止語音 -->
      <div class="search-control-bar">
        <div class="search-input-wrap">
          <Search :size="16" class="search-icon" />
          <input 
            type="search" 
            v-model="searchQuery" 
            placeholder="搜尋英文術語、中文意義或比喻關鍵字..." 
            class="search-input"
          />
        </div>

        <button 
          v-if="speakingTerm" 
          class="stop-tts-btn" 
          @click="stopSpeak"
          title="停止當前語音朗讀"
        >
          <VolumeX :size="15" />
          <span>停止朗讀</span>
        </button>
      </div>

      <!-- 分類標籤頁切換列 -->
      <nav class="cat-nav-pills">
        <button 
          v-for="cat in glossaryCategories" 
          :key="cat.id"
          class="cat-pill"
          :class="{ active: selectedCat === cat.id }"
          @click="selectedCat = cat.id"
        >
          <span>{{ cat.name }}</span>
          <span class="cat-badge">{{ getCategoryCount(cat.id) }}</span>
        </button>
      </nav>
    </header>

    <!-- 術語列表主體區 -->
    <main class="terms-viewport">
      <div class="terms-grid">
        <article 
          v-for="term in filteredTerms" 
          :key="term.id" 
          class="term-card"
        >
          <!-- 標題與朗讀按鈕 -->
          <div class="term-header">
            <div class="term-name-group">
              <h3 class="term-en">{{ term.en }}</h3>
              <span class="term-zh">{{ term.zh }}</span>
            </div>

            <button 
              class="speak-btn"
              :class="{ 'is-speaking': speakingTerm === term.en }"
              @click="speak(term.en)"
              :title="'朗讀 ' + term.en + ' 發音'"
            >
              <Volume2 :size="16" />
              <span class="speak-label">發音</span>
            </button>
          </div>

          <!-- 音標與諧音擬音 -->
          <div class="pronunciation-bar">
            <span class="tag-label">發音</span>
            <code class="phonetic-code">{{ term.phonetic }}</code>
            <span class="pinyin-text">({{ term.pinyin }})</span>
          </div>

          <!-- 軟體工程定義 -->
          <div class="term-section">
            <div class="section-label-row">
              <span class="section-badge badge-definition">軟工意義</span>
            </div>
            <p class="section-text definition-text">{{ term.definition }}</p>
          </div>

          <!-- 白話通俗比喻 -->
          <div class="term-section analogy-box">
            <div class="section-label-row">
              <span class="section-badge badge-analogy">通俗比喻</span>
            </div>
            <p class="section-text analogy-text">{{ term.analogy }}</p>
          </div>
        </article>
      </div>

      <div v-if="filteredTerms.length === 0" class="empty-results">
        <p>查無符合「{{ searchQuery }}」的專業術語，請嘗試其他關鍵字。</p>
      </div>
    </main>
  </div>
</template>

<style scoped>
.glossary-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--bg-app);
  overflow: hidden;
}

.glossary-header {
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border-color);
  padding: 1.25rem 1.75rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  box-shadow: var(--shadow-sm);
  flex-shrink: 0;
}

.header-main-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.glossary-brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-icon {
  color: var(--primary);
}

.glossary-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0;
}

.glossary-subtitle {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.close-glossary-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  background: var(--bg-subtle);
  border: 1px solid var(--border-color);
  color: var(--text-main);
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.close-glossary-btn:hover {
  background: var(--primary-light);
  border-color: var(--primary);
  color: var(--primary);
}

.search-control-bar {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-input-wrap {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 12px;
  color: var(--text-muted);
}

.search-input {
  width: 100%;
  padding: 8px 12px 8px 36px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-color);
  background: var(--bg-app);
  color: var(--text-main);
  font-size: 0.85rem;
  outline: none;
  transition: border-color 0.2s ease;
}

.search-input:focus {
  border-color: var(--primary);
}

.stop-tts-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 7px 12px;
  border-radius: var(--radius-sm);
  background: #fee2e2;
  border: 1px solid #fca5a5;
  color: #b91c1c;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
}

.cat-nav-pills {
  display: flex;
  gap: 6px;
  overflow-x: auto;
  padding-bottom: 4px;
}

.cat-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 9999px;
  background: var(--bg-subtle);
  border: 1px solid var(--border-color);
  color: var(--text-muted);
  font-size: 0.78rem;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s ease;
}

.cat-pill:hover {
  background: var(--border-color);
  color: var(--text-main);
}

.cat-pill.active {
  background: var(--primary);
  border-color: var(--primary);
  color: #ffffff;
  font-weight: 600;
}

.cat-badge {
  font-size: 0.7rem;
  padding: 1px 6px;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.08);
}

.cat-pill.active .cat-badge {
  background: rgba(255, 255, 255, 0.25);
  color: #ffffff;
}

/* 內容列表區 */
.terms-viewport {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem 1.75rem 3rem;
}

.terms-grid {
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 1080px;
  margin: 0 auto;
}

.term-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-left: 4px solid var(--primary);
  border-radius: var(--radius-md);
  padding: 14px 18px;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.term-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.term-name-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.term-en {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0;
  letter-spacing: -0.01em;
}

.term-zh {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
}

.speak-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  border-radius: var(--radius-sm);
  background: var(--primary-light);
  border: 1px solid rgba(66, 184, 131, 0.25);
  color: var(--primary);
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.speak-btn:hover {
  background: var(--primary);
  color: #ffffff;
}

.speak-btn.is-speaking {
  background: var(--primary);
  color: #ffffff;
  animation: speaking-pulse 1s infinite alternate;
}

@keyframes speaking-pulse {
  from { opacity: 0.8; }
  to { opacity: 1; transform: scale(1.05); }
}

.pronunciation-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.tag-label {
  font-size: 0.7rem;
  padding: 1px 6px;
  border-radius: 4px;
  background: var(--bg-subtle);
  border: 1px solid var(--border-color);
  color: var(--text-muted);
}

.phonetic-code {
  font-family: monospace;
  background: var(--bg-subtle);
  padding: 1px 6px;
  border-radius: 4px;
  color: #d946ef;
}

[data-theme='dark'] .phonetic-code {
  color: #f472b6;
}

.pinyin-text {
  font-size: 0.78rem;
  color: var(--text-light);
}

.term-section {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.section-label-row {
  display: flex;
  align-items: center;
}

.section-badge {
  font-size: 0.7rem;
  font-weight: 700;
  padding: 1px 8px;
  border-radius: 4px;
}

.badge-definition {
  background: var(--primary-light);
  color: var(--primary);
}

.badge-analogy {
  background: #fef3c7;
  color: #92400e;
}

[data-theme='dark'] .badge-analogy {
  background: rgba(245, 158, 11, 0.2);
  color: #fde68a;
}

.section-text {
  font-size: 0.88rem;
  line-height: 1.6;
  margin: 0;
}

.definition-text {
  color: var(--text-main);
}

.analogy-box {
  background: var(--bg-subtle);
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  border-left: 3px solid #f59e0b;
}

.analogy-text {
  color: var(--text-main);
  font-weight: 500;
}

.empty-results {
  text-align: center;
  padding: 3rem 1rem;
  color: var(--text-muted);
  font-size: 0.95rem;
}
</style>
