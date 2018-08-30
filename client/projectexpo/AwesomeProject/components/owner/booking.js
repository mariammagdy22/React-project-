import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text,Alert, ScrollView, Image, TouchableOpacity } from 'react-native';
import { StackNavigator, createStackNavigator } from 'react-navigation';
import DatePicker from 'react-native-datepicker';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import { styles } from '../styles';

export default class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pay: ['Visa', 'Cash', 'Vodafone Cash'],
      checkedPay: '0',
      checkedTable: '',
      dateTime:''
    };
  }

  _showData = (data, index) => {
    this.setState ({
      checkedTable:data,
    });
  }
  render() {

    const tableHead = ['Red >> Booked', 'Green >> Available'];
    const tableData = [
      ['1 in', '1 out', '1 S'],
      ['2 in', '2 out', '2 S'],
      ['3 in', '3 out', '3 S'],
      ['4 in', '4 out', '4 S'],
    ];

    return (
      <ScrollView style={styles.contentCon}>
        <View style={styles.RevCont}>
          <View style={styles.metCon}>
            <Text style={styles.metTxt}
            >Pick a reservation date </Text>
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
          <View style={styles.metCon}>
            <Text style={styles.metTxt}
            //icon circle with a number and color 2 of them with placeholder booked & available 
            >Pick a table </Text>
            <Table style={{ margin: 5 }}>
              <TableWrapper >
                <Row data={tableHead} style={styles.head} textStyle={styles.textt} />
                {
                  tableData.map((data, i) => (
                    <TableWrapper key={i} style={styles.row}>
                      {
                        data.map((cell, j) => (
                          <TouchableOpacity key={j} style={styles.cell} onPress={() => this._showData(cell, j)}>
                            <Cell data={cell} textStyle={styles.textt} />
                          </TouchableOpacity>
                        ))
                      }
                    </TableWrapper>
                  ))
                }
              </TableWrapper>
            </Table>
          </View>
          <View style={styles.metCon}>
            <Text style={styles.metTxt}
            >Payment Method </Text>
            <View style={styles.radioBtnCont}>
              {this.state.pay.map((pay, key) => {
                return (
                  <View>
                    {this.state.checkedPay == key ?
                      <TouchableOpacity style={styles.radioBtn}
                        value={this.state.pay}
                        onPress={() => { this.setState({ checkedPay: key }) }}>
                        <Image style={styles.img} source={require('../../images/radioBtnOn.png')} />
                        <Text style={styles.metTxtRadio}>{pay}</Text>
                      </TouchableOpacity>
                      :
                      <TouchableOpacity style={styles.radioBtn}
                        value={this.state.pay}
                        onPress={() => { this.setState({ checkedPay: key }) }}>
                        <Image style={styles.img} source={require('../../images/radioBtnOff.png')} />
                        <Text style={styles.metTxtRadio}>{pay}</Text>
                      </TouchableOpacity>
                    }
                  </View>
                )
              })}
            </View>
          </View>
          <View style={styles.btnCon}>
            <TouchableOpacity style={styles.btnMet}>
              <Text style={styles.metBtnTxt}
                onPress={() => this.book()}
              >  Submit  </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnMetCancel}>
              <Text style={styles.metBtnTxt}
              //onPress={()=>{alert(this.state.PickerPlace)}}
              >  Cancel  </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }

  book=()=>{
    Alert.alert(
      'Booking a table',
      `Are you sure you want to book this table`,
      [
          {
              text: 'OK', onPress: () => alert(`You have just book
        ${"\n"}at: ${this.state.dateTime}
        ${"\n"}Table Number: ${this.state.checkedTable}
        ${"\n"}Payment Method: ${this.state.pay[this.state.checkedPay]}
        ${"\n"}
        Hope you have a nice day at our place ^_^`)
          },
          { text: 'Cancel', onPress: () => alert('You have just canceled your bookine request, We hope to see you again soon..'), style: 'cancel' },
      ],
      { cancelable: false }
  )
  }
};

//this.state.pay[this.state.checkedPay]