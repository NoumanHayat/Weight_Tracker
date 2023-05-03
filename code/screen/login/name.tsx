/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Modal, TouchableOpacity } from 'react-native';
import { images, COLORS, icons } from '../../../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AppButton from '../../../components/AppButton';
import ScreenHeader from '../../../components/ScreenHader';
import AppInput from '../../../components/AppInput';
import AppInputNumber from '../../../components/AppInputNumber';
import Container from '../../../components/Container';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import ModalLayout from '../../../components/ModalLayout';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { SelectList } from 'react-native-dropdown-select-list';
const Screen = ({ navigation }) => {
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState('');
    const [height, setHeight] = useState(0);
    const [waist, setWaist] = useState(0);
    const data = [
        { key: '1', value: 'Male' },
        { key: '2', value: 'Female' },
        { key: '3', value: 'Other' },
    ];
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
                <Text style={styles.titleTwo}>Date of Birth</Text>
                <TouchableOpacity onPress={() => { setVisible(true); }}>
                    <View style={styles.textBoxSign}>
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            marginLeft: '10%'
                        }}>
                            <Text style={{ fontSize: 14, color: 'gray' }}>1st , October 222</Text>
                        </View>
                        <View style={styles.icons}>
                            <AntDesign name="calendar" size={16} color="black" />
                        </View>

                    </View>
                </TouchableOpacity>
                <Text style={styles.titleTwo}>Height</Text>
                <AppInputNumber onChangeText={e => {
                    if (e.match(/[^0-9]/g) === null) {
                        setHeight(e);
                    } else {
                        alert('Please Enter Number Only');
                    }
                }} icon={<MaterialIcons name="height" size={24} color="black" />} defaultValue={'Height in inches'} />
                <Text style={styles.titleTwo}>Waist</Text>
                <AppInputNumber onChangeText={e => {
                    if (e.match(/[^0-9]/g) === null) {
                        setWaist(e);
                    } else {
                        alert('Please Enter Number Only');
                    }
                }} icon={<Entypo name="cycle" size={24} color="black" />} defaultValue={'Weight in inches'} />
                <Text style={styles.titleTwo}>Gender</Text>
                    <View>
                        <SelectList
                            setSelected={(val) => setGender(val)}
                            data={data}
                            placeholder="Male"
                            inputStyles={{color: 'gray'}}
                            dropdownTextStyles={{color: 'black'}}
                            boxStyles={styles.dropdownBox}
                            save="value"
                            search={false}
                            searchPlaceholder={'Selected'}
                            arrowicon={<View >
                                <Feather name="chevron-down" size={24} color="black" />
                            </View>
                            }
                        />
                    </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <AppButton
                        onPress={() => { navigation.push('TargetWeight'); }}
                        text="Continue"
                        style={{
                            width: '100%',
                            marginTop: 30,
                        }}
                        textStyle={{ color: COLORS.white, letterSpacing: 2, fontFamily: 'Mulish-Black', fontSize: 20 }}
                    />
                </View>
            </View>
            <Modal
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
            </Modal>
        </Container>
    );
};
const styles = StyleSheet.create({
    titleTwo: {
        color: COLORS.dark,
        fontSize: 14,
        paddingTop: 15,
    },
    dropdownBox: {
        flexDirection: 'row',
        height: 50,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: COLORS.white,
        marginBottom: 0,
        borderWidth:0,
        borderColor:'white',
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
    hiText: { fontSize: 32, color: COLORS.dark },
    textTwo: { fontSize: 20, color: 'gray', fontFamily: 'Mulish', marginTop: 13 },
    textBoxSignSmall: {
        flexDirection: 'row',
        height: 50,
        flex: 1,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        elevation: 2,
        marginTop: 20,
    }, textBoxSign: {
        flexDirection: 'row',
        height: 50,
        // marginHorizontal: 5,
        // paddingHorizontal: SIZES.radius,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        elevation: 2,
        marginTop: 6,
        marginBottom: 0,
    },

})
export default Screen;
