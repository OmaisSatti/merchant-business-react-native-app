import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import FormSearch3 from '../Components/FormSearch3'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import IncentiveCard from '../Components/IncentiveCard'
const Auction = ({ navigation }) => {
  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Back',
      headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()}><Image style={{ alignSelf: 'center', width: 20, height: 18, resizeMode: 'stretch', marginTop: 3 }} source={require('../Images/goBack.png')} /></TouchableOpacity>),
      headerRight: () => (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={()=>navigation.navigate('AuctionsDetails')}>
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
      <Text style={myStyle.head}>Total Auction</Text>
      <View style={myStyle.smallCard}>
        <View>
          <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular' }}>Total Balance</Text>
          <Text style={{ fontSize: 28, color: '#000000', fontFamily: 'Poppins-SemiBold' }}>50</Text>
        </View>
        <View>
          <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular' }}>Till Date:</Text>
          <Text style={{ fontSize:16, color: '#000000', fontFamily: 'Poppins-Medium' }}>09 Sept 2022</Text>
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
export default Auction
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
    justifyContent:'space-between',
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