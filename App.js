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
import Instruction from './src/NInstructionFlow/Instruction.js';
import Instruction1 from './src/NInstructionFlow/Instruction1.js';
import Instruction2 from './src/NInstructionFlow/Instruction2.js';
import Instruction3 from './src/NInstructionFlow/Instruction3.js';
import Instruction4 from './src/NInstructionFlow/Instruction4.js';
import Instruction5 from './src/NInstructionFlow/Instruction5.js';
import Practice1 from './src/NBackPractice/Practice1.js';
import NBackPractice from './src/NBackPractice/NBackPractice.js';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      NInstruction: { screen: StackNavigator({
        Instruction: {screen: Instruction},
        Instruction1: {screen: Instruction1},
        Instruction2: {screen: Instruction2},
        Instruction3: {screen: Instruction3},
        Instruction4: {screen: Instruction4},
        Instruction5: {screen: Instruction5},
        Practice1: {screen: Practice1},
        NBackPractice: {screen: NBackPractice}
      })
    },
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
