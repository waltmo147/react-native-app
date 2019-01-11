import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from "react-native";
import { connect } from 'react-redux';


import { addDog } from '../../store/actions/index';
import DogInput from '../../components/DogInput/DogInput';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';

class ShareDogScreen extends Component {
  state = {
    dogName: ""
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: 'left'
        })
      }
    }
  }

  dogAddedHandler = () => {
    if (this.state.dogName.trim(0 !== "")) {
      this.props.onAddDog(this.state.dogName);
    }
  }

  dogNameChangedHandler = val => {
    this.setState({
      dogName: val
    })
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <DogInput dogName={this.state.dogName} onChangeText={this.dogNameChangedHandler} />
          <MainText><HeadingText>Post your dog!</HeadingText></MainText>
          <PickImage />
          <PickLocation />

          <View style={styles.button}>
            <Button title="Share!" onPress={this.dogAddedHandler} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddDog: (dogName) => dispatch(addDog(dogName))
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },

  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },

  button: {
    margin: 9,
  },

  previewImage: {
    width: "100%",
    height: "100%"
  }
})

export default connect(null, mapDispatchToProps)(ShareDogScreen);