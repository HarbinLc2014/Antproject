import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TimerMixin from 'react-timer-mixin';

class NBackPractice extends Component {
  state = { stage: 1 };
  componentDidMount() {
    TimerMixin.setTimeout(() => {
      this.setState({ stage: 2 });
      TimerMixin.setTimeout(() => {
        this.setState({ stage: 3 });
        TimerMixin.setTimeout(() => {
          this.setState({ stage: 4 });
          TimerMixin.setTimeout(() => {
            this.setState({ stage: 5 });
            TimerMixin.setTimeout(() => {
              this.setState({ stage: 6 });
              TimerMixin.setTimeout(() => {
                this.setState({ stage: 7 });
                TimerMixin.setTimeout(() => {
                  this.setState({ stage: 8 });
                }, 2500);
              }, 500);
            }, 500);
          }, 2500);
        }, 500);
      }, 500);
    }, 750);
  }
  renderContent() {
    if(this.state.stage == 1){
    return <Text>1-back Practice Block</Text>;
    }
    else if (this.state.stage == 2 || this.state.stage ==5) {
      return <Text>Get Ready</Text>;
    }
    else if (this.state.stage == 3) {
      return <Text>K</Text>;
    }
    else if (this.state.stage == 4) {
      return;
    }
    else if (this.state.stage == 6) {
      return <Text>P</Text>;
    }
    else if (this.state.stage == 7) {
      return <Text>Respond or not</Text>;
    }
    else if (this.state.stage == 8) {
      return <Text>FeedBack -- Accuracy: </Text>;
    }
    else {
      return;
    }
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {this.renderContent()}
      </View>
    );
  }
}

export default NBackPractice;
