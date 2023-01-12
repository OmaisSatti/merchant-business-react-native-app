import { View, Text, StyleSheet, Image, ScrollView,TextInput,StatusBar} from 'react-native'
import React from 'react'
import FormButton from '../Components/FormButton'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import SimpleInput from '../Components/SimpleInput'
const PayNow = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={myStyle.container}>
            <StatusBar backgroundColor={'#EBEBF6'} barStyle='dark-content'/>
            <Text style={myStyle.head}>Pay Now</Text>
            <View style={{ flexDirection: 'column' }}>
                <View style={myStyle.view2}>
                    <View style={myStyle.v1}>
                        <Image style={{ alignSelf: 'center' }} source={require('../Images/Group37002-white.png')} />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFFFFF', fontSize: 28, alignSelf: 'center' }}>Basic</Text>
                    </View>

                    <View style={myStyle.v2}>
                        <View style={{flexDirection:'row',justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#31312E', fontSize: 23, alignSelf: 'center' }}>RS </Text>
                            <Text style={{ fontFamily: 'Poppins-Bold', color: '#31312E', fontSize: 32, alignSelf: 'center' }}>60</Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#A1A1A1', fontSize: 23, alignSelf: 'center' }}>/month</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Image source={require('../Images/Group39475-green.png')} />
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#242134', fontSize: 18, alignSelf: 'center',marginLeft:10}}>1 Agent</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={myStyle.view}>
                    <Image source={require('../Images/Group39738.png')}></Image>
                    <Text style={myStyle.viewText}>Credit/Debit Card</Text>
                </View>
                <View style={[myStyle.view, { backgroundColor: '#FFFFFF' }]}>
                    <Image source={require('../Images/Group39740.png')}></Image>
                    <Text style={[myStyle.viewText, { color: '#242134' }]}>Pay with UPI</Text>
                </View>
            </View>
            <SimpleInput placeholder='Card Number' />
            <SimpleInput placeholder='Card Holder Name' />
            <View style={{ flexDirection: 'row' }}>
                <TextInput style={myStyle.input2} placeholder='Expiry Date' placeholderTextColor={'#A1A1A1'}></TextInput>
                <TextInput style={myStyle.input2} placeholderTextColor={'#A1A1A1'} placeholder='CVV'></TextInput>
            </View>
            <FormButton buttonTitle="Pay Now" onPress={() => navigation.navigate('MyTabs')} />
        </ScrollView>
    )
}
export default PayNow
const myStyle = StyleSheet.create({
    v1:{
        flex: 1.5,
        backgroundColor: '#1D8136',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center' 
    },
    v2:{
        flex: 2,
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EBEBF6'
    },
    view: {
        height: windowHeight / 7,
        width: windowWidth / 2.4,
        backgroundColor: '#1D8136',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        shadowColor: '#EBEBF6',
        shadowOffset: {
          width: 0,
          height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,
    },
    view2: {
        height: windowHeight / 3,
        width: windowWidth / 1.1,
        borderRadius: 15,
        margin: 10,
        flexDirection: 'column',
        shadowColor: '#EBEBF6',
        shadowOffset: {
          width: 0,
          height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,
    },
    viewText: {
        marginTop: 8,
        color: '#FFFFFF',
        fontFamily: 'Poppins-Medium'
    },
    input2: {
        margin: 10,
        width: windowWidth / 2.35,
        height: windowHeight / 11,
        borderRadius: 15,
        paddingLeft: 15,
        color: '#A1A1A1',
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        fontFamily: 'Poppins-Regular',
        shadowColor: '#EBEBF6',
        shadowOffset: {
          width: 0,
          height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,
    },
    head: {
        fontFamily: 'Poppins-SemiBold',
        fontWeight: '800',
        fontSize: RFPercentage(4),
        color: '#242134',
        marginTop: 10
    },
    para: {
        color: '#6D6D6D',
        fontSize: 16,
        marginTop: 10,
        alignSelf: 'center',
        fontFamily: 'Poppins-Light'
    }
})