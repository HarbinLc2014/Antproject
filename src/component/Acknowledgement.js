import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';

class Acknowledgement extends Component {
  static navigationOptions = props => {
   const { navigation } = props;
   const { navigate } = navigation;
   return {
     title: 'About',
     headerTitle: 'Acknowledgement',
     headerStyle: {
       marginTop: Platform.OS === 'android' ? 24 : 0
     },
   };
 }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Acknowledgements</Text>
      </View>
    );
  }
}

export default Acknowledgement;
