import osTypes from '../constants/os-types'
import isIOS from './is-ios';

const getParserMock = (osName) => ({
  getOSName: jest.fn(() => osName)
});

describe('isIOS', () => {
  describe('when OS is iOS', () => {
    it('should return true', () => {
      const mock = getParserMock(osTypes.IOS);
      expect(isIOS(mock)).toEqual(true);
      expect(mock.getOSName).toHaveBeenCalled();
    });
  });

  describe('when OS is not iOS', () => {
    it('should return false', () => {
      const mock = getParserMock(osTypes.WINDOWS);
      expect(isIOS(mock)).toEqual(false);
      expect(mock.getOSName).toHaveBeenCalled();
    });
  });
});
