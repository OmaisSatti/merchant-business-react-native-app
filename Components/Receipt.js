import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../utils/Dimentions'
const Receipt = () => {
    return (
        <View style={myStyle.card}>
            <Text style={myStyle.textLarge}>Payment Receipt</Text>
            <View style={{ borderWidth: 1, borderColor: 'gray' }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Image style={myStyle.img} source={require('../Images/logo.png')} />
                    <Text style={myStyle.textMedium}>INV No:</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium', color: '#000000' }}>#1245683</Text>
                </View>
                <View>
                    <Text style={[myStyle.textMedium,{fontSize:13,alignSelf:'flex-end'}]}>02/09/2022</Text>
                    <Text style={{ fontSize: 20, fontFamily: 'Poppins-SemiBold', color: '#000000' }}>Das Enterprice</Text>
                    <Text style={myStyle.textMedium}>Pro. Sudip Das</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={myStyle.textMedium}>Licence No:</Text>
                        <Text style={[myStyle.textMedium, { fontSize: 16 }]}>#1245683</Text>
                    </View>
                    <Text style={myStyle.textMedium}>BC Road Cooch Behar</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[myStyle.textMedium, { fontFamily: 'Poppins-SemiBold' }]}>Mob:</Text>
                        <Text style={myStyle.textMedium}>+91 6294625797</Text>
                    </View>
                </View>
            </View>

            <View style={{ borderWidth: 1, borderColor: 'gray' }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[myStyle.textMedium, {fontSize:16,fontFamily: 'Poppins-SemiBold' }]}>Name:</Text>
                    <Text style={[myStyle.textMedium,{fontSize:16,fontFamily:'Poppins-Medium'}]}> Sudip Das</Text>
                </View>
                <Text style={[myStyle.textMedium,{fontSize:16,fontFamily:'Poppins-SemiBold'}]}>Buyer</Text>
            </View>
            <View style={{ flexDirection: 'row'}}>
                <Text style={[myStyle.textMedium,{fontSize:16,fontFamily:'Poppins-SemiBold'}]}>Address:</Text>
                <Text style={[myStyle.textMedium,{fontSize:16}]}> Birai Joshor road kol 700081</Text>
            </View>
            <View style={{ borderWidth: 1, borderColor: 'gray' }}></View>
            <Text style={[myStyle.textMedium,{fontFamily:'Poppins-SemiBold',fontSize:20,alignSelf:'flex-end'}]}>Paid:Rs. 300</Text>
            <View style={{ borderWidth: 1, borderColor: 'gray' }}></View>
            <Text style={myStyle.textMedium}>Pay By:  Arijit Tarafdar</Text>
            <Text style={myStyle.textMedium}>Pay Mode:  Bank</Text>
            <View style={{ borderWidth: 1, borderColor: 'gray' }}></View>
            <Text style={{fontSize:20,fontFamily:'Poppins-SemiBold',alignSelf:'center',color:'#000000'}}>THANK YOU!</Text>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                <Image style={{width:200,height:40,resizeMode:'stretch'}} source={require('../Images/barCode.png')} />
                <Text style={myStyle.textMedium}>Signature</Text>
            </View>
            <Text style={[myStyle.textMedium,{alignSelf:'center'}]}>Print Date: 15/9/2022 11:25 PM</Text>
        </View>
    )
}
export default Receipt
const myStyle = StyleSheet.create({
    amount: {
        fontSize: 25,
        fontFamily: 'Poppins-SemiBold'
    },
    time: {
        color: '#242134',
        fontSize: 14,
        fontFamily: 'Poppins-Regular'
    },
    rowView: {
        justifyContent: 'space-between',
        margin: 5
    },
    textSmall: {
        color: '#A1A1A1',
        fontSize: 14,
        fontFamily: 'Poppins-Regular'

    },
    textMedium: {
        color: '#000000',
        fontSize: 14,
        fontFamily: 'Poppins-Medium'
    },
    textLarge: {
        color: '#000000',
        fontSize: 24,
        alignSelf: 'center',
        fontFamily: 'Poppins-SemiBold'
    },
    card: {
        height: windowHeight / 1.2,
        width: windowWidth / 1.06,
        backgroundColor: '#FFFFFF',
        shadowColor: '#EBEBF6',
        justifyContent: 'space-between',
        borderRadius: 15,
        padding: 15,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10,
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,
    },
    img: {
        width: 100,
        height: 100,
        resizeMode: 'stretch'
    }
})