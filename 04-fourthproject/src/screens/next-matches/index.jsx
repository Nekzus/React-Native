import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
        <TouchableOpacity onPress={() => navigation.navigate('Grupos-Posiciones')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Grupos Posiciones</Text>
          </View>
        </TouchableOpacity>
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
    paddingHorizontal: 5,
  },
  buttonContainer: {
    flex: 1,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    alignItems: 'center',
    backgroundColor: '#400219',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  buttonText: {
    textTransform: 'uppercase',
    fontSize: 15,
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
});
