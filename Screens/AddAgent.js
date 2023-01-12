import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import SimpleInput from '../Components/SimpleInput'
import FormButton from '../Components/FormButton'
import { windowHeight, windowWidth } from '../utils/Dimentions'
const AddAgent = ({ navigation }) => {
    React.useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Back',
            headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()}><Image style={{ alignSelf: 'center', width: 20, height: 18, resizeMode: 'stretch', marginTop: 3 }} source={require('../Images/goBack.png')} /></TouchableOpacity>),
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
            <StatusBar backgroundColor={'#FFFFFF'} barStyle='dark-content' />
            <Text style={myStyle.head}>Add Agent</Text>
            <SimpleInput placeholderText={'Name'} />
            <SimpleInput placeholderText={'Mobile Number'} />
            <SimpleInput placeholderText={'Create MPIN'} />
            <SimpleInput placeholderText={'Confirm MPIN'} />
            <View style={{flexDirection:'row',alignItems:'center',alignSelf:'flex-start',marginLeft:20}}>
                <Image style={myStyle.img} source={require('../Images/wrong.png')} />
                <TouchableOpacity style={myStyle.view3}>
                    <Image source={require('../Images/greenCem.png')} />
                    <Text>Add Photo</Text>
                </TouchableOpacity>
            </View>
            <FormButton buttonTitle={'Save'} onPress={() => navigation.navigate('SetIncentiveRate')} />
            <Image style={myStyle.img2} source={require('../Images/mix.png')} />
        </ScrollView>
    )
}
export default AddAgent
const myStyle = StyleSheet.create({
    main: {
        backgroundColor: '#EBEBF6',
        alignItems: 'center'
    },
    head: {
        fontFamily: "Poppins-SemiBold",
        alignSelf: 'flex-start',
        margin: 10,
        marginLeft: 20,
        fontSize: 18,
        color: '#000000'
    },
    view3: {
        height: windowHeight /6,
        width:windowWidth/3,
        margin: 10,
        shadowColor: '#EBEBF6',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'#FFFFFF',
        shadowOffset: {
          width: 0,
          height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,
      },
      img:{
        width:100,
        height:100
      },
      img2:{
        width:200,
        height:200
      }
})