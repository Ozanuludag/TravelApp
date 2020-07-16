import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
  ActivityIndicator ,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image, withBadge } from 'react-native-elements';
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
  const image = {
    uri:
      "https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  };

  const recentImage = {
    uri:
      "https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  };
  const venice =
    "Venice the capital  of the northern Italy's Veneto Region in the Adriatic Sea";

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
  const [counter, setCounter] = useState(1);

  const BadgedIcon = withBadge(counter)(Icon)
  return (
    <SafeAreaView>
    <View style={{flexGrow:1}}>
      <View>
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.searchContainer}>
            <Text style={styles.userGreet}>Hi Venice,</Text>
            <Text style={styles.userText}>
              Where would you like to go today?
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.searchBox}
              placeholder="search destination"
              placeholderTextColor="#666"
            ></TextInput>
            <Icon
              name="search-outline"
              size={hp("3%")}
              color="#666"
              style={{
                position: "absolute",
                top: hp("4.5%"),
                right: wp("30%"),
                opacity: 0.6,
              }}
            />
          </View>
          <TouchableOpacity  
              onPress={() => navigation.openDrawer() }
              style={{
              position: "absolute",
              top: hp("1.5%"),
              left: "5%",
            }}>
          <Icon
            name="menu-outline"
            size={hp("4%")}
            color="#fff"
          />
          </TouchableOpacity>
        
            <TouchableOpacity
              onPress={() => setCounter(counter+1)}
              style={{
              position: "absolute",
              top: hp("2%"),
              right: "5%",
            }}
            > 
            <BadgedIcon 
            type="ionicon" 
            name="notifications-outline" 
            size={hp("3%")} 
            color="#fff"
           
            />

            </TouchableOpacity>
          
        </ImageBackground>
      
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: hp("2.5%"), fontWeight: "bold" }}>
            Top Trending
          </Text>
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={gallery}
            horizontal={true}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    paddingVertical: hp("1%"),
                    paddingHorizontal: wp("0.5%"),
                  }}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Post", { item })}
                  >
                    <Image
                      source={item.image}
                      image={item.image}
                      PlaceholderContent={<ActivityIndicator size="small" color="#0000ff" />}
                      
                      style={{
                        width: responsiveScreenWidth(40),
                        marginRight: wp("2%"),
                        height: responsiveScreenHeight(20),
                        borderRadius: 10,
                      }}
                    />

                    <Icon
                      name="pin-outline"
                      size={hp("2.5%")}
                      color="#fff"
                      style={styles.imageLocationIcon}
                    />
                    <Text style={styles.imageText}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <View style={{ marginBottom: hp("5%"), }}>
          <View
            style={{
              padding: hp("2%"),
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: hp("2.5%"), fontWeight: "bold" }}>
              Recently Viewed
            </Text>
           <TouchableOpacity onPress={() => navigation.navigate('Example')}>
           <Text
              style={{
                fontSize: hp("2%"),
                fontWeight: "bold",
                color: "#ff6200",
              }}
            >
              View All
            </Text>
           </TouchableOpacity>
          </View>
      
         <Image
            source={recentImage}
            style={{
              width: "95%",
              height: hp("30%"),
              borderRadius: 10,
              marginLeft: wp('2%')
             
            }}
          />     

          <View style={{ position: "absolute", bottom: 0, padding: hp("1%") }}>
            <View style={{ flexDirection: "row" }}>
              <Icon
                name="location-outline"
                size={20}
                color="#ff6200"
                style={{ marginLeft: 10, position: "relative", top: 4 }}
              />
              <Text
                style={{
                  fontSize: 22,
                  color: "white",
                  fontWeight: "normal",
                  marginBottom: "2%",
                  marginHorizontal: 10,
                }}
              >
                Venice
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: "white",
                fontWeight: "normal",
                marginBottom: 10,
                opacity: 0.9,
                marginLeft: 10,
              }}
            >
              {venice}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: wp("100%"),
    height: responsiveScreenHeight(25),
  },

  searchContainer: {
    paddingTop: hp("7.4%"),
    paddingLeft: wp("5%"),
  },
  userGreet: {
    fontSize: responsiveScreenFontSize(3),
    fontWeight: "bold",
    color: "white",
  },
  userText: {
    fontSize: responsiveScreenFontSize(1.7),
    fontWeight: "normal",
    color: "white",
  },
  searchBox: {
    marginTop: hp("3%"),
    backgroundColor: "#fff",
    paddingLeft: hp("2%"),
    padding: hp("1%"),
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: wp("75%"),
  },

  imageLocationIcon: {
    position: "absolute",
    left: hp("1%"),
    bottom: hp("1%"),
  },
  imageText: {
    position: "absolute",
    bottom: "2%",
    left: "20%",
    fontSize: hp("2.5%"),
    color: "white",
  },
});

export default Home;
