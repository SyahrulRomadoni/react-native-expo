// LabelText.tsx
import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  useColorScheme
} from 'react-native';

interface LabelTextProps {
  text: string;
  style?: TextStyle;
  containerStyle?: ViewStyle;
}

const LabelText: React.FC<LabelTextProps> = ({
  text,
  style,
  containerStyle,
}) => {

	const colorScheme = useColorScheme();
	const isDark = colorScheme === 'dark';

  return (
    <View style={containerStyle}>
      <Text
        style={[
          {
            marginHorizontal: 10,
            fontWeight: 'bold',
            fontSize: 20,
            color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
          },
          style,
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default LabelText;
