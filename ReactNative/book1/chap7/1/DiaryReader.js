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

export default class DiaryReader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={MCV.container}>
        <View style={MCV.firstRow}>
          <TouchableOpacity><Text style={MCV.middleButton}>返回</Text> </TouchableOpacity>
          <TouchableOpacity><Text style={MCV.middleButton}>上一篇</Text> </TouchableOpacity>
          <TouchableOpacity><Text style={MCV.middleButton}>下一篇</Text> </TouchableOpacity>
        </View>
        <View style={MCV.secondRow}>
          <Image style={MCV.moodStyle} source={angryMood} />
          <View style={MCV.subViewInReader}>
            <Text style={MCV.textInReader}>
              日记标题：某变量
            </Text>
            <Text style={MCV.textInReader}>
              时间：某变量
            </Text>
          </View>
        </View>
        <TextInput style={[MCV.diaryBodyStyle, {color: 'black'}]}
                   multiline={true}
                   editable={false}
                   value={"某变量记录日及正文"}/>
      </View>
    );
  }
}

module.exports = DiaryReader;
