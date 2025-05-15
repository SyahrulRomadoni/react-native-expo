import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  useColorScheme
} from 'react-native';

interface LabelCardProps {
  text: string;
}

const LabelCard: React.FC<LabelCardProps> = ({
  text,
}) => {

	const colorScheme = useColorScheme();
	const isDark = colorScheme === 'dark';

  return (
    <View style={[{
      padding: 10,
      marginHorizontal: 10,
      marginVertical: 5,
      borderRadius: 10,
      backgroundColor: 'rgba(130, 239, 84, 0.3)',
    }]}>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{ color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default LabelCard;
