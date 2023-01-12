import { View, Text,StyleSheet, TextInput,Image,StatusBar} from 'react-native'
import React from 'react'
import FormButton from '../Components/FormButton'
import {windowHeight, windowWidth} from '../utils/Dimentions'
const Otp = ({navigation}) => {
  return (
    <View style={myStyle.container}>
      <StatusBar backgroundColor={'#EBEBF6'} barStyle='dark-content'/>
      <Image source={require('../Images/Group40478.png')} style={{marginBottom:windowHeight/16}}></Image>
      <Text style={myStyle.para}>Please type the OTP that you have received on your mobile number.</Text>
      <View style={{flexDirection:'row'}}>
      <TextInput style={myStyle.input}/>
      <TextInput style={myStyle.input}/>
      <TextInput style={myStyle.input}/>
      <TextInput style={myStyle.input}/>
      </View>
      <Text style={{color:'#1D8136',alignSelf:'flex-end',marginRight:20,marginTop:10,fontFamily:'Poppins-Bold'}}>Resend OTP</Text>
      <FormButton
        buttonTitle="Login"
        onPress={()=>navigation.navigate('YourPin')}
      />
    </View>
  )
}
export default Otp
const myStyle=StyleSheet.create({
  container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#EBEBF6'
    },
    input:{
      borderWidth:1,
      margin:7,
      width:windowWidth/6,
      height:windowHeight/9,
      paddingLeft:15,
      color:'#A1A1A1',
      backgroundColor:'#FFFFFF',
      borderColor:'#FFFFFF',
      fontFamily:'Poppins-Light',
      shadowColor: '#EBEBF6',
      shadowOffset: {
        width: 0,
        height: 11,
      },
      shadowOpacity: 0.57,
      shadowRadius: 10.19,
      elevation: 10,
    },
    head:{
      fontFamily:'Poppins-Bold',
      fontWeight:'800',
      fontSize:26,
      color:'#242134',
      marginTop:20
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