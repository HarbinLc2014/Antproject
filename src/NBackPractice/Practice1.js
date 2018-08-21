import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import TimerMixin from 'react-timer-mixin';

class Practice1 extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 50, marginRight: 50 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 50, marginTop: -180 }}>1-back Practice</Text>
      <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 30 }}>In this practice, you will do a 1-back.</Text>
      <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 30 }}>Press found at the bottom of each screen, if the letter is the same as the 1 display before.</Text>
      <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 50 }}>Otherwise, don't do anything.</Text>
      <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 30, fontStyle: 'italic' }}>You will need to respond as quickly and as accurately as possible.</Text>
      <Text style={{ fontSize: 20, textAlign: 'center', fontStyle: 'italic' }}>Press start to begin your practice.</Text>
      <Button title="Skip" onPress={()=>{Alert.alert(
  'Skip',
  'Are you sure you want to skip straight to the actual task?',
  [
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)}} textStyle={{ color: '#007aff' }} buttonStyle={{ backgroundColor: 'rgba(0,0,0,0.0)', position: 'absolute', top: 90, left: 100 }} />
      <Button title="Start" onPress={()=>this.props.navigation.navigate('NBackPractice')} textStyle={{ color: '#007aff' }} buttonStyle={{ backgroundColor: 'rgba(0,0,0,0.0)', position: 'absolute', top: 140, left: 100 }} />
      </View>
    );
  }
}

export default Practice1;
