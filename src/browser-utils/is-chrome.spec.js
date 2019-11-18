import browserTypes from '../constants/browser-types'
import isChrome from './is-chrome';

const getParserMock = (browserName) => ({
  getBrowserName: jest.fn(() => browserName)
});

describe('Browser utils: ', () => {
  it('is Chrome?', () => {
    const mock = getParserMock(browserTypes.CHROME);
    expect(isChrome(mock)).toEqual(true);
    expect(mock.getBrowserName).toHaveBeenCalled();
    expect(isChrome(getParserMock('not exist'))).toEqual(false);
  });
});
