/**
 * Created by clock on 2017/2/9.
 */

import React, { Component } from 'react';
import {
  Navigator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

export default class ImageEquallyEnlarge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {},
    }
    this.onImageLayout = this.onImageLayout.bind(this);
  }

  propTypes: {
    originalWidth: React.PropTypes.number.isRequired,
    originalHeight: React.PropTypes.number.isRequired,
  }

  onImageLayout(event) {
    let layout = event.nativeEvent.layout;
    if(layout.width <= this.props.originalWidth)
      return;
    if(layout.height <= this.props.originalHeight)
      return;

    let originalAspectRatio = this.props.originalWidth / this.props.originalHeight;
    let currentAspectRatio = layout.width / layout.height;

    if(originalAspectRatio == currentAspectRatio)
      return;

    if(originalAspectRatio < currentAspectRatio) {
      let newHeight = layout.width / originalAspectRatio;
      this.setState({
        style: {height:newHeight}
      })
    } else {
      let newWidth = layout.height * originalAspectRatio;
      this.setState({
        style: {height:newWidth}
      })
    }
  }

  render() {
    return (
      <Image {...this.props}
        style={[this.props.style, this.state.style]}
        onLayout={this.onImageLayout}
        />
    )
  }
}

module.exports = ImageEquallyEnlarge;