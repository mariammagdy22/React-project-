import React, { Component } from 'react';
import { StyleSheet, Platform, View, Icon, Text, Image, Dimensions, TouchableOpacity, TextInput, Button } from 'react-native';
import { Marker } from 'react-native-maps';
import { MapView } from 'expo';

import { styles } from './styles';


const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = 30.081098;
const LONGITUDE = 31.030731;
const LATITUDE_DELTA = .05;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;
function createMarker(modifier = 1) {
    return {
        latitude: LATITUDE - SPACE * modifier,
        longitude: LONGITUDE - SPACE * modifier
    };
}
const MARKERS = [createMarker()];
const DEFAULT_PADDING = { top: 0, right: 0, bottom: 0, left: 0 };




export default class Search extends React.Component {
    fitAllMarkers() {
        this.map.fitToCoordinates(MARKERS, {
            edgePadding: DEFAULT_PADDING,
            animated: true
        });
    }


    onPressZoomIn() {
        let region = {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
        }
        this.map.animateToRegion(region, 100);
    }

    onPressZoomOut() {
        let region = {
            latitude: 30.072098,
            longitude: 31.021731,
            latitudeDelta: LATITUDE_DELTA / 10,
            longitudeDelta: LONGITUDE_DELTA / 10
        }
        this.map.animateToRegion(region, 100);
    }

    render() {
        return (
            <View style={styles.contentCon}>
                <View style={styles.inputSearchCont}>
                    <TextInput type='text' placeholder="Search by Name"
                        style={styles.inputSearch}
                        underlineColorAndroid="transparent"
                        placeholderTextColor='rgb(117,169,249)'
                    // onChangeText={}
                    />
                    <TextInput type='text' placeholder="Search by Location"
                        style={styles.inputSearch}
                        underlineColorAndroid="transparent"
                        placeholderTextColor='rgb(117,169,249)'
                    // onChangeText={}
                    />
                    <Text style={styles.btnGO}
                    //onPress
                    >GO</Text>

                </View>
                <View style={styles.inputSearchCont}>
                    <TextInput type='text' placeholder="Search by Category"
                        style={styles.inputSearch}
                        underlineColorAndroid="transparent"
                        placeholderTextColor='rgb(117,169,249)'
                    // onChangeText={}
                    />
                    <TextInput type='text' placeholder="Withen Distance (m)"
                        style={styles.inputSearch}
                        underlineColorAndroid="transparent"
                        placeholderTextColor='rgb(117,169,249)'
                    // onChangeText={}
                    />
                    <Text style={styles.btnGO}
                    //onPress
                    >GO</Text>
                </View>
                <View style={styles.mapViewCon}>
                    <MapView style={styles.mapCon}
                        ref={ref => {
                            this.map = ref;
                        }}
                        style={styles.map}
                        initialRegion={{
                            latitude: LATITUDE,
                            longitude: LONGITUDE,
                            latitudeDelta: LATITUDE_DELTA,
                            longitudeDelta: LONGITUDE_DELTA
                        }}
                    >

                        {MARKERS.map((marker, i) => (
                            <MapView.Marker
                                coordinate={marker}
                                title='Information Technology Institute'
                                description='iTi'
                            >
                                <View style={styles.radius}>
                                    <View style={styles.marker} />
                                </View>
                            </MapView.Marker>
                        ))}
                        <View style={styles.marker} />
                    </MapView>
                </View>

                <View style={styles.inputSearchCont}>
                    <TouchableOpacity
                        // onPress={}
                        style={[styles.bubble, styles.button]}
                    >
                        <Text style={styles.text}>Get Direction</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.fitAllMarkers()}
                        style={[styles.bubble, styles.button]}
                    >
                        <Text style={styles.text}>Go To Current Location</Text>
                    </TouchableOpacity>
                    <View style={[styles.bubble, styles.button, { flexDirection: 'row' }]}>
                        <TouchableOpacity
                            onPress={() => { this.onPressZoomIn() }}
                        >
                            <Text style={{ fontSize: 24, color: "black" }}> +    </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { this.onPressZoomOut() }}
                        >
                            <Text style={{ fontSize: 24, color: "black" }}> - </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View >
        );
    }
}