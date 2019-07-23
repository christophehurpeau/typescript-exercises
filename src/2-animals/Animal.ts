export type AnimalSound =
  | 'barks'
  | 'growls'
  | 'meows'
  | 'croaks'
  | 'squeaks'
  | 'screams';

export default abstract class Animal {
  abstract makeSound(): AnimalSound;
}
