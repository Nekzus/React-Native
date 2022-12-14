import { Image, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { countriesValidate } from '../helpers/middleware-countries';
import moment from 'moment';
import { positionFixture } from '../helpers/position-teams';
import { useTheme } from '@react-navigation/native';

const FixtureGroups = ({ data, text }) => {
  const { colors, fonts } = useTheme();
  const matches = data.filter((match) => match.stage_name === text);
  positionFixture(matches);
  matches.sort((a, b) => (a.index > b.index ? 1 : a.index < b.index ? -1 : 0));

  const renderItem = (item) => {
    const { home_team, away_team, datetime } = item;
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
        <View style={{ ...styles.datetimeContainer, backgroundColor: colors.card }}>
          <Text style={{ ...styles.textDatetime, color: colors.text, fontFamily: fonts.content }}>
            {moment(datetime).format('DD/MM HH:mm')}
          </Text>
        </View>
        <View style={styles.shieldsContainer}>
          <View style={styles.shieldImage}>
            <Text style={{ ...styles.textShield, color: colors.text, fontFamily: fonts.content }}>
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
          <View style={{ ...styles.teamsContainer, backgroundColor: colors.card }}>
            <Text style={{ ...styles.textC, color: colors.text, fontFamily: fonts.content }}>
              {home_team.goals} - {away_team.goals}
            </Text>
          </View>
          <View style={styles.shieldImage}>
            <Text style={{ ...styles.textShield, color: colors.text, fontFamily: fonts.content }}>
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
      </View>
    );
  };

  return <>{matches.map(renderItem)}</>;
};

export default FixtureGroups;

const styles = StyleSheet.create({
  datetimeContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  container: {
    flexDirection: 'row',
    height: 65,
    width: 195,
    alignItems: 'center',
    justifyContent: 'center',
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
    flex: 7,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginHorizontal: 2,
  },
  shieldImage: {
    flex: 2,
  },
  teamsContainer: {
    flex: 1.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    borderRadius: 5,
  },
  textC: {
    fontSize: 10,
  },
  shield: {
    width: 35,
    height: 35,
    marginHorizontal: 15,
    resizeMode: 'contain',
  },
  textShield: {
    textAlign: 'center',
    fontSize: 9,
  },
  textDatetime: {
    textAlign: 'center',
    fontSize: 10,
    transform: [{ rotate: '-90deg' }],
    padding: 1,
    width: 50,
  },
});
