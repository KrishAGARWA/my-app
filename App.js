import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DashBoardScreen from './screens/DashboardScreen';
import DietScreen from './screens/DietScreen';
import FormScreen from './screens/FormScreen';
import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import MainScreen from './screens/MainScreen';
import * as firebase from "firebase";
import { firebaseConfig } from "./config";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}


export default function App() {
  return (
    <View>
      
     <AppContainer/>
    </View>

  );
}

var appNavigator=createSwitchNavigator({
  LoginScreen: LoginScreen,
  MainScreen:MainScreen,
 FormScreen:FormScreen,
  HomeScreen:HomeScreen,
  DietScreen:DietScreen,

})

const AppContainer=createAppContainer(appNavigator)