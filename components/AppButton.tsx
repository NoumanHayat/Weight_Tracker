/* eslint-disable prettier/prettier */
import React from 'react';
import {
  TextStyle,
  View,
  ViewStyle,
  TouchableHighlight,
  Text,
  Image,
} from 'react-native';
import {COLORS,FONTS} from '../constants';
interface Props {
  text: string;
  icon?: any;
  onPress: any;
  style?: ViewStyle;
  textStyle?: TextStyle;
  iconStyle?: any;
  boxStyles?: any;
}

export default function AppButton({
  text,
  icon,
  onPress,
  style,
  textStyle,
  iconStyle,
  boxStyles,
}: Props) {
  return (
    <View
      style={{
        overflow: 'hidden',
        backgroundColor: COLORS.dark,
        borderRadius: 5,
        ...style,
      }}>
      <TouchableHighlight
        underlayColor={'#00000008'}
        onPress={() => {
          onPress();
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 35,
            paddingVertical: 16,
            justifyContent: 'center',
            alignItems: 'center',
            ...boxStyles,
          }}>
          <Text style={{fontSize: 14,color: COLORS.white, ...textStyle }}>
            {text}
          </Text>
          {icon && (
            <Image
              source={icon}
              // tintColor={COLORS.primary}
              style={{
                width: 12,
                height: 12,
                marginLeft: 10,
                ...iconStyle,
              }}
            />
          )}
        </View>
      </TouchableHighlight>
    </View>
  );
}
