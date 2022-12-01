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
          onPress={() =>
            navigation.navigate('Estadisticas-Pais', {
              name: itemCountry.name,
              country: item.country,
              flag: itemCountry.flag,
              shield: itemCountry.shield,
            })
          }>
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
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <Text style={{ ...styles.textList, color: colors.text }}>Paises Grupo {letter}</Text>
        )}
        data={countries}
        renderItem={renderItem}
        style={styles.flatList}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={loaderList}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    </View>
  );
};

export default TeamsCountries;

const styles = StyleSheet.create({
  containerLoader: {
    justifyContent: 'center',
  },
  flatList: {
    width: '100%',
    height: '100%',
    maxWidth: 700,
  },
  container: {
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
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
  textList: {
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    fontSize: 25,
    marginVertical: 20,
  },
});