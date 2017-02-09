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

var Page1 = require('./Page1');
var Page2 = require('./Page2');
var Page3 = require('./Page3');
var Page4 = require('./Page4');

export default class MyProject extends Component {
  configureScene(route) {
    return Navigator.SceneConfigs.FadeAndroid;
  }

  renderScene(router, navigator) {
    this._navigator = navigator;

    switch(router.name) {
      case "Page1":
        return <Page1 navigator={navigator}/>;
      case "Page2":
        return <Page2 navigator={navigator}/>;
      case "Page3":
        return <Page3 navigator={navigator}/>;
      case "Page4":
        return <Page4 navigator={navigator}/>;
    }
  }

  render() {
    return (
      <Navigator initialRoute={{name: "Page1"}}
                 configureScene={this.configureScene}
                 renderScene={this.renderScene}
      />
    );
  }
}

AppRegistry.registerComponent('MyProject', () => MyProject);
