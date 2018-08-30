import React, { Component } from 'react';
import { StyleSheet, Platform, View, TouchableOpacity, Image, Text, TextInput, Button } from 'react-native';

import Logo from './logo';
import { styles } from './styles';

export default class meeting extends React.Component {
  static navigationOptions = {
    title: 'Registration',
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
      userName: "",
      passWord: "",
      conPassword: "",
      email: "",
      dateOfBirth: "",
      gender: ['Male', 'Female'],
      checked: '0'
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.registerUsr}>
          <Logo></Logo>
          <View style={styles.registContainer}>
            <View style={styles.userName}>
              <TextInput style={styles.input}
                onChangeText={(val) => this.setState({ userName: val })}
                underlineColorAndroid={"transparent"}
                placeholder="User Name"
                placeholderTextColor="rgb(185, 209, 251)">
              </TextInput>
              <TextInput style={styles.input}
                onChangeText={(val) => this.setState({ passWord: val })}
                underlineColorAndroid={"transparent"}
                placeholder="PassWord"
                placeholderTextColor="rgb(185, 209, 251)"
                secureTextEntry></TextInput>

              <TextInput style={styles.input}
                onChangeText={(val) => this.setState({ conPassword: val })}
                underlineColorAndroid={"transparent"}
                placeholder="Confirm PassWord"
                placeholderTextColor="rgb(185, 209, 251)"
                secureTextEntry></TextInput>

              <TextInput style={styles.input}
                onChangeText={(val) => this.setState({ email: val })}
                underlineColorAndroid={"transparent"}
                placeholder="Email"
                placeholderTextColor="rgb(185, 209, 251)"></TextInput>

              <TextInput style={styles.input}
                onChangeText={(val) => this.setState({ dateOfBirth: val })}
                underlineColorAndroid={"transparent"}
                placeholder="Date of Birth ex: 1-1-2000"
                placeholderTextColor="rgb(185, 209, 251)"></TextInput>

              <View >
                {this.state.gender.map((gender, key) => {
                  return (
                    <View>
                      {this.state.checked == key ?
                        <TouchableOpacity style={styles.radioBtnRegist}
                          value={this.state.gender}
                          onPress={() => { this.setState({ checked: key }) }}>
                          <Image style={styles.img} source={require('../images/radioBtnOn.png')} />
                          <Text style={styles.txt}>{gender}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.radioBtnRegist}
                          value={this.state.gender}
                          onPress={() => { this.setState({ checked: key }) }}>
                          <Image style={styles.img} source={require('../images/radioBtnOff.png')} />
                          <Text style={styles.txt}>{gender}</Text>
                        </TouchableOpacity>
                      }
                    </View>
                  )
                })}
              </View>
            </View>
            <Button
              onPress={this.confirm}
              title="Submit"
            />
          </View>
        </View>
      </View>
    );
  };

  confirm = () => {


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
        email: this.state.email,
        dateOfBirth: this.state.dateOfBirth,
        gender: this.state.checked, //male: 0 & female: 1  

      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        alert(`You have successfully registed to a new account
    ${"\n"}
    Welcome to Columbus ^_^`)
      })
      .catch((error) => {
        console.error(error);
      });

  }

}

