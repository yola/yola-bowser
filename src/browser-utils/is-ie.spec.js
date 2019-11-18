import browserTypes from '../constants/browser-types'
import isIE from './is-ie';

const getParserMock = (browserName) => ({
  getBrowserName: jest.fn(() => browserName)
});

describe('Browser utils: ', () => {
  it('is IE?', () => {
    const mock = getParserMock(browserTypes.IE);
    expect(isIE(mock)).toEqual(true);
    expect(mock.getBrowserName).toHaveBeenCalled();
    expect(isIE(getParserMock('not exist'))).toEqual(false);
  });
});
