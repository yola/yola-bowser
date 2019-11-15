import yolaBowser from '../src';

jest.mock('../src/browser-utils', () => ({
  isChrome: jest.fn(() => true),
  isEdge: jest.fn(() => true),
  isFirefox: jest.fn(() => true),
  isIE: jest.fn(() => true),
  isOpera: jest.fn(() => true),
  isSafari: jest.fn(() => true),
}));

jest.mock('../src/os-utils', () => ({
  isAndroid: jest.fn(() => true),
  isIOS: jest.fn(() => true),
  isIpadOS: jest.fn(() => true),
  isLinux: jest.fn(() => true),
  isMacOS: jest.fn(() => true),
  isWindows: jest.fn(() => true),
}));

jest.mock('../src/platform-utils', () => ({
  isMobile: jest.fn(() => true),
  isTablet: jest.fn(() => true),
  isDesktop: jest.fn(() => true),
}));


describe('yolaBowser straightforward cases', () => {
  it('Browser flags', () => {
    expect(yolaBowser.chrome).toEqual(true);
    expect(yolaBowser.edge).toEqual(true);
    expect(yolaBowser.firefox).toEqual(true);
    expect(yolaBowser.ie).toEqual(true);
    expect(yolaBowser.opera).toEqual(true);
    expect(yolaBowser.safari).toEqual(true);
  });

  it('OS flags', () => {
    expect(yolaBowser.android).toEqual(true);
    expect(yolaBowser.iPadOS).toEqual(true);
    expect(yolaBowser.linux).toEqual(true);
    expect(yolaBowser.windows).toEqual(true);
  });

  it('Platform flags', () => {
    expect(yolaBowser.mobile).toEqual(true);
  });
});
