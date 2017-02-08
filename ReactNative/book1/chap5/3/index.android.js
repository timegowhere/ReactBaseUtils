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
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcome} opacity={0} />
        <View style={styles.welcome} opacity={0.1} />
        <View style={styles.welcome} opacity={0.25} />
        <View style={styles.welcome} opacity={0.5} />
        <View style={styles.welcome} opacity={0.75} />
        <View style={styles.welcome} opacity={1} />
        <View style={styles.welcome} opacity={5} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  welcome: {
    width: 50,
    height: 50,
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 25,
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);
