/**
 * Created by clock on 2017/2/9.
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';

let angryMood = require('./image/angry.jpg');
let MCV = require('./MCV');

export default class DiaryList extends Component {
  constructor(props) {
    super(props);
    this.updataSearchKeyword = this.updataSearchKeyword.bind(this);
  }

  updataSearchKeyword() {
  }

  render() {
    return (
      <View style={MCV.container}>
        <View style={MCV.firstRow}>
          {
            (Platform.OS === 'android')
              ? (
                <View style={{borderWidth: 1}}>
                  <TextInput autoCapitalize='none'
                             placeholder='输入搜索关键字'
                             clearButtonMode="while-editing"
                             onChangeText={this.updataSearchKeyword}
                             style={MVC.searchBarTextInput}/>
                </View>
              )
              : (
                <TextInput autoCapitalize="none"
                           placeholder='输入搜索关键字'
                           clearButtonMode="while-editing"
                           onChangeText={this.updataSearchKeyword}
                           style={MVC.searchBarTextInput}/>

              )
          }
          <TouchableOpacity>
            <Text style={MCV.middleButton}>
              写日记
            </Text>
          </TouchableOpacity>
        </View>

        <View style={MCV.diaryAbstractList}>
          <View style={MCV.secondRow}>
            <Image style={MCV.moodStyle} source={angryMood}/>
            <View style={mCV.subViewInReader}>
              <TouchableOpacity onPress={this.props.selectLististItem}>
                <Text style={MCV.textInReader}>
                  某变量记录假日记列表标题
                </Text>
              </TouchableOpacity>
              <Text style={MCV.textInReader}>
                某变量记录假日记列表时间
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

module.exports = DiaryList;
