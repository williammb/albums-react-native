import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const {
    thumbnail_image,
    title,
    artist,
    image,
    url
  } = album;
  const {
    thumbnailContentStyle,
    thumbnailStyle,
    headerContentStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContentStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)} >
          Compre Agora!
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  thumbnailContentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};


export default AlbumDetail;
