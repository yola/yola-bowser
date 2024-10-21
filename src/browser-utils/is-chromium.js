import browserTypes from '../constants/browser-types';

const isChromium = (parser) => {
  const browserType = parser.getBrowserName();
  return browserType === browserTypes.CHROMIUM;
};

export default isChromium;
