/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { images, GRADIENTS, COLORS, SIZES, icons, FONTS } from '../../../../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AppButton from '../../../../components/AppButton';
import { Divider } from 'react-native-paper';
import ScreenHeader from '../../../../components/ScreenHader';
import AppInput from '../../../../components/AppInput';
import { useData } from '../../../hooks';
import { RadioButton } from 'react-native-paper';

const Screen = ({ navigation }) => {
    const { changeScale } = useData();
    const [heightScale, setHeightScale] = React.useState('Cm');
    const [weightScale, setWeightScale] = React.useState('pound');
    return (
        <LinearGradient
            style={{ flex: 1 }}
            useAngle={true}
            angle={180}
            colors={GRADIENTS.backgroundColor}>
            <ScreenHeader navigation={navigation} title={'Change Scale'} />
            <View style={styles.container}>
                <View>
                    <Text style={styles.titleTwo}>Select Height Scale</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            <RadioButton
                                value="Inches"
                                status={heightScale === 'Inches' ? 'checked' : 'unchecked'}
                                onPress={() => setHeightScale('Inches')}
                            />
                            <Text>Inches</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            <RadioButton
                                value="Cm"
                                status={heightScale === 'Cm' ? 'checked' : 'unchecked'}
                                onPress={() => setHeightScale('Cm')}
                            />
                            <Text>Cm</Text>
                        </View>
                    </View>
                    <Text style={styles.titleTwo}>Select Weight Scale</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            <RadioButton
                                value="pound"
                                status={weightScale === 'pound' ? 'checked' : 'unchecked'}
                                onPress={() => setWeightScale('pound')}
                            />
                            <Text>pound </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            <RadioButton
                                value="KG"
                                status={weightScale === 'KG' ? 'checked' : 'unchecked'}
                                onPress={() => setWeightScale('KG')}
                            />
                            <Text>KG</Text>
                        </View>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <AppButton
                        onPress={async () => {
                            let response = await changeScale(heightScale, weightScale); if (response) {
                                navigation.push('dashboardTab')
                            } else { Alert.alert('Something went wrong') }
                        }}
                        text="Change "
                        style={{
                            width: '100%',
                            marginTop: 60
                        }}
                        textStyle={{ color: COLORS.white, letterSpacing: 2 }}
                    />
                </View>
            </View>
        </LinearGradient>
    );
};
const styles = StyleSheet.create({
    container: {
        margin: 55,
    },
    title: {
        color: COLORS.dark,
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    titleTwo: {
        color: COLORS.dark,
        fontSize: 19,
        marginTop: 20,
        marginBottom: 20,
    },
    textBoxSign: {
        flexDirection: 'row',
        height: 60,
        // marginHorizontal: 5,
        // paddingHorizontal: SIZES.radius,
        borderRadius: 5,
        backgroundColor: COLORS.lightGray,
        elevation: 2,
        marginTop: 10,
        marginBottom: 10,
    },
    icons: {
        height: 40, alignSelf: 'flex-start', margin: 10, justifyContent: 'center', alignItems: 'center',
    },
})
export default Screen;
