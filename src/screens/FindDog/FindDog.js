import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { connect } from 'react-redux';
import DogList from '../../components/DogList/DogList';
import { getDogs } from '../../store/actions/index';


class FindDogScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: 'orange'
  }

  state = {
    dogsLoaded: false,
    removeAnim: new Animated.Value(1),
    dogsAnim: new Animated.Value(0)
  }

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  componentDidMount() {
    this.props.onLoadDogs();
  }

  dogsLoadedHandler = () => {
    Animated.timing(this.state.dogsAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  }

  dogsSearchHandler = () => {
    Animated.timing(this.state.removeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start(() => {
      this.setState({
        dogsLoaded: true
      });
      this.dogsLoadedHandler();
    });
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
    let content = (
      <Animated.View
        style={{
          opacity: this.state.removeAnim,
          transform: [
            {
              scale: this.state.removeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [12, 1]
              })
            }
          ]
        }}
      >
        <TouchableOpacity onPress={this.dogsSearchHandler}>
          <View style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Find Dogs</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
    if (this.state.dogsLoaded) {
      content = (
        <Animated.View
          style={{
            opacity: this.state.dogsAnim,
          }}
        >
          <DogList
            dogs={this.props.dogs}
            onItemSelected={this.itemSelectedHandler}
          />
        </Animated.View>
      )
    }
    return (
      <View style={this.state.dogsLoaded ? null : styles.buttonContainer}>
        {content}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  searchButton: {
    borderColor: "orange",
    borderWidth: 3,
    borderRadius: 50,
    padding: 20
  },
  searchButtonText: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 26
  }
})
const mapStateToProps = state => {
  return {
    dogs: state.dogs.dogs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadDogs: () => dispatch(getDogs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindDogScreen);