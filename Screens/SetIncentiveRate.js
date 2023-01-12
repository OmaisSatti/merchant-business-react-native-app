import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import SimpleInput from '../Components/SimpleInput'
import FormButton from '../Components/FormButton'
const SetIncentiveRate = ({ navigation }) => {
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
        <View style={myStyle.main}>
            <StatusBar backgroundColor={'#FFFFFF'} barStyle='dark-content' />
            <Text style={myStyle.head}>Set Incentive Rate</Text>
            <SimpleInput placeholderText={'From Seller'} />      
            <Text style={[myStyle.ratio,{position:'absolute',left:15,top:80}]}>10%</Text> 
            <SimpleInput placeholderText={'From Buyer'} />
            <Text style={[myStyle.ratio,{position:'absolute',left:15,top:150}]}>8.5%</Text> 
            <FormButton buttonTitle={'Sve'} onPress={() => navigation.navigate('')} />
            <Image style={myStyle.img2} source={require('../Images/rate.png')} />
        </View>
    )
}
export default SetIncentiveRate
const myStyle = StyleSheet.create({
    main: {
        flex:1,
        backgroundColor: '#EBEBF6',
        alignItems: 'center'
    },
    ratio: {
        fontFamily: "Poppins-SemiBold",
        margin: 10,
        marginLeft: 20,
        alignSelf: 'flex-start',
        fontSize: 14,
        color: '#000000'
    },
    head: {
        fontFamily: "Poppins-SemiBold",
        alignSelf: 'flex-start',
        margin: 10,
        marginLeft: 20,
        fontSize: 18,
        color: '#000000'
    },
    img: {
        width: 100,
        height: 100
    },
    img2: {
        width:'100%',
        height: 200,
        resizeMode:'stretch',
        position:'absolute',
        bottom:20
    }
})