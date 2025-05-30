import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View
} from 'react-native';
import Toast from 'react-native-toast-message';
import { saveToken } from '../utils/tokenStorage';

export default function Login() {

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConPassword, setShowConPassword] = useState(false);
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    const getBaseURL = () => {
        if (Platform.OS === 'android') {
            return 'http://10.0.2.2:1001';
        }
        return 'http://localhost:1001';
        // return 'https://api.mifc.ismartglobal.id';
    };

    const handleRegister = async () => {
        // Validasi field satu per satu
        if (!formData.fullname.trim()) {
            Toast.show({
                type: 'error',
                text1: 'Register Gagal',
                text2: 'Full name tidak boleh kosong.',
                text1Style: { fontSize: 17 },
                text2Style: { fontSize: 15 },
            });
            return;
        }
        if (!formData.email.trim()) {
            Toast.show({
                type: 'error',
                text1: 'Register Gagal',
                text2: 'Email tidak boleh kosong.',
                text1Style: { fontSize: 17 },
                text2Style: { fontSize: 15 },
            });
            return;
        }
        if (!formData.phone.trim()) {
            Toast.show({
                type: 'error',
                text1: 'Register Gagal',
                text2: 'Phone tidak boleh kosong.',
                text1Style: { fontSize: 17 },
                text2Style: { fontSize: 15 },
            });
            return;
        }
        if (!formData.password.trim()) {
            Toast.show({
                type: 'error',
                text1: 'Register Gagal',
                text2: 'Password tidak boleh kosong.',
                text1Style: { fontSize: 17 },
                text2Style: { fontSize: 15 },
            });
            return;
        }
        if (!formData.confirmPassword.trim()) {
            Toast.show({
                type: 'error',
                text1: 'Register Gagal',
                text2: 'Confirm Password tidak boleh kosong.',
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
                body: JSON.stringify({ email: formData.email, password: formData.password }),
            });

            const result = await response.json();
            if (result.status === 'success') {
                await saveToken(result.data.token);
                router.replace('/(tabs)');
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'Login Gagal',
                    text2: result.message,
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
        <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
        >
            {/* Toast */}
            <View style={{ zIndex: 2, elevation: 2 }}>
                <Toast />
            </View>

            {/* Background Image */}
            <View style={StyleSheet.absoluteFill}>
                <Image
                    source={require('@/assets/images/background-02.avif')}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                />
            </View>

            {/* Header with Back Button and Title */}
            {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25, marginHorizontal: 20 }}>
                <Pressable onPress={() => router.back()} style={{ padding: 8 }}>
                    <Feather name="arrow-left" size={28} color={isDark ? '#fff' : '#333'} />
                </Pressable>
                <View style={{ flex: 1, alignItems: 'center', marginRight: 36 }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: isDark ? '#fff' : '#333' }}>
                        Register
                    </Text>
                </View>
            </View> */}

            {/* Login View */}
            <View style={[ styles.loginBox, { backgroundColor: isDark ? '#151718' : 'rgb(255, 255, 255)' } ]}>

                {/* Title */}
                <View style={{ alignItems: 'center', marginBottom: 50 }}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: isDark ? 'rgb(255,255,255)' : 'rgb(0, 0, 0)' }}>Register</Text>
                </View>

                {/* Fullname */}
                <TextInput
                    value={formData.fullname}
                    onChangeText={text => setFormData(prev => ({ ...prev, fullname: text }))}
                    autoCapitalize="none"
                    style={[
                        styles.input,
                        {
                            borderColor: '#333',
                            backgroundColor: isDark ? '#333' : 'rgb(255, 255, 255)',
                            color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
                        },
                    ]}
                    placeholder="Full name"
                    placeholderTextColor={isDark ? '#888' : '#aaa'}
                />

                {/* Email */}
                <TextInput
                    value={formData.email}
                    onChangeText={text => setFormData(prev => ({ ...prev, email: text }))}
                    autoCapitalize="none"
                    style={[
                        styles.input,
                        {
                            borderColor: '#333',
                            backgroundColor: isDark ? '#333' : 'rgb(255, 255, 255)',
                            color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
                        },
                    ]}
                    placeholder="Email"
                    placeholderTextColor={isDark ? '#888' : '#aaa'}
                />

                {/* Phone */}
                <TextInput
                    value={formData.phone}
                    onChangeText={text => {
                        // Hapus semua karakter selain angka
                        let numericText = text.replace(/[^0-9]/g, '');

                        // Jika diawali 62 atau +62, ganti dengan 0
                        if (numericText.startsWith('62')) {
                            numericText = '0' + numericText.slice(2);
                        } else if (numericText.startsWith('062')) {
                            numericText = '0' + numericText.slice(3);
                        }
                        setFormData(prev => ({ ...prev, phone: numericText }));
                    }}
                    autoCapitalize="none"
                    keyboardType="numeric"
                    style={[
                        styles.input,
                        {
                            borderColor: '#333',
                            backgroundColor: isDark ? '#333' : 'rgb(255, 255, 255)',
                            color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
                        },
                    ]}
                    placeholder="Phone"
                    placeholderTextColor={isDark ? '#888' : '#aaa'}
                />

                {/* Password */}
                <View style={{ position: 'relative', width: '100%'}}>
                    <TextInput
                        value={formData.password}
                        onChangeText={text => setFormData(prev => ({ ...prev, password: text }))}
                        secureTextEntry={!showPassword}
                        style={[
                            styles.input,
                            {
                                borderColor: '#333',
                                backgroundColor: isDark ? '#333' : 'rgb(255, 255, 255)',
                                color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
                                paddingRight: 70,
                            },
                        ]}
                        placeholder="Password"
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

                {/* Confirm Password */}
                <View style={{ position: 'relative', width: '100%' }}>
                    <TextInput
                        value={formData.confirmPassword}
                        onChangeText={text => setFormData(prev => ({ ...prev, confirmPassword: text }))}
                        secureTextEntry={!showConPassword}
                        style={[
                            styles.input,
                            {
                                borderColor: '#333',
                                backgroundColor: isDark ? '#333' : 'rgb(255, 255, 255)',
                                color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
                                paddingRight: 70,
                            },
                        ]}
                        placeholder="Confirm Password"
                        placeholderTextColor={isDark ? '#888' : '#aaa'}
                    />
                    <Pressable
                        onPress={() => setShowConPassword((prev) => !prev)}
                        style={styles.eyeButton}
                    >
                        <Feather
                            name={showConPassword ? 'eye-off' : 'eye'}
                            size={20}
                            color={isDark ? '#bbb' : '#333'}
                        />
                    </Pressable>
                </View>

                {/* Login action */}
                <Pressable onPress={handleRegister} style={[styles.buttonStyle]}>
                    <Text style={[styles.buttonText]}>Register</Text>
                </Pressable>

                {/* Login page */}
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20, }}>
                    <Text
                        style={{
                            fontSize: 15,
                            color: isDark ? '#bbb' : '#333',
                        }}
                    >
                    Sudah punya akun?{' '}
                    </Text>
                    <Pressable onPress={() => router.push('/login')}>
                        <Text
                            style={{
                            fontSize: 15,
                            color: '#007AFF',
                            fontWeight: 'bold',
                            }}
                        >
                            Login
                        </Text>
                    </Pressable>
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    loginBox: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        borderTopLeftRadius: 80,
        borderTopRightRadius: 0,
        elevation: 5,
    },

    input: {
        width: '100%',
        marginBottom: 25,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 20,
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
        backgroundColor: 'black',
        width: '100%',
        padding: 15,
        borderRadius: 20,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
