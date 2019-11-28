import browserTypes from '../constants/browser-types'

const isIE = (parser) => {
  const browserType = parser.getBrowserName();
  return browserType === browserTypes.IE;
}

export default isIE;
