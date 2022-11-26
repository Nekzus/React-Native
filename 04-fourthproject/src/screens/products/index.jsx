import { Button, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import Matches from '../../components/Matches';
import Moment from 'moment';
import { ScrollView } from 'react-native-virtualized-view';
import { reqWorldApi } from '../../api/regWorldCup';

const Products = ({ navigation }) => {
  const [matchesTd, setMatchesTd] = useState([]);
  const [matchesTm, setMatchesTm] = useState([]);
  Moment.locale('es-mx');
  useEffect(() => {
    chargeMatchesTd();
    chargeMatchesTm();
  }, []);

  const chargeMatchesTd = async () => {
    const { data } = await reqWorldApi.get('/matches/today');
    setMatchesTd(data);
  };
  const chargeMatchesTm = async () => {
    const { data } = await reqWorldApi.get('/matches/tomorrow');
    setMatchesTm(data);
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.container}>
          <Matches matches={matchesTd} title={'Partidos de Hoy'} />
          <Matches matches={matchesTm} title={'Partidos de Mañana'} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Go to Product" onPress={() => navigation.navigate('Product')} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Products;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'gray',
  },
  container: {
    flex: 8,
    alignItems: 'center',
    padding: 10,
  },
  buttonContainer: {
    flex: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
});
