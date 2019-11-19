import platformTypes from '../constants/platform-types'
import isMobile from './is-mobile';

const getParserMock = (platformType) => ({
  getPlatformType: jest.fn(() => platformType)
});

describe('isMobile', () => {
  describe('when platform is Mobile', () => {
    it('should return true', () => {
      const mock = getParserMock(platformTypes.MOBILE);
      expect(isMobile(mock)).toEqual(true);
      expect(mock.getPlatformType).toHaveBeenCalled();
    });
  });

  describe('when platform is not Mobile', () => {
    it('should return false', () => {
      const mock = getParserMock(platformTypes.TABLET);
      expect(isMobile(mock)).toEqual(false);
      expect(mock.getPlatformType).toHaveBeenCalled();
    });
  });
});
