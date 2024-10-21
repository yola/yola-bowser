import osTypes from '../constants/os-types';

const isLinux = (parser) => {
  const osType = parser.getOSName();
  return osType === osTypes.LINUX;
};

export default isLinux;
