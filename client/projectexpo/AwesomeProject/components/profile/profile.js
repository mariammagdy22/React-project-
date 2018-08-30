import React, { Component } from 'react';
import { StyleSheet, Platform, View, Picker, Text, Image, Animated, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator, TabNavigator, StackNavigator, createStackNavigator } from 'react-navigation';

import { styles } from '../styles';
import Meeting from './meeting';
import EvaluationMet from './evaluationMet';
import Interests from './interests';
import Setting from './setting';
import UsrProf from './usrProfile';

export const UserProfNav = createMaterialTopTabNavigator({
    Profile: UsrProf,
    Setting: Setting,
    Interests: Interests,
    Meeting: Meeting,
    Evaluation: EvaluationMet
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
            width: 170,
        },
    },
}
);


export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            morningText: 'Morning Text \n Good Morning ^_^',
            //Today is your discussion\nDo your best & Good Luck',//get from DB
            profileImg: require('../../images/profile.png'), //url from database //if '' يحط ال url دا
            userName: 'User Name', //Get from DB
            overView: 'Hello every one ^_^',
        };
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.overView}>
                    <Image style={styles.profilePic}
                        source={this.state.profileImg}
                    />
                    <View style={styles.overViewCont}>
                        <Text style={styles.personMetTxt}>{this.state.userName}</Text>
                        <TextInput
                            style={styles.overViewtxt}
                            multiline={true}
                            maxLength={100}
                            onChangeText={(text) => this.setState({ overView: text })}
                            placeholder="Tell us about you"
                            placeholderTextColor='rgb(117,169,249)'
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View>
                <Text style={styles.morningtxt}>{this.state.morningText}</Text>
                <View style={styles.content}>
                    <UserProfNav></UserProfNav>
                </View>
            </View>
        )
    }
}

