import { View, Text, Image, TouchableOpacity, StatusBar, StyleSheet, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import UserCard from '../Components/UserCard';
import { windowHeight, windowWidth } from '../utils/Dimentions'
import FormSearch from '../Components/FormSearch2';
import BouncyCheckbox from "react-native-bouncy-checkbox";
const User = ({ navigation }) => {
  const [list, setList] = useState(true)
  const [seller, setSeller] = useState(false)
  const [buyer, setBuyer] = useState(false)
  const [color, setColor] = useState('#FFFFFF')
  const [modalVisible, setModalVisible] = useState(false);
  const [bgColor, setBgColor] = useState('#1D8136')
  const change = (item) => {
    if (item === 'Agent') {
      setList(true)
      setBuyer(false)
      setSeller(false)
    }
    else if (item === 'Buyer') {
      setList(false)
      setBuyer(true)
      setSeller(false)
    }
    else if (item === 'Seller') {
      setList(false)
      setBuyer(false)
      setSeller(true)
    }
  }
  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()}><Image style={{ alignSelf: 'center', width: 20, height: 18, resizeMode: 'stretch', marginTop: 3, marginLeft: 10 }} source={require('../Images/home.png')} /></TouchableOpacity>),
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
      <StatusBar backgroundColor={'#FFFFFF'} barStyle='dark-content' />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={myStyle.centeredView}>
          <View style={myStyle.modalView}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ position: 'absolute', right: 10, top: 10 }}>
              <Image source={require('../Images/close2.png')} />
            </TouchableOpacity>
            <Text style={{ color: '#000000', alignSelf: 'center', fontSize: 20, fontFamily: 'Poppins-SemiBold' }}>Set Access</Text>
            <View style={{padding:10}}>
              <BouncyCheckbox size={25} fillColor="#1D8136" unfillColor="#FFFFFF" text="Add" iconStyle={{ borderColor: "#1D8136" }}innerIconStyle={{ borderWidth: 2 }}
              textStyle={{ fontFamily: "Poppins-Regular" }}
              />
              <View style={{ borderWidth: 0.3, borderColor: 'gray', width: '100%', marginBottom: 10,marginTop:10}}></View>
               <BouncyCheckbox size={25} fillColor="#1D8136" unfillColor="#FFFFFF" text="View" iconStyle={{ borderColor: "#1D8136" }}innerIconStyle={{ borderWidth: 2 }}
              textStyle={{ fontFamily: "Poppins-Regular" }}
              />
                  <View style={{ borderWidth: 0.3, borderColor: 'gray', width: '100%', marginBottom: 10,marginTop:10}}></View>
               <BouncyCheckbox size={25} fillColor="#1D8136" unfillColor="#FFFFFF" text="Edit" iconStyle={{ borderColor: "#1D8136" }}innerIconStyle={{ borderWidth: 2 }}
              textStyle={{ fontFamily: "Poppins-Regularr" }}
              />
                  <View style={{ borderWidth: 0.3, borderColor: 'gray', width: '100%', marginBottom: 10,marginTop:10}}></View>
               <BouncyCheckbox size={25} fillColor="#1D8136" unfillColor="#FFFFFF" text="Delete" iconStyle={{ borderColor: "#1D8136" }}innerIconStyle={{ borderWidth: 2 }}
              textStyle={{ fontFamily: "Poppins-Regularr" }}
              />
            </View>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ margin: 10, alignSelf: 'center', justifyContent: 'center', borderRadius: 10, height: '14%', width: '98%', backgroundColor: '#E33224' }}>
              <Text style={{ fontFamily: 'Poppins-Semibold', alignSelf: 'center', color: '#FFFFFF' }}>Save</Text>
            </TouchableOpacity>
            <Image style={{ height: 70, width: 70, alignSelf: 'center' }} source={require('../Images/thumb.png')} />
            <Text style={{ color: '#000000', alignSelf: 'center', fontSize: 20, fontFamily: 'Poppins-SemiBold' }}>Set Successfully</Text>
          </View>
        </View>
      </Modal>

      <View style={myStyle.view3}>
        <TouchableOpacity onPress={() => change('Agent')} style={[myStyle.is1, { backgroundColor: list ? bgColor : '#FFFFFF' }]}>
          <Text style={{ alignSelf: 'center', color: list ? color : '#242134', fontSize: 16 }}>Agent</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => change('Seller')} style={[myStyle.is2, { backgroundColor: seller ? bgColor : '#FFFFFF' }]}>
          <Text style={{ alignSelf: 'center', color: seller ? color : '#242134', fontSize: 16 }}>Seller</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => change('Buyer')} style={[myStyle.is3, { backgroundColor: buyer ? bgColor : '#FFFFFF' }]}>
          <Text style={{ alignSelf: 'center', color: buyer ? color : '#242134', fontSize: 16 }}>Buyers</Text>
        </TouchableOpacity>
      </View>
      <FormSearch placeholderText={'Search Name'} />
      <UserCard active={true} number={'9733782373'} onPress={() => setModalVisible(!modalVisible)} />
      <UserCard active={false} />
      <UserCard active={true} number={'9733782373'} />
    </ScrollView>
  )
}
export default User
const myStyle = StyleSheet.create({
  main: {
    backgroundColor: '#EBEBF6',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  modalView: {
    width: '90%',
    height: '78%',
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
  is3: {
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

})