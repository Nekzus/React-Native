import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { countriesValidate } from '../helpers/middleware-countries';
import { positionTeams } from '../helpers/position-teams';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { useTheme } from '@react-navigation/native';

const Teams = ({ groups, title }) => {
  const { colors, fonts } = useTheme();
  const { landscape } = useDeviceOrientation();
  const numColumns = landscape ? 2 : 1;
  const renderItemT = ({ item }) => {
    const country = countriesValidate(item.country);
    return (
      <View style={{ ...styles.matchTable, backgroundColor: colors.notification }}>
        <View style={styles.containerName}>
          <Image source={{ uri: country.flag }} style={styles.imageFlag} />
          <Text style={{ ...styles.textName, color: colors.text, fontFamily: fonts.content }}>
            {country.name}
          </Text>
        </View>
        <View style={{ ...styles.containerGoals, backgroundColor: colors.card }}>
          <Text style={{ ...styles.textGoals, color: colors.text, fontFamily: fonts.content }}>
            {item.group_points}
          </Text>
        </View>
      </View>
    );
  };

  const renderItemG = ({ item }) => {
    const { letter, teams } = item;
    positionTeams(teams);
    return (
      <View style={styles.card}>
        <View style={{ ...styles.header, backgroundColor: colors.card }}>
          <Text style={{ ...styles.title, fontFamily: fonts.content }}>Grupo {letter}</Text>
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

  const loaderList = () => {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator color="white" size="large" />
      </View>
    );
  };
  return (
    <FlatList
      key={landscape ? 'h' : 'v'}
      style={styles.flatList}
      ListHeaderComponent={() => (
        <Text style={{ ...styles.textList, color: colors.text, fontFamily: fonts.title }}>
          {title}
        </Text>
      )}
      ListHeaderComponentStyle={{ alignItems: 'center', padding: 10 }}
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: 'center',
      }}
      data={groups}
      keyExtractor={(item, index) => index.toString()}
      listKey={(item, index) => index.toString()}
      renderItem={renderItemG}
      numColumns={numColumns}
      ListEmptyComponent={loaderList}
    />
  );
};

export default Teams;

const styles = StyleSheet.create({
  containerLoader: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  card: {
    width: 310,
    height: 210,
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
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  title: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  matchTable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageFlag: {
    height: 20,
    width: 30,
    marginHorizontal: 15,
    borderRadius: 5,
  },
  textName: {
    textAlign: 'center',
    fontSize: 18,
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
  },
  content: {
    flex: 4,
    justifyContent: 'space-around',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    backgroundColor: 'white',
    padding: 5,
  },
  textList: {
    textAlign: 'center',
    fontSize: 25,
  },
});
