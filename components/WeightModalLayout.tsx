/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {View, TouchableOpacity, Image, ViewStyle} from 'react-native';
import {COLORS, icons} from '../constants';
interface Props {
  children: ReactNode;
  onClose?: any;
  bodyStyle?: ViewStyle | any;
  centerStyle: ViewStyle | any;
}

export default function ModalLayout({
  onClose,
  children,
  bodyStyle,
  centerStyle,
}: Props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#00000060',
        justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: COLORS.white,
          margin: 10,
          padding: 20,
          borderRadius: 10,
          ...bodyStyle,
        }}>
        <View
          style={{
            alignItems: 'flex-end',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              onClose();
            }}
            style={{
              width: 35,
              height: 35,
              backgroundColor: '#D14B4B30',
              borderRadius: 18,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={icons.close}
              style={{
                width: 12,
                height: 12,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{}}>{children}</View>
      </View>
    </View>
  );
}
