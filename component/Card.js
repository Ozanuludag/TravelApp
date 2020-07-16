import React, { useState } from 'react';
import { Card, ListItem, Button } from 'react-native-elements'
import {StyleSheet, Text, View, Image, ImageBackground, ScrollView, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons";

const CardComponent = (props) => {

    var day = new Date().getDate(); 
    var month = new Date().getMonth() + 1; 
    var year = new Date().getFullYear();

    const [gallery, setgallery] = useState([
        {
          image: {
            uri:
              "https://im0-tub-tr.yandex.net/i?id=0372e7559ea4bb9b277926921e8ca1fd&n=13",
          },
          title: "Switzerland",
          key: "1",
        },
        {
          image: {
            uri:
              "https://portal.andina.pe/EDPfotografia3/Thumbnail/2017/11/09/000462113W.jpg",
          },
          title: "New Zeland",
          key: "2",
        },
        {
          image: {
            uri:
              "https://im0-tub-tr.yandex.net/i?id=4c667d83715020671fb6bae379bafd1b&n=13",
          },
          title: "Rome",
          key: "3",
        },
        {
          image: {
            uri:
              "https://blog.educaistanbul.com/wp-content/uploads/2018/03/tahiti-1.jpg",
          },
          title: "Tahiti",
          key: "4",
        },
      ]);
   
    return (
        <FlatList
        showsHorizontalScrollIndicator={false}
        data={gallery}
        renderItem={({item}) =>{
            return(
            <View style={styles.container}>
                <ScrollView>
                <TouchableOpacity
                   onPress={() => props.navigation.navigate('Post', { item }) }
                  >
                <View style={{elevation:10}}>
                <ImageBackground 
                    source={item.image}
                    style={styles.contain}
                    imageStyle={{borderRadius:25}}
                >
                    <View style={{flexDirection:'row', alignSelf:"flex-start", backgroundColor:'gray' , borderRadius:20, marginTop:170, marginLeft:15, alignItems:'center'}}>
                    <Icon name='menu-outline' size={14} color='orange' style={{marginLeft:5}} />
                    <Text style={{marginHorizontal:5}}>{item.title}</Text>
                    </View>
    
                    <View style={{flexDirection:'row', alignSelf:"flex-start", backgroundColor:'gray' , borderRadius:20, marginTop:170, marginLeft:10, alignItems:'center'}}>
                    <Icon name='eye-outline' size={14} color='orange' style={{marginLeft:5}} />
                    <Text style={{marginHorizontal:5}}>1509</Text>
                    </View>
    
                    <View style={{flexDirection:'row', alignSelf:"flex-start", backgroundColor:'gray' , borderRadius:20, marginTop:170, marginLeft:10, alignItems:'center'}}>
                    <Text style={{marginHorizontal:5}}>{day +"-"+ month+ "-" + year}</Text>
                    </View>
    
                </ImageBackground>
                </View>
                </TouchableOpacity>
               </ScrollView>
               </View>
            );
        }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      marginBottom:10
    },
    contain: {
        marginTop:10, 
        marginHorizontal:10,
        height:200, 
        flexDirection:'row', 
        justifyContent:'space-between',
        elevation:10
    }

  });

export default CardComponent;