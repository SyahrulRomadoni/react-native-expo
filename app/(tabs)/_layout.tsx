import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';
import React from 'react';
import TabBar from '../../components/TabBar';

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
          name="promo"
          options={{
              title: "Promo"
          }}
      />
      <Tabs.Screen
          name="wishlist"
          options={{
              title: "Wishlist"
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
