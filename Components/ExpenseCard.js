import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import React from 'react'
const ExpenseCard = ({...rest}) => {
    return (
        <TouchableOpacity style={myStyle.mainCard} {...rest}>
            <View style={myStyle.rowView}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={myStyle.textSmall}>02/09/2022</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={myStyle.textMedium}>Hand Cash    </Text>
                        <Text style={myStyle.textLarge}> ₹ 500</Text>
                    </View>
                </View>
                <Text style={[myStyle.textSmall,{color:'#000000',fontSize:13}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            </View>
        </TouchableOpacity>
    )
}
export default ExpenseCard
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
        color: '#1D8136',
        fontSize: 14,
        fontFamily: 'Poppins-Medium'
    },
    textLarge: {
        color: '#000000',
        fontSize: 18,
        fontFamily: 'Poppins-Bold'
    },
    mainCard: {
        height: windowHeight / 5.5,
        width: windowWidth / 1.1,
        backgroundColor: '#FFFFFF',
        shadowColor: '#EBEBF6',
        alignSelf: 'center',
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