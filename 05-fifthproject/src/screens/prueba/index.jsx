import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { filterTeams, selectTeam } from '../../store/actions/team.action';
import { useDispatch, useSelector } from 'react-redux';

import { countriesValidate } from '../../helpers/middleware-countries';
import { selectGroup } from '../../store/actions';

const PruebaRedux = () => {
  // const groups = useSelector((state) => state.group.groups);
  // const group = useSelector((state) => state.group.selected);
  // const teams = useSelector((state) => state.team.filteredTeams);
  // const team = useSelector((state) => state.team.selected);

  // const dispatch = useDispatch();
  // const onPress1 = (item) => {
  //   dispatch(selectGroup(item.letter));
  // };
  // const onPress2 = (item) => {
  //   dispatch(selectTeam(item.country));
  // };

  // useEffect(() => {
  //   dispatch(filterTeams(group.teams));
  // }, [group]);

  // console.log({ team });
  // const renderItem1 = ({ item }) => {
  //   return <Button title={item.letter} onPress={() => onPress1(item)} />;
  // };
  // const renderItem2 = ({ item }) => {
  //   const validTeam = countriesValidate(item.country);
  //   return <Button title={validTeam.name} onPress={() => onPress2(item)} color="red" />;
  // };
  return (
    <View>
      {/* <FlatList
        data={groups}
        renderItem={renderItem1}
        keyExtractor={(item, index) => index.toString()}
      />
      <FlatList
        data={teams}
        renderItem={renderItem2}
        keyExtractor={(item, index) => index.toString()}
      /> */}
    </View>
  );
};

export default PruebaRedux;

const styles = StyleSheet.create({});
