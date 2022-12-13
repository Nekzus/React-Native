import { FlatList, StyleSheet, Text, View } from 'react-native';
import { LoaderList, TeamItem } from '../../components';
import React, { useEffect } from 'react';
import { filterTeams, selectTeam } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

import { countriesValidate } from '../../helpers/middleware-countries';
import { useTheme } from '@react-navigation/native';

const TeamsCountries = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const group = useSelector((state) => state.group.selected);
  const teams = useSelector((state) => state.team.filteredTeams);
  const { colors, fonts } = useTheme();
  const { letter } = route.params;

  useEffect(() => {
    dispatch(filterTeams(group.teams));
  }, [group]);

  const onSelected = (item) => {
    const itemCountry = countriesValidate(item.country);
    dispatch(selectTeam(item.country));
    navigation.navigate('Estadisticas-Pais', { name: itemCountry.name });
  };

  const renderItem = ({ item }) => <TeamItem item={item} onSelected={onSelected} />;

  const loaderList = () => <LoaderList />;

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
  textList: {
    textAlign: 'center',
    fontSize: 25,
    marginVertical: 20,
  },
});
