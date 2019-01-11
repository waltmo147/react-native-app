import React, { Component } from 'react';
import { View, Text } from "react-native";
import { connect } from 'react-redux';
import DogList from '../../components/DogList/DogList';


class FindDogScreen extends Component {
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

  itemSelectedHandler = key => {
    const selDog = this.props.dogs.find(dog => {
      return dog.key === key;
    });
    this.props.navigator.push({
      screen: "awesome-dogs.DogDetailScreen",
      title: selDog.name,
      passProps: {
        selectedDog: selDog
      }
    })
  }

  render() {
    return (
      <View>
        <DogList dogs={this.props.dogs} onItemSelected={this.itemSelectedHandler} />
      </View>
    )
  }
}


const mapStateToProps = state => {
  return {
    dogs: state.dogs.dogs
  }
}

export default connect(mapStateToProps)(FindDogScreen);