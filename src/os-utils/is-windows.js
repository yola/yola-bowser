import osTypes from '../constants/os-types';

const isWindows = (parser) => {
  const osType = parser.getOSName();
  return osType === osTypes.WINDOWS;
};

export default isWindows;
