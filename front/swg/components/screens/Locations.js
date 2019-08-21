import React, {Fragment} from 'react';
import { StyleSheet,View,Text,TouchableOpacity,} from 'react-native';
import MapView from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

export default class LocationScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <MapView
              //provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
     >
     </MapView>
          <TouchableOpacity onPress={this.props.navigation.openDrawer}>
            <Text>Open Drawer</Text>
          </TouchableOpacity>
          <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Locations of near by ATMs & Banks</Text>
        </View>
      );
    }
  }
  
  
const styles =StyleSheet.create({

  containerzero:{
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
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});