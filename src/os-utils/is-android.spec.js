import osTypes from '../constants/os-types'
import isAndroid from './is-android';

const getParserMock = (osName) => ({
  getOSName: jest.fn(() => osName)
});

describe('isAndroid', () => {
  describe('when OS is Android', () => {
    it('should return true', () => {
      const mock = getParserMock(osTypes.ANDROID);
      expect(isAndroid(mock)).toEqual(true);
      expect(mock.getOSName).toHaveBeenCalled();
    });
  });

  describe('when OS is not Android', () => {
    it('should return false', () => {
      const mock = getParserMock(osTypes.WINDOWS);
      expect(isAndroid(mock)).toEqual(false);
      expect(mock.getOSName).toHaveBeenCalled();
    });
  });
});
