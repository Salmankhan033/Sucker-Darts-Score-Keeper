import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import * as Colors from '../constant/colors.js';
import * as Typography from '../constant/typography';
import Headers from '../components/Headers.js';
import CustomText from '../components/CustomText.js';
import Button from '../components/Button.js';
import PlusButton from '../components/PlusButton.js';

const AddPlayerScore = props => {
  let totalPlayers = props.route.params ? props.route.params.players : [];
  let desiredScore = props.route.params ? props.route.params.desiredScore : '';
  console.log('Data......', totalPlayers, 'desiredScore', desiredScore);
  const RenderCard = ({item}) => {
    console.log('item...', item);
    return (
      <View style={styles.card}>
        <CustomText size={20} title={item} style={styles.text} />
        <View style={styles.midCard}>
          <PlusButton title={'-'} onPress={{}} />
          <CustomText size={20} title={0} style={styles.text} />
          <PlusButton title={'+'} onPress={{}} />
        </View>
      </View>
    );
  };
  const separator = () => {
    return <View style={{height: hp('2%'), width: wp('2%')}} />;
  };
  return (
    <View style={styles.container}>
      <Headers />

      <FlatList
        style={styles.flatListStyle}
        data={totalPlayers}
        renderItem={RenderCard}
        key={index => index}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={separator}
      />
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
  card: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  midCard: {
    flexDirection: 'row',

    width: wp('92%'),
    alignSelf: 'center',
    height: hp('5%'),
    alignItems: 'center',

    justifyContent: 'space-around',
    shadowColor: Colors.Black,
  },
  flatListStyle: {
    paddingTop: hp('3%'),
  },
});
export default AddPlayerScore;
