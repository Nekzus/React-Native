export const positionTeams = (teams) => {
  teams.sort((a, b) =>
    a.group_points * 10 + (a.goals_for + a.goal_differential) >
    b.group_points * 10 + (b.goals_for + b.goal_differential)
      ? -1
      : a.group_points * 10 + (a.goals_for + a.goal_differential) <
        b.group_points * 10 + (b.goals_for + b.goal_differential)
      ? 1
      : 0
  );
  return teams;
};
