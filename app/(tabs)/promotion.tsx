import React from 'react';
import { ScrollView, StyleSheet, Text, useColorScheme } from 'react-native';

export default function PromotionScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDark ? '#151718' : '#fff' }]}>
      
      <Text style={{ fontSize: 20, color: isDark ? '#fff' : '#000' }}>
        Promotion
      </Text>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  placeholderContent: {
    height: 300,
    margin: 20,
    backgroundColor: '#ccc',
    borderRadius: 10,
  },

});