import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {LinearTextGradient} from 'react-native-text-gradient';

import * as Colors from '../constant/colors.js';
import * as Typography from '../constant/typography';
import Button from '../components/Button.js';
const Win = props => {
  let {name, type} = props.route?.params;
  console.log(name, 'cbdshcbsdjhcbsdhj', props);

  const samePlayer = () => {
    type == 'team'
      ? props.navigation.navigate('AddTeam', {same: true})
      : props.navigation.navigate('AddPlayers', {same: true});
  };
  const diffPlayer = () => {
    type == 'team'
      ? props.navigation.navigate('AddTeam', {same: false})
      : props.navigation.navigate('AddPlayers', {same: false});
  };
  return (
    <View style={styles.winStyle}>
      <View style={styles.topConatiner}>
        <LottieView
          source={require('../assets/winner.json')}
          autoPlay
          loop
          style={styles.lotiStyle}
        />
      </View>
      <LinearTextGradient
        style={{fontWeight: 'bold', fontSize: 24}}
        locations={[0, 1]}
        colors={['red', 'blue']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text>{name} Won The Game</Text>
      </LinearTextGradient>
      <View style={styles.btnView}>
        <Button
          title={
            type == 'team'
              ? 'Play Again With Same Teams'
              : 'Play Again With Same Player'
          }
          style={{width: wp('90%')}}
          fontSize={{fontSize: 18}}
          onPress={() => samePlayer()}
        />
        <Button
          title={
            type == 'team'
              ? 'Play Again With Different Teams'
              : 'Play Again With Different Player'
          }
          style={{width: wp('90%')}}
          fontSize={{fontSize: 18}}
          onPress={() => diffPlayer()}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  winStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BackgroundColor,
  },
  topConatiner: {
    height: hp('50%'),
    width: wp('80%'),
  },
  lotiStyle: {
    height: hp('40%'),
    width: wp('40%'),
    alignSelf: 'center',
  },
  btnView: {
    height: hp('15%'),
    width: wp('95%'),

    justifyContent: 'space-around',
  },
});
export default Win;
