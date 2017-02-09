/**
 * Created by clock on 2017/2/9.
 */
'use strict';
import {
  StyleSheet,
} from 'react-native';

let Dimensions = require('Dimensions');
let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;
let textSize = totalWidth / 18;
let readingUITitleHeight = textSize * 6;
let diaryBodyLine = totalHeight / textSize - 6;
let returnButtonHeight = textSize * 5;

let MCV = StyleSheet.create({
  container: {
    top: 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 1,
  },
  firstRow: {
    height: textSize * 1.4 + 2,
    flexDirection: 'row',
    width: totalWidth - 4,
    justifyContent: 'space-around',
    margin: 2,
  },
  longButton: {
    height: textSize * 1.4,
    backgroundColor:'gray',
    width: textSize * 10,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: textSize,
  },
  middleButton: {
    height: textSize * 1.4,
    backgroundColor: 'gray',
    width: textSize * 5,
    borderWidth:8,
    textAlign:'center',
    fontSize:textSize,
  },
  diaryAbstractList: {
    flex: 1,
    margin: 4,
    width: totalWidth - 4,
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  diaryBodyStyle: {
    flex: 1,
    width: totalWidth - 8,
    fontSize: textSize,
    backgroundColor: 'gray',
    margin: 4,
  },
  smallButton: {
    height: textSize * 1.4,
    backgroundColor: 'gray',
    width: textSize * 3,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: textSize,
  },
  moodStyle: {
    height: textSize * 3.2,
    width: textSize * 3.2,
    borderRadius: textSize * 1.6,
  },
  subViewInReader: {
    width: totalWidth - 5 - textSize * 3.2,
  },
  textInReader: {
    height: textSize * 1.4,
    fontSize: textSize,
    backgroundColor: 'gray',
    margin: 2,
  },
  secondRow: {
    flexDirection:'row',
    alignItems:'center',
  },
  titleInputStyle: {
    fontSize: textSize,
    backgroundColor: 'gray',
    height: textSize * 2.4,
    color: 'black',
    margin: 4,
    borderWidth: 2,
    borderColor: 'black',
  },
  searchBarTextInput: {
    backgroundColor: 'white',
    borderColor:'black',
    borderWidth: 1,
    height: textSize * 1.4,
    width: textSize * 10,
    paddingTop: 0,
    paddingBottom: 0,
    top: 1,
    left: 1,
    fontSize: 14,
  },
});

module.exports = MCV;