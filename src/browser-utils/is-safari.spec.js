import browserTypes from '../constants/browser-types'
import isSafari from './is-safari';

const getParserMock = (browserName) => ({
  getBrowserName: jest.fn(() => browserName)
});

describe('Browser utils: ', () => {
  it('is Safari?', () => {
    const mock = getParserMock(browserTypes.SAFARI);
    expect(isSafari(mock)).toEqual(true);
    expect(mock.getBrowserName).toHaveBeenCalled();
    expect(isSafari(getParserMock('not exist'))).toEqual(false);
  });
});
