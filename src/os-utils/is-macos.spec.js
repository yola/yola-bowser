import osTypes from '../constants/os-types'
import isMacOS from './is-macos';

const getParserMock = (osName) => ({
  getOSName: jest.fn(() => osName)
});

describe('OS utils: ', () => {
  it('is MacOS?', () => {
    const mock = getParserMock(osTypes.MACOS);
    expect(isMacOS(mock)).toEqual(true);
    expect(mock.getOSName).toHaveBeenCalled();
    expect(isMacOS(getParserMock('not exist'))).toEqual(false);
  });
});
