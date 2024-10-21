import browserTypes from '../constants/browser-types';
import isFirefox from './is-firefox';

const getParserMock = (browserName) => ({
  getBrowserName: jest.fn(() => browserName),
});

describe('isFirefox', () => {
  describe('when browser is Firefox', () => {
    it('should return true', () => {
      const mock = getParserMock(browserTypes.FIREFOX);
      expect(isFirefox(mock)).toEqual(true);
      expect(mock.getBrowserName).toHaveBeenCalled();
    });
  });

  describe('when browser is not Firefox', () => {
    it('should return false', () => {
      const mock = getParserMock(browserTypes.SAFARI);
      expect(isFirefox(mock)).toEqual(false);
      expect(mock.getBrowserName).toHaveBeenCalled();
    });
  });
});
