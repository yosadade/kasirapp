import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {ICSearch} from '../../../assets/icons';
import {colors, fonts} from '../../../utils';
import Gap from '../Gap';

const Search = () => {
  return (
    <View style={styles.container}>
      <ICSearch />
      <Gap width={6} />
      <TextInput style={styles.input} placeholder="Search product ..." />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    width: '100%',
    height: 48,
    borderRadius: 8,
    borderColor: colors.secondary,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 14,
    alignItems: 'center',
    fontFamily: fonts.primary[400],
    color: '#ABBBC2',
  },
});
