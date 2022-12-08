import { countries } from '../../constants/db/countries';
import { teamTypes } from '../types';

const { SELECT_TEAM, FILTER_TEAMS } = teamTypes;
const initialState = {
  teams: countries,
  filteredTeams: [],
  selected: {},
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TEAM:
      return {
        ...state,
        selected: state.teams.find((team) => team.code === action.country),
      };

    case FILTER_TEAMS:
      return {
        ...state,
        filteredTeams: action.group,
      };
    default:
      return state;
  }
};

export default teamReducer;
