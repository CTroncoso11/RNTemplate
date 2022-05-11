/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import { ScreenName } from './src/enums/screen-name.enum';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MainScreen } from './src/screens/Login/index';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={{flex:1}}>
    <NavigationContainer>
      <StatusBar backgroundColor="grey"/>
      <Stack.Navigator initialRouteName={ScreenName.MAIN} 
        screenOptions={{
          headerShown: false,
          headerTintColor: '#fff',
          // headerStyle: {
          //   backgroundColor: '#00005A',
          // },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 16
          },
          headerBackButtonMenuEnabled: true,
          headerBackTitle: 'Volver',
          headerBackTitleVisible: true,
          headerBackTitleStyle: {fontFamily: 'RockfordSans-Regular'}
        }}
      >
        <Stack.Screen name={ScreenName.MAIN} component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
};


export default App;
