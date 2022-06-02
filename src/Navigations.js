import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import AddTeamPlayers from './screens/AddTeamPlayers';
import AddPlayers from './screens/AddPlayers';
import AddTeam from './screens/AddTeam';
import AddPlayerScore from './screens/AddPlayerScore';
import Win from './screens/Win';
import TeamPlay from './screens/TeamPlay';
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
        <Stack.Screen
          name="AddTeamPlayers"
          component={AddTeamPlayers}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddPlayers"
          component={AddPlayers}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddTeam"
          component={AddTeam}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddPlayerScore"
          component={AddPlayerScore}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Win"
          component={Win}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TeamPlay"
          component={TeamPlay}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};
export default Navigations;
