import { View, Text,StyleSheet,Image,TouchableOpacity,StatusBar} from 'react-native'
import React from 'react'
import FormInputNew from '../Components/FormInputNew'
import FormInput2 from '../Components/FormInput2'
import SimpleInput from '../Components/SimpleInput'
import FormButton from '../Components/FormButton'
const AddProduct = ({navigation}) => {
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
      <Text style={myStyle.head}>Add Product</Text>
      <SimpleInput placeholderText={'Product Name'}/>
      <SimpleInput placeholderText={'Price / Unit'}/>
      <FormInput2 placeholderText={'Unit'} color={'#A1A1A1'} fontSize={13}/>
      <FormInputNew img={require('../Images/gallery.png')} placeholderText={'Picture'}/>
      <FormButton buttonTitle={'Save'} onPress={()=>navigation.goBack()}/>
    </View>
  )
}

export default AddProduct
const myStyle=StyleSheet.create({
  main:{
    flex:1,
    backgroundColor: '#EBEBF6',
    alignItems:'center'
  },
  head: {
    fontFamily: "Poppins-SemiBold",
    alignSelf: 'flex-start',
    margin:10,
    marginLeft:20,
    fontSize: 18,
    color: '#000000'
},
})