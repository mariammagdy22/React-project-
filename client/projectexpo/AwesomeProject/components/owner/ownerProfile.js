import React, { Component } from 'react';
import { StyleSheet, Platform, View, Image, ScrollView, Text,ListView, TextInput, Button } from 'react-native';
import { createMaterialTopTabNavigator, TabNavigator, StackNavigator, createStackNavigator } from 'react-navigation';

import { styles } from '../styles';

import OwnerProf from './profile';
import Locations from './locations';
import Recom from './recommendation';
import Review from './review';
import Booking from './booking';

export const OwnerProfNav = createMaterialTopTabNavigator({
    Profile: OwnerProf,
    Locations: Locations,
    Recommendations: Recom,
    Reviews: Review,
    Booking: Booking
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
            width: 190,
        },
    },
}
);


export default class OwnerProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ownerImg: require('../../images/kfc.png'),
            ownerName: 'KFC', 
            slogin: `It's finger lickin' good`
        }
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.overView}>
                    <Image style={styles.profilePic}
                        source={this.state.ownerImg}
                    />
                    <View style={styles.overViewCont}>
                        <Text style={styles.personMetTxt}>{this.state.ownerName}</Text>
                        <Text style={styles.overViewtxt}>{this.state.slogin}</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <OwnerProfNav></OwnerProfNav>
                </View>
            </View>
        )
    }
}
