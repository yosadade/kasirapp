import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils/colors';
import {Gap} from '../../atoms';
import Entypo from 'react-native-vector-icons/Entypo';

const CardMenu = ({onPress, name, type, price, image, quantity}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}>
      <View style={styles.wrapperImage}>
        <Image source={image} style={styles.image} resizeMode="contain" />
      </View>
      {quantity > 0 && (
        <TouchableOpacity style={styles.btnQuantity} activeOpacity={0.7}>
          <Text style={styles.titleBtnQuantity}>{quantity}</Text>
        </TouchableOpacity>
      )}
      <Gap height={12} />
      <Text style={styles.titleName}>{name}</Text>
      <Gap height={3} />
      <Text style={styles.titleType}>{type}</Text>
      <Gap height={3} />
      <View style={styles.wrapperTitle}>
        <Text style={styles.titlePrice}>Rp. {price}</Text>
        <TouchableOpacity style={styles.btnAddCart} activeOpacity={0.7}>
          <Entypo name="plus" size={30} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CardMenu;

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    width: '48%',
    marginBottom: 16,
    borderColor: '#C7D0EB',
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    padding: 12,
  },
  btnAddCart: {
    borderRadius: 8,
    width: 35,
    height: 35,
    backgroundColor: colors.main,
    marginLeft: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnQuantity: {
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.main,
    right: 30,
    top: 6,
    position: 'absolute',
  },
  titleBtnQuantity: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: '#FFFFFF',
  },
  image: {
    width: 105,
    height: 105,
    borderRadius: 105,
  },
  wrapperImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleName: {
    fontSize: 14,
    color: '#222222',
    fontFamily: fonts.primary[600],
  },
  wrapperTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleType: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: '#ABBBC2',
  },
  titlePrice: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: '#222222',
  },
});
