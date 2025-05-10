import DateTimePicker from '@react-native-community/datetimepicker';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  HStack,
  NativeBaseProvider,
  Text,
  VStack
} from 'native-base';
import React, { useState } from 'react';
import {
  Platform,
  ScrollView,
  TextInput,
  useColorScheme,
} from 'react-native';

export default function FavoriteSceen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const [formData, setFormData] = useState({
    freeText: '',
    email: '',
    password: '',
    number: '',
    date: '',
    time: '',
    checkBox1: '',
    checkBox2: '',
    radio: '',
  });
  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
  <NativeBaseProvider>
    {/* Scroll View Vertical */}
    <ScrollView contentContainerStyle={{ padding: 20 }}>

      <Text style={{ color: isDark ? '#fff' : '#000' }} fontSize={30}>Basic Grid</Text>
      
      {/* Card */}
      <Box height={100} bg="red.400" mb={4} p={4}>
        <Text color="rgb(10, 10, 10)">Text</Text>
      </Box>

      {/* Row of 3 columns (4/12 each) */}
      <HStack space={4} mb={4} flexWrap="wrap">
        <Box flex={1} maxWidth="32%" bg="primary.400" height={120} borderRadius="md" p={4}>
          <Text color="rgb(10, 10, 10)">Card 1</Text>
        </Box>
        <Box flex={1} maxWidth="32%" bg="secondary.400" height={150} borderRadius="md" p={4}>
          <Text color="rgb(10, 10, 10)">Card 2</Text>
        </Box>
        <Box flex={1} maxWidth="32%" bg="emerald.500" height={180} borderRadius="md" p={4}>
          <Text color="rgb(10, 10, 10)">Card 3</Text>
        </Box>
      </HStack>

      {/* Scrol View Horizontal */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
      <HStack space={4}>
        <Box width={100} bg="primary.400" height={120} borderRadius="md" p={4}>
          <Text color="rgb(10, 10, 10)">Card 1</Text>
        </Box>
          <Box width={200} bg="secondary.400" height={150} borderRadius="md" p={4}>
        <Text color="rgb(10, 10, 10)">Card 2</Text>
          </Box>
        <Box width={300} bg="emerald.500" height={180} borderRadius="md" p={4}>
          <Text color="rgb(10, 10, 10)">Card 3</Text>
        </Box>
      </HStack>
      </ScrollView>

      {/* Another row */}
      <HStack space={4} flexWrap="wrap">
        <Box flex={1} maxWidth="50%" bg="pink.400" height={100} borderRadius="md" p={4}>
          <Text color="rgb(10, 10, 10)">Card 4</Text>
        </Box>
        <Box flex={1} maxWidth="50%" bg="cyan.400" height={150} borderRadius="md" p={4}>
          <Text color="rgb(10, 10, 10)">Card 5</Text>
        </Box>
      </HStack>

      <Box height={100} bg="red.400" mb={4} p={4} mt={4}>
        <Text color="rgb(10, 10, 10)">Text</Text>
      </Box>

      {/* Card */}
      <Box height={100} bg="red.400" mb={4} p={4} mt={4}>
        <Text color="rgb(10, 10, 10)">Text</Text>
      </Box>

      <Text style={{ color: isDark ? '#fff' : '#000' }} fontSize={30} mb={4}>Basic Input</Text>

      <Text style={{ color: isDark ? '#fff' : '#000' }} fontSize={16} mb={4}>Free Text : {formData.freeText}</Text>
      <Text style={{ color: isDark ? '#fff' : '#000' }} fontSize={16} mb={4}>Email : {formData.email}</Text>
      <Text style={{ color: isDark ? '#fff' : '#000' }} fontSize={16} mb={4}>Password : {formData.password}</Text>
      <Text style={{ color: isDark ? '#fff' : '#000' }} fontSize={16} mb={4}>Number : {formData.number}</Text>
      <Text style={{ color: isDark ? '#fff' : '#000' }} fontSize={16} mb={4}>Date : {formData.date}</Text>
      <Text style={{ color: isDark ? '#fff' : '#000' }} fontSize={16} mb={4}>Waktu : {formData.time}</Text>
      <Text style={{ color: isDark ? '#fff' : '#000' }} fontSize={16} mb={4}>Check Box 1 : {formData.checkBox1}</Text>
      <Text style={{ color: isDark ? '#fff' : '#000' }} fontSize={16} mb={4}>Radio: {formData.radio}</Text>

      <VStack space={4}>

        {/* FreeText */}
        <FormControl>
          <TextInput
            placeholder="Free Text"
            value={formData.freeText}
            onChangeText={(text) => handleChange('freeText', text)}
            style={[
              {
                borderColor: isDark ? '#888' : '#333',
                backgroundColor: isDark ? '#222' : '#fff',
                color: isDark ? '#fff' : '#000',
              },
            ]}
          />
        </FormControl>

        {/* Email */}
        <FormControl>
          <TextInput
            placeholder="Masukkan email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={formData.email}
            onChangeText={(text) => handleChange('email', text)}
            style={[
              {
                borderColor: isDark ? '#888' : '#333',
                backgroundColor: isDark ? '#222' : '#fff',
                color: isDark ? '#fff' : '#000',
              },
            ]}
          />
        </FormControl>
        
        {/* Password */}
        <FormControl>
          <TextInput
            value={formData.password}
            secureTextEntry={true}
            placeholder="Masukkan password"
            onChangeText={(text) => handleChange('password', text)}
            style={[
              {
                borderColor: isDark ? '#888' : '#333',
                backgroundColor: isDark ? '#222' : '#fff',
                color: isDark ? '#fff' : '#000',
              },
            ]}
          />
        </FormControl>
          
        {/* Number */}
        <FormControl>
          <TextInput
            placeholder="Number"
            value={formData.number}
            keyboardType="number-pad"
            maxLength={14}
            onChangeText={(text) => {
              let modifiedText = text.replace(/^(\+62|62)/, '0');
              modifiedText = modifiedText.replace(/[^0-9]/g, '');
              modifiedText = modifiedText.replace('-', '');
              handleChange('number', modifiedText);
            }}
            style={[
              {
                borderColor: isDark ? '#888' : '#333',
                backgroundColor: isDark ? '#222' : '#fff',
                color: isDark ? '#fff' : '#000',
              },
            ]}
          />
        </FormControl>

        {/* Date */}
        <FormControl>
          <FormControl.Label>Tanggal</FormControl.Label>
          <Button onPress={() => setShowDatePicker(true)}>
            {formData.date ? formData.date : 'Pilih Tanggal'}
          </Button>
          {showDatePicker && (
            <DateTimePicker
              value={formData.date ? new Date(formData.date) : new Date()}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={(event, selectedDate) => {
                setShowDatePicker(Platform.OS === 'ios'); // untuk iOS tetap tampil, Android tutup
                if (selectedDate) {
                  const formatted = selectedDate.toISOString().split('T')[0];
                  handleChange('date', formatted);
                }
              }}
            />
          )}
        </FormControl>

        {/* Time */}
        <FormControl>
          <FormControl.Label>Waktu</FormControl.Label>
          <Button onPress={() => setShowTimePicker(true)}>
            {formData.time ? formData.time : 'Pilih Waktu'}
          </Button>
          {showTimePicker && (
            <DateTimePicker
              value={new Date()}
              mode="time"
              is24Hour={true}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={(event, selectedTime) => {
                setShowTimePicker(Platform.OS === 'ios');
                if (selectedTime) {
                  const hours = selectedTime.getHours().toString().padStart(2, '0');
                  const minutes = selectedTime.getMinutes().toString().padStart(2, '0');
                  const formattedTime = `${hours}:${minutes}`;
                  handleChange('time', formattedTime);
                }
              }}
            />
          )}
        </FormControl>

        {/* Check Box */}
        <FormControl>
          <Checkbox
            value="yes"
            isChecked={formData.checkBox1 === 'yes'}
            onChange={(isChecked) => handleChange('checkBox1', isChecked ? 'yes' : 'no')}
          >
            I agree to the terms and conditions
          </Checkbox>
        </FormControl>

        {/* Radio Button */}
        <FormControl>
          <FormControl.Label>Choose Option</FormControl.Label>
          <HStack space={4} marginBottom={100}>
            <Button
              onPress={() => handleChange('radio', 'option1')}
              bg={formData.radio === 'option1' ? 'blue.500' : 'gray.300'} // Warna latar belakang saat dipilih
              _text={{ color: formData.radio === 'option1' ? 'white' : 'black' }} // Warna teks saat dipilih
            >
              Option 1
            </Button>
            <Button
              onPress={() => handleChange('radio', 'option2')}
              bg={formData.radio === 'option2' ? 'blue.500' : 'gray.300'} // Warna latar belakang saat dipilih
              _text={{ color: formData.radio === 'option2' ? 'white' : 'black' }} // Warna teks saat dipilih
            >
              Option 2
            </Button>
          </HStack>
        </FormControl>

      </VStack>

    </ScrollView>
  </NativeBaseProvider>
  );
}
