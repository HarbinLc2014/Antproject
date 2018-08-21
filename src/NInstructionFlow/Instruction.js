import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { Button } from 'react-native-elements';

class Instruction extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginLeft: 50, marginRight: 50 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 150, marginTop: -200 }}>Instuctions</Text>
      <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 60 }}>If this is your first time doing the N-back or you require instructions, press next.</Text>
      <Text style={{ fontSize: 20, textAlign: 'center' }}>If you have done the N-back before and do not require instructions or practice, press skip.</Text>
      <Button title="Skip" onPress={()=>{Alert.alert(
  'Skip',
  'Are you sure you want to skip straight to the actual task?',
  [
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)}} textStyle={{ color: '#007aff' }} buttonStyle={{ backgroundColor: 'rgba(0,0,0,0.0)', position: 'absolute', top: 130, left: 100 }} />
      <Button title="Next" onPress={()=>this.props.navigation.navigate('Instruction1')} textStyle={{ color: '#007aff' }} buttonStyle={{ backgroundColor: 'rgba(0,0,0,0.0)', position: 'absolute', top: 180, left: 100 }} />
      </View>
    );
  }
}

export default Instruction;
