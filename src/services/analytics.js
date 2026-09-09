// src/services/analytics.js
// Google Analytics 4 (GA4) 自訂事件與 SPA 虛擬換頁追蹤

const GA_MEASUREMENT_ID = 'G-FEF2HXNTM8';

/**
 * 檢查 gtag 是否可用
 */
function isGtagAvailable() {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
}

/**
 * 追蹤 SPA 虛擬換頁 (Page View)
 * @param {string} pageTitle - 頁面標題
 * @param {string} pagePath - 頁面虛擬路徑 (例如: /vue/project-overview-setup)
 */
export function trackPageView(pageTitle, pagePath) {
  if (!isGtagAvailable()) return;

  try {
    const fullPath = pagePath.startsWith('/') ? pagePath : `/${pagePath}`;
    window.gtag('event', 'page_view', {
      page_title: pageTitle,
      page_location: window.location.origin + window.location.pathname + '#' + fullPath,
      page_path: fullPath
    });
  } catch (err) {
    console.debug('[GA] trackPageView error:', err);
  }
}

/**
 * 追蹤單元切換事件
 * @param {string} track - 領域 (vue, html, css, javascript)
 * @param {string} lessonId - 單元 ID
 * @param {string} lessonTitle - 單元名稱
 */
export function trackLessonSelect(track, lessonId, lessonTitle) {
  if (!isGtagAvailable()) return;

  try {
    window.gtag('event', 'select_content', {
      content_type: 'lesson',
      item_id: lessonId,
      track_name: track,
      item_name: lessonTitle
    });
  } catch (err) {
    console.debug('[GA] trackLessonSelect error:', err);
  }
}

/**
 * 追蹤單元完成事件
 * @param {string} track - 領域
 * @param {string} lessonId - 單元 ID
 */
export function trackLessonComplete(track, lessonId) {
  if (!isGtagAvailable()) return;

  try {
    window.gtag('event', 'lesson_complete', {
      track_name: track,
      lesson_id: lessonId
    });
  } catch (err) {
    console.debug('[GA] trackLessonComplete error:', err);
  }
}
