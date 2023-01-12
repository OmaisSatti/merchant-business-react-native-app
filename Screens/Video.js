import { View, Text, Image, TouchableOpacity, StatusBar, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import InvoiceCard from '../Components/IncentiveCard';
import { windowHeight, windowWidth } from '../utils/Dimentions'
const Video = ({ navigation }) => {
  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerLeft: () => (<TouchableOpacity onPress={() => navigation.navigate("MyInvoice")}><Image style={{ alignSelf: 'center', width: 20, height: 18, resizeMode: 'stretch', marginTop: 3, marginLeft: 10 }} source={require('../Images/home.png')} /></TouchableOpacity>),
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
      <View style={{padding:5}}>
        <Image style={{ height: windowHeight / 3, resizeMode: 'stretch', width: windowWidth / 1.04 }} source={require('../Images/vid2.png')} />
        <Image style={{ position: 'absolute', top: 70, left: 160 }} source={require('../Images/play.png')} />
        <Text style={{ fontSize: 15, fontFamily: 'Poppins-Medium', position: 'relative', left: 5, top: -35, color: '#FFFFFF' }}>Lorem Ipsum is simply dummy text</Text>
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
        <View>
          <Image style={{ height: windowHeight / 5, resizeMode: 'stretch', width: windowWidth / 2.2 }} source={require('../Images/vid.png')} />
          <Image style={{ position: 'absolute', top: 50, left: 60 }} source={require('../Images/play.png')} />
          <Text style={{ fontSize: 13, fontFamily: 'Poppins-Medium', color: '#000000' }}>Lorem Ipsum is simply...</Text>
        </View>
        <View>
          <Image style={{ height: windowHeight / 5, resizeMode: 'stretch', width: windowWidth / 2.2 }} source={require('../Images/vid.png')} />
          <Image style={{ position: 'absolute', top: 50, left: 60 }} source={require('../Images/play.png')} />
          <Text style={{ fontSize: 13, fontFamily: 'Poppins-Medium', color: '#000000' }}>Lorem Ipsum is simply...</Text>
        </View>
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
        <View>
          <Image style={{ height: windowHeight / 5, resizeMode: 'stretch', width: windowWidth / 2.2 }} source={require('../Images/vid.png')} />
          <Image style={{ position: 'absolute', top: 50, left: 60 }} source={require('../Images/play.png')} />
          <Text style={{ fontSize: 13, fontFamily: 'Poppins-Medium', color: '#000000' }}>Lorem Ipsum is simply...</Text>
        </View>
        <View>
          <Image style={{ height: windowHeight / 5, resizeMode: 'stretch', width: windowWidth / 2.2 }} source={require('../Images/vid.png')} />
          <Image style={{ position: 'absolute', top: 50, left: 60 }} source={require('../Images/play.png')} />
          <Text style={{ fontSize: 13, fontFamily: 'Poppins-Medium', color: '#000000' }}>Lorem Ipsum is simply...</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Video
const myStyle = StyleSheet.create({
  main: {
    backgroundColor: '#EBEBF6'
  }
})