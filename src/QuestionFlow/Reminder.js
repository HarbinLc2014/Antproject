import React, { Component } from 'react';
import { Text, View, Dimensions, Platform } from 'react-native';
import { FormInput, Button, FormValidationMessage } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Reminder extends Component {
  static navigationOptions = {
 };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 60, marginRight: 60 }}>
      <Text style={{ fontSize: 20, marginBottom: 30, textAlign: 'center' }}>To get your best performance, you will be reminded to do the task tomorrow.</Text>
      <Button title="Next" onPress={()=>this.props.navigation.navigate('Home')} textStyle={{ color: '#007aff' }} buttonStyle={{ backgroundColor: 'rgba(0,0,0,0.0)', position: 'absolute', top: 180, left: 100 }} />
      </View>
    );
  }
}

export default Reminder;
