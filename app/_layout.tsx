// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { getToken } from '../utils/tokenStorage';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  // Check login kalo token nya ada maka ga usah login lagi
  useEffect(() => {
    const checkLogin = async () => {

      // Token ke local storage
      // Pakai ini kalo mau developer
      const token = await getToken();
      // Pakai ini kalo mau build ke Android atau IOS
      // const token = await AsyncStorage.getItem('token');
      
      // check token ke local storage
      if (token) {

        // Check token ke server
        const response = await fetch('http://localhost:1001/api/auth/check-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });
        
        // Check response dari server
        const result = await response.json(); 
        if (result.status === 'success') {
          router.replace('/(tabs)');
        } else {
          router.replace('/login');
        }
      } else {
        router.replace('/login');
      }

    };
    checkLogin();
  }, []);
  
  // Load fonts
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }}/> */}
        <Stack.Screen name="(tabs)"/>
        <Stack.Screen name="+not-found"/>
        <Stack.Screen name="401" />
        <Stack.Screen name="403" />
        <Stack.Screen name="500" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
