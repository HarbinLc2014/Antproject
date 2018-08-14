import React, { Component } from 'react';
import { Text, View, Dimensions, Platform, Picker } from 'react-native';
import { FormInput, Button, FormValidationMessage } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Reminder2 extends Component {
  static navigationOptions = {
 };
 state = { reminderTime: '11' }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 60, marginRight: 60 }}>
      <Text style={{ fontSize: 20, marginBottom: 30, textAlign: 'center' }}>To get your best performance, you will be reminded to do the task tomorrow / today at</Text>
      <Picker
        selectedValue={this.state.reminderTime}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) => this.setState({reminderTime: itemValue})}>
        <Picker.Item label="11 am" value='11' />
        <Picker.Item label="12 am" value='12' />
        <Picker.Item label=" 1 pm" value='13' />
        <Picker.Item label=" 2 pm" value='14' />
        <Picker.Item label=" 3 pm" value='15' />
        <Picker.Item label=" 4 pm" value='16' />
        <Picker.Item label=" 5 pm" value='17' />
        <Picker.Item label=" 6 pm" value='18' />
        <Picker.Item label=" 7 pm" value='19' />
        <Picker.Item label=" 8 pm" value='20' />
        <Picker.Item label=" 9 pm" value='21' />
      </Picker>
      <Button title="Next" onPress={()=>this.props.navigation.navigate('Home')} textStyle={{ color: '#007aff' }} buttonStyle={{ backgroundColor: 'rgba(0,0,0,0.0)', position: 'absolute', top: 180, left: 100 }} />
      </View>
    );
  }
}

export default Reminder2;
