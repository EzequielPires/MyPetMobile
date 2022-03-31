import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <AuthProvider>
      <Routes />
      <StatusBar style="light" />
    </AuthProvider>
  );
}
