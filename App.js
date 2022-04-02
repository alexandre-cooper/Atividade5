import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import Routes from './src/Routes'

export default function App(){
      return(
          <NavigationContainer>
            <Routes/>
          </NavigationContainer>
      )
}