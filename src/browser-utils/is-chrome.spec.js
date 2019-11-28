import browserTypes from '../constants/browser-types'
import isChrome from './is-chrome';

const getParserMock = (browserName) => ({
  getBrowserName: jest.fn(() => browserName)
});

describe('isChrome', () => {
  describe('when browser is Chrome', () => {
    it('should return true', () => {
      const mock = getParserMock(browserTypes.CHROME);
      expect(isChrome(mock)).toEqual(true);
      expect(mock.getBrowserName).toHaveBeenCalled();
    });
  });

  describe('when browser is not Chrome', () => {
    it('should return false', () => {
      const mock = getParserMock(browserTypes.SAFARI);
      expect(isChrome(mock)).toEqual(false);
      expect(mock.getBrowserName).toHaveBeenCalled();
    });
  });
});
