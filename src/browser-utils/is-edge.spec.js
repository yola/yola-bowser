import browserTypes from '../constants/browser-types'
import isEdge from './is-edge';

const getParserMock = (browserName) => ({
  getBrowserName: jest.fn(() => browserName)
});

describe('Browser utils: ', () => {
  it('is Edge?', () => {
    const mock = getParserMock(browserTypes.EDGE);
    expect(isEdge(mock)).toEqual(true);
    expect(mock.getBrowserName).toHaveBeenCalled();
    expect(isEdge(getParserMock('not exist'))).toEqual(false);
  });
});
