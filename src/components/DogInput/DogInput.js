import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class DogInput extends Component {
  state = {
    dogName: ""
  };

  dogNameChangedHandler = val => {
    this.setState({
      dogName: val
    });
  };

  dogSubmitHandler = () => {
    if (this.state.dogName.trim() === "") {
      return;
    }
    this.props.onDogAdded(this.state.dogName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.dogInput}
          value={this.state.dogName}
          placeholder="Share your dog"
          onChangeText={this.dogNameChangedHandler}
        />
        <Button
          title="Add"
          style={styles.dogButton}
          onPress={this.dogSubmitHandler}
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
  dogInput: {
    width: "70%"
  },
  plcaeButton: {
    width: "30%"
  }
});

export default DogInput;
