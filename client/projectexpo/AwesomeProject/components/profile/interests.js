import React, { Component } from 'react';
import { StyleSheet, Platform, View,Picker,Button, Image, ScrollView, Text, TextInput } from 'react-native';

import { styles } from '../styles';


export default class Interests extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PickerFood: 'ex, Fast Food',
            food: [],
            PickerSport: 'ex, Football',
          //  sport: [],
            PickerOther: 'ex, Travelling',
          //  other: [],
        };
    };
   
   
    render() {
        return (
                <ScrollView style={styles.contentCon}>
                <Text style={styles.personMetTxt}>Your interests</Text>
                    <View style={{ padding: 2 }}>
                        <View style={styles.metConPlaces}>
                            <Text style={styles.metTxt}>Favourite food</Text>
                            <Picker
                                style={styles.pickerTxt}
                                selectedValue={this.state.PickerFood}
                                onValueChange={(PicFood, key) => this.setState({ PickerFood: PicFood })}>
                                <Picker.Item label=' Pick a Category' value='' />
                                <Picker.Item label='Saudian food' value='Saudian food' />
                                <Picker.Item label='Asian Food' value='Asian Food' />
                                <Picker.Item label='Chinese food' value='Chinese food' />
                                <Picker.Item label='Syrian food' value='Syrian food' />
                                <Picker.Item label='Indian food' value='Indian food' />
                                <Picker.Item label='Egyptian food' value='Egyptian food' />
                                <Picker.Item label='Lebanese food' value='Lebanese food' />
                                <Picker.Item label='healthy food ' value='healthy food' />
                                <Picker.Item label='italic food' value='italic food' />
                                <Picker.Item label='Turkish food' value='Turkish food' />
                                <Picker.Item label='fast food' value='fast food' />
                            </Picker>

                        </View>
                        <Text style={styles.interesttxt}
                        
                        >{this.state.PickerFood} {"\n"}</Text>
                        <View style={styles.metConPlaces}>
                            <Text style={styles.metTxt}>Favourite sport</Text>
                            <Picker
                                style={styles.pickerTxt}
                                selectedValue={this.state.PickerSport}
                                onValueChange={(PicSport, key) => this.setState({ PickerSport: PicSport })}>
                                <Picker.Item label=' Pick a Category' value='' />
                                <Picker.Item label='Football' value='Football' />
                                <Picker.Item label='Running' value='Running' />
                                <Picker.Item label='Walking' value='Walking' />
                                <Picker.Item label='Basketball' value='Basketball' />
                                <Picker.Item label='Volleyball' value='Volleyball' />
                                <Picker.Item label='Tennis' value='Tennis' />
                                <Picker.Item label='Golf' value='Golf' />
                                <Picker.Item label='Cycling' value='Cycling' />
                                <Picker.Item label='Gym' value='Gym' />
                                <Picker.Item label='Swimming' value='Swimming' />
                                <Picker.Item label='Zumba' value='Zumba' />
                            </Picker>

                        </View>
                        <Text style={styles.interesttxt}>{this.state.PickerSport}</Text>
                        <View style={styles.metConPlaces}>
                            <Text style={styles.metTxt}>Other</Text>
                            <Picker
                                style={styles.pickerTxt}
                                selectedValue={this.state.PickerOther}
                                onValueChange={(PicOther, key) => this.setState({ PickerOther: PicOther })}>
                                <Picker.Item label=' Pick a Category' value='' />
                                <Picker.Item label='Reading' value='Reading' />
                                <Picker.Item label='Co-Working Spaces' value='Co-Working Spaces' />
                                <Picker.Item label='Café' value='Café' />
                                <Picker.Item label='Restaurant' value='Restaurant' />
                                <Picker.Item label='Stadium' value='Stadium' />
                                <Picker.Item label='Mall' value='Mall' />
                                <Picker.Item label='Shopping' value='Shopping' />
                                <Picker.Item label='Travelling' value='Travelling' />
                                <Picker.Item label='Volunteer Work' value='Volunteer Work' />
                            </Picker>

                        </View>
                        <Text style={styles.interesttxt}>{this.state.PickerOther}</Text>
                    </View>
                </ScrollView>
            
        )
    }
}