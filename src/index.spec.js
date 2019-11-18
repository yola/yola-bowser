import browserTypes from './constants/browser-types';
import osTypes from './constants/os-types';
import platformTypes from './constants/platform-types';

const getBowserMock = ({ browser, os, platform }) => ({
  getParser: jest.fn(() => ({
    getBrowserName: jest.fn(() => browser),
    getOSName: jest.fn(() => os),
    getPlatformType: jest.fn(() => platform),
  }))
})

const setup = ({ browser, os, platform }) => {
  const mockBowser = getBowserMock({ browser, os, platform });
  jest.mock('bowser/bundled', () => mockBowser);

  // eslint-disable-next-line global-require
  return require('../src').default;
};

const setMaxTouchPoints = (n) => {
  Object.defineProperty(global.navigator, 'maxTouchPoints', {
    configurable: true,
    get: jest.fn().mockImplementation(() => n)
  });
};

describe('yola-bowser: ', () => {
  let yolaBowser;

  beforeEach(() => {
    jest.resetModules();
    setMaxTouchPoints(1);
  });

  describe('Browser flags', () => {
    it('chrome', () => {
      yolaBowser = setup({
        browser: browserTypes.CHROME
      });
      expect(yolaBowser.chrome).toEqual(true);
    });

    it('edge', () => {
      yolaBowser = setup({ browser: browserTypes.EDGE });
      expect(yolaBowser.edge).toEqual(true);
    });

    it('firefox', () => {
      yolaBowser = setup({ browser: browserTypes.FIREFOX });
      expect(yolaBowser.firefox).toEqual(true);
    });

    it('ie', () => {
      yolaBowser = setup({ browser: browserTypes.IE });
      expect(yolaBowser.ie).toEqual(true);
    });

    it('opera', () => {
      yolaBowser = setup({ browser: browserTypes.OPERA });
      expect(yolaBowser.opera).toEqual(true);
    });

    it('safari', () => {
      yolaBowser = setup({ browser: browserTypes.SAFARI });
      expect(yolaBowser.safari).toEqual(true);
    });
  });

  describe('OS flags', () => {
    it('android', () => {
      yolaBowser = setup({ os: osTypes.ANDROID });
      expect(yolaBowser.android).toEqual(true);
    });

    it('iOS: should be set if OS is actually iOS', () => {
      yolaBowser = setup({ os: osTypes.IOS });
      expect(yolaBowser.ios).toEqual(true);
    });

    it('iOS: should be set if OS is the iPad OS', () => {
      setMaxTouchPoints(2);
      yolaBowser = setup({ os: osTypes.MACOS });
      expect(yolaBowser.ios).toEqual(true);
    });

    it('iPad OS', () => {
      setMaxTouchPoints(2);
      yolaBowser = setup({ os: osTypes.MACOS });
      expect(yolaBowser.iPadOS).toEqual(true);
    });

    it('linux', () => {
      yolaBowser = setup({ os: osTypes.LINUX });
      expect(yolaBowser.linux).toEqual(true);
    });

    it('macOS', () => {
      setMaxTouchPoints(1);
      yolaBowser = setup({ os: osTypes.MACOS });
      expect(yolaBowser.macOS).toEqual(true);
    });

    it('macOS: should not be confused with iPad OS', () => {
      setMaxTouchPoints(2);
      yolaBowser = setup({ os: osTypes.MACOS });
      expect(yolaBowser.macOS).toEqual(false);
    });

    it('windows', () => {
      yolaBowser = setup({ os: osTypes.WINDOWS });
      expect(yolaBowser.windows).toEqual(true);
    });
  });

  describe('Platform flags', () => {
    it('mobile', () => {
      yolaBowser = setup({ platform: platformTypes.MOBILE });
      expect(yolaBowser.mobile).toEqual(true);
    });

    it('tablet', () => {
      yolaBowser = setup({ platform: platformTypes.TABLET });
      expect(yolaBowser.tablet).toEqual(true);
    });

    it('tablet: should be set if it is iPad OS', () => {
      setMaxTouchPoints(2);
      yolaBowser = setup({ os: osTypes.MACOS });
      expect(yolaBowser.tablet).toEqual(true);
    });

    it('desktop', () => {
      yolaBowser = setup({ platform: platformTypes.DESKTOP });
      expect(yolaBowser.desktop).toEqual(true);
    });
  });
});
