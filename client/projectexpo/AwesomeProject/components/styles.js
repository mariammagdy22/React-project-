import React, { Component } from 'react';
//import { StyleSheet } from 'react-native';
import { StyleSheet, Platform, View, Picker, Text, Image, Animated, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(2,31,84)',
    },
    //------------------Registration------------------
    registerUsr: {
        margin: 30,
        padding: 20,
        backgroundColor: 'white'
    },
    txtTitle: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        textAlign: "center",
        marginBottom: 20
    },
    btn: {
        color: 'rgb(117,169,249)',
        textAlign: "center"
    },
    registContainer: {
        padding: 20
    },

    //------------------userData------------------
    userName: {
        borderColor: "rgb(185, 209, 251)"
    },
    input: {
        height: 50,
        marginBottom: 15,
        color: "rgb(2, 31, 84)",
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'rgb(117,169,249)',
        paddingRight: 20,
        paddingLeft: 20,
        fontSize: 18
    },
    img: {
        height: 25,
        width: 25,
        marginRight: 10
    },

    radioBtnRegist: {
        flexDirection: 'row',
        margin: 10,
        padding: 3,
        paddingRight: 10
    },
    txt: {
        fontSize: 18
    },
    radioBtnCont: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    //------------------login------------------
    loginContainer: {
        padding: 20
    },
    txtFrgPass: {
        textDecorationLine: 'underline',
        fontSize: 18,
        padding: 10,
        textAlign: "center"
    },
    loginUsr: {
        marginTop: 60,
        margin: 30,
        padding: 20,
        backgroundColor: 'white'
    },
    //------------------logo------------------
    logo: {
        width: 215,
        height: 120
    },
    logoContainer: {
        alignItems: "center",
        alignContent: 'center',
        margin: 15
    },
    //------------------Header------------------
    headerCont: {
        margin: 15,
        flex: 1
    },
    header: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
    },
    imgHeader: {
        flex: .2,
    },
    headerIconCont: {
        padding: 5,
        marginLeft: 20,
        backgroundColor: "white",
        borderRadius: 4,
    },
    headerIconContfirst: {
        padding: 5,
        paddingRight: 10,
        backgroundColor: "white",
        borderRadius: 4,
    },
    headerIconSet: {
        marginLeft: 20,
    },
    headerTxt: {
        fontSize: 18,
        textAlign: "center"
    },
    //------------------Footer------------------
    footer: {
        flexDirection: 'row',
        backgroundColor: "white"
    },
    footerImgCont: {
        flex: .3
    },
    footerTxtCont: {
        flex: .6
    },
    imgFooter: {
        height: 50,
        width: 100,
        margin: 10
    },
    footerTxt: {
        fontSize: 18,
        paddingTop: 10,
        textAlign: "center"
    },
    //------------------main------------------
    mainContainer: {
        marginTop: 20,
        marginBottom: 20
    },
    //------------------Search------------------
    inputSearch: {
        height: 50,
        flex: .5,
        marginBottom: 10,
        marginRight: 10,
        color: "rgb(2, 31, 84)",
        backgroundColor: "white",
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'rgb(117,169,249)',
        paddingRight: 10,
        paddingLeft: 10,
        fontSize: 16,
    },
    inputSearchCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnGO: {
        marginBottom: 10,
        height: 50,
        padding: 10,
        fontSize: 18,
        color: 'white',
        backgroundColor: 'rgb(117,169,249)',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 25,
    },
    mapViewCon: {
        marginTop: 10,
        marginBottom: 20,
        height: 450
    },
    mapCon: {
        width: '100%',
        height: '100%'
    },
    searchCont: {
        flexDirection: 'column',
    },
    //------------------Meeting------------------
    meetContainer: {
        backgroundColor: 'rgb(250,250,250)',
        padding: 10,
    },
    metCon: {
        backgroundColor: 'white',
        padding: 10,
        margin: 5,
        borderRadius: 2,
        borderWidth: 2,
        borderColor: 'rgb(235,235,235)'
    },
    metConPlaces: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        margin: 5,
        borderRadius: 2,
        borderWidth: 2,
        borderColor: 'rgb(235,235,235)',
        justifyContent: 'space-between',
    },
    metTxt: {
        fontSize: 18,
        color: 'rgb(2,31,84)',
    },
    personMetTxt: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'rgb(183,15,10)',
        textDecorationLine: 'underline',
        margin: 5,
    },
    pickerTxt: {
        width: '50%',
        color: 'rgb(159,39,80)',
        padding: 10,
    },
    btnCon: {
        flexDirection: 'row',
        marginLeft: '15%',
        marginRight: '15%',
        justifyContent: 'space-between',
        marginTop: 10
    },
    btnMet: {
        padding: 3,
        backgroundColor: 'rgb(114,187,83)',
        borderRadius: 5,
        borderWidth: 1.5,
        width: 100,
        alignItems: 'center'
    },
    metBtnTxt: {
        color: 'white',
        fontSize: 18
    },
    btnMetCancel: {
        padding: 3,
        backgroundColor: 'rgb(183,15,10)',
        borderRadius: 5,
        borderWidth: 1.5,
        width: 100,
        alignItems: 'center'
    },
    metTxtRadio: {
        fontSize: 18,
        color: 'rgb(159,39,80)'
    },
    radioBtn: {
        flexDirection: 'row',
        margin: 10,
        backgroundColor: 'rgb(230,230,230)',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'rgb(134,134,134)',
        padding: 3,
        paddingRight: 10
    },
    imgEval: {
        width: 140,
        height: 135
    },
    imgEvalCon: {
        flexDirection: 'row'
    },
    metTitleCon: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
        margin: 5,
        borderRadius: 2,
        borderWidth: 2,
        borderColor: 'rgb(235,235,235)'
    },
    btnMetEval: {
        padding: 3,
        backgroundColor: 'rgb(114,187,83)',
        borderRadius: 5,
        borderWidth: 1.5,
        width: 100,
        alignItems: 'center',
        marginLeft: 'auto',
    },
    pickerTxtEval: {
        width: '50%',
        color: 'rgb(159,39,80)',
        padding: 10,
        marginLeft: 100
    },
    starRatCont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    //------------------Profile------------------
    overView: {
        flexDirection: 'row',
    },
    content: {
        flex: 1
    },
    iconCon: {
        flexDirection: 'column',
        margin: 7
    },
    imgIcon: {
        width: 60,
        height: 60,
        margin: 15,
        marginLeft: 0,
    },
    morningtxt: {
        textAlign: 'center',
        marginRight: 40,
        marginLeft: 40,
        marginBottom:15,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'rgb(235,235,235)',
        backgroundColor: 'white',
        fontSize: 18,
        padding: 3
    },
    contentCon: {
        flex: 1,
        backgroundColor: 'rgb(250,250,250)',
        marginTop: 15,
        borderRadius: 7,
        padding: 10,
    },
    profilePic: {
        marginTop: 10,
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10
    },
    activityCon: {
        backgroundColor: 'white',
        padding: 10,
        margin: 5,
        borderRadius: 2,
        borderWidth: 2,
        borderColor: 'rgb(235,235,235)'
    },
    overViewCont: {
        flex: 1,
        marginLeft: 20,
        padding: 5,
    },
    overViewtxt: {
        fontSize: 18,
        color: 'white',
        borderWidth: .5,
        borderColor: 'rgb(235,235,235)',
        padding: 5,
    },

    //-------------------------------------------------------------
    //-------------------------------------------------------------
    MainContainer:
        {
            flex: 1,
            backgroundColor: '#eee',
            justifyContent: 'center',
            paddingTop: (Platform.OS == 'ios') ? 20 : 0
        },
    Animated_View_Style:
        {
            height: 60,
            backgroundColor: '#FF9800',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 5
        },

    View_Inside_Text:
        {
            color: '#fff',
            fontSize: 24
        },
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    FloatingButtonStyle: {

        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
    editIcon: {
        width: 25,
        height: 30,
        marginLeft: 'auto'
    },
    btnSave: {
        backgroundColor: 'rgb(117,169,249)',
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        marginLeft: 'auto',
        height: 30
    },
    interesttxt: {
        margin: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'rgb(235,235,235)',
        backgroundColor: 'white',
        fontSize: 18,
        padding: 5
    },
    imgIconbook: {
        marginTop: 20,
        width: 80,
        height: 30,
        marginLeft: -8
    },
    imgIconRecom: {
        width: 60,
        height: 80,
        margin: 10,
        marginLeft: 0,
    },
    //------------------------Home------------------
    ownerPost: {
        fontSize: 20,
    },
    ownerName: {
        fontSize: 24,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    OwnerLocation: {
        marginBottom: 10,
        height: 300
    },
    reviewPic: {
        width: 170,
        height: 80,
        borderRadius: 2,
        marginRight: 22
    },
    eachRev: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    RevCont: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 2,
        borderWidth: 2,
        borderColor: 'rgb(235,235,235)',
    },
    topF: {
        marginTop: 15,
        alignItems: 'center'
    },
    inputRev: {
        height: 50,
        width: 225,
        marginBottom: 15,
        color: "rgb(2, 31, 84)",
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'rgb(117,169,249)',
        paddingRight: 20,
        paddingLeft: 20,
        fontSize: 18
    },
    starRatContRev: {
        padding: 10,
        paddingRight: 20
    },
    usrActivity: {
        fontSize: 20,
        color: 'rgb(2,31,84)',
        fontWeight:'bold',
        textDecorationLine:'underline'
    },
    btnSaveSet: {
        backgroundColor: 'rgb(117,169,249)',
        borderRadius: 5,
        borderWidth: 1.5,
        alignItems: 'center',
        marginLeft: 'auto',
        height: 40,
        marginBottom:40,
        padding: 3,
        width: 100,
        marginRight:20
    },
    postPic:{
        width: 250,
        height: 180,
        marginLeft:'auto'
    },
    menuPic:{
        marginTop: 10,
        width:420,
        height:600
    },
    date:{
        width:'60%',
        margin:20,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: "#34495e"
      },


      //---------------------Search-----------------
      map: {
        ...StyleSheet.absoluteFillObject
      },
      bubble: {
        backgroundColor: "rgb(117,169,249)",
        padding:10,
       // paddingHorizontal: 18,
       // paddingVertical: 12,
        borderRadius: 20
      },
      button: {
       // marginTop: 12,
       // paddingHorizontal: 12,
        alignItems: "center",
        //marginHorizontal: 10
      },
      buttonContainer: {
        flexDirection: "column",
        marginVertical: 20,
        backgroundColor: "transparent"
      },
      text: {
        color: "black",
        fontSize: 15
      },
      marker: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 3,
        backgroundColor: "rgba(0,122,255,0.4)",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "white",
        overflow:'hidden'
      },
      radius: {
        height: 50,
        width: 50,
        borderRadius: 25,
        borderWidth: 1,
        backgroundColor: "rgba(0,122,255,0.1)",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "rgba(0,112,255,0.3)",
        alignItems: "center",
        justifyContent: "center"
      },


      buttonn: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
      },
      buttonText: {
        padding: 20,
        color: 'white'
      },





      //-------------------booking--------------
      head: {
        height: 40,
        backgroundColor: 'grey',
        margin: 5
    },
    textt: {
        marginLeft: 5,
        textAlign: 'center',
        fontSize: 18
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
        marginBottom:0
    },
    cell: {
        flex: 1,
        margin: 5,
        backgroundColor: 'rgb(250,250,250)',
        height: 50,
        width: 50,
        borderWidth: 2,
        borderColor: 'green'
    }
});