/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import { StyleSheet, View,Text,ImageBackground} from 'react-native';

import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

import WellcomeScreen from './components/screens/Welcome';
import HomeScreen from './components/screens/Home';
import CategoryScreen from './components/screens/Category';
import LoginScreen from './components/screens/Login';
import SignUpScreen from './components/screens/SignUp';
import AboutUsScreen from './components/screens/AboutUs';
import PlansScreen from './components/screens/Plans';
import CalanderScreen from './components/screens/Calander';
import LocationScreen from './components/screens/Locations';

export default class App extends React.Component{
  render(){
    return(
      <AppConatiner/>
    );
  }
};

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home:HomeScreen,
    Calander:CalanderScreen,
    Location:LocationScreen,
    AboutUs:AboutUsScreen,

  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    //overlayColor: '#ffff',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#9980FA',
    },
  }
);

const AppStackNavigator = createStackNavigator({
  Welcome:{screen: WellcomeScreen},
  Login:LoginScreen,
  SignUp:SignUpScreen,
  Category:CategoryScreen,
  Plans:PlansScreen,
  Calander:{screen: CalanderScreen},
  Location:{screen: LocationScreen},
  AboutUs:{screen: AboutUsScreen},
  Home: {screen: AppDrawerNavigator}
});

const AppConatiner = createAppContainer(AppStackNavigator);