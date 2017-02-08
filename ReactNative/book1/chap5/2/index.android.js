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
        <View style={styles.vs} />
        <View style={styles.vs} />
        <View style={styles.vs} />
        <View style={styles.vs} />
        <View style={styles.vs} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  vs: {
    height: 50,
    backgroundColor: 'gray',
  },
  vs1: {
    flex: 1,
    backgroundColor: 'black',
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);
