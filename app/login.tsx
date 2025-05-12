import { HelloWave } from '@/components/HelloWave';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';
import Toast from 'react-native-toast-message';
import { saveToken } from '../utils/tokenStorage';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const getBaseURL = () => {
    if (Platform.OS === 'android') {
      return 'http://10.0.2.2:1001';
    }
    return 'http://localhost:1001';
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Login Gagal',
        text2: 'Email dan password tidak boleh kosong.',
        text1Style: { fontSize: 17 },
        text2Style: { fontSize: 15 },
      });
      return;
    }

    try {
      const response = await fetch(`${getBaseURL()}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      if (result.status === 'success') {
        await saveToken(result.data.token);
        router.replace('/(tabs)');
      } else {
        Toast.show({
          type: 'error',
          text1: 'Login Gagal',
          text2: result.message || 'Email atau password salah.',
          text1Style: { fontSize: 17 },
          text2Style: { fontSize: 15 },
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Terjadi Kesalahan',
        text2: 'Gagal terhubung ke server.',
        text1Style: { fontSize: 17 },
        text2Style: { fontSize: 15 },
      });
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#151718' : '#D0D0D0' }]}>
      <Toast />

      <Image
        source={require('@/assets/images/login.png')}
        style={styles.imageStyle}
        resizeMode="contain"
      />

      <Text style={[styles.titleText, { color: isDark ? '#fff' : '#000' }]}>
        Hello <HelloWave />
      </Text>
      
      <Text style={[styles.subText, { color: isDark ? '#ccc' : '#555' }]}>
        Selamat Datang di App XXX
      </Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={[
          styles.input,
          {
            borderColor: isDark ? '#888' : '#333',
            backgroundColor: isDark ? '#222' : '#fff',
            color: isDark ? '#fff' : '#000',
          },
        ]}
        placeholder="Masukkan email"
        placeholderTextColor={isDark ? '#888' : '#aaa'}
      />

      <View style={{ position: 'relative' }}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={[
            styles.input,
            {
              borderColor: isDark ? '#888' : '#333',
              backgroundColor: isDark ? '#222' : '#fff',
              color: isDark ? '#fff' : '#000',
              paddingRight: 70,
            },
          ]}
          placeholder="Masukkan password"
          placeholderTextColor={isDark ? '#888' : '#aaa'}
        />
        <Pressable
          onPress={() => setShowPassword((prev) => !prev)}
          style={styles.eyeButton}
        >
          <Feather
            name={showPassword ? 'eye-off' : 'eye'}
            size={20}
            color={isDark ? '#bbb' : '#333'}
          />
        </Pressable>
      </View>

      <Pressable
        onPress={handleLogin}
        style={[
          styles.buttonStyle,
          {
            backgroundColor: isDark ? '#0ea5e9' : 'rgb(17, 0, 255)'
          },
        ]}
      >
        <Text style={[styles.buttonText, { color: isDark ? 'rgb(0, 0, 0)' : 'rgb(255,255,255)' }]}>
          <Feather name="log-in" size={16} /> Login
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 100,
  },
  
  imageStyle: {
    width: 200,
    height: 200,
    marginBottom: 30,
    alignSelf: 'center',
  },
  
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  subText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  
  input: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 20,
    width: '100%',
    fontSize: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  
  eyeButton: {
    position: 'absolute',
    right: 5,
    top: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  
  buttonStyle: {
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

});