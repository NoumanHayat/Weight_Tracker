/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity,Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIENTS, COLORS } from '../../../constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Container from '../../../components/Container';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useData } from '../../hooks';
import { Alert } from 'react-native';
import { FAB } from 'react-native-paper';
import ModalLayout from '../../../components/WeightModalLayout';
import { RadioButton } from 'react-native-paper';
import AppInputNumber from '../../../components/AppInputNumber';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppButton from '../../../components/AppButton';

const Log = ({ item, index ,navigation,scale  }) => {
    const { ClearOne } = useData();
    if (item.weightChange <= 0) {
        return (
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                        <View style={{ marginRight: 15 }}>
                            {/* <Ionicons name="add-circle" size={27} color="black" /> */}
                            <Entypo name="arrow-long-down" size={16} color="green" />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
                            <Text style={{ fontSize: 15, color: 'green' }}>{parseInt(item?.weight)} {scale?scale:'KG'}</Text>
                            <Text style={{ fontSize: 15, color: 'gray' }}>{item?.date}</Text>
                        </View>
                        <View style={{ marginLeft: 15 }}>
                            <TouchableOpacity onPress={async () => {
                                let a = await ClearOne(index);
                                if (!a) {
                                    Alert.alert('at least one log is needed');
                                    
                                }else{
                                    navigation.push('dashboardTab')
                                }
                            }}>
                                <AntDesign name="delete" size={17} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View >

                    </View>
                </View>
            </View>
        )
    } else {
        return (
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                        <View style={{ marginRight: 15 }}>
                            {/* <Ionicons name="add-circle" size={27} color="black" /> */}
                            <Entypo name="arrow-long-up" size={16} color="red" />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
                            <Text style={{ fontSize: 15, color: 'red' }}>{parseInt(item?.weight)} {scale?scale:'KG'}</Text>
                            <Text style={{ fontSize: 15, color: 'gray' }}>{item?.date}</Text>
                        </View>
                        <View style={{ marginLeft: 15 }}>
                            <TouchableOpacity onPress={() => { ClearOne(index) }}>
                                <AntDesign name="delete" size={17} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View >

                    </View>
                </View>
            </View>
        )
    }
}
// import { TouchableOpacity } from 'react-native-gesture-handler';
const Screen = ({ navigation }) => {
    const [check, setChecked] = useState(false);
    const logData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const { Graph, ClearWeightLog, ClearOne ,AddWeight} = useData();
    const [weightData, setWeightData] = useState();
    useEffect(() => {
        async function fetchData() {
            const tempData = await Graph();
            setWeightData(tempData);
        }
        fetchData();
    }, [Graph, setWeightData]);
    const [addeightVisible, setaddeightVisible] = useState(false);
    const [weight, setweight] = useState(0);
    const [heightScale, setHeightScale] = React.useState('Cm');
    const [weightScale, setWeightScale] = React.useState('pound');

    return (
        <>
            <View style={{ padding: 25, backgroundColor: '#3D2645' }}>
                <TouchableOpacity onPress={async () => { await ClearWeightLog(); navigation.push('dashboardTab') }}>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={{ color: 'red', fontSize: 18 }}>Clear</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ marginTop: '10%' }}>
                    <Text style={{ fontSize: 25, color: '#ffff' }}>Weight Log</Text>
                </View>
            </View>
            <Container>
                {weightData?.weightLogData.slice(0).reverse().map((item, index) => (
                    <Log key={index} item={item} index={index} navigation={navigation} scale={weightData.weightScale} />
                ))}

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
                                        setaddeightVisible(false)
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
                onPress={() => {setaddeightVisible(true)}} /></>
    );
};
const styles = StyleSheet.create({
    titleTwo: {
        color: COLORS.dark,
        fontSize: 14,
        marginTop: 15,
    },
    container: {
        flex: 1,
        margin: 25,
        marginBottom: 10,
        marginTop: 0
    },
    modalView: {
        width: "100%",
        height: 45,
        justifyContent: 'space-between',
        marginBottom: 17,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "white",
        borderRadius: 8,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
        paddingLeft: 11,
        paddingRight: 11
    },
    centeredView: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        marginTop: 2,
    },
})
export default Screen;
