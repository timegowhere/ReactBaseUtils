/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
} from 'react-native';

let DiaryList = require('./DiaryList');
let DiaryWriter = require('./DiaryWriter');
let DiaryReader = require('./DiaryReader');

export default class MyProject extends Component {
  constructor(props) {
    super(props);
    this.showDiaryList = this.showDiaryList.bind(this);
    this.showDiaryReader = this.showDiaryReader.bind(this);
    this.showDiaryWriter = this.showDiaryWriter.bind(this);
  }

  showDiaryList() {
    return (<DiaryList/>);
  }

  showDiaryReader() {
    return (<DiaryReader/>);
  }

  showDiaryWriter() {
    return (<DiaryWriter/>);
  }

  render() {
    //return this.showDiaryList();
    //return this.showDiaryReader();
    return this.showDiaryWriter();
  }
}

AppRegistry.registerComponent('MyProject', () => MyProject);
