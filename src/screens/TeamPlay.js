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

const TeamPlay = props => {
  let totalPlayers = props.route.params ? props.route?.params?.players : [];
  let desiredScore = props.route.params
    ? props.route?.params?.desiredScore
    : '';
  let type = props.route.params ? props.route?.params?.type : '';

  // console.log(desiredScore, 'totalPlayers', JSON.stringify(totalPlayers));
  const [score, setScore] = useState(0);

  useEffect(() => {
    resetData();
    const unsubscribe = props.navigation.addListener('focus', () => {
      resetData();
    });
    return () => {
      unsubscribe;
    };
  }, []);
  const resetData = () => {
    console.log('totalPlayers', totalPlayers.length);
    for (let t = 0; t < totalPlayers.length; t++) {
      for (let p = 0; p < totalPlayers[t].playerArr.length; p++) {
        totalPlayers[t].myScore = 0;
        console.log('totalPlayers[i].myScore = 0', totalPlayers[t]);
        console.log(
          'totalPlayers[p].playerArr[p].score',
          totalPlayers[t].playerArr[p],
        );
        totalPlayers[t].playerArr[p].score = 0;
        setScore(score + 1);
      }
    }
    setScore();
    // console.log('good ho gia,,,,', JSON.stringify(totalPlayers));
  };

  const onAddValue = (team, player) => {
    if (team.myScore + 1 == team.score) {
      setTimeout(() => {
        props.navigation.navigate('Win', {
          name: team.teamName,
          type: 'team',
        });
      }, 200);
      player.score = player.score + 1;
      setScore('');
    } else {
      player.score = player.score + 1;
      team.myScore = team.myScore + 1;
      setScore(player.score + 1);
    }

    // setScore(item.score + 1);
  };
  const onMinusValue = (team, player) => {
    if (team.myScore - 1 == team.score) {
      setTimeout(() => {
        props.navigation.navigate('Win', {
          name: team.teamName,
          type: 'team',
        });
      }, 200);

      player.score = player.score - 1;
      setScore('');
    } else {
      player.score = player.score - 1;
      team.myScore = team.myScore - 1;
      setScore(player.score - 1);
    }
  };

  const RenderCard = ({item}) => {
    return (
      <>
        <View style={{marginTop: hp('2%'), BackgroundColor: 'red'}}>
          <CustomText
            size={20}
            title={`Team: ${item.teamName}`}
            style={styles.teamText}
          />
          {item.playerArr.map((player, index) => (
            <View style={styles.card}>
              <CustomText
                size={16}
                title={`Player: ${player.playerName}`}
                style={styles.text}
              />
              <View style={styles.midCard}>
                <PlusButton
                  title={'+'}
                  onPress={() => onAddValue(item, player)}
                />

                <CustomText
                  size={20}
                  title={player.score}
                  style={styles.text}
                />
                <PlusButton
                  title={'-'}
                  onPress={() => onMinusValue(item, player)}
                />
              </View>
            </View>
          ))}
        </View>
      </>
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
  teamText: {
    textAlign: 'center',
    height: hp('5%'),
  },
  card: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    justifyContent: 'center',
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
export default TeamPlay;
