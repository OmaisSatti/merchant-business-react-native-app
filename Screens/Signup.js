import { View, Text,StyleSheet,StatusBar, ScrollView} from 'react-native'
import React from 'react'
import FormButton from '../Components/FormButton'
import SimpleInput from '../Components/SimpleInput'
const Signup = ({navigation}) => {
  return (
    <ScrollView scrollEnabled={true} contentContainerStyle={myStyle.container}>
      <StatusBar backgroundColor={'#EBEBF6'} barStyle='dark-content'/>
      <Text style={myStyle.head}>Sign up</Text>
      <Text style={myStyle.para}>Welcome back You've</Text>
      <Text style={[myStyle.para,{marginTop:0}]}> been missed!</Text>
      <SimpleInput placeholder='Marchant Name'/>
      <SimpleInput placeholder='Business Name'/>
      <SimpleInput placeholder='Mobile Numbe'/>
      <SimpleInput placeholder='Create MPIN'/>
      <SimpleInput placeholder='Confirm MPIN'/>
      <FormButton buttonTitle="Next" onPress={()=>navigation.navigate('SelectBusiness')}/>
      <Text style={{color:'#242134',fontSize:16,marginTop:20,fontFamily:'Poppins-Bold'}}>Step -1/4</Text>
      <View style={{flexDirection:'row'}}>
      <Text style={{color:'#6D6D6D',fontSize:16,marginTop:5,fontFamily:'Poppins-Light'}}>Already have an account?</Text>
      <Text style={{color:'#E33224',fontSize:16,marginTop:5,fontFamily:'Poppins-Light'}} 
      onPress={()=>navigation.navigate('Login')}>  Sign In</Text>
      </View>
    </ScrollView>
  )
}
export default Signup
const myStyle=StyleSheet.create({
  container: {
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
      alignSelf:'center',
      fontFamily:'Poppins-Light'
    }
})