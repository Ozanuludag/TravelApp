import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, 
    Image, 
    ImageBackground, 
    ScrollView, 
    TouchableOpacity, FlatList, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
  } from "react-native-responsive-dimensions";

import {widthPercentageToDP as wp, 
    heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

const Home = ({navigation}) => {

const image = {uri:
      'https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    } 

const recentImage = {uri:
    'https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  } 

const [gallery, setgallery] = useState([
    { image:{uri:'https://im0-tub-tr.yandex.net/i?id=0372e7559ea4bb9b277926921e8ca1fd&n=13'}, title: 'Switzerland',  key: '1' },
    { image:{uri:'https://portal.andina.pe/EDPfotografia3/Thumbnail/2017/11/09/000462113W.jpg'}, title: 'New Zeland',key: '2' },
    { image:{uri:'https://im0-tub-tr.yandex.net/i?id=4c667d83715020671fb6bae379bafd1b&n=13'}, title: 'Rome',key: '3' },
    { image:{uri:'https://blog.educaistanbul.com/wp-content/uploads/2018/03/tahiti-1.jpg'}, title: 'Tahiti', key: '4' },
  ]);
  //Navigation method
  //'https://im0-tub-tr.yandex.net/i?id=0372e7559ea4bb9b277926921e8ca1fd&n=13'
  const goToPost = () => {
      navigation.navigate('Post')
  }

    return (
      <View style={{flexGrow:1, height:hp('100%')}}>
          <View>
              <ImageBackground 
                source={image}
                style={styles.image}
                >

                 <View style={styles.searchContainer}>
                    <Text style={styles.userGreet}>Hi Venice,</Text>
                    <Text style={styles.userText}>Where would you like to go today?</Text>
                 </View>
                 <View>
                     <TextInput
                     style={styles.searchBox}
                     placeholder='search destination'
                     placeholderTextColor='#666'
                     >
                     </TextInput>
                     <Icon name='search-outline' size={32} color= '#666' 
                        style={{
                        position:'absolute',
                        top: hp('3.5%'),
                        right:wp('30%'),
                        opacity:0.6 }}  />
                 </View>
                 <Icon name='menu-outline' size={32} color= '#fff' 
                        style={{
                        position:'absolute',
                        top:'5%',
                        left:'5%',
                       }}  />
                <TouchableOpacity onPress={() => alert('Notifications pressed')}
                  style={{
                    position:'absolute',
                    top:'6%',
                    right:'5%',
                    }}  
                >
                    <Icon name='notifications-outline' size={hp('3.5%')} color= '#fff' />
                          
                </TouchableOpacity>
                 
              </ImageBackground>
          </View>
          <ScrollView >
              <View style={{padding: 16, marginTop:10}}>
                  <Text style={{fontSize: 22, fontWeight: 'bold'}}>Top Trending</Text>
              </View>
              <View>
                  <FlatList
                  data={gallery}
                  horizontal={true}
                  renderItem={({item}) => {
                      return (
                        <View style={{paddingVertical:20, paddingHorizontal:5}}>
                            <TouchableOpacity onPress={goToPost}>
                                <Image source={item.image}
                                style={{width:200, marginRight: 10, height:250, borderRadius:15}}
                                />
                           
                                <Icon name='pin-outline' size={32} color= '#fff' 
                                style={styles.imageLocationIcon}  />
                                <Text style={styles.imageText}>{item.title}</Text>
                            </TouchableOpacity>
                        </View>
                      )
                  }}
                  />
              </View>
              <View style={{marginBottom:60}}>
                  <View style={{padding: 20, flexDirection:'row', justifyContent:'space-between'}}>
                      <Text style={{fontSize: 22, fontWeight:'bold', }}>Recently  Viewed</Text>
                      <Text style={{fontSize: 14, fontWeight: 'bold', color:'#ff6200'}}>View All</Text>
                  </View>
                  <Image
                  source={recentImage}
                  style={{width:'94%', height:250, borderRadius:10, alignSelf:'center'}}
                  />
            
              <View style={{position: 'absolute', bottom: 0, padding:16}}>
                  <View style={{flexDirection: 'row'}}>
                    <Icon name='location-outline' size={20} color='white'
                    style={{marginLeft:10, position: 'relative', top: 4 }}
                    />
                    <Text style={{fontSize: 22, color: 'white', fontWeight: 'normal', marginBottom:'2%', marginHorizontal:10}}> Venice </Text>
                  </View  >
                    <Text style={{fontSize:14, color:'white', fontWeight:'normal', marginBottom:10, opacity:0.9, marginLeft:10 }}> 
                        Venice the capital  of the northern Italy's Veneto Region in the Adriatic Sea
                    </Text>
                    </View>
              </View>

          </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width:wp('100%'),
    height:responsiveScreenHeight(25),
  },

  searchContainer: {
    paddingTop: hp('10%'),
    paddingLeft:wp('5%')

  },
  userGreet: {
      fontSize: responsiveScreenFontSize(3),
      fontWeight:'bold',
      color:'white',
  },
  userText: {
      fontSize: responsiveScreenFontSize(1.7),
      fontWeight: 'normal',
      color: 'white',
},
searchBox: {
    marginTop: hp('3%'),
    backgroundColor: '#fff',
    paddingLeft: hp('2%'),
    padding: hp('1%'),
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width:'75%',/////////////////////////////
},
icon: {
    position:'absolute',
    top:'35%',
    right:'13%',
    opacity:0.6
},

imageLocationIcon: {
    position: 'absolute',
    left: '5%',
    bottom: '2%'
},
imageText: {
    position: 'absolute',
    bottom: '2%',
    left: '20%',
    fontSize:18,
    color:'white'
}
})

export default Home;