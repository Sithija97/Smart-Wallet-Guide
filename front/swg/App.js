import React, { Component } from 'react';
import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';

import HomeScreen from './components/screens/Home';
import CategoryScreen from './components/screens/Category';
import WelcomeScreen from './components/screens/Welcome';

export default class App extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Home: {screen: HomeScreen},
  Category:{screen: CategoryScreen}

});

const AppStackNavigator = createStackNavigator({
  Welcome:{screen: WelcomeScreen},
  Home: {screen: AppDrawerNavigator},

});

const AppContainer = createAppContainer(AppStackNavigator);