import { View, Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import FormSearch from '../Components/FormSearch';
const DueList = ({modalVisible,setModalVisible}) => {
    return (
        <View>
             <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft:10}}>
                <FormSearch placeholderText='Search' />
                <View style={myStyle.filter}>
                    <Image style={{ alignSelf: 'center' }} source={require('../Images/filter.png')} />
                </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
                <View style={myStyle.view4}>
                    <Image style={{ alignSelf: 'center', width: windowWidth / 10, height: windowHeight / 12, resizeMode: 'stretch' }} source={require('../Images/Group39709.png')} />
                    <View>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#242134', fontSize: 18, marginLeft: 5 }}>Sudip Das</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#242134', fontSize: 14, marginLeft: 5 }}>Due:23</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#E33224', fontSize: 14, marginLeft: 5 }}>Receivable</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#6E6E6E', fontSize: 15, margin: 3, marginLeft: 5 }}>9832752546</Text>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                            <Image style={{ margin: 2, marginLeft: 5 }} source={require('../Images/Group39665.png')} />
                        </TouchableOpacity>
                        <Image style={{ bottom: 20, right: -10, position: 'absolute' }} source={require('../Images/Group39718.png')} />
                    </View>

                </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
                <View style={myStyle.view4}>
                    <Image style={{ alignSelf: 'center', width: windowWidth / 10, height: windowHeight / 12, resizeMode: 'stretch' }} source={require('../Images/Group39713.png')} />
                    <View>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#242134', fontSize: 18, marginLeft: 5 }}>Sudip Das</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#1D8136', fontSize: 14, marginLeft: 5 }}>Due:23</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#1D8136', fontSize: 14, marginLeft: 5 }}>Payable</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#6E6E6E', fontSize: 15, margin: 3, marginLeft: 5 }}>9832752546</Text>
                        <Image style={{ margin: 2, marginLeft: 5 }} source={require('../Images/Group39665.png')} />
                        <Image style={{ bottom: 20, right: -10, position: 'absolute' }} source={require('../Images/Group39718.png')} />
                    </View>

                </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
                <View style={myStyle.view4}>
                    <Image style={{ alignSelf: 'center', width: windowWidth / 10, height: windowHeight / 12, resizeMode: 'stretch' }} source={require('../Images/Group39709.png')} />
                    <View>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#242134', fontSize: 18, marginLeft: 5 }}>Sudip Das</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#242134', fontSize: 14, marginLeft: 5 }}>Due:23</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#E33224', fontSize: 14, marginLeft: 5 }}>Receivable</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#6E6E6E', fontSize: 15, margin: 3, marginLeft: 5 }}>9832752546</Text>
                        <Image style={{ margin: 2, marginLeft: 5 }} source={require('../Images/Group39665.png')} />
                        <Image style={{ bottom: 20, right: -10, position: 'absolute' }} source={require('../Images/Group39718.png')} />
                    </View>

                </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
                <View style={myStyle.view4}>
                    <Image style={{ alignSelf: 'center', width: windowWidth / 10, height: windowHeight / 12, resizeMode: 'stretch' }} source={require('../Images/Group39713.png')} />
                    <View>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#242134', fontSize: 18, marginLeft: 5 }}>Sudip Das</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#1D8136', fontSize: 14, marginLeft: 5 }}>Due:23</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#1D8136', fontSize: 14, marginLeft: 5 }}>Payable</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#6E6E6E', fontSize: 15, margin: 3, marginLeft: 5 }}>9832752546</Text>
                        <Image style={{ margin: 2, marginLeft: 5 }} source={require('../Images/Group39665.png')} />
                        <Image style={{ bottom: 20, right: -10, position: 'absolute' }} source={require('../Images/Group39718.png')} />
                    </View>

                </View>
            </View>
            <View style={{ flexDirection: 'column' }}>
                <View style={myStyle.view4}>
                    <Image style={{ alignSelf: 'center', width: windowWidth / 10, height: windowHeight / 12, resizeMode: 'stretch' }} source={require('../Images/Group39713.png')} />
                    <View>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#242134', fontSize: 18, marginLeft: 5 }}>Sudip Das</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#1D8136', fontSize: 14, marginLeft: 5 }}>Due:23</Text>
                        <Text style={{ fontFamily: 'Poppins-Medium', color: '#1D8136', fontSize: 14, marginLeft: 5 }}>Payable</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: 'Poppins-Regular', color: '#6E6E6E', fontSize: 15, margin: 3, marginLeft: 5 }}>9832752546</Text>
                        <Image style={{ margin: 2, marginLeft: 5 }} source={require('../Images/Group39665.png')} />
                        <Image style={{ bottom: 20, right: -10, position: 'absolute' }} source={require('../Images/Group39718.png')} />
                    </View>
                    </View>
                </View>
            </View>
            )
}
export default DueList
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
        justifyContent: 'center',
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
        height: windowHeight / 6,
        width: windowWidth / 1.05,
        borderRadius: 15,
        margin: 10,
        flexDirection: 'row',
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