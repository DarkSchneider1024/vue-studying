// src/data/tracks.js
// Program Studying 四大主領域 (Tracks) 集中管理與調度
import { htmlCurriculum } from './curriculumHtml.js';
import { cssCurriculum } from './curriculumCss.js';
import { jsCurriculum } from './curriculumJs.js';
import { vueCurriculum } from './curriculumVue.js';

export const TRACKS = [
  {
    id: 'css',
    label: 'CSS',
    title: 'CSS 樣式與排版',
    count: cssCurriculum.length,
    badgeText: `${cssCurriculum.length} 單元`,
    description: '選擇器權重、盒模型、Flexbox/Grid、RWD 與 CSS 變數',
    curriculum: cssCurriculum
  },
  {
    id: 'html',
    label: 'HTML',
    title: 'HTML 結構與語意',
    count: htmlCurriculum.length,
    badgeText: `${htmlCurriculum.length} 單元`,
    description: '標準骨架、DOM 樹、語意化標籤、現代表單與報表表格',
    curriculum: htmlCurriculum
  },
  {
    id: 'javascript',
    label: 'Javascript',
    title: 'JavaScript 邏輯與引擎',
    count: jsCurriculum.length,
    badgeText: `${jsCurriculum.length} 單元`,
    description: 'ES6+ 宣告、解構展開、箭頭函式、陣列方法、Promise/async、ESM',
    curriculum: jsCurriculum
  },
  {
    id: 'vue',
    label: 'Vue',
    title: 'Vue 3 實戰與架構遷移',
    count: vueCurriculum.length,
    badgeText: `${vueCurriculum.length} 單元`,
    description: 'Composition API、狀態驅動、組件化、Pinia、路由與企業架構重構',
    curriculum: vueCurriculum
  }
];

export const allCurriculum = [
  ...vueCurriculum,
  ...htmlCurriculum,
  ...cssCurriculum,
  ...jsCurriculum
];

export function getCurriculumByTrack(trackId) {
  const track = TRACKS.find(t => t.id === trackId);
  return track ? track.curriculum : vueCurriculum;
}

export function findTrackByLessonId(lessonId) {
  if (lessonId.startsWith('html-')) return 'html';
  if (lessonId.startsWith('css-')) return 'css';
  if (lessonId.startsWith('js-')) return 'javascript';
  return 'vue';
}
