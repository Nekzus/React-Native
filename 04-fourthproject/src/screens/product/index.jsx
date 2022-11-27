import { Button, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import Matches from '../../components/Matches';
import Moment from 'moment';
import { reqWorldApi } from '../../api/regWorldCup';

const Product = ({ navigation }) => {
  const [matches, setMatches] = useState([]);
  Moment.locale('es-mx');
  useEffect(() => {
    chargeMatches();
  }, []);

  const chargeMatches = async () => {
    const { data } = await reqWorldApi.get('/matches');
    setMatches(data);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Matches matches={matches} title={'Historial de Partidos'} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color="#400219"
          title="Go to Home"
          onPress={() => navigation.navigate('Categories')}
        />
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 12,
    alignItems: 'center',
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
