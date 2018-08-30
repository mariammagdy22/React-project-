import React, { Component } from 'react';
import { StyleSheet, Platform, View, Image, ScrollView, Text, TextInput, Button } from 'react-native';

import { styles } from '../styles';


export default class UsrProf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <ScrollView style={styles.contentCon}>
            <Text style={styles.personMetTxt}>Old Activities</Text>
                <View style={styles.metCon}>
                    <Text style={styles.ownerPost}>Ran in half marathon event with <Text style={styles.usrActivity}>Cairo Runners</Text>{"\n"}Friday 22-6-2018 at 8 am in Zamalek</Text>
                </View>

                <View style={styles.metCon}>
                    <Text style={styles.ownerPost}>Met <Text style={styles.usrActivity}>Mohamed Ahmed</Text> throught Columbus in zamalek club to play football{"\n"}Saturday 16-6-2018 at 9 pm</Text>
                </View>

                <View style={styles.metCon}>
                    <Text style={styles.ownerPost}>Booked a night movie at<Text style={styles.usrActivity}> Galaxy Cinema</Text>{"\n"}Friday 1-6-2018 at 9 pm</Text>
                </View>

                <View style={styles.metCon}>
                    <Text style={styles.ownerPost}>Booked a table at<Text style={styles.usrActivity}> Macdonald's Egypt</Text>{"\n"}Monday 28-5-2018 at 9 pm</Text>
                </View>
                
            </ScrollView>
        )
    }
}
