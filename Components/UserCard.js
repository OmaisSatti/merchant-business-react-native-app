import { View, Text, StyleSheet, Image, Switch, TouchableOpacity } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../utils/Dimentions'
const UserCard = ({active,number,...rest}) => {
    return (
        <View style={myStyle.mainCard}>
            <View style={[myStyle.rowView,{justifyContent:'space-between'}]}>
                <Image style={myStyle.img} source={require('../Images/das.png')} />
                <View>
                <Text style={myStyle.textMedium}>Sudip Das</Text>          
                <Text style={myStyle.textSmall}>{number}</Text>
                <Text style={myStyle.textSmall}>02/09/2022</Text>
                </View>
                {active?
                <View style={{ flexDirection: 'row'}}>
                    <Text style={[myStyle.textSmall,{color:"#1D8136"}]}>Active</Text>
                    <Image style={myStyle.img2} source={require('../Images/switch2.png')} />
                    <Text style={[myStyle.textMedium,{color:'#E33224'}]}>Edit</Text>
                </View>
                :
                <View style={{ flexDirection: 'row'}}>
                <Text style={[myStyle.textSmall,{color:"#A1A1A1"}]}>Inactive</Text>
                <Image style={myStyle.img2} source={require('../Images/switch.png')} />
                <Text style={[myStyle.textMedium,{color:'#E33224'}]}>Edit</Text>
            </View>
                }
            </View>
            <View style={{ borderWidth: 0.3, borderColor: 'gray', width: '100%' }}></View>
            <View style={[myStyle.rowView, { justifyContent: 'space-between' }]}>
                <View>
                    <Text style={myStyle.textSmall}>MPIN</Text>
                    <Text style={myStyle.textMedium}>****</Text>
                </View>
                <View style={{flexDirection:'row-reverse'}}>
                    <Image style={myStyle.img2} source={require('../Images/wr.png')} />
                    <Image style={myStyle.img2} source={require('../Images/eye.png')} />
                </View>
            </View>
            <View style={{ borderWidth: 0.3, borderColor: 'gray', width: '100%'}}></View>
            <TouchableOpacity {...rest} style={{flexDirection:'row',alignSelf:'center',alignItems:'center',marginTop:5}}>
                    <Image style={{width:25,height:25,resizeMode:'stretch'}} source={require('../Images/set.png')} />
                    <Text style={[myStyle.textMedium,{color:'#1D8136'}]}>Set Access</Text>
            </TouchableOpacity>
        </View>
    )
}
export default UserCard
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
        flexDirection: 'row',
        margin: 5
    },
    textSmall: {
        color: '#A1A1A1',
        fontSize: 14,
        fontFamily: 'Poppins-Regular'

    },
    textMedium: {
        color: '#000000',
        fontSize: 16,
        fontFamily: 'Poppins-Medium'
    },
    textLarge: {
        color: '#000000',
        fontSize: 26,
        fontFamily: 'Poppins-Bold'
    },
    mainCard: {
        height: windowHeight / 3,
        width: windowWidth / 1.06,
        backgroundColor: '#FFFFFF',
        shadowColor: '#EBEBF6',
        alignSelf: 'center',
        justifyContent: 'space-between',
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
        width: 50,
        height: 50
    },
    img2: {
        width: 40,
        height: 20,
        margin:5,
        resizeMode:'stretch'
    }
})