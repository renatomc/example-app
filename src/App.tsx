import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {View, StatusBar} from 'react-native';

import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="#312e38"  
      />
      <View style={{ backgroundColor: '#312e38', flex: 1}}>
        <Routes />
      </View>
    </NavigationContainer>
  );
}
