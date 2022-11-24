import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

const Teams = ({ group, teams }) => {
  const renderItem = (team) => {
    const { name } = team;
    return (
      <Text key={name.toString()} style={styles.conText}>
        {name}
      </Text>
    );
  };
  return (
    <View style={styles.table}>
      <View style={styles.header}>
        <Text style={styles.title}>Grupo {group}</Text>
      </View>
      <View style={styles.content}>{teams.map(renderItem)}</View>
    </View>
  );
};

export default Teams;

const styles = StyleSheet.create({
  table: {
    width: 200,
    height: 150,
    borderRadius: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: 'black',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  content: {
    flex: 5,
    justifyContent: 'space-around',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    backgroundColor: 'white',
    padding: 5,
  },
  conText: {
    fontFamily: 'Lato-Regular',
    fontSize: 17,
    textAlign: 'center',
  },
});
