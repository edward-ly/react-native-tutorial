import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  render() {
    return (
      <View style={{ padding: 16 }}>
        <TextInput
          style={{ fontSize: 32, height: 48, borderColor: "gray", borderWidth: 2, padding: 4 }}
          underlineColorAndroid="transparent"
          placeholder="Type here to translate!"
          onChangeText={ text => this.setState({ text: text }) }
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          { this.state.text.split(" ").map( word  => word && "🍕").join(" ") }
        </Text>
      </View>
    );
  }
}
