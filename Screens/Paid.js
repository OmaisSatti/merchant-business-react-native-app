import { View, Text, StyleSheet, Image, ScrollView,TouchableOpacity,StatusBar} from 'react-native'
import React from 'react'
import FormSearch2 from '../Components/FormSearch2'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import InvoiceCard from '../Components/InvoiceCard'
const Paid = ({navigation}) => {
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
        <ScrollView contentContainerStyle={myStyle.container}>
           <StatusBar backgroundColor={'#FFFFFF'} barStyle='dark-content'/>
            <Text style={myStyle.head}>Paid</Text>
            <View style={myStyle.smallCard}>
                <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular' }}>Total Paid</Text>
                <Text style={{ fontSize: 32, color: '#E33224', fontFamily: 'Poppins-SemiBold' }}>₹ 50,1250</Text>
            </View>
            <FormSearch2 placeholderText={'Search Name'} />
            <InvoiceCard color={'#E33224'} time={'06:30 PM'} name='Sudip Das' date={'09 Sept 2022'} mode={'bank'}/> 
            <InvoiceCard color={'#E33224'} time={'06:30 PM'} name='Sudip Das' date={'09 Sept 2022'} mode={'cash'}/> 
        </ScrollView>
    )
}
export default Paid
const myStyle = StyleSheet.create({
    container: {
        backgroundColor: '#EBEBF6',
        alignItems: 'center'
    },
    smallCard: {
        height: windowHeight / 7,
        width: windowWidth / 1.1,
        backgroundColor: '#FFFFFF',
        shadowColor: '#EBEBF6',
        borderRadius: 10,
        padding: 5,
        paddingLeft: 10,
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
        margin: 20,
        fontSize: 18,
        color: '#000000'
    },
})