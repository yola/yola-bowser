import platformTypes from '../constants/platform-types'

const isTablet = (parser) => {
  const platformType = parser.getPlatformType();
  return platformType === platformTypes.TABLET;
}

export default isTablet;
