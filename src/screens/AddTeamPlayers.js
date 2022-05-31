import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import * as Colors from '../constant/colors.js';
import * as Typography from '../constant/typography';

import CustomText from '../components/CustomText';
import Headers from '../components/Headers.js';
import Button from '../components/Button.js';

const AddTeamPlayers = props => {
  return (
    <View style={styles.container}>
      <Headers />
      <CustomText
        size={30}
        title={'Sucker Dart Scoring App'}
        style={styles.text}
      />
      <View style={styles.midContainer}>
        <Button
          title={'Add Players'}
          onPress={() => props.navigation.navigate('AddPlayers')}
        />

        <Button
          title={'Add Team'}
          onPress={() => props.navigation.navigate('AddPlayers')}
        />
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
    height: hp('20%'),
    paddingTop: hp('3%'),
  },
  midContainer: {
    height: hp('25%'),
    justifyContent: 'space-around',
  },
  btn: {
    height: hp('10%'),
    justifyContent: 'flex-end',
  },
});
export default AddTeamPlayers;
