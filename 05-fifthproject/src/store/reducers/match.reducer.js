import { matchTypes } from '../types';

const { GET_MATCHES, NEXT_MATCHES } = matchTypes;
const initialState = {
  matches: [],
  today: [],
  tomorrow: [],
};

const matchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MATCHES:
      return {
        ...state,
        matches: action.matches,
      };
    case NEXT_MATCHES:
      return {
        ...state,
        today: action.today,
        tomorrow: action.tomorrow,
      };
    default:
      return state;
  }
};

export default matchReducer;
