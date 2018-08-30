import React, { Component } from 'react';
import { Platform, StyleSheet, Button, ScrollView, View, Text } from 'react-native';
import { StackNavigator, createStackNavigator } from 'react-navigation';
import { MapView } from 'expo';
import { styles } from '../styles';
import { Marker } from "react-native-maps";


export default class Locations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapRegion: {
        latitude: 30.145780,
        longitude: 31.094660,
        latitudeDelta: 1,
        longitudeDelta: 1
      },
      locationResult: null,
      location: { coords: { latitude: 30.076703, longitude: 31.018725 } }
    }
  }

  componentDidMount() {
    this._getLocationAsync();
  }
  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        locationResult: "Permission to access location was denied",
        location
      });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location), location });
  };

  render() {
    return (
      <MapView
        region={this.state.mapRegion}
        style={{
          alignSelf: "stretch",
          flex: 1,
          backgroundColor: 'rgb(250,250,250)',
          marginTop: 15,
          borderRadius: 7,
          padding: 10,
        }}
      >
        <Marker
          coordinate={{ latitude: 30.045780, longitude: 31.094660 }}
          title="KFC"
          description="Dandy Mega Mall"
        />
        <Marker
          coordinate={{ latitude: 30.050200, longitude: 31.241470 }}
          title="KFC"
          description="bdel Khaleq Tharwat St."
        />
        <Marker
          coordinate={{ latitude: 30.041870, longitude: 31.205931 }}
          title="KFC"
          description="AL-Dokki"
        />
        <Marker
          coordinate={{ latitude: 30.049910, longitude: 31.248600 }}
          title="KFC"
          description="El Tahrir Sq."
        />
        <Marker
          coordinate={{ latitude: 30.009569, longitude: 31.213810 }}
          title="KFC"
          description="Faisal St."
        />
        <Marker
          coordinate={{ latitude: 31.221069, longitude: 29.977690 }}
          title="KFC"
          description="ElRaml Station, Alexandria"
        />
      </MapView>

    );
  }
};

