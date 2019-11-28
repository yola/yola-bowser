import browserTypes from '../constants/browser-types'
import isOpera from './is-opera';

const getParserMock = (browserName) => ({
  getBrowserName: jest.fn(() => browserName)
});

describe('isOpera', () => {
  describe('when browser is Opera', () => {
    it('should return true', () => {
      const mock = getParserMock(browserTypes.OPERA);
      expect(isOpera(mock)).toEqual(true);
      expect(mock.getBrowserName).toHaveBeenCalled();
    });
  });

  describe('when browser is not Opera', () => {
    it('should return false', () => {
      const mock = getParserMock(browserTypes.SAFARI);
      expect(isOpera(mock)).toEqual(false);
      expect(mock.getBrowserName).toHaveBeenCalled();
    });
  });
});
