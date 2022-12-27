import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Matches } from '../../components';
import { getMatches } from '../../store/actions';
import { useFocusEffect } from '@react-navigation/native';

const MatchHistory = ({ navigation }) => {
  const dispatch = useDispatch();
  const matches = useSelector((state) => state.match.matches);

  useFocusEffect(
    useCallback(() => {
      dispatch(getMatches());
    }, [dispatch])
  );

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Matches matches={matches} title={'Historial de Partidos'} />
      </View>
    </View>
  );
};

export default MatchHistory;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 12,
    width: '100%',
    alignItems: 'center',
    maxWidth: 450,
    paddingHorizontal: 5,
  },
});
