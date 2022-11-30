import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { reqWorldApi } from '../../api/regWorldCup';
import { useTheme } from '@react-navigation/native';

const CountryTeam = ({ route }) => {
  const { colors } = useTheme();
  const { name, country, flag, shield } = route.params;
  const [statistics, setStatistics] = useState([]);
  useEffect(() => {
    chargeCountry();
  }, []);

  const chargeCountry = async () => {
    const resp = await reqWorldApi.get(`/teams/${country}`);
    setStatistics(resp.data);
  };

  if (statistics.length === 0) return;

  const { draws, games_played, goal_differential, goals_against, goals_for, losses, wins } =
    statistics;
  console.log(statistics);

  return (
    <View style={styles.card}>
      <View style={{ ...styles.header, backgroundColor: colors.card }}>
        <View style={styles.fieldTitle}>
          <Image source={{ uri: shield }} style={styles.shield} />
          <Text style={{ ...styles.textTitle, color: colors.text }}>{name}</Text>
          <Image source={{ uri: flag }} style={styles.flag} />
        </View>
        <View style={styles.containerCode}>
          <Text style={{ ...styles.textCode, color: colors.text }}>{country}</Text>
        </View>
      </View>
      <View style={styles.content}></View>
      <View style={styles.footer}></View>
    </View>
  );
};

export default CountryTeam;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: 'red',
  },
  header: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  content: {
    flex: 9,
    backgroundColor: 'pink',
  },
  footer: {
    flex: 1,
    backgroundColor: 'violet',
  },
  flag: {
    width: 70,
    height: 50,
    resizeMode: 'contain',
  },
  shield: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
  },
  textTitle: {
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    fontSize: 30,
  },
  textCode: {
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
    fontSize: 20,
  },
  fieldTitle: {
    flex: 4,
    flexDirection: 'row',
    width: '100%',
    maxWidth: 500,
    height: 70,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  containerCode: {
    flex: 2,
  },
});
