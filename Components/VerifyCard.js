import { View, Text, StyleSheet,Image} from 'react-native'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import React from 'react'
const VerifyCard = ({ amount, name, bName, price, qty, item }) => {
    return (
        <View style={myStyle.mainCard}>
            <View style={myStyle.rowView}>
                <View style={{ flexDirection: 'row', alignItems: 'baseline', marginLeft: 5 }}>
                    <Text style={{ color: '#242134', fontSize: 14, fontFamily: 'Poppins-SemiBold' }}>Agent A.No:</Text>
                    <Text style={{ color: '#1D8136', fontSize: 14, fontFamily: 'Poppins-Medium' }}>#1245683</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Image style={myStyle.img} source={require('../Images/Check.png')} />
                    <Image style={myStyle.img} source={require('../Images/wr.png')} />

                </View>
            </View>
            <View style={myStyle.rowView}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={myStyle.textSmall}>Seller Name:</Text>
                    <Text style={myStyle.textMedium}> {name}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={myStyle.textSmall}>Quantity:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[myStyle.textMedium, { color: '#1D8136' }]}> ₹</Text>
                        <Text style={myStyle.textMedium}> {qty}</Text>
                    </View>
                </View>
            </View>
            <View style={myStyle.rowView}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={myStyle.textSmall}>Buyer Name::</Text>
                    <Text style={myStyle.textMedium}> {bName}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={myStyle.textSmall}>Price/Unit:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[myStyle.textMedium, { color: '#1D8136' }]}> ₹</Text>
                        <Text style={myStyle.textMedium}> {price}</Text>
                    </View>
                </View>
            </View>
            <View style={myStyle.rowView}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={myStyle.textSmall}>Item:</Text>
                    <Text style={myStyle.textMedium}> {item}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={myStyle.textSmall}>Amount:</Text>
                    <Text style={myStyle.textMedium}> {amount}</Text>
                </View>
            </View>
        </View>
    )
}
export default VerifyCard
const myStyle = StyleSheet.create({
    amount: {
        fontSize: 25,
        fontFamily: 'Poppins-SemiBold'
    },
    rowView: {
        flexDirection: 'row',
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
    mainCard: {
        height: windowHeight / 4,
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
        marginLeft:10,
        height: 20
    }
})