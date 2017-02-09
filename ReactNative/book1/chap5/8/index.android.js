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
  View,
  Image,
} from 'react-native';

export default class MyProject extends Component {
  imageA: null;

  componentWillMount() {
    this.imageA = require("./test1.jpg");
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.imageA} style={[styles.imageStyle, {resizeMode: 'cover'}]}/>
        <Image source={this.imageA} style={[styles.imageStyle, {resizeMode: 'contain'}]}/>
        <Image source={this.imageA} style={[styles.imageStyle, {resizeMode: 'stretch'}]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'gray',
  },
  imageStyle: {
    margin: 2,
    backgroundColor: 'white',
    width: 100,
    height: 100,
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);
