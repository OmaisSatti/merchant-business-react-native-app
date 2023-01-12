import { View, Text, StyleSheet, Image, ScrollView,StatusBar} from 'react-native'
import React from 'react'
import FormButton from '../Components/FormButton'
import FormInput from '../Components/FormInput'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const SelectBusiness = ({ navigation }) => {
    return (
        <ScrollView scrollEnabled={true} contentContainerStyle={myStyle.container}>
            <StatusBar backgroundColor={'#EBEBF6'} barStyle='dark-content'/>
            <Text style={myStyle.head}>Select Business Category</Text>
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={myStyle.view}>
                        <Image source={require('../Images/Group36919.png')}></Image>
                        <Text style={myStyle.viewText}>Category 1</Text>
                    </View>
                    <View style={myStyle.view}>
                        <Image source={require('../Images/Group36919.png')}></Image>
                        <Text style={myStyle.viewText}>Category 2</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={myStyle.view}>
                        <Image source={require('../Images/Group36919.png')}></Image>
                        <Text style={myStyle.viewText}>Category 3</Text>
                    </View>
                    <View style={myStyle.view}>
                        <Image source={require('../Images/Group36919.png')}></Image>
                        <Text style={myStyle.viewText}>Category 4</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={myStyle.view}>
                        <Image source={require('../Images/Group36919.png')}></Image>
                        <Text style={myStyle.viewText}>Category 5</Text>
                    </View>
                    <View style={myStyle.view}>
                        <Image source={require('../Images/Group36919.png')}></Image>
                        <Text style={myStyle.viewText}>Category 6</Text>
                    </View>
                </View>
            </View>
            <FormButton buttonTitle="Next" onPress={() => navigation.navigate('SelectLanguage')} />
            <Text style={{ color: '#242134', fontSize: 16, marginTop: 20, fontFamily: 'Poppins-Bold' }}>Step -2/4</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#6D6D6D', fontSize: 16, marginTop: 5, fontFamily: 'Poppins-Light' }}>Already have an account?</Text>
                <Text style={{ color: '#E33224', fontSize: 16, marginTop: 5, fontFamily: 'Poppins-Light' }}
                    onPress={() => navigation.navigate('Login')}>  Sign In</Text>
            </View>
        </ScrollView>
    )
}
export default SelectBusiness
const myStyle = StyleSheet.create({
    container: {
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