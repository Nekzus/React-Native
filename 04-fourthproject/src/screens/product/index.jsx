import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Matches from '../../components/Matches';
import Moment from 'moment';
import { reqWorldApi } from '../../api/regWorldCup';

const Product = () => {
  const [matches, setMatches] = useState([]);
  Moment.locale('es-mx');
  useEffect(() => {
    chargeMatches();
  }, []);

  const chargeMatches = async () => {
    const { data } = await reqWorldApi.get('/matches');
    setMatches(data);
  };

  const renderItem = ({ home_team, away_team, datetime, id }) => {
    return <Matches key={id} home={home_team} away={away_team} date={datetime} />;
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.container}>{matches.map(renderItem)}</View>
      </View>
    </ScrollView>
  );
};

export default Product;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  container: {
    alignItems: 'center',
    padding: 5,
  },
});
