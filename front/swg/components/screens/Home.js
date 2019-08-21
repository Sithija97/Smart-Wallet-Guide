import React, {Fragment} from 'react';
import { StyleSheet,View,Text,TouchableOpacity,Button} from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home</Text>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
