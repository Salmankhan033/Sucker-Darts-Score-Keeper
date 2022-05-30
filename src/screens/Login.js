import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import * as Colors from '../constant/colors.js';
import * as Typography from '../constant/typography';
import Headers from '../components/Headers';
import Input from '../components/Input';
import Button from '../components/Button';

import CustomText from '../components/CustomText.js';

const Login = () => {
  return (
    <View style={styles.container}>
      <Headers />
      <View style={styles.input}>
        <CustomText size={30} title={'Enter Your Code '} style={styles.text} />

        <Input />
      </View>

      <View style={styles.btn}>
        <Button title={'Confirm'} onPress={() => alert('click')} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF00',
  },
  text: {
    textAlign: 'center',
  },
  input: {
    height: hp('35%'),
    justifyContent: 'space-around',
  },
  btn: {
    height: hp('10%'),
    justifyContent: 'flex-end',
  },
});
export default Login;
