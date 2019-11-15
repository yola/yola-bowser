import browserTypes from '../src/constants/browser-types'
import browserUtils from '../src/browser-utils';

const getParserMock = (browserName) => ({
  getBrowserName: jest.fn(() => browserName)
});

describe('Browser utils', () => {
  it('should return proper values', () => {
    expect(browserUtils.isChrome(getParserMock(browserTypes.CHROME))).toEqual(true);
    expect(browserUtils.isChrome(getParserMock('not exist'))).toEqual(false);

    expect(browserUtils.isEdge(getParserMock(browserTypes.EDGE))).toEqual(true);
    expect(browserUtils.isEdge(getParserMock('not exist'))).toEqual(false);

    expect(browserUtils.isFirefox(getParserMock(browserTypes.FIREFOX))).toEqual(true);
    expect(browserUtils.isFirefox(getParserMock('not exist'))).toEqual(false);

    expect(browserUtils.isIE(getParserMock(browserTypes.IE))).toEqual(true);
    expect(browserUtils.isIE(getParserMock('not exist'))).toEqual(false);

    expect(browserUtils.isOpera(getParserMock(browserTypes.OPERA))).toEqual(true);
    expect(browserUtils.isOpera(getParserMock('not exist'))).toEqual(false);

    expect(browserUtils.isSafari(getParserMock(browserTypes.SAFARI))).toEqual(true);
    expect(browserUtils.isSafari(getParserMock('not exist'))).toEqual(false);
  });
});
