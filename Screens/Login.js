import { View, Text, StyleSheet, TouchableOpacity,StatusBar} from 'react-native'
import React from 'react'
import FormButton from '../Components/FormButton'
import FormInput from '../Components/FormInput'
import SimpleInput from '../Components/SimpleInput'
const Login = ({ navigation }) => {
  return (
    <View style={myStyle.container}>
      <StatusBar backgroundColor={'#EBEBF6'} barStyle='dark-content'/>
      <Text style={myStyle.head}>Login</Text>
      <SimpleInput placeholder='Enter Mobile Number' />
      <FormInput placeholder='Enter 4 Digit MPIN' />
      <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => navigation.navigate('ForgetPassword')}>
        <Text style={{ color: '#1D8136', marginRight: 20, marginTop: 10, fontFamily: 'Poppins-Light' }}>Forget Mpin?</Text>
      </TouchableOpacity>
      <FormButton
        buttonTitle="Sign In"
        onPress={() => navigation.replace('MyTabs')}
      />
      <Text style={{ color: '#1D8136', marginRight: 20, marginTop: 10, fontFamily: 'Poppins-Light' }} onPress={() => navigation.navigate('GetOtp')}>Login Via OTP</Text>

      <TouchableOpacity style={{marginTop: 40}} onPress={() => navigation.navigate('Signup')}>
        <Text style={{ color: '#6D6D6D', fontSize: 16, fontFamily: 'Poppins-Light' }}>Don't have an account?</Text>
        <Text style={{ color: '#E33224', fontSize: 16, fontFamily: 'Poppins-Light' }}
        >Register as new Marchant </Text>
      </TouchableOpacity>

    </View>
  )
}
export default Login
const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBEBF6'
  },
  head: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '800',
    fontSize: 26,
    color: '#242134',
    marginBottom: 20
  },
  para: {
    color: '#6D6D6D',
    fontSize: 16,
    marginBottom: 10,
    padding: 30,
    alignSelf: 'center',
    fontFamily: 'Poppins-Medium'
  }
})