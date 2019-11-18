import osTypes from '../constants/os-types'
import isIpadOS from './is-ipad-os';

const getParserMock = (osName) => ({
  getOSName: jest.fn(() => osName)
});

const setMaxTouchPoints = (n) => {
  Object.defineProperty(global.navigator, 'maxTouchPoints', {
    configurable: true,
    get: jest.fn().mockImplementation(() => n)
  });
};

describe('OS utils: ', () => {
  it('should not confuse iPadOS with MacOS', () => {
    setMaxTouchPoints(1);
    const mock = getParserMock(osTypes.MACOS);
    expect(isIpadOS(mock)).toEqual(false);
    expect(mock.getOSName).toHaveBeenCalled();
    expect(isIpadOS(getParserMock('not exist'))).toEqual(false);
  });

  it('should distinguish iPadOS from MacOS', () => {
    setMaxTouchPoints(2);
    const mock = getParserMock(osTypes.MACOS);
    expect(isIpadOS(mock)).toEqual(true);
    expect(mock.getOSName).toHaveBeenCalled();
    expect(isIpadOS(getParserMock('not exist'))).toEqual(false);
  });
});
