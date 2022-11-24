import { Button, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Teams } from '../../components';
import { reqWorldApi } from '../../api/regWorldCup';

const Categories = ({ navigation }) => {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    chargeGroups();
  }, []);

  const chargeGroups = async () => {
    const resp = await reqWorldApi.get('/teams');
    setGroups(resp.data.groups);
  };

  const renderItem = (group) => {
    const { letter, teams } = group;
    return <Teams key={letter.toString()} group={letter} teams={teams} />;
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>{groups.map(renderItem)}</View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Products"
          color="black"
          onPress={() => navigation.navigate('Products')}
        />
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginVertical: 40,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
  },
});
