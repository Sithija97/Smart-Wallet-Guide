import React, {Fragment} from 'react';
import { StyleSheet,View,Text,TouchableOpacity,TextInput} from 'react-native';

export default class FormScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          
          <TextInput
          placeholder="email"
          placeholderTextColor="#ced6e0"
          style={styles.input}
          />
  
          <TextInput
          placeholder="password"
          secureTextEntry
          placeholderTextColor="#ced6e0"
          style={styles.input}
          />
  
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    
  input:{
      height:40,
      backgroundColor:"#ffffff",
      marginBottom:20,
      borderRadius:5,
      paddingHorizontal:10
  }
  
  });
  
  