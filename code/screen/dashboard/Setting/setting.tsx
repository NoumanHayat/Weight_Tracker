/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { Text, View, Image, Dimensions, FlatList, TouchableHighlight, StatusBar, SafeAreaView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Container from '../../../../components/Container';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
import { images, SIZES, COLORS, icons } from '../../../../constants';
import { Divider } from 'react-native-paper';
import ScreenHader from '../../../../components/ScreenHader';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { useData } from '../../../hooks';
import {
    InterstitialAd,
    TestIds,
    AdEventType,
    BannerAd,
    BannerAdSize,
} from 'react-native-google-mobile-ads';
// const adUnitId = 'ca-app-pub-3079210464435975/5326714144';
// const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
//     requestNonPersonalizedAdsOnly: false,
// });
const Screen = ({ navigation }) => {

    const { ResetApp } = useData();
    // const unsubscribe = interstitial.addAdEventListener(
    //     AdEventType.LOADED,
    //     () => {
    //         interstitial.show();
    //     },
    // );
    // // Start loading the interstitial straight away
    // interstitial.load();
    // useEffect(() => {
    //     console.log('-----------------------');
    //     const unsubscribe = interstitial.addAdEventListener(
    //         AdEventType.LOADED,
    //         () => {
    //             interstitial.show();
    //         },
    //     );
    //     // Start loading the interstitial straight away
    //     interstitial.load();
    //     // Unsubscribe from events on unmount
    //     return unsubscribe;
    // }, []);
    return (
        <Container>
            <View>
                <View style={{ marginTop: 30 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('ChangeName') }}>

                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Ionicons name="person" size={18} color="gray" />
                                        <Text style={{ color: COLORS.gray, marginLeft: 15, fontSize: 14 }}>Change name</Text>
                                    </View>
                                    <View >
                                        <Image source={icons.right_arrow} resizeMode={'stretch'} style={{ width: 10, height: 12 }} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('ChangeScale') }}>

                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        {/* <Ionicons name="scale-outline" size={18} color="gray" /> */}
                                        <FontAwesome name="balance-scale" size={18} color="gray" />
                                        <Text style={{ color: COLORS.gray, marginLeft: 15, fontSize: 14 }}>Change Scale</Text>
                                    </View>
                                    <View >
                                        <Image source={icons.right_arrow} resizeMode={'stretch'} style={{ width: 10, height: 12 }} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.navigate('AboutUs') }}>

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

                    <TouchableOpacity onPress={async () => {
                        let response = await ResetApp();
                        if (response) {
                            navigation.navigate('SignUp')
                        } else {
                            Alert.alert('Something went wrong')
                        }
                    }} >

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
                    {/* <View style={{ marginTop: 20 }}>
                        <BannerAd unitId={'ca-app-pub-3079210464435975/2057499074'} size={BannerAdSize.LARGE_BANNER} />
                    </View> */}
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
