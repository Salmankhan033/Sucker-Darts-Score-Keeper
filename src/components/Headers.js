import {View, StyleSheet} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
import * as Colors from '../constant/colors';

const Headers = () => {
  return (
    <View style={styles.container}>
      <FastImage style={styles.icon} source={require('../assets/logo.webp')} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: hp('20%'),
    width: wp('100%'),
    alignItems: 'center',

    justifyContent: 'center',
  },
  icon: {
    width: wp('90%'),
    height: hp('15%'),
  },
});
export default Headers;
