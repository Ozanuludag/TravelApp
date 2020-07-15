import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem, DrawerContent, DrawerItemList } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/Ionicons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Home from './screens/home';
import Post from './screens/postDetails';
import Example from './screens/example';

const Stack = createStackNavigator();
const ExampleStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator 
      screenOptions={{
      headerShown:false 
    }}>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Post"
        component={Post}
      />
      <Stack.Screen
        name="Example"
        component={Example}
      />

    </Stack.Navigator>
  );
}

function ExampleStackScreen() {
  return (
    <ExampleStack.Navigator 
      screenOptions={{
      headerShown:false 
    }}
    >
      <ExampleStack.Screen
        name=" Example"
        component={ Example}
      />
    </ExampleStack.Navigator>
  );
}

const CustomDrawerContentComponent = (props) => {
  return(
  
   <SafeAreaView style= {styles.container}
   forceInset={{top: 'always', horizontal: 'never'}}
   >
     <ScrollView>
     <View>
        <ImageBackground source={require('./assets/images/index.jpg')}
              style={styles.drawerImage} >

             <View style={{alignItems:'center'}}>
                <Text style={styles.drawerHeaderText}> Travel App </Text>
             </View>
        </ImageBackground>
     </View>
     <DrawerItemList {...props} />
     </ScrollView>
     <View style={styles.drawerBottom}>
      <Icon name='logo-instagram' size={24} style={{marginLeft:wp('10%')}}/>
      <Icon name="logo-twitter" size={24}/>
      <Icon name='logo-youtube' size={24}/>
      <Icon name='logo-facebook' size={24} style={{marginRight:wp('10%')}}/>
      </View> 
   </SafeAreaView>
 
  )
 }

export default function App() {
    return (

      <NavigationContainer>
        <Drawer.Navigator
         initialRouteName="Home"
         screenOptions={{
           headerShown:false 
         }}
         drawerContent={(props) => <CustomDrawerContentComponent {...props} />}
        >
          <Drawer.Screen name="Home" component={HomeStackScreen} 
          options={{ drawerIcon: ({tintColor}) => (
            <Icon name="home-outline" size={22} color={tintColor} 
            />
        )
    }}
          />
          <Drawer.Screen name="All Places" component={ExampleStackScreen} 
            options={{ drawerIcon: ({tintColor}) => (
              <Icon name="airplane-outline" size={22} color={tintColor} 
              />
          )
      }}
          />
        </Drawer.Navigator>
    </NavigationContainer>

    );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  drawerHeader: {
    backgroundColor :'#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent:'center',
    flexDirection:'row',
  },
  drawerHeaderText: {
    color:'black',
    fontSize:hp('5%'),
    fontWeight:'bold',
    marginTop:hp('5%'),
  },
  drawerImage: {
    width:'100%',
    height: hp('30%'),
  },
  drawerBottom: {
    width:wp('78%'), 
    height:hp('8%'), 
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    
  }
})