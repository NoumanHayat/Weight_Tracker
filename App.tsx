/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Name from './code/screen/login/name';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Container from './components/Container';
import {NavigationContainer} from '@react-navigation/native';
import login from './code/screen/login/name';
import dashboardTab from './code/screen/dashboard';
import TargetWeight from './code/screen/login/targetWeight';
import ChangePersonalInfo from './code/screen/dashboard/changePersonalInfo';
import {DataProvider} from './code/hooks';
const Stack = createNativeStackNavigator();
function AppStarting() {
  return (
    <NavigationContainer>
      {/* <StatusBar barStyle="dark-content" backgroundColor={'black'} /> */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="dashboardTab">
        <Stack.Screen name="SignUp" component={login} />
        <Stack.Screen name="dashboardTab" component={dashboardTab} />
        <Stack.Screen name="TargetWeight" component={TargetWeight} />
        <Stack.Screen
          name="ChangePersonalInfo"
          component={ChangePersonalInfo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default function App() {
  return (
    <DataProvider>
      <AppStarting />
    </DataProvider>
  );
}
