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
    this.tempfunc = this.tempfunc.bind(this);
    this.getTextInputPosition = this.getTextInputPosition.bind(this);
  }

  componentDidMount() {
    var aref = this.tempfunc;
    window.setTimeout(aref, 1);
  }

  tempfunc() {
    this.refs.aTextInputRef.measure(this.getTextInputPosition)
  }

  getTextInputPosition(fx, fy, width, height, px, py) {
    console.log('getTextInputPosition');
    console.log('width: ' + width);
    console.log('height: ' + height);
    console.log('fx: ' + fx);
    console.log('fy: ' + fy);
    console.log('px: ' + px);
    console.log('py: ' + py);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{borderWidth: 1}}>
          <TextInput style={styles.textInputStyles}
                     ref={'aTextInputRef'}
                     defaultValue={'Ajfg你好'}
                     underlineColorAndroid={'white'}
          />
        </View>
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
