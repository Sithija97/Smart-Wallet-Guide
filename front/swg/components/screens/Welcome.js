import React, {Fragment} from 'react';
import { StyleSheet,View,Text,TouchableOpacity,} from 'react-native';

  export default class WelcomeScreen extends React.Component {
    static navigationOptions = {
      header: null
  }
    render() {
    return (
      <View style={styles.container}>
            <TouchableOpacity 
                style={styles.buttonContainer} 
                onPress={() => this.props.navigation.navigate('Login')}>
                  <Text style={styles.ButtonText}>
                      New to Smart Wallet Guide
                  </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.buttonContainer} 
                onPress={() => this.props.navigation.navigate('SignUp')}>
                  <Text style={styles.ButtonText}>
                      Already Using Smart Wallet Guide
                  </Text>
            </TouchableOpacity>
      </View>
    );
  }
}

const styles =StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        padding:20,
    },
    buttonContainer:{
        alignItems: 'center',
        backgroundColor:'#dfe4ea',
        padding: 10,
        marginBottom:20,
        borderRadius:14
    },
    ButtonText:{
        fontWeight:'bold'
    }
});