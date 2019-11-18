import osTypes from '../constants/os-types'
import isIOS from './is-ios';

const getParserMock = (osName) => ({
  getOSName: jest.fn(() => osName)
});

describe('OS utils: ', () => {
  it('is iOS?', () => {
    const mock = getParserMock(osTypes.IOS);
    expect(isIOS(mock)).toEqual(true);
    expect(mock.getOSName).toHaveBeenCalled();
    expect(isIOS(getParserMock('not exist'))).toEqual(false);
  });
});
