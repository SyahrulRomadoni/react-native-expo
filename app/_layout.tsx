// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, router, usePathname } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { getToken } from '../utils/tokenStorage';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();

  useEffect(() => {
    const protectedRoutes = ['/', '/promotion', '/favorite', '/profile'];

    if (protectedRoutes.includes(pathname)) {
      const checkLogin = async () => {
        const token = await getToken();
        if (token) {
          try {
            const response = await fetch('http://localhost:1001/api/auth/check-token', {
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
            // Jika sukses, biarkan tetap di path sekarang
          } catch (err) {
            router.replace('/login');
          }
        } else {
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
