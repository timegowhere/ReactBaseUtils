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
  TextInput
} from 'react-native';

let Dimensions = require('Dimensions');
let totalWidth = Dimensions.get('window').width;
let leftStartPoint = totalWidth * 0;
let componentWidth = totalWidth * 0.6;

export default class RegisterLeaf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputedNum: '',
      inputedPW: '',
    }
  }

  updateNum(newText) {
    this.setState((state) => {
        return {
          inputedNum: newText,
        };
      })
  }

  changeNumDone() {
    console.log('react native has changed inputed num');
  }

  updatePW(newText) {
    this.setState(() => {
      return {
        inputedPW: newText,
      }
      }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.numberInputStyle}
          placeholder={'请输入手机号'}
                   onChangeText={(newText) => this.updateNum(newText)}
        />

        <Text style={styles.textPromptStyle}>
              您输入的手机号：{this.state.inputedNum}
        </Text>

        <TextInput style={styles.passwordInputStyle}
                   placeholder={'请输入密码'}
                   password={true}
                   onChangeText={(newText) => this.updatePW(newText)}
        />

        <Text style={styles.bigTextPrompt}>
              确定
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
  numberInputStyle: {
    top: 20,
    left: leftStartPoint,
    width: componentWidth,
    backgroundColor:'gray',
    fontSize: 20,
  },
  textPromptStyle: {
    top: 30,
    left: leftStartPoint,
    width: componentWidth,
    fontSize: 20,
  },
  passwordInputStyle: {
    top: 50,
    left: leftStartPoint,
    width: componentWidth,
    backgroundColor:'gray',
    fontSize: 20,
  },
  bigTextPrompt: {
    top: 70,
    left: leftStartPoint,
    width: componentWidth,
    backgroundColor:'gray',
    color: 'white',
    textAlign: 'center',
    fontSize: 60,
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = RegisterLeaf;
