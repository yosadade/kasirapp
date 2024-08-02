import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Gap} from '../../atoms';
import {colors, fonts} from '../../../utils';
import Feather from 'react-native-vector-icons/Feather';

const ModalProcess = ({
  visible,
  onRequestClose,
  onClose,
  onProcess,
  onDelete,
}) => {
  const [data, setData] = useState({
    name: '',
    discount: 0,
  });

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <TouchableOpacity activeOpacity={0.7} onPress={onClose}>
              <Feather name="x-circle" size={23} color={colors.main} />
            </TouchableOpacity>
            <Text style={styles.titleHeader}>Payment - Cash</Text>
            <View />
          </View>
          <View>
            <Gap height={48} />
            <TextInput
              placeholder="Rp. 350.000"
              value={data.name}
              onChange={value => setData({...data, name: value})}
              style={styles.input}
            />
            <Gap height={12} />
            <View style={styles.wrapper}>
              <TouchableOpacity
                style={styles.buttonCash}
                activeOpacity={0.7}
                onPress={onProcess}>
                <Text style={styles.titleButton}>Rp. 350.000</Text>
              </TouchableOpacity>
              <Gap width={6} />
              <TouchableOpacity
                style={styles.buttonCash}
                activeOpacity={0.7}
                onPress={onProcess}>
                <Text style={styles.titleButton}>Rp. 400.000</Text>
              </TouchableOpacity>
            </View>
            <Gap height={40} />
          </View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={onProcess}>
            <Text style={styles.titleButton}>Process</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalProcess;

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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleHeader: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.main,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.main,
    borderRadius: 16,
    width: '100%',
    padding: 14,
  },
  titleButton: {
    fontSize: 16,
    color: '#FAFAFA',
    fontFamily: fonts.primary[600],
  },
  input: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 14,
    borderColor: colors.secondary,
    fontFamily: fonts.primary[400],
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonCash: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.main,
    borderRadius: 16,
    width: '50%',
    padding: 14,
  },
});
