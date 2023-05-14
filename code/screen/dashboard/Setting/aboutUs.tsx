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
            <Text>Hello! Thanks for downloading our App . We are a team of dedicated professionals with a passion for developing high-quality software solutions to meet the diverse needs of our clients. Our company specializes in creating customized software applications that are tailored to the unique requirements of each individual client.

                At our software house, we believe that technology can be used to transform businesses and empower people to achieve their goals. We pride ourselves on our ability to stay up-to-date with the latest industry trends and technologies, and we use this knowledge to provide our clients with cutting-edge solutions that help them achieve their business objectives.

                Our team of skilled developers, designers, and project managers work closely with each client to ensure that their vision is fully realized. We understand that every project is unique, and we strive to provide personalized attention and support throughout the entire development process.

                Whether you're a small business owner looking for a custom software solution, or a larger organization in need of enterprise-level software development, our team is here to help. We are committed to delivering high-quality software solutions that exceed our clients' expectations, and we look forward to working with you to bring your ideas to life.</Text>
        </Container>
    );
};

export default Screen;
