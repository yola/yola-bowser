import browserTypes from '../constants/browser-types';

const isOpera = (parser) => {
  const browserType = parser.getBrowserName();
  return browserType === browserTypes.OPERA;
};

export default isOpera;
