import { sayHello } from '.';

describe('Hello World', () => {
  it('says hello world with no name', () => {
    expect(sayHello()).toBe('Hello, World!');
  });

  it('says hello to John', () => {
    expect(sayHello('John')).toBe('Hello, Bob!');
  });

  it('says hello to Jane', () => {
    expect(sayHello('Jane')).toBe('Hello, Jane!');
  });
});
