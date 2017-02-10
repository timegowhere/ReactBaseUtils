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
  ListView,
  TouchableHighlight,
} from 'react-native';

let DemoCell = require('./DemoCell');

export default class MyProject extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2'])
    };
    this._renderRow = this._renderRow.bind(this);
    this._renderSeparator = this._renderSeparator.bind(this);
    this._pressRow = this._pressRow.bind(this);
  }

  _pressRow(rowID) {
    console.log("rowID: " + rowID);
  }

  _renderRow(rowData: string, sectionID: number, rowID: number, highlightRow) {
    return (
      <DemoCell onSelect={() => {
         //this._pressRow(rowID);
         highlightRow(sectionID, rowID);
       }} rowData={rowData}/>
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

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  text: {
    flex: 1,
  },
  seperator: {
    height: 1,
    backgroundColor: '#CCCCCC'
  }
});

AppRegistry.registerComponent('MyProject', () => MyProject);
