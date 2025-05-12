import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { Image, StyleSheet, View, useColorScheme } from 'react-native';

export default function UnauthorizedScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <ThemedView style={styles.container}>
      <Image
        source={require('@/assets/images/401.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Link href="/">
        <View
          style={[
            styles.button,
            {
              borderColor: isDark ? '#888' : '#333',
              backgroundColor: isDark ? '#222' : '#fff',
            },
          ]}
        >
          <ThemedText
            type="link"
            style={[
              styles.text1,
              {
                color: isDark ? '#fff' : '#000',
              },
            ]}
          >
            Go Back!
          </ThemedText>
        </View>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  image: {
    width: 320,
    height: 320,
    marginBottom: 100,
  },

  button: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },

  text1: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  
});