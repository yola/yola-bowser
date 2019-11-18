import osTypes from '../constants/os-types'
import isLinux from './is-linux';

const getParserMock = (osName) => ({
  getOSName: jest.fn(() => osName)
});

describe('OS utils: ', () => {
  it('is Linux?', () => {
    const mock = getParserMock(osTypes.LINUX);
    expect(isLinux(mock)).toEqual(true);
    expect(mock.getOSName).toHaveBeenCalled();
    expect(isLinux(getParserMock('not exist'))).toEqual(false);
  });
});
