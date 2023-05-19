/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Container from '../../../components/Container';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useData } from '../../hooks';
import ModalLayout from '../../../components/WeightModalLayout';
import { RadioButton } from 'react-native-paper';
import AppInputNumber from '../../../components/AppInputNumber';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { images, COLORS, icons } from '../../../constants';
import AppButton from '../../../components/AppButton';
import {
    InterstitialAd,
    TestIds,
    AdEventType,
    BannerAd,
    BannerAdSize,
} from 'react-native-google-mobile-ads';
const adUnitId = 'ca-app-pub-3079210464435975/5326714144';
const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
    requestNonPersonalizedAdsOnly: false,
});
const Screen = ({navigation }) => {
    let width = Dimensions.get('window').width;
    let heightScreen = Dimensions.get('screen').height;
    const { DashboardData, Graph, AddWeight } = useData();
    const [Data, setData] = useState({});
    const [heightScale, setHeightScale] = React.useState('Cm');
    const [weightScale, setWeightScale] = React.useState('pound');
    const [addeightVisible, setaddeightVisible] = useState(false);
    const [weight, setweight] = useState(0);
    useEffect(() => {

        async function fetchData() {
            const tempData = await DashboardData();
            setData(tempData);
        }
        fetchData();
        const unsubscribe = interstitial.addAdEventListener(
            AdEventType.LOADED,
            () => {
                interstitial.show();
            },
        );
        // Start loading the interstitial straight away
        interstitial.load();
    }, [DashboardData, setData]);
    function alert(arg0: string) {
        throw new Error('Function not implemented.');
    }
    const refresh = async () => {
        const tempData = await DashboardData();
            setData(tempData);
    }

    // useEffect(() => {
    //     console.log('-----------------------');
        // const unsubscribe = interstitial.addAdEventListener(
        //     AdEventType.LOADED,
        //     () => {
        //         interstitial.show();
        //     },
        // );
        // // Start loading the interstitial straight away
        // interstitial.load();
    //     // Unsubscribe from events on unmount
    //     return unsubscribe;
    // }, []);

    return (
        <Container>
            <View style={{}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 16, color: 'black' }}>{Data.profile ? Data?.profile?.firstName : ''}!</Text>
                    </View>
                    <TouchableOpacity onPress={() => { setaddeightVisible(true) }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name="add-circle" size={40} color="black" />
                            <Text style={{ fontSize: 11,color:'black' }}>Add Weight</Text>
                            {/* <Text style={{color:'black'}}>Add Weight</Text> */}
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '10%', flex: 1 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.33, backgroundColor: '#DF9BDF', padding: 10, borderRadius: 15 }}>
                        <Text style={{ fontSize: 11, color: 'black' }}>Weight Change!</Text>
                        <Text style={{ fontSize: 11, color: 'blue' }}>{Data.profile ? parseInt(Data.weightChange) : 0}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.33 }}>
                        {/* <Ionicons name="add-circle" size={54} color="black" /> */}
                        <Text style={{ color: 'black', fontSize: 20 }}>Your </Text>
                        <Text style={{ color: 'black', fontSize: 20 }}>Weight</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.33, backgroundColor: '#DF9BDF', padding: 10, borderRadius: 15 }}>
                        <Text style={{ fontSize: 11, color: 'black' }}>BMI!</Text>
                        <Text style={{ fontSize: 11, color: 'blue' }}>{Data.profile ? parseInt(Data.bmi) : 0}%</Text>
                    </View>
                </View>
                <View style={{ marginTop: '12%', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ borderRadius: 360, borderColor: '#DF9BDF', height: heightScreen / 4, width: width /1.7, borderWidth: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20 }}>{Data.profile ? parseInt(Data.latestWeightLog.weight) : 0} {Data.profile ? Data.profile.weightScale : 'KG'}</Text>
                    </View>
                </View>
                <View style={{ marginTop: '12%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#5A3A5A', fontSize: 15 }}>{Data.profile ? parseInt(Data.latestWeightLog.weight - Data.profile.TargetWeight) : 0} {Data.profile ? Data.profile.weightScale : 'KG'} away from your Goal</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '10%', flex: 1 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.33, backgroundColor: '#DF9BDF', padding: 10, borderRadius: 15 }}>
                        <Text style={{ fontSize: 11, color: 'black' }}>Goal Weight!</Text>
                        <Text style={{ fontSize: 11, color: 'blue' }}>{Data.profile ? parseInt(Data.profile.TargetWeight) : 0} {Data.profile ? Data.profile.weightScale : 'KG'}</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.33, backgroundColor: '#DF9BDF', padding: 10, borderRadius: 15 }}>
                        <Text style={{ fontSize: 11, color: 'black' }}>Suggested Weight!</Text>
                        <Text style={{ fontSize: 11, color: 'blue' }}>{Data.profile ? Data.suggestedWeight.down : 0} - {Data.profile ? Data.suggestedWeight.up : 0} </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '3%', flex: 1 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.33, backgroundColor: '#DF9BDF', padding: 10, borderRadius: 15 }}>
                        <Text style={{ fontSize: 11, color: 'black' }}>Weight Status!</Text>
                        <Text style={{ fontSize: 11, color: 'blue' }}>{Data.profile ? Data.weightStatus : 'Normal weight'}</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.33, backgroundColor: '#DF9BDF', padding: 10, borderRadius: 15 }}>
                        <Text style={{ fontSize: 11, color: 'black' }}>initial Weight</Text>
                        <Text style={{ fontSize: 11, color: 'blue' }}>{Data.profile ? parseInt(Data.profile.initialWeight) : 0} {Data.profile ? Data.profile.weightScale : 'KG'}</Text>
                    </View>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={addeightVisible}
                onRequestClose={() => setaddeightVisible(!addeightVisible)}
            >
                <ModalLayout bodyStyle={{ backgroundColor: '#E5C6FF' }} centerStyle={{ alignItems: 'flex-start' }} onClose={() => setaddeightVisible(!addeightVisible)}>
                    <View style={{}}>
                        <Text style={styles.titleTwo}>Weight</Text>
                        <AppInputNumber onChangeText={e => {
                            setweight(e);
                        }} icon={<MaterialIcons name="height" size={24} color="black" />} defaultValue={'Weight in ' + weightScale} inputStyles={undefined} />
                        <Text style={styles.titleTwo}>Select Weight Scale</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <RadioButton
                                    value="pound"
                                    status={weightScale === 'pound' ? 'checked' : 'unchecked'}
                                    onPress={() => setWeightScale('pound')}
                                />
                                <Text style={{color:'black'}}>pound </Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <RadioButton
                                    value="KG"
                                    status={weightScale === 'KG' ? 'checked' : 'unchecked'}
                                    onPress={() => setWeightScale('KG')}
                                />
                                <Text style={{color:'black'}}>KG</Text>
                            </View>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                            <AppButton
                                onPress={async () => {
                                    if ((weightScale === 'KG' && weight > 30 && weight < 170) || (weightScale !== 'KG' && weight > 30 / 0.453592 && weight < 170 / 0.453592)) {
                                        console.log('Press');
                                        await AddWeight(weight, weightScale);
                                        console.log('Weight Added');
                                        navigation.push('dashboardTab');
                                    } else {
                                        alert('Please provide Volid !')
                                    }
                                }}
                                text="Continue"
                                style={{
                                    width: '100%',
                                    marginTop: 30,
                                }}
                                textStyle={{ color: COLORS.white, letterSpacing: 2, fontFamily: 'Mulish-Black', fontSize: 20 }}
                            />
                        </View>
                    </View>
                </ModalLayout>
            </Modal>
        </Container>
    );
};
const styles = StyleSheet.create({
    titleTwo: {
        color: COLORS.dark,
        fontSize: 14,
        marginTop: 15,
    },
    dropdownBox: {
        flexDirection: 'row',
        height: 50,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: COLORS.white,
        marginBottom: 0,
        borderWidth: 0,
        borderColor: 'white',
    },
    icons: {
        flex: 0.1, justifyContent: 'center', alignItems: 'center', margin: 10
    },
    logo: { width: 77, height: 77, resizeMode: 'contain' },
    viewLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16.5%',
        paddingBottom: '12%',

    },
    container: {
        // margin: 55,
        marginTop: 0,
    },
    hiText: { fontSize: 32, color: COLORS.dark },
    textTwo: { fontSize: 20, color: 'gray', fontFamily: 'Mulish', marginTop: 13 },
    textBoxSignSmall: {
        flexDirection: 'row',
        height: 50,
        flex: 1,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        elevation: 2,
        marginTop: 20,
    }, textBoxSign: {
        flexDirection: 'row',
        height: 50,
        // marginHorizontal: 5,
        // paddingHorizontal: SIZES.radius,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        elevation: 2,
        marginTop: 6,
        marginBottom: 0,
    },

})
export default Screen;
