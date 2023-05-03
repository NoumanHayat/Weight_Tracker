/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import { COLORS,icons } from '../constants';
export default function ScreenHeader({ navigation, title, style }: any) {
  return (
    <View
      style={{
        // height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 15,
        ...style,
        // backgroundColor: COLORS.white,
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          height: 45,
          width: 45,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={icons.back}
          style={{
            tintColor: COLORS.dark,
            height: 22,
            width: 11,
            position: 'absolute',
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          alignItems: 'center',
          marginLeft: -45,
        }}>
        <Text
          style={{
            color: COLORS.dark,
            fontSize: 20,
          }}>
          {title}
        </Text>
      </View>
      <View></View>
    </View>
  );
}
