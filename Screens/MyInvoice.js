import { View, Text, StyleSheet, ScrollView,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import MyInvoiceCard from '../Components/MyInvoiceCard';
import FormSearch3 from '../Components/FormSearch3';
const MyInvoice = ({navigation}) => {
    React.useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Back',
            headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()}><Image style={{ width: 20, height: 18, resizeMode: 'stretch'}} source={require('../Images/goBack.png')} /></TouchableOpacity>),
            headerRight: () => (
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Image style={{ width: 20, height: 22, resizeMode: 'stretch', margin: 8 }} source={require('../Images/bell.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('User')}>
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
        <ScrollView contentContainerStyle={{ backgroundColor: '#EBEBF6' }}>
            <Text style={myStyle.head}>Invoice</Text>
            <View style={{ flexDirection: 'row', alignItems: 'baseline',justifyContent:'space-around'}}>
                <FormSearch3 placeholderText='Search' />
                <View style={myStyle.filter}>
                    <Image style={{ width: '40%', height: '40%', alignSelf: 'center', resizeMode: 'stretch', marginLeft: 10 }} source={require('../Images/f.png')} />
                    <Text style={{ marginTop: 20, color: '#FFFFFF', fontFamily: 'Poppins-Medium', fontSize: 14 }}>All</Text>
                </View>
            </View>
            <MyInvoiceCard mode={'Bank'}/>
            <MyInvoiceCard mode={'Cash'}/>
            <MyInvoiceCard mode={'Bank'}/>
        </ScrollView>
    )
}
export default MyInvoice
const myStyle = StyleSheet.create({
    filter: {
        marginTop: 10,
        marginBottom: 10,
        width: windowWidth / 5,
        height: windowHeight / 12,
        borderRadius: 15,
        flexDirection: 'row',
        marginLeft: windowWidth / 30,
        backgroundColor: '#1D8136',
        color: '#A1A1A1',
        borderRadius: 10,
        fontFamily: 'Poppins-Light',
        shadowColor: '#EBEBF6',
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10.19,
        elevation: 10,

    },
    head: {
        fontFamily: "Poppins-SemiBold",
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginTop: 10,
        fontSize: 18,
        color: '#000000'
    },
})
