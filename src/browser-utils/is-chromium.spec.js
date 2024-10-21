import browserTypes from '../constants/browser-types';
import isChromium from './is-chromium';

const getParserMock = (browserName) => ({
  getBrowserName: jest.fn(() => browserName),
});

describe('isChromium', () => {
  describe('when browser is Chromium', () => {
    it('should return true', () => {
      const mock = getParserMock(browserTypes.CHROMIUM);
      expect(isChromium(mock)).toEqual(true);
      expect(mock.getBrowserName).toHaveBeenCalled();
    });
  });

  describe('when browser is not Chromium', () => {
    it('should return false', () => {
      const mock = getParserMock(browserTypes.SAFARI);
      expect(isChromium(mock)).toEqual(false);
      expect(mock.getBrowserName).toHaveBeenCalled();
    });
  });
});
