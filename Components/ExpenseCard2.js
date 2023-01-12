import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import React from 'react'
const ExpenseCard2 = ({type}) => {
    return (
        <View style={myStyle.mainCard}>
            <View style={myStyle.rowView}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={myStyle.textLarge}>₹ 500</Text>
                    <Text style={myStyle.textSmall}>02/09/2022</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={myStyle.textMedium}>{type}</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <TouchableOpacity>
                        <Image style={{width:20,height:20,marginRight:10}} source={require('../Images/wr.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image style={{width:20,height:20}} source={require('../Images/del.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={[myStyle.textSmall, { color: '#000000', fontSize: 13 }]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            </View>
        </View>
    )
}
export default ExpenseCard2
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
        height: windowHeight / 3.5,
        width: windowWidth / 1.06,
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