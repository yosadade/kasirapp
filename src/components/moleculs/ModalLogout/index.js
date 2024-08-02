import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const ModalLogout = ({visible, onRequestClose, onDone, onCancel}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.question}>
            <MaterialIcons name="question-mark" size={45} color={colors.main} />
          </View>
          <Gap height={24} />
          <Text style={styles.success}>Yakin Keluar aplikasi?</Text>
          <Gap height={72} />
          <View style={styles.wrapperButton}>
            <TouchableOpacity
              style={styles.buttonCancel}
              activeOpacity={0.7}
              onPress={onCancel}>
              <Text style={styles.titleOk}>Cancel</Text>
            </TouchableOpacity>
            <Gap width={6} />
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={onDone}>
              <Text style={styles.titleButton}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalLogout;

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
  question: {
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
  buttonCancel: {
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
  titleOk: {
    fontSize: 14,
    color: '#222222',
    fontFamily: fonts.primary[600],
  },
});
