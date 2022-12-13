import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ScrollView } from 'react-native';
import { StatsTeams } from '../../components';
import { statsTeam } from '../../store/actions';
import { useFocusEffect } from '@react-navigation/native';

const CountryTeam = ({ navigation }) => {
  const dispatch = useDispatch();
  const team = useSelector((state) => state.team.selected);
  const statistics = useSelector((state) => state.team.stats);

  useFocusEffect(
    useCallback(() => {
      dispatch(statsTeam(team.code));
    }, [dispatch])
  );

  if (statistics.length === 0) return;

  return (
    <ScrollView>
      <StatsTeams stats={statistics} route={team} />
    </ScrollView>
  );
};

export default CountryTeam;
