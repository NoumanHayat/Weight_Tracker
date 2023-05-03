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
import dashboard from './code/screen/dashboard';
import TargetWeight from './code/screen/login/targetWeight';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      {/* <StatusBar barStyle="dark-content" backgroundColor={'black'} /> */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="dashboard">
        <Stack.Screen name="SignUp" component={login} />
        <Stack.Screen name="dashboard" component={dashboard} />
        <Stack.Screen name="TargetWeight" component={TargetWeight} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
