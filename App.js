import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Alert, Button, FlatList, Image, ListView, Platform, ScrollView, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';

export default class Movies extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    dataSource: PropTypes.array,
  };
  
  constructor (props) {
    super(props);
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount () {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then( response => response.json() )
      .then( json => this.setState({
        isLoading: false,
        dataSource: json.movies,
      }))
      .catch( e => console.error(e) );
  }

  render () {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        { this.state.isLoading ?
          <ActivityIndicator /> :
          <FlatList data={this.state.dataSource}
                    keyExtractor={ item => item.title }
                    renderItem={ ({item}) => <Text>{item.title}, {item.releaseYear}</Text> } />
        }
      </View>
    );
  }
}
