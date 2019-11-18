import platformTypes from '../constants/platform-types'
import isMobile from './is-mobile';

const getParserMock = (platformType) => ({
  getPlatformType: jest.fn(() => platformType)
});

describe('Platform utils: ', () => {
  it('is Mobile?', () => {
    const mock = getParserMock(platformTypes.MOBILE);
    expect(isMobile(mock)).toEqual(true);
    expect(mock.getPlatformType).toHaveBeenCalled();
    expect(isMobile(getParserMock('not exist'))).toEqual(false);
  });
});
