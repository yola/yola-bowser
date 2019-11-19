import platformTypes from '../constants/platform-types'
import isDesktop from './is-desktop';

const getParserMock = (platformType) => ({
  getPlatformType: jest.fn(() => platformType)
});

describe('isDesktop', () => {
  describe('when platform is Desktop', () => {
    it('should return true', () => {
      const mock = getParserMock(platformTypes.DESKTOP);
      expect(isDesktop(mock)).toEqual(true);
      expect(mock.getPlatformType).toHaveBeenCalled();
    });
  });

  describe('when platform is not Desktop', () => {
    it('should return false', () => {
      const mock = getParserMock(platformTypes.TABLET);
      expect(isDesktop(mock)).toEqual(false);
      expect(mock.getPlatformType).toHaveBeenCalled();
    });
  });
});
