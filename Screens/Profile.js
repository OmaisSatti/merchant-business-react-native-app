import { View, Text, Image, TouchableOpacity, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
const Profile = ({ navigation }) => {
  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    }); //
  }, [navigation]);
  return (
    <View style={myStyle.main}>
      {/* //<StatusBar hidden={true} /> */}
      <View style={{ backgroundColor: '#242134', width: '65%',flex:1}}>
        <View style={{ flexDirection: 'row', padding: 5, alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../Images/redBack.png')} />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontFamily: 'Poppins-SemiBold', color: '#A1A1A1' }}>Back</Text>
        </View>

        <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
          <Image style={{ width: 70, height: 70, resizeMode: 'stretch' }} source={require('../Images/fly.png')} />
          <View style={{ paddingLeft: 10 }}>
            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Medium', color: '#A1A1A1' }}>FLYngener</Text>
            <Text style={{ fontSize: 12, fontFamily: 'Poppins-Regular', color: '#A1A1A1' }}>9733782373</Text>
          </View>
        </View>

        <View style={myStyle.empty}></View>
        <TouchableOpacity style={myStyle.menuView} onPress={() => navigation.navigate('UpdateProfile')}>
          <Image source={require('../Images/profile.png')} />
          <Text style={myStyle.menuText}>My Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={myStyle.menuView}  onPress={() => navigation.navigate('Language')}>
          <Image source={require('../Images/language.png')} />
          <Text style={myStyle.menuText}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={myStyle.menuView} onPress={() => navigation.navigate('PaymentReceipt')}>
          <Image source={require('../Images/location.png')} />
          <Text style={myStyle.menuText}>Business Location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={myStyle.menuView} onPress={() => navigation.navigate('MyProduct')}>
          <Image source={require('../Images/product.png')}/>
          <Text style={myStyle.menuText}>My Product</Text>
        </TouchableOpacity>
        <TouchableOpacity style={myStyle.menuView} onPress={() => navigation.navigate('Store')}>
          <Image source={require('../Images/store.png')} />
          <Text style={myStyle.menuText}>Store</Text>
        </TouchableOpacity>
        <TouchableOpacity style={myStyle.menuView} onPress={() => navigation.navigate('Login')}>
          <Image source={require('../Images/logout.png')} />
          <Text style={myStyle.menuText}>Log out</Text>
        </TouchableOpacity>
      </View>
      <Image style={{position: 'absolute', right: 0,width:'30%',height:'100%',resizeMode:'stretch',flex:1}} source={require('../Images/ss.png')} />
    </View>
  )
}
export default Profile
const myStyle = StyleSheet.create({
  main: {
    flex: 1,
  },
  empty: {
    width: '90%',
    borderColor: '#DBDBDB',
    borderWidth: 0.3,
    margin: 5
  },
  menuView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 5
  },
  menuText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#A1A1A1',
    paddingLeft: 10,
    paddingTop: 10
  }
})