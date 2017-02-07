/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  BackAndroid
} from 'react-native';

var RegisterLeaf = require('./RegisterLeaf');
var WaitingLeaf = require('./WaitingLeaf');

export default class MyProject extends Component {
  configureScene(route) {
    return Navigator.SceneConfigs.FadeAndroid;
  }

  renderScene(router, navigator) {
    this._navigator = navigator;

    switch(router.name) {
      case "register":
        return <RegisterLeaf navigator={navigator}/>;
      case "waiting":
        return <WaitingLeaf navigator={navigator}
                            phoneNumber={router.phoneNumber}
                            userPW={router.userPW}
        />;
    }
  }

  componentDidMount() {
    var navigator = this._navigator;
    BackAndroid.addEventListener('NaviModuleListener', () => {
      if(navigator && navigator.getCurrentRoutes().length > 1) {
        navigator.pop();
        return true;
      }
      return false;
    })
  }

  componentWillUnMount() {
    BackAndroid.removeEventListener('NaviModuleListener');
  }

  render() {
    return (
      <Navigator initialRoute={{name: 'register'}}
                 configureScene={this.configureScene}
                 renderScene={this.renderScene}
                 />
    )
  }
}

AppRegistry.registerComponent('MyProject', () => MyProject);
