import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import FormSearch from '../Components/FormSearch';
const Invoice = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 10 }}>
                <FormSearch placeholderText='Search' />
                <View style={myStyle.filter}>
                    <Image style={{ width: '50%', height: '50%', alignSelf: 'center', resizeMode: 'stretch', marginLeft: 10 }} source={require('../Images/filter.png')} />
                    <Text style={{ marginTop: 20 }}>All</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'column' }}>
                <View style={myStyle.view4}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ width: windowWidth / 10, height: windowHeight / 15, resizeMode: 'stretch' }} source={require('../Images/Group39713.png')} />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#242134', fontSize: 18, margin: 5 }}>Sudip Das</Text>
                    </View>

                    <View style={{ position: 'absolute', right: 10, top: 10, flexDirection: 'row' }}>
                        <Image style={{ width: windowWidth / 15, height: windowHeight / 15, resizeMode: 'stretch' }} source={require('../Images/Calender.png')} />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#6E6E6E', fontSize: 14, marginTop: 10 }}>02/09/2022</Text>
                    </View>
                    <View style={{ borderWidth: 1, width: '100%', borderColor: '#A1A1A1', marginTop: 10 }}></View>

                    <View style={{ flexDirection: 'row', marginTop: 10}}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#6E6E6E', fontSize: 14 }}>INV NO:</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#242134', fontSize: 16 }}>#1234568</Text>
                        </View>
                        <View style={{ flexDirection: 'row', position: 'relative', right: -80 }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#6E6E6E', fontSize: 14 }}>MODE:</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#242134', fontSize: 16 }}>Bank</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#6E6E6E', fontSize: 14 }}>#1D8136:</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#1D8136', fontSize: 16 }}>₹2000</Text>
                        </View>
                        <View style={{ flexDirection: 'row', position: 'relative', right: -100 }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#6E6E6E', fontSize: 14 }}>Status:</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#1D8136', fontSize: 16 }}>Paid</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row',width: windowWidth /1.02, height: windowHeight /3,justifyContent:'center'}}>
                        <View style={{marginRight:20,flexDirection: 'row', marginTop: 10, backgroundColor: '#E33224', width: '30%', height: '20%', borderRadius: 5,justifyContent:'center'}}>
                            <Image style={{ width: windowWidth / 20, height: windowHeight / 30, resizeMode: 'stretch', alignSelf: 'center' }} source={require('../Images/printer.png')} />
                            <Text style={{fontFamily: 'Poppins-Medium', color: '#FFFFFF', fontSize: 16,marginTop:5}}>Print</Text>
                        </View>

                        <View style={{flexDirection: 'row', marginTop: 10, backgroundColor: '#1D8136', width: '30%', height: '20%', borderRadius: 5,justifyContent:'center'}}>
                            <Image style={{ width: windowWidth / 20, height: windowHeight / 30, resizeMode: 'stretch', alignSelf: 'center' }} source={require('../Images/share.png')} />
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFFFFF', fontSize: 16,marginTop:5}}>Share</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'column' }}>
                <View style={myStyle.view4}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ width: windowWidth / 10, height: windowHeight / 15, resizeMode: 'stretch' }} source={require('../Images/Group39709.png')} />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#242134', fontSize: 18, margin: 5 }}>Sudip Das</Text>
                    </View>

                    <View style={{ position: 'absolute', right: 10, top: 10, flexDirection: 'row' }}>
                        <Image style={{ width: windowWidth / 15, height: windowHeight / 15, resizeMode: 'stretch' }} source={require('../Images/Calender.png')} />
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#6E6E6E', fontSize: 14, marginTop: 10 }}>02/09/2022</Text>
                    </View>
                    <View style={{ borderWidth: 1, width: '100%', borderColor: '#A1A1A1', marginTop: 10 }}></View>

                    <View style={{ flexDirection: 'row', marginTop: 10}}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#6E6E6E', fontSize: 14 }}>INV NO:</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#242134', fontSize: 16 }}>#1234568</Text>
                        </View>
                        <View style={{ flexDirection: 'row', position: 'relative', right: -80 }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#6E6E6E', fontSize: 14 }}>MODE:</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#242134', fontSize: 16 }}>Bank</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#6E6E6E', fontSize: 14 }}>#1D8136:</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#1D8136', fontSize: 16 }}>₹2000</Text>
                        </View>
                        <View style={{ flexDirection: 'row', position: 'relative', right: -100 }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#6E6E6E', fontSize: 14 }}>Status:</Text>
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#E33224', fontSize: 16 }}>Receive</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row',width: windowWidth /1.02, height: windowHeight /3,justifyContent:'center'}}>
                        <View style={{marginRight:20,flexDirection: 'row', marginTop: 10, backgroundColor: '#E33224', width: '30%', height: '20%', borderRadius: 5,justifyContent:'center'}}>
                            <Image style={{ width: windowWidth / 20, height: windowHeight / 30, resizeMode: 'stretch', alignSelf: 'center' }} source={require('../Images/printer.png')} />
                            <Text style={{fontFamily: 'Poppins-Medium', color: '#FFFFFF', fontSize: 16,marginTop:5}}>Print</Text>
                        </View>

                        <View style={{flexDirection: 'row', marginTop: 10, backgroundColor: '#1D8136', width: '30%', height: '20%', borderRadius: 5,justifyContent:'center'}}>
                            <Image style={{ width: windowWidth / 20, height: windowHeight / 30, resizeMode: 'stretch', alignSelf: 'center' }} source={require('../Images/share.png')} />
                            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFFFFF', fontSize: 16,marginTop:5}}>Share</Text>
                        </View>
                    </View>
                </View>
            </View>

        </View>
    )
}
export default Invoice
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
        marginTop: 22
    },
    filter: {
        marginTop: 10,
        marginBottom: 10,
        width: windowWidth / 5,
        height: windowHeight / 11,
        borderRadius: 15,
        flexDirection: 'row',
        marginLeft: windowWidth / 30,
        backgroundColor: '#fff',
        color: '#A1A1A1',
        borderRadius: 10,
        fontFamily: 'Poppins-Light',
        shadowColor: '#EBEBF6',
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,

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
    view4: {
        height: windowHeight / 3,
        width: windowWidth / 1.05,
        borderRadius: 15,
        margin: 10,
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