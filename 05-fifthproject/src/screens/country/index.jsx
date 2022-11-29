import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

const CountryTeam = ({ navigation, route }) => {
  const { name, country, flag } = route.params;
  return (
    <View>
      <Text>
        {name} - {country} - {flag}
      </Text>
    </View>
  );
};

export default CountryTeam;

const styles = StyleSheet.create({});
