import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {

  componentWillMount() {
    console.log("test");
  }
// Debugger and Ctrl shift m to debug.
  render() {
    return (
      <View>
        <Text>Album List.</Text>
      </View>
    );
  }
}

export default AlbumList;