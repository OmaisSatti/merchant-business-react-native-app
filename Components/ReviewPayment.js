import { View, Text, StyleSheet, Image } from 'react-native'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import React from 'react'
const ReviewPayment = ({ mode, name, time, date, bName }) => {
    return (
        <View style={myStyle.mainCard}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline', margin: 5 }}>
                <Text style={{ color: '#242134', fontSize: 16, fontFamily: 'Poppins-SemiBold' }}>INV:NO</Text>
                <Text style={{ color: '#1D8136', fontSize: 16, fontFamily: 'Poppins-Medium' }}>#1245683</Text>
                <Text style={myStyle.amount}>₹ 2000</Text>
                <Image style={myStyle.img} source={require('../Images/shareGreen.png')} />
                <Image style={myStyle.img} source={require('../Images/printerRed.png')} />
            </View>
            <View style={myStyle.rowView}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={myStyle.textSmall}>Agent:</Text>
                    <Text style={myStyle.textMedium}>{name}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={myStyle.textSmall}>Time:</Text>
                    <Text style={myStyle.textMedium}>{time}</Text>
                </View>
            </View>
            <View style={myStyle.rowView}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={myStyle.textSmall}>Date:</Text>
                    <Text style={myStyle.textMedium}>{date}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={myStyle.textSmall}>Mode:</Text>
                    <Text style={myStyle.textMedium}>{mode}</Text>
                </View>
            </View>
            <View style={myStyle.rowView}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={myStyle.textSmall}>Buyer Name:</Text>
                    <Text style={myStyle.textMedium}>{bName}</Text>
                </View>
            </View>
        </View>
    )
}
export default ReviewPayment
const myStyle = StyleSheet.create({
    amount: {
        fontSize: 24,
        color:'#000000',
        fontFamily: 'Poppins-SemiBold'
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    },
    textSmall: {
        color: '#A1A1A1',
        fontSize: 14,
        fontFamily: 'Poppins-Regular'

    },
    textMedium: {
        color: '#242134',
        fontSize: 16,
        fontFamily: 'Poppins-Medium'
    },
    mainCard: {
        height: windowHeight / 3.4,
        width: windowWidth / 1.1,
        backgroundColor: '#FFFFFF',
        shadowColor: '#EBEBF6',
        borderRadius: 10,
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
        width: 20,
        height: 20
    }
})