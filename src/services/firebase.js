// src/services/firebase.js
// Firebase Realtime Database 即時連線監聽與瀏覽統計服務
import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported as isAnalyticsSupported } from 'firebase/analytics';
import { 
  getDatabase, 
  ref, 
  onValue, 
  set, 
  push, 
  onDisconnect, 
  serverTimestamp,
  runTransaction
} from 'firebase/database';
import { ref as vueRef } from 'vue';

const firebaseConfig = {
  apiKey: "AIzaSyB5rblhcYItrHeQ-mHCTiI0SBi8P81tbcY",
  authDomain: "dev-studying.firebaseapp.com",
  databaseURL: "https://dev-studying-default-rtdb.firebaseio.com",
  projectId: "dev-studying",
  storageBucket: "dev-studying.firebasestorage.app",
  messagingSenderId: "491737280290",
  appId: "1:491737280290:web:8b584928464dc616273f7b",
  measurementId: "G-FEF2HXNTM8"
};

// 初始化 Firebase 實例
const app = initializeApp(firebaseConfig);

// 判斷並初始化 Analytics
if (typeof window !== 'undefined') {
  isAnalyticsSupported().then((supported) => {
    if (supported) {
      try {
        getAnalytics(app);
      } catch (e) {
        console.warn('Firebase Analytics 初始化略過:', e);
      }
    }
  });
}

// 取得 Realtime Database
const db = getDatabase(app);

// 響應式狀態 (供 UI 全域綁定)
export const onlineCount = vueRef(1);
export const totalViews = vueRef(0);
export const isRealtimeConnected = vueRef(false);

let isInitialized = false;

/**
 * 啟動即時線上人數監聽與瀏覽量累加
 */
export function initVisitorTracker() {
  if (typeof window === 'undefined' || isInitialized) return;
  isInitialized = true;

  try {
    // 1. 累加總瀏覽次數 (Page Views)
    const pageViewsRef = ref(db, 'stats/page_views');
    runTransaction(pageViewsRef, (currentValue) => {
      return (currentValue || 0) + 1;
    }).catch((err) => {
      console.warn('累計瀏覽量更新受限 (可能需檢查 RTDB Rules):', err.message);
    });

    // 2. 監聽統計數據變化 (即時同步總瀏覽量)
    const statsRef = ref(db, 'stats');
    onValue(statsRef, (snapshot) => {
      const data = snapshot.val();
      if (data && typeof data.page_views === 'number') {
        totalViews.value = data.page_views;
      }
    }, (err) => {
      console.warn('監聽 stats 數據失敗:', err.message);
    });

    // 3. 即時在線人數機制 (Presence System)
    const connectedRef = ref(db, '.info/connected');
    const presenceListRef = ref(db, 'presence');

    onValue(connectedRef, (snap) => {
      if (snap.val() === true) {
        isRealtimeConnected.value = true;

        // 在 presence 清單中加入當前連線 Session
        const myPresenceRef = push(presenceListRef);

        // 設定離線 hook：當瀏覽器關閉、刷新或斷線時自動移除此 Session
        onDisconnect(myPresenceRef).remove().catch(() => {});

        // 寫入當前 Session 資訊
        set(myPresenceRef, {
          joinedAt: serverTimestamp(),
          userAgent: navigator.userAgent.slice(0, 100)
        }).catch((err) => {
          console.warn('寫入在線狀態受限 (請確認 Firebase RTDB 權限):', err.message);
        });

        // 監聽網頁卸載事件，加速移除（雙重保險）
        window.addEventListener('beforeunload', () => {
          set(myPresenceRef, null);
        });
      } else {
        isRealtimeConnected.value = false;
      }
    });

    // 4. 即時監聽線上在線清單的變化
    onValue(presenceListRef, (snapshot) => {
      if (snapshot.exists()) {
        const val = snapshot.val();
        const count = Object.keys(val).length;
        onlineCount.value = Math.max(1, count);
      } else {
        onlineCount.value = 1;
      }
    }, (err) => {
      console.warn('監聽 presence 清單失敗:', err.message);
    });

  } catch (err) {
    console.error('Firebase 即時統計服務啟動異常:', err);
  }
}
