import { View, Text,StyleSheet,StatusBar,Image} from 'react-native'
import React from 'react'
import FormButton from '../Components/FormButton'
import {windowHeight, windowWidth} from '../utils/Dimentions'
import SimpleInput from '../Components/SimpleInput'
const GetOtp = ({navigation}) => {
  return (
    <View style={myStyle.container}>
      <StatusBar backgroundColor={'#EBEBF6'} barStyle='dark-content'/>
      <Image source={require('../Images/Group40478.png')} style={{marginBottom:windowHeight/16}}></Image>
      <Text style={myStyle.head}>Hello Again!</Text>
      <Text style={myStyle.para}>Enter your registered mobile Phone to receive the OTP.</Text>
      <SimpleInput placeholder='Your mobile number'/>
      <FormButton
        buttonTitle="Get OTP"
        onPress={()=>navigation.navigate('Otp')}
      />
    </View>
  )
}
export default GetOtp
const myStyle=StyleSheet.create({
  container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#EBEBF6'
    },
    head:{
      fontFamily:'Poppins-Bold',
      fontWeight:'800',
      fontSize:26,
      color:'#242134',
      marginTop:10
    },
    para:{
      color:'#6D6D6D',
      fontSize:16,
      marginTop:10,
      padding:20,
      alignSelf:'center',
      fontFamily:'Poppins-Medium'
    }
})