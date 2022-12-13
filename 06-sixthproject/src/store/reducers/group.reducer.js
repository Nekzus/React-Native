import { firstRound } from '../../constants/db/firstRound';
import { groupTypes } from '../types';

const { SELECT_GROUP, APP_READY } = groupTypes;
const initialState = {
  groups: firstRound,
  selected: {},
  appReady: false,
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
    case APP_READY:
      return {
        ...state,
        appReady: action.appReady,
      };
    default:
      return state;
  }
};

export default groupReducer;
