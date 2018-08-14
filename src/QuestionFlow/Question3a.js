import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { FormInput, Button, FormValidationMessage } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Question3a extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', marginLeft: 60, marginRight: 60, marginTop: 50 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 25, marginBottom: 15 }}>Questions</Text>
      <Text style={{ color: '#d1d1d1', fontSize: 15, marginBottom: 180 }}>3/3</Text>
      <Text style={{ fontSize: 17, marginBottom: 30 }}>Where are you located now?</Text>

      <Button title="Home" onPress={()=>this.props.navigation.navigate('Question3b')} textStyle={{ color: '#007aff' }} buttonStyle={{ backgroundColor: 'rgba(0,0,0,0.0)', position: 'absolute', top: 50, right: -170 }} />
      <Button title="Work" onPress={()=>this.props.navigation.navigate('Question3b')} textStyle={{ color: '#007aff' }} buttonStyle={{ backgroundColor: 'rgba(0,0,0,0.0)', position: 'absolute', top: 90, right: -170 }} />
      <Button title="School/University" onPress={()=>this.props.navigation.navigate('Question3b')} textStyle={{ color: '#007aff' }} buttonStyle={{ backgroundColor: 'rgba(0,0,0,0.0)', position: 'absolute', top: 130, right: -170 }} />
      <Button title="Outdoors" onPress={()=>this.props.navigation.navigate('Question3b')} textStyle={{ color: '#007aff' }} buttonStyle={{ backgroundColor: 'rgba(0,0,0,0.0)', position: 'absolute', top: 170, right: -170 }} />
      <Button title="Other" onPress={()=>this.props.navigation.navigate('Question3b')} textStyle={{ color: '#007aff' }} buttonStyle={{ backgroundColor: 'rgba(0,0,0,0.0)', position: 'absolute', top: 210, right: -170 }} />
      </View>
    );
  }
}

export default Question3a;
