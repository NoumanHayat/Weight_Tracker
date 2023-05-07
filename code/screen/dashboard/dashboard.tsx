/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Container from '../../../components/Container';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useData } from '../../hooks';

const Screen = ({ }) => {
    let width = Dimensions.get('window').width;
    let height = Dimensions.get('screen').height;
    const { DashboardData,Graph,AddWeight } = useData();
    const [Data, setData] = useState({});
    useEffect(() => {

        async function fetchData() {
            const tempData = await DashboardData();
            setData(tempData);
        }
        fetchData();
    }, [setData]);
    return (
        <Container>
            <View style={{}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 24, color: 'black' }}>{Data.profile ? Data?.profile?.firstName : ''}!</Text>
                    </View>
                    <TouchableOpacity onPress={() => { Graph(97) }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name="add-circle" size={54} color="black" />
                            <Text style={{ fontSize: 11 }}>Add Weight</Text>
                            {/* <Text style={{color:'black'}}>Add Weight</Text> */}
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '10%', flex: 1 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.33, backgroundColor: '#DF9BDF', padding: 10, borderRadius: 15 }}>
                        <Text style={{ fontSize: 11, color: 'black' }}>Weight Change!</Text>
                        <Text style={{ fontSize: 11, color: 'blue' }}>{Data.profile ? Data.weightChange : 0}</Text>
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
                    <View style={{ borderRadius: 360, borderColor: '#DF9BDF', height: height / 3.2, width: width / 1.4, borderWidth: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 35 }}>{Data.profile ? parseInt(Data.latestWeightLog.weight) : 0} {Data.profile ? Data.profile.weightScale : 'KG'}</Text>
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
                        <Text style={{ fontSize: 11, color: 'blue' }}>{Data.profile ? Data.weightStatus: 'Normal weight'}</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.33, backgroundColor: '#DF9BDF', padding: 10, borderRadius: 15 }}>
                        <Text style={{ fontSize: 11, color: 'black' }}>initial Weight</Text>
                        <Text style={{ fontSize: 11, color: 'blue' }}>{Data.profile ? parseInt(Data.profile.initialWeight): 0} {Data.profile ? Data.profile.weightScale : 'KG'}</Text>
                    </View>
                </View>
            </View>
        </Container>
    );
};
export default Screen;
