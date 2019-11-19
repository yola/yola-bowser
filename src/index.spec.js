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
    describe('chrome', () => {
      it('should return true if browser is Chrome', () => {
        yolaBowser = setup({ browser: browserTypes.CHROME });
        expect(yolaBowser.chrome).toEqual(true);
      });
    });

    describe('edge', () => {
      it('should return true if browser is Edge', () => {
        yolaBowser = setup({ browser: browserTypes.EDGE });
        expect(yolaBowser.edge).toEqual(true);
      });
    });

    describe('firefox', () => {
      it('should return true if browser is Firefox', () => {
        yolaBowser = setup({ browser: browserTypes.FIREFOX });
        expect(yolaBowser.firefox).toEqual(true);
      });
    });

    describe('ie', () => {
      it('should return true if browser is IE', () => {
        yolaBowser = setup({ browser: browserTypes.IE });
        expect(yolaBowser.ie).toEqual(true);
      });
    });

    describe('opera', () => {
      it('should return true if browser is Opera', () => {
        yolaBowser = setup({ browser: browserTypes.OPERA });
        expect(yolaBowser.opera).toEqual(true);
      });
    });

    describe('safari', () => {
      it('should return true if browser is Safari', () => {
        yolaBowser = setup({ browser: browserTypes.SAFARI });
        expect(yolaBowser.safari).toEqual(true);
      });
    });
  });

  describe('OS flags', () => {
    describe('android', () => {
      it('should return true if OS is Android', () => {
        yolaBowser = setup({ os: osTypes.ANDROID });
        expect(yolaBowser.android).toEqual(true);
      });
    });

    describe('ios', () => {
      it('should return true if OS is actually iOS', () => {
        yolaBowser = setup({ os: osTypes.IOS });
        expect(yolaBowser.ios).toEqual(true);
      });

      it('should also return true if OS is the iPad OS', () => {
        setMaxTouchPoints(2);
        yolaBowser = setup({ os: osTypes.MACOS });
        expect(yolaBowser.ios).toEqual(true);
      });
    });

    describe('iPadOS', () => {
      it('should also return true if OS is macOS and maxTouchPoints is > 1', () => {
        setMaxTouchPoints(2);
        yolaBowser = setup({ os: osTypes.MACOS });
        expect(yolaBowser.iPadOS).toEqual(true);
      });
    });

    describe('linux', () => {
      it('should return true if OS is linux', () => {
        yolaBowser = setup({ os: osTypes.LINUX });
        expect(yolaBowser.linux).toEqual(true);
      });
    });

    describe('macOS', () => {
      it('should also return true if OS is macOSand maxTouchPoints is < 2', () => {
        setMaxTouchPoints(1);
        yolaBowser = setup({ os: osTypes.MACOS });
        expect(yolaBowser.macOS).toEqual(true);
      });

      it('should also return false if OS is macOS and maxTouchPoints is > 1', () => {
        setMaxTouchPoints(2);
        yolaBowser = setup({ os: osTypes.MACOS });
        expect(yolaBowser.macOS).toEqual(false);
      });
    });

    describe('windows', () => {
      it('should return true if OS is windows', () => {
        yolaBowser = setup({ os: osTypes.WINDOWS });
        expect(yolaBowser.windows).toEqual(true);
      });
    });
  });

  describe('Platform flags', () => {
    describe('mobile', () => {
      it('should return true if platform is Mobile', () => {
        yolaBowser = setup({ platform: platformTypes.MOBILE });
        expect(yolaBowser.mobile).toEqual(true);
      });
    });

    describe('tablet', () => {
      it('should return true if platform is Tablet', () => {
        yolaBowser = setup({ platform: platformTypes.TABLET });
        expect(yolaBowser.tablet).toEqual(true);
      });

      it('should return true if it is the iPad OS', () => {
        setMaxTouchPoints(2);
        yolaBowser = setup({ os: osTypes.MACOS });
        expect(yolaBowser.tablet).toEqual(true);
      });
    });

    describe('desktop', () => {
      it('should return true if platform is Desktop', () => {
        yolaBowser = setup({ platform: platformTypes.DESKTOP });
        expect(yolaBowser.desktop).toEqual(true);
      });
    });
  });
});
