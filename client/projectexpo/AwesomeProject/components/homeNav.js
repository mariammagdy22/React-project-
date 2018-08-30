import React, { Component } from 'react';
import { StyleSheet, Platform, View, Image, ScrollView, Text, TextInput, Button } from 'react-native';
import { createMaterialTopTabNavigator, TabNavigator, StackNavigator, createStackNavigator } from 'react-navigation';

import { styles } from './styles';

import Home from './home';
import OwnerProfile from './owner/ownerProfile';

export const HomeNav = createMaterialTopTabNavigator({
    Home: Home,
    Owner_Profile: OwnerProfile,
}, {
        tabBarOptions: {
            'scrollEnabled': true,
          // activeTintColor: 'white',
            style: {
                backgroundColor: 'transparent',
            },
            labelStyle: {
                fontSize: 16,
                fontWeight: 'bold',
                color: 'rgb(2,31,84)',
            },
            indicatorStyle: {
                 backgroundColor: 'transparent',
            },
            tabStyle: {
                backgroundColor: 'white',
                marginRight: 5,
                marginTop: 5,                
                width: 170,
            },
        },
    }
);

export default class HomeNavigator extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        return (
            <View style={styles.content}>
                <HomeNav></HomeNav>
            </View>
        );
    };
};
