import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { useDeviceOrientation } from '@react-native-community/hooks';

const Teams = ({ groups }) => {
  const { landscape } = useDeviceOrientation();
  const numColumns = landscape ? 4 : 2;
  const renderItemT = ({ item }) => {
    return (
      <Text style={styles.conText}>
        {item.name} ({item.group_points})
      </Text>
    );
  };

  const renderItemG = ({ item }) => {
    const { letter, teams } = item;
    teams.sort((a, b) =>
      a.group_points > b.group_points ? -1 : a.group_points < b.group_points ? 1 : 0
    );
    return (
      <View style={styles.table}>
        <View style={styles.header}>
          <Text style={styles.title}>Grupo {letter}</Text>
        </View>
        <View style={styles.content}>
          <FlatList
            data={teams}
            keyExtractor={(item2, index) => index.toString()}
            listKey={(item2, index) => index.toString()}
            renderItem={renderItemT}
          />
        </View>
      </View>
    );
  };
  if (!groups) {
    return (
      <View styles={styles.containerLoader}>
        <ActivityIndicator color="red" size="large" />
      </View>
    );
  }
  return (
    <FlatList
      key={landscape ? 'h' : 'v'}
      style={styles.flatList}
      ListHeaderComponent={() => <Text style={styles.textList}>Grupos y Posiciones</Text>}
      ListHeaderComponentStyle={{ alignItems: 'center', padding: 10 }}
      contentContainerStyle={{ alignItems: 'center' }}
      data={groups}
      keyExtractor={(item, index) => index.toString()}
      listKey={(item, index) => index.toString()}
      renderItem={renderItemG}
      numColumns={numColumns}
    />
  );
};

export default Teams;

const styles = StyleSheet.create({
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
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
  flatList: {
    width: '100%',
    // backgroundColor: 'blue',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: 'gray',
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
  textList: {
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    fontSize: 25,
  },
});
