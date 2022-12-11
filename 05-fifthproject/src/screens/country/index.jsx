import React, { useEffect, useState } from 'react';

import { ScrollView } from 'react-native';
import { StatsTeams } from '../../components';
import { reqWorldApi } from '../../api/regWorldCup';
import { useSelector } from 'react-redux';

const CountryTeam = ({ navigation }) => {
  const team = useSelector((state) => state.team.selected);
  const [statistics, setStatistics] = useState([]);
  useEffect(() => {
    chargeCountry();
  }, []);
  const chargeCountry = async () => {
    const resp = await reqWorldApi.get(`/teams/${team.code}`);
    setStatistics(resp.data);
  };

  if (statistics.length === 0) return;

  return (
    <ScrollView>
      <StatsTeams stats={statistics} route={team} />
    </ScrollView>
  );
};

export default CountryTeam;
