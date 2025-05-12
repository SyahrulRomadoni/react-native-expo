import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, router, usePathname } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import {
  Platform,
  useColorScheme,
} from 'react-native';
import 'react-native-reanimated';
import { getToken } from '../utils/tokenStorage';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();

  const getBaseURL = () => {
    if (Platform.OS === 'android') {
      return 'http://10.0.2.2:1001';
    }
    return 'http://localhost:1001';
  };

  useEffect(() => {
    const protectedRoutes = ['/', '/promotion', '/favorite', '/user', '/profile'];

    if (protectedRoutes.includes(pathname)) {
      const checkLogin = async () => {
        try {
          const token = await getToken();

          if (!token) {
            router.replace('/login');
            return;
          }

          const response = await fetch(`${getBaseURL()}/api/auth/check-token`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
          });

          const result = await response.json();

          if (result.status !== 'success') {
            router.replace('/login');
          }
        } catch (err) {
          router.replace('/login');
        }
      };

      checkLogin();
    }
  }, [pathname]);

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) return null;

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="401" />
        <Stack.Screen name="403" />
        <Stack.Screen name="500" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}