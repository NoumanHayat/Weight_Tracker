/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, Image,SafeAreaView } from 'react-native';
import { images } from '../../../constants';

import LinearGradient from 'react-native-linear-gradient';


const Screen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient
                style={{
                    flex: 1,
                    padding: 10
                }}
                useAngle={true}
                angle={180}
                colors={['#FFD4FF', '#E5C6FF', '#CAB4FD']}>
                <View style={styles.viewLogo}>
                    <Image source={images.logo} style={styles.logo} />
                    <Text style={{ color: '#3D2645', fontSize: 12 }}>Weight & BMI tracker</Text>
                </View>
            </LinearGradient>
        </SafeAreaView >
    );
};
const styles = StyleSheet.create({
    logo: { width: 77, height: 77, resizeMode: 'contain' },
    viewLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16.5%',
        flex: 1,


    },
})
export default Screen;
