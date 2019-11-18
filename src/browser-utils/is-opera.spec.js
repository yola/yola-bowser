import browserTypes from '../constants/browser-types'
import isOpera from './is-opera';

const getParserMock = (browserName) => ({
  getBrowserName: jest.fn(() => browserName)
});

describe('Browser utils: ', () => {
  it('is Opera?', () => {
    const mock = getParserMock(browserTypes.OPERA);
    expect(isOpera(mock)).toEqual(true);
    expect(mock.getBrowserName).toHaveBeenCalled();
    expect(isOpera(getParserMock('not exist'))).toEqual(false);
  });
});
