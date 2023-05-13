/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const DataContext = React.createContext({});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Starting = async () => {
    console.log('Starting..');
    let weightLog = await AsyncStorage.getItem('weightLog');
    let myProfile = await AsyncStorage.getItem('myProfile');
    return { weightLog, myProfile }
  }
  const ResetApp = async () => {
    try {
      await AsyncStorage.removeItem('weightLog');
      await AsyncStorage.removeItem('myProfile');
      return true;
    } catch (error) {
      // Error retrieving data
      console.error(error);
      return false;
    }
  }
  const SaveProfile = async (
    TargetWeight: any,
    firstName: any,
    lastName: any,
    height: any,
    age: any,
    heightScale: any,
    weightScale: any,
    gender: any,
    initialWeight: any,
  ) => {
    const d = new Date().toISOString();
    // Inches default
    // pound default

    if (weightScale !== 'pound') {
      TargetWeight = TargetWeight / 0.453592;
      initialWeight = initialWeight / 0.453592;
    }
    if (heightScale !== 'Inches') {
      height = height * 2.54;
    }
    const data = {
      TargetWeight,
      firstName,
      lastName,
      height,
      age,
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
          { date: d.slice(0, 10), weight: initialWeight, weightChange: 0 },
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
  };
  const getProfile = async () => {
    let Data = [];
    let profileData = [];
    let weightLogData = [];
    try {
      const myArrayProfile = await AsyncStorage.getItem('myProfile');
      if (myArrayProfile !== null) {
        // We have data!!
        profileData = JSON.parse(myArrayProfile);
      } else {
        return null;
      }
    } catch (error) {
      // Error retrieving data
      return null;
    }

    try {
      const myArray = await AsyncStorage.getItem('weightLog');
      if (myArray !== null) {
        // We have data!!
        weightLogData = JSON.parse(myArray);
      } else {
        console.log('Error');
      }
    } catch (error) {
      // Error retrieving data
      console.log('Error retrieving data');
    }

    return { profileData, weightLogData };
  };
  const AddWeight = async (NewWeight, heightScale) => {
    console.log('Working');
    console.log(heightScale);
    if (heightScale === 'pound') {
      const d = new Date().toISOString();
      console.log('working');
      let Data = [];
      try {
        const myArray = await AsyncStorage.getItem('weightLog');
        if (myArray !== null) {
          // We have data!!
          Data = JSON.parse(myArray);
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
        await AsyncStorage.setItem('weightLog', JSON.stringify(Data));
      } catch (error) {
        // Error saving data
        console.log('Error saving data');
      }
    } else {
      let kgNewWeight = NewWeight / 0.453592;
      const d = new Date().toISOString();
      console.log('working');
      let Data = [];
      try {
        const myArray = await AsyncStorage.getItem('weightLog');
        if (myArray !== null) {
          // We have data!!
          Data = JSON.parse(myArray);
        } else {
          console.log('Error');
        }
      } catch (error) {
        // Error retrieving data
        console.log('Error retrieving data');
      }

      let weightChange = kgNewWeight - Data[Data.length - 1].weight;
      Data.push({
        weight: kgNewWeight,
        weightChange: weightChange,
        date: d.slice(0, 10),
      });

      try {
        await AsyncStorage.setItem('weightLog', JSON.stringify(Data));
      } catch (error) {
        // Error saving data
        console.log('Error saving data');
      }
    }
  };
  const DashboardData = async () => {
    //     A BMI of less than 18.5 means a person is underweight.
    // A BMI of between 18.5 and 24.9 is ideal.
    // A BMI of between 25 and 29.9 is overweight.
    // A BMI over 30 indicates obesity.
    //     Activity level	Male body type	Female body type
    // Athletes	6–13%	14–20%
    // Fit non-athletes	14–17%	21–24%
    // Acceptable	18–24%	25–31%
    // Obesity	25% or more	32% or more

    //     Underweight	Less than 18.5
    // Normal weight	18.5–24.9
    // Overweight	25–29.9
    // Obesity	30 or greater

    //suggested weight calculator
    //58      (x-58)*3 --- (x-58)*4+115
    let profile = await getProfile();
    const latestWeightLog =
      profile?.weightLogData[profile.weightLogData.length - 1];
    const bmi =
      (latestWeightLog.weight /
        ([profile?.profileData.height] * [profile?.profileData.height])) *
      703;
    let suggestedWeightStart =
      profile?.profileData.gender === 'Male'
        ? (profile?.profileData.height - 58) * 3 + 91 + 12
        : (profile?.profileData.height - 58) * 3 + 91;
    let suggestedWeightEnd =
      profile?.profileData.gender === 'Male'
        ? (profile?.profileData.height - 58) * 4 + 115 + 12
        : (profile?.profileData.height - 58) * 4 + 115;


    let weightStatus = '';

    if (bmi > 39) {
      weightStatus = 'Severe obesity';
    } else if (bmi > 30) {
      weightStatus = 'Obesity';
    } else if (bmi > 25) {
      weightStatus = 'Overweight';
    } else if (bmi > 19) {
      weightStatus = 'Normal weight';
    } else {
      weightStatus = 'Under weighted';
    }

    let weightChange = latestWeightLog.weight - profile?.profileData.initialWeight;
    let response = {};

    if (profile?.profileData.weightScale == 'KG') {
      response = {
        weightStatus: weightStatus,
        bmi,
        suggestedWeight: {
          down: parseInt(suggestedWeightStart * 0.453592),
          up: parseInt(suggestedWeightEnd * 0.453592)
        },
        latestWeightLog: { "date": latestWeightLog.Date, "weight": parseInt(latestWeightLog.weight * 0.453592), "weightChange": 0 },
        // profile: profile?.profileData,
        profile: { "TargetWeight": parseInt(profile?.profileData.TargetWeight * 0.453592), "age": "24", "firstName": "Nouman", "gender": "Male", "height": "68", "heightScale": "Inches", "initialWeight": parseInt(profile?.profileData.initialWeight * 0.453592), "lastName": "Hayat", "weightScale": "KG" },
        weightChange: parseInt(weightChange * 0.453592),
      }
    } else {
      response = {
        weightStatus: weightStatus,
        bmi,
        suggestedWeight: {
          down: suggestedWeightStart,
          up: suggestedWeightEnd
        },
        latestWeightLog: latestWeightLog,
        profile: profile?.profileData,
        weightChange: weightChange,
      }
    }
    // const bmi =kg/m2;

    return response;
  };
  const Graph = async () => {
    let profile = await getProfile();
    let weightLogData = [];
    if (profile?.profileData.weightScale == 'KG') {
      weightLogData = profile?.weightLogData.map((e) => {
        return ({ "date": e.date, "weight": parseInt(e.weight * 0.453592), "weightChange": e.weightChange * 2 })
      })
    } else {
      weightLogData = profile?.weightLogData;
    }
    return {
      weightLogData,
      weightScale: profile?.profileData.weightScale,
    };
  };
  const ClearWeightLog = async () => {
    let Data = [];
    try {
      const myArray = await AsyncStorage.getItem('weightLog');
      if (myArray !== null) {
        // We have data!!
        Data = JSON.parse(myArray);
      } else {
        console.log('Error');
      }
    } catch (error) {
      // Error retrieving data
      console.log('Error retrieving data');
    }

    let lastWeight = Data[Data.length - 1];

    try {
      await AsyncStorage.setItem('weightLog', JSON.stringify([lastWeight]));
    } catch (error) {
      // Error saving data
      console.log('Error saving data');
    }

  };
  const ClearOne = async (index) => {
    console.log(index);
    let Data = [];
    try {
      const myArray = await AsyncStorage.getItem('weightLog');
      if (myArray !== null) {
        // We have data!!
        Data = JSON.parse(myArray);
      } else {
        console.log('Error');
      }
    } catch (error) {
      // Error retrieving data
      console.log('Error retrieving data');
    }
    // 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18
    if (Data.length === 1) {

      return false;
    } else {
      console.log(Data[Data.length - 1 - index]);
      let A = await Data.filter((e, indexs) => {
        if (indexs !== Data.length - 1 - index) {
          return true;
        } else {
          return false;
        }
      });
      // console.log(a);
      try {
        await AsyncStorage.setItem('weightLog', JSON.stringify(A));
      } catch (error) {
      }
      // Error saving data
      // console.log('Error saving data');
      return true;
    }
  }
  const changeName = async (firstName, lastName) => {
    console.log(firstName, lastName);
    let profileData = [];
    try {
      const myArrayProfile = await AsyncStorage.getItem('myProfile');
      if (myArrayProfile !== null) {
        // We have data!!
        profileData = JSON.parse(myArrayProfile);
      } else {
        return null;
      }
    } catch (error) {
      // Error retrieving data
      return null;
    }


    const data = {
      TargetWeight: profileData?.TargetWeight,
      firstName,
      lastName,
      height: profileData?.height,
      age: profileData?.age,
      heightScale: profileData?.heightScale,
      weightScale: profileData?.weightScale,
      gender: profileData?.gender,
      initialWeight: profileData?.initialWeight,
    };
    const jsonString = JSON.stringify(data);
    try {
      await AsyncStorage.setItem('myProfile', jsonString);
      return true;
    } catch (e) {
      return false;
    }

  }
  const changeScale = async (heightScale, weightScale) => {
    let profileData = [];
    try {
      const myArrayProfile = await AsyncStorage.getItem('myProfile');
      if (myArrayProfile !== null) {
        // We have data!!
        profileData = JSON.parse(myArrayProfile);
      } else {
        return null;
      }
    } catch (error) {
      // Error retrieving data
      return null;
    }


    const data = {
      TargetWeight: profileData?.TargetWeight,
      firstName: profileData?.firstName,
      lastName: profileData?.lastName,
      height: profileData?.height,
      age: profileData?.age,
      heightScale,
      weightScale,
      gender: profileData?.gender,
      initialWeight: profileData?.initialWeight,
    };
    const jsonString = JSON.stringify(data);
    try {
      await AsyncStorage.setItem('myProfile', jsonString);
      return true;
    } catch (e) {
      return false;
    }

  }
  const contextValue = {
    SaveProfile,
    DashboardData,
    Graph,
    AddWeight,
    ClearWeightLog,
    ClearOne,
    ResetApp,
    Starting,
    changeName,
    changeScale
  };
  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
