import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors, fonts} from '../../../utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Gap} from '../../atoms';
import ModalProcess from '../ModalProcess';
import ModalSuccess from '../ModalSuccess';

const PAYMENT_METHOD = [
  {
    id: 1,
    title: 'Cash',
    icon: 'cash',
  },
  {
    id: 2,
    title: 'QR Pay',
    icon: 'qrcode',
  },
];

const PaymentProcess = () => {
  const [selected, setSelected] = useState({
    paymentMethod: '',
  });
  const [isVisible, setIsVisible] = useState({
    modalProcess: false,
    modalSuccess: false,
  });

  const onHandleCloseModal = () => {
    setIsVisible({
      modalProcess: false,
      modalSuccess: false,
    });
  };

  const handleSelectPaymentMethod = value => {
    setSelected({...selected, paymentMethod: value});
  };

  const onHandleProcess = () => {
    setIsVisible({
      ...isVisible,
      modalProcess: true,
    });
  };

  const onHandlePayment = () => {
    setIsVisible({
      ...isVisible,
      modalProcess: false,
    });
    setTimeout(() => {
      setIsVisible({
        modalProcess: false,
        modalSuccess: true,
      });
    }, 300);
  };

  const onHandleSuccess = () => {
    setIsVisible({
      ...isVisible,
      modalSuccess: false,
    });
  };

  return (
    <>
      <ModalSuccess
        visible={isVisible.modalSuccess}
        onDone={onHandleCloseModal}
        onPrint={onHandleSuccess}
      />
      <ModalProcess
        visible={isVisible.modalProcess}
        onClose={onHandleCloseModal}
        onProcess={onHandlePayment}
      />
      <View style={styles.container}>
        <View style={styles.selectPayment}>
          {PAYMENT_METHOD.map((item, idx) => {
            return (
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.btnPayment(item.title, selected.paymentMethod)}
                key={idx}
                onPress={() => handleSelectPaymentMethod(item.title)}>
                <MaterialCommunityIcons
                  name={item.icon}
                  size={24}
                  color={
                    item.title === selected.paymentMethod
                      ? '#FFFFFF'
                      : colors.main
                  }
                />
                <Text
                  style={styles.titlePayment(
                    item.title,
                    selected.paymentMethod,
                  )}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Gap height={12} />
        <TouchableOpacity
          disabled={!selected.paymentMethod}
          style={styles.btnProcess(selected.paymentMethod)}
          activeOpacity={0.6}
          onPress={onHandleProcess}>
          <Text style={styles.titleProcess}>Rp.318.000</Text>
          <View style={styles.wrapperProcess}>
            <Text style={styles.titleProcess}>Process</Text>
            <View style={styles.icon}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="#FFFFFF"
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default PaymentProcess;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#F5F5F5',
    marginTop: 'auto',
  },
  selectPayment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnPayment: (title, selected) => ({
    width: '49%',
    height: 65,
    borderRadius: 8,
    backgroundColor: title === selected ? colors.main : '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  titlePayment: (title, selected) => ({
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: title === selected ? '#FFFFFF' : colors.main,
  }),
  btnProcess: selected => ({
    backgroundColor: selected ? colors.main : colors.secondary,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 18,
    borderRadius: 8,
  }),
  titleProcess: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: '#FFFFFF',
  },
  wrapperProcess: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    top: 2,
  },
});
