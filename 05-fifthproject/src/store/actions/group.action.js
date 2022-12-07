import { groupTypes } from '../types';

const { SELECT_GROUP } = groupTypes;

export const selectGroup = (letter) => ({
  type: SELECT_GROUP,
  letter,
});
