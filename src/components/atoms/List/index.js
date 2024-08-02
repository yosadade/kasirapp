import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import Gap from '../Gap';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const List = ({type, label, value, disable, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container(disable, type)}
      activeOpacity={type === 'setting' ? 0.7 : 0.9}
      onPress={onPress}>
      <View>
        <Text style={styles.label(type)}>{label}</Text>
        <Gap height={6} />
        <Text style={styles.value(type)}>{value}</Text>
      </View>
      <View style={styles.icon}>
        {type === 'setting' && (
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color={colors.secondary}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: (disable, type) => ({
    paddingVertical: 12,
    borderBottomWidth: disable ? 0 : 1,
    borderColor: colors.secondary,
    alignItems: 'center',
    flexDirection: 'row',
  }),
  label: type => ({
    fontSize: type === 'setting' ? 16 : 14,
    color: type === 'setting' ? '#222222' : '#8A8A8A',
    fontFamily: type === 'setting' ? fonts.primary[600] : fonts.primary.normal,
  }),
  value: type => ({
    fontSize: 14,
    color: type === 'setting' ? '#8A8A8A' : '#222222',
    fontFamily: type === 'setting' ? fonts.primary.normal : fonts.primary[600],
  }),
  icon: {
    marginLeft: 'auto',
  },
});
