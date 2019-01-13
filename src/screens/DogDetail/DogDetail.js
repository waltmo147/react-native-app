import React, { Component } from "react";
import {
  View,
  Image,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from 'react-redux';
import { deleteDog } from '../../store/actions/index';
import MapView from "react-native-maps";

class DogDetail extends Component {

  state = {
    viewMode: "portrait"
  }

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
  }

  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? "portrait" : "landscape",
    })
  }

  dogDeletedHandler = () => {
    this.props.onDeleteDog(this.props.selectedDog.key);
    this.props.navigator.pop();
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          this.state.viewMode === "portrait"
            ? styles.portraitContainer
            : styles.landscapeContainer
        ]}
      >
        <View style={styles.subContainer}>
          <Image source={this.props.selectedDog.image} style={styles.dogImage} />
        </View>
        <View style={styles.subContainer}>
          <MapView initialRegion={{
            ...this.props.selectedDog.location,
            latitudeDelta: 0.0122,
            longitudeDelta: Dimensions.get("window").width
              / Dimensions.get("window").height * 0.0122,
          }}
            style={styles.map}>
            <MapView.Marker coordinate={this.props.selectedDog.location} />
          </MapView>
        </View>
        <View style={styles.subContainer}>
          <View>
            <Text style={styles.dogName}>{this.props.selectedDog.name}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={this.dogDeletedHandler}>
              <View style={styles.deleteButton}>
                <Icon size={30} name={Platform.OS === 'android' ? "md-trash" : "ios-trash"} color="red" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22,
    flex: 1
  },
  portraitContainer: {
    flexDirection: "column"
  },
  landscapeContainer: {
    flexDirection: "row"
  },
  dogName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25
  },
  dogImage: {
    width: "100%",
    height: 200
  },
  deleteButton: {
    alignItems: "center"
  },
  subContainer: {
    flex: 1
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },

});

const mapDispatchToProps = dispatch => {
  return {
    onDeleteDog: (key) => dispatch(deleteDog(key))
  }
}

export default connect(null, mapDispatchToProps)(DogDetail);
