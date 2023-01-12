import { View, Text,Image,TouchableOpacity,StatusBar,StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import VerifyCard from '../Components/VerifyCard'
import FormSearch2 from '../Components/FormSearch2';
const Verification = ({navigation}) => {
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
    <ScrollView contentContainerStyle={myStyle.main}>
        <StatusBar backgroundColor={'#FFFFFF'} barStyle='dark-content'/>
        <Text style={myStyle.head}>Verification Pending</Text>
        <FormSearch2 placeholderText={'Search Name'}/>
        <VerifyCard amount={'2000'} price={'10'} qty={'20 Kg'} name='Sudip Das' bName='Arko Das'  item={'Cauliflower'} />
        <VerifyCard amount={'2000'} price={'10'} qty={'20 Kg'} name='Sudip Das' bName='Arko Das'  item={'Cauliflower'} />
        <VerifyCard amount={'2000'} price={'10'} qty={'20 Kg'} name='Sudip Das' bName='Arko Das'  item={'Cauliflower'} />
    </ScrollView>
  )
}

export default Verification
const myStyle=StyleSheet.create({
  main:{
    backgroundColor: '#EBEBF6',
    alignItems: 'center',
  },
  head: {
    fontFamily: "Poppins-SemiBold",
    alignSelf: 'flex-start',
    margin: 10,
    fontSize: 18,
    color: '#000000'
},
})