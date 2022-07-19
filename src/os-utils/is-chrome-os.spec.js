import osTypes from '../constants/os-types';
import isChromeOS from './is-chrome-os';

const getParserMock = (osName) => ({
  getOSName: jest.fn(() => osName),
});

describe('isChromeOS', () => {
  describe('when OS is ChromeOS', () => {
    it('should return true', () => {
      const mock = getParserMock(osTypes.CHROME_OS);
      expect(isChromeOS(mock)).toEqual(true);
      expect(mock.getOSName).toHaveBeenCalled();
    });
  });

  describe('when OS is not ChromeOS', () => {
    it('should return false', () => {
      const mock = getParserMock(osTypes.WINDOWS);
      expect(isChromeOS(mock)).toEqual(false);
      expect(mock.getOSName).toHaveBeenCalled();
    });
  });
});
