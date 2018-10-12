import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          value={this.state.placeName}
          placeholder="An awesome place"
          onChangeText={this.placeNameChangedHandler}
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  plcaeButton: {
    width: "30%"
  }
});

export default PlaceInput;
