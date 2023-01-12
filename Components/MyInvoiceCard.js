import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import React from 'react'
const MyInvoiceCard = ({ mode}) => {
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={myStyle.view4}>
                <View style={{ flexDirection: 'row', marginTop:6,justifyContent:'space-between'}}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#6E6E6E', fontSize: 12 }}>INV. No: </Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#1D8136', fontSize: 14 }}>#1234568</Text>
                    </View>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#6E6E6E', fontSize: 14 }}>02/09/2022</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop:6,justifyContent:'space-between'}}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#6E6E6E', fontSize: 12 }}>Seller:</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#242134', fontSize: 14 }}>Sudip Das</Text>
                    </View>
                    <View style={{ flexDirection: 'row'}}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#6E6E6E', fontSize: 12 }}>Amount:</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#1D8136', fontSize: 14 }}>₹ 2000</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop:6,justifyContent:'space-between'}}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#6E6E6E', fontSize: 12 }}>Type:</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#E33224', fontSize: 14 }}>Received</Text>
                    </View>
                    <View style={{ flexDirection: 'row'}}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#6E6E6E', fontSize: 12 }}>Mode:</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#000000', fontSize: 14 }}>{mode}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row',justifyContent:'space-around',margin:10}}>
                    <TouchableOpacity style={{ marginRight: 20, flexDirection: 'row', marginTop:5, backgroundColor: '#E33224', width: '40%', height: '95%', borderRadius: 5, justifyContent: 'center' }}>
                        <Image style={{ width: windowWidth / 20, height: windowHeight / 30, resizeMode: 'stretch', alignSelf: 'center' }} source={require('../Images/printer.png')} />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFFFFF', fontSize: 16, marginTop: 5 }}>Print</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop:5, backgroundColor: '#1D8136', width: '40%', height: '95%', borderRadius: 5, justifyContent: 'center' }}>
                        <Image style={{ width: windowWidth / 20, height: windowHeight / 30, resizeMode: 'stretch', alignSelf: 'center' }} source={require('../Images/share.png')} />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFFFFF', fontSize: 16, marginTop: 5 }}>Share</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default MyInvoiceCard
const myStyle = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EBEBF6'
    },
    view4: {
        height: windowHeight / 3.8,
        width: windowWidth / 1.05,
        borderRadius: 15,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
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