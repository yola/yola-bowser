import Bowser from 'bowser/bundled';
import browserUtils from './browser-utils';
import osUtils from './os-utils';
import platformUtils from './platform-utils';

const parser = Bowser.getParser(window.navigator.userAgent || '');

export default {
  // Browser flags
  chrome: browserUtils.isChrome(parser),
  edge: browserUtils.isEdge(parser),
  firefox: browserUtils.isFirefox(parser),
  ie: browserUtils.isIE(parser),
  opera: browserUtils.isOpera(parser),
  safari: browserUtils.isSafari(parser),

  // OS flags
  android: osUtils.isAndroid(parser),
  ios: osUtils.isIOS(parser),
  iPadOS: osUtils.isIpadOS(parser),
  linux: osUtils.isLinux(parser),
  macOS: osUtils.isMacOS(parser) && !osUtils.isIpadOS(parser),
  windows: osUtils.isWindows(parser),

  // Platform flags
  mobile: platformUtils.isMobile(parser),
  tablet: platformUtils.isTablet(parser) || osUtils.isIpadOS(parser),
  desktop: platformUtils.isDesktop(parser) && !osUtils.isIpadOS(parser),
};
