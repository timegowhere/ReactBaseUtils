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
  TextInput,
  DeviceEventEmitter,
  Keyboard,
} from 'react-native';

let Dimensions = require('Dimensions');
let totalHeight = Dimensions.get('window').height;

export default class MyProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      KeyboardShow: false,
    }
    this.KeyboardDidShowListener = this.KeyboardDidShowListener.bind(this);
    this.KeyboardDidHideListener = this.KeyboardDidHideListener.bind(this);
  }

  KeyboardDidShowListener(event) {
    this.setState({KeyboardShow: true});
  }

  KeyboardDidHideListener(event) {
    this.setState({KeyboardShow: false});
  }

  componentWillMount() {
    Keyboard.addListener('keyboardDidShow', this.KeyboardDidShowListener)
    Keyboard.addListener('keyboardDidHide', this.KeyboardDidHideListener)
  }

  componentWillUnMount() {
    Keyboard.removeListener('keyboardDidShow', this.KeyboardDidShowListener)
    Keyboard.removeListener('keyboardDidHide', this.KeyboardDidHideListener)
  }

  onDismissKeyboard() {
    let dismissKeyboard = require('dismissKeyboard');
    dismissKeyboard();
  }

  render() {
    return (
      <View style={[styles.container, this.state.KeyboardShow && styles.bumpedContainer]}>
        <Text
          style={styles.buttonStyle}
          onPress={this.onDismissKeyboard}>
          Dismiss Keyboard
        </Text>
        <TextInput
          style={styles.textInputStyles}
          onFocus={() => this.setState({bumpedUp: 1})}
          onEndEditing={() =>this.setState({bumpedUp: 0})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bumpedContainer: {
    marginBottom: 210,
    marginTop: -210,
  },
  buttonStyle: {
    top: 250,
    fontSize: 30,
    backgroundColor: 'gray',
  },
  textInputStyles: {
    position: 'absolute',
    top: totalHeight - 80,
    left: 20,
    width: 200,
    height: 80,
    fontSize: 20,
    backgroundColor: 'gray',
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);
