import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { connect } from 'react-redux';


import { addDog } from '../../store/actions/index';
import DogInput from '../../components/DogInput/DogInput';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';
import validate from '../../utillity/validation'

class ShareDogScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: 'orange'
  }

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  componentWillMount() {
    this.reset();
  }

  reset = () => {
    this.setState({
      controls: {
        dogName: {
          value: "",
          valid: false,
          touched: false,
          validationRules: {
            notEmpty: true
          }
        },
        location: {
          value: null,
          valid: false
        },
        image: {
          value: null,
          valid: false
        }
      }
    })
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
    this.props.onAddDog(
      this.state.controls.dogName.value,
      this.state.controls.location.value,
      this.state.controls.image.value,
    );
    reset();
    this.imagePicker.reset();
  }


  dogNameChangedHandler = val => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          dogName: {
            ...prevState.controls.dogName,
            value: val,
            valid: validate(val, prevState.controls.dogName.validationRules),
            touched: true
          }
        }
      }
    })

  }

  locationPickedHandler = location => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          location: {
            value: location,
            valid: true
          }
        }
      }
    })
  }

  imagePickedHandler = image => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          image: {
            value: image,
            valid: true
          }
        }
      }
    })
  }

  render() {
    let submitButton = (<Button
      title="Share it !"
      onPress={this.dogAddedHandler}
      disabled={
        !this.state.controls.dogName.valid ||
        !this.state.controls.location.valid ||
        !this.state.controls.image.valid
      }
    />);
    if (this.props.isLoading) {
      submitButton = <ActivityIndicator />
    }

    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText><HeadingText>Post your dog!</HeadingText></MainText>
          <PickImage
            onImagePicked={this.imagePickedHandler}
            ref={ref => this.imagePicker = ref}
          />
          <PickLocation onLocationPick={this.locationPickedHandler} />
          <DogInput
            dogData={this.state.controls.dogName}
            onChangeText={this.dogNameChangedHandler}
          />
          <View style={styles.button}>
            {submitButton}
          </View>
        </View>
      </ScrollView>
    );
  }
}

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

const mapStateToProps = state => {
  return {
    isLoading: state.ui.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddDog: (dogName, location, image) => dispatch(addDog(dogName, location, image))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShareDogScreen);