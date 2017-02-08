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
  _onTouchStart(event) {
    console.log("touch start: " + event.timestamp + ", X: "
      + event.nativeEvent.locationX + ", Y: "
      + event.nativeEvent.locationY)
  }
  _onTouchMove(event) {
    console.log("touch move: " + event.timestamp + ", X: "
      + event.nativeEvent.locationX + ", Y: "
      + event.nativeEvent.locationY)
  }
  _onTouchEnd(event) {
    console.log("touch end: " + event.timestamp + ", X: "
      + event.nativeEvent.locationX + ", Y: "
      + event.nativeEvent.locationY)
  }

  render() {
    console.log("enter render")
    return (
      <View style={styles.container}
            onTouchStart={this._onTouchStart}
            onTouchMove={this._onTouchMove}
            onTouchEnd={this._onTouchEnd}
      >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);
