import { Button, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Matches } from '../../components';
import Moment from 'moment';
import { reqWorldApi } from '../../api/regWorldCup';

const NextMatches = ({ navigation }) => {
  const [matchesTd, setMatchesTd] = useState([]);
  const [matchesTm, setMatchesTm] = useState([]);
  Moment.locale('es-mx');
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
      <View style={styles.buttonContainer}>
        <Button
          color="#400219"
          title="Grupos Posiciones"
          onPress={() => navigation.navigate('Grupos-Posiciones')}
        />
      </View>
    </View>
  );
};

export default NextMatches;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 12,
    alignItems: 'center',
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
