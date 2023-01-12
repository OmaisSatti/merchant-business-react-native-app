import { View, Text, Image, TouchableOpacity, StatusBar, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ReviewPayment from '../Components/ReviewPayment'
import FormSearch2 from '../Components/FormSearch2';
import { windowHeight, windowWidth } from '../utils/Dimentions'
import AuctionDetailsCard from '../Components/AuctionDetailsCard'
const Revivew = ({ navigation }) => {
  const [list, setList] = useState(true)
  const [color, setColor] = useState('#FFFFFF')
  const [bgColor, setBgColor] = useState('#1D8136')
  const change = () => {
    setList(!list);
  }
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
    <ScrollView contentContainerStyle={myStyle.main}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle='dark-content' />
      <Text style={myStyle.head}>Review</Text>
      <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 10 }}>
        <Text style={myStyle.para}>Auction No:</Text>
        <Text style={[myStyle.para, { color: '#1D8136' }]}> #1245689</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={myStyle.small}>
          <Text style={myStyle.txt}>Date</Text>
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ width: 20, height: 20, resizeMode: 'stretch' }} source={require('../Images/Calender.png')} />
            <Text style={{ color: '#000000', fontSize: 14, fontFamily: 'Poppins-Medium' }}>02/09/2022</Text>
          </View>
        </View>
        <View style={myStyle.small}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={[myStyle.txt2, { color: '#000000' }]}>Seller</Text>
            <Image style={{ width: 20, height: 20, resizeMode: 'stretch' }} source={require('../Images/path.png')} />
          </View>
        </View>
      </View>
      <FormSearch2 placeholderText={'Search Name'} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={myStyle.small}>
          <Text style={myStyle.txt}>Quantity</Text>
          <Text style={myStyle.txt2}>40</Text>
        </View>
        <View style={myStyle.small}>
          <Text style={myStyle.txt2}>KG</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={myStyle.small}>
          <Text style={myStyle.txt}>Total Amoun</Text>
          <Text style={myStyle.txt2}>₹ 2000</Text>
        </View>
        <View style={myStyle.small}>
          <Text style={myStyle.txt}>Total Auction No</Text>
          <Text style={myStyle.txt2}>10</Text>
        </View>
      </View>
      <Text style={myStyle.head}>Details</Text>
      <View style={myStyle.view3}>
        <TouchableOpacity onPress={() => change()} style={[myStyle.is1, { backgroundColor: list ? bgColor : '#FFFFFF' }]}>
          <Text style={{ alignSelf: 'center', color: list ? color : '#242134', fontSize: 16 }}>Auctions</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => change()} style={[myStyle.is2, { backgroundColor: list ? '#FFFFFF' : bgColor }]}>
          <Text style={{ alignSelf: 'center', color: list ? '#242134' : color, fontSize: 16 }}>Payments</Text>
        </TouchableOpacity>
      </View>
      {list ?
        <>
          <AuctionDetailsCard amount={'2000'} time={'06:30 PM'} name='Sudip Das' date={'09 Sept 2022'} inc={'200'} />
          <AuctionDetailsCard amount={'2000'} time={'06:30 PM'} name='Sudip Das' date={'09 Sept 2022'} inc={'200'} />
        </>
        :
        <>
        <ReviewPayment bName={'Arko Sen'} color={'#1D8136'} time={'06:30 PM'} name='Sudip Das' date={'09 Sept 2022'} mode={'bank'} />
        <ReviewPayment bName={'Arko Sen'}  color={'#1D8136'} time={'06:30 PM'} name='Sudip Das' date={'09 Sept 2022'} mode={'bank'} />
        </>
      }
    </ScrollView>
  )
}

export default Revivew
const myStyle = StyleSheet.create({
  main: {
    backgroundColor: '#EBEBF6',
    alignItems: 'center',
  },
  txt: {
    color: '#A1A1A1',
    fontSize: 12,
    fontFamily: 'Poppins-Regular'
  },
  txt2: {
    color: '#A1A1A1',
    fontSize: 16,
    fontFamily: 'Poppins-Medium'
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
  head: {
    fontFamily: "Poppins-SemiBold",
    alignSelf: 'flex-start',
    margin: 10,
    fontSize: 18,
    color: '#000000'
  },
  view3: {
    flex: 1,
    height: windowHeight / 12,
    width: windowWidth / 1.1,
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
  para: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: '#000000'
  },
  small: {
    height: windowHeight / 11,
    width: windowWidth / 2.38,
    backgroundColor: '#FFFFFF',
    shadowColor: '#EBEBF6',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    margin: 10,
    paddingLeft: 10,
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 10.19,
    elevation: 10,
  },
})