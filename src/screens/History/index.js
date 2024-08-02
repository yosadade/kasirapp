import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {CardHistoryOrder, Gap} from '../../components';

const DATA_HISTORY_ORDER = [
  {
    id: 1254,
    date: 'Rabu, 20 Juli 2024',
    paymentMethod: 'cash',
    subTotalPrice: 100000,
    items: [
      {
        id: 1,
        name: 'Nasi Bakar Pedas',
        quantity: 2,
        price: 15000,
        totalPrice: 30000,
      },
      {
        id: 2,
        name: 'Nasi Bakar Cumi',
        quantity: 1,
        price: 17000,
        totalPrice: 17000,
      },
      {
        id: 3,
        name: 'Gorengan',
        quantity: 7,
        price: 1000,
        totalPrice: 7000,
      },
      {
        id: 4,
        name: 'Sate Telur Puyuh',
        quantity: 2,
        price: 3000,
        totalPrice: 6000,
      },
      {
        id: 5,
        name: 'Sate Usus',
        quantity: 2,
        price: 2000,
        totalPrice: 4000,
      },
      {
        id: 6,
        name: 'Es Teh',
        quantity: 1,
        price: 3500,
        totalPrice: 3500,
      },
      {
        id: 7,
        name: 'Es Jeruk',
        quantity: 1,
        price: 4000,
        totalPrice: 4000,
      },
    ],
  },
  {
    id: 1255,
    date: 'Rabu, 20 Juli 2024',
    paymentMethod: 'cash',
    subTotalPrice: 100000,
    items: [
      {
        id: 1,
        name: 'Nasi Bakar Pedas',
        quantity: 2,
        price: 15000,
        totalPrice: 30000,
      },
      {
        id: 2,
        name: 'Nasi Bakar Cumi',
        quantity: 1,
        price: 17000,
        totalPrice: 17000,
      },
      {
        id: 3,
        name: 'Gorengan',
        quantity: 7,
        price: 1000,
        totalPrice: 7000,
      },
      {
        id: 4,
        name: 'Sate Telur Puyuh',
        quantity: 2,
        price: 3000,
        totalPrice: 6000,
      },
      {
        id: 5,
        name: 'Sate Usus',
        quantity: 2,
        price: 2000,
        totalPrice: 4000,
      },
      {
        id: 6,
        name: 'Es Teh',
        quantity: 1,
        price: 3500,
        totalPrice: 3500,
      },
      {
        id: 7,
        name: 'Es Jeruk',
        quantity: 1,
        price: 4000,
        totalPrice: 4000,
      },
    ],
  },
  {
    id: 1256,
    date: 'Rabu, 20 Juli 2024',
    paymentMethod: 'qrcode',
    subTotalPrice: 56000,
    items: [
      {
        id: 1,
        name: 'Nasi Bakar Pedas',
        quantity: 2,
        price: 15000,
        totalPrice: 30000,
      },
      {
        id: 2,
        name: 'Nasi Bakar Cumi',
        quantity: 1,
        price: 17000,
        totalPrice: 17000,
      },
      {
        id: 4,
        name: 'Sate Telur Puyuh',
        quantity: 2,
        price: 3000,
        totalPrice: 6000,
      },
      {
        id: 5,
        name: 'Sate Usus',
        quantity: 2,
        price: 2000,
        totalPrice: 4000,
      },
      {
        id: 6,
        name: 'Es Teh',
        quantity: 1,
        price: 3500,
        totalPrice: 3500,
      },
      {
        id: 7,
        name: 'Es Jeruk',
        quantity: 1,
        price: 4000,
        totalPrice: 4000,
      },
    ],
  },
];

const History = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>History Orders</Text>
      </View>
      <Gap height={12} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA_HISTORY_ORDER.reverse()}
        keyExtractor={item => item.id.toString()}
        columnWrapperStyle={styles.wrappetColumnFlatlist}
        style={styles.wrapperFlatlist}
        numColumns={2}
        renderItem={({item}) => (
          <CardHistoryOrder
            id={item.id}
            totalItem={item.items.length}
            subTotalPrice={item.subTotalPrice}
            paymentMethod={item.paymentMethod}
            date={item.date}
            items={item.items}
          />
        )}
      />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.primary[700],
    color: colors.main,
    textAlign: 'center',
  },
  wrapperFlatlist: {
    paddingHorizontal: 24,
  },
});
