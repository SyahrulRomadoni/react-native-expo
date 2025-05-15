import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme
} from 'react-native';

interface LabelCardWithTriggerProps {
  text: string;
  onPress?: () => void;
}

const LabelCardWithTrigger: React.FC<LabelCardWithTriggerProps> = ({
  text,
  onPress,
}) => {

	const colorScheme = useColorScheme();
	const isDark = colorScheme === 'dark';

  return (
    <View style={[
      {
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(130, 239, 84, 0.3)'
      }
    ]}
    >
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={[
          {
            fontSize: 14,
            flex: 1,
            color: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'
          }
        ]}
      >
        {text}
      </Text>
      <TouchableOpacity
        style={[
          {
            borderRadius: 999,
            padding: 5,
            marginLeft: 8,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.08)',
          },
        ]}
        onPress={onPress}
      >
        <Feather
          name="chevron-right"
          size={15}
          color={isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default LabelCardWithTrigger;
