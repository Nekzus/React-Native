import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Matches } from '../../components';
import { reqWorldApi } from '../../api/regWorldCup';

const NextMatches = ({ navigation }) => {
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
        <Matches
          matches={matchesTd}
          title={'Partidos de Hoy'}
          component={<Matches matches={matchesTm} title={'Partidos de Mañana'} />}
        />
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
    width: '100%',
    alignItems: 'center',
    maxWidth: 450,
    paddingHorizontal: 5,
  },
});
