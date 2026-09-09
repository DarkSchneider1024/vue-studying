<script setup>
import { ref, watch, onMounted, computed, nextTick } from 'vue';
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
  ChevronUp,
  Layout,
  Code2,
  Eye,
  Columns,
  Maximize2,
  ZoomIn,
  ZoomOut
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
const textareaRef = ref(null);
const consoleLogs = ref([]);
const runtimeError = ref(null);
const isCopied = ref(false);
const isSolutionApplied = ref(false);
const isAutoRun = ref(true);
const showConsole = ref(false);

// 行動端模式切換 ('split' | 'editor' | 'output')
const viewMode = ref('split');

// 代碼字體大小調節 (12px ~ 17px)
const codeFontSize = ref(13);

const zoomIn = () => {
  if (codeFontSize.value < 18) codeFontSize.value += 1;
};

const zoomOut = () => {
  if (codeFontSize.value > 11) codeFontSize.value -= 1;
};

// 行號計算
const lineCount = computed(() => {
  return (userCode.value || '').split('\n').length;
});

// 手機快捷符號鍵定義 (借鑒 Swift Playgrounds / CodePen Mobile 設計)
const quickSymbols = [
  { label: 'Tab', value: '  ' },
  { label: '<', value: '<' },
  { label: '>', value: '>' },
  { label: '/', value: '/' },
  { label: '=', value: '=' },
  { label: '""', value: '""', offset: 1 },
  { label: "''", value: "''", offset: 1 },
  { label: '{{ }}', value: '{{  }}', offset: 3 },
  { label: '{}', value: '{}', offset: 1 },
  { label: '()', value: '()', offset: 1 },
  { label: ':', value: ':' },
  { label: ';', value: ';' },
  { label: '@', value: '@' },
  { label: 'v-', value: 'v-' },
  { label: '$', value: '$' },
  { label: 'ref()', value: "ref('')", offset: 5 }
];

// 在游標處插入快捷符號 (不丟失鍵盤焦點)
const insertSymbol = (sym, event) => {
  if (event) {
    event.preventDefault();
  }
  const textarea = textareaRef.value;
  if (!textarea) return;

  const start = textarea.selectionStart ?? userCode.value.length;
  const end = textarea.selectionEnd ?? userCode.value.length;
  const current = userCode.value;

  // 插入文字
  userCode.value = current.substring(0, start) + sym.value + current.substring(end);

  const newPos = sym.offset ? start + sym.offset : start + sym.value.length;

  nextTick(() => {
    textarea.focus();
    textarea.setSelectionRange(newPos, newPos);
    handleCodeChange();
  });
};

// 執行程式碼並注入到沙盒 iframe
const runCode = () => {
  runtimeError.value = null;
  consoleLogs.value = [];

  if (!iframeRef.value) return;

  const rawCode = userCode.value || '';

  const htmlContent = `
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Sandbox</title>
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
    * { box-sizing: border-box; }
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
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 10px 0;
    }
    th, td {
      border: 1px solid #cbd5e1;
      padding: 8px 12px;
      text-align: left;
    }
    th {
      background: #f8fafc;
    }
  </style>
  <script>
    window.onerror = function(msg, url, line) {
      window.parent.postMessage({ type: 'SANDBOX_ERROR', message: msg }, '*');
      return false;
    };
    const originalLog = console.log;
    console.log = function(...args) {
      originalLog.apply(console, args);
      const str = args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ');
      window.parent.postMessage({ type: 'SANDBOX_LOG', content: str }, '*');
    };
  <\/script>
</head>
<body>
  ${rawCode}
</body>
</html>
  `;

  iframeRef.value.srcdoc = htmlContent;
};

// 監聽單元切換，自動載入暫存或起始代碼
watch(() => props.lessonId, (newId) => {
  if (!newId) return;
  const saved = localStorage.getItem(`vue-study-code-${newId}`);
  if (saved) {
    userCode.value = saved;
  } else {
    userCode.value = props.starterCode;
  }
  isSolutionApplied.value = false;
  runtimeError.value = null;
  consoleLogs.value = [];
  nextTick(() => {
    runCode();
  });
}, { immediate: true });

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

    userCode.value = userCode.value.substring(0, start) + '  ' + userCode.value.substring(end);

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
  <div class="interactive-panel" :class="`view-${viewMode}`">
    <!-- 行動端與桌面多功能視圖切換列 (CodePen / StackBlitz 風格) -->
    <div class="playground-mode-bar">
      <div class="mode-switcher-pills">
        <button 
          class="mode-pill-btn" 
          :class="{ 'is-active': viewMode === 'editor' }"
          @click="viewMode = 'editor'"
          title="全螢幕專注編輯代碼"
        >
          <Code2 :size="13" />
          <span>程式碼</span>
        </button>

        <button 
          class="mode-pill-btn" 
          :class="{ 'is-active': viewMode === 'output' }"
          @click="viewMode = 'output'"
          title="全螢幕預覽執行成果"
        >
          <Eye :size="13" />
          <span>預覽畫面</span>
        </button>

        <button 
          class="mode-pill-btn desktop-only" 
          :class="{ 'is-active': viewMode === 'split' }"
          @click="viewMode = 'split'"
          title="上下並排對照"
        >
          <Columns :size="13" />
          <span>並排檢視</span>
        </button>
      </div>

      <!-- 字體縮放與輔助工具 -->
      <div class="mode-bar-tools">
        <button class="icon-tool-btn" @click="zoomOut" title="縮小代碼字體">
          <ZoomOut :size="13" />
        </button>
        <span class="font-size-text">{{ codeFontSize }}px</span>
        <button class="icon-tool-btn" @click="zoomIn" title="放大代碼字體">
          <ZoomIn :size="13" />
        </button>
      </div>
    </div>

    <!-- 預覽區域 (Live Output) -->
    <div 
      class="output-container"
      v-show="viewMode === 'output' || viewMode === 'split'"
    >
      <div class="panel-header output-header">
        <div class="panel-title-wrap">
          <span class="pulse-dot"></span>
          <h3 class="panel-title">即時輸出 (Live output)</h3>
        </div>
        
        <div class="header-actions">
          <button 
            class="run-play-btn" 
            @click="runCode"
            title="手動重新執行程式碼"
          >
            <Play :size="13" fill="currentColor" />
            <span>執行 (Play)</span>
          </button>
        </div>
      </div>

      <!-- 錯誤提示條 -->
      <div v-if="runtimeError" class="error-banner">
        <AlertCircle :size="15" class="err-icon" />
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
    <div 
      class="editor-container"
      v-show="viewMode === 'editor' || viewMode === 'split'"
    >
      <div class="panel-header editor-header">
        <div class="panel-title-wrap">
          <h3 class="panel-title">程式碼編輯區</h3>
          <span class="editor-hint-badge">Vue 3 + HTML</span>
        </div>

        <div class="editor-tools">
          <label class="auto-run-label" title="輸入時自動即時重新整理輸出">
            <input type="checkbox" v-model="isAutoRun" />
            <span>即時預覽</span>
          </label>

          <button class="tool-btn" @click="copyCode" :title="isCopied ? '已複製！' : '複製代碼'">
            <Check v-if="isCopied" :size="13" class="copy-success" />
            <Copy v-else :size="13" />
          </button>

          <button class="tool-btn" @click="resetCode" title="重置為初始題目">
            <RotateCcw :size="13" />
            <span>Reset</span>
          </button>

          <button 
            class="tool-btn solution-btn" 
            @click="applySolution" 
            title="查看並直接套用參考解答"
          >
            <Sparkles :size="13" />
            <span>套用解答</span>
          </button>
        </div>
      </div>

      <!-- 手機專屬快捷代碼符號列 (Mobile Quick-Symbol Bar) -->
      <div class="mobile-symbol-bar">
        <div class="symbol-scroll-track">
          <button 
            v-for="(sym, idx) in quickSymbols" 
            :key="idx"
            class="symbol-chip"
            @mousedown.prevent="insertSymbol(sym, $event)"
            @touchstart.prevent="insertSymbol(sym, $event)"
          >
            {{ sym.label }}
          </button>
        </div>
      </div>

      <!-- 代碼輸入區（含行號與自訂字體大小） -->
      <div class="editor-wrapper" :style="{ fontSize: `${codeFontSize}px` }">
        <div class="editor-gutter">
          <span v-for="n in lineCount" :key="n" class="gutter-num">{{ n }}</span>
        </div>

        <textarea
          ref="textareaRef"
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
        <span>已載入參考解答，您可以點擊 <strong>Reset</strong> 重新自己挑戰！</span>
      </div>
    </div>

    <!-- 浮動預覽按鈕 (當在全螢幕編輯模式時，方便一鍵切到輸出) -->
    <button 
      v-if="viewMode === 'editor'" 
      class="floating-view-toggle"
      @click="viewMode = 'output'"
      title="查看執行成果"
    >
      <Eye :size="15" />
      <span>查看成果 &rarr;</span>
    </button>
    <button 
      v-else-if="viewMode === 'output'" 
      class="floating-view-toggle"
      @click="viewMode = 'editor'"
      title="返回修改代碼"
    >
      <Code2 :size="15" />
      <span>繼續改代碼 &rarr;</span>
    </button>
  </div>
</template>

<style scoped>
.interactive-panel {
  display: flex;
  flex-direction: column;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md, 8px);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  position: relative;
  height: 100%;
}

/* 頂部模式切換列 (CodePen / StackBlitz 風格) */
.playground-mode-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 10px;
  background: #0b0f19;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  flex-shrink: 0;
}

.mode-switcher-pills {
  display: flex;
  align-items: center;
  gap: 4px;
}

.mode-pill-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #94a3b8;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.15s ease;
}

.mode-pill-btn:hover {
  color: #f1f5f9;
  background: rgba(255, 255, 255, 0.05);
}

.mode-pill-btn.is-active {
  color: #ffffff;
  background: #1e293b;
  border-color: #334155;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.mode-bar-tools {
  display: flex;
  align-items: center;
  gap: 4px;
}

.icon-tool-btn {
  padding: 3px 6px;
  border-radius: 3px;
  color: #94a3b8;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-tool-btn:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.12);
}

.font-size-text {
  font-size: 0.7rem;
  color: #64748b;
  min-width: 28px;
  text-align: center;
  font-variant-numeric: tabular-nums;
}

/* 標題列共通 */
.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  border-bottom: 1px solid var(--border-color);
  background: var(--bg-subtle);
  flex-shrink: 0;
}

.panel-title-wrap {
  display: flex;
  align-items: center;
  gap: 6px;
}

.panel-title {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text-main);
}

.pulse-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #22c55e;
  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.25);
}

/* Play 按鈕 */
.run-play-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  font-size: 0.75rem;
  font-weight: 600;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  color: var(--text-main);
  cursor: pointer;
  transition: all 0.15s ease;
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
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

:root[data-theme='dark'] .output-container {
  background: #0b0f19;
}

.view-split .output-container {
  max-height: 48%;
  border-bottom: 2px dashed var(--border-color);
}

.iframe-wrapper {
  flex: 1;
  display: flex;
  overflow: hidden;
  background: #ffffff;
  min-height: 180px;
}

:root[data-theme='dark'] .iframe-wrapper {
  background: #0b0f19;
}

.sandbox-iframe {
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
}

.error-banner {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  background: #fef2f2;
  border-bottom: 1px solid #fecaca;
  color: #dc2626;
  font-size: 0.75rem;
}

.console-drawer {
  border-top: 1px solid var(--border-color);
  background: var(--bg-subtle);
  font-size: 0.72rem;
  flex-shrink: 0;
}

.console-drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 10px;
  cursor: pointer;
  color: var(--text-muted);
}

.console-body {
  max-height: 100px;
  overflow-y: auto;
  padding: 4px 10px;
  background: var(--bg-code);
  color: #a6e3a1;
  font-family: monospace;
}

/* Editable Code 區域 */
.editor-container {
  display: flex;
  flex-direction: column;
  background: var(--bg-code);
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

.editor-header {
  background: var(--bg-editor-gutter);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.editor-header .panel-title {
  color: var(--text-code);
}

.editor-hint-badge {
  font-size: 0.65rem;
  padding: 1px 5px;
  border-radius: 4px;
  background: rgba(66, 184, 131, 0.15);
  color: #42b883;
}

.editor-tools {
  display: flex;
  align-items: center;
  gap: 6px;
}

.auto-run-label {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.72rem;
  color: var(--text-muted);
  cursor: pointer;
}

.tool-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--text-code);
  font-size: 0.72rem;
  cursor: pointer;
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

.copy-success {
  color: #4ade80;
}

/* 手機快捷符號列 (Mobile Symbol Bar) */
.mobile-symbol-bar {
  background: #111827;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 4px 6px;
  overflow-x: auto;
  scrollbar-width: none;
  flex-shrink: 0;
}

.mobile-symbol-bar::-webkit-scrollbar {
  display: none;
}

.symbol-scroll-track {
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: max-content;
}

.symbol-chip {
  padding: 3px 8px;
  border-radius: 4px;
  background: #1f2937;
  border: 1px solid #374151;
  color: #38bdf8;
  font-size: 0.75rem;
  font-family: monospace;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  transition: all 0.15s ease;
}

.symbol-chip:active {
  background: #0284c7;
  color: #ffffff;
  transform: scale(0.95);
}

/* 編輯輸入與行號 */
.editor-wrapper {
  display: flex;
  flex: 1;
  background: var(--bg-code);
  position: relative;
  overflow-y: auto;
}

.editor-gutter {
  width: 36px;
  background: var(--bg-editor-gutter);
  padding: 10px 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  user-select: none;
  border-right: 1px solid rgba(255, 255, 255, 0.06);
  flex-shrink: 0;
}

.gutter-num {
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.25);
  font-family: monospace;
}

.code-textarea {
  flex: 1;
  padding: 10px 12px;
  background: transparent;
  color: var(--text-code);
  border: none;
  outline: none;
  resize: none;
  line-height: 1.6;
  white-space: pre;
  tab-size: 2;
  font-family: inherit;
}

.solution-status-bar {
  padding: 4px 10px;
  background: rgba(234, 179, 8, 0.15);
  border-top: 1px solid rgba(234, 179, 8, 0.3);
  color: #fef08a;
  font-size: 0.72rem;
  flex-shrink: 0;
}

/* 浮動切換按鈕 (在手機上極其便利) */
.floating-view-toggle {
  position: absolute;
  bottom: 14px;
  right: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 9999px;
  background: var(--primary);
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  z-index: 20;
  transition: all 0.2s ease;
}

.floating-view-toggle:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
}

@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
}
</style>
