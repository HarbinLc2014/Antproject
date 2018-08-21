import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class Instruction1 extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginLeft: 50, marginRight: 50 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 30, marginTop: -200 }}>Instuctions</Text>
      <Text style={{ color: '#d1d1d1', fontSize: 15, marginBottom: 100 }}>1/5</Text>
      <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 60 }}>In this task you will see a sequence of letters appearing one after another in the centre of the screen.</Text>
      <Text style={{ fontSize: 20, textAlign: 'center' }}>and so on...</Text>
      <Button title="Skip" onPress={()=>{Alert.alert(
  'Skip',
  'Are you sure you want to skip straight to the actual task?',
  [
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)}} textStyle={{ color: '#007aff' }} buttonStyle={{ backgroundColor: 'rgba(0,0,0,0.0)', position: 'absolute', top: 130, left: 100 }} />
      <Button title="Next" onPress={()=>this.props.navigation.navigate('Instruction2')} textStyle={{ color: '#007aff' }} buttonStyle={{ backgroundColor: 'rgba(0,0,0,0.0)', position: 'absolute', top: 180, left: 100 }} />
      </View>
    );
  }
}

export default Instruction1;
