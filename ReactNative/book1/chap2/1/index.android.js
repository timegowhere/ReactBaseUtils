/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  NativeModules,
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class MyProject extends Component {
  buttonPress() {
    NativeModules.ExampleInterface.HandleMessage("testMessage");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}
              onPress={this.buttonPress}>
          Welcome to React Native!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'grey',
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);
