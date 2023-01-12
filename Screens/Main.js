import { View, Text, StyleSheet, Image, ScrollView, Modal, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import DueList from './DueList';
import Invoice from './Invoice';
const Main = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [list, setList] = useState(true)
    const [color, setColor] = useState('#FFFFFF')
    const [bgColor, setBgColor] = useState('#1D8136')
    const change = () => {
        setList(!list);
    }
    React.useEffect(() => {
        navigation.setOptions({
            headerTitle: ' ',
            headerLeft: () => (<TouchableOpacity onPress={() => navigation.navigate('Profile')}><Image style={{ width: 20, height: 18, resizeMode: 'stretch', margin: 5,marginLeft:10}} source={require('../Images/home.png')} /></TouchableOpacity>),
            headerRight: () => (
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <Image style={{ width: 20, height: 22, resizeMode: 'stretch', margin: 8 }} source={require('../Images/bell.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('User')}>
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
            <Modal animationType="fade" transparent={true} visible={modalVisible}>
                <View style={myStyle.centeredView}>
                    <View style={myStyle.modalView}>
                        <TouchableOpacity style={{ position: "absolute", right: 15, top: 15 }} onPress={() => setModalVisible(!modalVisible)}>
                            <Image source={require('../Images/close2.png')} />
                        </TouchableOpacity>
                        <Text style={{ color: '#242134', fontFamily: 'Poppins-SemiBold', fontSize: 20 }}>Remind</Text>
                        <View style={{ borderWidth: 1, width: '100%', borderColor: "#A1A1A1" }}></View>
                        <Image style={myStyle.modalImg} source={require('../Images/Group40108.png')} />
                        <View style={{ flexDirection: 'row', margin: 20 }}>
                            <View style={{ marginRight: 40 }}>
                                <Image style={myStyle.social} source={require('../Images/sms.png')} />
                                <Text>Sms</Text>
                            </View>
                            <View style={{ marginLeft: 40 }}>
                                <Image style={myStyle.social} source={require('../Images/whatsapp.png')} />
                                <Text style={{ marginLeft: -10 }}>Whatsapp</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={{ flexDirection: 'column' }}>
                <View style={myStyle.view2}>
                    <TouchableOpacity onPress={() => navigation.navigate('AddLocation')}>
                        <Image style={{ alignSelf: 'center', alignSelf: 'flex-end' }} source={require('../Images/cross.png')} />

                    </TouchableOpacity>
                    <Image style={{ alignSelf: 'center' }} source={require('../Images/Group39456.png')} />
                    <Text style={{ fontFamily: 'Poppins-Regular', color: '#6E6E6E', fontSize: 12, alignSelf: 'center', marginTop: 5 }}>Please add business location</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={myStyle.view} onPress={() => navigation.navigate('Paid')}>
                    <Text style={myStyle.viewText}>Paid</Text>
                    <Text style={[myStyle.viewText, { color: '#E33224', fontFamily: 'Poppins-SemiBold' }]}>123</Text>
                </TouchableOpacity>
                <TouchableOpacity style={myStyle.view} onPress={() => navigation.navigate('Receive')}>
                    <Text style={myStyle.viewText}>Receive</Text>
                    <Text style={[myStyle.viewText, { color: '#1D8136', fontFamily: 'Poppins-SemiBold' }]}>101</Text>
                </TouchableOpacity>
                <TouchableOpacity style={myStyle.view} onPress={() => navigation.navigate('Incentive')}>
                    <Text style={myStyle.viewText}>Incentive</Text>
                    <Text style={[myStyle.viewText, { color: '#1D8136', fontFamily: 'Poppins-SemiBold' }]}>1223</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={myStyle.view} onPress={() => navigation.navigate('Auction')}>
                    <Text style={myStyle.viewText}>Auction</Text>
                    <Text style={[myStyle.viewText, { color: '#E33224', fontFamily: 'Poppins-SemiBold' }]}>1256</Text>
                </TouchableOpacity>
                <TouchableOpacity style={myStyle.view}>
                    <Text style={[myStyle.viewText, { fontSize: 12 }]}>Buyer Due:</Text>
                    <Text style={[myStyle.viewText, { color: '#E33224', fontFamily: 'Poppins-SemiBold', fontSize: 12 }]}> 23</Text>
                    <Text style={[myStyle.viewText, { fontSize: 12 }]}>Seller Due</Text>
                    <Text style={[myStyle.viewText, { color: '#1D8136', fontFamily: 'Poppins-SemiBold', fontSize: 12 }]}> 45</Text>
                </TouchableOpacity>
                <TouchableOpacity style={myStyle.view} onPress={() => navigation.navigate('Report')}>
                    <Text style={myStyle.viewText}>Reports</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={()=>navigation.navigate('StartAuction')}>
                    <Image style={{ width: windowWidth / 4, height: windowHeight / 5 }} source={require('../Images/Group39725.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Review')}>
                    <Image style={{ width: windowWidth / 4, height: windowHeight / 5 }} source={require('../Images/Group39726.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Verification')}>
                    <Image style={{ width: windowWidth / 4, height: windowHeight / 5 }} source={require('../Images/Group39729.png')} />
                </TouchableOpacity>

            </View>
            <View style={myStyle.view3}>
                <TouchableOpacity onPress={() => change()} style={[myStyle.is1, { backgroundColor: list ? bgColor : '#FFFFFF' }]}>
                    <Text style={{ alignSelf: 'center', color: list ? color : '#242134', fontSize: 16 }}>Due List</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => change()} style={[myStyle.is2, { backgroundColor: list ? '#FFFFFF' : bgColor }]}>
                    <Text style={{ alignSelf: 'center', color: list ? '#242134' : color, fontSize: 16 }}>Invoice</Text>
                </TouchableOpacity>
            </View>
            {list ? <DueList modalVisible={modalVisible} setModalVisible={setModalVisible} /> : <Invoice />}
        </ScrollView>
    )
}
export default Main
const myStyle = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EBEBF6'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    view: {
        height: windowHeight / 6.7,
        width: windowWidth / 3.7,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
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
        height: windowHeight / 6,
        width: windowWidth / 1.1,
        borderRadius: 15,
        margin: 10,
        flexDirection: 'column',
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
    view3: {
        flex: 1,
        height: windowHeight / 12,
        width: windowWidth / 1.05,
        flexDirection: 'row',
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
    viewText: {
        marginTop: 0,
        color: '#242134',
        fontSize: 14,
        fontFamily: 'Poppins-Medium'
    },
    modalView: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '90%',
        height: '50%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
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
    social: {
        width: windowWidth / 10,
        height: windowHeight / 10,
        resizeMode: 'stretch'
    }
})