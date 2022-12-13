import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';

import React from 'react';
import { countriesValidate } from '../helpers/middleware-countries';
import { useTheme } from '@react-navigation/native';

const TeamItem = ({ item, onSelected }) => {
  const { colors, fonts } = useTheme();
  const { width } = useWindowDimensions();
  const itemCountry = countriesValidate(item.country);
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => onSelected(item)}>
        <View style={{ ...styles.button, backgroundColor: colors.card, width: width * 0.75 }}>
          <Image source={{ uri: itemCountry.flag }} style={styles.imageFlag} />
          <Text
            style={{
              ...styles.buttonText,
              color: colors.text,
              fontFamily: fonts.content,
              fontSize: width >= 360 ? 15 : 13,
            }}>
            {itemCountry.name} - ({item.country})
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TeamItem;

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  button: {
    flexDirection: 'row',
    maxWidth: 300,
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
    fontSize: 15,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginVertical: 15,
    color: 'white',
  },
  imageFlag: {
    height: 20,
    width: 30,
    marginHorizontal: 15,
    borderRadius: 5,
  },
});
