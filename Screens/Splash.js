import { View,StyleSheet,Image, StatusBar} from 'react-native'
import React from 'react'
const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('Login');
  }, 3000);
  return (
    <View style={myStyle.container}>
       <StatusBar backgroundColor={'#FFFFFF'} barStyle='dark-content'/>
       <Image style={myStyle.image} source={require('../Images/Splash.png')}/>
    </View>
  )
}
export default Splash
const myStyle=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
      },
      image: {
        width:'100%',
        width:'100%',
        resizeMode:'stretch'
      },
})