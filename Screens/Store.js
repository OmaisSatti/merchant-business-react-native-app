import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Image,StatusBar} from 'react-native'
import React, { useState } from 'react'
import StoreCard from '../Components/StoreCard'
import { RadioButton } from 'react-native-paper';
const Store = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = React.useState('first');
  const action=()=>{
    setModalVisible(!modalVisible)
    navigation.navigate('Payment')
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
      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={myStyle.centeredView}>
          <View style={myStyle.modalView}>
            <View style={{ flexDirection: 'row', marginLeft: 10, alignItems: 'center' }}>
              <Image style={{ height: 30, width: 30, resizeMode: 'stretch' }} source={require('../Images/Calender.png')} />
              <Text style={{ fontFamily: 'Poppins-Regular', color: '#000000', fontSize: 14 }}>02/09/2022</Text>
            </View>
            <View style={{ borderWidth: 0.3, borderColor: 'gray', width: '100%', marginBottom: 10 }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={{ fontSize: 18, color: '#000000', fontFamily: 'Poppins-Medium' }}>Cauliflower</Text>
              <Text style={{fontSize:14,fontFamily: 'Poppins-Medium', color: '#6E6E6E' }}> 1Pic.</Text>
              </View>
              <View style={{flexDirection:'row'}}>
              <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#1D8136' }}>₹</Text>
              <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#000000' }}> 2000</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={{ color: '#6E6E6E', fontFamily: 'Poppins-Regular' }}>Delivery Charges</Text>
              <View style={{flexDirection:'row'}}>
              <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#1D8136' }}>₹</Text>
              <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#000000' }}> 200</Text>
              </View>
            </View>
            <View style={{ borderWidth: 0.3, borderColor: 'gray', width: '100%', marginBottom: 10 }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={{ color: '#6E6E6E', fontFamily: 'Poppins-SemiBold', color: '#000000' }}>Total</Text>
              <View style={{flexDirection:'row'}}>
              <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#1D8136' }}>₹</Text>
              <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#000000' }}> 2200</Text>
              </View>
            </View>
            <View style={{ borderWidth: 0.3, borderColor: 'gray', width: '100%', marginBottom: 10 }}></View>

            <View style={{flexDirection:'row'}}>
            <RadioButton color='#1D8136' value="second" status={checked === 'first' ? 'checked' : 'unchecked'} onPress={() => setChecked('first')} /><Text style={{fontFamily:'Poppins-SemiBold',fontSize:14,color:'#000000',alignSelf:'center'}}>COD</Text>
              <RadioButton  color='#1D8136' value="second" status={checked === 'second' ? 'checked' : 'unchecked'} onPress={() => setChecked('second')} /><Text style={{fontFamily:'Poppins-SemiBold',fontSize:14,color:'#000000',alignSelf:'center'}}>Online Payment</Text>
            </View>

            <View style={{ borderWidth: 0.3, borderColor: 'gray', width: '100%', marginBottom: 10}}></View>
            <TouchableOpacity onPress={()=>navigation.navigate('Payment')} style={{margin:10,alignSelf: 'center', justifyContent: 'center', borderRadius: 10, height: '14%', width: '50%', backgroundColor: '#E33224' }}>
              <Text style={{ fontFamily: 'Poppins-Semibold', alignSelf: 'center', color: '#FFFFFF' }}>Place order</Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', margin: 20 }}>
        <Text style={myStyle.head}>Store</Text>
        <TouchableOpacity onPress={() => navigation.navigate('MyProduct')}>
          <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium', alignSelf: 'center', color: '#1D8136' }}>View Order</Text>
        </TouchableOpacity>
      </View>
      <StoreCard img={require('../Images/gobi.png')} title={'Cauliflower'} amount={'₹ 2000'} onPress={() => setModalVisible(!modalVisible)} />
      <StoreCard img={require('../Images/tmatar.png')} title={'Tomato'} amount={'₹ 2000'} />
      <StoreCard img={require('../Images/gobi.png')} title={'Cauliflower'} amount={'₹ 2000'} />
    </ScrollView>
  )
}
export default Store
const myStyle = StyleSheet.create({
  container: {
    backgroundColor: '#EBEBF6',
  },
  head: {
    fontFamily: "Poppins-SemiBold",
    alignSelf: 'flex-start',
    fontSize: 20,
    color: '#000000'

  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
    backgroundColor: '#EBEBF6'
  },
  modalView: {
    width: '90%',
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
})