import getVersion from './get-version.js';

const getParserMock = () => ({
  getOSVersion: jest.fn(() => 12),
});

describe('getVersion', () => {
  it('should return version of OS', () => {
    const mock = getParserMock();
    expect(getVersion(mock)).toEqual(12);
    expect(mock.getOSVersion).toHaveBeenCalled();
  });
});
