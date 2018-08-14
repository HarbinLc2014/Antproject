import React, { Component } from 'react';
import { View, Text, Keyboard } from 'react-native';
import { FormInput, Button, FormValidationMessage } from 'react-native-elements';

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Start Tasks" onPress={()=>{
                                  this.props.navigation.navigate('Question');
                                }
                              } buttonStyle={{ borderRadius: 15, marginTop: 45, width: 250 }} />
      </View>
    );
  }
}

export default Home;
