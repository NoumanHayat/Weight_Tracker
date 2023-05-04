import React, { useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const DataContext = React.createContext({});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const SaveProfile = async (
    TargetWeight: any,
    firstName: any,
    lastName: any,
    height: any,
    DOB: any,
    heightScale: any,
    weightScale: any,
    gender: any,
    initialWeight: any,
  ) => {
    console.log('Saving profile');
    const d = new Date().toISOString();
    // Inches default
    // KG default

    if (weightScale !== 'KG') {
      TargetWeight = TargetWeight * 0.453592;
      initialWeight = initialWeight * 0.453592;
    }
    if (heightScale !== 'Inches') {
      height = height * 2.54;
    }
    const data = {
      TargetWeight,
      firstName,
      lastName,
      height,
      DOB,
      heightScale,
      weightScale,
      gender,
      initialWeight,
    };

    const jsonString = JSON.stringify(data);
    try {
      await AsyncStorage.setItem(
        'weightLog',
        JSON.stringify([
          {date: d.slice(0, 10), weight: initialWeight, weightChange: 0},
        ]),
      );
    } catch (error) {
      // Error saving data
      console.log('Error saving data');
    }
    try {
      await AsyncStorage.setItem('myProfile', jsonString);
      return true;
    } catch (e) {
      return false;
    }
    // try {
    //   const jsonString = await AsyncStorage.getItem('myProfile');
    //   const data = jsonString != null ? JSON.parse(jsonString) : {};
    //   console.log('Retrieved data:', data);
    // } catch (e) {
    //   console.error('Error retrieving data:', e);
    // }
  };

  const DashboardData = async (NewWeight) => {
    const d = new Date().toISOString();
    let Data = [];
    try {
      const myArray = await AsyncStorage.getItem('weightLog');
      if (myArray !== null) {
        // We have data!!
        Data = JSON.parse(myArray);
        console.log(Data);
      } else {
        console.log('Error');
      }
    } catch (error) {
      // Error retrieving data
      console.log('Error retrieving data');
    }

    let weightChange = NewWeight - Data[Data.length - 1].weight;
    Data.push({
      weight: NewWeight,
      weightChange: weightChange,
      date: d.slice(0, 10),
    });

    try {
      await AsyncStorage.setItem('weightLog', JSON.stringify([Data]));
    } catch (error) {
      // Error saving data
      console.log('Error saving data');
    }
  };
  const contextValue = {
    SaveProfile,
    DashboardData,
  };
  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
