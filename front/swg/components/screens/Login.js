import React, {Fragment} from 'react';
import { StyleSheet,View,Text,TouchableOpacity,} from 'react-native';

//importing form
import FormScreen from './Form';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style ={styles.container}>

        <View style={{alignItems:'center',marginBottom:60}}>
          <Text style={styles.textsmd}>
            Sign in 
          </Text>
         </View>

        <View style ={styles.FormContainer}>
              <FormScreen/>
        </View>

        
        <TouchableOpacity 
            style={styles.buttonContainer} 
            onPress={() => this.props.navigation.navigate('Home')}>
                <Text style={styles.title}>
                    SIGN IN
                </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding:20,
    backgroundColor: '#f1f2f6',
  },
  buttonContainer:{
    alignItems: 'center',
    backgroundColor: '#EA2027',
    padding: 8,
    marginBottom:50,
    borderRadius:10,
},
   title:{fontWeight:'bold',
   color:"#ffffff" 
  },
  textsmd:{
    fontSize:25,
    fontWeight:"bold",
    color:"#0b0c0b"
  },
  buttonGoogle:{
    alignItems: 'center',
    backgroundColor: '#ff4757',
    padding: 10,
    marginBottom:20,
    borderRadius:10,

  },
  buttonFacebook:{
    alignItems: 'center',
    backgroundColor: '#3742fa',
    padding: 10,
    marginBottom:50,
    borderRadius:10,

  }
});