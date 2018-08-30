import React, { Component } from 'react';
import { StyleSheet, Platform, ScrollView, View, Alert, Picker, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';

import { styles } from '../styles';

export default class Meeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meetGender: ['Male', 'Female', 'M or F'],
            checkedGender: 2,
            contact: ['Mobile', 'Chat', 'Both'],
            checkedContact: 2,
            time: ['Now', 'Pick a time'],
            checkedTime: 0,
            PickerPlace: '',
            dateTime: ''
        }
    };

    render() {
        return (
            <ScrollView style={styles.contentCon}>
                <View style={styles.metCon}>
                    <Text style={styles.metTxt}>I want to meet ...</Text>
                    <View style={styles.radioBtnCont}>
                        {this.state.meetGender.map((meetGender, key) => {
                            return (
                                <View style={{ flex: 1 }} >
                                    {this.state.checkedGender == key ?
                                        <TouchableOpacity style={styles.radioBtn}
                                            value={this.state.meetGender}
                                            onPress={() => { this.setState({ checkedGender: key }) }}>
                                            <Image style={styles.img} source={require('../../images/radioBtnOn.png')} />
                                            <Text style={styles.metTxtRadio}>{meetGender}</Text>
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity style={styles.radioBtn}
                                            value={this.state.meetGender}
                                            onPress={() => { this.setState({ checkedGender: key }) }}>
                                            <Image style={styles.img} source={require('../../images/radioBtnOff.png')} />
                                            <Text style={styles.metTxtRadio}>{meetGender}</Text>
                                        </TouchableOpacity>
                                    }
                                </View>
                            )
                        })}
                    </View>
                </View>
                <View style={styles.metCon}>
                    <Text style={styles.metTxt}>I want to contact by ...</Text>
                    <View style={styles.radioBtnCont}>
                        {this.state.contact.map((contact, key) => {
                            return (
                                <View  >
                                    {this.state.checkedContact == key ?
                                        <TouchableOpacity style={styles.radioBtn}
                                            value={this.state.contact}
                                            onPress={() => { this.setState({ checkedContact: key }) }}>
                                            <Image style={styles.img} source={require('../../images/radioBtnOn.png')} />
                                            <Text style={styles.metTxtRadio}>{contact}</Text>
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity style={styles.radioBtn}
                                            value={this.state.contact}
                                            onPress={() => { this.setState({ checkedContact: key }) }}>
                                            <Image style={styles.img} source={require('../../images/radioBtnOff.png')} />
                                            <Text style={styles.metTxtRadio}>{contact}</Text>
                                        </TouchableOpacity>
                                    }
                                </View>
                            )
                        })}
                    </View>
                </View>
                <View style={styles.metCon}>
                    <Text style={styles.metTxt}>I want to meet him/her at...</Text>
                    <View style={styles.starRatCont}>
                        <DatePicker
                            style={styles.date}
                            date={this.state.dateTime}
                            mode="datetime"
                            placeholder="select date"
                            format="YYYY-MM-DD HH:mm"
                            minDate="2018-06-01"
                            maxDate="2018-12-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0,
                                    width: 35,
                                    height: 35
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                            }}
                            onDateChange={(date) => { this.setState({ dateTime: date }) }}
                        />
                    </View>
                </View>
                <View style={styles.metConPlaces}>
                    <Text style={styles.metTxt}>I will go to ...</Text>
                    <Picker
                        style={styles.pickerTxt}
                        selectedValue={this.state.PickerPlace}
                        onValueChange={(PicPlace, key) => this.setState({ PickerPlace: PicPlace })}>
                        <Picker.Item label=' Pick a Place' value='' />
                        <Picker.Item label='Cafe' value='Cafe' />
                        <Picker.Item label='Restaurant' value='Restaurant' />
                        <Picker.Item label='PlayGround' value='PlayGround' />
                        <Picker.Item label='Stadium' value='Stadium' />
                        <Picker.Item label='Shopping' value='Shopping' />
                        <Picker.Item label='Mall' value='Mall' />
                        <Picker.Item label='Club' value='Club' />
                        <Picker.Item label='Walking' value='Walking' />
                        <Picker.Item label='Co-working Places' value='Co-working Places' />
                        <Picker.Item label='Gym' value='Gym' />
                    </Picker>

                </View>
                <View style={styles.metCon}>
                    <Text style={styles.metTxt}>Please if you have any problem or difficulty so you can cancel the request to respect other's time.</Text>
                    <View style={styles.btnCon}>
                        <TouchableOpacity style={styles.btnMetEval}>
                            <Text style={styles.metBtnTxt}
                                onPress={() => this.meeting()}
                            >  Submit  </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        )
    }
    meeting = () => {
        Alert.alert(
            'Alert Title',
            `You have successfully determinded your mate as
            ${"\n"}Gender: ${this.state.meetGender[this.state.checkedGender]}
            ${"\n"}Contact by:${this.state.contact[this.state.checkedContact]}
            ${"\n"}Date:${this.state.dateTime}         
            ${"\n"}you will go to:${this.state.PickerPlace}         
            `,
            [
                {
                    text: 'OK', onPress: () => alert(`According to your request we have found you a user
              ${"\n"}Name: Mohamed El-Masry
              ${"\n"}Contact by: 0112212345
              ${"\n"}
              Hope you have a nice outing ^_^`)
                },
                { text: 'Cancel', onPress: () => alert('You have just canceled your request, We hope to see you again soon..'), style: 'cancel' },
            ],
            { cancelable: false }
        )
    }
}