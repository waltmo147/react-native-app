import React, { Component } from "react";
import {
  View,
  Image,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from 'react-redux';
import { deleteDog } from '../../store/actions/index'

class DogDetail extends Component {
  dogDeletedHandler = () => {
    this.props.onDeleteDog(this.props.selectedDog.key);
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={this.props.selectedDog.image} style={styles.dogImage} />
          <Text style={styles.dogName}>{this.props.selectedDog.name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.dogDeletedHandler}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="ios-trash" color="red" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22
  },

  dogName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25
  },
  dogImage: {
    width: "100%",
    height: 200
  },
  deleteButton: {
    alignItems: "center"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeleteDog: (key) => dispatch(deleteDog(key))
  }
}

export default connect(null, mapDispatchToProps)(DogDetail);
