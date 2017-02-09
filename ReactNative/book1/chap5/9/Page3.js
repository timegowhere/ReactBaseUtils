/**
 * Created by clock on 2017/2/9.
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
var NaviBar = require('./NaviBar');

export default class Page3 extends Component {
  constructor(props) {
    super(props);
    this.onNaviBarPress = this.onNaviBarPress.bind(this);
  }

  onNaviBarPress(aNumber) {
    switch(aNumber) {
      case 0:
        this.props.navigator.replace({name: 'Page1'});
        return;
      case 1:
        this.props.navigator.replace({name: 'Page2'});
        return;
      case 2:
        return;
      case 3:
        this.props.navigator.replace({name: 'Page4'});
        return;
    }
  }

  render() {
    var naviStatus = [0, 0, 1, 0];
    return (
      <View style={styles.container}>
        <NaviBar naviBarStatus={naviStatus} onNaviBarPress={this.onNaviBarPress} />
        <View style={styles.whatLeft} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  whatLeft: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: 'black',
  },
  textStyle1: {
    fontSize: 20,
    textAlign: 'center',
  },
});

module.exports = Page3;
