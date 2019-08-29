import React, {Fragment} from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,ActivityIndicator,ImageBackground,TouchableOpacity} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
export default class CategoryScreen extends React.Component{
  static navigationOptions = {
    header: null
}
  render(){
//3 maain statuses
    let occ = [{
      value: 'Student',
    }, {
      value: 'Employee',
    }, {
      value: 'SeniorCitizen',
    }];
//student=> options
    let Student = [{
      value: 'School Student',
    }, {
      value: 'University Student - Private',
    }, {
      value: 'University Student - Government',
    }];
//employee=> optons
    let Employee = [{
      value: 'Private Sector',
    }, {
      value: 'Government Sector',
    }];
//income=> options
    let Income = [{
      value: 'High-level',
    }, {
      value: 'Mid-level',
    }, {
      value: 'Low-level',
    }];
    return(
      <ImageBackground
        source={require('./Hometest.jpg')}
        style={styles.imagecontainer}>
              <View style={styles.container}>

                  <Text style={{fontWeight:'bold',color:'#5352ed',marginTop:10,marginBottom:10,fontSize:30,alignContent:'center'}}>
                    Tell us a bit about Yourselft</Text>
                  <Text style={{fontWeight:'bold',color:'#3742fa',marginTop:10}}>Mandatory</Text>

                  <View style={{padding:20}}>
                  <Dropdown
                    label='select your status'
                    data={occ}
                  />
                  </View>

                  <View style={{padding:20}}>
                  <Dropdown
                    label="If Student, you're a.."
                    data={Student}
                  />
                  </View>

                  <View style={{padding:20}}>
                  <Dropdown
                    label="If Employee, you're from.."
                    data={Employee}
                  />
                  </View>

                  <Text style={{fontWeight:'bold',color:'#5352ed'}}>Optional</Text>

                  <View style={{padding:20}}>
                  <Dropdown
                    label="Your income level is.."
                    data={Income}
                  />
                  </View>

                  <TouchableOpacity 
                      style={styles.buttonContainer} 
                      onPress={() => this.props.navigation.navigate('Plans')}>
                          <Text style={styles.ButtonText}>
                              Next
                          </Text>
                  </TouchableOpacity>
                  </View>
        </ImageBackground>
      
    );
  }
}

const styles =StyleSheet.create({
    container:{
        paddingHorizontal: 10,
        padding:25,
    },
    buttonContainer:{
      alignItems: 'center',
      backgroundColor:'#dfe4ea',
      padding: 10,
      marginTop:20,
      marginBottom:20,
      marginLeft:260,
      borderRadius:14
     },
    ButtonText:{
      fontWeight:'bold'
    },
    imagecontainer:{
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
      padding:20,
  }
  });