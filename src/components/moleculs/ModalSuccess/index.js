import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, fonts} from '../../../utils';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Gap, List} from '../../atoms';

const ModalSuccess = ({visible, onRequestClose, onDone, onPrint}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.checklist}>
            <MaterialCommunityIcons
              name="check-bold"
              size={45}
              color={colors.main}
            />
          </View>
          <Gap height={24} />
          <Text style={styles.success}>Payment Success</Text>
          <Gap height={24} />
          <List label="PAYMENT METHOD" value="Cash" />
          <List label="TOTAL PRICE" value="Rp. 352.000" />
          <List label="PAYMENT" value="Rp. 400.000" />
          <List label="PRICE RETURN" value="Rp. 48.000" />
          <List label="TRANSACTION TIME" value="12 MEI 2024, 11:02" disable />
          <Gap height={24} />
          <View style={styles.wrapperButton}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={onDone}>
              <Text style={styles.titleButton}>Done</Text>
            </TouchableOpacity>
            <Gap width={6} />
            <TouchableOpacity
              style={styles.buttonPrint}
              activeOpacity={0.7}
              onPress={onPrint}>
              <SimpleLineIcons name="printer" size={20} color="#222222" />
              <Gap width={12} />
              <Text style={styles.titleButtonPrint}>Print</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalSuccess;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  content: {
    borderRadius: 24,
    padding: 24,
    backgroundColor: '#FFFFFF',
    width: '80%',
    justifyContent: 'space-between',
  },
  checklist: {
    width: 80,
    height: 80,
    borderRadius: 80,
    alignSelf: 'center',
    backgroundColor: colors.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  success: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    color: '#222222',
    textAlign: 'center',
  },
  wrapperButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.main,
    borderRadius: 16,
    width: '50%',
    padding: 14,
  },
  titleButton: {
    fontSize: 16,
    color: '#FAFAFA',
    fontFamily: fonts.primary[600],
  },
  buttonPrint: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    width: '50%',
    padding: 14,
    borderWidth: 1,
    borderColor: colors.secondary,
    flexDirection: 'row',
  },
  titleButtonPrint: {
    fontSize: 14,
    color: '#222222',
    fontFamily: fonts.primary[600],
  },
});
