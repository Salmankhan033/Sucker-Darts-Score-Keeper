import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
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
import ShowAlert from '../components/ShowAlert.js';

const Login = props => {
  const [inputVal, setInputVal] = useState('');
  const changeVal = txt => {
    setInputVal(txt);
  };
  const onPressBtn = () => {
    if (inputVal == 1234) {
      ShowAlert({type: 'success', description: 'Login Successfully'});
      props.navigation.navigate('AddTeamPlayers');
    } else {
      ShowAlert({type: 'error', description: 'Wrong Code'});
    }
  };
  return (
    <View style={styles.container}>
      <Headers />
      <View style={styles.input}>
        <CustomText size={30} title={'Enter Your Code '} style={styles.text} />

        <Input
          title={'Enter Your Code Here'}
          value={inputVal}
          onChangeText={changeVal}
        />
      </View>

      <View style={styles.btn}>
        <Button title={'Confirm'} onPress={() => onPressBtn()} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackgroundColor,
    paddingTop: 15,
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
