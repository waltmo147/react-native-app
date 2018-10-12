import React, { Component } from "react";
import { Modal, View, Image, Button, Text, StyleSheet } from "react-native";

const dogDetail = props => {
  let modalContent = null;
  if (props.selectedDog) {
    modalContent = (
      <View>
        <Image source={props.selectedDog.image} style={styles.dogImage} />
        <Text style={styles.dogName}>{props.selectedDog.name}</Text>
      </View>
    );
  }

  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedDog !== null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="Delete" color="red" onPress={props.onItemDeleted} />
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
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
  }
});

export default dogDetail;
