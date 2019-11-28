import osTypes from '../constants/os-types'
import isIpadOS from './is-ipad-os';

const getParserMock = (osName) => ({
  getOSName: jest.fn(() => osName)
});

const setMaxTouchPoints = (n) => {
  Object.defineProperty(global.navigator, 'maxTouchPoints', {
    configurable: true,
    get: jest.fn().mockImplementation(() => n)
  });
};

describe('isIpadOS', () => {
  describe('when OS is ipadOS', () => {
    it('should return true and distinguish iPadOS from MacOS', () => {
      setMaxTouchPoints(2);
      const mock = getParserMock(osTypes.MACOS);
      expect(isIpadOS(mock)).toEqual(true);
      expect(mock.getOSName).toHaveBeenCalled();
    });
  });

  describe('when OS is desktop macOS', () => {
    it('should return false and not confuse iPadOS with MacOS', () => {
      setMaxTouchPoints(1);
      const mock = getParserMock(osTypes.MACOS);
      expect(isIpadOS(mock)).toEqual(false);
      expect(mock.getOSName).toHaveBeenCalled();
    });
  });

  describe('when OS is not macOS/ipadOS', () => {
    it('should return false', () => {
      const mock = getParserMock(osTypes.WINDOWS);
      expect(isIpadOS(mock)).toEqual(false);
      expect(mock.getOSName).toHaveBeenCalled();
    });
  });
});
