/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import ListItem from "./src/components/ListItem/ListItem";
import DogInput from "./src/components/DogInput/DogInput";
import DogList from "./src/components/DogList/DogList";

export default class App extends Component {
  state = {
    dogs: []
  };

  dogAddedHandler = dogName => {
    this.setState(prevState => {
      return {
        dogs: prevState.dogs.concat({
          key: Math.random(),
          value: dogName
        })
      };
    });
  };

  dogDeletedHandler = key => {
    this.setState(prevState => {
      return {
        dogs: prevState.dogs.filter(dog => {
          return dog.key !== key;
        })
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <DogInput onDogAdded={this.dogAddedHandler} />
        <DogList
          dogs={this.state.dogs}
          onItemDeleted={this.dogDeletedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  }
});
