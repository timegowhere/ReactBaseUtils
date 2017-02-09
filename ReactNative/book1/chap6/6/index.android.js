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
  Clipboard,
} from 'react-native';

export default class MyProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textFromClipboard: "",
    };

    this.pasteFromClipboard = this.pasteFromClipboard.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  pasteFromClipboard() {
    Clipboard.getString().then((textFromClipboard) => {
      this.setState({textFromClipboard});
    }).catch((error) => {
      console.log("error: " + error);
    });
  }

  copyToClipboard() {
    Clipboard.setString("ABCD你好");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.textFromClipboard}
        </Text>
        <Text style={styles.instructions} onPress={this.copyToClipboard}>
          copy
        </Text>
        <Text style={styles.instructions} onPress={this.pasteFromClipboard}>
          paste
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
    backgroundColor: '#f5FCFF',
    borderWidth: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 15,
    backgroundColor: 'gray',
    fontSize: 30,
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);
