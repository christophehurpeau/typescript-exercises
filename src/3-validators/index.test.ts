import { isValidDate, isValidInteger } from '.';

describe('isValidNumber', () => {
  it('should return that 10 is a valid number', () => {
    expect(isValidInteger('10')).toBe(true);
  });

  it('should return that 10.2 is not a valid number', () => {
    expect(isValidInteger('10.2')).toBe(false);
  });
});

describe('isValidDate', () => {
  it('should return that 2019-01-02 is a valid date', () => {
    expect(isValidDate('2019-01-02')).toBe(true);
  });

  it('should return that bob is not a valid date', () => {
    expect(isValidDate('bob')).toBe(false);
  });
});
