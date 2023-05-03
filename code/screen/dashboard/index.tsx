/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { COLORS } from '../../../constants';
import Dashboard from './dashboard';
import Graph from './graph';
import History from './history';
function HomeScreen({ route }) {
  console.log(route.name);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: COLORS.dark }}>{route.name}!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, colour }) => {
          let iconName;
          if (route.name === 'Dashboard') {
            return <Feather name="inbox" size={24} color={!focused ? COLORS.gray : COLORS.white} />
          } else if (route.name === 'Graph') {
            return <Entypo name="line-graph" size={24} color={!focused ? COLORS.gray : COLORS.white} />
            // <Entypo name="line-graph" size={24} color="black" />
            // return <AntDesign name="calendar" size={24} color={!focused?COLORS.gray:COLORS.white} />;
          } else if (route.name === 'History') {
            return <AntDesign name="calendar" size={24} color={!focused ? COLORS.gray : COLORS.white} />;
          } else if (route.name === 'Setting') {
            return <Ionicons name="settings" size={24} color={!focused ? COLORS.gray : COLORS.white} />;
          }
        },
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "black",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.dark,
        },

      })}
      initialRouteName="History" >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Graph" component={Graph} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Setting" component={HomeScreen} />
    </Tab.Navigator>
  );
}
