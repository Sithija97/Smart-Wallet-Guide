/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {createAppContainer, createDrawerNavigator, createStackNavigator} from 'react-navigation'

import WelcomeScreen from './components/screens/Welcome';
import HomeScreen from './components/screens/Home';
import CategoryScreen from './components/screens/Category';
import LoginScreen from './components/screens/Login';
import SignUpScreen from './components/screens/SignUp';
import AboutUsScreen from './components/screens/AboutUs';
import PlansScreen from './components/screens/Plans';


const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Category: CategoryScreen,
    AboutUs: AboutUsScreen
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
  Welcome:WelcomeScreen,
  Login:LoginScreen,
  SignUp:SignUpScreen,
  Category:CategoryScreen,
  Plans:PlansScreen,
  Home: AppDrawerNavigator,
},
{
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:'#9980FA'
    }
  }
});

export default createAppContainer(AppStackNavigator);
