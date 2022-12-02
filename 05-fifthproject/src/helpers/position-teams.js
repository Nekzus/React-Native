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

export const positionFixture = (matches) => {
  matches.map((match, index) => {
    switch (match.datetime) {
      case '2022-12-04T15:00:00Z':
        match.index = 4;
        matches = [...matches, match];
        break;
      case '2022-12-04T19:00:00Z':
        match.index = 5;
        matches = [...matches, match];
        break;
      case '2022-12-05T15:00:00Z':
        match.index = 2;
        matches = [...matches, match];
        break;
      case '2022-12-05T19:00:00Z':
        match.index = 3;
        matches = [...matches, match];
        break;
      case '2022-12-09T19:00:00Z':
        match.index = 0;
        matches = [...matches, match];
        break;
      case '2022-12-09T15:00:00Z':
        match.index = 1;
        matches = [...matches, match];
        break;
      case '2022-12-10T19:00:00Z':
        match.index = 2;
        matches = [...matches, match];
        break;
      case '2022-12-10T15:00:00Z':
        match.index = 3;
        matches = [...matches, match];
        break;
      default:
        match.index = index++;
        matches = [...matches, match];
        break;
    }
  });
  return matches;
};
