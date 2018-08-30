import React, { Component } from 'react';
import { Platform, StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { styles } from './styles';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <ScrollView style={styles.contentCon}>


                <View style={styles.metCon}>
                    <Text style={styles.personMetTxt}
                    >The Junction Coworking Space</Text>
                    <Text style={styles.ownerPost}>Spend 1 hour by only 5 EGP or Spend all day by only 20 EGP </Text>
                    <Image
                        style={styles.postPic}
                        source={require('../images/junction.jpg')}
                    />

                </View>

                <View style={styles.metCon}>
                    <Text style={styles.personMetTxt}
                        onPress={() => this.props.navigation.navigate('Owner_Profile')}
                    >KFC</Text>
                    <Text style={styles.ownerPost}>We offer 2 sandwitches only cost 50 pounds </Text>
                </View>

                <View style={styles.metCon}>
                    <Text style={styles.personMetTxt}
                    >Galaxy Cinema</Text>
                    <Text style={styles.ownerPost}>Jurassic World movie is now playing..{"\n"}Now you can book your ticket and your chair online</Text>
                    <Image
                        style={styles.postPic}
                        source={require('../images/cinema.jpg')}
                    />
                </View >

                <View style={styles.metCon}>
                    <Text style={styles.personMetTxt}
                    >Cairo Obera House</Text>
                    <Text style={styles.ownerPost}>You can book your ticket for Omar Khairat Show at 20-7-2018 7:30 Pm</Text>
                </View>

                <View style={styles.metCon}>
                    <Text style={styles.personMetTxt}
                    >Theater Misr - مسرح مصر</Text>
                    <Text style={styles.ownerPost}>Now we have a new play at 20-8-2017, 8 PM at Grand Nile Tower - Garden City{"\n"}book your ticket now ..</Text>
                    <Image
                        style={styles.postPic}
                        source={require('../images/masra7.jpg')}
                    />
                </View>

                <View style={styles.metCon}>
                    <Text style={styles.personMetTxt}
                    >Macdonalds egypt</Text>
                    <Text style={styles.ownerPost}>Now we have a new opening branch in El-Mohandeseen</Text>
                </View>
                
                <View style={styles.metCon}>
                    <Text style={styles.personMetTxt}
                    >Zamalek Club</Text>
                    <Text style={styles.ownerPost}>Now you can rent a playground for a game only by 50 EGP. {"\n"}Come with your team or we can make a team for you . </Text>
                    <Image
                        style={styles.postPic}
                        source={require('../images/playground.jpg')}
                    />
                </View>
            </ScrollView >
        );
    }
};

