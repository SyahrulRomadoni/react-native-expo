import React from 'react';
import { StyleSheet, View, useColorScheme } from 'react-native';
import TabBarButton from './TabBarButton';

const TabBar = ({ state, descriptors, navigation }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const primaryColor = '#0891b2';
  const greyColor = isDark ? '#aaa' : '#737373'; // lebih soft untuk dark mode
  const backgroundColor = isDark ? '#1c1c1c' : 'rgb(255, 255, 255)';
  const shadowColor = isDark ? '#000' : 'black';

  return (
    <View
      style={[
        styles.tabbar,
        {
          backgroundColor,
          shadowColor,
        },
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        if (['_sitemap', '+not-found'].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            style={styles.tabbarItem}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? primaryColor : greyColor}
            label={label}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 25,
    borderCurve: 'continuous',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
});

export default TabBar;
