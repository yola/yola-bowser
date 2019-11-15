import osTypes from '../src/constants/os-types'
import osUtils from '../src/os-utils';

describe('OS utils', () => {
  const getParserMock = (browserName) => ({
    getOSName: jest.fn(() => browserName)
  });

  const setMaxTouchPoints = (n) => {
    Object.defineProperty(global.navigator, 'maxTouchPoints', {
      configurable: true,
      get: jest.fn().mockImplementation(() => n)
    });
  };

  describe('iPadOS', () => {
    it('should not confuse iPadOS with MacOS', () => {
      setMaxTouchPoints(1);
      expect(osUtils.isIpadOS(getParserMock(osTypes.MACOS))).toEqual(false);
    });

    it('should distinguish iPadOS from MacOS', () => {
      setMaxTouchPoints(2);
      expect(osUtils.isIpadOS(getParserMock(osTypes.MACOS))).toEqual(true);
    });
  });


  describe('other systems', () => {
    it('should work', () => {
      expect(osUtils.isAndroid(getParserMock(osTypes.ANDROID))).toEqual(true);
      expect(osUtils.isAndroid(getParserMock('not exist'))).toEqual(false);

      expect(osUtils.isIOS(getParserMock(osTypes.IOS))).toEqual(true);
      expect(osUtils.isIOS(getParserMock('not exist'))).toEqual(false);

      expect(osUtils.isLinux(getParserMock(osTypes.LINUX))).toEqual(true);
      expect(osUtils.isLinux(getParserMock('not exist'))).toEqual(false);

      expect(osUtils.isMacOS(getParserMock(osTypes.MACOS))).toEqual(true);
      expect(osUtils.isMacOS(getParserMock('not exist'))).toEqual(false);

      expect(osUtils.isWindows(getParserMock(osTypes.WINDOWS))).toEqual(true);
      expect(osUtils.isWindows(getParserMock('not exist'))).toEqual(false);
    });

  });
});
