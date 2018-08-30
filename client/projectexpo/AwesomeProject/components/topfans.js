import React, { Component } from 'react';
import { StyleSheet, Platform, View, Image, ScrollView, Text, TextInput, Button } from 'react-native';

import { styles } from './styles';


export default class TopFans extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        return (
            <View style={styles.topF}>
                <Image source={require('../images/topfan.png')} />
            </View>
        )
    }
}