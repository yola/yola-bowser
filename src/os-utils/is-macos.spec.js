import osTypes from '../constants/os-types'
import isMacOS from './is-macos';

const getParserMock = (osName) => ({
  getOSName: jest.fn(() => osName)
});

describe('isMacOS', () => {
  describe('when OS is macOS', () => {
    it('should return true', () => {
      const mock = getParserMock(osTypes.MACOS);
      expect(isMacOS(mock)).toEqual(true);
      expect(mock.getOSName).toHaveBeenCalled();
    });
  });

  describe('when OS is not macOS', () => {
    it('should return false', () => {
      const mock = getParserMock(osTypes.WINDOWS);
      expect(isMacOS(mock)).toEqual(false);
      expect(mock.getOSName).toHaveBeenCalled();
    });
  });
});
