import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { countriesValidate } from '../helpers/middleware-countries';
import moment from 'moment/moment';
import { useTheme } from '@react-navigation/native';

const Matches = ({ matches, title, component = '' }) => {
  const { colors } = useTheme();
  const renderItem = ({ item }) => {
    const { home_team: home, away_team: away, datetime } = item;
    const countryH = countriesValidate(home.country);
    const countryA = countriesValidate(away.country);
    return (
      <View style={{ ...styles.matchTable, backgroundColor: colors.notification }}>
        <View style={styles.containerName}>
          <Image source={{ uri: countryH.flag }} style={styles.imageFlag} />
          <Text style={{ ...styles.textName, color: colors.text }}>
            {!countryH.name ? 'A definir' : countryH.name}
          </Text>
        </View>
        <View style={{ ...styles.containerGoals, backgroundColor: colors.card }}>
          <Text style={{ ...styles.textGoals, color: colors.text }}>{home.goals}</Text>
        </View>
        <View style={{ ...styles.containerGoals, backgroundColor: colors.card }}>
          <Text style={{ ...styles.textGoals, color: colors.text }}>{away.goals}</Text>
        </View>
        <View style={styles.containerName}>
          <Image source={{ uri: countryA.flag }} style={styles.imageFlag} />
          <Text style={{ ...styles.textName, color: colors.text }}>
            {!countryA.name ? 'A definir' : countryA.name}
          </Text>
        </View>
        <View style={{ ...styles.containerDate, backgroundColor: colors.card }}>
          <Text style={{ ...styles.textDate, color: colors.text }}>
            {moment(datetime).format('DD/MM HH:mm')}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      style={styles.flatList}
      ListHeaderComponent={() => (
        <Text style={{ ...styles.textList, color: colors.text }}>{title}</Text>
      )}
      ListHeaderComponentStyle={{ alignItems: 'center', padding: 10 }}
      ListFooterComponent={() => component}
      data={matches}
      keyExtractor={(item, index) => index.toString()}
      listKey={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
};

export default Matches;

const styles = StyleSheet.create({
  flatList: {
    width: '100%',
    maxWidth: 700,
  },
  matchTable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 40,
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
    alignItems: 'center',
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
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
  },
  imageFlag: {
    height: 15,
    width: 25,
  },
  textName: {
    textAlign: 'center',
    fontSize: 15,
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
  textList: {
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    fontSize: 25,
  },
});
