import browserTypes from '../constants/browser-types'

const isSafari = (parser) => {
  const browserType = parser.getBrowserName();
  return browserType === browserTypes.SAFARI;
}

export default isSafari;
