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
  ) => {
    console.log('Saving profile');
    // Inches default
    // KG default

    if (weightScale !== 'KG') {
      TargetWeight = TargetWeight * 0.453592;
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
    };

    const jsonString = JSON.stringify(data);
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

  const contextValue = {
    SaveProfile,
  };
  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
