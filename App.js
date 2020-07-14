import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/home';
import Post from './screens/postDetails';

const Stack = createStackNavigator();

export default function App() {

    return (
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown:false 
        }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Post" component={Post} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
})