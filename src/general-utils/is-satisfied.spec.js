import isSatisfied from './is-satisfied';

const getParserMock = () => ({
  satisfies: jest.fn((params) => params),
});

describe('isSatisfied', () => {
  it('should return true if condition is satisfied', () => {
    const mock = getParserMock();
    const params = 12;
    expect(isSatisfied(mock, params)).toEqual(12);
    expect(mock.satisfies).toHaveBeenCalled();
  });
});
