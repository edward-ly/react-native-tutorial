import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class JustifyContentBasics extends Component {
  render() {
    return (
      // Try setting 'justifyContent' to 'flex-start', 'center', 'flex-end', 'space-around', or 'space-between'.
      // The 'space-evenly' value is invalid.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      </View>
    );
  }
}
