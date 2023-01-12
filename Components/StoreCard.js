import { View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../utils/Dimentions'
const StoreCard = ({ img, title, amount,...rest}) => {
    return (
        <View>
            <View style={myStyle.smallCard}>
                <Image style={myStyle.img} source={img} />
                <View style={{flex:1,paddingLeft:10}}>
                    <Text style={{ color: '#000000', fontSize: 20, fontFamily: 'Poppins-Medium'}}>{title}</Text>
                    <Text style={{fontSize:10,color:'#6E6E6E',fontFamily:'Poppins-Regular'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#1D8136', fontSize: 16, fontFamily: 'Poppins-Medium' }}>{amount}</Text>
                        <Text style={{ color: '#6E6E6E', fontSize: 14, fontFamily: 'Poppins-Medium' }}>  1Pic.</Text>
                    </View>
                    <TouchableOpacity {...rest} style={{ justifyContent: 'center', borderRadius: 10, height: '26%', width: '60%', backgroundColor: '#E33224' }}>
                        <Text style={{ fontFamily: 'Poppins-Semibold', alignSelf: 'center', color: '#FFFFFF' }}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{marginBottom:10,borderWidth: 0.3, borderColor: 'gray', width: '90%', alignSelf: 'center' }}></View>
        </View>
    )
}
export default StoreCard
const myStyle = StyleSheet.create({
    smallCard: {
        margin: 10,
        height: windowHeight /4,
        width: windowWidth / 1.1,
        borderRadius: 10,
        flexDirection: 'row',
        alignContent: 'center',
        alignSelf: 'center',
    },
    img: {
        width: '40%',
        height: '70%',
        resizeMode: 'stretch',
        borderRadius: 12
    }
})