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

export default class DiaryWriter extends Component {
  constructor(props) {
    super(props);
    this.returnPress = this.returnPress.bind(this);
  }

  returnPress () {
    Alert.alert(
      '请确认',
      '你确认要退回日记列表？',
      [
        {text: '确定'},
        {text: '取消'}
      ]
    )
  }

  render() {
    return (
      <View style={MCV.container}>
        <View style={MCV.firstRow}>
          <TouchableOpacity onPress={this.returnPress}><Text style={MCV.smallButton}>返回</Text> </TouchableOpacity>
          <TouchableOpacity onPress={this.selectMood}><Text style={MCV.longButton}>某变量当前文字按钮</Text> </TouchableOpacity>
          <TouchableOpacity><Text style={MCV.smallButton}>保存</Text> </TouchableOpacity>
        </View>
        <TextInput style={MCV.titleInputStyle} placeholder={'写个日记标题吧'} />
        <TextInput style={MCV.diaryBodyStyle} placeholder={'日记正文请在此输入'} />
      </View>
    );
  }
}

module.exports = DiaryWriter;
