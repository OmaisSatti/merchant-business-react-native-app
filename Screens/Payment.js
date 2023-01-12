import { View, Text, StyleSheet, Image,TextInput,TouchableOpacity,StatusBar} from 'react-native'
import React from 'react'
import FormButton from '../Components/FormButton'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import SimpleInput from '../Components/SimpleInput'
const Payment = ({ navigation }) => {
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
        <View style={myStyle.container}>
            <StatusBar backgroundColor={'#FFFFFF'} barStyle='dark-content'/>
            <View style={{ flexDirection: 'row' }}>
                <View style={myStyle.view}>
                    <Image source={require('../Images/Group39738.png')}></Image>
                    <Text style={myStyle.viewText}>Credit/Debit Card</Text>
                </View>
                <View style={[myStyle.view, { backgroundColor: '#FFFFFF' }]}>
                    <Image source={require('../Images/Group39740.png')}></Image>
                    <Text style={[myStyle.viewText, { color: '#242134' }]}>Pay with UPI</Text>
                </View>
            </View>
            <SimpleInput placeholder='Card Number' />
            <SimpleInput placeholder='Card Holder Name' />
            <View style={{ flexDirection: 'row' }}>
                <TextInput style={myStyle.input2} placeholder='Expiry Date' placeholderTextColor={'#A1A1A1'}></TextInput>
                <TextInput style={myStyle.input2} placeholderTextColor={'#A1A1A1'} placeholder='CVV'></TextInput>
            </View>
            <FormButton buttonTitle="Submit" onPress={() => navigation.navigate('Successfull')} />
        </View>
    )
}
export default Payment
const myStyle = StyleSheet.create({
    container: {
        flex:1,
        paddingTop:20,
        alignItems: 'center',
        backgroundColor: '#EBEBF6',
    },
    view: {
        height: windowHeight / 7,
        width: windowWidth / 2.4,
        backgroundColor: '#1D8136',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        shadowColor: '#EBEBF6',
        shadowOffset: {
          width: 0,
          height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,
    },
    viewText: {
        marginTop: 8,
        color: '#FFFFFF',
        fontFamily: 'Poppins-Medium'
    },
    input2: {
        margin: 10,
        width: windowWidth / 2.35,
        height: windowHeight / 11,
        borderRadius: 15,
        paddingLeft: 15,
        color: '#A1A1A1',
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        fontFamily: 'Poppins-Regular',
        shadowColor: '#EBEBF6',
        shadowOffset: {
          width: 0,
          height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,
    },
})