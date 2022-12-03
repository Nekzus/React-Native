import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Teams } from '../../components';
import { firstRound } from '../../db/fasegrupos';

// import { reqWorldApi } from '../../api/regWorldCup';

const GroupsTeams = ({ navigation }) => {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    chargeGroups();
  }, []);

  const chargeGroups = () => {
    // const resp = await reqWorldApi.get('/teams'); // Server omitted
    // setGroups(resp.data.groups);
    setGroups(firstRound);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Teams groups={groups} title={'Fase de Grupos y Posiciones'} />
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
});
