import { View, Text, Image, StyleSheet,TouchableOpacity,StatusBar} from 'react-native'
import React from 'react'
import FormButton from '../Components/FormButton'
const YourPin = ({ navigation }) => {
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
            <Image style={myStyle.img} source={require('../Images/connection.png')} />
            <Text style={{margin:10,color:'#E33224',fontSize:20,fontFamily:'Poppins-SemiBold'}}>No Internet Connection</Text>
            <FormButton buttonTitle={'Retry Now'} onPress={()=>navigation.navigate('ServerError')}/>
        </View>
    )
}
export default YourPin
const myStyle = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#EBEBF6',
        justifyContent:'center'
    },
    img: {
        width: '50%',
        height: '40%',
        alignSelf: 'center',
        resizeMode: 'stretch'
    },
})