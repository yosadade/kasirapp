import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors, fonts} from '../../../utils';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? (
        <MaterialIcons name="home" size={24} color="#222222" />
      ) : (
        <MaterialIcons name="home" size={24} color="#C7D0EB" />
      );
    case 'Orders':
      return focus ? (
        <MaterialCommunityIcons name="cart" size={24} color="#222222" />
      ) : (
        <MaterialCommunityIcons name="cart" size={24} color="#C7D0EB" />
      );
    case 'History':
      return focus ? (
        <MaterialCommunityIcons name="cash" size={24} color="#222222" />
      ) : (
        <MaterialCommunityIcons name="cash" size={24} color="#C7D0EB" />
      );
    case 'Settings':
      return focus ? (
        <MaterialIcons name="dashboard" size={24} color="#222222" />
      ) : (
        <MaterialIcons name="dashboard" size={24} color="#C7D0EB" />
      );
    default:
      break;
  }
  return <MaterialIcons name="fastfood" size={24} color="#222222" />;
};

const ButtomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <View key={index}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.button}>
              <Icon label={label} focus={isFocused} />
              <Text style={styles.title(isFocused)}>{label}</Text>
              {label === 'Orders' && (
                <View style={styles.count}>
                  <Text style={styles.titleCount}>15</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default ButtomNavigator;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: isFocused => ({
    fontSize: 14,
    fontFamily: isFocused ? fonts.primary[600] : fonts.primary.normal,
    color: isFocused ? '#222222' : '#C7D0EB',
  }),
  count: {
    position: 'absolute',
    right: -1,
    top: -5,
    backgroundColor: 'tomato',
    width: 22,
    height: 22,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleCount: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: '#FFFFFF',
  },
});
