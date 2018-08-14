import React, { Component } from 'react';
import { Text, View, Dimensions, Platform } from 'react-native';
import { FormInput, Button, FormValidationMessage } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Question1a extends Component {
  static navigationOptions = {
 };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 60, marginRight: 60 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 25, marginBottom: 100 }}>N-back Task</Text>
      <Text style={{ fontSize: 15, marginBottom: 30 }}>Welcome to the N-back task.</Text>
      <Text style={{ fontSize: 15, marginBottom: 30, textAlign: 'center' }}>To begin, please answer a few quick questions.</Text>
      <Button title="Next" onPress={()=>this.props.navigation.navigate('Question1b')} textStyle={{ color: '#007aff' }} buttonStyle={{ backgroundColor: 'rgba(0,0,0,0.0)', position: 'absolute', top: 130, left: 100 }} />
      </View>
    );
  }
}

export default Question1a;
