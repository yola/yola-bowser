import platformTypes from '../constants/platform-types';
import isTablet from './is-tablet';

const getParserMock = (platformType) => ({
  getPlatformType: jest.fn(() => platformType),
});

describe('isTablet', () => {
  describe('when platform is Tablet', () => {
    it('should return true', () => {
      const mock = getParserMock(platformTypes.TABLET);
      expect(isTablet(mock)).toEqual(true);
      expect(mock.getPlatformType).toHaveBeenCalled();
    });
  });

  describe('when platform is not Tablet', () => {
    it('should return false', () => {
      const mock = getParserMock(platformTypes.DESKTOP);
      expect(isTablet(mock)).toEqual(false);
      expect(mock.getPlatformType).toHaveBeenCalled();
    });
  });
});
