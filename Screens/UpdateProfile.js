import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import MapView,{Marker} from 'react-native-maps';
const UpdateProfile = ({ navigation }) => {
    React.useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Back',
            headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()}><Image style={{ alignSelf: 'center', width: 20, height: 18, resizeMode: 'stretch', marginTop: 3 }} source={require('../Images/goBack.png')} /></TouchableOpacity>),
            headerRight: () => (
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Image style={{ width: 20, height: 22, resizeMode: 'stretch', margin: 8 }} source={require('../Images/bell.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('AddAgent')}>
                        <Image style={{ width: 20, height: 20, resizeMode: 'stretch', margin: 8 }} source={require('../Images/banda2.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ width: 20, height: 20, resizeMode: 'stretch', margin: 8 }} source={require('../Images/out.png')} />
                    </TouchableOpacity>
                </View>
            ),
        }); //
    }, [navigation]);
    return (
        <ScrollView contentContainerStyle={myStyle.main}>
            <View style={{ flexDirection: 'column' }}>
                <View style={myStyle.view}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../Images/Group37002.png')} />
                        <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 16, color: '#1D8136' }}>Basic</Text>
                        <Text style={{ marginLeft: 15, fontSize: 15, fontFamily: 'Poppins-Light' }}>Rs</Text>
                        <Text style={{ fontFamily: 'Poppins-ExtraBold', fontSize: 20, color: '#31312E' }}>250</Text>
                        <Text style={{ fontSize: 13, fontFamily: 'Poppins-Light' }}>For6 Month</Text>
                        <Image style={{ marginLeft: 20 }} source={require('../Images/Group39475.png')} />
                        <Text style={{ fontSize: 13, fontFamily: 'Poppins-Light' }}>1 Agent</Text>
                    </View>
                    <View style={{ borderWidth: 1, width: '100%', borderColor: '#A1A1A1' }}></View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular' }}>Start Date:</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: '#000000' }}> 23 March 2022</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular' }}>End Date:</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Poppins-Medium', color: '#000000' }}> 8 Sept 2022</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ width: '55%', height: '30%', backgroundColor: '#1D8136', alignSelf: 'center', borderRadius: 10, justifyContent: 'center', margin: 10 }} onPress={() => navigation.navigate('Retry')}>
                        <Text style={{ alignSelf: 'center', color: '#FFFFFF', fontFamily: 'Poppins-Medium' }}>Renew Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={myStyle.view2}>
                <Image style={myStyle.img} source={require('../Images/fly.png')} />
                <TextInput style={myStyle.input} placeholder={'Sudip Das'} placeholderTextColor='#242134' />
                <TextInput style={myStyle.input} placeholder={'9832752546'} placeholderTextColor='#242134' />
                <TextInput style={myStyle.input} placeholder={'Sudip.das@gmail.com'} placeholderTextColor='#242134' />
                <TextInput style={myStyle.input} placeholder={'Das enterprise'} placeholderTextColor='#242134' />
                <TextInput style={myStyle.input} placeholder={'****'} placeholderTextColor='#242134' />
                <Text style={{ color: '#1D8136', fontSize: 14, fontFamily: 'Poppins-Medium', position: 'absolute', right: 30, top: 385 }}>Change Mpin</Text>
                <View style={myStyle.v}>
                    <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular' }}>Business Address</Text>
                    <Text style={{ fontSize: 16, color: '#000000', fontFamily: 'Poppins-SemiBold' }}>'Mohajoyati Birati, kol 51'</Text>
                </View>
                <View style={myStyle.container}>
                    <MapView
                        // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={myStyle.map}
                        region={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                    >
                        <Marker
                             coordinate={{ latitude : 37.78825 , longitude : -122.4324}}
                            title='My Location'
                            description='I am here!'
                        />
                    </MapView>
                </View>
                <TouchableOpacity style={myStyle.btn}>
                    <Text style={myStyle.btnText}>Update</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default UpdateProfile
const myStyle = StyleSheet.create({
    btn: {
        marginTop: 10,
        marginBottom:10,
        width: '98%',
        height: windowHeight / 11,
        backgroundColor: '#E33224',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      },
    btnText: {
        color: '#FFFFFF',
        alignSelf: 'center',
        fontSize: RFPercentage(3)
    },
    container: {
        height: 230,
        width: 300,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    main: {
        alignItems: 'center',
        backgroundColor: '#EBEBF6'
    },
    v: {
        marginTop: 8,
        marginBottom: 8,
        width: windowWidth / 1.2,
        height: windowHeight / 8,
        borderRadius: 15,
        paddingLeft: 15,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderColor: '#DBDBDB',
        borderWidth: 1,
        shadowColor: '#EBEBF6',
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,
    },
    input: {
        marginTop: 8,
        marginBottom: 8,
        width: windowWidth / 1.2,
        height: windowHeight / 11,
        borderRadius: 15,
        paddingLeft: 15,
        fontSize: 16,
        backgroundColor: '#FFFFFF',
        borderColor: '#DBDBDB',
        fontFamily: 'Poppins-SemiBold',
        borderWidth: 1,
        shadowColor: '#EBEBF6',
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,
    },
    img: {
        width: 70,
        height: 70,
        resizeMode: 'stretch',
        alignSelf: 'center'
    },
    view: {
        height: windowHeight / 3.5,
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
})