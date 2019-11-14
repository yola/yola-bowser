import browserTypes from '../constants/browser-types'

const isChrome = (parser) => {
  const browserType = parser.getBrowserName();
  return browserType === browserTypes.CHROME;
}

export default isChrome;
