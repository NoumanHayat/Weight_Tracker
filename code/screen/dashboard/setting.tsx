/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Text, View, Image, Dimensions, FlatList, TouchableHighlight, StatusBar, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Container from '../../../components/Container';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
} from 'react-native-chart-kit';
import LinearGradient from 'react-native-linear-gradient';
import { images, SIZES, COLORS, icons } from '../../../constants';
import { Divider } from 'react-native-paper';
import ScreenHader from '../../../components/ScreenHader';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const Screen = ({ navigation }) => {
    return (
        <Container>
            <View>
                <View style={{ marginTop: 30 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('ChangePersonalInfo') }}>

                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Ionicons name="person" size={18} color="gray" />
                                        <Text style={{ color: COLORS.gray, marginLeft: 15, fontSize: 14 }}>Change Personal details</Text>
                                    </View>
                                    <View >
                                        <Image source={icons.right_arrow} resizeMode={'stretch'} style={{ width: 10, height: 12 }} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.navigate('ChangePersonalInfo') }}>

                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        {/* <Ionicons name="person" size={18} color="gray" /> */}
                                        <Entypo name="info" size={18} color="gray" />
                                        <Text style={{ color: COLORS.gray, marginLeft: 15, fontSize: 14 }}>About Us</Text>
                                    </View>
                                    <View >
                                        <Image source={icons.right_arrow} resizeMode={'stretch'} style={{ width: 10, height: 12 }} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('ChangePersonalInfo') }}>

                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        {/* <Ionicons name="person" size={18} color="gray" /> */}
                                        <Entypo name="login" size={18} color="gray" />
                                        <Text style={{ color: COLORS.gray, marginLeft: 15, fontSize: 14 }}>Reset App</Text>
                                    </View>
                                    <View >
                                        <Image source={icons.right_arrow} resizeMode={'stretch'} style={{ width: 10, height: 12 }} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </Container>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 25,
        marginBottom: 10
    },
    // modalView: {
    //     width: "100%",
    //     margin: 10,
    //     backgroundColor: "white",
    //     borderRadius: 7,
    //     padding: 15,
    //     // alignItems: "center",
    //     // shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 2
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 4,
    //     elevation: 5
    // },
    // centeredView: {
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     marginTop: 4,
    //     marginBottom: 4,
    // },
    modalView: {
        width: "100%",
        margin: 10,
        marginTop: 0,
        marginBottom: 0,
        backgroundColor: "white",
        borderRadius: 7,
        padding: 15,
        height: 49,
        // alignItems: "center",
        // shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 4,
        marginBottom: 20,
    },
})
export default Screen;
