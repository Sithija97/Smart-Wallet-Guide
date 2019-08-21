/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Calendar from 'react-native-calendario';
export default class App extends React.Component{
  render(){
    return(
      <View>
        <Text style={{alignItems:'center', fontWeight:'bold'}}>Calander</Text>
        <Calendar
  onChange={range => console.log(range)}
  minDate="2018-04-20"
  startDate="2018-04-30"
  endDate="2018-05-05"
  theme={{
    weekColumnTextStyle: {
      color: 'red',
    },
    weekColumnStyle: {
      paddingVertical: 20,
    },
    weekColumnsContainerStyle: {
      backgroundColor: 'lightgrey',
    },
    monthTitleStyle: {
      color: 'blue',
    },
    nonTouchableDayContainerStyle: {
      backgroundColor: 'red',
    },
    nonTouchableDayTextStyle: {
      color: 'green',
    },
    dayTextStyle: {
      color: 'blue',
    },
    activeDayContainerStyle: {
      backgroundColor: 'lightgrey',
    },
    activeDayTextStyle: {
      color: 'red',
    },
  }}
/>
      </View>
    );
  }
}