import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  return ( // need the flex: 1 property for root view for the scroll view
    <View style={ {flex: 1}}> 
      <Header headerText={'Albums'}/>
      <AlbumList/>
    </View>
  );
};

AppRegistry.registerComponent('albums', () => App);

