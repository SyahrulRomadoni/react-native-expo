import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { Image, StyleSheet, View } from 'react-native';

export default function UnauthorizedScreen() {
  return (
    <ThemedView style={styles.container}>

      <Image
        source={require('@/assets/images/401.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Link href="/">
        <View style={styles.textWrapper}>
          <ThemedText type="link" style={styles.text1}>
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
  textWrapper: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 5,
    backgroundColor: '#007AFF',
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
});
