/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Navigator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

var ImageEquallyEnlarge = require('./ImageEquallyEnlarge');

export default class MyProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageEquallyEnlarge
          style={styles.image1Style}
          source={require('./test1.jpg')}
          originalWidth={60}
          originalHeight={35}
        />
        <ImageEquallyEnlarge
          style={styles.image2Style}
          source={require('./test1.jpg')}
          originalWidth={60}
          originalHeight={35}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
  },
  image1Style: {
    width: 240,
    height: 360,
    backgroundColor: 'red',
  },
  image2Style: {
    width: 300,
    height: 460,
    backgroundColor: 'red',
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);
