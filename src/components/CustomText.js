import {View, Text} from 'react-native';
import React from 'react';
import {LinearTextGradient} from 'react-native-text-gradient';
import * as Colors from '../constant/colors';
const CustomText = props => {
  return (
    <LinearTextGradient
      style={[{fontWeight: 'bold', fontSize: props.size}, props.style]}
      locations={[0, 1]}
      colors={['red', 'blue']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <Text>{props.title}</Text>
    </LinearTextGradient>
  );
};

export default CustomText;
