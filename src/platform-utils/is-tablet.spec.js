import platformTypes from '../constants/platform-types'
import isTablet from './is-tablet';

const getParserMock = (platformType) => ({
  getPlatformType: jest.fn(() => platformType)
});

describe('Platform utils: ', () => {
  it('is Tablet?', () => {
    const mock = getParserMock(platformTypes.TABLET);
    expect(isTablet(mock)).toEqual(true);
    expect(mock.getPlatformType).toHaveBeenCalled();
    expect(isTablet(getParserMock('not exist'))).toEqual(false);
  });
});
