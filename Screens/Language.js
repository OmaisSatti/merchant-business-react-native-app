import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import FormButton from '../Components/FormButton'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const SelectLanguage = ({ navigation }) => {
    React.useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Back',
            headerShown: false,
            headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()}><Image style={{ alignSelf: 'center', width: 20, height: 18, resizeMode: 'stretch', marginTop: 3 }} source={require('../Images/goBack.png')} /></TouchableOpacity>),
        }); //
    }, [navigation]);
    return (
        <View style={myStyle.container}>
            <StatusBar backgroundColor={'#EBEBF6'} barStyle='dark-content' />
            <View style={{flexDirection:'row',alignItems:'center',position:'absolute',left:10,top:10}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={{idth: 20, height: 18, resizeMode: 'stretch'}} source={require('../Images/goBack.png')} />
                </TouchableOpacity>
                <Text style={{fontSize:18,fontFamily:'Poppins-Medium',color:'#000000'}}>Back</Text>
            </View>
            <Text style={myStyle.head}>Select Language</Text>
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={myStyle.view}>
                        <Image source={require('../Images/Group39427.png')}></Image>
                    </View>
                    <View style={myStyle.view}>
                        <Image style={{ alignSelf: 'flex-end', top: -50, position: 'relative' }} source={require('../Images/Check.png')}></Image>
                        <Image style={{ position: 'absolute' }} source={require('../Images/English.png')}></Image>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={myStyle.view}>
                        <Image source={require('../Images/Group39429.png')}></Image>
                    </View>
                </View>
            </View>
            <FormButton buttonTitle="Update" onPress={() => navigation.navigate('MyTabs')} />
        </View>
    )
}
export default SelectLanguage
const myStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EBEBF6'
    },
    view: {
        height: windowHeight / 5,
        width: windowWidth / 2.7,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        shadowColor: '#EBEBF6',
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,
    },
    viewText: {
        marginTop: 8
    },
    head: {
        fontFamily: 'Poppins-Bold',
        fontWeight: '800',
        fontSize: RFPercentage(4),
        color: '#242134',
        marginTop: 10
    },
    para: {
        color: '#6D6D6D',
        fontSize: 16,
        marginTop: 10,
        alignSelf: 'center',
        fontFamily: 'Poppins-Light'
    }
})