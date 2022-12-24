import { StyleSheet, Text, TextInput, View } from 'react-native';

import React from 'react';

const Input = ({
  editable,
  children,
  value,
  onChangeText,
  onFocus,
  onBlur,
  maxLength,
  placeholder,
  placeholderTextColor,
  keyboardType,
  hasError,
  error,
  touched,
  ...props
}) => {
  return (
    <View>
      <Label {...props} />
      <TextInput
        {...props}
        editable={editable}
        children={children}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        maxLength={maxLength}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
        hasError={hasError}
        error={error}
        touched={touched}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
