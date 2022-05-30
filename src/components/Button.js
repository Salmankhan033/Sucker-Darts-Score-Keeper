import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';
import LinearGradient from 'react-native-linear-gradient';
import * as Colors from '../constant/colors';
import * as Typography from '../constant/typography';

const Button = props => {
  return (
    <View style={styles.MainContainer}>
      <LinearGradient
        colors={[Colors.Wild_Watermelon, Colors.Royal_Blue]}
        style={styles.LinearGradientStyle}>
        <TouchableOpacity style={styles.ChildViewStyle} onPress={props.onPress}>
          <LinearTextGradient
            style={{fontWeight: 'bold', fontSize: 24}}
            locations={[0, 1]}
            colors={['red', 'blue']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text>{props.title}</Text>
          </LinearTextGradient>
        </TouchableOpacity>
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
    justifyContent: 'center',
  },

  ChildViewStyle: {
    borderWidth: 2,
    borderColor: Colors.Royal_Blue,
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  TextInputStyleClass: {
    textAlign: 'center',
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    color: Colors.selectedButton,
  },
});
export default Button;
