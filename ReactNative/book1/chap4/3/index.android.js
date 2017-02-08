/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  DeviceEventEmitter,
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

  handlerAndroidMessage(aMessage)
  {
    console.log("handlerAndroidMessage: " + aMessage)
  }

  componentWillMount() {
    console.log("componentWillMount");
    DeviceEventEmitter.addListener('AndroidToRNMessage', this.handlerAndroidMessage);
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
