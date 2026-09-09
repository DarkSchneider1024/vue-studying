// src/services/seo.js
// 動態 SEO 標籤管理 (Title, Description, Open Graph, Canonical)

const SITE_NAME = '網頁製作教學網站';
const BASE_URL = 'https://darkschneider1024.github.io/vue-studying/';

function setMetaTag(attrName, attrValue, content) {
  let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

/**
 * 動態更新當前頁面的 SEO 標題、描述與 Open Graph 屬性
 * @param {Object} options
 * @param {string} options.title - 頁面專屬標題
 * @param {string} [options.description] - 頁面描述
 * @param {string} [options.keywords] - 關鍵字
 * @param {string} [options.hashPath] - 虛擬 hash 路徑 (如 #/vue/intro-hello-world)
 */
export function updateSEO({ title, description, keywords, hashPath }) {
  if (typeof document === 'undefined') return;

  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} - 全方位實戰自學指南`;
  const desc = description || '網頁製作教學網站：涵蓋 HTML5、CSS3、JavaScript (ES6+)、Vue 3 與現代化全端架構，MDN 風格即打即測！';
  const fullUrl = hashPath ? `${BASE_URL}${hashPath}` : BASE_URL;

  // 1. 更新頁籤標題
  document.title = fullTitle;

  // 2. 更新 Standard Meta
  setMetaTag('name', 'description', desc);
  if (keywords) {
    setMetaTag('name', 'keywords', keywords);
  }

  // 3. 更新 Open Graph (Facebook / LINE / Discord 預覽)
  setMetaTag('property', 'og:title', fullTitle);
  setMetaTag('property', 'og:description', desc);
  setMetaTag('property', 'og:url', fullUrl);
  setMetaTag('property', 'og:site_name', SITE_NAME);

  // 4. 更新 Twitter Card
  setMetaTag('name', 'twitter:title', fullTitle);
  setMetaTag('name', 'twitter:description', desc);

  // 5. 更新 Canonical 標籤
  setCanonical(fullUrl);
}
