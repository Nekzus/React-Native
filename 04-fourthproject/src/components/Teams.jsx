import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { countriesValidate } from '../helpers/countries';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { useTheme } from '@react-navigation/native';

const Teams = ({ groups }) => {
  const { colors } = useTheme();
  const { landscape } = useDeviceOrientation();
  const numColumns = landscape ? 4 : 2;
  const renderItemT = ({ item }) => {
    const name = countriesValidate(item.country);
    return (
      // <Text style={{ ...styles.conText, color: colors.text }}>
      //   {item.name} ({item.group_points})
      // </Text>
      <View style={{ ...styles.matchTable, backgroundColor: colors.notification }}>
        <View style={styles.containerName}>
          <Text style={{ ...styles.textName, color: colors.text }}>{name}</Text>
        </View>
        <View style={{ ...styles.containerGoals, backgroundColor: colors.card }}>
          <Text style={{ ...styles.textGoals, color: colors.text }}>{item.group_points}</Text>
        </View>
      </View>
    );
  };

  const renderItemG = ({ item }) => {
    const { letter, teams } = item;
    teams.sort((a, b) =>
      a.group_points > b.group_points ? -1 : a.group_points < b.group_points ? 1 : 0
    );
    return (
      <View style={styles.card}>
        <View style={{ ...styles.header, backgroundColor: colors.card }}>
          <Text style={styles.title}>Grupo {letter}</Text>
        </View>
        <View style={{ ...styles.content, backgroundColor: colors.notification }}>
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
      ListHeaderComponent={() => (
        <Text style={{ ...styles.textList, color: colors.text }}>Grupos y Posiciones</Text>
      )}
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
  card: {
    width: 210,
    height: 200,
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
    flex: 1,
    justifyContent: 'center',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  matchTable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 35,
    borderWidth: 2,
    borderRadius: 15,
    marginVertical: 2,
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
  textName: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Lato-Regular',
  },
  containerGoals: {
    flex: 1,
    height: '100%',
    borderLeftWidth: 2,
    borderRightWidth: 1,
    justifyContent: 'center',
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
  },
  textGoals: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Lato-Bold',
  },
  content: {
    flex: 4,
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
