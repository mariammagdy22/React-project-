import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Text
} from "react-native";
import MapView, { Marker } from "react-native-maps";
const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = 30.071398;
const LONGITUDE = 31.020731;
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

class FitToCoordinates extends React.Component {
  fitAllMarkers() {
    this.map.fitToCoordinates(MARKERS, {
      edgePadding: DEFAULT_PADDING,
      animated: true
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
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
              coordinate={ marker}
              title='Information Technology Institute'
              description='iTi'
            >
              <View style={styles.radius}>
                <View style={styles.marker} />
              </View>
            </MapView.Marker>

            /*<Marker             
              key={i}
              coordinate={marker}
              title='Information Technology Institute'
             //description='iTi'
            />*/
          ))}
          <View style={styles.marker} />
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.fitAllMarkers()}
            style={[styles.bubble, styles.button]}
          >
            <Text style={styles.text}>Go To Current Location</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  bubble: {
    backgroundColor: "rgb(117,169,249)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  button: {
    marginTop: 12,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10
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
  }
});
export default FitToCoordinates;
