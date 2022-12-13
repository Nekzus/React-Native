import { countries } from '../../constants/db/countries';
import { teamTypes } from '../types';

const { SELECT_TEAM, FILTER_TEAMS, STATS_TEAM } = teamTypes;
const initialState = {
  teams: countries,
  filteredTeams: [],
  selected: {},
  stats: [],
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
    case STATS_TEAM:
      return {
        ...state,
        stats: action.stats,
      };
    default:
      return state;
  }
};

export default teamReducer;
