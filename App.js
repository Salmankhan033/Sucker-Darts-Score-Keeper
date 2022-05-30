import React from 'react';

import {SafeAreaView, StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navigations from './src/Navigations';
import * as Colors from './src/constant/colors';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={'#00ae00'} barStyle="dark-content" />
      <NavigationContainer>
        <Navigations />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
