import { View, Text, StyleSheet } from 'react-native'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import React from 'react'
const AuctionDetailsCard = ({ amount,bgColor,color,msg,textColor}) => {
    return (
        <View style={[myStyle.mainCard,{backgroundColor:bgColor}]}>
            <View style={{ flexDirection: 'row', alignItems: 'baseline', marginLeft: 5,alignSelf:'flex-end'}}>
                <Text style={[myStyle.time,{color:color}]}>9 sept 2022 6.30 Pm</Text>
            </View>

            <View style={myStyle.rowView}>
            {!msg?
                <View style={{ flexDirection: 'row'}}>
                     <Text style={[myStyle.textSmall,{color:color}]}>Recive:</Text>
                     <Text style={[myStyle.textLarge,{color:color}]}>  {amount}</Text>
                     <Text style={[myStyle.textSmall,{color:color}]}>  From Sannjay Saha</Text>
                </View>
                :
                <Text style={[myStyle.textSmall,{color:textColor}]}>Your subscription has expired Please Rnew</Text>
            }
                <Text style={[myStyle.textSmall,{color:color}]}>Lorem Ipsum is simply dummy text of the printing</Text>
            </View>     
        </View>
    )
}
export default AuctionDetailsCard
const myStyle = StyleSheet.create({
    amount: {
        fontSize: 25,
        fontFamily: 'Poppins-SemiBold'
    },
    time:{ 
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
        fontSize: 12,
        fontFamily: 'Poppins-Regular'

    },
    textMedium: {
        color: '#242134',
        fontSize: 14,
        fontFamily: 'Poppins-Medium'
    },
    textLarge: {
        color: '#242134',
        fontSize: 18,
        fontFamily: 'Poppins-Bold'
    },
    mainCard: {
        height: windowHeight /5.5,
        width: windowWidth / 1.06,
        backgroundColor: '#FFFFFF',
        shadowColor: '#EBEBF6',
        alignSelf:'center',
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