import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

  state = { albums: [] };


  componentWillMount() {
    axios.get('http://upperatm.pythonanywhere.com/albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map( album => 
    <AlbumDetail key={album.title} album={album}/>
    );
  }

// Debugger and Ctrl shift m to debug.
  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;