import { Random } from 'meteor/random';

export const uuid = () => {
  return Random.id();
}
