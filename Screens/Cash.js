import { View, Text, Modal, Image, TouchableOpacity,TextInput,StatusBar, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import CashCard from '../Components/CashCard'
import { RadioButton } from 'react-native-paper';
import DateInput from '../Components/DateInput'
const Cash = ({ navigation }) => {
  const [list, setList] = useState(true)
  const [color, setColor] = useState('#FFFFFF')
  const [bgColor, setBgColor] = useState('#1D8136')
  const [checked, setChecked] = React.useState('first');
  const [modalVisible, setModalVisible] = useState(false);
  const change = () => {
    setList(!list);
  }
  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()}><Image style={{ alignSelf: 'center', width: 20, height: 18, resizeMode: 'stretch', marginTop: 3,marginLeft:10}} source={require('../Images/home.png')} /></TouchableOpacity>),
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
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={myStyle.centeredView}>
          <View style={myStyle.modalView}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ position: 'absolute', right: 10, top: 10 }}>
              <Image source={require('../Images/close2.png')} />
            </TouchableOpacity>
            <Text style={{ color: '#000000', alignSelf: 'center', fontSize:20, fontFamily: 'Poppins-SemiBold' }}>Hand Cash</Text>
            <View style={{ borderWidth: 0.3, borderColor: 'gray', width: '100%', marginBottom: 10, marginTop: 10 }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row' }}>
                <RadioButton color='#1D8136' value="first" status={checked === 'first' ? 'checked' : 'unchecked'} onPress={() => setChecked('first')} /><Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#000000', alignSelf: 'center' }}>Add Hand Cash</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <RadioButton color='#1D8136' value="second" status={checked === 'second' ? 'checked' : 'unchecked'} onPress={() => setChecked('second')} /><Text style={{ fontFamily: 'Poppins-Medium', fontSize: 14, color: '#000000', alignSelf: 'center' }}>Withdraw Cash</Text>
              </View>
            </View>
            <View style={{ borderWidth: 0.3, borderColor: 'gray', width: '100%', marginBottom: 10, marginTop: 10 }}></View>
            <DateInput img={require('../Images/Calender.png')} placeholderText={'04 Sept 2022'} />
            <TextInput style={myStyle.input} placeholder={'₹ Enter Amount'} />
            <TextInput style={myStyle.input} placeholder={'Description'} />
            <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center', borderRadius: 15, width: '100%', height: '16%', backgroundColor: '#E33224' }} onPress={() =>navigation.navigate('AddBankCash')}>
              <Text style={{ color: '#FFFFFF', alignSelf: 'center', fontFamily: 'Poppins-Medium' }}>Add Cash</Text>
            </TouchableOpacity>
          </View>

        </View>
      </Modal>
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
            <Text style={{ fontSize: 28, color: '#000000', fontFamily: 'Poppins-SemiBold' }}> 5500</Text>
          </View>
          <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular' }}>Hand Balance</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={()=>navigation.navigate('ManageCash')}>
            <Image style={{ width: 90, height: 90, resizeMode: 'stretch' }} source={require('../Images/in1.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
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
        <Text style={{ fontSize: 16, color: '#000000', fontFamily: 'Poppins-SemiBold', paddingTop: 10}}>To</Text>
        <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#FFFFFF', width: windowWidth / 2.4, height: windowHeight / 13, justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
          <Image style={{ resizeMode: 'stretch', width: 20, height: 20 }} source={require('../Images/Calender.png')} />
          <Text style={{ fontFamily: 'Poppins-Semibold', alignSelf: 'center', color: '#000000', fontSize: 14 }}>10 Sept 2022</Text>
        </TouchableOpacity>
      </View>
      <CashCard type={'Cash Credit'} date={'9 Sept 2022'} amount={' 500'} color={'#1D8136'} amColor={'#000000'} />
      <CashCard type={'Incentive Credit'} date={'9 Sept 2022'} amount={' 320'} color={'#1D8136'} amColor={'#000000'} />
      <CashCard type={'Expense Debit'} date={'9 Sept 2022'} amount={' 800'} color={'#E33224'} amColor={'#E33224'} />
      <CashCard type={'Cash Credit'} date={'9 Sept 2022'} amount={' 500'} color={'#1D8136'} amColor={'#000000'} />
      <CashCard type={'Incentive Credit'} date={'9 Sept 2022'} amount={' 320'} color={'#1D8136'} amColor={'#000000'} />
      <CashCard type={'Expense Debit'} date={'9 Sept 2022'} amount={' 800'} color={'#E33224'} amColor={'#E33224'} />
    </ScrollView>
  )
}
export default Cash
const myStyle = StyleSheet.create({
  container: {
    backgroundColor: '#EBEBF6',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    paddingTop:20,
    backgroundColor: 'rgba(0,0,0,0.8)'
  },
  input: {
    marginTop:5,
    marginBottom:5,
    borderColor: '#DBDBDB',
    paddingLeft: 10,
    width: windowWidth / 1.2,
    height: windowHeight / 12,
    borderRadius: 10,
    color: '#A1A1A1',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Poppins-Light',
    borderWidth: 1
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
  modalImg: {
    width: windowWidth / 3,
    height: windowHeight / 7,
    margin: 10,
    resizeMode: 'stretch'
  },
})