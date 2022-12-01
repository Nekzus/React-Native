import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { FixtureGroups } from '../../components';
import moment from 'moment/moment';
import { reqWorldApi } from '../../api/regWorldCup';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { useTheme } from '@react-navigation/native';

const Fixture = ({ navigation }) => {
  const { colors } = useTheme();
  const { landscape } = useDeviceOrientation();
  const [matches, setMatches] = useState([]);
  moment.locale('es-mx');
  useEffect(() => {
    chargeMatches();
  }, []);

  const chargeMatches = async () => {
    const { data } = await reqWorldApi.get('/matches');
    setMatches(data);
  };
  return (
    <ScrollView horizontal={landscape ? false : true}>
      <View style={styles.container}>
        <View style={styles.round16}>
          <FixtureGroups data={matches} text={'Round of 16'} />
        </View>
        <View style={styles.round16}>
          <FixtureGroups data={matches} text={'Quarter-final'} />
        </View>
        <View style={styles.round16}>
          <FixtureGroups data={matches} text={'Semi-final'} />
        </View>
        <View style={styles.round16}>
          <FixtureGroups data={matches} text={'Final'} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Fixture;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  round16: {
    marginHorizontal: 15,
    justifyContent: 'space-around',
  },
});
