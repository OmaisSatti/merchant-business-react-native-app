import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, ScrollView} from 'react-native'
import React, { useState } from 'react'
import FormInputNew from '../Components/FormInputNew'
import SimpleInput from '../Components/SimpleInput'
import FormButton from '../Components/FormButton'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import { RadioButton } from 'react-native-paper';
const AddBankCash = ({ navigation }) => {
    const [checked, setChecked] = React.useState('first');
    const [ac1, setAc1] = React.useState('ac1');
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
    return (
        <ScrollView contentContainerStyle={myStyle.main}>
            <StatusBar backgroundColor={'#FFFFFF'} barStyle='dark-content' />
            <Text style={myStyle.head}>Add Bank Cash</Text>
            <View style={myStyle.card}>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    <RadioButton color='#1D8136' value="ac1" status={checked === 'first' ? 'checked' : 'unchecked'} onPress={() => setChecked('first')} />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#000000', alignSelf: 'center' }}>Add Hand Cash</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    <RadioButton color='#1D8136' value="ac1" status={checked === 'second' ? 'checked' : 'unchecked'} onPress={() => setChecked('second')} />
                    <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#000000', alignSelf: 'center' }}>Withdraw Cash</Text>
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
            <SimpleInput placeholderText={'₹ Enter Amount'} />
            <SimpleInput placeholderText={'Description'} />
            <FormButton buttonTitle={'Add Now'} onPress={() =>navigation.navigate('AddBankAccount')}/>
        </ScrollView>
    )
}

export default AddBankCash
const myStyle = StyleSheet.create({
    main: {
        backgroundColor: '#EBEBF6',
        alignItems: 'center'
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
})