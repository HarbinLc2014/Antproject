import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { FormInput, Button, FormValidationMessage } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Question1c extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', marginLeft: 60, marginRight: 60, marginTop: 50 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 25, marginBottom: 15 }}>Questions</Text>
      <Text style={{ color: '#d1d1d1', fontSize: 15, marginBottom: 180 }}>1/3</Text>
      <Text style={{ fontSize: 17, marginBottom: 30, textAlign: 'center' }}>How many stardard drinks did you have?</Text>

      <Button title="Less than 2" onPress={()=>this.props.navigation.navigate('Question2a')} textStyle={{ color: '#007aff' }} buttonStyle={{ backgroundColor: 'rgba(0,0,0,0.0)', position: 'absolute', top: 130, left: 45 }} />
      <Button title="2 or More" onPress={()=>this.props.navigation.navigate('Reminder')} textStyle={{ color: '#007aff' }} buttonStyle={{ backgroundColor: 'rgba(0,0,0,0.0)', position: 'absolute', top: 180, left: 60 }} />
      </View>
    );
  }
}

export default Question1c;
