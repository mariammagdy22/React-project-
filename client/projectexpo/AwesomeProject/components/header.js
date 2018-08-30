
import React, { Component } from 'react';
import { StyleSheet, Platform, View, Image, ScrollView, Text, TextInput, Button } from 'react-native';
import { createMaterialTopTabNavigator, TabNavigator, StackNavigator, createStackNavigator } from 'react-navigation';

import { styles } from './styles';
import Search from './search';
import Profile from './profile/profile';
import TopFans from './topfans';
import HomeNavigator from './homeNav';

export const Account = createMaterialTopTabNavigator({
    Home: HomeNavigator,
    Top_Fans: TopFans,
    Search: Search,
    Profile: Profile,
}
    , {
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
    

export default class Header extends React.Component {
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

        }
    };

    render() {
        return (
            <View style={styles.container}>
            <View style={styles.content}>
                <Account></Account>
            </View>
            </View>
        );
    };
};

/*
//------------------------footer--------------------
<View style={styles.footer}>
                    <View style={styles.footerImgCont}>
                        <Image style={styles.imgFooter} source={require('../images/logo.png')}></Image>
                    </View>
                    <View style={styles.footerTxtCont}>
                        <Text style={styles.footerTxt}>@copyright 2018-ColumBUS {"\n"} All rights reserved</Text>
                    </View>
                </View>



                <ScrollView style={styles.mainContainer}>
                   
                </ScrollView>
*/