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
        <Text style={styles.welcome0}>React Native0!</Text>
        <Text style={styles.welcome1}>React Native1!</Text>
        <Text style={styles.welcome2}>React Native2!</Text>
        <Text style={styles.welcome3}>React Native3!</Text>
        <Text style={styles.welcome4}>React Native4!</Text>
        <Text style={styles.welcome5}>React Native5!</Text>
        <Text style={styles.welcome6}>React Native6!</Text>
        <Text style={styles.welcome7}>React Native7!</Text>
        <Text style={styles.welcome8}>React Native8!</Text>
        <Text style={styles.welcome9}>React Native9!</Text>
        <Text style={styles.welcome10}>React Native10!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome0: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate: '45deg'}],
  },
  welcome1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotateX: '45deg'}],
  },
  welcome2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotateY: '45deg'}],
  },
  welcome3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotateZ: '45deg'}],
  },
  welcome4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{scale: 2}],
  },
  welcome5: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{scaleX: 2}],
  },
  welcome6: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{scaleY: 2}],
  },
  welcome7: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{translateX: 200}],
  },
  welcome8: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{translateY: 150}],
  },
  welcome9: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{skewX: '45deg'}],
  },
  welcome10: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{skewY: '45deg'}],
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);
