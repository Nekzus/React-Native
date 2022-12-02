import { Image, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { useTheme } from '@react-navigation/native';

const StatsTeams = ({ stats, route }) => {
  const { colors, fonts } = useTheme();
  const { name, country, flag, shield } = route.params;

  const {
    draws,
    games_played,
    goal_differential,
    goals_against,
    goals_for,
    group_points,
    losses,
    wins,
  } = stats;
  return (
    <View style={styles.card}>
      <View style={{ ...styles.header, backgroundColor: colors.card }}>
        <View style={styles.fieldTitle}>
          <Image source={{ uri: shield }} style={styles.shield} />
          <Text style={{ ...styles.textTitle, color: colors.text, fontFamily: fonts.title }}>
            {name}
          </Text>
          <Image source={{ uri: flag }} style={styles.flag} />
        </View>
        <View style={styles.containerCode}>
          <Text style={{ ...styles.textCode, color: colors.text, fontFamily: fonts.content }}>
            {country}
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={{ ...styles.matchTable, backgroundColor: colors.notification }}>
          <View style={styles.containerName}>
            <Text style={{ ...styles.textName, color: colors.text, fontFamily: fonts.content }}>
              Puntos
            </Text>
          </View>
          <View style={{ ...styles.containerGoals, backgroundColor: colors.card }}>
            <Text style={{ ...styles.textGoals, color: colors.text, fontFamily: fonts.content }}>
              {group_points}
            </Text>
          </View>
        </View>
        <View style={{ ...styles.matchTable, backgroundColor: colors.notification }}>
          <View style={styles.containerName}>
            <Text style={{ ...styles.textName, color: colors.text, fontFamily: fonts.content }}>
              Partidos Jugados
            </Text>
          </View>
          <View style={{ ...styles.containerGoals, backgroundColor: colors.card }}>
            <Text style={{ ...styles.textGoals, color: colors.text, fontFamily: fonts.content }}>
              {games_played}
            </Text>
          </View>
        </View>
        <View style={{ ...styles.matchTable, backgroundColor: colors.notification }}>
          <View style={styles.containerName}>
            <Text style={{ ...styles.textName, color: colors.text, fontFamily: fonts.content }}>
              Partidos Ganados
            </Text>
          </View>
          <View style={{ ...styles.containerGoals, backgroundColor: colors.card }}>
            <Text style={{ ...styles.textGoals, color: colors.text, fontFamily: fonts.content }}>
              {wins}
            </Text>
          </View>
        </View>
        <View style={{ ...styles.matchTable, backgroundColor: colors.notification }}>
          <View style={styles.containerName}>
            <Text style={{ ...styles.textName, color: colors.text, fontFamily: fonts.content }}>
              Partidos Empatados
            </Text>
          </View>
          <View style={{ ...styles.containerGoals, backgroundColor: colors.card }}>
            <Text style={{ ...styles.textGoals, color: colors.text, fontFamily: fonts.content }}>
              {draws}
            </Text>
          </View>
        </View>
        <View style={{ ...styles.matchTable, backgroundColor: colors.notification }}>
          <View style={styles.containerName}>
            <Text style={{ ...styles.textName, color: colors.text, fontFamily: fonts.content }}>
              Partidos Perdidos
            </Text>
          </View>
          <View style={{ ...styles.containerGoals, backgroundColor: colors.card }}>
            <Text style={{ ...styles.textGoals, color: colors.text, fontFamily: fonts.content }}>
              {losses}
            </Text>
          </View>
        </View>
        <View style={{ ...styles.matchTable, backgroundColor: colors.notification }}>
          <View style={styles.containerName}>
            <Text style={{ ...styles.textName, color: colors.text, fontFamily: fonts.content }}>
              Goles Anotados
            </Text>
          </View>
          <View style={{ ...styles.containerGoals, backgroundColor: colors.card }}>
            <Text style={{ ...styles.textGoals, color: colors.text, fontFamily: fonts.content }}>
              {goals_for}
            </Text>
          </View>
        </View>
        <View style={{ ...styles.matchTable, backgroundColor: colors.notification }}>
          <View style={styles.containerName}>
            <Text style={{ ...styles.textName, color: colors.text, fontFamily: fonts.content }}>
              Goles Recibidos
            </Text>
          </View>
          <View style={{ ...styles.containerGoals, backgroundColor: colors.card }}>
            <Text style={{ ...styles.textGoals, color: colors.text, fontFamily: fonts.content }}>
              {goals_against}
            </Text>
          </View>
        </View>
        <View style={{ ...styles.matchTable, backgroundColor: colors.notification }}>
          <View style={styles.containerName}>
            <Text style={{ ...styles.textName, color: colors.text, fontFamily: fonts.content }}>
              Diferencia de Goles
            </Text>
          </View>
          <View style={{ ...styles.containerGoals, backgroundColor: colors.card }}>
            <Text style={{ ...styles.textGoals, color: colors.text, fontFamily: fonts.content }}>
              {goal_differential}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StatsTeams;

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  header: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    height: 490,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 30,
  },
  textCode: {
    textAlign: 'center',
    fontSize: 20,
    padding: 5,
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
  matchTable: {
    flexDirection: 'row',
    marginHorizontal: 30,
    height: 40,
    maxWidth: 400,
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
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textName: {
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 30,
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
});
