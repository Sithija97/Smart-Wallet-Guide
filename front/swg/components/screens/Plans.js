import React, {Fragment} from 'react';
import { StyleSheet,View,Text,TouchableOpacity,} from 'react-native';

export default class PlansScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity 
            style={styles.buttonContainer} 
            onPress={() => this.props.navigation.navigate('Home')}>
                <Text style={styles.ButtonText}>
                    Next
                </Text>
        </TouchableOpacity>
        
          <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Plans</Text>
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