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
import Container from '../../../../components/Container';
import ScreenHeader from '../../../../components/ScreenHader';
const Screen = ({ navigation, route }) => {
    console.log(route);
    return (
        <Container>
            <ScreenHeader navigation={navigation} title={"About us"} />
            <Text>Hello! Thanks for downloading our App. </Text>
        </Container>
    );
};

export default Screen;
