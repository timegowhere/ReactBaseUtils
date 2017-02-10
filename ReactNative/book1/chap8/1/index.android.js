/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  RefreshControl,
} from 'react-native';

export default class MyProject extends Component {
  constructor(props) {
    super(props);
    this._onScrollBeginDrag = this._onScrollBeginDrag.bind(this);
    this._onScrollEndDrag = this._onScrollEndDrag.bind(this);
    this._onMomentumScrollBegin = this._onMomentumScrollBegin.bind(this);
    this._onMomentumScrollEnd = this._onMomentumScrollEnd.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
  }

  _onScrollBeginDrag() {
    console.log('_onScrollBeginDrag');
  }

  _onScrollEndDrag() {
    console.log('_onScrollEndDrag');
  }

  _onMomentumScrollBegin() {
    console.log('_onMomentumScrollBegin');
  }

  _onMomentumScrollEnd() {
    console.log('_onMomentumScrollEnd');
  }

  _onRefresh() {
    console.log('_onRefresh');
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}
                    onMomentumScrollBegin={this._onMomentumScrollBegin}
                    onMomentumScrollEnd={this._onMomentumScrollEnd}
                    onScrollBeginDrag={this._onScrollBeginDrag}
                    onScrollEndDrag={this._onScrollEndDrag}
                    refreshControl={
                      <RefreshControl
                        refreshing={true}
                        onRefresh={this._onRefresh()}
                        tintColor='#ff0000'
                        title='Loading...'
                        colors={['#ff0000', '#00ff00', '#0000ff']}
                      />}
        />

        <View style={styles.aView}/>
        <ScrollView horizontal={true}
                    style={styles.midScrollView}>
          <View style={styles.bView}/>
          <View style={styles.bView}/>
        </ScrollView>
        <View style={styles.aView}/>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  scrollView: {
    backgroundColor: '#CCCCCC',
  },
  midScrollView: {
    height: 150,
    borderWidth: 1,
    borderColor: 'black',
  },
  aView: {
    margin: 1,
    padding: 0,
    backgroundColor: '#eaeaea',
    height: 375,
  },
  bView: {
    flex: 1,
    height: 148,
    width: 300,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'gray',
  },
})
AppRegistry.registerComponent('MyProject', () => MyProject);
