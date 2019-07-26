/* eslint-disable no-new */

import Animal from './Animal';
import Cat from './Cat';
import Dog from './Dog';
import Hamster from './Hamster';

describe('Animal', () => {
  it('should throw Animal class cannot be instanciated', () => {
    expect(() => {
      // @ts-ignore
      const animal = new Animal();

      animal.makeSound();
    }).toThrow('animal.makeSound is not a function');
  });

  it('should say a dog barks', () => {
    const cat = new Cat();
    expect(cat.makeSound()).toBe('meows');
  });

  it('should say a cat meows', () => {
    const dog = new Dog();
    expect(dog.makeSound()).toBe('barks');
  });

  it('should say a hamster squeaks', () => {
    const hamster = new Hamster();
    expect(hamster.makeSound()).toBe('squeaks');
  });
});
