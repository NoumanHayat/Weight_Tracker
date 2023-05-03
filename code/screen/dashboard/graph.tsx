/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Text, View, Dimensions, FlatList, TouchableHighlight, StatusBar, SafeAreaView } from 'react-native';
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
import { images, SIZES, COLORS } from '../../../constants';
import { Divider } from 'react-native-paper';

// import Ionicons from 'react-native-vector-icons/Ionicons';

const LogScreen = ({ item }) => {
    console.log(item);
    if (item % 2 == 0) {
        return (

            <View>
                <View style={{ flexDirection: 'row', flex: 1,alignItems:'center'  }}>
                    <View style={{ marginRight: 15 }}>
                        {/* <Ionicons name="add-circle" size={27} color="black" /> */}
                        <Entypo name="arrow-long-up" size={18} color="red" />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
                        <Text style={{ fontSize: 17, color: 'red' }}>165.5 lbs</Text>
                        <Text style={{ fontSize: 17, color: 'gray' }}>28/04/2024</Text>
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
                        <Text style={{ fontSize: 17, color: 'green' }}>165.5 lbs</Text>
                        <Text style={{ fontSize: 17, color: 'gray' }}>28/04/2024</Text>
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
    const data = {
        labels: ["1/1", "2/1", "3/1", "4/1", "5/1", "6/1", "7/1", "8/1", "9/1", "4/1", "5/1", "6/1"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Weight Locked"] // optional
    };
    const log = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
                    {log.map((item, index) => (
                        <LogScreen key={index} item={item} />
                    ))}
                </View>
            </View>
        </Container>
    );
};
export default Screen;
