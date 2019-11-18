import osTypes from '../constants/os-types'
import isWindows from './is-windows';

const getParserMock = (osName) => ({
  getOSName: jest.fn(() => osName)
});

describe('OS utils: ', () => {
  it('is Android?', () => {
    const mock = getParserMock(osTypes.WINDOWS);
    expect(isWindows(mock)).toEqual(true);
    expect(mock.getOSName).toHaveBeenCalled();
    expect(isWindows(getParserMock('not exist'))).toEqual(false);
  });
});
