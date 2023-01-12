import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity,StatusBar} from 'react-native'
import React from 'react'
import AuctionDetailsCard from '../Components/AuctionDetailsCard'
const AuctionsDetails = ({navigation}) => {
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
            <Text style={myStyle.head}>Auctions Details</Text>
            <AuctionDetailsCard amount={'2000'} time={'06:30 PM'} name='Sudip Das' date={'09 Sept 2022'} inc={'200'} />
            <AuctionDetailsCard amount={'2000'} time={'06:30 PM'} name='Sudip Das' date={'09 Sept 2022'} inc={'200'} />
            <AuctionDetailsCard amount={'2000'} time={'06:30 PM'} name='Sudip Das' date={'09 Sept 2022'} inc={'200'} />
            <AuctionDetailsCard amount={'2000'} time={'06:30 PM'} name='Sudip Das' date={'09 Sept 2022'} inc={'200'} />
        </ScrollView>
    )
}
export default AuctionsDetails
const myStyle = StyleSheet.create({
    container: {
        backgroundColor: '#EBEBF6',
        alignItems: 'center',
    },  
    head:{
        fontFamily: "Poppins-SemiBold",
        alignSelf: 'flex-start',
        marginLeft:20,
        margin:10,
        fontSize: 18,
        color: '#000000'
    },
})