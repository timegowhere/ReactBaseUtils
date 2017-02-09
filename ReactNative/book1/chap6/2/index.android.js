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
} from 'react-native';

let Dimensions = require('Dimensions');
let totalHeight = Dimensions.get('window').height;

export default class MyProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textInputValue: '',
    }
    this.buttonPressed = this.buttonPressed.bind(this);
  }

  buttonPressed() {
    let textInputValue = 'new value';
    this.setState({textInputValue});
    this.refs.textInputRefer.setNativeProps({
      editable: false
    })
    this.refs.text2.setNativeProps({
      style: {color: 'blue', fontSize: 30,}
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.buttonStyle}
          onPress={this.buttonPressed}>
          Press me genterly
        </Text>
        <Text
          style={styles.textPromptStyle}
          ref={'text2'}>
          文字提示
        </Text>
        <TextInput style={styles.textInputStyles}
                   ref={'textInputRefer'}
                   value={this.state.textInputValue}
                   onChangeText={(textInputValue) => this.setState({textInputValue})}
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
  buttonStyle: {
    fontSize: 20,
    backgroundColor: 'gray',
  },
  textPromptStyle: {
    fontSize: 20,
  },
  textInputStyles: {
    width: 150,
    height: 50,
    fontSize: 20,
    backgroundColor: 'gray',
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);
