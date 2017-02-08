/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MyProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bigButtonPointerEvents: null,
    }

    this.onBigButtonPress = this.onBigButtonPress.bind(this);
    this.onSmallButtonPress = this.onSmallButtonPress.bind(this);
  }

  onBigButtonPress() {
    console.log('big button pressed.');
  }

  onSmallButtonPress() {
    if(this.state.bigButtonPointerEvents == null) {
      console.log('big button will not response.');
      this.setState({bigButtonPointerEvents:'none'});
      return;
    }
    console.log('big button will responde.');
    this.setState({bigButtonPointerEvents:'box-none'});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.sButtonStyle} onPress={this.onSmallButtonPress}>
          Small Button
        </Text>
        <Text style={styles.bButtonStyle} onPress={this.onBigButtonPress}
              pointerEvents={this.state.bigButtonPointerEvents}>
          Big Button
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sButtonStyle: {
    fontSize: 20,
    left: 130,
    top: 50,
    width: 150,
    height: 35,
    backgroundColor: 'gray',
  },
  bButtonStyle: {
    fontSize: 20,
    left: 130,
    top: 130,
    width: 150,
    height: 70,
    backgroundColor: 'gray',
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);
