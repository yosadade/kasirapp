import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {ILFood1} from '../../../assets/ilustrations';
import {Gap} from '../../atoms';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, fonts} from '../../../utils';
import Feather from 'react-native-vector-icons/Feather';

const CardOrder = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperImage}>
        <Image source={ILFood1} style={styles.image} resizeMode="contain" />
      </View>
      <Gap width={12} />
      <View style={styles.wrapperName}>
        <Text style={styles.title}>Nasi Goreng Babat Iso</Text>
        <Gap height={12} />
        <View style={styles.count}>
          <TouchableOpacity style={styles.buttonCount}>
            <MaterialCommunityIcons name="minus" size={16} color="#FFFFFF" />
          </TouchableOpacity>
          <Text>2</Text>
          <TouchableOpacity style={styles.buttonCount}>
            <MaterialCommunityIcons name="plus" size={16} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
      <Gap width={12} />
      <View style={styles.wrapperPrice}>
        <Text style={styles.title}>Rp. 25.000</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {}}
          style={styles.buttonDelete}>
          <Feather name="x-circle" size={23} color={colors.main} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardOrder;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width: '100%',
    marginBottom: 24,
    borderColor: '#C7D0EB',
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  wrapperImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapperName: {
    width: '45%',
    justifyContent: 'space-between',
  },
  wrapperPrice: {
    justifyContent: 'space-between',
  },
  buttonCount: {
    borderRadius: 24,
    height: 24,
    width: 24,
    backgroundColor: colors.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontFamily: fonts.primary.normal,
    color: '#222222',
  },
  buttonDelete: {
    borderRadius: 24,
    height: 24,
    width: 24,
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
