import React, { Component } from 'react';
import { StyleSheet, Platform, View, Image } from 'react-native';

import {styles} from './styles';

export default class Logo extends React.Component {

    render() {
        return (
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../images/logo.png')} />
            </View>
        );
    }
}


