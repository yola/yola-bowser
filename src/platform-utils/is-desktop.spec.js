import platformTypes from '../constants/platform-types'
import isDesktop from './is-desktop';

const getParserMock = (platformType) => ({
  getPlatformType: jest.fn(() => platformType)
});

describe('Platform utils: ', () => {
  it('is Desktop?', () => {
    const mock = getParserMock(platformTypes.DESKTOP);
    expect(isDesktop(mock)).toEqual(true);
    expect(mock.getPlatformType).toHaveBeenCalled();
    expect(isDesktop(getParserMock('not exist'))).toEqual(false);
  });
});
