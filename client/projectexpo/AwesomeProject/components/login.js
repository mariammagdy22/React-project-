import React, { Component } from 'react';
import { StyleSheet, Platform, View, Image, Text, TextInput, AsyncStorage, Button } from 'react-native';
import axios from 'axios';
import Logo from './logo';
import Register from './registration';
import { styles } from './styles';
import navigation from '../App';

export default class LoginUser extends React.Component {
    static navigationOptions = {
        title: 'Login',
        headerStyle: {
            backgroundColor: 'rgb(250,250,250)',
        },
        headerTitleStyle: {
            fontSize: 28,
            color: 'rgb(2,31,84)',
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginUsr}>
                    <Logo></Logo>
                    <View style={styles.loginContainer}>
                        <TextInput type='text' placeholder="Email Address "
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholderTextColor='rgb(117,169,249)'
                            onChangeText={(text) => this.setState({ email: text })}
                        />
                        <TextInput type='password' placeholder="Password"
                            style={styles.input}
                            placeholderTextColor='rgb(117,169,249)'
                            secureTextEntry
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => this.setState({ password: text })}
                        />
                        <Button
                            style={styles.btn}
                            onPress={() => this.login()}
                            title="Login"
                        />
                        <Text style={styles.txtFrgPass}
                        //onPress={() => this.props.navigation.navigate('forgetUrPass')}
                        >Forget Your Password? </Text>
                        <Text style={styles.txtFrgPass}
                            onPress={() => this.props.navigation.navigate('Regist')}
                        >Create New Account </Text>
                        <Button
                            style={styles.btn}
                            onPress={() => this.props.navigation.navigate('Visit')}
                            title="Continue as Visitor"
                        />
                    </View>
                </View>
            </View>
        );
    };
}

login = () => {

    fetch('http://10.145.0.144:3000/api/Users/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: this.state.email,
            password: this.state.password
        }),
    })
        .then((response) => response.json())
        .then((responseData) => {
             this.props.navigation.navigate('Account'); 
        })
        .catch((error) => {
            console.error(error);
        });
}

