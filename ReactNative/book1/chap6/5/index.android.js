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

export class AutoExpandingTextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      height: 0,
    }
    this._onChange = this._onChange.bind(this);
  }

  _onChange(event) {
    this.setState({
      text: event.nativeEvent.text,
      height: event.nativeEvent.contentSize.height,
    })
  }

  render() {
    return (
      <TextInput {...this.props}
        multiline={true}
        onChange={this._onChange}
        style={[styles.textInputStyles, {height: Math.max(35, this.state.height)}]}
        value={this.state.text}
      />
    );
  }
}

export default class MyProject extends Component {
  constructor(props) {
    super(props);

    this._onChangeText = this._onChangeText.bind(this);
  }

  _onChangeText(newText) {
    console.log('inputed text: ' + newText);
  }

  render() {
    return (
      <View style={styles.container}>
        <AutoExpandingTextInput
          style={styles.textInputStyles}
          onChangeText={this._onChangeText}
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
    backgroundColor: '#f5FCFF',
  },
  textInputStyles: {
    fontSize: 20,
    width: 300,
    height: 30,
    backgroundColor: 'gray',
    paddingTop: 0,
    paddingBottom: 0,
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);
