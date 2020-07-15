import React, { useState } from 'react';
import { Header } from 'react-native-elements';
import {StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons";

const Example = ({navigation}) => {

  const LeftComponent = () => {
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name='menu-outline' size={24} color='white' />
        </TouchableOpacity>
      </View>
    );
  }

  const RightComponent = () => {
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name='home-outline' size={24} color='white' />
        </TouchableOpacity>
      </View>
    );
  }

    return (
        <View>
          <Header
            leftComponent={<LeftComponent />}
            centerComponent={{ text: 'TRAVEL APP', style: { color: '#fff', fontSize:20 } }}
            rightComponent={<RightComponent />}
          />
            <Text>Example Page</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    text: {
      fontSize: 16
    },

  });

export default Example