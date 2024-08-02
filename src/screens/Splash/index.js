import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors, fonts} from '../../utils';
import {Gap} from '../../components';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <MaterialIcons name="fastfood" size={120} color={colors.main} />
      <Gap height={12} />
      <Text style={styles.title}>Cashier POS App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: colors.main,
    fontFamily: fonts.primary[600],
  },
});

export default Splash;
