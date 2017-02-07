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
  BackAndroid,
  Navigator,
  TextInput
} from 'react-native';

let Dimensions = require('Dimensions');
let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;

export default class ConfirmDialog extends Component {
  render() {
    return (
      <View style={styles.confirmCont}>
        <View style={styles.dialogStyle}>
          <Text style={styles.textPrompt}>
            {this.props.promptToUser}
          </Text>
          <Text style={styles.yesButton} onPress={this.props.userConfirmed} numberOfLines={3}>
            {'\r\n'}确定
          </Text>
          <Text style={styles.cancelButton} onPress={this.props.userCanceled} numberOfLines={3}>
            {'\r\n'}取消
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  confirmCont: {
    position: 'absolute',
    top: 0,
    width: totalWidth,
    height: totalHeight,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
  },
  dialogStyle: {
    position: 'absolute',
    top: totalHeight * 0.4,
    left: totalWidth / 10,
    width: totalWidth * 0.8,
    height: totalHeight * 0.3,
    backgroundColor: 'white',
  },
  textPrompt: {
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: 20,
    color: 'black',
  },
  yesButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    width: totalWidth * 0.35,
    height: totalHeight * 0.12,
    backgroundColor: 'gray',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  cancelButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: totalWidth * 0.35,
    height: totalHeight * 0.12,
    backgroundColor: 'gray',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

module.exports = ConfirmDialog;
