import osTypes from '../constants/os-types'
import isLinux from './is-linux';

const getParserMock = (osName) => ({
  getOSName: jest.fn(() => osName)
});

describe('isLinux', () => {
  describe('when OS is Linux', () => {
    it('should return true', () => {
      const mock = getParserMock(osTypes.LINUX);
      expect(isLinux(mock)).toEqual(true);
      expect(mock.getOSName).toHaveBeenCalled();
    });
  });

  describe('when OS is not Linux', () => {
    it('should return false', () => {
      const mock = getParserMock(osTypes.WINDOWS);
      expect(isLinux(mock)).toEqual(false);
      expect(mock.getOSName).toHaveBeenCalled();
    });
  });
});
