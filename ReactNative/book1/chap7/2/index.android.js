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
} from 'react-native';

let DiaryList = require('./DiaryList');
let DiaryWriter = require('./DiaryWriter');
let DiaryReader = require('./DiaryReader');

let angryMood = require('./image/angry.jpg');
let happyMood = require('./image/happy.jpg');
let miseryMood = require('./image/misery.jpg');
let peaceMood = require('./image/peace.jpg');
let sadMood = require('./image/sad.jpg');

export default class MyProject extends Component {
  realDiaryList: null;
  listIndex: 0;

  bubleSortDiaryList() {
    let tempObj;
    let len1 = this.realDiaryList.length;
    let len2 = len1 - 1;
    for (let i = 0; i < len1; i++) {
      for (let j = 0; j < len2 - i; j++) {
        if (this.realDiaryList[j].index > this.realDiaryList[j + 1].index) {
          tempObj = this.realDiaryList[j];
          this.realDiaryList[j] = this.realDiaryList[j + 1];
          this.realDiaryList[j + 1] = tempObj;
        }
      }
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      uiCode: 1,
      diaryMood: peaceMood,
      diaryTime: '读取中......',
      diaryTitle: '读取中......',
      diaryBody: '读取中......',
    };

    this.bubleSortDiaryList = this.bubleSortDiaryList.bind(this);

    AsyncStorage.getAllKeys().then(
      (keys) => {
        let j = results.length;
        this.realDiaryList = Array();
        for (let i = 0; i < j; i++) {
          this.realDiaryList[i] = JSON.parse(results[i][1]);
        }
        this.bubleSortDiaryList();
        if (j > 0) {
          j--;
          this.listIndex = j;
          let newMoodIcon;
          switch (this.realDiaryList[j].mood) {
            case 2:
              newMoodIcon = angryMood;
              break;
            case 3:
              newMoodIcon = sadMood;
              break;
            case 4:
              newMoodIcon = happyMood;
              break;
            case 5:
              newMoodIcon = miseryMood;
              break;
            default:
              newMoodIcon = peaceMood;
              break;
          }
          let newtitle = this.realDiaryList[j].title;
          let newbody = this.realDiaryList[j].body;
          let ctime = new Date(this.realDiaryList[j].time);
          let timeString = '' + ctime.getFullYear() + '年' +
            (ctime.getMonth() + 1) + '月' +
            (ctime.getDay() + 1) + '日' +
            ctime.getHours() + '' + ctime.getMinutes();

          this.setState(() => {
            return {
              diaryMood: newMoodIcon,
              diaryTime: timeString,
              diaryTitle: newtitle,
              diaryBody: newbody,
            }
          });
        } else {
          this.setState(() => {
            return {
              diaryTime: '没有历史日记',
              diaryTitle: '没有历史日记',
              diaryBody: '',
            }
          });
        }
      }
    ).catch((error) => {
        console.log('then error: ' + error);
      }
    ), (error) => {
      console.log('getAllKeys error: ' + error.message);
    };
  }

  readingNextPressed() {
    if (this.realDiaryList.length === 0) return;
    if (this.listIndex === (this.realDiaryList.length - 1)) return;
    this.listIndex++;
    let j = this.listIndex;

    let newMoodIcon;
    switch (this.realDiaryList[j].mood) {
      case 2:
        newMoodIcon = angryMood;
        break;
      case 3:
        newMoodIcon = sadMood;
        break;
      case 4:
        newMoodIcon = happyMood;
        break;
      case 5:
        newMoodIcon = miseryMood;
        break;
      default:
        newMoodIcon = peaceMood;
        break;
    }

    let newtitle = this.realDiaryList[j].title;
    let newbody = this.realDiaryList[j].body;
    let ctime = new Date(this.realDiaryList[j].time);
    let timeString = '' + ctime.getFullYear() + '年' +
      (ctime.getMonth() + 1) + '月' +
      (ctime.getDay() + 1) + '日' +
      ctime.getHours() + '' + ctime.getMinutes();

    this.setState(() => {
      return {
        diaryMood: newMoodIcon,
        diaryTime: timeString,
        diaryTitle: newtitle,
        diaryBody: newbody,
      };
    });
  }

  returnPressed() {
    this.setState(() => {
      return {
        uiCode: 1,
      }
    })
  }

  saveDiaryAndReturn(newDiaryMood, newDiaryBody, newDiaryTitle) {
    let ctime = new Date();
    let timeString = '' + ctime.getFullYear() + '年' +
      (ctime.getMonth() + 1) + '月' +
      (ctime.getDay() + 1) + '日' +
      ctime.getHours() + '' + ctime.getMinutes();

    let aDiary = Object();
    aDiary.title = newDiaryTitle;
    aDiary.body = newDiaryBody;
    aDiary.mood = newDiaryMood;
    aDiary.time = ctime;
    aDiary.sectionID = '' + ctime.getFullYear() + '年' + (ctime.getMonth() + 1) + '月';
    aDiary.index = Date.parse(ctime);

    AsyncStorage.setItem('' + aDiary.index, JSON.stringify(aDiary)).then(
      () => {
        console.log('save success.');
      }, (error) => {
        console.log('save failed, erro: ' + error.message);
      }
    );

    let totalLength = this.realDiaryList.length;
    this.realDiaryList[totalLength] = aDiary;
    this.listIndex = totalLength;

    let newMoodIcon;
    switch (this.realDiaryList[j].mood) {
      case 2:
        newMoodIcon = angryMood;
        break;
      case 3:
        newMoodIcon = sadMood;
        break;
      case 4:
        newMoodIcon = happyMood;
        break;
      case 5:
        newMoodIcon = miseryMood;
        break;
      default:
        newMoodIcon = peaceMood;
        break;
    }

    this.setState(
      () => {
        return {
          uiCode: 1,
          diaryMood: newMoodIcon,
          diaryTime: timeString,
          diaryTitle: newDiaryTitle,
          diaryBody: newDiaryBody,
        }
      }
    )
  }

  writeDiary() {
    this.setState(
      () => {
        return {
          uiCode: 3,
        };
      }
    )
  }

  searchKeyword(keyword) {
    console.log('search button pressk, the keyword is: ' + keyword);
  }

  selectLististItem() {
    this.setState(
      () => {
        return {
          uiCode: 2,
        };
      }
    )
  }

  showDiaryList() {
    return (
      <DiaryList fakeListTitle={this.state.diaryTitle}
                 fakeListTime={this.state.diaryTime}
                 fakeListMood={this.state.diaryMood}
                 selectLististItem={this.selectLististItem}
                 searchKeyword={this.searchKeyword}
                 writeDiary={this.writeDiary}
      />
    )
  }

  showDiaryWriter() {
    return (
      <DiaryWriter returnPressed={this.returnPressed}
                   saveDiaryAndReturn={this.saveDiaryAndReturn}
      />
    )
  }

  showDiaryReader() {
    return (
      <DiaryReader returnTo={this.ret}
                   saveDiaryAndReturn={this.saveDiaryAndReturn}
      />
    )
  }



  render() {
    //return this.showDiaryList();
    //return this.showDiaryReader();
    return this.showDiaryWriter();
  }
}

AppRegistry.registerComponent('MyProject', () => MyProject);
