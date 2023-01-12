import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Image,StatusBar} from 'react-native'
import React, { useState } from 'react'
import OrderCard from '../Components/OrderCard';
import OldOrderCard from '../Components/OldOrderCard';
import { windowHeight, windowWidth } from '../utils/Dimentions';
import { TextInput } from 'react-native-paper';
const MyOrder = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const chnage = () => {
        setModalVisible2(!modalVisible2)
        navigation.navigate('ComplainHistory')
    }
    React.useEffect(() => {
        navigation.setOptions({
          headerTitle: 'Back',
          headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()}><Image style={{alignSelf:'center',width: 20, height: 18, resizeMode: 'stretch',marginTop:3}} source={require('../Images/goBack.png')} /></TouchableOpacity>),
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
            <StatusBar backgroundColor={'#FFFFFF'} barStyle='dark-content'/>
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <View style={myStyle.centeredView}>
                    <View style={myStyle.modalView}>
                        <Text style={{ color: '#000000', alignSelf: 'center', fontSize: 22, fontFamily: 'Poppins-SemiBold' }}>Are you sure?</Text>
                        <Image style={{ resizeMode: 'stretch', width: '35%', height: '35%', alignSelf: 'center' }} source={require('../Images/sure.png')} />
                        <Text style={{ margin: 10, color: '#6E6E6E', alignSelf: 'center', fontSize: 14, fontFamily: 'Poppins-Regular' }}>Are you sure you want to Cancel the order?</Text>
                        <View style={{ borderWidth: 0.3, borderColor: 'gray', width: '100%', marginBottom: 10 }}></View>
                        <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ margin: 10, alignSelf: 'center', justifyContent: 'center', borderRadius: 10, height: '80%', width: '40%', backgroundColor: '#E33224' }}>
                                <Text style={{ fontFamily: 'Poppins-Semibold', alignSelf: 'center', color: '#FFFFFF' }}>No</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ margin: 10, alignSelf: 'center', justifyContent: 'center', borderRadius: 10, height: '80%', width: '40%', backgroundColor: '#1D8136' }}>
                                <Text style={{ fontFamily: 'Poppins-Semibold', alignSelf: 'center', color: '#FFFFFF' }}>Yes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal animationType="slide" transparent={true} visible={modalVisible2}>
                <View style={myStyle.centeredView}>
                    <View style={myStyle.modalView2}>
                        <TouchableOpacity onPress={() => setModalVisible2(!modalVisible2)} style={{ position: 'absolute', right: 10, top: 10 }}>
                            <Image source={require('../Images/close2.png')} />
                        </TouchableOpacity>
                        <Text style={{ color: '#000000', alignSelf: 'center', fontSize: 20, fontFamily: 'Poppins-SemiBold' }}>Register a Complaint</Text>
                        <View style={{ borderWidth: 0.3, borderColor: 'gray', width: '100%', marginBottom: 10, marginTop: 10 }}></View>
                        <TextInput underlineColor='transparent' style={myStyle.input} placeholder={'Subject'} />
                        <TextInput underlineColor='transparent' multiline={true} numberOfLines={6} style={myStyle.inputArea} placeholder={'Details'} />
                        <TouchableOpacity onPress={() =>chnage()} style={{ margin: 10, alignSelf: 'center', justifyContent: 'center', borderRadius: 10, height: '17%', width: '98%', backgroundColor: '#E33224' }}>
                            <Text style={{ fontFamily: 'Poppins-Semibold', alignSelf: 'center', color: '#FFFFFF' }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Text style={myStyle.head}>My Order</Text>
            <OldOrderCard img={require('../Images/gobi.png')} title={'Cauliflower'} comp={true} amount={'₹ 2000'} status={'Delivered'} onPress={() => setModalVisible(!modalVisible)} />
            <Text style={myStyle.head}>Oldest Order</Text>
            <OrderCard img={require('../Images/gobi.png')} title={'Cauliflower'} comp={true} amount={'₹ 2000'} status={'Delivered'}
                onPress={() => setModalVisible2(!modalVisible2)} />
            <OrderCard img={require('../Images/tmatar.png')} title={'Tomato'} amount={'₹ 2000'} status={'Canceled'} />
            <OrderCard img={require('../Images/gobi.png')} title={'Cauliflower'} amount={'₹ 2000'} status={'Delivered'} />
        </ScrollView>
    )
}
export default MyOrder
const myStyle = StyleSheet.create({
    container: {
        backgroundColor: '#EBEBF6',
    },
    inputArea: {
        marginTop: 10,
        width: windowWidth / 1.2,
        borderRadius: 15,
        color: '#A1A1A1',
        backgroundColor: '#FFFFFF',
        borderColor: '#DBDBDB',
        borderTopLeftRadius:10,
        fontSize:14,
        borderTopRightRadius:10,
        fontFamily: 'Poppins-Light',
        borderWidth: 1
    },
    input: {
        marginTop: 10,
        marginBottom: 10,
        width: windowWidth / 1.2,
        height: windowHeight / 11,
        borderRadius: 10,
        borderColor: '#DBDBDB',
        color: '#A1A1A1',
        borderTopLeftRadius:10,
        fontSize:14,
        borderTopRightRadius:10,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Poppins-Light',
        borderWidth: 1
    },
    head: {
        fontFamily: "Poppins-SemiBold",
        alignSelf: 'flex-start',
        fontSize: 20,
        margin: 10,
        color: '#000000'
    },
    centeredView: {
        flex: 1,
        alignItems: "center",
        paddingTop: 30,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modalView: {
        width: '92%',
        height: '55%',
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
        width: '93%',
        height: '72%',
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
})