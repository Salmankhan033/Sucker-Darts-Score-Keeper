import React from 'react';
import {Alert, BackHandler} from 'react-native';

const ServerError = 'Something went wrong. Please try again later.';

const ShowAlert = ({description, type}) => {
  if (type == 'exit') {
    Alert.alert('Exit Game?', 'Are you sure you want to kill the App?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  } else {
    Alert.alert(
      type === 'error' ? 'Oops!' : 'Success',
      description,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: true},
    );
  }
};

export default ShowAlert;
