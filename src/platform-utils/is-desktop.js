import platformTypes from '../constants/platform-types'

const isDesktop = (parser) => {
  const platformType = parser.getPlatformType();
  return platformType === platformTypes.DESKTOP;
}

export default isDesktop;
