import React, {Fragment} from 'react';
import { StyleSheet,View,Text,TouchableOpacity,ImageBackground,Image} from 'react-native';

  export default class WelcomeScreen extends React.Component {
    static navigationOptions = {
      header: null
  }
    render() {
    return (    
      <ImageBackground
        source={require('./back1.jpg')}
        style={styles.container}>

      <View style={styles.container}>

              <View style={styles.logoContainer}>
                  <Image
                        style={styles.logo}
                       source ={require('./icon.png')}
                   />

                <Text style={styles.logoTitle}>"because money matters"</Text>

              </View>

            <TouchableOpacity 
                style={styles.buttonContainer} 
                onPress={() => this.props.navigation.navigate('SignUp')}>
                  <Text style={styles.ButtonText}>
                      New to Smart Wallet Guide
                  </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.buttonContainer} 
                onPress={() => this.props.navigation.navigate('Login')}>
                  <Text style={styles.ButtonText}>
                      Already Using Smart Wallet Guide
                  </Text>
            </TouchableOpacity>
      </View>
      </ImageBackground>
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
    },
    logo:{
      width:180,
      height:180
    },
    logoContainer:{
      flexGrow: 1,
      alignItems:'center',
      justifyContent: 'center',
    },
    logoTitle:{
      //color:'#3c40c6',
      marginTop:10,
      width:160,
      textAlign:'center',
      opacity:0.9,
      fontWeight: 'bold',
      fontStyle: 'italic',
      
    },
});