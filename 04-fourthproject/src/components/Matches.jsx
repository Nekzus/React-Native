import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import moment from 'moment/moment';

const Matches = ({ home, away, date }) => {
  return (
    <View style={styles.matchTable}>
      <View style={styles.containerName}>
        <Text style={styles.textName}>{home.name}</Text>
      </View>
      <View style={styles.containerGoals}>
        <Text style={styles.textGoals}>{home.goals}</Text>
      </View>
      <View style={styles.containerGoals}>
        <Text style={styles.textGoals}>{away.goals}</Text>
      </View>
      <View style={styles.containerName}>
        <Text style={styles.textName}>{away.name}</Text>
      </View>
      <View style={styles.containerDate}>
        <Text style={styles.textDate}>{moment(date).format('DD/MM HH:mm')}</Text>
      </View>
    </View>
  );
};

export default Matches;

const styles = StyleSheet.create({
  matchTable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 35,
    borderWidth: 2,
    borderRadius: 15,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  containerName: {
    flex: 5,
    height: '100%',
    justifyContent: 'center',
  },
  containerGoals: {
    flex: 1,
    height: '100%',
    borderLeftWidth: 2,
    borderRightWidth: 1,
    justifyContent: 'center',
  },
  containerDate: {
    flex: 3,
    height: '100%',
    justifyContent: 'center',
    borderStartWidth: 2,
  },
  textName: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Lato-Regular',
  },
  textGoals: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Lato-Bold',
  },
  textDate: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Lato-Regular',
  },
});
