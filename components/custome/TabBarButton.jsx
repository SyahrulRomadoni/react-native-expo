import { useEffect } from 'react';
import { Pressable, StyleSheet, useColorScheme } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { icons } from '../../assets/icons';

const TabBarButton = (props) => {
  const { isFocused, label, routeName, color, style, onPress, onLongPress } = props;

  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const textColor = isDark ? '#aaa' : '#737373';
  const backgroundColor = isDark ? '#1c1c1c' : '#FFFFFF';

  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === 'boolean' ? (isFocused ? 1 : 0) : isFocused,
      { duration: 350 }
    );
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.4]);
    const top = interpolate(scale.value, [0, 1], [0, 8]);

    return {
      transform: [{ scale: scaleValue }],
      top,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);

    return {
      opacity,
    };
  });

  return (
    <Pressable
      style={[styles.container, { backgroundColor }, style]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Animated.View style={animatedIconStyle}>
        {icons[routeName]({ color })}
      </Animated.View>

      <Animated.Text style={[{ color: textColor, fontSize: 11 }, animatedTextStyle]}>
        {label}
      </Animated.Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
});

export default TabBarButton;