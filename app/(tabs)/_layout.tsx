import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';
import React from 'react';
import { TabBar } from '../../components/custome';

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			tabBar={props=> <TabBar {...props} />}
			screenOptions={{
			headerShown: false,
		}}>

			<Tabs.Screen
				name="index"
				options={{
					title: "Beranda",
				}}
			/>

			<Tabs.Screen
				name="promotion"
				options={{
					title: "Promotion"
				}}
			/>

			<Tabs.Screen
				name="favorite"
				options={{
					title: "Favorite"
				}}
			/>

			<Tabs.Screen
				name="user"
				options={{
					title: "Users"
				}}
			/>
			
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile"
				}}
			/>

		</Tabs>
	);
}