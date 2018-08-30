import React, { Component } from 'react';
import { Platform, StyleSheet, Button, View, Alert, Text } from 'react-native';
import { StackNavigator, createStackNavigator } from 'react-navigation';

import { styles } from './components/styles';
import LoginUser from './components/login';
import Header from './components/header';
import Register from './components/registration';
import Visitor from './components/visitor';


export const Navigation = createStackNavigator({
  Login: { screen: LoginUser },
  Regist: { screen: Register },
  Visit: { screen: Visitor },
  Account: { screen: Header },
});
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Navigation></Navigation>
      </View>
    );
  }

};
