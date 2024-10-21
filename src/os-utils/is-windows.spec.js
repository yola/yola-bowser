import osTypes from '../constants/os-types';
import isWindows from './is-windows';

const getParserMock = (osName) => ({
  getOSName: jest.fn(() => osName),
});

describe('isWindows ', () => {
  describe('when OS is Windows', () => {
    it('should return true', () => {
      const mock = getParserMock(osTypes.WINDOWS);
      expect(isWindows(mock)).toEqual(true);
      expect(mock.getOSName).toHaveBeenCalled();
    });
  });

  describe('when OS is not Windows', () => {
    it('should return false', () => {
      const mock = getParserMock(osTypes.MACOS);
      expect(isWindows(mock)).toEqual(false);
      expect(mock.getOSName).toHaveBeenCalled();
    });
  });
});
