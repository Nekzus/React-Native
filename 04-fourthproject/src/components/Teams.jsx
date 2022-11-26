import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { useDeviceOrientation } from '@react-native-community/hooks';

const Teams = ({ groups }) => {
  const { portrait, landscape } = useDeviceOrientation();
  const [numColums, setNumColums] = useState(2);

  useEffect(() => {
    if (landscape) setNumColums(4);
  }, [landscape]);

  console.log({ numColums });

  console.log({ portrait, landscape });

  const renderItemT = ({ item }) => {
    return (
      <Text style={styles.conText}>
        {item.name} ({item.group_points})
      </Text>
    );
  };

  const renderItemG = ({ item }) => {
    return (
      <View style={styles.table}>
        <View style={styles.header}>
          <Text style={styles.title}>Grupo {item.letter}</Text>
        </View>
        <View style={styles.content}>
          <FlatList
            data={item.teams}
            keyExtractor={(item2, index) => index.toString()}
            listKey={(item2, index) => index.toString()}
            renderItem={renderItemT}
          />
        </View>
      </View>
    );
  };
  if (!groups) {
    return (
      <View styles={styles.containerLoader}>
        <ActivityIndicator color="red" size="large" />
      </View>
    );
  }
  return (
    <FlatList
      style={styles.flatList}
      ListHeaderComponent={() => <Text style={styles.textList}>Grupos y Puntajes</Text>}
      ListHeaderComponentStyle={{ alignItems: 'center', padding: 10, backgroundColor: 'pink' }}
      contentContainerStyle={{ alignItems: 'center', backgroundColor: 'violet' }}
      columnWrapperStyle={{ backgroundColor: 'green' }}
      data={groups}
      keyExtractor={(item, index) => index.toString()}
      listKey={(item, index) => index.toString()}
      renderItem={renderItemG}
      numColumns={numColums}
    />
  );
};

export default Teams;

const styles = StyleSheet.create({
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
  },
  table: {
    width: 200,
    height: 150,
    borderRadius: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  flatList: {
    width: '100%',
    backgroundColor: 'blue',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: 'black',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  content: {
    flex: 5,
    justifyContent: 'space-around',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    backgroundColor: 'white',
    padding: 5,
  },
  conText: {
    fontFamily: 'Lato-Regular',
    fontSize: 17,
    textAlign: 'center',
  },
  textList: {
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    fontSize: 25,
  },
});
