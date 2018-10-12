/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import DogInput from "./src/components/DogInput/DogInput";
import DogList from "./src/components/DogList/DogList";
import dogImage from "./src/assets/default_dog.jpg";
import DogDetail from "./src/components/DogDetail/DogDetail";

import {
  addDog,
  deleteDog,
  selectDog,
  deselectDog
} from "./src/store/actions/index";

class App extends Component {
  dogAddedHandler = dogName => {
    this.props.onAddDog(dogName);
  };

  dogDeletedHandler = () => {
    this.props.onDeleteDog();
  };

  dogSelectedHandler = key => {
    this.props.onSelectDog(key);
  };

  modalCloseHandler = () => {
    this.props.onDeselectDog();
  };

  render() {
    return (
      <View style={styles.container}>
        <DogDetail
          selectedDog={this.props.selectedDog}
          onItemDeleted={this.dogDeletedHandler}
          onModalClosed={this.modalCloseHandler}
        />
        <DogInput onDogAdded={this.dogAddedHandler} />
        <DogList
          dogs={this.props.dogs}
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

const mapStateToProps = state => {
  return {
    dogs: state.dogs.dogs,
    selectedDog: state.dogs.selectedDog
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddDog: name => dispatch(addDog(name)),
    onDeleteDog: () => dispatch(deleteDog()),
    onSelectDog: key => dispatch(selectDog(key)),
    onDeselectDog: () => dispatch(deselectDog())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
