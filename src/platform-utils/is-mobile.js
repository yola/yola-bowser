import platformTypes from '../constants/platform-types';

const isMobile = (parser) => {
  const platformType = parser.getPlatformType();
  return platformType === platformTypes.MOBILE;
};

export default isMobile;
