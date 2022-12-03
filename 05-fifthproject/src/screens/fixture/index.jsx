import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { FixtureGroups } from '../../components';
import { reqWorldApi } from '../../api/regWorldCup';

const Fixture = ({ navigation }) => {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    chargeMatches();
  }, []);

  const chargeMatches = async () => {
    const { data } = await reqWorldApi.get('/matches');
    setMatches(data);
  };
  return (
    <ScrollView>
      <ScrollView horizontal>
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
