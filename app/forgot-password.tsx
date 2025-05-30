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
    View,
    useColorScheme
} from 'react-native';
import Toast from 'react-native-toast-message';
import { saveToken } from '../utils/tokenStorage';

export default function ForgotPassword() {

    const [formData, setFormData] = useState({
		email: '',
	});
    const [showPassword, setShowPassword] = useState(false);
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    const getBaseURL = () => {
        if (Platform.OS === 'android') {
            return 'http://10.0.2.2:1001';
        }
        return 'http://localhost:1001';
        // return 'https://api.mifc.ismartglobal.id';
    };

    const handleForgotPassword = async () => {
        // Validasi field satu per satu
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
        
        try {
            const response = await fetch(`${getBaseURL()}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: formData.email }),
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

            {/* Logo */}
            <View style={styles.logoWrapper}>
                <View style={[styles.logoBackground, { backgroundColor: isDark ? '#151718' : 'rgb(255, 255, 255)' }]}>
                <Image
                    source={require('@/assets/images/react-logo.png')}
                    style={{ width: 70, height: 70 }}
                    resizeMode="contain"
                />
                </View>
            </View>

            {/* Login View */}
            <View style={[ styles.loginBox, { backgroundColor: isDark ? '#151718' : 'rgb(255, 255, 255)' } ]} >

                {/* Title */}
                <View style={{ alignItems: 'center', marginBottom: 50 }}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }}>Forgot Password</Text>
                </View>

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

                {/* Login action */}
                <Pressable onPress={handleForgotPassword} style={[styles.buttonStyle]}>
                    <Text style={[styles.buttonText]}>Send</Text>
                </Pressable>

                {/* Login page */}
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20, }}>
                    <Text
                        style={{
                            fontSize: 15,
                            color: isDark ? '#bbb' : '#333',
                        }}
                    >
                    Sudah ingat password?{' '}
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
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        borderTopLeftRadius: 80,
        borderTopRightRadius: 0,
        elevation: 5,
    },
    logoWrapper: {
        position: 'absolute',
        top: 120,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoBackground: {
        backgroundColor: 'white',
        padding: 15,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 10,
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
