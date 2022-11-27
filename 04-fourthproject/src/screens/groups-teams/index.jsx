import { Button, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';

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
        <Button
          color="#400219"
          title="Historial Partidos"
          onPress={() => navigation.navigate('Historial-Partidos')}
        />
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
});
