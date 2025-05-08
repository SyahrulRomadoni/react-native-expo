// utils/tokenStorage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

// Simpan token
export const saveToken = async (token: string) => {
  if (Platform.OS === 'web') {
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem('token', token);
    }
  } else {
    await AsyncStorage.setItem('token', token);
  }
};

// Ambil token
export const getToken = async (): Promise<string | null> => {
  if (Platform.OS === 'web') {
    if (typeof window !== 'undefined') {
      return window.sessionStorage.getItem('token');
    }
    return null;
  } else {
    return await AsyncStorage.getItem('token');
  }
};

// Hapus token
export const removeToken = async () => {
  if (Platform.OS === 'web') {
    if (typeof window !== 'undefined') {
      window.sessionStorage.removeItem('token');
    }
  } else {
    await AsyncStorage.removeItem('token');
  }
};
