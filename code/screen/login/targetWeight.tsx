/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    View,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { COLORS, GRADIENTS } from '../../../constants';
import IntroButton from '../../../components/AppButton';
import Container from '../../../components/Container';
const Screen = ({ navigation }) => {
    const [values, setValue] = useState(15);
    return (
        <Container>
            <View style={styles.mainView}>
                <View style={styles.itemsCentered}>
                    <View style={{ marginTop: 284 }}>
                        <Text
                            style={{
                                color: COLORS.dark,
                                fontSize: 20,
                                textAlign: 'center',
                            }}>
                            Please Enter your target weight in KG?
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
                                placeholder="00 KG"
                                placeholderTextColor={'white'}
                                //   onChangeText={(value) => setEmail(value)}
                                keyboardType="numeric"
                                autoCapitalize={'none'}
                                style={{
                                    flex: 1,
                                    height: 'auto',
                                    fontSize: 20,
                                    marginLeft: 2,
                                    color: 'white',
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
                        onPress={() => {
                            navigation.push('dashboard');
                        }}
                    />
                </View>
            </View>
        </Container>
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