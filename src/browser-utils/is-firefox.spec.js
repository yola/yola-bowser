import browserTypes from '../constants/browser-types'
import isFirefox from './is-firefox';

const getParserMock = (browserName) => ({
  getBrowserName: jest.fn(() => browserName)
});

describe('Browser utils: ', () => {
  it('is Firefox?', () => {
    const mock = getParserMock(browserTypes.FIREFOX);
    expect(isFirefox(mock)).toEqual(true);
    expect(mock.getBrowserName).toHaveBeenCalled();
    expect(isFirefox(getParserMock('not exist'))).toEqual(false);
  });
});
