import React, { Component } from 'react';
import { StyleSheet, Platform, ScrollView, View, Picker, TouchableHighlight, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native';

import { styles } from '../styles';
import StarRating from 'react-native-star-rating';

export default class EvaluationMet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PickerEval: '',
            customStarCount: 0,
            userEval: 'Ahmed Hamada', // set state & axios get from database
            seeUsrAgain: '',
            genderTruth: '',
        }
    };

    render() {
        return (
            <ScrollView style={styles.contentCon}>
                <View style={styles.imgEvalCon}>
                    <View>
                        <Image style={styles.imgEval}
                            source={require('../../images/evaluation.png')} />
                    </View>
                    <View style={styles.metTitleCon}>
                        <Text style={styles.metTxt}>We will be happy if you evaluate the person who you met, Please be honest in the evaluation to benefit other users.</Text>
                        <TouchableOpacity style={styles.btnMetEval}>
                            <Text style={styles.metBtnTxt}
                                onPress={() => alert(`You have successfully evaluated your mate as 
                            ${"\n"}Rate: ${this.state.customStarCount} / 5
                            ${"\n"}Suggest him again: ${this.state.seeUsrAgain}
                            ${"\n"}His/ Her punctuality: ${this.state.PickerEval}
                            ${"\n"}His/ Her gender truth: ${this.state.genderTruth}${"\n"}
                            Thank you & see you soon ^_^`)}
                            >  Submit  </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View >
                    <Text style={styles.personMetTxt}>{this.state.userEval}</Text>
                </View>
                <View style={styles.metCon}>
                    <Text style={styles.metTxt}>Rate:</Text>
                    <View style={styles.starRatCont}>
                        <StarRating
                            disabled={false}
                            emptyStar="ios-star"
                            fullStar="ios-star"
                            halfStar="ios-star"
                            iconSet="Ionicons"
                            maxStars={5}
                            rating={this.state.customStarCount}
                            selectedStar={rating => this.setState({ customStarCount: rating })}
                            fullStarColor="rgb(244,235,73)"
                            emptyStarColor="rgb(204,204,204)"
                        />
                    </View>
                </View>
                <View style={styles.metCon}>
                    <Text style={styles.metTxt}>I want to see this user account again if he/she come at suggestion</Text>
                    <View style={styles.btnCon}>
                        <TouchableOpacity style={styles.btnMet}>
                            <Text style={styles.metBtnTxt}
                                onPress={() => this.setState({ seeUsrAgain: 'Yes' })}
                            >  Yes  </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnMetCancel}>
                            <Text style={styles.metBtnTxt}
                                onPress={() => this.setState({ seeUsrAgain: 'No' })}
                            >  No  </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.metCon}>
                    <Text style={styles.metTxt}>His/ Her punctuality is ...</Text>
                    <Picker
                        style={styles.pickerTxtEval}
                        selectedValue={this.state.PickerEval}
                        onValueChange={(PicEval, key) => this.setState({ PickerEval: PicEval })}>
                        <Picker.Item label='Choose a number' value='' />
                        <Picker.Item label='1' value='1' />
                        <Picker.Item label='2' value='2' />
                        <Picker.Item label='3' value='3' />
                        <Picker.Item label='4' value='4' />
                        <Picker.Item label='5' value='5' />
                        <Picker.Item label='6' value='6' />
                        <Picker.Item label='7' value='7' />
                        <Picker.Item label='8' value='8' />
                        <Picker.Item label='9' value='9' />
                        <Picker.Item label='10' value='10' />
                    </Picker>
                </View>
                <View style={styles.metCon}>
                    <Text style={styles.metTxt}>He/ She is the same gender which you knew</Text>
                    <View style={styles.btnCon}>
                        <TouchableOpacity style={styles.btnMet}>
                            <Text style={styles.metBtnTxt}
                                onPress={() => this.setState({ genderTruth: 'Yes' })}
                            >  Yes  </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnMetCancel}>
                            <Text style={styles.metBtnTxt}
                                onPress={() => this.setState({ genderTruth: 'No' })}
                            >  No  </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}