import osTypes from '../constants/os-types'

const isIOS = (parser) => {
  const osType = parser.getOSName();
  return osType === osTypes.IOS;
}

export default isIOS;
