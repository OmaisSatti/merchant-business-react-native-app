import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity,StatusBar} from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const AddLocation = ({navigation}) => {
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
        <View style={{flex:1,backgroundColor: '#EBEBF6', alignItems: 'center' }}>
            <StatusBar backgroundColor={'#FFFFFF'} barStyle='dark-content'/>
            <Image style={myStyle.img} source={require('../Images/map.png')} />
            <View style={myStyle.view}>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <Image source={require('../Images/greentick.png')} />
                    <Text style={{ marginLeft: 10, color: '#000000', fontFamily: 'Poppins-Medium', fontSize: 20 }}>Add Manually</Text>
                </View>
                <TextInput style={myStyle.input} placeholder='Market Name' />
                <View style={{flexDirection: 'row', justifyContent: 'space-between',width:'99%'}}>
                    <TextInput style={myStyle.input2} placeholder='City' />
                    <TextInput style={myStyle.input2} placeholder='Pincode' />
                </View>
                <TextInput style={myStyle.input} numberOfLines={4} textAlignVertical='top' placeholder='Address' multiline={true} />
                <TouchableOpacity style={myStyle.btn} onPress={()=>navigation.navigate('NotFound')}>
                    <Text style={myStyle.btnText}>Add Address Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default AddLocation
const myStyle = StyleSheet.create({
    img: {
        width: '100%',
        height: '30%',
        resizeMode: 'stretch'
    },
    input: {
        margin:6,
        width: '95%',
        height: windowHeight / 11,
        borderRadius: 15,
        paddingLeft: 15,
        backgroundColor: '#FFFFFF',
        borderColor: '#DBDBDB',
        borderWidth: 2,
        fontFamily: 'Poppins-Light',
        placeholderTextColor: '#A1A1A1',
        shadowColor: '#EBEBF6',
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,
    },
    btn: {
        marginTop: 10,
        marginBottom:10,
        width: '93%',
        alignSelf:'center',
        height: windowHeight / 11,
        backgroundColor: '#E33224',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      },
    btnText: {
        color: '#FFFFFF',
        alignSelf: 'center',
        fontSize: RFPercentage(3)
    },
    input2: {
        flex:1,
        margin:5,
        width: '43%',
        height: windowHeight / 11,
        borderRadius: 15,
        paddingLeft: 15,
        backgroundColor: '#FFFFFF',
        borderColor: '#DBDBDB',
        borderWidth: 2,
        fontFamily: 'Poppins-Light',
        placeholderTextColor: '#A1A1A1',
        shadowColor: '#EBEBF6',
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,
    },
    view: {
        height: windowHeight /1.75,
        width: windowWidth / 1.05,
        backgroundColor: '#FFFFFF',
        margin: 10,
        borderRadius: 10,
        padding: 10,
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