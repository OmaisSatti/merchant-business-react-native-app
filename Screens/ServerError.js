import { View, Text, Image, StyleSheet,StatusBar} from 'react-native'
import React from 'react'
const ServerError = ({ navigation }) => {
    return (
        <View style={myStyle.main}>
            <StatusBar backgroundColor={'#EBEBF6'} barStyle='dark-content'/>
            <Image style={myStyle.img} source={require('../Images/server.png')} />
            <Text style={{color:'#242134',fontSize:25,margin:20,fontFamily:'Poppins-SemiBold'}}>Server Error</Text>
        </View>
    )
}
export default ServerError
const myStyle = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#EBEBF6',
        justifyContent:'center'
    },
    img: {
        width: '70%',
        height: '35%',
        alignSelf: 'center',
        resizeMode: 'stretch'
    }
})