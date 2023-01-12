import { View, Text,Image,StyleSheet,TouchableOpacity,StatusBar} from 'react-native'
import React from 'react'
import FormButton from '../Components/FormButton'
import FormInputNew from '../Components/FormInputNew'
const ForgetPassword = ({navigation}) => {
  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Back',
      headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()}><Image style={{alignSelf:'center',width: 20, height: 18, resizeMode: 'stretch',marginTop:3}} source={require('../Images/goBack.png')} /></TouchableOpacity>),
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
    <View style={myStyle.main}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle='dark-content'/>
      <Text style={{fontSize:23,fontFamily:'Poppins-SemiBold',color:'#000000'}}>Forgot Password?</Text>
      <Text style={{fontSize:15,fontFamily:'Poppins-Regular',color:'#6E6E6E'}}>Don't worry! Its happens. Please enter the address associated with your account.</Text>
      <Image style={myStyle.img} source={require('../Images/forget.png')}/>
      <FormInputNew placeholderText={'Mobile Number'} img={require('../Images/phone.png')}/>
      <FormButton buttonTitle={'Verify Now'} onPress={()=>navigation.navigate('GetOtp')}/>
    </View>
  )
}
export default ForgetPassword
const myStyle=StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#EBEBF6',
        justifyContent:'center'
    },
    img:{
        width:'55%',
        height:'40%',
        alignSelf:'center',
        resizeMode:'stretch'
    }
})