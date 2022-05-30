import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
const Stack = createNativeStackNavigator();
const Navigations = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};
export default Navigations;
