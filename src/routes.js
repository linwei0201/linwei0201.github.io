/**
 *  === routes ===
 *
 *  created at: <?= createdAt ?>
 */
import zola from 'zola'

export default zola.router({
  history: 'browserHistory',
  routes: [
    // ==== router start ==== //
    { path: '/', component: System.import('pages/Home') },
    { path: '/blog/:path', component: System.import('pages/Article') },
    { path: '*', component: System.import('pages/404') },
    // ==== router end   ==== //
  ]
})