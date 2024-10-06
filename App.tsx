import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import Routes from './src/routes';
import { theme } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  return (
    <>
      <StatusBar style="auto" />

      <ThemeProvider theme={theme}>
        {fontsLoaded ? <Routes /> : <ActivityIndicator />}
      </ThemeProvider>
    </>
  );
}
