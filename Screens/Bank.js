import { View, Text, Image, TouchableOpacity, StatusBar, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import CashCard2 from '../Components/CashCard2';
const Bank = ({ navigation }) => {
    React.useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Back',
            headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()}><Image style={{ alignSelf: 'center', width: 20, height: 18, resizeMode: 'stretch', marginTop: 3 }} source={require('../Images/goBack.png')} /></TouchableOpacity>),
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
            <Text style={myStyle.head}>Icici Bank</Text>

            <View style={myStyle.smallCard}>
                <Image style={{ width: '15%', height: '90%', resizeMode: 'stretch' }} source={require('../Images/i.png')} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular' }}>Balance</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 26, color: '#1D8136', fontFamily: 'Poppins-SemiBold' }}>₹</Text>
                        <Text style={{ fontSize: 26, color: '#000000', fontFamily: 'Poppins-SemiBold' }}> 50,1250</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 50 }} onPress={() => navigation.navigate('AddBankCash')}>
                    <TouchableOpacity onPress={() =>navigation.navigate('AddBankCash')}>
                        <Image style={{ width: 90, height: 90, resizeMode: 'stretch' }} source={require('../Images/cPlus.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#1D8136', width: windowWidth / 3.2, height: windowHeight / 17, justifyContent: 'center', marginTop: 10, margin: 6, alignSelf: 'flex-start', marginLeft: 15 }}>
                <Text style={{ fontFamily: 'Poppins-Semibold', alignSelf: 'center', color: '#FFFFFF', fontSize: 14 }}>Date Range</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5 }}>
                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#FFFFFF', width: windowWidth / 2.2, height: windowHeight / 13, justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                    <Image style={{ resizeMode: 'stretch', width: 20, height: 20 }} source={require('../Images/Calender.png')} />
                    <Text style={{ fontFamily: 'Poppins-Semibold', alignSelf: 'center', color: '#000000', fontSize: 14 }}>04 Sept 2022</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 16, color: '#000000', fontFamily: 'Poppins-SemiBold', paddingTop: 10 }}>To</Text>
                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#FFFFFF', width: windowWidth / 2.4, height: windowHeight / 13, justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                    <Image style={{ resizeMode: 'stretch', width: 20, height: 20 }} source={require('../Images/Calender.png')} />
                    <Text style={{ fontFamily: 'Poppins-Semibold', alignSelf: 'center', color: '#000000', fontSize: 14 }}>10 Sept 2022</Text>
                </TouchableOpacity>
            </View>

            <View style={myStyle.cView}>
                <CashCard2 name={'Incentive'} type={'Credit'} date={'9 Sept 2022'} amount={' 320'} color={'#1D8136'} />
                <View style={{ borderColor: 'gray', borderWidth: 0.3 }}></View>
                <CashCard2 name={'Expense'} type={'Debit'} date={'9 Sept 2022'} amount={' 320'} color={'#E33224'} />
                <View style={{ borderColor: 'gray', borderWidth: 0.3 }}></View>
                <CashCard2 name={'Incentive'} type={'Credit'} date={'9 Sept 2022'} amount={' 320'} color={'#1D8136'} />
                <View style={{ borderColor: 'gray', borderWidth: 0.3 }}></View>
                <CashCard2 name={'Expense'} type={'Debit'} date={'9 Sept 2022'} amount={' 320'} color={'#E33224'} />
            </View>
        </ScrollView>
    )
}
export default Bank
const myStyle = StyleSheet.create({
    container: {
        backgroundColor: '#EBEBF6',
        alignItems: 'center',
    },
    cView:{
        backgroundColor: '#FFFFFF', 
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        shadowColor: '#EBEBF6',
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,
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
    smallCard: {
        height: windowHeight / 8,
        width: windowWidth / 1.1,
        backgroundColor: '#FFFFFF',
        shadowColor: '#EBEBF6',
        borderRadius: 10,
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