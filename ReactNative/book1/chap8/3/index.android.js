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
  ListView
} from 'react-native';

export default class MyProject extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2'])
    };
    this._renderRow = this._renderRow.bind(this);
  }

  _renderRow(rowData) {
    return (
      <View style={{height: 50}}>
        <Text>{rowData}</Text>
      </View>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow} />
    );
  }
}

AppRegistry.registerComponent('MyProject', () => MyProject);
