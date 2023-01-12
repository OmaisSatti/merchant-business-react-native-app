import { View, Text, Image, StyleSheet, TouchableOpacity,StatusBar} from 'react-native'
import React from 'react'
const Successfull = ({ navigation }) => {
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
            <Image style={myStyle.img} source={require('../Images/mobile.png')} />
            <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ margin: 5, marginTop: 10, marginBottom: 0, fontSize: 18, fontFamily: 'Poppins-SemiBold', color: '#1D8136' }}>Your Payment is Successfull</Text>
                <Text style={{ margin: 5, paddingLeft: 12, fontSize: 11, fontFamily: 'Poppins-Regular', color: '#6E6E6E' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                <TouchableOpacity onPress={()=>navigation.replace('MyOrder')}>
                    <Text style={{ marginTop: 15, fontSize: 16, fontFamily: 'Poppins-SemiBold', color: '#E33224' }}>Back to Home</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}
export default Successfull
const myStyle = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#EBEBF6'
    },
    img: {
        width: '65%',
        height: '35%',
        alignSelf: 'center',
        resizeMode: 'stretch'
    }
})