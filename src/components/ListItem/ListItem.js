import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const listItem = props => {
  console.log(props);
  return (
    <TouchableOpacity onPress={props.onItemPressed}>
      <View style={styles.listItem}>
        <Image
          resizeMode="contain"
          source={props.dogImage}
          style={styles.dogImage}
        />
        <Text>{props.dogName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  dogImage: {
    marginRight: 8,
    height: 30,
    width: 30
  }
});

export default listItem;
