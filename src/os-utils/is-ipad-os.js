import isMacOS from './is-macos';

// Workaround to detect iPad OS which identifies itself as a Desktop Mac by default
const isIpadOS = (parser) => isMacOS(parser) && window.navigator.maxTouchPoints > 1;

export default isIpadOS;
