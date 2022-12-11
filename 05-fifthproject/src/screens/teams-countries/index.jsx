import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, { useEffect } from 'react';
import { filterTeams, selectTeam } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

import { LoaderList } from '../../components';
import { countriesValidate } from '../../helpers/middleware-countries';
import { useTheme } from '@react-navigation/native';

const TeamsCountries = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const group = useSelector((state) => state.group.selected);
  const teams = useSelector((state) => state.team.filteredTeams);
  const { colors, fonts } = useTheme();
  const { width } = useWindowDimensions();
  const { letter } = route.params;

  useEffect(() => {
    dispatch(filterTeams(group.teams));
  }, [group]);

  const onSelected = (item) => {
    const itemCountry = countriesValidate(item.country);
    dispatch(selectTeam(item.country));
    navigation.navigate('Estadisticas-Pais', { name: itemCountry.name });
  };

  const renderItem = ({ item }) => {
    const itemCountry = countriesValidate(item.country);
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => onSelected(item)}>
          <View style={{ ...styles.button, backgroundColor: colors.card, width: width * 0.75 }}>
            <Image source={{ uri: itemCountry.flag }} style={styles.imageFlag} />
            <Text
              style={{
                ...styles.buttonText,
                color: colors.text,
                fontFamily: fonts.content,
                fontSize: width >= 360 ? 15 : 13,
              }}>
              {itemCountry.name} - ({item.country})
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const loaderList = () => {
    return <LoaderList />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <Text style={{ ...styles.textList, color: colors.text, fontFamily: fonts.title }}>
            Paises Grupo {letter}
          </Text>
        )}
        data={teams}
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
    maxWidth: 300,
    alignItems: 'center',
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
    fontSize: 25,
    marginVertical: 20,
  },
});
