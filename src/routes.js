/**
 *  === routes ===
 *
 *  created at: <?= createdAt ?>
 */
import zola from 'zola'

export default zola.router({
  history: 'hashHistory',
  routes: [
    // ==== router start ==== //
    { path: '/', component: System.import('pages/Home') },
    { path: '/blogs', component: System.import('pages/List') },
    { path: '/blog/:path', component: System.import('pages/Article') },
    { path: '*', component: System.import('pages/404') },
    // ==== router end   ==== //
  ]
})