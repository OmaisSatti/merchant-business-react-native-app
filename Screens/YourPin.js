import { View, Text, Image, StyleSheet,StatusBar,TouchableOpacity} from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../utils/Dimentions'
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
            <Image style={myStyle.img} source={require('../Images/lock.png')} />
            <View style={myStyle.smallCard}>
                <Text style={{ fontSize: 20, fontFamily: 'Poppins-SemiBold', color: '#000000' }}>Your MPIN Is 5848</Text>
                <Text style={{paddingLeft:12,fontSize: 13, fontFamily: 'Poppins-Regular', color: '#6E6E6E' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            </View>
        </View>
    )
}
export default YourPin
const myStyle = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        padding:20,
        backgroundColor:'#EBEBF6'
    },
    img: {
        width: '60%',
        height: '30%',
        alignSelf: 'center',
        resizeMode: 'stretch'
    },
    smallCard: {
        height: windowHeight /5,
        width: windowWidth / 1.2,
        backgroundColor: '#FFFFFF',
        shadowColor: '#EBEBF6',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        borderRadius: 10,
        padding:20,
        paddingLeft: 10,
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,
    },
})