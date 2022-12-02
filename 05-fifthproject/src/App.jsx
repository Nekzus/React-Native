import { ActivityIndicator, StyleSheet, View } from 'react-native';

import AppNavigator from './navigation';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    'Qatar-Bold': require('../assets/fonts/Qatar-Bold.ttf'),
    'Qatar-Heavy': require('../assets/fonts/Qatar-Heavy.ttf'),
  });

  if (!loaded) {
    return (
      <View styles={styles.container}>
        <ActivityIndicator color="#DAC4F7" size="large" />
      </View>
    );
  }
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
