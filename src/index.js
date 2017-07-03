import './styles/common.styl'

import zola from 'zola'
import routes from './routes'
// import getBasePath from 'utils/getBasePath'

// __webpack_public_path__ = getBasePath()
// alert(__webpack_public_path__)
zola
  .set('env', process.env.NODE_ENV)
  .render(routes, '#root')