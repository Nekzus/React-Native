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

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Teams groups={groups} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color="#400219"
          title="Go to Products"
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
  },
  container: {
    flex: 12,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
