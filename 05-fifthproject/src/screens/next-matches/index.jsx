import { LoaderList, Matches } from '../../components';
import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect, useTheme } from '@react-navigation/native';

import { nextMatches } from '../../store/actions';

const NextMatches = ({ navigation }) => {
  const { colors, fonts } = useTheme();
  const dispatch = useDispatch();
  const matchesTd = useSelector((state) => state.match.today);
  const matchesTm = useSelector((state) => state.match.tomorrow);
  const loading = useSelector((state) => state.match.loading);

  useFocusEffect(
    useCallback(() => {
      dispatch(nextMatches());
    }, [dispatch])
  );

  if (loading) return <LoaderList />;

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        {matchesTd.length > 0 ? (
          <Matches
            matches={matchesTd}
            title={'Partidos de Hoy'}
            component={
              matchesTm.length > 0 && <Matches matches={matchesTm} title={'Partidos de Mañana'} />
            }
          />
        ) : matchesTm.length > 0 ? (
          <Matches matches={matchesTm} title={'Partidos de Mañana'} />
        ) : (
          loading && (
            <Text style={{ ...styles.textList, color: colors.text, fontFamily: fonts.content }}>
              Sin Partidos Proximos
            </Text>
          )
        )}
      </View>
    </View>
  );
};

export default NextMatches;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 12,
    justifyContent: 'center',
    width: '100%',
    maxWidth: 450,
    paddingHorizontal: 5,
  },
  textList: {
    textAlign: 'center',
    fontSize: 25,
    textTransform: 'uppercase',
  },
});
