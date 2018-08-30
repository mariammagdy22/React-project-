import React, { Component } from 'react';
import { Platform, StyleSheet, Button,TouchableOpacity, TextInput, ScrollView, View, Text } from 'react-native';
import { StackNavigator, createStackNavigator } from 'react-navigation';

import { styles } from '../styles';

export default class Recom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recom: 'dsfsdfs',
      oldRecom: [],
   //   Disable_Button: false,
    };
    this.Array_Value_Index = 0;
  }


  //a7otha fe el ajax ely by get recom from DB 34an tb2a badel onPress
  Add_New_View_Function = () => {
    let New_Added_View_Value = { Array_Value_Index: this.Array_Value_Index }
    this.setState(
      {
       // Disable_Button: true,
                oldRecom: [...this.state.oldRecom, New_Added_View_Value]
        //oldRecom: [ New_Added_View_Value,...this.state.oldRecom] اشوف هيطلع لفوق ولا زى ماهو ؟
      }
    );
  }



  render() {
    let viewRecom = this.state.oldRecom.map((item, key) => {
      return (
        <View style={styles.activityCon} key={key}>
          <Text style={styles.metTxt}>{this.state.recom}</Text>
        </View>
      );
    });

    return (
      <ScrollView style={styles.contentCon}>

        <View >
          <Text style={styles.personMetTxt}>Make a recommendation</Text>
          <TextInput style={styles.input}
            onChangeText={(val) => this.setState({ recom: val })}
            //value={this.state.recom}
            underlineColorAndroid={"transparent"}
            placeholder="Make a recommendation"
            placeholderTextColor="rgb(185, 209, 251)">
          </TextInput>
          <TouchableOpacity style={styles.btnMet}>
            <Text style={styles.metBtnTxt}
              onPress={this.Add_New_View_Function}
            >  Add  </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          {viewRecom}
        </View>
        <View style={styles.activityCon} >
          <Text style={styles.metTxt}>I recommend adding caesar salad to the menu</Text>
        </View>
      </ScrollView>

    );
  }
};