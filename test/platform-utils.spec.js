import platformTypes from '../src/constants/platform-types'
import platformUtils from '../src/platform-utils';

describe('Platform utils', () => {
  const getParserMock = (browserName) => ({
    getPlatformType: jest.fn(() => browserName)
  });

  it('should return proper values', () => {
    expect(platformUtils.isMobile(getParserMock(platformTypes.MOBILE))).toEqual(true);
    expect(platformUtils.isMobile(getParserMock('not exist'))).toEqual(false);

    expect(platformUtils.isTablet(getParserMock(platformTypes.TABLET))).toEqual(true);
    expect(platformUtils.isTablet(getParserMock('not exist'))).toEqual(false);

    expect(platformUtils.isDesktop(getParserMock(platformTypes.DESKTOP))).toEqual(true);
    expect(platformUtils.isDesktop(getParserMock('not exist'))).toEqual(false);
  });
});
