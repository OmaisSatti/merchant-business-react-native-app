import { View, Text, StyleSheet,Image} from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../utils/Dimentions'
const ComplainCard = ({solved,status,...rest }) => {
    return (
        <View>
            <View style={myStyle.smallCard}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                {solved?
                <Image style={myStyle.img} source={require('../Images/Check.png')}></Image>
                :
                <View></View>
                }
                <Text style={[myStyle.status,{color:solved?'#1D8136':'#E33224'}]}> {status}</Text>
                </View>
                <Text style={myStyle.title}>Lorem Ipsum is simply dummy text</Text>
                <Text style={myStyle.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            </View>
        </View>
    )
}
export default ComplainCard
const myStyle = StyleSheet.create({
    status: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium'
    },
    title: {
        fontSize: 16,
        color:'#000000',
        fontFamily: 'Poppins-Medium'
    },
    para: {
        fontSize: 11,
        color:'#6E6E6E',
        fontFamily: 'Poppins-Regular'
    },
    smallCard: {
        margin: 10,
        height: windowHeight / 2.9,
        width: windowWidth / 1.05,
        borderRadius: 10,
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        padding:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    img: {
        width:18,
        height:18,
        resizeMode: 'stretch',
        borderRadius: 12
    }
})