import { StyleSheet, View } from 'react-native';

import React from 'react';
import { Teams } from '../../components';
import { useSelector } from 'react-redux';

const GroupsTeams = ({ navigation }) => {
  const groups = useSelector((state) => state.group.groups);
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
