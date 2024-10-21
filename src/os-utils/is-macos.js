import osTypes from '../constants/os-types';

const isMacOS = (parser) => {
  const osType = parser.getOSName();
  return osType === osTypes.MACOS;
};

export default isMacOS;
