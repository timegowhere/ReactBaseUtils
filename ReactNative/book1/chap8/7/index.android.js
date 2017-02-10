/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  ProgressBarAndroid,
} from 'react-native';

export default class MyProject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ProgressBarAndroid
      />
    );
  }
}

AppRegistry.registerComponent('MyProject', () => MyProject);
