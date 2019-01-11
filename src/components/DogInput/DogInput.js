import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import DefaultInput from '../UI/DefaultInput/DefaultInput';

const dogInput = props => (
  <DefaultInput placeholder="Image name"
    value={props.dogName}
    onChangeText={props.onChangeText} />

);

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

export default dogInput;
