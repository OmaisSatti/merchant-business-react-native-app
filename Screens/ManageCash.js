import { View, Text, Image, TouchableOpacity, TextInput, StatusBar, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const Cash = ({ navigation }) => {
    const [list, setList] = useState(true)
    const [color, setColor] = useState('#FFFFFF')
    const [bgColor, setBgColor] = useState('#1D8136')
    const change = () => {
        setList(!list);
    }
    React.useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Back',
            headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()}><Image style={{ alignSelf: 'center', width: 20, height: 18, resizeMode: 'stretch', marginTop: 3}} source={require('../Images/goBack.png')} /></TouchableOpacity>),
            headerRight: () => (
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Image style={{ width: 20, height: 22, resizeMode: 'stretch', margin: 8 }} source={require('../Images/bell.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
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
        <ScrollView contentContainerStyle={myStyle.container}>
            <StatusBar backgroundColor={'#FFFFFF'} barStyle='dark-content' />
            <Text style={myStyle.head}>Manage Cash</Text>
            <View style={myStyle.view3}>
                <TouchableOpacity onPress={() => change()} style={[myStyle.is1, { backgroundColor: list ? bgColor : '#FFFFFF' }]}>
                    <Text style={{ alignSelf: 'center', color: list ? color : '#242134', fontSize: 16 }}>Hand Cash</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => change()} style={[myStyle.is2, { backgroundColor: list ? '#FFFFFF' : bgColor }]}>
                    <Text style={{ alignSelf: 'center', color: list ? '#242134' : color, fontSize: 16 }}>Bank Cash</Text>
                </TouchableOpacity>
            </View>

            <View style={myStyle.smallCard}>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 28, color: '#1D8136', fontFamily: 'Poppins-SemiBold' }}>₹</Text>
                        <Text style={{ fontSize: 28, color: '#000000', fontFamily: 'Poppins-SemiBold' }}> 50,1250</Text>
                    </View>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular' }}>Bank Balance</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Image style={{ width: 90, height: 90, resizeMode: 'stretch' }} source={require('../Images/lo.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={myStyle.smallCard2}>
                <View style={{flexDirection:'row'}}>
                <Image style={{ width: '15%', height: '80%', resizeMode: 'stretch' }} source={require('../Images/i.png')} />
                <View style={{marginLeft:10}}>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-SemiBold', color: '#000000' }}>Axis Bank</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 14, color: '#A1A1A1', fontFamily: 'Poppins-SemiBold' }}>9805224652566</Text>
                    </View>
                </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{ fontSize: 20, color: '#1D8136', fontFamily: 'Poppins-SemiBold' }}>₹</Text>
                    <Text style={{ fontSize: 20, color: '#000000', fontFamily: 'Poppins-SemiBold' }}> 25500</Text>
                </View>
            </View>
            <View style={myStyle.smallCard2}>
                <View style={{flexDirection:'row'}}>
                <Image style={{ width: '15%', height: '80%', resizeMode: 'stretch' }} source={require('../Images/b2.png')} />
                <View style={{marginLeft:10}}>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-SemiBold', color: '#000000' }}>SBI Bank</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 14, color: '#A1A1A1', fontFamily: 'Poppins-SemiBold' }}>9805224652566</Text>
                    </View>
                </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{ fontSize: 20, color: '#1D8136', fontFamily: 'Poppins-SemiBold' }}>₹</Text>
                    <Text style={{ fontSize: 20, color: '#000000', fontFamily: 'Poppins-SemiBold' }}> 25500</Text>
                </View>
            </View>
            <View style={myStyle.smallCard2}>
                <View style={{flexDirection:'row'}}>
                <Image style={{ width: '15%', height: '80%', resizeMode: 'stretch' }} source={require('../Images/b3.png')} />
                <View style={{marginLeft:10}}>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-SemiBold', color: '#000000' }}>Axis Bank</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 14, color: '#A1A1A1', fontFamily: 'Poppins-SemiBold' }}>9805224652566</Text>
                    </View>
                </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{ fontSize: 20, color: '#1D8136', fontFamily: 'Poppins-SemiBold' }}>₹</Text>
                    <Text style={{ fontSize: 20, color: '#000000', fontFamily: 'Poppins-SemiBold' }}> 25500</Text>
                </View>
            </View>

            <TouchableOpacity style={myStyle.btn} onPress={() => navigation.navigate('AddBankCash')}>
                <Image style={{ width: 25, height: 25, resizeMode: 'stretch' }} source={require('../Images/addWhite.png')} />
                <Text style={myStyle.btnText}>Add Bank</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
export default Cash
const myStyle = StyleSheet.create({
    container: {
        backgroundColor: '#EBEBF6',
        alignItems: 'center',
    },
    btn: {
        marginTop: 10,
        marginBottom: 10,
        width: '90%',
        height: windowHeight / 11,
        backgroundColor: '#E33224',
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 15,
    },
    btnText: {
        color: '#FFFFFF',
        alignSelf: 'center',
        marginLeft: 5,
        fontSize: RFPercentage(3)
    },
    centeredView: {
        flex: 1,
        alignItems: "center",
        paddingTop: 40,
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    input: {
        marginTop: 10,
        marginBottom: 10,
        borderColor: '#DBDBDB',
        paddingLeft: 10,
        width: windowWidth / 1.2,
        height: windowHeight / 11,
        borderRadius: 10,
        color: '#A1A1A1',
        backgroundColor: '#FFFFFF',
        fontFamily: 'Poppins-Light',
        borderWidth: 1
    },
    modalView: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '93%',
        height: windowHeight / 2,
        backgroundColor: "green",
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    view3: {
        flex: 1,
        height: windowHeight / 11,
        width: windowWidth / 1.1,
        flexDirection: 'row',
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
    is1: {
        flex: 1,
        backgroundColor: '#1D8136',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        justifyContent: 'center',
        shadowColor: '#EBEBF6',
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,
    },
    is2: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        justifyContent: 'center',
        shadowColor: '#EBEBF6',
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,
    },
    smallCard2: {
        height: windowHeight /10,
        width: windowWidth / 1.1,
        backgroundColor: '#FFFFFF',
        shadowColor: '#EBEBF6',
        justifyContent:'space-between',
        borderRadius: 10,
        marginTop: 10,
        flexDirection: 'row',
        padding: 5,
        paddingLeft: 10,
        paddingRight:10,
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,
    },
    smallCard: {
        height: windowHeight / 7,
        width: windowWidth / 1.1,
        backgroundColor: '#FFFFFF',
        shadowColor: '#EBEBF6',
        borderRadius: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 5,
        paddingLeft: 10,
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,
    },
    head: {
        fontFamily: "Poppins-SemiBold",
        alignSelf: 'flex-start',
        margin: 10,
        marginBottom: 5,
        fontSize: 18,
        color: '#000000'
    },
    centeredView: {
        flex: 1,
        alignItems: "center",
        paddingTop: 40,
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    modalView: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '93%',
        height: '45%',
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalView2: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '93%',
        height: '73%',
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalImg: {
        width: windowWidth / 3,
        height: windowHeight / 7,
        margin: 10,
        resizeMode: 'stretch'
    },
})