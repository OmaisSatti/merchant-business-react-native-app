import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity,StatusBar} from 'react-native'
import React from 'react'
import FormButton from '../Components/FormButton'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const SubscribeNow = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={myStyle.container}>
            <StatusBar backgroundColor={'#EBEBF6'} barStyle='dark-content'/>
            <Text style={myStyle.head}>Subscribe Now</Text>
            <View style={{ flexDirection: 'column' }}>
                <View style={myStyle.view}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../Images/Group37002.png')} />
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: '#1D8136' }}>Basic</Text>
                        <Text style={{ marginLeft: 15, fontSize: 15, fontFamily: 'Poppins-Light' }}>Rs</Text>
                        <Text style={{ fontFamily: 'Poppins-ExtraBold', fontSize: 25, color: '#31312E' }}>10</Text>
                        <Text style={{ fontSize: 15, fontFamily: 'Poppins-Light' }}>/month</Text>
                        <Image style={{ marginLeft: 20 }} source={require('../Images/Group39475.png')} />
                        <Text style={{ fontSize: 15, fontFamily: 'Poppins-Light' }}>1 Agent
                        </Text>
                    </View>
                    <View style={{ borderWidth: 1, width: '100%', borderColor: '#A1A1A1' }}></View>
                    <TouchableOpacity style={{ width: '55%', height: '30%', backgroundColor: '#1D8136', alignSelf: 'center', borderRadius: 10, justifyContent: 'center', margin: 20 }} onPress={()=>navigation.navigate('Retry')}>
                        <Text style={{ alignSelf: 'center', color: '#FFFFFF', fontFamily: 'Poppins-Medium' }}>Choose Plan</Text>
                    </TouchableOpacity>
                </View>
                <View style={myStyle.view}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../Images/Group37002-1.png')} />
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: '#FFB300' }}>Startup</Text>
                        <Text style={{ marginLeft: 15, fontSize: 15, fontFamily: 'Poppins-Light' }}>Rs</Text>
                        <Text style={{ fontFamily: 'Poppins-ExtraBold', fontSize: 25, color: '#31312E' }}>20</Text>
                        <Text style={{ fontSize: 15, fontFamily: 'Poppins-Light' }}>/month</Text>
                        <Image style={{ marginLeft: 10 }} source={require('../Images/Group39475.png')} />
                        <Text style={{ fontSize: 15, fontFamily: 'Poppins-Light' }}>1 Agent
                        </Text>
                    </View>
                    <View style={{ borderWidth: 1, width: '100%', borderColor: '#A1A1A1' }}></View>
                    <TouchableOpacity style={{ width: '55%', height: '30%', backgroundColor: '#FFB300', alignSelf: 'center', borderRadius: 10, justifyContent: 'center', margin: 20 }}>
                        <Text style={{ alignSelf: 'center', color: '#FFFFFF', fontFamily: 'Poppins-Medium' }}>Choose Plan</Text>
                    </TouchableOpacity>
                </View>
                <View style={myStyle.view}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../Images/Group37002-2.png')} />
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: '#6A78F2' }}>Enterprise</Text>
                        <Text style={{ marginLeft: 5, fontSize: 15, fontFamily: 'Poppins-Light' }}>Rs</Text>
                        <Text style={{ fontFamily: 'Poppins-ExtraBold', fontSize: 25, color: '#31312E' }}>30</Text>
                        <Text style={{ fontSize: 15, fontFamily: 'Poppins-Light' }}>/month</Text>
                        <Image style={{ marginLeft: 5 }} source={require('../Images/Group39475.png')} />
                        <Text style={{ fontSize: 15, fontFamily: 'Poppins-Light' }}>1 Agent
                        </Text>
                    </View>
                    <View style={{ borderWidth: 1, width: '100%', borderColor: '#A1A1A1' }}></View>
                    <TouchableOpacity style={{ width: '55%', height: '30%', backgroundColor: '#6A78F2', alignSelf: 'center', borderRadius: 10, justifyContent: 'center', margin: 20 }}>
                        <Text style={{ alignSelf: 'center', color: '#FFFFFF', fontFamily: 'Poppins-Medium' }}>Choose Plan</Text>
                    </TouchableOpacity>
                </View>
                <View style={myStyle.view2}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{alignSelf:'flex-start',margin:15,height:47,width:45}} source={require('../Images/Group37002.png')} />
                        <View style={{flexDirection:'column'}}>
                        <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 20, color: '#1D8136',margin:0}}>Free Trial</Text>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize:14,margin:0,color: '#6E6E6E' }}>For 7 Days</Text>
                        </View> 
                        <Image style={{position:'absolute',left:250}} source={require('../Images/Check1.png')} />
                    </View>
                </View>
            </View>
            <FormButton buttonTitle="Register" onPress={() => navigation.navigate('PayNow')} />
            <Text style={{ color: '#242134', fontSize: 16, marginTop: 20, fontFamily: 'Poppins-Bold' }}>Step -3/4</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#6D6D6D', fontSize: 16, marginTop: 5, fontFamily: 'Poppins-Light' }}>Already have an account?</Text>
                <Text style={{ color: '#E33224', fontSize: 16, marginTop: 5, fontFamily: 'Poppins-Light' }}
                    onPress={() => navigation.navigate('Login')}>  Sign In</Text>
            </View>
        </ScrollView>
    )
}
export default SubscribeNow
const myStyle = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EBEBF6'
    },
    view: {
        height: windowHeight / 4,
        width: windowWidth / 1.1,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        margin: 10,
        flexDirection: 'column',
        padding: 10,
        shadowColor: '#EBEBF6',
        shadowOffset: {
          width: 0,
          height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,
    },
    view2: {
        height: windowHeight / 5.5,
        width: windowWidth / 1.1,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        margin: 10,
        flexDirection: 'column',
        padding: 10,
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
        fontFamily: 'Poppins-SemiBold',
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