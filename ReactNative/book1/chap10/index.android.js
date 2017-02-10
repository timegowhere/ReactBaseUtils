/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

var Image1 = require('./image/image1.jpg');
var Image2 = require('./image/image2.jpg');
var PixelRatio = require('PixelRatio');
let PixelRatio = PixelRatio.get();

class Image1Displayer extends React.Component {
  constructor(props) {
    super(props);
    this.changeScene = this.changeScene.bind(this);
  }

  changeScene() {
    this.props.callback();
    this.props.navigator.push({
      name: "2",
      UIIndex: this.props.UIIndex,
      cbForLeftButton: this.props.cbForLeftButton,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.changeScene}>
          <Image style={styles.imageStyle} source={Image1}/>
        </TouchableOpacity>
        <Text style={styles.textStyle}>
          {this.props.textPrompt}
        </Text>
      </View>
    );
  }
}

class Image2Displayer extends React.Component {
  constructor(props) {
    super(props);
    this.changeScene = this.changeScene.bind(this);
  }

  changeScene() {
    this.props.callback();
    this.props.navigator.push({
      name: "1",
      UIIndex: this.props.UIIndex,
      cbForLeftButton: this.props.cbForLeftButton,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.changeScene}>
          <Image style={styles.imageStyle} source={Image2}/>
        </TouchableOpacity>
        <Text style={styles.textStyle}>
          {this.props.textPrompt}
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 1080,
    height: 1920,
  },
  textStyle: {
    fontSize: 30,
    top: 50,
    left: 5,
  },
  buttonStyle: {
    fontSize: 20,
    margin: 10,
    backgroundColor: 'gray',
    width: 70
  },
  titleStyle: {
    fontSize: 20,
    margin: 10,
    left: 10,
    textAlign: 'center',
  },
})

let NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    let pString;
    if (route.textForLeftButton !== undefined)
      pString = route.textForLeftButton;
    else
      pString = '上一个';

    if (index > 0) {
      return (
        <Text style={styles.buttonStyle}
              onPress={
                () => {
                  try {
                    route.cbForLeftButton(route.UIIndex);
                    navigator.jumpBack();
                  } catch(error) {
                    //
                  }
                }
              }
        >
          {pString}
        </Text>
      );
    } else {
      return (
        <Text style={[styles.buttonStyle, {color: 'red'}]}>
          {pString}
        </Text>
      )
    }
  },

  Title(route, navigator, index, navState) {
    return (
      <Text style={styles.titleStyle}>
        第{route.UIIndex}个界面
      </Text>
    )
  },

  RightButton(route, navigator, index, navState) {
    if (navState.sceneConfigStack.length === index + 1) {
      return (
        <Text style={[styles.buttonStyle, {color: 'red'}]}>
          下一个
        </Text>
      )
    } else {
      return (
        <Text style={styles.buttonStyle}
              onPress={
                () => {
                  if(navState.sceneConfigStack.length === index + 1) {
                    console.log('can not jump forward.')
                  } else {
                    navigator.jumpForward();
                  }
                }
              }
        >
          下一个
        </Text>
      )
    }
  },
}

export default class MyProject extends React.Component {
  UIIndex: 0;
  touchtime: 0;
  switchSceneStyle: Navigator.SceneConfigs.PushFromRight;

  constructor(props) {
    super(props);
    this.state = {
      textPrompt: '',
    }

    this.callbackforLeftButton = this.callbackforLeftButton.bind(this);
    this.changeStateVarBeforeRoute = this.changeStateVarBeforeRoute.bind(this);
  }

  callbackforLeftButton(aNumber) {
    console.log('call back function reaceived number: ' + aNumber)
  }

  changeStateVarBeforeRoute() {
    this.touchtime++;
    let newTextPrompt;

    switch (this.touchtime % 9) {
      case 0:
        newTextPrompt = '';
        this.switchSceneStyle = Navigator.SceneConfigs.PushFromRight;
        break;
      case 1:
        newTextPrompt = '';
        this.switchSceneStyle = Navigator.SceneConfigs.FloatFromRight;
        break;
      case 2:
        newTextPrompt = '';
        this.switchSceneStyle = Navigator.SceneConfigs.FloatFromLeft;
        break;
      case 3:
        newTextPrompt = '';
        this.switchSceneStyle = Navigator.SceneConfigs.FloatFromBottom;
        break;
      case 4:
        newTextPrompt = '';
        this.switchSceneStyle = Navigator.SceneConfigs.FloatFromBottomAndroid;
        break;
      case 5:
        newTextPrompt = '';
        this.switchSceneStyle = Navigator.SceneConfigs.FadeAndroid;
        break;
      case 6:
        newTextPrompt = '';
        this.switchSceneStyle = Navigator.SceneConfigs.HorizontalSwipeJump;
        break;
      case 7:
        newTextPrompt = '';
        this.switchSceneStyle = Navigator.SceneConfigs.VerticalUpSwipeJump;
        break;
      case 8:
        newTextPrompt = '';
        this.switchSceneStyle = Navigator.SceneConfigs.VerticalDownSwipeJump;
        break;
    }

    this.setState(
      () => {
        textPrompt: newTextPrompt
      }
    )
  }

  configureScene(route) {
    return this.switchSceneStyle;
  }

  renderScene(router, navigator) {
    switch (router.name) {
      case "1":
        return <Image1Displayer navigator={navigator}
                                textForLeftButton="新文字1"
                                cbForLeftButton={this.callbackforLeftButton}
                                UIIndex={this.touchtime}
                                textPrompt={this.state.textPrompt}
                                callback={this.changeStateVarBeforeRoute}
        />
        break;
      case "2":
        return <Image2Displayer navigator={navigator}
                                textForLeftButton="新文字2"
                                cbForLeftButton={this.callbackforLeftButton}
                                UIIndex={this.touchtime}
                                textPrompt={this.state.textPrompt}
                                callback={this.changeStateVarBeforeRoute}
        />
        break;
    }
  }

  render() {
    return (
      <Navigator initialRoute={{
        name: "1",
        UIIndex: 0,
        cbForLeftButton: this.callbackforLeftButton,
        textForLeftButton: '新文字',
      }}
                 configureScene={this.configureScene}
                 navigationBar={ <Navigator.NagationBar routeMapper={NavigationBarRouteMapper} />}
                 renderScene={this.renderScene}
      />
    )
  }
}

AppRegistry.registerComponent('MyProject', () => MyProject);
