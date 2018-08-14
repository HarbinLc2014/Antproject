import React, { Component } from 'react';
import { View, Text, Keyboard } from 'react-native';
import { FormInput, Button, FormValidationMessage } from 'react-native-elements';

class About extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Acknowledgements" onPress={()=>{
                                  this.props.navigation.navigate('Acknowledgement');
                                }
                              } buttonStyle={{ borderRadius: 15, marginTop: 45, width: 250 }} />
      <Button title="Privacy Policy" onPress={()=>{
                                  this.props.navigation.navigate('Privacy');
                                }
                              } buttonStyle={{ borderRadius: 15, marginTop: 45, width: 250 }} />
      </View>
    );
  }
}

export default About;
