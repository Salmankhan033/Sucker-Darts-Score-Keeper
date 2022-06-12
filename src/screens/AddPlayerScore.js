import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
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
import Win from './Win.js';

const AddPlayerScore = props => {
  let totalPlayers = props.route.params ? props.route?.params?.players : [];
  let desiredScore = props.route.params
    ? props.route?.params?.desiredScore
    : '';
  let type = props.route.params ? props.route?.params?.type : '';

  const [score, setScore] = useState('');

  const [winnerName, setWinnerName] = useState('');

  useEffect(() => {
    resetData();
    const unsubscribe = props.navigation.addListener('focus', () => {
      resetData();
      setScore('');
    });
    return () => {
      unsubscribe;
    };
  }, [props.route]);

  const resetData = () => {
    for (let t = 0; t < totalPlayers.length; t++) {
      totalPlayers[t].score = 0;
    }
    setScore(0);
  };

  const onAddValue = item => {
    if (item.score + 1 == desiredScore) {
      setTimeout(() => {
        props.navigation.navigate('Win', {
          name: item.playerName,
          players: totalPlayers,
          desiredScore: desiredScore,
        });
      }, 200);
      item.score = item.score + 1;
      setScore('');
    } else {
      item.score = item.score + 1;
      setScore(item.score + 1);
    }

    setScore(item.score + 1);
  };
  const onMinusValue = item => {
    if (item.score - 1 == desiredScore) {
      setTimeout(() => {
        props.navigation.navigate('Win', {
          name: item.e,
        });
      }, 200);

      item.score = item.score - 1;
      setScore('');
    } else {
      item.score = item.score - 1;
      setScore(item.score - 1);
    }
  };

  const RenderCard = ({item}) => {
    return (
      <View style={styles.card}>
        <CustomText size={20} title={item?.playerName} style={styles.text} />
        <View style={styles.midCard}>
          <PlusButton title={'+'} onPress={() => onAddValue(item)} />

          <CustomText size={20} title={item.score} style={styles.text} />
          <PlusButton title={'-'} onPress={() => onMinusValue(item)} />
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
        contentContainerStyle={{paddingBottom: 20}}
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
