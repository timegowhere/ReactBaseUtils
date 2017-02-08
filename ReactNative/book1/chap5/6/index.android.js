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
  _onLayout(event) {
    {
      let {x, y, width, height} = event.nativeEvent.layout;
      console.log("top view x: " + x);
      console.log("top view y: " + y);
      console.log("top view width: " + width);
      console.log("top view height: " + height);
    }

    let Dimensions = require('Dimensions');
    let {width, height} = Dimensions.get('window');
    console.log("top2 width: " + width);
    console.log("top2 height: " + height);
  }
  _onLayoutText(event) {
    let {x, y, width, height} = event.nativeEvent.layout;
    console.log("TEXT x: " + x);
    console.log("TEXT y: " + y);
    console.log("TEXT width: " + width);
    console.log("TEXT height: " + height);
  }

  render() {
    return (
      <View style={styles.container} onLayout={this._onLayout}>
        <Text style={styles.welcome} onLayout={this._onLayoutText}>
          welcome to react native!
        </Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);
