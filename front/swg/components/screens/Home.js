/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import { StyleSheet,View,Text,TouchableOpacity,Button,ImageBackground} from 'react-native';


export default class HomeScreen extends React.Component{
  static navigationOptions = {
    header: null
}
  render(){
    return(
      <ImageBackground
        source={require('./Home.jpg')}
        style={styles.container}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{fontWeight:'bold'}}>Home</Text>
            <TouchableOpacity onPress={this.props.navigation.openDrawer}>
              <Text>Open Drawer</Text>
            </TouchableOpacity>
          </View>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    padding:20,
}
});

