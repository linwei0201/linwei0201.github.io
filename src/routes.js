/**
 *  === routes ===
 *
 *  created at: <?= createdAt ?>
 */

export default [
  // ==== router start ==== //
  { path: '/', component: () => System.import('pages/Home') },
  { path: '/blogs', component: () => System.import('pages/List') },
  { path: '/aboutme', component: () => System.import('pages/About') },
  { path: '/blog/:path', component: () => System.import('pages/Article') },
  { path: '*', component: () => System.import('pages/404') },
  // ==== router end   ==== //
]