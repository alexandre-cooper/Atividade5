import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Detalhes from '../pages/Detalhes';

export default function App(){

    const navigation = createStackNavigator();
 

      return(
          <navigation.Navigator>
              <navigation.Screen
              name='Home'
              component={Home}
              options={{
                  headerTitle: 'Filmes',
                  headerStyle:{
                    backgroundColor: '#FFF',
                    
                }
              }}
              />
              <navigation.Screen
              name='Detalhes'
              component={Detalhes}
              options={{
                  headerTitle:'Detalhes do filme'
              }}
              />
          </navigation.Navigator>
      )
}