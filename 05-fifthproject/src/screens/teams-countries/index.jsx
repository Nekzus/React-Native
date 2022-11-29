import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import { countriesValidate } from '../../helpers/middleware-countries';
import { reqWorldApi } from '../../api/regWorldCup';
import { useTheme } from '@react-navigation/native';

const TeamsCountries = ({ navigation, route }) => {
  const { colors } = useTheme();
  const { letter } = route.params;
  const [groups, setGroups] = useState([]);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    chargeGroups();
  }, []);

  const chargeGroups = async () => {
    const resp = await reqWorldApi.get('/teams');
    setGroups(resp.data.groups);
  };

  useEffect(() => {
    if (groups.length > 0) {
      const { teams } = groups.find((group) => group.letter === letter);
      setCountries(teams);
    }
  }, [groups]);

  const renderItem = ({ item }) => {
    const itemCountry = countriesValidate(item.country);
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Equipos-Paises', { country: item.country })}>
          <View style={{ ...styles.button, backgroundColor: colors.card }}>
            <Image source={{ uri: itemCountry.flag }} style={styles.imageFlag} />
            <Text style={{ ...styles.buttonText, color: colors.text }}>
              {itemCountry.name} - ({item.country})
            </Text>
          </View>
        </TouchableOpacity>
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
      data={countries}
      renderItem={renderItem}
      style={styles.container}
      ListEmptyComponent={loaderList}
    />
  );
};

export default TeamsCountries;

const styles = StyleSheet.create({
  containerLoader: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    width: 250,
    alignItems: 'center',
    backgroundColor: '#400219',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  buttonText: {
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginVertical: 15,
    color: 'white',
  },
  imageFlag: {
    height: 20,
    width: 30,
    marginHorizontal: 15,
    borderRadius: 5,
  },
});
