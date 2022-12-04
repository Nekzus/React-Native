import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import React from 'react';
import { useTheme } from '@react-navigation/native';

const StatsTeams = ({ stats, route }) => {
  const { colors, fonts } = useTheme();
  const { width } = useWindowDimensions();
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

  if (!stats) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator color="white" size="large" />
      </View>
    );
  }

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
        <View
          style={{
            ...styles.matchTable,
            backgroundColor: colors.notification,
            width: width * 0.95,
          }}>
          <View style={styles.containerName}>
            <Text
              style={{
                ...styles.textName,
                color: colors.text,
                fontFamily: fonts.content,
                fontSize: width >= 360 ? 18 : 16,
              }}>
              Puntos
            </Text>
          </View>
          <View style={{ ...styles.containerGoals, backgroundColor: colors.card }}>
            <Text
              style={{
                ...styles.textGoals,
                color: colors.text,
                fontFamily: fonts.content,
                fontSize: width >= 360 ? 18 : 16,
              }}>
              {group_points}
            </Text>
          </View>
        </View>
        <View
          style={{
            ...styles.matchTable,
            backgroundColor: colors.notification,
            width: width * 0.95,
          }}>
          <View style={styles.containerName}>
            <Text
              style={{
                ...styles.textName,
                color: colors.text,
                fontFamily: fonts.content,
                fontSize: width >= 360 ? 18 : 16,
              }}>
              Partidos Jugados
            </Text>
          </View>
          <View style={{ ...styles.containerGoals, backgroundColor: colors.card }}>
            <Text
              style={{
                ...styles.textGoals,
                color: colors.text,
                fontFamily: fonts.content,
                fontSize: width >= 360 ? 18 : 16,
              }}>
              {games_played}
            </Text>
          </View>
        </View>
        <View
          style={{
            ...styles.matchTable,
            backgroundColor: colors.notification,
            width: width * 0.95,
          }}>
          <View style={styles.containerName}>
            <Text
              style={{
                ...styles.textName,
                color: colors.text,
                fontFamily: fonts.content,
                fontSize: width >= 360 ? 18 : 16,
              }}>
              Partidos Ganados
            </Text>
          </View>
          <View style={{ ...styles.containerGoals, backgroundColor: colors.card }}>
            <Text
              style={{
                ...styles.textGoals,
                color: colors.text,
                fontFamily: fonts.content,
                fontSize: width >= 360 ? 18 : 16,
              }}>
              {wins}
            </Text>
          </View>
        </View>
        <View
          style={{
            ...styles.matchTable,
            backgroundColor: colors.notification,
            width: width * 0.95,
          }}>
          <View style={styles.containerName}>
            <Text
              style={{
                ...styles.textName,
                color: colors.text,
                fontFamily: fonts.content,
                fontSize: width >= 360 ? 18 : 16,
              }}>
              Partidos Empatados
            </Text>
          </View>
          <View style={{ ...styles.containerGoals, backgroundColor: colors.card }}>
            <Text
              style={{
                ...styles.textGoals,
                color: colors.text,
                fontFamily: fonts.content,
                fontSize: width >= 360 ? 18 : 16,
              }}>
              {draws}
            </Text>
          </View>
        </View>
        <View
          style={{
            ...styles.matchTable,
            backgroundColor: colors.notification,
            width: width * 0.95,
          }}>
          <View style={styles.containerName}>
            <Text
              style={{
                ...styles.textName,
                color: colors.text,
                fontFamily: fonts.content,
                fontSize: width >= 360 ? 18 : 16,
              }}>
              Partidos Perdidos
            </Text>
          </View>
          <View style={{ ...styles.containerGoals, backgroundColor: colors.card }}>
            <Text
              style={{
                ...styles.textGoals,
                color: colors.text,
                fontFamily: fonts.content,
                fontSize: width >= 360 ? 18 : 16,
              }}>
              {losses}
            </Text>
          </View>
        </View>
        <View
          style={{
            ...styles.matchTable,
            backgroundColor: colors.notification,
            width: width * 0.95,
          }}>
          <View style={styles.containerName}>
            <Text
              style={{
                ...styles.textName,
                color: colors.text,
                fontFamily: fonts.content,
                fontSize: width >= 360 ? 18 : 16,
              }}>
              Goles Anotados
            </Text>
          </View>
          <View style={{ ...styles.containerGoals, backgroundColor: colors.card }}>
            <Text
              style={{
                ...styles.textGoals,
                color: colors.text,
                fontFamily: fonts.content,
                fontSize: width >= 360 ? 18 : 16,
              }}>
              {goals_for}
            </Text>
          </View>
        </View>
        <View
          style={{
            ...styles.matchTable,
            backgroundColor: colors.notification,
            width: width * 0.95,
          }}>
          <View style={styles.containerName}>
            <Text
              style={{
                ...styles.textName,
                color: colors.text,
                fontFamily: fonts.content,
                fontSize: width >= 360 ? 18 : 16,
              }}>
              Goles Recibidos
            </Text>
          </View>
          <View style={{ ...styles.containerGoals, backgroundColor: colors.card }}>
            <Text
              style={{
                ...styles.textGoals,
                color: colors.text,
                fontFamily: fonts.content,
                fontSize: width >= 360 ? 18 : 16,
              }}>
              {goals_against}
            </Text>
          </View>
        </View>
        <View
          style={{
            ...styles.matchTable,
            backgroundColor: colors.notification,
            width: width * 0.95,
          }}>
          <View style={styles.containerName}>
            <Text
              style={{
                ...styles.textName,
                color: colors.text,
                fontFamily: fonts.content,
                fontSize: width >= 360 ? 18 : 16,
              }}>
              Diferencia de Goles
            </Text>
          </View>
          <View style={{ ...styles.containerGoals, backgroundColor: colors.card }}>
            <Text
              style={{
                ...styles.textGoals,
                color: colors.text,
                fontFamily: fonts.content,
                fontSize: width >= 360 ? 18 : 16,
              }}>
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
  containerLoader: {
    flexGrow: 1,
    justifyContent: 'center',
  },
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
    // fontSize: 18,
    marginHorizontal: 20,
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
    // fontSize: 18,
  },
});
