import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text,ScrollView } from 'react-native';
import { StackNavigator,createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

import { styles } from './styles';
import Home from './home';
import Search from './search';

export const Visitors = createMaterialTopTabNavigator({
  Home: Home,
  Search: Search
}, {
      tabBarOptions: {
          'scrollEnabled': true,
          activeTintColor: 'rgb(2,31,84)',
      },
  }
);


export default class Visitor extends React.Component {
    static navigationOptions = {
        title: 'Welcome to COLUMBUS',
        headerStyle:{
          backgroundColor:'rgb(250,250,250)',
        },
      headerTitleStyle:{
         fontSize:28,
          color:'rgb(2,31,84)',
      }
    };

    constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <View style={styles.content}>
          <Visitors></Visitors>
      </View>
    );
  }
};


