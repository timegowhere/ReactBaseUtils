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
  TextInput
} from 'react-native';

let Dimensions = require('Dimensions');
let totalWidth = Dimensions.get('window').width;
let leftStartPoint = totalWidth * 0;
let componentWidth = totalWidth * 0.6;

export default class WaitingLeaf extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.textPromptStyle}>
          注册使用手机号：{this.props.phoneNumber}
        </Text>

        <Text style={styles.textPromptStyle}>
          注册使用密码：{this.props.userPW}
        </Text>

        <Text style={styles.bigTextPrompt} onPress={this.goBack}>
          返回
        </Text>
      </View>
    );
  }

  goBack() {
    this.props.navigator.push({name: 'register'});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textPromptStyle: {
    top: 30,
    left: leftStartPoint,
    width: componentWidth,
    fontSize: 20,
  },
  bigTextPrompt: {
    top: 70,
    left: leftStartPoint,
    width: componentWidth,
    backgroundColor: 'gray',
    color: 'white',
    textAlign: 'center',
    fontSize: 60,
  },
});

module.exports = WaitingLeaf;
