/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import Container from '../../../components/Container';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Screen = ({ }) => {
    let width = Dimensions.get('window').width;
    let height = Dimensions.get('screen').height;
    return (
        <Container>
            <View style={{}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 24, color: 'black' }}>Nouman Hayat!</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name="add-circle" size={54} color="black" />
                        <Text style={{fontSize:11}}>Add Weight</Text>
                        {/* <Text style={{color:'black'}}>Add Weight</Text> */}
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '10%', flex: 1 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.33, backgroundColor: '#DF9BDF', padding: 10, borderRadius: 15 }}>
                        <Text style={{ fontSize: 11, color: 'black' }}>Weight Change!</Text>
                        <Text style={{ fontSize: 11, color: 'blue' }}>+19</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.33 }}>
                        {/* <Ionicons name="add-circle" size={54} color="black" /> */}
                        <Text style={{ color: 'black', fontSize: 20 }}>Your </Text>
                        <Text style={{ color: 'black', fontSize: 20 }}>Weight</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.33, backgroundColor: '#DF9BDF', padding: 10, borderRadius: 15 }}>
                        <Text style={{ fontSize: 11, color: 'black' }}>BMI!</Text>
                        <Text style={{ fontSize: 11, color: 'red' }}>5%</Text>
                    </View>
                </View>
                <View style={{ marginTop: '12%', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ borderRadius: 360, borderColor: '#DF9BDF', height: height / 3.2, width: width / 1.4, borderWidth: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 35 }}>180 KG</Text>
                    </View>
                </View>
                <View style={{ marginTop: '12%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#5A3A5A', fontSize: 15 }}>O KG away from your Goal</Text>
                </View>



                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '10%', flex: 1 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.33, backgroundColor: '#DF9BDF', padding: 10, borderRadius: 15 }}>
                        <Text style={{ fontSize: 11, color: 'black' }}>Goal Weight!</Text>
                        <Text style={{ fontSize: 11, color: 'blue' }}>+19</Text>
                    </View>
                    
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.33, backgroundColor: '#DF9BDF', padding: 10, borderRadius: 15 }}>
                        <Text style={{ fontSize: 11, color: 'black' }}>Suggested Weight!</Text>
                        <Text style={{ fontSize: 11, color: 'red' }}>5%</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '3%', flex: 1 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.33, backgroundColor: '#DF9BDF', padding: 10, borderRadius: 15 }}>
                        <Text style={{ fontSize: 11, color: 'black' }}>Progress!</Text>
                        <Text style={{ fontSize: 11, color: 'blue' }}>+19</Text>
                    </View>
                    
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.33, backgroundColor: '#DF9BDF', padding: 10, borderRadius: 15 }}>
                        <Text style={{ fontSize: 11, color: 'black' }}>BMI!</Text>
                        <Text style={{ fontSize: 11, color: 'red' }}>5%</Text>
                    </View>
                </View>
            </View>
        </Container>
    );
};
export default Screen;
