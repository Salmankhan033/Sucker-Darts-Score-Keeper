import React, {useEffect} from 'react';

import {SafeAreaView, StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

import Navigations from './src/Navigations';
import * as Colors from './src/constant/colors';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={Colors.BackgroundColor}
        barStyle="dark-content"
      />
      <NavigationContainer>
        <Navigations />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
