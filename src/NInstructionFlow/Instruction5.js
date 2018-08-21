import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class Instruction5 extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginLeft: 50, marginRight: 50 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 30, marginTop: -200 }}>Instuctions</Text>
      <Text style={{ color: '#d1d1d1', fontSize: 15, marginBottom: 40 }}>5/5</Text>
      <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 60 }}>As you have probably noticed, the task gets harder the higher the number of levels back.</Text>
      <Text style={{ fontSize: 20, textAlign: 'center' }}>In order to familiarise yourself with the task, you can now practise it by doing a 1-back and a 2-back.</Text>
      <Button title="Next" onPress={()=>this.props.navigation.navigate('Practice1')} textStyle={{ color: '#007aff' }} buttonStyle={{ backgroundColor: 'rgba(0,0,0,0.0)', position: 'absolute', top: 155, left: 100 }} />
      </View>
    );
  }
}

export default Instruction5;
