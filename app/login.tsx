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
	View,
	useColorScheme
} from 'react-native';
import Toast from 'react-native-toast-message';
import { saveToken } from '../utils/tokenStorage';

export default function Login() {

	const [formData, setFormData] = useState({
		email: '',
		password: '',
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

  	const handleLogin = async () => {
		if (!formData.email || !formData.password) {
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
					<Text style={{ fontSize: 28, fontWeight: 'bold', color: isDark ? 'rgb(255,255,255)' : 'rgb(0, 0, 0)' }}>Login</Text>
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

				{/* Password */}
				<View style={{ position: 'relative', width: '100%' }}>
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

				{/* Login action */}
				<Pressable onPress={handleLogin} style={[styles.buttonStyle]}>
					<Text style={[styles.buttonText]}>Login</Text>
				</Pressable>

				{/* Register and Forgot Link */}
				<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
					<Text
						style={{
						fontSize: 15,
						color: isDark ? '#bbb' : '#333',
						marginTop: 15,
						}}
					>
						Belum punya akun?{' '}
					</Text>
					<Pressable onPress={() => router.push('/register')}>
						<Text
							style={{
								fontSize: 15,
								color: '#007AFF',
								fontWeight: 'bold',
								marginTop: 15,
							}}
						>
						Daftar
						</Text>
					</Pressable>
				</View>
				<Pressable onPress={() => router.push('/forgot-password')} style={{ alignSelf: 'center', marginTop: 10 }} >
					<Text style={{ fontSize: 15, color: '#007AFF', fontWeight: 'bold' }}>Lupa Password?</Text>
				</Pressable>

				{/* Social Login Buttons */}
				<Text style={{ fontSize: 15, marginTop: 30, marginBottom: 15, color: isDark ? 'rgb(255,255,255)' : 'rgb(0, 0, 0)' }}>Login dengan</Text>
				<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
					<Pressable style={{ marginHorizontal: 10 }}>
						<Image
							source={require('@/assets/images/google-icon.png')}
							style={{ width: 40, height: 40 }}
							resizeMode="contain"
						/>
					</Pressable>
					<Pressable style={{ marginHorizontal: 10 }}>
						<Image
							source={require('@/assets/images/facebook-icon.png')}
							style={{ width: 40, height: 40 }}
							resizeMode="contain"
						/>
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
		height: '70%',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 40,
		borderTopLeftRadius: 80,
		borderTopRightRadius: 0,
		elevation: 5,
	},
	logoWrapper: {
		position: 'absolute',
		top: 80,
		left: 0,
		right: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
	logoBackground: {
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
		shadowOpacity: 0.25,
		elevation: 10,
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
