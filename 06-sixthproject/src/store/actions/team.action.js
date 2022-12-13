import { reqWorldApi } from '../../api/regWorldCup';
import { teamTypes } from '../types';

const { SELECT_TEAM, FILTER_TEAMS, STATS_TEAM } = teamTypes;

export const selectTeam = (country) => ({
  type: SELECT_TEAM,
  country,
});

export const filterTeams = (group) => ({
  type: FILTER_TEAMS,
  group,
});

export const statsTeam = (country) => {
  return async (dispatch) => {
    try {
      const resp = await reqWorldApi.get(`/teams/${country}`);
      const stats = resp.data;
      dispatch({ type: STATS_TEAM, stats });
    } catch (error) {
      console.log(error);
    }
  };
};
