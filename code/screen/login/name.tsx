/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Modal, TouchableOpacity } from 'react-native';
import { images, COLORS, icons } from '../../../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppButton from '../../../components/AppButton';
import ScreenHeader from '../../../components/ScreenHader';
import AppInput from '../../../components/AppInput';
import AppInputNumber from '../../../components/AppInputNumber';
import Container from '../../../components/Container';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import ModalLayout from '../../../components/ModalLayout';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { SelectList } from 'react-native-dropdown-select-list';
import { RadioButton } from 'react-native-paper';

const Screen = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(0);
    const [height, setHeight] = useState(0);
    const [waist, setWaist] = useState(0);
    const data = [
        { key: '1', value: 'Male' },
        { key: '2', value: 'Female' },
        { key: '3', value: 'Other' },
    ];
    const [heightScale, setHeightScale] = React.useState('Cm');
    const [weightScale, setWeightScale] = React.useState('pound');
    const [weight, setWeight] = React.useState(0);
    const [gender, setGender] = useState('Male');
    return (
        <Container>
            <View style={styles.viewLogo}>
                <Image source={images.logo} style={styles.logo} />
                <Text style={{ color: '#3D2645', fontSize: 12 }}>Weight & BMI tracker</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.hiText}>Hello!</Text>
                <Text style={styles.textTwo}>Please Provide your info</Text>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <View style={{ marginRight: 5, ...styles.textBoxSignSmall }}>
                        <TextInput
                            placeholder="First name"
                            placeholderTextColor='gray'
                            autoCapitalize={'none'}
                            onChangeText={(v) => { setFirstName(v) }}
                            style={{
                                flex: 1,
                                height: 'auto',
                                fontSize: 12,
                                marginLeft: 20,
                                color: 'black',
                                justifyContent: 'center',
                                alignItems: 'center',
                                // margin: 10
                            }}
                        />
                    </View>
                    <View style={{ marginLeft: 5, ...styles.textBoxSignSmall }}>
                        <TextInput
                            placeholder="Last name"
                            placeholderTextColor='gray'
                            autoCapitalize={'none'}
                            onChangeText={(v) => { setLastName(v) }}
                            style={{
                                flex: 1,
                                height: 'auto',
                                fontSize: 12,
                                marginLeft: 20,
                                color: 'black',
                                justifyContent: 'center',
                                alignItems: 'center',
                                // backgroundColor:'red',
                                // margin: 10
                            }}
                        />
                    </View>
                </View>
                <Text style={styles.titleTwo}>Your Age (ony year)</Text>
                <AppInputNumber onChangeText={e => {
                    if (e.match(/[^0-9]/g) === null) {
                        setSelected(e);
                    } else {
                        alert('Please Enter Number Only');
                    }
                } } defaultValue={"age"} inputStyles={undefined} />
                <Text style={styles.titleTwo}>Select Height Scale</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <RadioButton
                            value="Inches"
                            status={heightScale === 'Inches' ? 'checked' : 'unchecked'}
                            onPress={() => setHeightScale('Inches')}
                        />
                        <Text style={{color:'black',fontSize:11}}>Inches</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <RadioButton
                            value="Cm"
                            status={heightScale === 'Cm' ? 'checked' : 'unchecked'}
                            onPress={() => setHeightScale('Cm')}
                        />
                        <Text style={{color:'black',fontSize:11}}>Cm</Text>
                    </View>
                </View>
                <Text style={styles.titleTwo}>Select Weight Scale</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <RadioButton
                            value="pound"
                            status={weightScale === 'pound' ? 'checked' : 'unchecked'}
                            onPress={() => setWeightScale('pound')}
                        />
                        <Text style={{color:'black',fontSize:11}}>pound </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <RadioButton
                            value="KG"
                            status={weightScale === 'KG' ? 'checked' : 'unchecked'}
                            onPress={() => setWeightScale('KG')}
                        />
                        <Text style={{color:'black',fontSize:11}}>KG</Text>
                    </View>
                </View>
                <Text style={styles.titleTwo}>Height</Text>
                <AppInputNumber onChangeText={e => {
                    setHeight(e);
                } } icon={<MaterialIcons name="height" size={24} color="black" />} defaultValue={'Height in ' + heightScale} inputStyles={undefined} />
                <Text style={styles.titleTwo}>Weight</Text>
                <AppInputNumber onChangeText={e => {
                    setWeight(e);
                } } icon={<MaterialCommunityIcons name="weight" size={24} color="black" />} defaultValue={'Weight in ' + weightScale} inputStyles={undefined} />

                <Text style={styles.titleTwo}>Gender</Text>
                <View>
                    <SelectList
                        setSelected={(val) => setGender(val)}
                        data={data}
                        placeholder="Male"
                        inputStyles={{ color: 'gray',fontSize:11 }}
                        dropdownTextStyles={{ color: 'black',fontSize:11 }}
                        boxStyles={styles.dropdownBox}
                        save="value"
                        search={false}
                        searchPlaceholder={'Selected'}
                        arrowicon={<View >
                            <Feather name="chevron-down" size={15} color="black" />
                        </View>
                        }
                    />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <AppButton
                        onPress={() => {

                            if ((heightScale === 'Inches' && height > 35 && height < 108) || (heightScale !== 'Inches' && height > (35 * 2.54) && height < (108 * 2.54))) {

                                if ((weightScale === 'KG' && weight > 30 && weight < 170) || (weightScale !== 'KG' && weight > 30 / 0.453592 && weight < 170 / 0.453592)) {


                                    if (firstName !== '' && lastName !== '' && height !== 0) {
                                        navigation.push('TargetWeight', [firstName, lastName, height, selected, heightScale, weightScale, gender, weight]);
                                    } else {
                                        alert('Please Provide your information');
                                    }
                                } else {
                                    alert('Please provide your weight')
                                }
                            } else {
                                alert('Please provide valid height');
                            }
                        }}
                        text="Continue"
                        style={{
                            width: '100%',
                            marginTop: 30,
                        }}
                        textStyle={{ color: COLORS.white, letterSpacing: 2, fontFamily: 'Mulish-Black', fontSize: 15 }}
                    />
                </View>
            </View>
            {/* <Modal
                animationType={'fade'}
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    setVisible(!visible);
                }}
            >
                <ModalLayout
                    onClose={() => {
                        setVisible(!visible);
                    }}
                >
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: 276 }}>
                        <View>
                            <Calendar
                                current={'2010-03-01'}
                                onDayPress={day => {
                                    setSelected(day.dateString);
                                }}
                                markedDates={{
                                    [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                                }}
                            />
                        </View>
                    </View>
                </ModalLayout>
            </Modal> */}
        </Container>
    );
};
const styles = StyleSheet.create({
    titleTwo: {
        color: COLORS.dark,
        fontSize: 13,
        paddingTop: 15,
    },
    dropdownBox: {
        flexDirection: 'row',
        height: 50,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: COLORS.white,
        marginBottom: 0,
        borderWidth: 0,
        borderColor: 'white',
        alignItems:'center'
    },
    icons: {
        flex: 0.1, justifyContent: 'center', alignItems: 'center', margin: 10
    },
    logo: { width: 77, height: 77, resizeMode: 'contain' },
    viewLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16.5%',
        paddingBottom: '12%',

    },
    container: {
        // margin: 55,
        marginTop: 0,
    },
    hiText: { fontSize: 25, color: COLORS.dark },
    textTwo: { fontSize: 15, color: 'gray', fontFamily: 'Mulish', marginTop: 13 },
    textBoxSignSmall: {
        flexDirection: 'row',
        height: 50,
        flex: 1,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        elevation: 2,
        marginTop: 10,
    }, textBoxSign: {
        flexDirection: 'row',
        height: 50,
        // marginHorizontal: 5,
        // paddingHorizontal: SIZES.radius,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        elevation: 2,
        marginTop: 0,
        marginBottom: 0,
    },

})
export default Screen;
