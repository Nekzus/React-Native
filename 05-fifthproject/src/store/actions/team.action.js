import { teamTypes } from '../types';

const { SELECT_TEAM, FILTER_TEAMS } = teamTypes;

export const selectTeam = (country) => ({
  type: SELECT_TEAM,
  country,
});

export const filterTeams = (letter) => ({
  type: FILTER_TEAMS,
  letter,
});
