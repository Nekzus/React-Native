import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { GroupItem, LoaderList } from '../../components';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { selectGroup } from '../../store/actions';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { useTheme } from '@react-navigation/native';

const Groups = ({ navigation }) => {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.group.groups);

  const { colors, fonts } = useTheme();
  const { landscape } = useDeviceOrientation();
  const numColumns = landscape ? 4 : 2;

  const onSelected = (item) => {
    dispatch(selectGroup(item.letter));
    navigation.navigate('Equipos-Paises', { letter: item.letter });
  };

  const renderItem = ({ item }) => <GroupItem item={item} onSelected={onSelected} />;

  const loaderList = () => <LoaderList />;

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
                fontFamily: fonts.title,
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
  container: {
    flex: 1,
  },
  textList: {
    textAlign: 'center',
    fontSize: 30,
    marginVertical: 10,
  },
  logoContainer: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  containerFlat: {
    flex: 2,
  },
  imageLogo: {
    resizeMode: 'contain',
  },
});
