// utils/tokenStorage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

// Simpan token
export const saveToken = async (token: string) => {
  try {
    if (Platform.OS === 'web') {
      if (typeof window !== 'undefined') {
        window.sessionStorage.setItem('token', token);
      }
    } else {
      await AsyncStorage.setItem('token', token);
      console.log('Token berhasil disimpan:', token);
    }
  } catch (error) {
    console.error('Error menyimpan token:', error);
  }
};

// Ambil token
export const getToken = async (): Promise<string | null> => {
  try {
    if (Platform.OS === 'web') {
      if (typeof window !== 'undefined') {
        return window.sessionStorage.getItem('token');
      }
      return null;
    } else {
      const token = await AsyncStorage.getItem('token');
      console.log('Token diambil di fungsi get-token:', token);
      return token;
    }
  } catch (error) {
    console.error('Error mengambil token:', error);
    return null;
  }
};

// Hapus token
export const removeToken = async () => {
  try {
    if (Platform.OS === 'web') {
      if (typeof window !== 'undefined') {
        window.sessionStorage.removeItem('token');
      }
    } else {
      const token = await AsyncStorage.getItem('token');
      console.log('Token berhasil ambil di fungsi delete:', token);
      await AsyncStorage.removeItem('token');
      console.log('Token berhasil di Delete:', token);
    }
  } catch (error) {
    console.error('Error mengambil token:', error);
    return null;
  }
};