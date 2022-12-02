import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { countriesValidate } from '../helpers/middleware-countries';
import { positionFixture } from '../helpers/position-teams';
import { useTheme } from '@react-navigation/native';

const FixtureGroups = ({ data, text }) => {
  const { colors } = useTheme();
  const matches = data.filter((match) => match.stage_name === text);
  positionFixture(matches);
  matches.sort((a, b) => (a.index > b.index ? 1 : a.index < b.index ? -1 : 0));

  const renderItem = (item) => {
    const { home_team, away_team } = item;
    const homeCountry = countriesValidate(item.home_team_country);
    const awayCountry = countriesValidate(item.away_team_country);

    return (
      <View
        key={item.id}
        style={{
          ...styles.container,
          backgroundColor: colors.notification,
          borderColor: colors.border,
        }}>
        <View style={styles.shieldsContainer}>
          <View style={styles.shieldImage}>
            <Text style={{ ...styles.textShield, color: colors.text }}>
              {homeCountry.name ? homeCountry.name : home_team.country}
            </Text>
            <Image
              source={
                homeCountry.shield
                  ? { uri: homeCountry.shield }
                  : require('../../assets/escudo_vacio.png')
              }
              style={styles.shield}
            />
          </View>
          <View style={styles.shieldImage}>
            <Text style={{ ...styles.textShield, color: colors.text }}>
              {awayCountry.name ? awayCountry.name : away_team.country}
            </Text>
            <Image
              source={
                awayCountry.shield
                  ? { uri: awayCountry.shield }
                  : require('../../assets/escudo_vacio.png')
              }
              style={styles.shield}
            />
          </View>
        </View>
        <View style={{ ...styles.teamsContainer, backgroundColor: colors.card }}>
          <Text style={{ ...styles.textC, color: colors.text }}>
            {home_team.goals} - {away_team.goals}
          </Text>
        </View>
      </View>
    );
  };

  if (matches.length < 0) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator color="white" size="large" />
      </View>
    );
  }
  return <>{matches.map(renderItem)}</>;
};

export default FixtureGroups;

const styles = StyleSheet.create({
  containerLoader: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    height: 65,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
  },
  shieldsContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  teamsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: 'gray',
  },
  textC: {
    fontFamily: 'Lato-Bold',
    fontSize: 10,
    paddingHorizontal: 5,
  },
  shield: {
    width: 35,
    height: 35,
    marginHorizontal: 15,
    resizeMode: 'contain',
  },
  textShield: {
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    fontSize: 9,
    padding: 1,
  },
});
