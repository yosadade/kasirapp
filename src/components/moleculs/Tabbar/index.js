import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ICMeal} from '../../../assets/icons';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DATA_TABBAR = [
  {
    id: 1,
    title: 'All',
    icon: <MaterialIcons name="fastfood" size={24} color={colors.main} />,
    iconActive: <MaterialIcons name="fastfood" size={24} color="#FFFFFF" />,
  },
  {
    id: 2,
    title: 'Food',
    icon: (
      <MaterialCommunityIcons name="hamburger" size={24} color={colors.main} />
    ),
    iconActive: (
      <MaterialCommunityIcons name="hamburger" size={24} color="#FFFFFF" />
    ),
  },
  {
    id: 3,
    title: 'Drink',
    icon: <MaterialIcons name="local-drink" size={24} color={colors.main} />,
    iconActive: <MaterialIcons name="local-drink" size={24} color="#FFFFFF" />,
  },
  {
    id: 4,
    title: 'Snack',
    icon: (
      <MaterialCommunityIcons
        name="french-fries"
        size={24}
        color={colors.main}
      />
    ),
    iconActive: (
      <MaterialCommunityIcons name="french-fries" size={24} color="#FFFFFF" />
    ),
  },
];

const Tabbar = () => {
  const [selected, setSelected] = useState('All');
  return (
    <View style={styles.container}>
      {DATA_TABBAR.map((item, idx) => {
        return (
          <TouchableOpacity
            style={styles.button(selected, item.title)}
            key={idx}
            onPress={() => {
              setSelected(item.title);
            }}>
            {selected === item.title ? item.iconActive : item.icon}
            <Gap height={6} />
            <Text style={styles.title(selected, item.title)}>{item.title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Tabbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: (selected, title) => ({
    width: 70,
    height: 70,
    borderRadius: 12,
    borderColor: '#C7D0EB',
    backgroundColor: selected === title ? colors.main : '#FFFFFF',
    borderWidth: selected === title ? 0 : 1,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  title: (selected, title) => ({
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: selected === title ? '#FFFFFF' : colors.main,
  }),
});
