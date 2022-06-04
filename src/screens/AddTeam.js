import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

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
  const [players, setPlayers] = useState([]);
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
  }, [props.route.toString()]);
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
      ShowAlert({type: 'error', description: `Please Add Team Name & Score`});
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
      ShowAlert({type: 'success', description: `${playerName} Added.`});
      setPlayerName('');
    }
  };
  const onAddAnotherTeam = () => {
    if (playersArr.length < 1) {
      ShowAlert({type: 'error', description: `Please Add Players Name`});
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
    if (data.length > 0) {
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
      ShowAlert({type: 'error', description: `Please Enter Data`});
    }
  };
  console.log('sssss', playersArr);
  return (
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
            onChangeText={onchangeTeam}
          />
          {isScore ? (
            <Input
              title={'Enter Desired Winning Score'}
              value={score}
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
            value={playerName}
            onChangeText={onchangePlayer}
          />
          <Button
            title={playersArr.length > 0 ? 'Next Player ' : 'Add Player'}
            onPress={() => addPlayer()}
          />
          <Button
            title={'Add Another Team / Go Back'}
            onPress={() => onAddAnotherTeam()}
            fontSize={12}
          />
        </View>
      )}
      <Button title={'Reset'} onPress={() => reset()} />
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
    height: hp('30%'),
    justifyContent: 'space-around',
  },
  bottomContainer: {
    height: hp('25%'),
    justifyContent: 'space-around',
  },
  btn: {
    height: hp('10%'),
    justifyContent: 'flex-end',
  },
});
export default AddTeam;
