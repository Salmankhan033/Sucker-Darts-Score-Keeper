import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Colors from '../constant/colors';

const Input = props => {
  return (
    <View style={styles.MainContainer}>
      <LinearGradient
        colors={[Colors.Wild_Watermelon, Colors.Royal_Blue]}
        style={styles.LinearGradientStyle}>
        <View style={styles.ChildViewStyle}>
          <TextInput
            placeholder={props.title}
            underlineColorAndroid="transparent"
            onChangeText={txt => props.onChangeText(txt)}
            value={props.value}
            style={styles.TextInputStyleClass}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  LinearGradientStyle: {
    height: 50,
    borderRadius: 10,
    height: 50,
    width: '80%',
  },

  ChildViewStyle: {
    borderWidth: 1,
    borderColor: Colors.Royal_Blue,
    width: '100%',
    height: 50,
    borderRadius: 10,
  },

  TextInputStyleClass: {
    textAlign: 'center',
    height: 50,
    width: '90%',
  },
});
export default Input;
