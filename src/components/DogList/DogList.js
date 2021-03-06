import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../ListItem/ListItem";

const dogList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.dogs}
      renderItem={info => (
        <ListItem
          dogName={info.item.value}
          onItemPressed={() => props.onItemDeleted(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default dogList;
