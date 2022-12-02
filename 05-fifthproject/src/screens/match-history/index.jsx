import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Matches } from '../../components';
import Moment from 'moment';
import { reqWorldApi } from '../../api/regWorldCup';
import { useTheme } from '@react-navigation/native';

const MatchHistory = ({ navigation }) => {
  const { colors, fonts } = useTheme();
  const [matches, setMatches] = useState([]);
  Moment.locale('es-mx');
  useEffect(() => {
    chargeMatches();
  }, []);

  const chargeMatches = async () => {
    const { data } = await reqWorldApi.get('/matches');
    setMatches(data);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Matches matches={matches} title={'Historial de Partidos'} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Proximos-Partidos')}>
          <View style={{ ...styles.button, backgroundColor: colors.card }}>
            <Text style={{ ...styles.buttonText, fontFamily: fonts.content }}>
              Proximos Partidos
            </Text>
          </View>
        </TouchableOpacity>
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
  buttonContainer: {
    flex: 0.2,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 150,
    alignItems: 'center',
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
    fontSize: 10,
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: 12,
    color: 'white',
  },
});
