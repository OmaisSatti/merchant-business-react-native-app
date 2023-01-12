import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, ScrollView, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'
import FormInputNew from '../Components/FormInputNew'
import SimpleInput from '../Components/SimpleInput'
import FormButton from '../Components/FormButton'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import FormSearch from '../Components/FormSearch2';
import { RadioButton } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
const AddExpenses = ({ navigation }) => {
    const [checked, setChecked] = React.useState('first');
    const [ac1, setAc1] = React.useState('ac1');
    const [modalVisible, setModalVisible] = useState(false);
    React.useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Back',
            headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()}><Image style={{ alignSelf: 'center', width: 20, height: 18, resizeMode: 'stretch', marginTop: 3 }} source={require('../Images/goBack.png')} /></TouchableOpacity>),
            headerRight: () => (
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Image style={{ width: 20, height: 22, resizeMode: 'stretch', margin: 8 }} source={require('../Images/bell.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ width: 20, height: 20, resizeMode: 'stretch', margin: 8 }} source={require('../Images/banda2.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ width: 20, height: 20, resizeMode: 'stretch', margin: 8 }} source={require('../Images/out.png')} />
                    </TouchableOpacity>
                </View>
            ),
        }); //
    }, [navigation]);
    const [open, setOpen] = useState(false);
    const [exp, setExp] = useState(null);
    const [items, setItems] = useState([
        { label: 'Petrol', value: 'Petrol' },
        { label: 'Rent', value: 'Rent' },
        { label: 'Salary', value: 'Salary' },
        { label: 'Tea', value: 'Tea' },
        { label: 'Transport', value: 'Transport' },
    ]);
    return (
        <ScrollView contentContainerStyle={myStyle.main}>
            <StatusBar backgroundColor={'#FFFFFF'} barStyle='dark-content' />
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <View style={myStyle.centeredView}>
                    <View style={myStyle.modalView}>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ position: 'absolute', right: 10, top: 10 }}>
                            <Image source={require('../Images/close2.png')} />
                        </TouchableOpacity>
                        <Text style={{ color: '#000000', alignSelf: 'center', fontSize: 20, fontFamily: 'Poppins-SemiBold' }}>Add Master</Text>
                        <View style={{ borderWidth: 0.3, borderColor: 'gray', width: '100%', marginBottom: 10, marginTop: 10 }}></View>
                        <TextInput underlineColor='transparent' style={myStyle.input} placeholder={'Expense Name'} />
                        <TextInput underlineColor='transparent' style={myStyle.input} placeholder={'₹ Enter Amount'} />
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ margin: 10, alignSelf: 'center', justifyContent: 'center', borderRadius: 10, height: '20%', width: '98%', backgroundColor: '#E33224' }}>
                            <Text style={{ fontFamily: 'Poppins-Semibold', alignSelf: 'center', color: '#FFFFFF' }}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Text style={myStyle.head}>Add Expenses</Text>
            <FormSearch placeholderText={'Expenses Name'} />
            <SimpleInput placeholderText={'₹ 500'} />
            <TextInput underlineColor='transparent' style={myStyle.area} placeholderTextColor={'#A1A1A1'} placeholder={'Details'} multiline={true} numberOfLines={4} />
            <View style={myStyle.card}>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 16, color: '#6E6E6E', }}>Paid Mode</Text>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    <RadioButton color='#1D8136' value="ac1" status={checked === 'first' ? 'checked' : 'unchecked'} onPress={() => setChecked('first')} />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#000000', alignSelf: 'center' }}>Cash</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    <RadioButton color='#1D8136' value="ac1" status={checked === 'second' ? 'checked' : 'unchecked'} onPress={() => setChecked('second')} />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#000000', alignSelf: 'center' }}>Bank</Text>
                </View>
            </View>
            <View style={{ backgroundColor: '#FFFFFF', width: '90%', padding: 10, borderRadius: 10 }}>
                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: '#000000', }}>Select Account Number</Text>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    <RadioButton color='#1D8136' value="ac1" status={ac1 === 'ac1' ? 'checked' : 'unchecked'} onPress={() => setAc1('ac1')} />
                    <Image style={{ width: 20, height: 20, resizeMode: 'stretch' }} source={require('../Images/b1.png')} />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#6E6E6E', alignSelf: 'center' }}>12545******2584</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    <RadioButton color='#1D8136' value="ac2" status={ac1 === 'ac2' ? 'checked' : 'unchecked'} onPress={() => setAc1('ac2')} />
                    <Image style={{ width: 20, height: 20, resizeMode: 'stretch' }} source={require('../Images/b2.png')} />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#6E6E6E', alignSelf: 'center' }}>25125******2545</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    <RadioButton color='#1D8136' value="ac3" status={ac1 === 'ac3' ? 'checked' : 'unchecked'} onPress={() => setAc1('ac3')} />
                    <Image style={{ width: 20, height: 20, resizeMode: 'stretch' }} source={require('../Images/b3.png')} />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#6E6E6E', alignSelf: 'center' }}>12545******2584</Text>
                </View>
            </View>
            <FormInputNew img={require('../Images/Calender.png')} placeholderText={'04 Sept 2022'} />
            {/* <View style={{ flexDirection: 'row'}}>
                <DropDownPicker style={{ marginLeft: 10, width: '50%' }} placeholder='Expenses List' open={open} value={exp} items={items} setOpen={setOpen} setValue={setExp} setItems={setItems} />
                <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)} style={{ flexDirection: 'row',alignItems:'center'}}>
                    <Image style={{width:20,height:20}} source={require('../Images/exMaster.png')} />
                    <Text style={{fontSize:16,fontFamily:'Poppins-Medium',color:'#1D8136'}}>Expense Master</Text>
                </TouchableOpacity>
            </View> */}
            <FormButton buttonTitle={'Save'} onPress={() =>setModalVisible(!modalVisible)} />
        </ScrollView>
    )
}

export default AddExpenses
const myStyle = StyleSheet.create({
    main: {
        backgroundColor: '#EBEBF6',
        alignItems: 'center'
    },
    input: {
        marginTop: 10,
        marginBottom: 10,
        width: windowWidth / 1.2,
        height: windowHeight / 11,
        borderRadius: 10,
        borderColor: '#DBDBDB',
        color: '#A1A1A1',
        borderTopLeftRadius: 10,
        fontSize: 14,
        borderTopRightRadius: 10,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Poppins-Light',
        borderWidth: 1
    },
    centeredView: {
        flex: 1,
        alignItems: "center",
        paddingTop: 30,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modalView: {
        width: '93%',
        height: '55%',
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    head: {
        fontFamily: "Poppins-SemiBold",
        alignSelf: 'flex-start',
        margin: 10,
        marginLeft: 20,
        fontSize: 18,
        color: '#000000'
    },
    card: {
        marginTop: 10,
        marginBottom: 10,
        width: windowWidth / 1.1,
        height: windowHeight / 11,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingLeft: 15,
        shadowColor: '#EBEBF6',
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,
    },
    area: {
        marginTop: 10,
        marginBottom: 10,
        width: windowWidth / 1.1,
        textAlignVertical: 'top',
        borderRadius: 15,
        borderTopLeftRadius: 15,
        fontSize: 14,
        borderTopRightRadius: 15,
        backgroundColor: '#FFFFFF',
        shadowColor: '#EBEBF6',
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,
    },
})