import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class Instruction4 extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginLeft: 50, marginRight: 50 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 30, marginTop: -200 }}>Instuctions</Text>
      <Text style={{ color: '#d1d1d1', fontSize: 15, marginBottom: 40 }}>4/5</Text>
      <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 60 }}>For a 2-back, you have to press each time the current letter is exactly the same as the one presented before the last (that is, 2 positions back).</Text>
      <Text style={{ fontSize: 20, textAlign: 'center' }}>Here, you have to press because the lettter is the same as the one before last (that is, 2 displays back).</Text>
      <Button title="Skip" onPress={()=>{Alert.alert(
    'Skip',
    'Are you sure you want to skip straight to the actual task?',
    [
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    { cancelable: false }
    )}} textStyle={{ color: '#007aff' }} buttonStyle={{ backgroundColor: 'rgba(0,0,0,0.0)', position: 'absolute', top: 100, left: 100 }} />
      <Button title="Next" onPress={()=>this.props.navigation.navigate('Instruction5')} textStyle={{ color: '#007aff' }} buttonStyle={{ backgroundColor: 'rgba(0,0,0,0.0)', position: 'absolute', top: 150, left: 100 }} />
      </View>
    );
  }
}

export default Instruction4;
