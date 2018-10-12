/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import DogInput from "./src/components/DogInput/DogInput";
import DogList from "./src/components/DogList/DogList";
import dogImage from "./src/assets/default_dog.jpg";
import DogDetail from "./src/components/DogDetail/DogDetail";

export default class App extends Component {
  state = {
    dogs: [],
    selectedDog: null
  };

  dogAddedHandler = dogName => {
    this.setState(prevState => {
      return {
        dogs: prevState.dogs.concat({
          key: Math.random(),
          name: dogName,
          image: {
            uri:
              "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?cs=srgb&dl=animal-chihuahua-cute-39317.jpg&fm=jpg"
          }
        })
      };
    });
  };

  dogDeletedHandler = () => {
    this.setState(prevState => {
      return {
        dogs: prevState.dogs.filter(dog => {
          return dog.key !== prevState.selectedDog.key;
        }),
        selectedDog: null
      };
    });
  };

  dogSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedDog: prevState.dogs.find(dog => {
          return dog.key === key;
        })
      };
    });
  };

  modalCloseHandler = () => {
    this.setState({
      selectedDog: null
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <DogDetail
          selectedDog={this.state.selectedDog}
          onItemDeleted={this.dogDeletedHandler}
          onModalClosed={this.modalCloseHandler}
        />
        <DogInput onDogAdded={this.dogAddedHandler} />
        <DogList
          dogs={this.state.dogs}
          onItemSelected={this.dogSelectedHandler}
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
