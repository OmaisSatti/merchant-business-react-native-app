import { View, Text, Image, TouchableOpacity, StatusBar, StyleSheet, ScrollView, FlatList } from 'react-native'
import React from 'react'
import SimpleInput from '../Components/SimpleInput'
import FormButton from '../Components/FormButton'
import { Button } from 'react-native-paper';
import VerifyCard from '../Components/VerifyCard'
import { windowHeight, windowWidth } from '../utils/Dimentions'
const StartAuction = ({ navigation }) => {
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
      <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 10, margin: 5 }}>
        <Image source={require('../Images/live.png')} />
        <Text style={myStyle.head}>On Live</Text>
      </View>
      <View>
        <Text style={[myStyle.txt2, { paddingLeft: 15 }]}>Seller</Text>
        <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 10, margin: 5 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Button style={{borderRadius:0,marginLeft:5}} buttonColor='#1D8136' mode="contained">Sudip Das</Button>
            <Button style={{borderRadius:0,marginLeft:5}} buttonColor='#FFFFFF' textColor='#000000' mode="contained">Sudip Das</Button>
            <Button style={{borderRadius:0,marginLeft:5}} buttonColor='#FFFFFF' textColor='#000000' mode="contained">Sudip Das</Button>
          </ScrollView>
        </View>
      </View>
      <View>
        <Text style={[myStyle.txt2, { paddingLeft: 15 }]}>Buyer</Text>
        <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 10, margin: 5 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Button style={{borderRadius:0,marginLeft:5}} buttonColor='#FFFFFF' textColor='#000000' mode="contained">Arko Mndal</Button>
          <Button style={{borderRadius:0,marginLeft:5}} buttonColor='#1D8136' mode="contained">Arko Mndal</Button>
          <Button style={{borderRadius:0,marginLeft:5}} buttonColor='#FFFFFF' textColor='#000000' mode="contained">Arko Mndal</Button>
          </ScrollView>
        </View>
      </View>
      <View>
        <Text style={[myStyle.txt2, { paddingLeft: 15 }]}>Item</Text>
        <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 10, margin: 5 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Button style={{borderRadius:0,marginLeft:5}} buttonColor='#1D8136' mode="contained">Mobile</Button>
            <Button style={{borderRadius:0,marginLeft:5}} buttonColor='#FFFFFF' textColor='#000000' mode="contained">Cauliflower</Button>
            <Button style={{borderRadius:0,marginLeft:5}} buttonColor='#FFFFFF' textColor='#000000' mode="contained">Mobile</Button>
            <Button style={{borderRadius:0,marginLeft:5}} buttonColor='#FFFFFF' textColor='#000000' mode="contained">Cauliflower</Button>
          </ScrollView>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 10 }}>
        <Text style={myStyle.para}>Auction No:</Text>
        <Text style={[myStyle.para, { color: '#1D8136' }]}> #1245689</Text>
      </View>
      <SimpleInput placeholderText={'Seller Name'} />
      <SimpleInput placeholderText={'Buyer Name'} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={myStyle.small}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={myStyle.txt}>Quantity</Text>
          </View>
        </View>
        <View style={myStyle.small}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={[myStyle.txt2, { color: '#000000' }]}>KG</Text>
            <Image style={{ width: 20, height: 20, resizeMode: 'stretch' }} source={require('../Images/path.png')} />
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={myStyle.small}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[myStyle.txt2, { color: '#1D8136' }]}>₹</Text>
            <Text style={myStyle.txt}> Price/Unit</Text>
          </View>
        </View>
        <View style={myStyle.small}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[myStyle.txt2, { color: '#1D8136' }]}>₹</Text>
            <Text style={myStyle.txt}> Amount</Text>
          </View>
        </View>
      </View>
      <SimpleInput placeholderText={'Product'} />
      <FormButton buttonTitle={'Done'} />
      <Text style={[myStyle.head, { color: '#000000', marginLeft: 15 }]}>Verify Now</Text>
      <VerifyCard amount={'2000'} price={'10'} qty={'20 Kg'} name='Sudip Das' bName='Arko Das' item={'Cauliflower'} />
      <VerifyCard amount={'2000'} price={'10'} qty={'20 Kg'} name='Sudip Das' bName='Arko Das' item={'Cauliflower'} />
    </ScrollView>
  )
}

export default StartAuction
const myStyle = StyleSheet.create({
  main: {
    backgroundColor: '#EBEBF6',
    alignItems: 'center',
  },
  btn:{
    borderRadius:10,
    height:30
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
  head: {
    fontFamily: "Poppins-SemiBold",
    alignSelf: 'flex-start',
    margin: 10,
    fontSize: 18,
    color: '#E33224'
  },
  para: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: '#000000'
  },
})