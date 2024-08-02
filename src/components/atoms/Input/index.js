import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const Input = ({label, placeholder, value, onChangeText, secureTextEntry}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.container}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontFamily: fonts.primary[600],
  },
  container: {
    fontSize: 14,
    paddingHorizontal: 12,
    width: '100%',
    color: 'grey',
    borderRadius: 12,
    borderColor: colors.secondary,
    borderWidth: 1,
  },
});
