import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => { // instead of (props) and props.album.title etc., destructure the prop
  const {title, artist, thumbnail_image, image, url} = album; // further destructuring 
  // can destructure the styles too if I wanted with
  // const {thumbnailStyle, headerContentStyle} = styles;
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image 
            style={styles.thumbnailStyle}
            source={ { uri: thumbnail_image } 
          }/>
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}> {title} </Text>
          <Text> {artist} </Text>
        </View>
      </CardSection>
      
      <CardSection>
        <Image
          style={styles.imageStyle} 
          source={ { uri: image } }
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Here
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle:{
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle:{
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;