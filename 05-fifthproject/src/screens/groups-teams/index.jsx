import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Teams } from '../../components';
import { reqWorldApi } from '../../api/regWorldCup';

const GroupsTeams = ({ navigation }) => {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    chargeGroups();
  }, []);

  const chargeGroups = async () => {
    const resp = await reqWorldApi.get('/teams');
    setGroups(resp.data.groups);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Teams groups={groups} title={'Fase de Grupos y Posiciones'} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Historial-Partidos')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Historial Partidos</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GroupsTeams;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 12,
    alignItems: 'center',
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
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
});
