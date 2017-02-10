/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Switch,
} from 'react-native';

export default class MyProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aSwitch: true,
    }

    this.aSwitchChanged = this.aSwitchChanged.bind(this);
  }

  aSwitchChanged() {
    this.setState(() => {
      return {
        aSwitch: !this.state.aSwitch,
      }
    })
  }

  render() {
    return (
      <View>
        <Switch style={{margin: 20}} value={this.state.aSwitch} onValueChange={this.aSwitchChanged}/>
        <Switch style={{margin: 20}} value={!this.state.aSwitch}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('MyProject', () => MyProject);
