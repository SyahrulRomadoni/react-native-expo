import { Feather } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  Box,
  Button,
  FormControl,
  HStack,
  NativeBaseProvider,
  Pressable,
  Text,
  VStack
} from 'native-base';
import React, { useState } from 'react';
import {
  Platform,
  ScrollView,
  Switch,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View
} from 'react-native';

export default function FavoriteSceen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [showPassword, setShowPassword] = useState(true);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const [formData, setFormData] = useState({
    freeText: '',
    email: '',
    password: '',
    number: '',
    comment: '',
    date: '',
    time: '',
    checkBox1: false,
    checkBox2: false,
    switch1: false,
    switch2: false,
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
    <ScrollView contentContainerStyle={{
      paddingTop: 50,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 150,
      backgroundColor: isDark ? '#000' : '#fff'
    }}>

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

      <Text style={{ color: isDark ? '#fff' : '#000' }} fontSize={30} mb={4}>Basic Input</Text>

      <Text style={{ color: isDark ? '#fff' : '#000' }} fontSize={16} mb={4}>Free Text : {formData.freeText}</Text>
      <Text style={{ color: isDark ? '#fff' : '#000' }} fontSize={16} mb={4}>Email : {formData.email}</Text>
      <Text style={{ color: isDark ? '#fff' : '#000' }} fontSize={16} mb={4}>Password : {formData.password}</Text>
      <Text style={{ color: isDark ? '#fff' : '#000' }} fontSize={16} mb={4}>Number : {formData.number}</Text>
      <Text style={{ color: isDark ? '#fff' : '#000' }} fontSize={16} mb={4}>Comment : {formData.comment}</Text>
      <Text style={{ color: isDark ? '#fff' : '#000' }} fontSize={16} mb={4}>Date : {formData.date}</Text>
      <Text style={{ color: isDark ? '#fff' : '#000' }} fontSize={16} mb={4}>Waktu : {formData.time}</Text>
      <Text style={{ color: isDark ? '#fff' : '#000' }} fontSize={16} mb={4}>Check Box 1 : {formData.checkBox1 ? 'true' : 'false'}</Text>
      <Text style={{ color: isDark ? '#fff' : '#000' }} fontSize={16} mb={4}>Check Box 2 : {formData.checkBox2? 'true' : 'false'}</Text>
      <Text style={{ color: isDark ? '#fff' : '#000' }} fontSize={16} mb={4}>Switch 1 : {formData.switch1 ? 'true' : 'false'}</Text>
      <Text style={{ color: isDark ? '#fff' : '#000' }} fontSize={16} mb={4}>Switch 2 : {formData.switch2? 'true' : 'false'}</Text>
      <Text style={{ color: isDark ? '#fff' : '#000' }} fontSize={16} mb={4}>Radio: {formData.radio}</Text>

      <VStack space={4}>

        {/* FreeText */}
        <FormControl.Label>Free Text</FormControl.Label>
        <FormControl>
          <TextInput
            placeholder="Free Text"
            value={formData.freeText}
            onChangeText={(text) => handleChange('freeText', text)}
            style={[
              {
                borderRadius: 12,
                padding: 10,
                borderColor: isDark ? '#888' : '#333',
                backgroundColor: isDark ? '#222' : '#fff',
                color: isDark ? '#fff' : '#000',
              },
            ]}
          />
        </FormControl>

        {/* Email */}
        <FormControl.Label>Email</FormControl.Label>
        <FormControl>
          <TextInput
            placeholder="Masukkan email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={formData.email}
            onChangeText={(text) => handleChange('email', text)}
            style={[
              {
                borderRadius: 12,
                padding: 10,
                borderColor: isDark ? '#888' : '#333',
                backgroundColor: isDark ? '#222' : '#fff',
                color: isDark ? '#fff' : '#000',
              },
            ]}
          />
        </FormControl>
        
        {/* Password */}
        <FormControl.Label>Password</FormControl.Label>
        <FormControl>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 12,
              backgroundColor: isDark ? '#222' : '#fff'
            }}
          >
            <TextInput
              value={formData.password}
              secureTextEntry={showPassword}
              placeholder="Masukkan password"
              onChangeText={(text) => handleChange('password', text)}
              style={{
                flex: 1,
                padding: 10,
                borderRadius: 12,
                backgroundColor: isDark ? '#222' : '#fff',
                color: isDark ? '#fff' : '#000',
              }}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Feather
                name={showPassword ? 'eye-off' : 'eye'}
                size={20}
                color="#333"
                style={{ marginLeft: 10, marginRight: 10 }}
              />
            </TouchableOpacity>
          </View>
        </FormControl>
          
        {/* Number */}
        <FormControl.Label>Number</FormControl.Label>
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
                borderRadius: 12,
                padding: 10,
                borderColor: isDark ? '#888' : '#333',
                backgroundColor: isDark ? '#222' : '#fff',
                color: isDark ? '#fff' : '#000',
              },
            ]}
          />
        </FormControl>

        {/* Textarea */}
        <FormControl.Label>Komentar</FormControl.Label>
        <FormControl>
          <TextInput
            placeholder="Masukkan komentar Anda"
            value={formData.comment}
            onChangeText={(text) => handleChange('comment', text)}
            multiline={true}
            numberOfLines={4}
            style={[
              {
                borderRadius: 12,
                padding: 10,
                borderColor: isDark ? '#888' : '#333',
                backgroundColor: isDark ? '#222' : '#fff',
                color: isDark ? '#fff' : '#000',
                height: 100,
                textAlignVertical: 'top', // penting untuk Android agar teks muncul di atas
              },
            ]}
          />
        </FormControl>

        {/* Date */}
        <FormControl.Label>Tanggal</FormControl.Label>
        <FormControl>
          <Button
            style={[{
              borderRadius: 12
            }]}
            onPress={() => setShowDatePicker(true)}
          >
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
        <FormControl.Label>Waktu</FormControl.Label>
        <FormControl>
          <Button
            style={[{
                borderRadius: 12
              }]}
            onPress={() => setShowTimePicker(true)}
          >
            {formData.time ? formData.time : 'Pilih Waktu'}
          </Button>
          {showTimePicker && (
            <DateTimePicker
              value={formData.time ? new Date(`1970-01-01T${formData.time}:00`) : new Date()}
              mode="time"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={(event, selectedTime) => {
                setShowTimePicker(Platform.OS === 'ios'); // tetap tampil di iOS
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
        <FormControl.Label>Checkbox</FormControl.Label>
        <FormControl>
          <TouchableOpacity 
            onPress={() => setFormData({ ...formData, checkBox1: !formData.checkBox1 })} 
            style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}
          >
            <Feather 
              name={formData.checkBox1 ? 'check-square' : 'square'} 
              size={24} 
              color={formData.checkBox1 ? 'green' : 'gray'} 
              style={{ marginRight: 8 }}
            />
            <Text style={{ color: isDark ? '#fff' : '#000' }}>Checkbox 1</Text>
          </TouchableOpacity>
        </FormControl>

        <FormControl>
          <TouchableOpacity 
            onPress={() => setFormData({ ...formData, checkBox2: !formData.checkBox2 })} 
            style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}
          >
            <Feather 
              name={formData.checkBox2 ? 'check-square' : 'square'} 
              size={24} 
              color={formData.checkBox2 ? 'green' : 'gray'} 
              style={{ marginRight: 8 }}
            />
            <Text style={{ color: isDark ? '#fff' : '#000' }}>Checkbox 2</Text>
          </TouchableOpacity>
        </FormControl>

        {/* Switch */}
        <FormControl.Label>Switch</FormControl.Label>
        <FormControl>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ color: isDark ? '#fff' : '#000', marginRight: 8 }}>Switch 1</Text>
            <Switch 
              value={formData.switch1} 
              onValueChange={() => setFormData({ ...formData, switch1: !formData.switch1 })} 
              thumbColor={formData.switch1 ? 'green' : 'gray'}
            />
          </View>
        </FormControl>

        <FormControl>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ color: isDark ? '#fff' : '#000', marginRight: 8 }}>Switch 2</Text>
            <Switch 
              value={formData.switch2} 
              onValueChange={() => setFormData({ ...formData, switch2: !formData.switch2 })} 
              thumbColor={formData.switch2 ? 'green' : 'gray'}
            />
          </View>
        </FormControl>

        {/* Radio Button */}
        <FormControl.Label>Radio</FormControl.Label>
        <FormControl>
          <HStack space={8} marginBottom={100}>

            <Pressable onPress={() => handleChange('radio', 'radio 1')} flexDirection="row" alignItems="center">
              <Box
                width={6}
                height={6}
                borderRadius={999}
                bg={formData.radio === 'radio 1' ? 'green.500' : 'gray.300'}
                justifyContent="center"
                alignItems="center"
              />
              <Text style={{ color: isDark ? '#fff' : '#000' }} ml={2}>Radio 1</Text>
            </Pressable>

            <Pressable onPress={() => handleChange('radio', 'radio 2')} flexDirection="row" alignItems="center">
              <Box
                width={6}
                height={6}
                borderRadius={999}
                bg={formData.radio === 'radio 2' ? 'green.500' : 'gray.300'}
                justifyContent="center"
                alignItems="center"
              />
              <Text style={{ color: isDark ? '#fff' : '#000' }} ml={2}>Radio 2</Text>
            </Pressable>

          </HStack>
        </FormControl>


      </VStack>

    </ScrollView>
  </NativeBaseProvider>
  );
}