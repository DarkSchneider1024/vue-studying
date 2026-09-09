// src/data/glossary.js
// 專業技術術語字典資料庫：專為前端自學者與系統架構評估設計
export const glossaryCategories = [
  { id: 'all', name: '全部術語條目' },
  { id: 'tools-ecosystem', name: '常用工具庫與樣式生態' },
  { id: 'vue-core', name: 'Vue 3 核心語法與響應式' },
  { id: 'component', name: '組件化設計與通訊' },
  { id: 'router-spa', name: '單頁應用 (SPA) 與路由' },
  { id: 'state-api', name: '狀態管理與網路請求' },
  { id: 'architecture', name: '架構演進與工程化實戰' }
];

export const glossaryTerms = [
  // 0. 常用工具庫與樣式生態
  {
    id: 'jquery',
    category: 'tools-ecosystem',
    en: 'jQuery',
    zh: 'jQuery (傳統 DOM 操作霸主)',
    phonetic: '/ˈdʒeɪkwɪəri/',
    pinyin: '勾-扣-瑞',
    definition: '於 2006 年發布的革命性 JavaScript 工具函式庫，以「$」符號與鏈式調用聞名。透過封裝跨瀏覽器相容性，極大簡化了 HTML DOM 操作、事件監聽與 Ajax 網路通訊。然而因其依賴「命令式手動抓取並修改 DOM」，在現代以「狀態驅動視圖」為核心的 Vue 時代已退居幕後，是舊系統現代化重構時最關鍵的替換標的。',
    analogy: '【手動到每盞燈前撥動開關 vs 智慧家庭中控面板】—— 以前要讓客廳燈亮，得拿梯子去每一盞燈手動開關 (jQuery 手動抓 DOM 節點改文字)；現代智慧家庭只要在面板按一下「回家模式」(Vue 變更狀態資料)，所有燈光自動依狀態點亮。'
  },
  {
    id: 'tailwind-css',
    category: 'tools-ecosystem',
    en: 'Tailwind CSS',
    zh: 'Tailwind CSS (原子化 / 功能優先樣式框架)',
    phonetic: '/ˈteɪlwɪnd siː-ɛs-ɛs/',
    pinyin: '貼-爾-溫德 C-S-S',
    definition: '一種 Utility-First (功能類優先 / 原子化) 的現代 CSS 框架。開發者無需在 .css 檔案中發明冗長的 class 名稱，而是直接在 HTML 標籤上組合諸如 "flex"、"items-center"、"p-4"、"bg-blue-600" 等微型工具類。具備 JIT (即時編譯) 引擎，能根據原始碼實際使用到的類別生成體積極小的生產環境 CSS，並透過 "md:"、"hover:" 前綴原生支援響應式與狀態變化。',
    analogy: '【標準化樂高積木顆粒 vs 每次手工開模做塑膠零件】—— 傳統 CSS 就像每次要做新按鈕都要手工開一個專屬模具命名；Tailwind 則是直接給你紅藍黃綠、不同長寬的標準積木顆粒，在 HTML 上隨拼隨用，既快速又不會產生重複堆疊的 CSS 廢料。'
  },

  // 1. Vue 核心語法與響應式
  {
    id: 'reactivity',
    category: 'vue-core',
    en: 'Reactivity',
    zh: '響應性 / 響應式系統',
    phonetic: '/ˌriːækˈtɪvəti/',
    pinyin: '瑞-愛克-替-維-提',
    definition: '一種程式設計範式，當底層資料狀態 (State) 發生變化時，依賴該資料的視圖 (DOM) 或衍生計算會由框架自動即時同步更新，無需開發者手動編寫命令式 DOM 操作。',
    analogy: '【試算表 Excel 公式自動連動】—— 當你在 A1 格填入 10，B1 格公式是「=A1*2」，只要 A1 變成 20，B1 瞬間自動變成 40，完全不需要你手動去重寫 B1 的內容。'
  },
  {
    id: 'declarative-rendering',
    category: 'vue-core',
    en: 'Declarative Rendering',
    zh: '宣告式渲染',
    phonetic: '/dɪˈklærətɪv ˈrɛndərɪŋ/',
    pinyin: '地-克賴-惹-替夫 潤-德-令',
    definition: '相對於傳統命令式 (Imperative) 操作（如 document.getElementById），宣告式只專注描述「最終畫面應該長成什麼樣」，具體如何操作底層 DOM、如何比對差異，全交由框架引擎處理。',
    analogy: '【餐廳點餐 vs 親自下廚】—— 命令式就像走進廚房一步一步指示：開火、倒油、炒菜；而宣告式就像直接跟服務生點單「我要一份牛肉麵」，廚房會自動為你做好呈上來。'
  },
  {
    id: 'single-file-component',
    category: 'vue-core',
    en: 'Single File Component (SFC)',
    zh: '單文件組件 (.vue 檔)',
    phonetic: '/ˈsɪŋɡl faɪl kəmˈpoʊnənt/',
    pinyin: '辛-狗 伐-偶 肯-剖-能特',
    definition: 'Vue 特有的檔案組織格式（副檔名為 .vue），在同一個檔案內封裝了結構 (<template>)、邏輯 (<script>) 與專屬樣式 (<style scoped>)，實現高內聚的組件模組化開發。',
    analogy: '【獨立封裝的樂高功能積木】—— 每一塊積木自己內部就自帶了骨架、電路開關與外觀顏色，直接插上主機就能運作，彼此互不干擾。'
  },
  {
    id: 'composition-api',
    category: 'vue-core',
    en: 'Composition API',
    zh: '組合式 API',
    phonetic: '/ˌkɒmpəˈzɪʃn eɪ-piː-aɪ/',
    pinyin: '康-珀-力-選 A-P-I',
    definition: 'Vue 3 推出的全新程式碼組織方式，透過 setup() 函式與 ref、reactive 等原語，讓開發者能夠依據「業務功能邏輯」將相關的代碼聚合在一起，取代舊版 Options API 依資料/方法切割導致的上下滾動跳躍痛點。',
    analogy: '【按專案分類的檔案夾 vs 按文具種類放的大抽屜】—— 舊版像是所有筆放在一抽屜、所有紙放另一抽屜；組合式 API 則是把同一個客戶的所有文件、合約、發票打包在同一個專案袋，一拿就是完整一套。'
  },
  {
    id: 'ref-and-reactive',
    category: 'vue-core',
    en: 'Ref & Reactive',
    zh: '響應式參考與代理物件',
    phonetic: '/rɛf ænd riˈæktɪv/',
    pinyin: '瑞夫 安德 瑞-愛克-替夫',
    definition: 'Vue 3 宣告響應式狀態的兩大核心手段。ref() 接受任何型別並包裝成具備 .value 的物件，在模板中自動解包；reactive() 透過 ES6 Proxy 代理將整個純 JavaScript 物件轉換為深層響應式。',
    analogy: '【帶有感測晶片的容器】—— ref 就像把普通數值放進一個智慧感測保溫杯，只要杯子裡的溫度改變，底座的感測器立刻通報大樓中控台。'
  },
  {
    id: 'computed-property',
    category: 'vue-core',
    en: 'Computed Property',
    zh: '計算屬性',
    phonetic: '/kəmˈpjuːtɪd ˈprɒpəti/',
    pinyin: '肯-偏-替德 普絡-珀-提',
    definition: '基於其所依賴的響應式狀態進行計算的屬性。具備快取機制 (Cache)，只有當其依賴的來源狀態改變時才會重新執行運算，多次讀取時直接返回快取結果，效能顯著優於普通方法呼叫。',
    analogy: '【收銀機的購物車總計欄】—— 只要購物車裡的商品種類和數量沒變，收銀螢幕上的總金額就一直保持原樣顯示，只有你新增或拿掉一件商品時，螢幕才會瞬間重新加總。'
  },
  {
    id: 'watcher',
    category: 'vue-core',
    en: 'Watcher (watch / watchEffect)',
    zh: '偵聽器 / 副作用監聽',
    phonetic: '/ˈwɒtʃər/',
    pinyin: '握-特-扯',
    definition: '當特定響應式狀態改變時，主動執行自訂回呼函式以產生「副作用 (Side Effects)」的機制，常見於非同步網路請求、寫入 LocalStorage、修改 DOM 或發送日誌。',
    analogy: '【大樓火災煙霧偵測器】—— 平常安靜無聲，只要監測到煙霧濃度數值超標，立即自動觸發一連串動作：警報響起、噴灑灑水系統、自動撥號報警。'
  },

  // 2. 組件化設計與通訊
  {
    id: 'props',
    category: 'component',
    en: 'Props (Properties)',
    zh: '父傳子屬性',
    phonetic: '/prɒps/',
    pinyin: '普絡-普斯',
    definition: '父組件向子組件由外向內單向傳遞資料的自訂屬性。子組件僅具備唯讀權限，嚴格禁止直接竄改 Prop 數值，以確保單向資料流的可預測性。',
    analogy: '【工廠配發給員工的規格工作單】—— 主管 (父層) 指派規格參數給員工 (子組件)，員工只能依照規格執行任務，不能私自塗改工作單上的標準。'
  },
  {
    id: 'emits',
    category: 'component',
    en: 'Emits (Event Emitter)',
    zh: '子傳父事件發射',
    phonetic: '/iˈmɪts/',
    pinyin: '依-密-次',
    definition: '子組件向父組件發出通知的自訂事件通道。當子組件內部發生特定互動（如按鈕點擊、表單送出）時，透過 emit(eventName, payload) 通知父組件並傳遞參數。',
    analogy: '【對講機回報頻道】—— 前線人員 (子組件) 發現異常狀況時，按下通話鈕向總指揮中心 (父層) 回報：「報告長官，閥門已開啟！」，由指揮中心決定下一步處置。'
  },
  {
    id: 'slot',
    category: 'component',
    en: 'Slot',
    zh: '組件插槽',
    phonetic: '/slɒt/',
    pinyin: '斯-絡特',
    definition: 'Vue 提供的內容分發機制，子組件在模板中以 <slot></slot> 作為佔位出口，允許父組件在呼叫時向其注入自訂的 HTML 片段或子組件，極度適合封裝通用外框。',
    analogy: '【相框的留白窗口】—— 相框製造商 (子組件) 負責把木質邊框、壓克力保護板和吊繩做好，中間留空；買相框的人 (父層) 想放風景照、家庭照還是證書都可以自由填入。'
  },
  {
    id: 'composable',
    category: 'component',
    en: 'Composable',
    zh: '組合式函式 / 邏輯封裝',
    phonetic: '/kəmˈpoʊzəbl/',
    pinyin: '肯-剖-惹-伯',
    definition: '在 Vue 3 中封裝具有響應式狀態的獨立功能函式（命名慣例為 useXxx）。相較於舊式 Mixins，具有明確的輸入輸出、無命名衝突且便於單元測試。',
    analogy: '【瑞士軍刀的外接擴充模組】—— 想要有溫度計功能就插上 useTemperature，想要有藍牙連線就插上 useBluetooth，隨插即用且完全不會搞混。'
  },
  {
    id: 'virtual-dom',
    category: 'component',
    en: 'Virtual DOM (VDOM)',
    zh: '虛擬 DOM',
    phonetic: '/ˈvɜːrtʃuəl dɒm/',
    pinyin: '威-秋-偶 滴-歐-姆',
    definition: '在記憶體中以輕量純 JavaScript 物件結構模擬真實 HTML DOM 樹的技術。每次狀態變更時，先在記憶體中比對前後差異 (Diffing 演算法)，最後只將真正改變的部分打補丁 (Patch) 到真實 DOM 上。',
    analogy: '【室內裝潢設計藍圖】—— 如果你想挪動客廳沙發的位置，不需要直接把真的百公斤沙發搬來搬去試位置；先在平板藍圖上移好位置確定最佳方案，最後工人只需進去搬動一次到位。'
  },

  // 3. 單頁應用 (SPA) 與路由
  {
    id: 'spa',
    category: 'router-spa',
    en: 'Single Page Application (SPA)',
    zh: '單頁應用程式',
    phonetic: '/ˈsɪŋɡl peɪdʒ ˌæplɪˈkeɪʃn/',
    pinyin: '辛-狗 胚-居 愛-普-哩-肯-選',
    definition: '一種現代 Web 架構，整座網站僅載入單一 index.html 頁面，後續所有畫面切換皆由 JavaScript 攔截路由並動態局部抽換內容，瀏覽器不觸發整頁重新整理，提供如原生桌面 App 般絲滑的操作體驗。',
    analogy: '【現代投影片簡報播放器 vs 傳統每看一頁就換一本新書】—— 整個演講都在同一個螢幕前進行，切換章節時只是簡報頁面平滑淡入淡出，不需要把整個演講廳拆掉重蓋。'
  },
  {
    id: 'iframe-architecture',
    category: 'router-spa',
    en: 'Iframe Architecture',
    zh: 'Iframe 巢狀導航架構 (傳統舊架構)',
    phonetic: '/ˈaɪfreɪm ˈɑːrkɪtɛktʃər/',
    pinyin: '愛-服-瑞姆 阿-客-替克-扯',
    definition: '傳統後台常見做法，外框 index.html 內嵌 <iframe> 標籤加載各子頁面。其致命缺點包括：阻斷 RWD 媒體查詢響應、子頁無法感知外部視窗尺寸、跨頁通信被迫使用 window.parent 形成高耦合技術債。',
    analogy: '【在潛水艇內部架設電視機看外景】—— 電視機 (iframe) 裡面的畫面完全不知道潛水艇外部的真實天氣與水壓，彼此隔著一道厚牆，傳遞信號極度困難且笨重。'
  },
  {
    id: 'hash-history',
    category: 'router-spa',
    en: 'Hash History (createWebHashHistory)',
    zh: '雜湊路由模式',
    phonetic: '/hæʃ ˈhɪstri/',
    pinyin: '海-許 希-斯-翠',
    definition: '利用 URL 中 # 符號（井字號錨點）實現前端路由的方式。# 後方的路徑改變不會被瀏覽器發送至後端 Web 伺服器，因此在沒有設定 SPA Rewrite 規則的舊式伺服器環境中，頁面刷新絕對不會拋出 404 錯誤。',
    analogy: '【百科全書的書籤夾頁】—— 你在同一本書第 50 頁夾了「#設備」書籤，只是給讀者自己眼睛看跳到哪一章，不需要跑去圖書館櫃檯重新登記換借一本新書。'
  },
  {
    id: 'navigation-guard',
    category: 'router-spa',
    en: 'Navigation Guard (beforeEach)',
    zh: '路由導航守衛',
    phonetic: '/ˌnævɪˈɡeɪʃn ɡɑːrd/',
    pinyin: '奈-維-給-選 尬-爾-德',
    definition: 'Vue Router 提供的全域/路由級攔截鉤子。在每次路由跳轉發生前進行前置檢查，若未登入或無權限，可立即攔截並轉址至登入頁面，同時記錄原始目標路由以便登入後精準還原。',
    analogy: '【高鐵月台剪票閘門】—— 乘客想要走到月台 (目標頁面)，閘門 (beforeEach) 會先掃描車票憑證 (Token)，有票放行；沒票自動引導至補票售票處 (登入頁)。'
  },

  // 4. 狀態管理與網路請求
  {
    id: 'pinia',
    category: 'state-api',
    en: 'Pinia (State Management)',
    zh: 'Pinia 全局狀態管理庫',
    phonetic: '/piˈnjɑː/',
    pinyin: '皮-尼-亞',
    definition: 'Vue 官方推薦的現代狀態管理庫，取代舊版 Vuex。專門存放跨組件、跨頁面需要共享的全局資料（如使用者 Token、個人權限、即時設備清單），支援 TypeScript 自動推導且結構極度簡潔。',
    analogy: '【社區管理委員會的中央公告欄】—— 誰當選主委、目前停水停電通知都在中控公布欄更新，各棟住戶打開門看一眼就知道最新狀況，不用一家一家敲門傳話。'
  },
  {
    id: 'interceptor',
    category: 'state-api',
    en: 'Axios Interceptor',
    zh: 'HTTP 請求/回應攔截器',
    phonetic: '/ˌɪntərˈsɛptər/',
    pinyin: '硬-特-誰-普-特',
    definition: '在 HTTP 請求送出前 (Request) 或收到後端回應後 (Response) 預先進行全域處理的管道。常見用途包括：自動在請求頭補上 Authorization Token、統一攔截 401 憑證過期並強制登出、統一過濾錯誤格式。',
    analogy: '【國際機場的海關與安檢通道】—— 出境時 (Request) 安檢員檢查所有人護照並蓋核准章；入境時 (Response) 檢查行李，發現違禁品立即沒收遣返。'
  },
  {
    id: 'mock-mode',
    category: 'state-api',
    en: 'Mock Mode',
    zh: '模擬假資料開發模式',
    phonetic: '/mɒk moʊd/',
    pinyin: '莫-克 某-德',
    definition: '在後端 API 尚未開發完成或現場硬體設備無法連線時，前端在本地端透過模擬資料結構進行介面開發與互動驗證的工程化機制。藉由環境變數開關切換，上線時無痛接入真實 API。',
    analogy: '【飛行員的地面座艙模擬器】—— 不必冒險把真的飛機開上天，在地面模擬器中就能把起飛、降落、遭遇亂流的儀表板操作訓練得滾瓜爛熟。'
  },
  {
    id: 'websocket-stomp',
    category: 'state-api',
    en: 'WebSocket & STOMP',
    zh: '全雙工長連線與訊息發布訂閱協定',
    phonetic: '/ˈwɛbˌsɒkɪt stɒmp/',
    pinyin: '網-巴-克特 斯-燙-普',
    definition: 'WebSocket 建立客戶端與伺服器之間的 TCP 長連線雙向管道；STOMP 則是運行於其上的文字導向訊息協定，提供如 /topic/xxx 的標準「發布/訂閱 (Pub/Sub)」機制，實現感測器數值的秒級即時推播。',
    analogy: '【警用無線電廣播頻道】—— 基地台與警車保持全天候連線通話，指揮中心一發布特定頻道的廣播，所有收聽該頻道的員警耳機瞬間同時收到最新指令。'
  },

  // 5. 架構演進與工程化實戰
  {
    id: 'strangler-pattern',
    category: 'architecture',
    en: 'Strangler Pattern',
    zh: '絞殺者架構遷移模式',
    phonetic: '/ˈstræŋɡlər ˈpætərn/',
    pinyin: '斯-寸-格-勒 拍-騰',
    definition: '經典的系統現代化改造架構模式。不推翻重寫既有營運中的舊系統，而是建立新系統與舊系統「並存」運作，透過抽出共用 API、逐步將頁面由舊轉新，最終如同絞殺藤纏繞古樹般無痛替換完成。',
    analogy: '【行駛中的火車在軌道上逐節更換現代化車廂】—— 火車保持穩定前進不耽誤旅客行程，工程團隊趁停靠站時一節一節更換成高鐵車廂，不知不覺中整列車換新完畢。'
  },
  {
    id: 'design-tokens',
    category: 'architecture',
    en: 'Design Tokens (CSS Variables)',
    zh: '設計代碼 / 設計變數體系',
    phonetic: '/dɪˈzaɪn ˈtoʊkənz/',
    pinyin: '地-賽 偷-肯-斯',
    definition: '將介面設計規範中的原子化屬性（顏色、字級、圓角、間距）抽象為標準變數（如 --primary, --surface-bg）。系統只需切換最頂層的變數值，全站所有元件即可自動切換多品牌或深淺色主題。',
    analogy: '【連鎖便利商店的企業識別手冊 (CIS)】—— 定義好標準色號代碼，全台幾千家分店的招牌、制服、宣傳單只要套用該代碼，改色時只需總部改一份參數。'
  },
  {
    id: 'mobile-first',
    category: 'architecture',
    en: 'Mobile-First Design',
    zh: '行動端優先設計',
    phonetic: '/ˈmoʊbl fɜːrst dɪˈzaɪn/',
    pinyin: '某-波 佛-斯特 地-賽',
    definition: '一種由小螢幕向大螢幕漸進增強的介面設計思維。優先考量行動裝置上的拇指觸控熱區 (最小 44x44px)、防止 iOS 自動放大的輸入框字級 (>=16px)、以及瀏海/底線的安全區 (safe-area-inset)。',
    analogy: '【先設計瑞士刀隨身工具，再擴充為整套維修工具箱】—— 確保在最極端受限的手機掌中環境依然順手可用，放到大桌面上只會更游刃有餘。'
  },
  {
    id: 'pwa-service-worker',
    category: 'architecture',
    en: 'PWA (Progressive Web App)',
    zh: '漸進式網頁應用',
    phonetic: '/proʊˈɡrɛsɪv wɛb æp/',
    pinyin: '普絡-貴-西夫 網-愛普',
    definition: '利用現代瀏覽器技術讓 Web 網頁具備類似原生 App 體驗的一系列標準。包含可新增至桌面圖示 (Manifest) 與離線資源快取 (Service Worker)，但在瀏覽器資安限制下，必須在 HTTPS 安全上下文環境方能完全啟用。',
    analogy: '【自備離線急救包與專屬通行證的網頁】—— 只要拜訪過一次，急救物資就放在背包 (快取)，就算走到沒有手機信號的地下室，依然能拿出地圖離線查看。'
  }
];
