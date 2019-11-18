import osTypes from '../constants/os-types'
import isAndroid from './is-android';

const getParserMock = (osName) => ({
  getOSName: jest.fn(() => osName)
});

describe('OS utils: ', () => {
  it('is Android?', () => {
    const mock = getParserMock(osTypes.ANDROID);
    expect(isAndroid(mock)).toEqual(true);
    expect(mock.getOSName).toHaveBeenCalled();
    expect(isAndroid(getParserMock('not exist'))).toEqual(false);
  });
});
