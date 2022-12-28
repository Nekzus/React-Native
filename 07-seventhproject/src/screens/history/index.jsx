import { FlatList, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

const HistoryScreen = ({ navigation }) => {
  const { history } = useSelector((state) => state.locations);
  const { colors, fonts } = useTheme();

  const renderItem = ({ item }) => {
    const { id, lat, lng } = item;
    return (
      <View
        style={{
          backgroundColor: colors.notification,
          width: 465,
          height: 25,
          marginVertical: 2,
          borderRadius: 5,
        }}>
        <Text style={{ fontFamily: fonts.content, color: colors.text, fontSize: 15 }}>
          {`ID: ${id}   lat: ${lat} - lng: ${lng}`}
        </Text>
      </View>
    );
  };
  return (
    <FlatList
      data={history}
      ListHeaderComponent={() => (
        <Text
          style={{
            fontFamily: fonts.title,
            color: colors.text,
            fontSize: 25,
          }}>
          Historial de Ubicaciones
        </Text>
      )}
      ListHeaderComponentStyle={{ paddingVertical: 20 }}
      renderItem={renderItem}
      keyExtractor={(item, idx) => idx}
      style={styles.container}
      contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
    />
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
