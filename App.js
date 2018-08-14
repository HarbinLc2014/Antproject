import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Login from './src/Login';
import Home from './src/Home';
import Signal from './src/Signal';
import About from './src/About';
import Acknowledgement from './src/component/Acknowledgement';
import Privacy from './src/component/Privacy';
import Question1a from './src/QuestionFlow/Question1a';
import Question1b from './src/QuestionFlow/Question1b';
import Question1c from './src/QuestionFlow/Question1c';
import Question2a from './src/QuestionFlow/Question2a';
import Question2b from './src/QuestionFlow/Question2b';
import Question3a from './src/QuestionFlow/Question3a';
import Question3b from './src/QuestionFlow/Question3b';
import Reminder from './src/QuestionFlow/Reminder';
import Reminder2 from './src/QuestionFlow/Reminder2';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      Login: { screen: Login },
      HomeFlow: { screen: TabNavigator({
        MainHome: { screen: StackNavigator({
          Home: { screen: Home },
          Question: { screen: Question1a },
          Question1b: { screen: Question1b },
          Question1c: { screen: Question1c },
          Reminder: { screen: Reminder },
          Question2a: { screen: Question2a },
          Question2b: { screen: Question2b },
          Question3a: { screen: Question3a },
          Question3b: { screen: Question3b },
          Reminder2: { screen: Reminder2 }
        })},
        About: { screen: StackNavigator({
          MainAbout: { screen: About },
          Acknowledgement: { screen: Acknowledgement },
          Privacy: { screen: Privacy }
        }) }
      },
      {
        navigationOptions: {
          tabBarVisible: true
        },
      }
    )  }
    },
    {
      navigationOptions: {
        tabBarVisible: false
      },
    }
  );
    return (
      <MainNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
