<script setup>
import { ref, computed } from 'vue';
import { 
  BookOpen, 
  Clock, 
  Target, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ArrowLeft, 
  ArrowRight,
  CheckCircle2,
  Lightbulb
} from 'lucide-vue-next';

const props = defineProps({
  lesson: {
    type: Object,
    required: true
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  hasPrev: {
    type: Boolean,
    default: false
  },
  hasNext: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['prev-lesson', 'next-lesson', 'toggle-complete']);

const showHints = ref(false);

// 簡單安全地解析概念文字為 HTML（支援標題、代碼塊、粗體、清單與區塊引用）
const formatMarkdown = (text) => {
  if (!text) return '';
  let html = text.trim();

  // 解析代碼塊 ```lang ... ```
  html = html.replace(/```([a-z]*)\n([\s\S]*?)```/g, (match, lang, code) => {
    const escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return `<div class="code-block-wrapper"><pre class="code-block"><code>${escaped.trim()}</code></pre></div>`;
  });

  // 解析行內代碼 `code`
  html = html.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

  // 解析 ### 標題
  html = html.replace(/^### (.*$)/gim, '<h3 class="doc-h3">$1</h3>');

  // 解析 ## 標題
  html = html.replace(/^## (.*$)/gim, '<h2 class="doc-h2">$1</h2>');

  // 解析 > 引用提示塊
  html = html.replace(/^> (.*$)/gim, '<div class="doc-callout">$1</div>');

  // 解析粗體 **text**
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  // 解析列表 - item
  html = html.replace(/^- (.*$)/gim, '<li class="doc-li">$1</li>');

  // 將連續的 li 包裹在 ul
  html = html.replace(/(<li[\s\S]*?<\/li>)/g, '<ul class="doc-ul">$1</ul>');

  // 解析段落（換行）
  html = html.replace(/\n\n+/g, '</p><p class="doc-p">');
  html = `<p class="doc-p">${html}</p>`;

  // 清除多餘包裹
  html = html.replace(/<p class="doc-p"><\/p>/g, '');
  html = html.replace(/<p class="doc-p">(<div[\s\S]*?<\/div>)<\/p>/g, '$1');
  html = html.replace(/<p class="doc-p">(<h[23][\s\S]*?<\/h[23]>)<\/p>/g, '$1');
  html = html.replace(/<p class="doc-p">(<ul[\s\S]*?<\/ul>)<\/p>/g, '$1');

  return html;
};

const formattedConcept = computed(() => formatMarkdown(props.lesson.concept));
const formattedTask = computed(() => formatMarkdown(props.lesson.task));
</script>

<template>
  <article class="lesson-article">
    <!-- 頂部資訊列 -->
    <div class="lesson-meta-bar">
      <span class="category-pill">{{ lesson.category }}</span>
      <span class="read-time-pill">
        <Clock :size="13" />
        {{ lesson.readTime }}
      </span>
    </div>

    <!-- 標題 -->
    <h1 class="lesson-main-title">{{ lesson.title }}</h1>

    <!-- 簡介摘要卡 -->
    <div class="summary-box">
      <Lightbulb :size="20" class="summary-icon" />
      <p class="summary-text">{{ lesson.summary }}</p>
    </div>

    <!-- 觀念正文 -->
    <section class="lesson-body">
      <div class="markdown-body" v-html="formattedConcept"></div>
    </section>

    <!-- 實戰任務卡片（Task Card） -->
    <section class="task-card">
      <div class="task-header">
        <div class="task-title-wrap">
          <Target :size="20" class="task-icon" />
          <h2 class="task-title">實作挑戰任務</h2>
        </div>
        <span class="task-badge">動手練習</span>
      </div>

      <div class="task-content markdown-body" v-html="formattedTask"></div>

      <!-- 提示手風琴 -->
      <div v-if="lesson.hints && lesson.hints.length" class="hints-box">
        <button 
          class="hints-toggle" 
          @click="showHints = !showHints"
        >
          <div class="hints-toggle-left">
            <HelpCircle :size="16" class="hint-icon" />
            <span>卡關了嗎？點我查看小提示 ({{ lesson.hints.length }})</span>
          </div>
          <ChevronUp v-if="showHints" :size="16" />
          <ChevronDown v-else :size="16" />
        </button>

        <ul v-if="showHints" class="hints-list">
          <li v-for="(hint, idx) in lesson.hints" :key="idx" class="hint-item">
            {{ hint }}
          </li>
        </ul>
      </div>
    </section>

    <!-- 底部導航按鈕列 -->
    <footer class="lesson-footer">
      <button 
        class="nav-btn prev-btn" 
        :disabled="!hasPrev"
        @click="emit('prev-lesson')"
      >
        <ArrowLeft :size="16" />
        <span>上一課</span>
      </button>

      <button 
        class="complete-btn" 
        :class="{ 'is-completed': isCompleted }"
        @click="emit('toggle-complete', lesson.id)"
      >
        <CheckCircle2 :size="17" />
        <span>{{ isCompleted ? '已完成本單元' : '標記本單元為已完成' }}</span>
      </button>

      <button 
        class="nav-btn next-btn" 
        :disabled="!hasNext"
        @click="emit('next-lesson')"
      >
        <span>下一課</span>
        <ArrowRight :size="16" />
      </button>
    </footer>
  </article>
</template>

<style scoped>
.lesson-article {
  max-width: 800px;
  margin: 0 auto;
  padding: 1.5rem 2rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.lesson-meta-bar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.category-pill {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 9999px;
  background: var(--primary-light);
  color: var(--primary);
}

.read-time-pill {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.75rem;
  color: var(--text-muted);
}

.lesson-main-title {
  font-size: 1.85rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.3;
  color: var(--text-main);
}

.summary-box {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-left: 4px solid var(--primary);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.summary-icon {
  color: var(--primary);
  flex-shrink: 0;
  margin-top: 2px;
}

.summary-text {
  font-size: 0.95rem;
  color: var(--text-main);
  line-height: 1.6;
  font-weight: 500;
}

.lesson-body {
  line-height: 1.75;
}

/* 任務卡片 */
.task-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1.25rem 1.5rem;
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;
}

.task-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #42b883);
}

.task-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-subtle);
}

.task-title-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.task-icon {
  color: #3b82f6;
}

.task-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-main);
}

.task-badge {
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 9999px;
  background: #dbeafe;
  color: #1e40af;
}

.hints-box {
  margin-top: 1.25rem;
  border-top: 1px dashed var(--border-color);
  padding-top: 0.75rem;
}

.hints-toggle {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  background: var(--bg-subtle);
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.hints-toggle:hover {
  background: var(--border-color);
  color: var(--text-main);
}

.hints-toggle-left {
  display: flex;
  align-items: center;
  gap: 6px;
}

.hint-icon {
  color: #f59e0b;
}

.hints-list {
  list-style: none;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0 0.5rem;
}

.hint-item {
  font-size: 0.85rem;
  color: var(--text-main);
  padding: 6px 10px;
  background: rgba(245, 158, 11, 0.08);
  border-left: 3px solid #f59e0b;
  border-radius: 4px;
}

/* 底部導覽按鈕 */
.lesson-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-color);
  background: var(--bg-surface);
  color: var(--text-main);
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.nav-btn:hover:not(:disabled) {
  border-color: var(--primary);
  color: var(--primary);
  background: var(--primary-light);
}

.nav-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.complete-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  border-radius: var(--radius-sm);
  background: var(--bg-subtle);
  border: 1px solid var(--border-color);
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.complete-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.complete-btn.is-completed {
  background: var(--primary);
  border-color: var(--primary);
  color: #ffffff;
}

@media (max-width: 640px) {
  .lesson-article {
    padding: 1rem;
  }
  .lesson-main-title {
    font-size: 1.4rem;
  }
  .lesson-footer {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>

<!-- Markdown 內容樣式 -->
<style>
.markdown-body {
  font-size: 0.95rem;
  color: var(--text-main);
}

.markdown-body .doc-h2 {
  font-size: 1.35rem;
  font-weight: 700;
  margin: 1.25rem 0 0.75rem;
  color: var(--text-main);
  border-bottom: 1px solid var(--border-subtle);
  padding-bottom: 0.35rem;
}

.markdown-body .doc-h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 1.1rem 0 0.5rem;
  color: var(--text-main);
}

.markdown-body .doc-p {
  margin-bottom: 0.9rem;
  line-height: 1.7;
}

.markdown-body .inline-code {
  background: var(--bg-subtle);
  color: #d946ef;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.85em;
  border: 1px solid var(--border-color);
}

[data-theme='dark'] .markdown-body .inline-code {
  color: #f472b6;
}

.markdown-body .code-block-wrapper {
  margin: 0.85rem 0;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.markdown-body .code-block {
  background: var(--bg-code);
  color: var(--text-code);
  padding: 1rem 1.25rem;
  overflow-x: auto;
  font-size: 0.85rem;
  line-height: 1.5;
}

.markdown-body .doc-callout {
  margin: 1rem 0;
  padding: 0.85rem 1rem;
  background: var(--bg-subtle);
  border-left: 4px solid #3b82f6;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  font-size: 0.9rem;
  color: var(--text-main);
}

.markdown-body .doc-ul {
  padding-left: 1.25rem;
  margin-bottom: 0.9rem;
}

.markdown-body .doc-li {
  margin-bottom: 0.35rem;
  line-height: 1.6;
}
</style>
