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

import { reqWorldApi } from '../../api/regWorldCup';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { useTheme } from '@react-navigation/native';

const Groups = ({ navigation }) => {
  const { colors } = useTheme();
  const { landscape } = useDeviceOrientation();
  const numColumns = landscape ? 4 : 2;
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    chargeGroups();
  }, []);

  const chargeGroups = async () => {
    const resp = await reqWorldApi.get('/teams');
    setGroups(resp.data.groups);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Equipos-Paises', { letter: item.letter })}>
          <View style={{ ...styles.button, backgroundColor: colors.card }}>
            <Text style={{ ...styles.buttonText, color: colors.text }}>Grupo {item.letter}</Text>
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
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/logo.png')}
          style={{ ...styles.imageLogo, height: landscape ? 120 : 250 }}
        />
      </View>
      <View style={styles.containerFlat}>
        <FlatList
          key={landscape ? 'h' : 'v'}
          data={groups}
          ListHeaderComponent={() => (
            <Text
              style={{
                ...styles.textList,
                color: colors.text,
              }}>
              Grupos
            </Text>
          )}
          keyExtractor={(item, index) => index.toString()}
          listKey={(item, index) => index.toString()}
          renderItem={renderItem}
          ListEmptyComponent={loaderList}
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          numColumns={numColumns}
        />
      </View>
    </View>
  );
};

export default Groups;

const styles = StyleSheet.create({
  containerLoader: {
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  button: {
    width: 150,
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
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: 15,
  },
  textList: {
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    fontSize: 30,
    marginVertical: 20,
  },
  logoContainer: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerFlat: {
    flex: 2,
  },
  imageLogo: {
    resizeMode: 'contain',
  },
});