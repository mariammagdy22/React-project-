import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView, Image, Button, View, Text } from 'react-native';

import { styles } from '../styles';

export default class OwnerProf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };

    render() {
        return (
            <ScrollView style={styles.contentCon}>
                <Text style={styles.personMetTxt}>Posts </Text>
                <View style={styles.metCon}>
                    <Text style={styles.ownerPost}>Get a free Rice & Pepsi with any Dinner Box only by 55.50 EGP</Text>
                    <Image
                        style={styles.postPic}
                        source={require('../../images/kfcMeal.png')}
                         />
                </View>
                <View style={styles.metCon}>
                    <Text style={styles.ownerPost}>We make a special offers for you beacause you are a Columbus fans.{"\n"}We offer 2 sandwitches only cost 50 pounds </Text>
                </View>
                <View style={styles.metCon}>
                    <Text style={styles.ownerPost}>New menu</Text>
                    <Image
                        style={styles.menuPic}
                        source={require('../../images/KFC_Menu.jpg')}
                    />
                </View>
                <View style={styles.metCon}>
                    <Text style={styles.ownerPost}>We are opening a new branch in El-Dokki in front of Shooting club</Text>
                    <Image
                        style={styles.menuPic}
                        source={require('../../images/branch.jpg')}
                    />
                </View>
            </ScrollView>
        );
    }
};
