import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Matches } from '../../components';
import { reqWorldApi } from '../../api/regWorldCup';
import { useTheme } from '@react-navigation/native';

const MatchHistory = ({ navigation }) => {
  const [matches, setMatches] = useState([]);
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
});
