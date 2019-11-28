import browserTypes from '../constants/browser-types'
import isSafari from './is-safari';

const getParserMock = (browserName) => ({
  getBrowserName: jest.fn(() => browserName)
});

describe('isSafari', () => {
  describe('when browser is Safari', () => {
    it('should return true', () => {
      const mock = getParserMock(browserTypes.SAFARI);
      expect(isSafari(mock)).toEqual(true);
      expect(mock.getBrowserName).toHaveBeenCalled();
    });
  });

  describe('when browser is not Safari', () => {
    it('should return false', () => {
      const mock = getParserMock(browserTypes.CHROME);
      expect(isSafari(mock)).toEqual(false);
      expect(mock.getBrowserName).toHaveBeenCalled();
    });
  });
});
