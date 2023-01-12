import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import NotificationCard from '../Components/NotificationCard'
const Notification = ({ navigation }) => {
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
      <Text style={myStyle.head}>Notification</Text>
      <NotificationCard amount={'₹ 2000'} bgColor='#FFFFFF'/>
      <NotificationCard amount={'₹ 2000'} bgColor='#1D8136' color='#FFFFFF'/>
      <NotificationCard amount={'₹ 2000'} bgColor='#FFFFFF' msg={true} textColor='#E33224'/>
      <NotificationCard amount={'₹ 2000'} bgColor='#1D8136' color='#FFFFFF'/>
    </ScrollView>
  )
}

export default Notification
const myStyle = StyleSheet.create({
  main: {
    backgroundColor: '#EBEBF6'
  },
  head: {
    fontFamily: "Poppins-SemiBold",
    alignSelf: 'flex-start',
    margin: 20,
    fontSize: 18,
    color: '#000000'
  },
})