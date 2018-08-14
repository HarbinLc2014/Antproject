import React, { Component } from 'react';
import { View, Text, Keyboard } from 'react-native';
import { FormInput, Button, FormValidationMessage } from 'react-native-elements';

class Login extends Component {
  state = { password: '', email: '' };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 50, marginRight: 50 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 30 }}>Login</Text>
        <Text style={{ fontSize: 15, marginBottom: 30 }}>Welcome to the N-back and Stop Signal Tasks.</Text>
        <Text style={{ fontSize: 15, marginBottom: 30 }}>Please enter the following information as indicated on your form.</Text>
        <FormInput
               autoCorrect={false}
               containerStyle={{ width: 200, borderColor: '#000', marginBottom: 30 }}
               inputStyle={{ borderColor: '#000', color: '#000' }}
               placeholder={'Research ID Number'}
                 value={this.state.email}
                 onChangeText={email => this.setState({ email })}
               />
        <FormInput
               autoCorrect={false}
               containerStyle={{ width: 200, borderColor: '#000', marginBottom: 30 }}
               inputStyle={{ borderColor: '#000', color: '#000' }}
               placeholder={'Participant ID Number'}
               secureTextEntry
                 value={this.state.password}
                 onChangeText={password => this.setState({ password })}
        />
        <Button title="Submit" onPress={()=>{
                                    Keyboard.dismiss();
                                    this.props.navigation.navigate('HomeFlow');
                                  }
                                  } buttonStyle={{ borderRadius: 15, marginTop: 45, width: 150 }}/>
      </View>
    );
  }
}

export default Login;
