import browserTypes from '../constants/browser-types';
import isEdge from './is-edge';

const getParserMock = (browserName) => ({
  getBrowserName: jest.fn(() => browserName),
});

describe('isEdge', () => {
  describe('when browser is Edge', () => {
    it('should return true', () => {
      const mock = getParserMock(browserTypes.EDGE);
      expect(isEdge(mock)).toEqual(true);
      expect(mock.getBrowserName).toHaveBeenCalled();
    });
  });

  describe('when browser is not Edge', () => {
    it('should return false', () => {
      const mock = getParserMock(browserTypes.SAFARI);
      expect(isEdge(mock)).toEqual(false);
      expect(mock.getBrowserName).toHaveBeenCalled();
    });
  });
});
