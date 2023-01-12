import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal,StatusBar} from 'react-native'
import React, { useState } from 'react'
import FormSearch3 from '../Components/FormSearch3'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import IncentiveCard from '../Components/IncentiveCard'
import { RadioButton } from 'react-native-paper';
const Incentive = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [checked, setChecked] = React.useState('first');
    const [ac1, setAc1] = React.useState('ac1');
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
            <Modal animationType="fade" transparent={true} visible={modalVisible}>
                <View style={myStyle.centeredView}>
                    <View style={myStyle.modalView}>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ position: 'absolute', right: 10, top: 10 }}>
                            <Image source={require('../Images/close2.png')} />
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <Text style={{ color: '#1D8136', alignSelf: 'center', fontSize: 40, fontFamily: 'Poppins-SemiBold' }}>₹</Text>
                            <Text style={{ color: '#000000', alignSelf: 'center', fontSize: 40, fontFamily: 'Poppins-SemiBold' }}> 2000</Text>
                        </View>

                        <View style={{ borderWidth: 0.3, borderColor: 'gray', width: '100%', marginBottom: 10, marginTop: 10 }}></View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={{ width: 35, height: 20, resizeMode: 'stretch' }} source={require('../Images/Calender.png')} />
                                <Text style={{ color: '#000000', fontSize: 16, fontFamily: 'Poppins-Medium' }}>02/09/2022</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <RadioButton color='#1D8136' value="second" status={checked === 'first' ? 'checked' : 'unchecked'} onPress={() => setChecked('first')} /><Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#000000', alignSelf: 'center' }}>Hand Cash</Text>
                            </View>
                        </View>

                        <View style={{ borderWidth: 0.3, borderColor: 'gray', width: '100%', marginBottom: 10, marginTop: 10 }}></View>
                        <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', borderRadius: 15, width: '70%', height: '25%', backgroundColor: '#E33224' }} onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={{ color: '#FFFFFF', alignSelf: 'center', fontFamily: 'Poppins-Medium' }}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            {/* modal two */}
            <Modal animationType="fade" transparent={true} visible={modalVisible2}>
                <View style={myStyle.centeredView}>
                    <View style={myStyle.modalView2}>
                        <TouchableOpacity onPress={() => setModalVisible2(!modalVisible2)} style={{ position: 'absolute', right: 10, top: 10 }}>
                            <Image source={require('../Images/close2.png')} />
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <Text style={{ color: '#1D8136', alignSelf: 'center', fontSize: 40, fontFamily: 'Poppins-SemiBold' }}>₹</Text>
                            <Text style={{ color: '#000000', alignSelf: 'center', fontSize: 40, fontFamily: 'Poppins-SemiBold' }}> 2000</Text>
                        </View>

                        <View style={{ borderWidth: 0.3, borderColor: 'gray', width: '100%', marginBottom: 10, marginTop: 10 }}></View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={{ width: 35, height: 20, resizeMode: 'stretch' }} source={require('../Images/Calender.png')} />
                                <Text style={{ color: '#000000', fontSize: 16, fontFamily: 'Poppins-Medium' }}>02/09/2022</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <RadioButton color='#1D8136' value="second" status={checked === 'first' ? 'checked' : 'unchecked'} onPress={() => setChecked('first')} /><Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#000000', alignSelf: 'center' }}>Bank</Text>
                            </View>
                        </View>
                        <View style={{ borderWidth: 0.3, borderColor: 'gray', width: '100%', marginBottom: 10, marginTop: 10 }}></View>
                        <View>
                        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 16, color: '#000000',}}>Select Account Number</Text>
                        <View style={{flexDirection:'row',alignItems:'baseline'}}>
                            <RadioButton color='#1D8136' value="ac1" status={ac1 === 'ac1' ? 'checked' : 'unchecked'} onPress={() => setAc1('ac1')} />
                            <Image style={{width:20,height:20,resizeMode:'stretch'}} source={require('../Images/b1.png')} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#6E6E6E', alignSelf: 'center' }}>12545******2584</Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'baseline'}}>
                            <RadioButton color='#1D8136' value="ac2" status={ac1 === 'ac2' ? 'checked' : 'unchecked'} onPress={() => setAc1('ac2')} />
                            <Image style={{width:20,height:20,resizeMode:'stretch'}} source={require('../Images/b2.png')} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#6E6E6E', alignSelf: 'center' }}>25125******2545</Text>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'baseline'}}>
                            <RadioButton color='#1D8136' value="ac3" status={ac1 === 'ac3' ? 'checked' : 'unchecked'} onPress={() => setAc1('ac3')} />
                            <Image style={{width:20,height:20,resizeMode:'stretch'}} source={require('../Images/b3.png')} />
                            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#6E6E6E', alignSelf: 'center' }}>12545******2584</Text>
                        </View>
                        </View>

                        <View style={{ borderWidth: 0.3, borderColor: 'gray', width: '100%', marginBottom: 10, marginTop: 10 }}></View>
                        <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', borderRadius: 15, width: '60%', height: '14%', backgroundColor: '#E33224' }} onPress={() => setModalVisible2(!modalVisible2)}>
                            <Text style={{ color: '#FFFFFF', alignSelf: 'center', fontFamily: 'Poppins-Medium' }}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Text style={myStyle.head}>Incentive</Text>
            <View style={myStyle.smallCard}>
                <View>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular' }}>Total Balance</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 28, color: '#1D8136', fontFamily: 'Poppins-SemiBold' }}>₹</Text>
                        <Text style={{ fontSize: 28, color: '#000000', fontFamily: 'Poppins-SemiBold' }}> 50,1250</Text>
                    </View>
                </View>
                
                <View style={{flexDirection: 'row',alignItems:'center'}}>
                    <TouchableOpacity onPress={() => setModalVisible2(!modalVisible2)}>
                        <Image style={{ width: 90, height: 90, resizeMode: 'stretch' }} source={require('../Images/in1.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <Image style={{ width: 90, height: 90, resizeMode: 'stretch' }} source={require('../Images/in2.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 10 }}>
                <FormSearch3 placeholderText='Search Name' />
                <View style={myStyle.filter}>
                    <Image style={{ width: '40%', height: '40%', alignSelf: 'center', resizeMode: 'stretch', marginLeft: 10 }} source={require('../Images/f.png')} />
                    <Text style={{ marginTop: 20, color: '#FFFFFF', fontFamily: 'Poppins-Medium' }}>All</Text>
                </View>
            </View>
            <IncentiveCard amount={'2000'} time={'06:30 PM'} name='Sudip Das' date={'09 Sept 2022'} inc={'200'} />
            <IncentiveCard amount={'2000'} time={'06:30 PM'} name='Sudip Das' date={'09 Sept 2022'} inc={'200'} />
            <IncentiveCard amount={'2000'} time={'06:30 PM'} name='Sudip Das' date={'09 Sept 2022'} inc={'200'} />
            <IncentiveCard amount={'2000'} time={'06:30 PM'} name='Sudip Das' date={'09 Sept 2022'} inc={'200'} />
        </ScrollView>
    )
}
export default Incentive
const myStyle = StyleSheet.create({
    filter: {
        marginTop: 10,
        width: windowWidth / 4.6,
        height: windowHeight / 12,
        borderRadius: 15,
        flexDirection: 'row',
        marginLeft: windowWidth / 30,
        backgroundColor: '#1D8136',
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
    container: {
        backgroundColor: '#EBEBF6',
        alignItems: 'center',
    },
    smallCard: {
        height: windowHeight / 7,
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
        margin: 20,
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