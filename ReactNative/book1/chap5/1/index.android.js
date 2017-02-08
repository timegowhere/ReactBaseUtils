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
        <View style={styles.test1} />
        <View style={styles.test2} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  test1: {
    width: 360,
    height: 60,
    backgroundColor: 'red',
  },
  test2: {
    width: 40,
    height: 40,
    backgroundColor: 'blue',
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);
