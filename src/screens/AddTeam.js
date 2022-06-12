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
const AddTeam = props => {
  let same = props.route?.params ? props.route?.params?.same : false;

  const [playerName, setPlayerName] = useState('');

  const [score, setScore] = useState('');
  const [isScore, setIsScore] = useState(true);
  const [teamName, setTeamName] = useState('');
  const [teamData, setTeamData] = useState({});
  const [data, setData] = useState([]);
  const [playersArr, setPlayersArr] = useState([]);
  const [isTeam, setIsTeam] = useState(true);

  useEffect(() => {
    {
      same ? null : reset();
    }
  }, [props.route]);
  const reset = () => {
    setPlayerName('');
    setScore('');
    setIsScore(true);
    setTeamName('');
    setTeamData({});
    setPlayersArr([]);
    setIsTeam(true);
    setData([]);
  };
  const onchangePlayer = txt => {
    setPlayerName(txt);
  };
  const onChangeScore = txt => {
    setScore(txt);
  };
  const onchangeTeam = txt => {
    setTeamName(txt);
  };
  const onAddTeam = () => {
    if (teamName == '' || score == '') {
      ShowAlert({type: 'error', description: `Please Add Team Name Or Score`});
    } else {
      setIsTeam(false);
      setIsScore(false);
      let data = {
        teamName: teamName,
        score: score,
        myScore: 0,
      };
      setTeamData(data);
      // ShowAlert({type: 'success', description: `${teamName} Added.`});
    }
  };
  const addPlayer = () => {
    // let _data={
    //   teamName:teamData.teamName,
    //   score:teamData.score,
    //   playerName:playerName
    // }

    let data = {
      playerName: playerName,
      score: 0,
    };
    if (playerName == '') {
      ShowAlert({type: 'error', description: `Please Add Player Name`});
    } else {
      playersArr.push(data);
      ShowAlert({
        type: 'success',
        description: `${playerName} Added Successfully.`,
      });
      setPlayerName('');
    }
  };
  const onAddAnotherTeam = () => {
    if (playersArr.length <= 1) {
      ShowAlert({type: 'error', description: `Please Add Minimum Two Players`});
    } else {
      let _data = {
        teamName: teamData.teamName,
        score: teamData.score,
        playerArr: playersArr,
        myScore: teamData.myScore,
      };
      data.push(_data);
      setTeamData({});
      setPlayersArr([]);
      setIsTeam(true);
      setTeamName('');
      setPlayersArr([]);
    }
  };
  const startGame = () => {
    if (data.length >= 2) {
      // for (let i = 0; i < data.length; i++) {
      //   for (let i = 0; i < data[i].playerArr.length; i++) {
      //     data[i].playerArr.score = 0;
      //   }
      // }

      props.navigation.navigate('TeamPlay', {
        players: data,
        type: 'team',
        desiredScore: score,
      });
    } else {
      ShowAlert({type: 'error', description: `Please Add Minimum Two Teams`});
    }
  }; // my...
  const onStartGame = () => {
    if (playersArr.length <= 1) {
      ShowAlert({type: 'error', description: `Please Add Minimum Two Players`});
    } else {
      let _data = {
        teamName: teamData.teamName,
        score: teamData.score,
        playerArr: playersArr,
        myScore: teamData.myScore,
      };

      if (data.length >= 1) {
        data.push(_data);
        setTeamData({});
        setPlayersArr([]);
        setIsTeam(true);
        setTeamName('');
        setPlayersArr([]);
        props.navigation.navigate('TeamPlay', {
          players: data,
          type: 'team',
          desiredScore: score,
        });
      } else {
        ShowAlert({type: 'error', description: `Minimum Team Will Be Two`});
      }

      // setTeamData({});
      // setPlayersArr([]);
      // setIsTeam(truAe);
      // setTeamName('');
      // setPlayersArr([]);
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
        {isTeam ? (
          <View style={styles.midContainer}>
            <Input
              title={'Enter Team Name'}
              value={teamName}
              inputType={'default'}
              onChangeText={onchangeTeam}
            />
            {isScore ? (
              <Input
                title={'Enter Desired Winning Score'}
                value={score}
                inputType={'number-pad'}
                onChangeText={onChangeScore}
              />
            ) : (
              <CustomText
                size={20}
                title={`Score is ${score}.`}
                style={{textAlign: 'center'}}
              />
            )}
            <Button
              title={data.length > 0 ? 'Add Another Team' : 'Add Team'}
              onPress={() => onAddTeam()}
            />
            <Button title={'Start Game'} onPress={() => startGame()} />
          </View>
        ) : (
          <View style={styles.bottomContainer}>
            <Input
              title={'Enter Player Name'}
              inputType={'default'}
              value={playerName}
              onChangeText={onchangePlayer}
            />
            <Button
              title={playersArr.length > 0 ? 'Next Player ' : 'Add Player'}
              onPress={() => addPlayer()}
            />
            <Button
              title={'Add Another Team'}
              onPress={() => onAddAnotherTeam()}
              type={true}
              fontSize={10}
            />
            <Button title={'Start Game'} onPress={() => onStartGame()} />
          </View>
        )}
        <Button title={'Reset'} onPress={() => reset()} />
      </View>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackgroundColor,
  },
  text: {
    textAlign: 'center',
    height: hp('20%'),
    paddingTop: hp('3%'),
  },
  midContainer: {
    height: hp('30%'),
    justifyContent: 'space-around',
  },
  bottomContainer: {
    height: hp('30%'),
    justifyContent: 'space-around',
  },
  btn: {
    height: hp('10%'),
    justifyContent: 'flex-end',
  },
});
export default AddTeam;
