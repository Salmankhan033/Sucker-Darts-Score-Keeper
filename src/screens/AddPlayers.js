import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import * as Colors from '../constant/colors.js';
import * as Typography from '../constant/typography';

import CustomText from '../components/CustomText';
import Headers from '../components/Headers.js';
import Button from '../components/Button.js';
import Input from '../components/Input.js';
import ShowAlert from '../components/ShowAlert.js';
const AddPlayers = props => {
  const [playerName, setPlayerName] = useState('');

  const [players, setPlayers] = useState([]);
  const [score, setScore] = useState('');
  let same = props.route?.params ? props.route?.params?.same : false;

  useEffect(() => {
    {
      same ? null : reset();
    }
  }, [props.route]);

  const changeVal = txt => {
    setPlayerName(txt);
  };
  const onChangeScore = txt => {
    setScore(txt);
  };

  const addPlayer = () => {
    let data = {
      playerName: playerName,
      score: 0,
    };
    if (playerName == '') {
      ShowAlert({type: 'error', description: `Please Add Player Name`});
    } else {
      players.push(data);
      ShowAlert({
        type: 'success',
        description: `${playerName} Added Successfully.`,
      });
      setPlayerName('');
    }
  };

  const reset = () => {
    setPlayers([]);
    setPlayerName(''), setScore('');
    // ShowAlert({type: 'success', description: `Reset Successfully`});
  };
  const startGame = () => {
    if (players.length > 1 && score != '') {
      for (let i = 0; i < players.length; i++) {
        players[i].score = 0;
      }

      props.navigation.navigate('AddPlayerScore', {
        players: players,
        desiredScore: score,
        type: 'Player',
      });
    } else {
      ShowAlert({
        type: 'error',
        description: `Please Add Two Players Or Desired Score`,
      });
    }
  };
  return (
    <KeyboardAwareScrollView behavior="padding" style={styles.container}>
      <View style={styles.container}>
        <Headers />
        <CustomText
          size={30}
          title={'Add Players And Desired Winning Score'}
          style={styles.text}
        />
        <View style={styles.midContainer}>
          <Input
            title={'Enter Player Name'}
            value={playerName}
            inputType={'default'}
            onChangeText={changeVal}
          />
          <Button
            title={players.length > 0 ? 'Next Player' : 'Add Player'}
            fontSize={24}
            onPress={() => addPlayer()}
          />
          <Input
            title={'Enter Desired Winning Score'}
            value={score}
            inputType={'number-pad'}
            onChangeText={onChangeScore}
          />
          <Button title={'Reset'} onPress={() => reset()} />
          <Button title={'Start Game'} onPress={() => startGame()} />
        </View>
      </View>
    </KeyboardAwareScrollView>
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
    height: hp('40%'),
    justifyContent: 'space-around',
  },
  btn: {
    height: hp('10%'),
    justifyContent: 'flex-end',
  },
});
export default AddPlayers;
