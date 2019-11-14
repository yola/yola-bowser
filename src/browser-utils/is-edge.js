import browserTypes from '../constants/browser-types'

const isEdge = (parser) => {
  const browserType = parser.getBrowserName();
  return browserType === browserTypes.EDGE;
}

export default isEdge;
