import browserTypes from '../constants/browser-types';

const isFirefox = (parser) => {
  const browserType = parser.getBrowserName();
  return browserType === browserTypes.FIREFOX;
};

export default isFirefox;
