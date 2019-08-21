import React, {Fragment} from 'react';
import { StyleSheet,View,Text,TouchableOpacity,} from 'react-native';

import Calendar from 'react-native-calendario';
export default class CalanderScreen extends React.Component{
  render(){
    return(
      <View>
        <Text style={{alignItems:'center', fontWeight:'bold', justifyContent:"center"}}>Calander</Text>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
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
  