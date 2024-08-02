import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {colors, fonts} from '../../utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CardOrder, PaymentProcess} from '../../components';

const products = [
  {
    id: 1,
    name: 'Nasi Goreng Udang',
    price: '13.000',
    type: 'Food',
    quantity: 0,
  },
  {id: 2, name: 'Nasi Goreng Sapi', price: '19.000', type: 'Food', quantity: 1},
  {id: 3, name: 'Capcay', price: '12.000', type: 'Food', quantity: 2},
  {id: 4, name: 'Kwetiau Goreng', price: '14.000', type: 'Food', quantity: 0},
  {id: 5, name: 'Kwetiau Basah', price: '14.000', type: 'Food', quantity: 1},
  {id: 6, name: 'Es Teh', price: '3.000', type: 'Drink', quantity: 0},
  {id: 7, name: 'Es Jeruk', price: '4.000', type: 'Drink', quantity: 0},
  {id: 8, name: 'Teh Panas', price: '3.000', type: 'Drink', quantity: 1},
  {id: 9, name: 'Jeruk Panas', price: '3.000', type: 'Drink', quantity: 0},
  {id: 10, name: 'Air Mineral', price: '3.500', type: 'Drink', quantity: 0},
  {id: 11, name: 'Kerupuk Udang', price: '2.000', type: 'Snack', quantity: 0},
  {id: 12, name: 'Kerupuk Rambak', price: '2.000', type: 'Snack', quantity: 0},
  {id: 13, name: 'Tahu Baks', price: '2.500', type: 'Snack', quantity: 0},
];

const Orders = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
            <MaterialCommunityIcons
              name="keyboard-backspace"
              size={23}
              color={colors.main}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Orders</Text>
          <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
            <MaterialCommunityIcons
              name="trash-can-outline"
              size={23}
              color={colors.main}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={item => item.id.toString()}
          columnWrapperStyle={styles.wrappetColumnFlatlist}
          style={styles.wrapperFlatlist}
          numColumns={2}
          renderItem={({item}) => <CardOrder />}
        />
        <PaymentProcess />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 24,
    paddingBottom: 0,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.primary[700],
    color: colors.main,
    textAlign: 'center',
  },
  header: {
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapperFlatlist: {
    paddingHorizontal: 24,
  },
});

export default Orders;
