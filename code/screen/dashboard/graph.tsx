/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React,{useState,useEffect} from 'react';
import { Text, View, Dimensions, FlatList, TouchableHighlight, StatusBar, SafeAreaView } from 'react-native';
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

// import Ionicons from 'react-native-vector-icons/Ionicons';

const LogScreen = ({ item,scale }) => {
    if (item.weightChange > 0) {
        return (

            <View>
                <View style={{ flexDirection: 'row', flex: 1,alignItems:'center'  }}>
                    <View style={{ marginRight: 15 }}>
                        {/* <Ionicons name="add-circle" size={27} color="black" /> */}
                        <Entypo name="arrow-long-up" size={18} color="red" />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
                        <Text style={{ fontSize: 17, color: 'red' }}>{item?.weight} {scale?scale:'KG'}</Text>
                        <Text style={{ fontSize: 17, color: 'gray' }}>{item?.date}</Text>
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
                <View style={{ flexDirection: 'row', flex: 1,alignItems:'center'  }}>
                    <View style={{ marginRight: 15 }}>
                        {/* <Ionicons name="add-circle" size={27} color="black" /> */}
                        <Entypo name="arrow-long-down" size={18} color="green" />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
                        <Text style={{ fontSize: 17, color: 'green' }}>{item?.weight} {scale?scale:'KG'}</Text>
                        <Text style={{ fontSize: 17, color: 'gray' }}>{item?.date}</Text>
                    </View>
                </View>
                <View style={{ margin: 20 }} >
                    <Divider style={{ height: 1, backgroundColor: 'gray', borderRadius: 4 }} />
                </View>
            </View>
        )
    }

}
const Screen = ({ }) => {
    let width = Dimensions.get('window').width;
    let height = Dimensions.get('screen').height;
    const {Graph} = useData();
    const [data,setData] = useState({
        labels: ["1/1", "2/1", ],
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
    const [weightData,setWeightData] = useState();
    useEffect(() => {
        async function fetchData() {
            const tempData = await Graph();
            setWeightData(tempData);
            setData(
                {
                    labels: tempData.weightLogData.slice(-10).map((e)=>{
                        console.log(e)
                        return e.date.slice(5,10)
                    }),
                    datasets: [
                        {
                            // data: [20],
                            data: tempData.weightLogData.slice(-10).map((e)=>{

                                return parseInt( e.weight)
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
        <Container>

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
                        }}
                    />
                </View>
                <View style={{ marginTop: '10%', height: "100%" }}>
                    <View style={{paddingVertical:15}}>
                        <Text style={{fontSize:24,color:'black'}}>Weight Log</Text>
                    </View>
                    {weightData?.weightLogData.slice(0).reverse().slice(0,15).map((item, index) => (
                        <LogScreen key={index} item={item} scale={weightData.weightScale} />
                    ))}
                </View>
            </View>
        </Container>
    );
};
export default Screen;
