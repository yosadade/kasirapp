import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Gap, List, ModalLogout} from '../../components';
import {colors, fonts} from '../../utils';

const Settings = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);

  const onHandleShowModal = () => {
    setIsVisible(true);
  };

  const onHandleLogout = () => {
    setIsVisible(true);
    navigation.replace('Login');
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>History Orders</Text>
        </View>
        {/* <Gap height={12} /> */}
        <View style={styles.content}>
          <List type="setting" label="Produk" value="Pengaturan produk" />
          <List
            type="setting"
            label="Sinkronisasi Data"
            value="Sinkronisasi data terbaru dari server"
          />
          <List
            type="setting"
            label="Logout"
            value="Keluar dari aplikasi"
            onPress={onHandleShowModal}
          />
        </View>
      </View>
      <ModalLogout
        visible={isVisible}
        onCancel={() => setIsVisible(false)}
        onDone={onHandleLogout}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
    backgroundColor: '#FFFFFF',
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
  content: {
    paddingHorizontal: 24,
  },
});

export default Settings;
