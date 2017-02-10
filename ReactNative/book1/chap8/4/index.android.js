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
    this._renderSeparator = this._renderSeparator.bind(this);
  }

  _renderRow(rowData) {
    return (
      <View style={{height: 50}}>
        <Text>{rowData}</Text>
      </View>
    );
  }

  _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
    return (
      <View key={`{sectionID}-${rowID}`}
            style={{height: 1, backgroundColor: 'black'}}>
      </View>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderSeparator={this._renderSeparator}
      />
    );
  }
}

AppRegistry.registerComponent('MyProject', () => MyProject);
