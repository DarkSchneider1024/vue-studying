<script setup>
import { ref, watch, onMounted, computed } from 'vue';
import { 
  Play, 
  RotateCcw, 
  Check, 
  Copy, 
  HelpCircle, 
  Terminal, 
  AlertCircle, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-vue-next';

const props = defineProps({
  starterCode: {
    type: String,
    required: true
  },
  solutionCode: {
    type: String,
    required: true
  },
  lessonId: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['solved']);

const userCode = ref('');
const iframeRef = ref(null);
const consoleLogs = ref([]);
const runtimeError = ref(null);
const isCopied = ref(false);
const showSolutionModal = ref(false);
const isSolutionApplied = ref(false);
const isAutoRun = ref(true);
const showConsole = ref(false);

// 行號計算
const lineCount = computed(() => {
  return (userCode.value || '').split('\n').length;
});

// 執行程式碼並注入到沙盒 iframe
const runCode = () => {
  runtimeError.value = null;
  consoleLogs.value = [];

  if (!iframeRef.value) return;

  const rawCode = userCode.value || '';

  // 構建沙盒 HTML，引入 Vue 3 CDN 與通訊腳本
  const htmlContent = `
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Sandbox</title>
  <!-- 載入 Vue 3 全域版 -->
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans TC", sans-serif;
      margin: 0;
      padding: 16px;
      color: #1e293b;
      background-color: transparent;
      line-height: 1.5;
    }
    * {
      box-sizing: border-box;
    }
    button {
      font-family: inherit;
      padding: 6px 14px;
      border-radius: 6px;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      color: #1e293b;
      font-weight: 500;
      cursor: pointer;
      margin-right: 6px;
      margin-bottom: 6px;
      transition: all 0.2s ease;
    }
    button:hover:not(:disabled) {
      background: #f1f5f9;
      border-color: #94a3b8;
    }
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background: #f1f5f9;
    }
    input[type="text"] {
      font-family: inherit;
      padding: 7px 12px;
      border-radius: 6px;
      border: 1px solid #cbd5e1;
      outline: none;
      font-size: 14px;
    }
    input[type="text"]:focus {
      border-color: #42b883;
      box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.2);
    }
    ul {
      padding-left: 20px;
    }
    li {
      margin-bottom: 4px;
    }
    h1, h2, h3, h4 {
      margin-top: 0;
      margin-bottom: 10px;
      color: #0f172a;
    }
    a {
      color: #42b883;
      text-decoration: underline;
    }
    .text-success {
      color: #42b883;
    }
  </style>
  <script>
    // 攔截 console.log 與錯誤並發送回父層
    window.addEventListener('error', function(event) {
      window.parent.postMessage({
        type: 'SANDBOX_ERROR',
        message: event.message,
        line: event.lineno
      }, '*');
    });

    const originalLog = console.log;
    console.log = function(...args) {
      originalLog.apply(console, args);
      window.parent.postMessage({
        type: 'SANDBOX_LOG',
        content: args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')
      }, '*');
    };
  <\/script>
</head>
<body>
  ${rawCode}
</body>
</html>
  `;

  const iframe = iframeRef.value;
  iframe.srcdoc = htmlContent;
};

// 當章節切換或初始載入時，更新代碼
watch(() => props.lessonId, () => {
  const saved = localStorage.getItem(`vue-study-code-${props.lessonId}`);
  if (saved) {
    userCode.value = saved;
  } else {
    userCode.value = props.starterCode;
  }
  isSolutionApplied.value = false;
  runtimeError.value = null;
  consoleLogs.value = [];
  runCode();
}, { immediate: true });

// 監聽用戶輸入，自動保存並在 autoRun 開啟時執行
let debounceTimer = null;
const handleCodeChange = () => {
  localStorage.setItem(`vue-study-code-${props.lessonId}`, userCode.value);
  if (isAutoRun.value) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      runCode();
    }, 450);
  }
};

// 處理 Tab 鍵插入空格
const handleKeyDown = (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    const textarea = e.target;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    // 插入 2 個空格
    userCode.value = userCode.value.substring(0, start) + '  ' + userCode.value.substring(end);

    // 重新設定光標位置
    setTimeout(() => {
      textarea.selectionStart = textarea.selectionEnd = start + 2;
      handleCodeChange();
    }, 0);
  }
};

// 接收 iframe 發出的訊息
const handleWindowMessage = (event) => {
  if (!event.data) return;
  if (event.data.type === 'SANDBOX_ERROR') {
    runtimeError.value = event.data.message;
  } else if (event.data.type === 'SANDBOX_LOG') {
    consoleLogs.value.push(event.data.content);
  }
};

onMounted(() => {
  window.addEventListener('message', handleWindowMessage);
  runCode();
});

// 重置為起始代碼
const resetCode = () => {
  userCode.value = props.starterCode;
  localStorage.removeItem(`vue-study-code-${props.lessonId}`);
  isSolutionApplied.value = false;
  runCode();
};

// 套用參考解答
const applySolution = () => {
  userCode.value = props.solutionCode;
  isSolutionApplied.value = true;
  runCode();
};

// 複製代碼
const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(userCode.value);
    isCopied.value = true;
    setTimeout(() => {
      isCopied.value = false;
    }, 2000);
  } catch (err) {
    console.error('複製失敗', err);
  }
};
</script>

<template>
  <div class="interactive-panel">
    <!-- 預覽區域 (Live Output) -->
    <div class="output-container">
      <div class="panel-header output-header">
        <div class="panel-title-wrap">
          <span class="pulse-dot"></span>
          <h3 class="panel-title">Live output</h3>
        </div>
        
        <div class="header-actions">
          <button 
            class="run-play-btn" 
            @click="runCode"
            title="手動重新執行程式碼"
          >
            <Play :size="14" fill="currentColor" />
            <span>Play</span>
          </button>
        </div>
      </div>

      <!-- 錯誤提示條 -->
      <div v-if="runtimeError" class="error-banner">
        <AlertCircle :size="16" class="err-icon" />
        <span class="err-text">執行時錯誤：{{ runtimeError }}</span>
      </div>

      <!-- iframe 渲染畫面 -->
      <div class="iframe-wrapper">
        <iframe 
          ref="iframeRef" 
          class="sandbox-iframe" 
          sandbox="allow-scripts"
        ></iframe>
      </div>

      <!-- Console Log 面板折疊列 -->
      <div v-if="consoleLogs.length" class="console-drawer">
        <div class="console-drawer-header" @click="showConsole = !showConsole">
          <div class="console-title">
            <Terminal :size="13" />
            <span>Console 輸出 ({{ consoleLogs.length }})</span>
          </div>
          <ChevronDown v-if="showConsole" :size="14" />
          <ChevronUp v-else :size="14" />
        </div>
        <div v-if="showConsole" class="console-body">
          <div v-for="(log, i) in consoleLogs" :key="i" class="console-line">
            &gt; {{ log }}
          </div>
        </div>
      </div>
    </div>

    <!-- 編輯器區域 (Editable Code) -->
    <div class="editor-container">
      <div class="panel-header editor-header">
        <div class="panel-title-wrap">
          <h3 class="panel-title">Editable code</h3>
          <span class="editor-hint-badge">Vue 3 + HTML</span>
        </div>

        <div class="editor-tools">
          <label class="auto-run-label" title="輸入時自動即時重新整理輸出">
            <input type="checkbox" v-model="isAutoRun" />
            <span>即時預覽</span>
          </label>

          <button class="tool-btn" @click="copyCode" :title="isCopied ? '已複製！' : '複製代碼'">
            <Check v-if="isCopied" :size="14" class="copy-success" />
            <Copy v-else :size="14" />
          </button>

          <button class="tool-btn" @click="resetCode" title="重置為初始題目">
            <RotateCcw :size="14" />
            <span>Reset</span>
          </button>

          <button 
            class="tool-btn solution-btn" 
            @click="applySolution" 
            title="偷看並載入參考答案"
          >
            <Sparkles :size="14" />
            <span>Show solution</span>
          </button>
        </div>
      </div>

      <div class="editor-hint-bar">
        <span>Press <kbd>Esc</kbd> to move focus away from the code area (<kbd>Tab</kbd> inserts a tab character).</span>
      </div>

      <!-- 代碼輸入區（含行號） -->
      <div class="editor-wrapper">
        <div class="editor-gutter">
          <span v-for="n in lineCount" :key="n" class="gutter-num">{{ n }}</span>
        </div>

        <textarea
          class="code-textarea font-mono"
          v-model="userCode"
          @input="handleCodeChange"
          @keydown="handleKeyDown"
          spellcheck="false"
          placeholder="在此輸入 Vue 與 HTML 程式碼..."
        ></textarea>
      </div>

      <!-- 底部解答狀態列 -->
      <div v-if="isSolutionApplied" class="solution-status-bar">
        <span>✨ 目前已載入「參考解答」，您可以點擊 <strong>Reset</strong> 重新自己挑戰！</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.interactive-panel {
  display: flex;
  flex-direction: column;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  margin: 1.5rem 0;
}

/* 標題欄共通 */
.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.65rem 1rem;
  border-bottom: 1px solid var(--border-color);
  background: var(--bg-subtle);
}

.panel-title-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.panel-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-main);
  text-transform: none;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #22c55e;
  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.25);
}

/* Play 按鈕 (右上角風格對齊 MDN) */
.run-play-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 14px;
  font-size: 0.8rem;
  font-weight: 600;
  background: #ffffff;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  color: var(--text-main);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.15s ease;
}

[data-theme='dark'] .run-play-btn {
  background: #1e293b;
}

.run-play-btn:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: #ffffff;
}

/* Live Output 預覽區域 */
.output-container {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-bottom: 2px dashed var(--border-color);
}

[data-theme='dark'] .output-container {
  background: #0f172a;
}

.iframe-wrapper {
  min-height: 220px;
  max-height: 480px;
  display: flex;
  overflow: hidden;
  background: #ffffff;
}

[data-theme='dark'] .iframe-wrapper {
  background: #0b0f19;
}

.sandbox-iframe {
  width: 100%;
  height: 240px;
  border: none;
  background: transparent;
}

.error-banner {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: #fef2f2;
  border-bottom: 1px solid #fecaca;
  color: #dc2626;
  font-size: 0.8rem;
}

.err-icon {
  flex-shrink: 0;
}

.console-drawer {
  border-top: 1px solid var(--border-color);
  background: var(--bg-subtle);
  font-size: 0.75rem;
}

.console-drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px;
  cursor: pointer;
  color: var(--text-muted);
}

.console-title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
}

.console-body {
  max-height: 120px;
  overflow-y: auto;
  padding: 6px 12px;
  background: var(--bg-code);
  color: #a6e3a1;
  font-family: monospace;
}

.console-line {
  padding: 2px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

/* Editable Code 區域 */
.editor-container {
  display: flex;
  flex-direction: column;
  background: var(--bg-code);
}

.editor-header {
  background: var(--bg-editor-gutter);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.editor-header .panel-title {
  color: var(--text-code);
}

.editor-hint-badge {
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 4px;
  background: rgba(66, 184, 131, 0.15);
  color: #42b883;
}

.editor-tools {
  display: flex;
  align-items: center;
  gap: 8px;
}

.auto-run-label {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.75rem;
  color: var(--text-muted);
  cursor: pointer;
}

.tool-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--text-code);
  font-size: 0.75rem;
  transition: all 0.15s ease;
}

.tool-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
}

.solution-btn {
  color: #fde047;
  border-color: rgba(250, 204, 21, 0.3);
  background: rgba(250, 204, 21, 0.1);
}

.solution-btn:hover {
  background: rgba(250, 204, 21, 0.25);
  color: #fef08a;
}

.copy-success {
  color: #4ade80;
}

.editor-hint-bar {
  padding: 4px 12px;
  font-size: 0.72rem;
  color: var(--text-muted);
  background: var(--bg-editor-gutter);
  text-align: right;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.editor-hint-bar kbd {
  background: rgba(255, 255, 255, 0.1);
  padding: 1px 4px;
  border-radius: 3px;
  font-size: 0.7rem;
  color: var(--text-code);
}

/* 編輯輸入與行號 */
.editor-wrapper {
  display: flex;
  min-height: 250px;
  background: var(--bg-code);
  position: relative;
}

.editor-gutter {
  width: 42px;
  background: var(--bg-editor-gutter);
  padding: 12px 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  user-select: none;
  border-right: 1px solid rgba(255, 255, 255, 0.06);
}

.gutter-num {
  font-size: 0.75rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.25);
  font-family: monospace;
}

.code-textarea {
  flex: 1;
  padding: 12px 14px;
  background: transparent;
  color: var(--text-code);
  border: none;
  outline: none;
  resize: vertical;
  min-height: 240px;
  font-size: 0.85rem;
  line-height: 1.6;
  white-space: pre;
  tab-size: 2;
}

.solution-status-bar {
  padding: 6px 14px;
  background: rgba(234, 179, 8, 0.15);
  border-top: 1px solid rgba(234, 179, 8, 0.3);
  color: #fef08a;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 6px;
}
</style>
