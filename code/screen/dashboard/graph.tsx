/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, FlatList, TouchableHighlight, StatusBar, SafeAreaView, Modal, StyleSheet } from 'react-native';
import Container from '../../../components/Container';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useData } from '../../hooks';
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
import { images, SIZES, COLORS } from '../../../constants';
import { Divider } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import ModalLayout from '../../../components/WeightModalLayout';
import { RadioButton } from 'react-native-paper';
import AppInputNumber from '../../../components/AppInputNumber';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppButton from '../../../components/AppButton';
import {
    InterstitialAd,
    TestIds,
    AdEventType,
    BannerAd,
    BannerAdSize,
} from 'react-native-google-mobile-ads';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const LogScreen = ({ item, scale }) => {
    if (item.weightChange > 0) {
        return (

            <View>
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                    <View style={{ marginRight: 15 }}>
                        {/* <Ionicons name="add-circle" size={27} color="black" /> */}
                        <Entypo name="arrow-long-up" size={15} color="red" />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
                        <Text style={{ fontSize: 15, color: 'red' }}>{item?.weight} {scale ? scale : 'KG'}</Text>
                        <Text style={{ fontSize: 14, color: 'gray' }}>{item?.date}</Text>
                    </View>
                </View>
                <View style={{ margin: 20 }} >
                    <Divider style={{ height: 1, backgroundColor: 'gray', borderRadius: 4 }} />
                </View>
            </View>
        )
    } else {
        return (

            <View>
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                    <View style={{ marginRight: 15 }}>
                        {/* <Ionicons name="add-circle" size={27} color="black" /> */}
                        <Entypo name="arrow-long-down" size={15} color="green" />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
                        <Text style={{ fontSize: 15, color: 'green' }}>{item?.weight} {scale ? scale : 'KG'}</Text>
                        <Text style={{ fontSize: 14, color: 'gray' }}>{item?.date}</Text>
                    </View>
                </View>
                <View style={{ margin: 20 }} >
                    <Divider style={{ height: 1, backgroundColor: 'gray', borderRadius: 4 }} />
                </View>
            </View>
        )
    }

}
const Screen = ({ navigation }) => {
    let width = Dimensions.get('window').width;
    let height = Dimensions.get('screen').height;
    const { Graph,AddWeight } = useData();
    const [data, setData] = useState({
        labels: ["1/1", "2/1",],
        datasets: [
            {
                data: [20, 45],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Weight Locked"] // optional
    });
    const chartConfig = {
        backgroundGradientFrom: "#DF9BDF",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#DF9BDF",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };
    const [weightData, setWeightData] = useState();
    const [addeightVisible, setaddeightVisible] = useState(false);
    const [weight, setweight] = useState(0);
    const [heightScale, setHeightScale] = React.useState('Cm');
    const [weightScale, setWeightScale] = React.useState('pound');
    useEffect(() => {
        async function fetchData() {
            const tempData = await Graph();
            setWeightData(tempData);
            setData(
                {
                    labels: tempData.weightLogData.slice(-10).map((e) => {
                        console.log(e)
                        return e.date.slice(5, 10)
                    }),
                    datasets: [
                        {
                            // data: [20],
                            data: tempData.weightLogData.slice(-10).map((e) => {

                                return parseInt(e.weight)
                            }),
                            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                            strokeWidth: 2 // optional
                        }
                    ],
                    legend: ["Weight Locked"] // optional
                }
            )
            // console.log('a');
        }
        fetchData();
    }, [setWeightData]);
    return (
        <><Container>

            <View style={{}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 24, color: 'black' }}>Nouman Hayat!</Text>
                    </View>
                </View>
                <View>
                    <LineChart
                        data={data}
                        width={width}
                        height={220}
                        chartConfig={chartConfig}
                        style={{
                            marginVertical: 12,
                            borderRadius: 16,
                        }} />
                </View>
                <View style={{ marginTop: 20 }}>
                        <BannerAd unitId={'ca-app-pub-3079210464435975/2057499074'} size={BannerAdSize.LARGE_BANNER} />
                    </View>
                <View style={{ marginTop: '10%', height: "100%" }}>
                    <View style={{ paddingVertical: 15 }}>
                        <Text style={{ fontSize: 18, color: 'black' }}>Weight Log</Text>
                    </View>
                    {weightData?.weightLogData.slice(0).reverse().slice(0, 15).map((item, index) => (
                        <LogScreen key={index} item={item} scale={weightData.weightScale} />
                    ))}
                </View>
            </View>
            {/* <FAB onPress={() => { alert("Ok"); }} icon={<MaterialIcons name="file-upload" size={24} color="white" />} placement={"right"} /> */}

        </Container>
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
                                <Text style={{ color: 'black' }}>pound </Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <RadioButton
                                    value="KG"
                                    status={weightScale === 'KG' ? 'checked' : 'unchecked'}
                                    onPress={() => setWeightScale('KG')}
                                />
                                <Text style={{ color: 'black' }}>KG</Text>
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
            <FAB
                style={{
                    position: 'absolute',
                    margin: 16,
                    right: 0,
                    bottom: 0,
                }}
                small
                icon="plus"
                onPress={() => {{setaddeightVisible(true)}}} /></>
    );
};
const styles = StyleSheet.create({
    titleTwo: {
        color: COLORS.dark,
        fontSize: 14,
        marginTop: 15,
    },})
export default Screen;
