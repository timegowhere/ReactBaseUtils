/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  DeviceEventEmitter,
  Keyboard,
  StatusBar,
} from 'react-native';

let Dimensions = require('Dimensions');
let totalHeight = Dimensions.get('window').height;

export default class MyProject extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white', borderWidth: 1}}>
        <StatusBar
          animated={true}
          hidden={false}
          backgroundColor={'blue'}
          translucent={true}
          barStyle={'default'}
          showHideTransition={'fade'}
          networkActivityIndicatorVisible={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textInputStyles: {
    width: 200,
    height: 55,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
    paddingBottom: 0,
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);
