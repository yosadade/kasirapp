import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Button, Gap, Input} from '../../components';
import {ICMeal} from '../../assets/icons';
import {colors, fonts} from '../../utils';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic
    navigation.replace('Main');
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <MaterialIcons name="fastfood" size={72} color={colors.main} />
        <Gap height={32} />
        <Text style={styles.title}>Cashier POS App</Text>
        <Gap height={6} />
        <Text style={styles.subTitle}>Login for start Your Business</Text>
      </View>
      <Gap height={48} />
      <Input label="Username" placeholder="Masukkan Username" />
      <Gap height={12} />
      <Input label="Password" placeholder="Masukkan Password" secureTextEntry />
      <Gap height={24} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#222222',
    fontFamily: fonts.primary[600],
  },
  subTitle: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: 'grey',
  },
});

export default Login;
