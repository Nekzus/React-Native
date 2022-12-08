import { firstRound } from '../../constants/db/firstRound';
import { groupTypes } from '../types';

const { SELECT_GROUP } = groupTypes;
const initialState = {
  groups: firstRound,
  selected: {},
};

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_GROUP:
      const indexGroup = state.groups.findIndex((group) => group.letter === action.letter);
      if (indexGroup === -1) return state;
      return {
        ...state,
        selected: state.groups[indexGroup],
      };
    default:
      return state;
  }
};

export default groupReducer;
