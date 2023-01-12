import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../utils/Dimentions'
const OrderCard = ({ img, title, amount, status, comp, ...rest }) => {
    return (
        <View>
            <View style={myStyle.smallCard}>
                <Image style={myStyle.img} source={img} />
                <View style={{ flex: 1, paddingLeft: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <Text style={{ color: '#000000', fontSize: 20, fontFamily: 'Poppins-Medium' }}>{title}</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'Poppins-Medium' }}>02/09/2022</Text>
                    </View>
                    <Text style={{ fontSize: 10, color: '#6E6E6E', fontFamily: 'Poppins-Regular' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', margin: 5 }}>
                            <Text style={{ color: '#000000', fontSize: 16, fontFamily: 'Poppins-SemiBold' }}>{amount}</Text>
                            <Text style={{ color: '#6E6E6E', fontSize: 14, fontFamily: 'Poppins-Medium' }}> 1Pic.</Text>
                        </View>
                    </View>
                    <Text style={{ color: '#000000', fontSize: 14, fontFamily: 'Poppins-Medium' }}>Order Status</Text>
                    <Text style={{fontSize: 10, fontFamily: 'Poppins-Regular' }}>Processing--On the Waya--Delivered</Text>
                    {comp ?
                        <TouchableOpacity style={{ flexDirection: 'row', margin: 5 }} {...rest}>
                            <Image style={{ height: 20, width: 20 }} source={require('../Images/cancle.png')} />
                            <Text style={{ color: '#E33224', fontSize: 14, fontFamily: 'Poppins-Medium' }}> Cancel Order</Text>
                        </TouchableOpacity>
                        :
                        <View></View>
                    }
                </View>
            </View>
            <View style={{ marginBottom: 10, borderWidth: 0.3, borderColor: 'gray', width: '90%', alignSelf: 'center' }}></View>
        </View>
    )
}
export default OrderCard
const myStyle = StyleSheet.create({
    status: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium'
    },
    smallCard: {
        margin: 10,
        height: windowHeight / 3.5,
        width: windowWidth / 1.1,
        borderRadius: 10,
        flexDirection: 'row',
        alignContent: 'center',
        alignSelf: 'center',
    },
    img: {
        width: '35%',
        height: '75%',
        resizeMode: 'stretch',
        borderRadius: 12
    }
})