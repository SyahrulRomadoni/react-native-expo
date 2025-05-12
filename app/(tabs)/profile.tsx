import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
    Alert,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
} from 'react-native';
import { getToken, removeToken } from '../../utils/tokenStorage';

export default function ProfileScreen() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [isEditable, setIsEditable] = useState(false);

  const getBaseURL = () => {
    if (Platform.OS === 'android') {
      return 'http://10.0.2.2:1001';
    }
    return 'http://localhost:1001';
  };

  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const fetchUserData = async () => {
    const token = await getToken();
    if (token) {
      try {
        const response = await fetch(`${getBaseURL()}/api/user/current`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();
        if (result.status === 'success') {
          setFullname(result.data.name);
          setEmail(result.data.email);
          setBirthDate(result.data.birthDate || '');
        }
      } catch {
        Alert.alert('Error', 'Failed to fetch user data.');
      }
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      const token = await getToken();
      const response = await fetch('http://localhost:1001/api/auth/logout', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();
      if (result.status === 'success') {
        await removeToken();
        router.replace('/login');
      } else {
        Alert.alert('Logout Failed', result.message || 'Please check your credentials.');
      }
    } catch {
      Alert.alert('Error', 'Failed to connect to the server.');
    }
  };

  const handlePhoneChange = (text: string) => {
    const cleaned = text.replace(/^\+62/, '0').replace(/-/g, '').replace(/\D/g, '');
    setPhone(cleaned);
  };

  const handleDayChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    const number = parseInt(numericValue, 10);

    if (!isNaN(number) && number <= 31) {
      setDay(numericValue);
    } else if (numericValue === '') {
      setDay('');
    }
  };

  const handleMonthChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    const number = parseInt(numericValue, 10);

    if (!isNaN(number) && number >= 1 && number <= 12) {
      setMonth(numericValue);
    } else if (numericValue === '') {
      setMonth('');
    }
  };

  const handleDateChange = () => {
    if (day && month && year.length === 4) {
      setBirthDate(`${day.padStart(2, '0')}-${month.padStart(2, '0')}-${year}`);
    } else {
      setBirthDate('');
    }
  };

  useEffect(() => {
    handleDateChange();
  }, [day, month, year]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image source={require('@/assets/images/profile.png')} style={styles.image} />
      }
    >
      <ThemedView style={styles.header}>
        <Image source={require('@/assets/images/avatar.jpg')} style={styles.profileImage} />
        <ThemedText type="title">{fullname}</ThemedText>
        <TouchableOpacity onPress={() => setIsEditable(!isEditable)} style={styles.editButton}>
          <Ionicons name={isEditable ? 'close' : 'pencil'} size={24} color={isDark ? '#fff' : '#000'} />
        </TouchableOpacity>
      </ThemedView>

      <Text style={[styles.label, { color: isDark ? '#fff' : '#000' }]}>Full Name</Text>
      <TextInput
        value={fullname}
        onChangeText={setFullname}
        editable={isEditable}
        style={[styles.input, getInputStyle(isDark, isEditable)]}
        placeholder="Full Name"
        placeholderTextColor={isDark ? '#888' : '#aaa'}
      />

      <Text style={[styles.label, { color: isDark ? '#fff' : '#000' }]}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        editable={isEditable}
        autoCapitalize="none"
        style={[styles.input, getInputStyle(isDark, isEditable)]}
        placeholder="Email"
        placeholderTextColor={isDark ? '#888' : '#aaa'}
      />

      <Text style={[styles.label, { color: isDark ? '#fff' : '#000' }]}>Phone</Text>
      <TextInput
        value={phone}
        onChangeText={handlePhoneChange}
        editable={isEditable}
        keyboardType="number-pad"
        maxLength={14}
        style={[styles.input, getInputStyle(isDark, isEditable)]}
        placeholder="Phone Number"
        placeholderTextColor={isDark ? '#888' : '#aaa'}
      />

      <Text style={[styles.label2, { color: isDark ? '#fff' : '#000' }]}>BirthDate</Text>
      <ThemedView style={styles.rows}>
        <TextInput
          value={day}
          onChangeText={handleDayChange}
          editable={isEditable}
          keyboardType="number-pad"
          maxLength={2}
          placeholder="DD"
          style={[styles.input2, getInputStyle(isDark, isEditable)]}
          onBlur={handleDateChange}
        />
        <TextInput
          value={month}
          onChangeText={handleMonthChange}
          editable={isEditable}
          keyboardType="number-pad"
          maxLength={2}
          placeholder="MM"
          style={[styles.input2, getInputStyle(isDark, isEditable)]}
          onBlur={handleDateChange}
        />
        <TextInput
          value={year}
          onChangeText={setYear}
          editable={isEditable}
          keyboardType="number-pad"
          maxLength={4}
          placeholder="YYYY"
          style={[styles.input2, getInputStyle(isDark, isEditable)]}
          onBlur={handleDateChange}
        />
      </ThemedView>

      <ThemedView style={[styles.rows, { marginTop: 60 }]}>
        <TouchableOpacity
          style={[styles.buttonHalf, { backgroundColor: isDark ? '#0ea5e9' : 'rgb(17, 0, 255)' }]}
          onPress={() => Alert.alert('Save', 'Profile saved successfully!')}
        >
          <ThemedText style={styles.buttonText}>Save</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonHalf, { backgroundColor: isDark ? '#f87171' : 'rgb(255, 0, 0)' }]}
          onPress={handleLogout}
        >
          <ThemedText style={styles.buttonText}>Logout</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const getInputStyle = (isDark: boolean, isEditable: boolean) => ({
  borderColor: isDark ? '#888' : '#333',
  backgroundColor: isDark ? '#222' : '#fff',
  color: isDark ? '#fff' : '#000',
  opacity: isEditable ? 1 : 0.5,
});

const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 100,
    marginRight: 20,
  },

  editButton: {
    marginLeft: 10,
  },

  label: {
    fontSize: 16,
    marginBottom: -20,
  },

  label2: {
    fontSize: 16,
    marginBottom: -10,
  },

  input: {
    padding: 15,
    borderRadius: 20,
    borderWidth: 1,
    width: '100%',
    fontSize: 16,
    marginTop: 10,
  },

  input2: {
    padding: 15,
    borderRadius: 20,
    borderWidth: 1,
    fontSize: 16,
    width: '30%',
    maxWidth: 100,
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