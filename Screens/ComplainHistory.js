import {StatusBar,View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import ComplainCard from '../Components/ComplainCard'
import { windowHeight, windowWidth } from '../utils/Dimentions';
const ComplainHistory = ({navigation}) => {
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
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView contentContainerStyle={myStyle.main}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle='dark-content'/>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={myStyle.centeredView}>
          <View style={myStyle.modalView}>
            <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}  style={{ position: 'absolute', right: 10, top: 10 }}>
              <Image source={require('../Images/close2.png')} />
            </TouchableOpacity>
            <Text style={{ color: '#000000', alignSelf: 'center', fontSize: 20, fontFamily: 'Poppins-SemiBold' }}>Register a Complaint</Text>
            <View style={{ borderWidth: 0.3, borderColor: 'gray', width: '100%', marginBottom: 10,marginTop:10}}></View>
            <TextInput style={myStyle.input} placeholder={'Subject'} />
            <TextInput multiline={true} numberOfLines={6} style={myStyle.inputArea} placeholder={'Details'} />
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ margin: 10, alignSelf: 'center', justifyContent: 'center', borderRadius: 10, height: '17%', width: '98%', backgroundColor: '#E33224' }}>
              <Text style={{ fontFamily: 'Poppins-Semibold', alignSelf: 'center', color: '#FFFFFF' }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', margin: 20 }}>
        <Text style={myStyle.head}>Complaint History</Text>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ flexDirection: 'row', margin: 5 }}>
          <Image style={{ height: 20, width: 20 }} source={require('../Images/complain.png')} />
          <Text style={{ color: '#E33224', fontSize: 14, fontFamily: 'Poppins-Medium' }}> Add Complain</Text>
        </TouchableOpacity>
      </View>
      <ComplainCard status={'Solved'} solved={true} />
      <ComplainCard status={'Pending'} />
      <ComplainCard status={'Solved'} solved={true} />
      <ComplainCard status={'Pending'} />
    </ScrollView>
  )
}

export default ComplainHistory
const myStyle = StyleSheet.create({
  inputArea: {
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    textAlignVertical:'top',
    width: windowWidth / 1.2,
    borderRadius: 10,
    color: '#A1A1A1',
    borderColor: '#DBDBDB',
    fontFamily: 'Poppins-Light',
    borderWidth: 1
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
  centeredView: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  modalView: {
    width: '93%',
    height: '70%',
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
  main: {
    backgroundColor: '#EBEBF6'
  },
  head: {
    fontFamily: "Poppins-SemiBold",
    alignSelf: 'flex-start',
    fontSize: 18,
    color: '#000000'
  },
})