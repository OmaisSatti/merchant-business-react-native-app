import { View, Text,StyleSheet} from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../utils/Dimentions'
const CashCard = ({ type, date, amount, color,amColor}) => {
    return (
        <View style={myStyle.mainCard}>
            <View>
                <Text style={[myStyle.textMedium,{color:color}]}>{type}</Text>
                <Text style={myStyle.textSmall}>{date}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={[myStyle.textLarge,{color:color}]}>₹</Text>
            <Text style={[myStyle.textLarge,{color:amColor}]}>{amount}</Text>
            </View>
        </View>
    )
}
export default CashCard
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
        fontSize:26,
        fontFamily: 'Poppins-Bold'
    },
    mainCard: {
        height: windowHeight /9,
        width: windowWidth / 1.06,
        backgroundColor: '#FFFFFF',
        shadowColor: '#EBEBF6',
        alignSelf: 'center',
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius: 10,
        padding: 15,
        marginTop:5,
        marginBottom:5,
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