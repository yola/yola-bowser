import osTypes from '../constants/os-types';

const isAndroid = (parser) => {
  const osType = parser.getOSName();
  return osType === osTypes.ANDROID;
};

export default isAndroid;
