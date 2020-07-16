import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
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

  const Post = ({ navigation, route }) => {
  const data = route.params.item;
  const gallery = route.params.gallery;

  //console.log(gallery);
  //console.log(data);
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ backgroundColor: "white", flex:1, marginTop:hp('2.5%')}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "white" }}
      >
        <ImageBackground source={data.image} style={styles.image}>
          <Text style={styles.TagLine}>Discover {data.title}</Text>
          <Text style={styles.Placename}>
            Explore the scenic beauty of Switzerland
          </Text>
          <TouchableOpacity
            onPress={goBack}
            style={{
              position: "absolute",
              left: "5%",
              top: "5%",
              backgroundColor: "#ff6200",
              borderRadius: 40,
              padding: 10,
            }}
          >
            <Icon name="arrow-back-outline" size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              position: "absolute",
              right: "5%",
              top: "5%",
              backgroundColor: "#ff6200",
              borderRadius: 40,
              padding: 10,
            }}
          >
            <Icon name="heart-outline" size={20} color="white" />
          </TouchableOpacity>
        </ImageBackground>

        <Text style={{ padding: 14, fontSize: 20, fontWeight: "bold" }}>
          About the place
        </Text>
        <Text style={styles.detailText}>
          İsviçre resmî adıyla İsviçre Konfederasyonu, federal otoritelerin
          merkezi Bern ile birlikte 26 kantondan oluşan federal cumhuriyet. Batı
          Avrupa'da bulunan ülkenin kuzey sınırında Almanya, batısında Fransa,
          güneyinde İtalya, ve doğusunda Avusturya ile Lihtenştayn yer alır.
        </Text>
        <Text style={styles.detailText}>
          İsviçre resmî adıyla İsviçre Konfederasyonu, federal otoritelerin
          merkezi Bern ile birlikte 26 kantondan oluşan federal cumhuriyet. Batı
          Avrupa'da bulunan ülkenin kuzey sınırında Almanya, batısında Fransa,
          güneyinde İtalya, ve doğusunda Avusturya ile Lihtenştayn yer alır.
        </Text>
        <Text style={styles.detailText}>
          İsviçre resmî adıyla İsviçre Konfederasyonu, federal otoritelerin
          merkezi Bern ile birlikte 26 kantondan oluşan federal cumhuriyet. Batı
          Avrupa'da bulunan ülkenin kuzey sınırında Almanya, batısında Fransa,
          güneyinde İtalya, ve doğusunda Avusturya ile Lihtenştayn yer alır.
        </Text>
        <Text style={styles.detailText}>
          İsviçre resmî adıyla İsviçre Konfederasyonu, federal otoritelerin
          merkezi Bern ile birlikte 26 kantondan oluşan federal cumhuriyet. Batı
          Avrupa'da bulunan ülkenin kuzey sınırında Almanya, batısında Fransa,
          güneyinde İtalya, ve doğusunda Avusturya ile Lihtenştayn yer alır.
        </Text>
        <Text style={styles.detailText}>
          İsviçre resmî adıyla İsviçre Konfederasyonu, federal otoritelerin
          merkezi Bern ile birlikte 26 kantondan oluşan federal cumhuriyet. Batı
          Avrupa'da bulunan ülkenin kuzey sınırında Almanya, batısında Fransa,
          güneyinde İtalya, ve doğusunda Avusturya ile Lihtenştayn yer alır.
        </Text>
        <Text style={styles.detailText}>
          İsviçre resmî adıyla İsviçre Konfederasyonu, federal otoritelerin
          merkezi Bern ile birlikte 26 kantondan oluşan federal cumhuriyet. Batı
          Avrupa'da bulunan ülkenin kuzey sınırında Almanya, batısında Fransa,
          güneyinde İtalya, ve doğusunda Avusturya ile Lihtenştayn yer alır.
        </Text>
        <Text style={styles.detailText}>
          İsviçre resmî adıyla İsviçre Konfederasyonu, federal otoritelerin
          merkezi Bern ile birlikte 26 kantondan oluşan federal cumhuriyet. Batı
          Avrupa'da bulunan ülkenin kuzey sınırında Almanya, batısında Fransa,
          güneyinde İtalya, ve doğusunda Avusturya ile Lihtenştayn yer alır.
        </Text>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", padding: 14 }}>
            Suggested Places
          </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={gallery}
            horizontal={true}
            renderItem={({ item }) => {
              return (
                <View style={{ paddingBottom: 20 }}>
                  <View>
                    <Image
                      source={item.image}
                      style={{
                        width: wp("30%"),
                        height: hp("20%"),
                        marginHorizontal: 10,
                        borderRadius: 10,
                      }}
                    />
                    <Icon
                      name="pin-outline"
                      size={24}
                      color="white"
                      style={styles.imageLocationIcon}
                    />
                    <Text
                      style={{
                        position: "absolute",
                        left: "20%",
                        bottom: "2%",
                        color: "white",
                        fontSize: responsiveScreenFontSize(2),
                      }}
                    >
                      {item.title}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: responsiveScreenHeight(25),
    justifyContent: "flex-end",
  },
  TagLine: {
    color: "white",
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: responsiveScreenFontSize(2),
    paddingHorizontal: 14,
  },
  Placename: {
    color: "white",
    marginVertical: 10,
    marginBottom: 10,
    marginLeft: 20,
    fontSize: responsiveScreenFontSize(2.5),
    fontWeight: "bold",
    paddingHorizontal: 14,
  },
  BookTicketBtn: {
    backgroundColor: "#ff6200",
    position: "absolute",
    borderRadius: 40,
    top: "20%",
    right: 10,
    padding: 10,
  },

  detailText: {
    paddingHorizontal: 14,
    fontSize: responsiveScreenFontSize(1.7),
    fontWeight: "normal",
    opacity: 0.6,
    lineHeight: 25,
  },
  imageLocationIcon: {
    position: "absolute",
    left: "5%",
    bottom: "2%",
  },
});
export default Post;
