import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SigninScreen from './src/components/screens/SigninScreen';
import SignupScreen from './src/components/screens/SignupScreen';
import TrackListScreen from './src/components/screens/TrackListScreen';
import TrackDetailScreen from './src/components/screens/TrackDetailScreen';
import TrackCreateScreen from './src/components/screens/TrackCreateScreen';
import AccountScreen from './src/components/screens/AccountScreen';
import {Provider as AuthProvider} from './src/contexts/AuthContext';
import {setNavigator} from './src/navigationRef';



const switchNavigator  = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup : SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TarckList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return <AuthProvider><App ref ={navigator => setNavigator(navigator)}/></AuthProvider>
}