import React, { Component } from 'react';
import { StyleSheet, Platform, View, Picker, Text, Image, Animated, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';

import { styles } from '../styles';


export default class Setting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passWord: "",
            conPassword: "",
            dateOfBirth: "",

        };
    };

    render() {
        return (
            <ScrollView style={styles.contentCon}>
                <View style={styles.activityCon}>
                    <Text style={styles.personMetTxt}>Change your user name</Text>
                    <TextInput style={styles.input}
                        onChangeText={this.setState((val) => { userName: val })}
                        underlineColorAndroid={"transparent"}
                        placeholder="Change your user name"
                        placeholderTextColor="rgb(185, 209, 251)"
                    ></TextInput>
                </View>
                <View style={styles.activityCon}>
                    <Text style={styles.personMetTxt}>Change Password</Text>
                    <TextInput style={styles.input}
                        onChangeText={this.setState((val) => { passWord: val })}
                        underlineColorAndroid={"transparent"}
                        placeholder="Change your Password"
                        placeholderTextColor="rgb(185, 209, 251)"
                    ></TextInput>
                    <TextInput style={styles.input}
                        onChangeText={this.setState((val) => { conPassword: val })}
                        underlineColorAndroid={"transparent"}
                        placeholder="Confirm your Password"
                        placeholderTextColor="rgb(185, 209, 251)"
                    ></TextInput>
                </View>
                <View style={styles.activityCon}>
                    <Text style={styles.personMetTxt}>Change date of birth</Text>
                    <TextInput style={styles.input}
                        onChangeText={this.setState((val) => { dateOfBirth: val })}
                        underlineColorAndroid={"transparent"}
                        placeholder="Change your date of birth"
                        placeholderTextColor="rgb(185, 209, 251)"
                    ></TextInput>
                </View>
                <View>
                <TouchableOpacity style={styles.btnSaveSet}>
                    <Text style={styles.metBtnTxt}
                    //onPress={this.save}
                    >  Save  </Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }

    /*

    //------------edit same url or another one ??---------
  save = () => {
    fetch('http://10.145.0.144:3000/api/Users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        username: this.state.userName,
        password: this.state.passWord,
        confirmPassword: this.state.conPassword,
        dateOfBirth: this.state.dateOfBirth,        
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
       
      })
      .catch((error) => {
        console.error(error);
      });
  }
*/

}