/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';

export default class App extends Component {
  _onPressButton() {
    var alertMessage = '是否删除';
    Alert.alert(
        '确认',
        alertMessage,
        [
          {text: '取消', onPress:()=>{}},
          {text: '确认', onPress:()=>{}},
        ],
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight  onPress={this._onPressButton}>
          <View style={styles.box}>

          </View>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  box:{
    width: 100,
    height: 100,
    // position: 'absolute',
    // top:'50%',
    // left:'50%',
    // marginTop: -50,
    // marginLeft: -50,
    backgroundColor: 'red',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('App', () => App);
