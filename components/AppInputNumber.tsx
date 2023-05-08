/* eslint-disable keyword-spacing */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextStyle,
  TextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps,
  KeyboardTypeOptions,
  ViewStyle,
} from 'react-native';
import { COLORS } from '../constants';
// 'Feather.ttf','Entypo.ttf','FontAwesome5.ttf','.ttf','FontAwesome5.ttf'
interface Props {
  value?: any | undefined;
  defaultValue?: string | undefined;
  style?: TextStyle;
  onChangeText?: any | undefined;
  icon?: any | undefined;
  setValue?: any | undefined;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  inputStyles: any | undefined;
}

export default function AppInput({
  value,
  defaultValue,
  onChange,
  style,
  onChangeText,
  icon,
  setValue,
  inputStyles,
}: Props) {
  return (
    <View style={styles.textBoxSign}>
      {icon ? (
        <View style={styles.icons}>{icon}</View>
      ) : (
        <View style={{ marginHorizontal: 13 }}>
          <Text></Text>
        </View>
      )}
      <TextInput
        placeholder={defaultValue}
        placeholderTextColor="gray"
        value={value}
        onChangeText={onChangeText}
        autoCapitalize={'none'}
        keyboardType={'numeric'}
        style={{
          flex: 1,
          height: 'auto',
          fontSize: 10,
          marginLeft: 2,
          color: 'gray',
          paddingBottom: 7,
          ...inputStyles,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  icons: {
    flex: 0.1,
    justifyContent: 'center',
    // alignItems: 'center',
    marginLeft: 10,
    // backgroundColor: 'red',
  },
  textBoxSign: {
    flexDirection: 'row',
    height: 50,
    // backgroundColor:'blue',
    // marginHorizontal: 5,
    // paddingHorizontal: SIZES.radius,
    borderRadius: 5,
    // elevation: 2,
    marginTop: 20,
    backgroundColor: COLORS.white,
    marginBottom: 0,
  },
});
