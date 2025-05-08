import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import { getToken, removeToken } from '../../utils/tokenStorage';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  useEffect(() => {
    const checkUsers = async () => {
      const token = await getToken();
      if (token) {
        const response = await fetch('http://localhost:1001/api/user/current', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        const result = await response.json();
        if (result.status === 'success') {
          setName(result.data.name);
          setEmail(result.data.email);
          setBirthDate(result.data.birthDate || '');
        }
      }
    };
    checkUsers();
  }, []);

  const handleLogout = async () => {
    try {
      const token = await getToken();
      const response = await fetch('http://localhost:1001/api/auth/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const result = await response.json();
      if (result.status === 'success') {
        await removeToken();
        router.replace('/login');
      } else {
        Alert.alert('Logout Gagal', result.message || 'Cek kembali email dan password');
      }
    } catch (error) {
      Alert.alert('Error', 'Gagal terhubung ke server.');
    }
  };

  const handleDateChange = () => {
    if (day && month && year) {
      setBirthDate(`${day.padStart(2, '0')}-${month.padStart(2, '0')}-${year}`);
    }
  };

  useEffect(() => {
    handleDateChange();
  }, [day, month, year]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/profile.png')}
          style={styles.image}
        />
      }>
        
      <ThemedView style={[styles.titel, { marginBottom: 50 }]}>
        <ThemedText type="title">Profile</ThemedText>
      </ThemedView>

      <ThemedText>Name: {name}</ThemedText>
      <ThemedText>Email: {email}</ThemedText>
      <ThemedText>Phone: {phone}</ThemedText>
      <ThemedText style={[styles.rows, { marginBottom: 50 }]}>Birth Date: {birthDate}</ThemedText>

      {/* Input Fields */}
      <Text style={{ fontSize: 16, marginBottom: -20, color: isDark ? '#fff' : '#000' }}>Full Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        autoCapitalize="none"
        style={[
          styles.input,
          {
            borderColor: isDark ? '#888' : '#333',
            backgroundColor: isDark ? '#222' : '#fff',
            color: isDark ? '#fff' : '#000',
          },
        ]}
        placeholder="Full Name"
        placeholderTextColor={isDark ? '#888' : '#aaa'}
      />

      <Text style={{ fontSize: 16, marginBottom: -20, color: isDark ? '#fff' : '#000' }}>Email</Text>
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
        placeholder="Email"
        placeholderTextColor={isDark ? '#888' : '#aaa'}
      />

      <Text style={{ fontSize: 16, marginBottom: -20, color: isDark ? '#fff' : '#000' }}>Phone</Text>
      <TextInput
        value={phone}
        onChangeText={setPhone}
        autoCapitalize="none"
        maxLength={14}
        keyboardType="number-pad"
        style={[
          styles.input,
          {
            borderColor: isDark ? '#888' : '#333',
            backgroundColor: isDark ? '#222' : '#fff',
            color: isDark ? '#fff' : '#000',
          },
        ]}
        placeholder="Phone Number"
        placeholderTextColor={isDark ? '#888' : '#aaa'}
      />

      <Text style={{ fontSize: 16, marginBottom: -20, color: isDark ? '#fff' : '#000' }}>BirthDate</Text>
      <ThemedView style={styles.rows}>
        <TextInput
          value={day}
          onChangeText={setDay}
          keyboardType="number-pad"
          maxLength={2}
          placeholder="DD"
          style={[
            styles.input,
            {
              borderColor: isDark ? '#888' : '#333',
              backgroundColor: isDark ? '#222' : '#fff',
              color: isDark ? '#fff' : '#000',
            },
          ]}
          onBlur={handleDateChange}
        />
        <TextInput
          value={month}
          onChangeText={setMonth}
          keyboardType="number-pad"
          maxLength={2}
          placeholder="MM"
          style={[
            styles.input,
            {
              borderColor: isDark ? '#888' : '#333',
              backgroundColor: isDark ? '#222' : '#fff',
              color: isDark ? '#fff' : '#000',
            },
          ]}
          onBlur={handleDateChange}
        />
        <TextInput
          value={year}
          onChangeText={setYear}
          keyboardType="number-pad"
          maxLength={4}
          placeholder="YYYY"
          style={[
            styles.input,
            {
              borderColor: isDark ? '#888' : '#333',
              backgroundColor: isDark ? '#222' : '#fff',
              color: isDark ? '#fff' : '#000',
            },
          ]}
          onBlur={handleDateChange}
        />
      </ThemedView>

      <ThemedView style={styles.rows}>
        <TouchableOpacity
          style={[
            styles.buttonHalf,
            { backgroundColor: isDark ? '#0ea5e9' : 'blue' },
          ]}
          onPress={() => Alert.alert('Save', 'Profile saved successfully!')}
        >
          <ThemedText style={styles.buttonText}>Save</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttonHalf,
            { backgroundColor: isDark ? '#f87171' : 'red' },
          ]}
          onPress={handleLogout}
        >
          <ThemedText style={styles.buttonText}>Logout</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({

  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },

  titel: {
    flexDirection: 'row',
    gap: 8,
  },

  input: {
    padding: 15,
    borderRadius: 20,
    borderWidth: 1,
    width: '100%',
    fontSize: 16,
    marginTop: 10,
  },

  image: {
    height: 300,
    width: 300,
    bottom: 0,
    left: 0,
  },

  rows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 100,
  },

  buttonHalf: {
    flex: 1,
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

});
