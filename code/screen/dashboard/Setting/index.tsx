/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
const Stack = createNativeStackNavigator();
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Setting  from './setting';
import AboutUs from './aboutUs';
import ChangeName from './ChangeName';
import ChangeScale from './ChangeScale';
const Screen = ({ navigation }) => {
    return (
        <View>
            <Text>Ok</Text>
            <TouchableOpacity>
                <Text
                    onPress={() => {
                        alert('Ok');
                    }}>
                    Check
                </Text>
            </TouchableOpacity>
        </View>
    );
};
const AppStarting = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="SettingDashboard">
                <Stack.Screen name="SettingDashboard" component={Setting} />
                <Stack.Screen name="AboutUs" component={AboutUs} />
                <Stack.Screen name="ChangeName" component={ChangeName} />
                <Stack.Screen name="ChangeScale" component={ChangeScale} />
            </Stack.Navigator>
        </View>
    )
};
export default AppStarting;


