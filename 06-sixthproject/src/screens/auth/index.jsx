import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { signIn, signUp } from '../../store/actions';

import { useDispatch } from 'react-redux';
import { useTheme } from '@react-navigation/native';

const Auth = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { colors, fonts } = useTheme();
  const [isLogin, setIsLogin] = useState(true);
  const title = isLogin ? 'Login' : 'Registro';
  const message = isLogin ? 'No tienes cuenta?' : 'Ya tienes una cuenta?';
  const messageAction = isLogin ? 'Login' : 'Registro';

  const onHandlerSubmit = () => {
    dispatch(isLogin ? signIn(email, password) : signUp(email, password));
  };
  return (
    <KeyboardAvoidingView style={styles.keyboardContainer} behavior="height" enabled>
      <View
        style={{
          ...styles.container,
          borderColor: colors.border,
          backgroundColor: colors.notification,
        }}>
        <Text style={{ ...styles.title, fontFamily: fonts.title, color: colors.text }}>
          {title}
        </Text>
        <Text style={{ ...styles.label, fontFamily: fonts.content, color: colors.text }}>
          Email
        </Text>
        <TextInput
          style={{
            ...styles.input,
            fontFamily: fonts.content,
            borderBottomColor: colors.border,
            color: colors.text,
          }}
          placeholder="ingresar email"
          placeholderTextColor={colors.primary}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={{ ...styles.label, fontFamily: fonts.content, color: colors.text }}>
          Password
        </Text>
        <TextInput
          style={{
            ...styles.input,
            fontFamily: fonts.content,
            borderBottomColor: colors.border,
            color: colors.text,
          }}
          placeholder="ingresar password"
          placeholderTextColor={colors.primary}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          color={colors.card}
          title={messageAction}
          onPress={onHandlerSubmit}
          disabled={!email || !password}
        />
        <View style={styles.prompt}>
          <TouchableOpacity
            style={{
              ...styles.promptButton,
              backgroundColor: colors.card,
              borderColor: colors.border,
            }}
            onPress={() => setIsLogin(!isLogin)}>
            <Text
              style={{ ...styles.promptMessage, fontFamily: fonts.content, color: colors.text }}>
              {message}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Auth;

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    maxWidth: 400,
    padding: 15,
    margin: 15,
    borderWidth: 1,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 5,
    textAlign: 'center',
  },
  label: {
    fontSize: 15,
    marginVertical: 5,
  },
  input: {
    height: 45,
    borderBottomWidth: 1,
    width: '90%',
    marginBottom: 10,
  },
  promptButton: {
    width: '100%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  prompt: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  promptMessage: {
    fontSize: 14,
  },
});
