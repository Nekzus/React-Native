import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { useTheme } from '@react-navigation/native';

const GroupItem = ({ item, onSelected }) => {
  const { colors, fonts } = useTheme();
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => onSelected(item)}>
        <View style={{ ...styles.button, backgroundColor: colors.card }}>
          <Text style={{ ...styles.buttonText, color: colors.text, fontFamily: fonts.content }}>
            Grupo {item.letter}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GroupItem;

const styles = StyleSheet.create({
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
    fontSize: 17,
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: 10,
  },
});
