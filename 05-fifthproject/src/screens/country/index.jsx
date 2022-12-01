import React, { useEffect, useState } from 'react';

import { ScrollView } from 'react-native';
import StatsTeams from '../../components/StatsTeams';
import { reqWorldApi } from '../../api/regWorldCup';

const CountryTeam = ({ route }) => {
  const { country } = route.params;
  const [statistics, setStatistics] = useState([]);
  useEffect(() => {
    chargeCountry();
  }, []);

  const chargeCountry = async () => {
    const resp = await reqWorldApi.get(`/teams/${country}`);
    setStatistics(resp.data);
  };

  if (statistics.length === 0) return;

  return (
    <ScrollView>
      <StatsTeams stats={statistics} route={route} />
    </ScrollView>
  );
};

export default CountryTeam;
