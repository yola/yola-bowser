import browserTypes from '../constants/browser-types'
import isIE from './is-ie';

const getParserMock = (browserName) => ({
  getBrowserName: jest.fn(() => browserName)
});

describe('isIE', () => {
  describe('when browser is IE', () => {
    it('should return true', () => {
      const mock = getParserMock(browserTypes.IE);
      expect(isIE(mock)).toEqual(true);
      expect(mock.getBrowserName).toHaveBeenCalled();
    });
  });

  describe('when browser is not IE', () => {
    it('should return false', () => {
      const mock = getParserMock(browserTypes.SAFARI);
      expect(isIE(mock)).toEqual(false);
      expect(mock.getBrowserName).toHaveBeenCalled();
    });
  });
});
