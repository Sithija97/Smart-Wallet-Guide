import React, {Fragment} from 'react';
import { StyleSheet,View,Text,TouchableOpacity,} from 'react-native';

//for vector icon
import Icon from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends React.Component {
    render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Icon name="md-menu" size={30}/>
        <Text>Home</Text>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
