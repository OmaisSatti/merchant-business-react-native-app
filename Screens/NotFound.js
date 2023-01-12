import { View, Text,Image,TouchableOpacity,StatusBar} from 'react-native'
import React from 'react'

const NotFound = ({navigation}) => {
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
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#EBEBF6'}}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle='dark-content'/>
      <Image style={{resizeMode:'stretch',width:'90%',height:'50%'}} source={require('../Images/not.png')}/>
      <Text style={{fontSize:25,fontFamily:'Poppins-SemiBold',color:'#E33224'}}>Data Not Found</Text>
    </View>
  )
}

export default NotFound