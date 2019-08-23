// Importe uma biblioteca para ajudar a criar um componente
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Crie um componente
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Renderize para o dispositivo
AppRegistry.registerComponent('albums', () => App);
