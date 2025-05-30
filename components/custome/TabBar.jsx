import { useEffect, useState } from 'react';
import { Appearance, StyleSheet, View } from 'react-native';
import TabBarButton from './TabBarButton';

const TabBar = ({ state, descriptors, navigation }) => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });

    return () => subscription.remove();
  }, []);

  const isDark = colorScheme === 'dark';
  const primaryColor = '#0891b2';
  const greyColor = isDark ? '#aaa' : '#737373';
  const backgroundColor = isDark ? '#1c1c1c' : '#ffffff';
  const shadowColor = isDark ? '#000' : '#000';

  return (
  <>
    <View style={[styles.cards, { backgroundColor: isDark ? '#151718' : '#fff' }]}>
    </View>

    <View style={[styles.tabbar, { backgroundColor, shadowColor }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel ?? options.title ?? route.name;

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
            key={route.key}
            style={[styles.tabbarItem]}
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
  </>
);

};

const styles = StyleSheet.create({
  cards: {
    height: 70,
    width: '100%',
    backgroundColor: 'blue',
    position: 'absolute',
    bottom: 0,
    marginBottom: -10,
  },
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
    elevation: 3,
  },
  tabbarItem: {
    flex: 1,
    backgroundColor: 'rgb(0,0,0,0)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default TabBar;