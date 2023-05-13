/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    SafeAreaView,
} from 'react-native';
import { COLORS } from '../../../constants';
import IntroButton from '../../../components/AppButton';
import LinearGradient from 'react-native-linear-gradient';

import { useData } from '../../hooks';

const Screen = ({ navigation, route }) => {
    console.log(route);
    const [values, setValue] = useState(15);
    const { SaveProfile } = useData();
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
                <View style={styles.mainView}>
                    <View style={styles.itemsCentered}>
                        <View style={{ marginTop: '40%' }}>
                            <Text
                                style={{
                                    color: COLORS.dark,
                                    fontSize: 15,
                                    textAlign: 'center',
                                }}>
                                Please Enter your target weight in {route.params[5]}?
                            </Text>
                        </View>
                        <View
                            style={{
                                marginTop: 57,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <View style={styles.textBoxSign}>
                                <TextInput
                                    placeholder={"00 " + route.params[5]}
                                    placeholderTextColor={'white'}
                                    onChangeText={(value) => setValue(parseInt(value))}
                                    keyboardType="numeric"
                                    autoCapitalize={'none'}
                                    style={{
                                        flex: 1,
                                        height: 'auto',
                                        fontSize: 12,
                                        marginLeft: 2,
                                        color: 'black',
                                        margin: 0,
                                        textAlign: 'center',
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '60%',
                        }}>
                        <IntroButton
                            text="Next"
                            style={{
                                backgroundColor: COLORS.dark,
                                width: '90%',
                                marginTop: 0,
                            }}
                            textStyle={{ color: COLORS.white, letterSpacing: 2, fontSize: 16 }}
                            onPress={async () => {
                                if ((route.params[5] === 'KG' && values > 30 && values < 170) || (route.params[5] !== 'KG' && values > 30 / 0.453592 && values < 170 / 0.453592)) {
                                    const response = await SaveProfile(values, ...route.params);
                                    if (response) {
                                        navigation.push('dashboardTab');

                                    } else {
                                        alert('Unable to save Data')
                                    }
                                } else {
                                    alert('Provide valid target Weight')
                                }
                            }}
                        />
                    </View>
                </View>
            </LinearGradient>
        </SafeAreaView >
    );
};
const styles = StyleSheet.create({
    containerGradient: { flex: 1 },
    mainView: { flex: 1 },
    itemsCentered: {
        // flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor:COLORS.green
    },
    imageSize: {
        width: '100%',
        height: '74%',
        resizeMode: 'contain',
        margin: 0,
        marginTop: 0,
        marginRight: 1,
    },
    sliderContainer: { flexDirection: 'row', marginTop: 30 },
    title: { color: COLORS.black, fontSize: 24, fontFamily: 'Mulish' },
    text: {
        color: COLORS.white,
        fontSize: 14,
        textAlign: 'center',
        marginTop: 20,
    },
    skipText: {
        color: COLORS.gray,
    },
    textBoxSign: {
        flexDirection: 'row',
        height: 60,
        // marginHorizontal: 5,
        // paddingHorizontal: SIZES.radius,
        borderRadius: 5,
        borderColor: COLORS.white,
        borderWidth: 2,
        // backgroundColor: null,
        // elevation: 2,
        marginTop: 20,
        marginBottom: 0,
        width: '40%',
    },
});
export default Screen;
