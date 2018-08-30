import React, { Component } from 'react';
import { Platform, StyleSheet, TextInput, View, ScrollView, TouchableOpacity, Image, Picker, Text } from 'react-native';
import { StackNavigator, createStackNavigator } from 'react-navigation';

import { styles } from '../styles';
import StarRating from 'react-native-star-rating';

export default class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageReview: require('../../images/profile.png'),// a8ayr el sora w n2ol eno hay access el mob camera      
      comment: '',
      PickerBranch: '',
      brachStarCount: 0,
      oldReview: [],
      Disable_Button: false,
    };
    this.Array_Value_Index = 0;
  };

  //a7otha fe el ajax ely by get review from DB 34an tb2a badel onPress
  Add_New_View_Function = () => {
    let New_Added_View_Value = { Array_Value_Index: this.Array_Value_Index }
    this.setState(
      {
        Disable_Button: true,
        oldReview: [...this.state.oldReview, New_Added_View_Value]
      }
    );
  }


  render() {
    let viewReviews = this.state.oldReview.map((item, key) => {
      return (
        <View style={styles.activityCon} key={key}>
          <Text style={styles.metTxt}>{this.state.comment}</Text>
          <Text style={styles.metTxt}>Branch: {this.state.PickerBranch}</Text>
          <View style={styles.starRatCont}>
            <StarRating
              disabled={true}
              emptyStar="ios-star"
              fullStar="ios-star"
              halfStar="ios-star"
              iconSet="Ionicons"
              maxStars={5}
              rating={this.state.brachStarCount}
              fullStarColor="rgb(244,235,73)"
              emptyStarColor="rgb(204,204,204)"
            />
          </View>

        </View>
      );
    });



    return (
      <ScrollView style={styles.contentCon}>
        <Text style={styles.personMetTxt}>Post a review</Text>
        <View style={styles.RevCont}>
          <View
            style={styles.eachRev}
          >
            <Text style={styles.metTxt} >Comment: </Text>
            <TextInput placeholder="Make a comment"
              style={styles.inputRev}
              placeholderTextColor='rgb(117,169,249)'
              underlineColorAndroid="transparent"
              onChangeText={(text) => this.setState({ comment: text })}
            />
          </View>
          <View style={styles.eachRev}>
            <Text style={styles.metTxt}>Branch: </Text>
            <Picker
              style={styles.pickerTxt}
              selectedValue={this.state.PickerBranch}
              onValueChange={(PicPlace, key) => this.setState({ PickerBranch: PicPlace })}>
              <Picker.Item label=' Pick a Branch' value='' />
              <Picker.Item label='Zamalek' value='Zamalek' />
              <Picker.Item label='El-Mohandeseen' value='El-Mohandeseen' />
              <Picker.Item label='Nasr City' value='Nasr City' />
            </Picker>
          </View>
          <View style={styles.eachRev}>
            <Text style={styles.metTxt}>Rate: </Text>
            <View
              style={styles.starRatContRev}
            >
              <StarRating
                disabled={false}
                emptyStar="ios-star"
                fullStar="ios-star"
                halfStar="ios-star"
                iconSet="Ionicons"
                maxStars={5}
                rating={this.state.brachStarCount}
                selectedStar={rating => this.setState({ brachStarCount: rating })}
                fullStarColor="rgb(244,235,73)"
                emptyStarColor="rgb(204,204,204)"
              />
            </View>
          </View>
          <View style={styles.eachRev}>
            <Text style={styles.metTxt}>Upload image: </Text>
            <Image
              style={styles.reviewPic}
              source={this.state.imageReview}
            />
          </View>
          <TouchableOpacity style={styles.btnMet}>
            <Text style={styles.metBtnTxt}
              onPress={this.Add_New_View_Function}
            >  Post  </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          {viewReviews}
        </View>
      </ScrollView>
    );
  }
};

// azabt el style
// lma b3ml post ay t8iir bktbo fo2 bysm3 feh tany lsa mrboten swa ??