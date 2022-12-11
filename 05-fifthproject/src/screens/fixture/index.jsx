import React, { useCallback } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { FixtureGroups } from '../../components';
import { getMatches } from '../../store/actions';
import { useFocusEffect } from '@react-navigation/native';

const Fixture = ({ navigation }) => {
  const dispatch = useDispatch();
  const matches = useSelector((state) => state.match.matches);

  useFocusEffect(
    useCallback(() => {
      dispatch(getMatches());
    }, [dispatch])
  );

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
