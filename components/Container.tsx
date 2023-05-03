/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { ReactNode } from 'react';
import { StyleProp, View, SafeAreaView, ImageBackground, Text, StatusBar } from 'react-native';
import { images, SIZES,COLORS } from '../constants';
import LinearGradient from 'react-native-linear-gradient';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface Props {
  children: ReactNode;
  Style?: any;
}
export default function container({ Style, children }: Props) {
  return (

    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        style={{
          flex: 1,
          padding: SIZES.Container, ...Style
        }}
        useAngle={true}
        angle={180}
        colors={['#FFD4FF', '#E5C6FF', '#CAB4FD']}>
        <StatusBar backgroundColor={COLORS.dark} />

        <KeyboardAwareScrollView >
          {children}
        </KeyboardAwareScrollView>
      </LinearGradient>
    </SafeAreaView >
  );
}
