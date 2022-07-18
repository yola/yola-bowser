import osTypes from '../constants/os-types';

const isChromeOS = (parser) => {
  const osType = parser.getOSName();
  return osType === osTypes.CHROME_OS;
};

export default isChromeOS;
