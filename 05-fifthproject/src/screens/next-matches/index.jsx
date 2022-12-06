import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Matches } from '../../components';
import { reqWorldApi } from '../../api/regWorldCup';
import { useTheme } from '@react-navigation/native';

const NextMatches = ({ navigation }) => {
  const { colors, fonts } = useTheme();
  const [matchesTd, setMatchesTd] = useState([]);
  const [matchesTm, setMatchesTm] = useState([]);
  useEffect(() => {
    chargeMatchesTd();
    chargeMatchesTm();
  }, []);

  const chargeMatchesTd = async () => {
    const { data } = await reqWorldApi.get('/matches/today');
    setMatchesTd(data);
  };
  const chargeMatchesTm = async () => {
    const { data } = await reqWorldApi.get('/matches/tomorrow');
    setMatchesTm(data);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        {matchesTd.length > 0 ? (
          <Matches matches={matchesTd} title={'Partidos de Hoy'} />
        ) : matchesTm.length > 0 ? (
          <Matches matches={matchesTm} title={'Partidos de Mañana'} />
        ) : (
          <Text style={{ ...styles.textList, color: colors.text, fontFamily: fonts.content }}>
            Sin Partidos Proximos
          </Text>
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
