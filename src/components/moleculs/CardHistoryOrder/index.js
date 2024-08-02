import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Gap} from '../../atoms';
import {colors, fonts} from '../../../utils';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {formatRupiah} from '../../../utils/middleware';

const CardHistoryOrder = ({
  id,
  totalItem,
  paymentMethod,
  subTotalPrice,
  date,
  items,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const onHandleDetail = () => {
    setIsVisible(!isVisible);
    console.log('show detail!');
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.6}
        onPress={onHandleDetail}>
        <View style={styles.wrapperIcon}>
          <MaterialCommunityIcons
            name={paymentMethod === 'qrcode' ? 'qrcode' : 'cash'}
            size={30}
            color="#C7D0EB"
          />
          <Gap width={12} />
          <View>
            <Text style={styles.titleNumber}>#{id}</Text>
            <Gap height={3} />
            <Text style={styles.titleItem}>{totalItem} items</Text>
          </View>
        </View>
        <View style={styles.wrapperIcon}>
          <View>
            <Text style={styles.price}>{formatRupiah(subTotalPrice)}</Text>
            <Gap height={3} />
            <Text style={styles.titleItem}>{date}</Text>
          </View>
          <Gap width={6} />
          <MaterialIcons
            name={isVisible ? 'keyboard-arrow-down' : 'keyboard-arrow-right'}
            size={24}
            color={colors.secondary}
          />
        </View>
      </TouchableOpacity>
      {isVisible && (
        <View style={styles.containerDetail}>
          {items.map((item, idx) => {
            return (
              <View style={styles.content} key={idx}>
                <View>
                  <Text style={styles.titleDetail}>{item.name}</Text>
                  <Gap height={3} />
                  <View style={styles.wrapper}>
                    <Text style={styles.titleDetail}>{item.quantity} x </Text>
                    <Text style={styles.titleDetail}>
                      {formatRupiah(item.price)}
                    </Text>
                  </View>
                </View>
                <Text style={styles.titleDetailQt}>
                  {formatRupiah(item.totalPrice)}
                </Text>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default CardHistoryOrder;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    width: '100%',
    padding: 24,
    marginBottom: 12,
  },
  wrapperIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleNumber: {
    fontSize: 18,
    color: '#222222',
    fontFamily: fonts.primary[600],
  },
  titleItem: {
    fontSize: 16,
    color: '#222222',
    fontFamily: fonts.primary[400],
  },
  price: {
    fontSize: 18,
    marginLeft: 'auto',
    color: '#198f51',
    fontFamily: fonts.primary[600],
  },
  titleDetail: {
    fontSize: 14,
    color: '#222222',
    fontFamily: fonts.primary[400],
  },
  titleDetailQt: {
    fontSize: 14,
    color: '#222222',
    fontFamily: fonts.primary[600],
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerDetail: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
});
