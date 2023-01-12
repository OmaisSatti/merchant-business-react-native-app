import {StatusBar,View, Text, StyleSheet,TouchableOpacity, ScrollView,Image} from 'react-native'
import React from 'react'
import FormSearch2 from '../Components/FormSearch2'
import VegCard from '../Components/VegCard'
const MyProduct = ({navigation}) => {
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
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'baseline',margin:20}}>
                <Text style={myStyle.head}>My Products</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('AddProduct')} style={{justifyContent:'center',borderRadius:10,height:'80%',width:'30%',backgroundColor:'#E33224'}}>
                    <Text style={{fontFamily:'Poppins-Semibold',alignSelf:'center',color:'#FFFFFF'}}>Add Product</Text>
                </TouchableOpacity>
            </View>
            <FormSearch2 placeholderText={'Search Name'} />
            <VegCard img={require('../Images/gobi.png')} title={'Cauliflower'} amount={'₹ 2000'}/>
            <VegCard img={require('../Images/tmatar.png')} title={'Tomato'} amount={'₹ 2000'}/>
            <VegCard img={require('../Images/gobi.png')} title={'Cauliflower'} amount={'₹ 2000'}/>
            <VegCard img={require('../Images/tmatar.png')} title={'Tomato'} amount={'₹ 2000'}/>
        </ScrollView>
    )
}
export default MyProduct
const myStyle = StyleSheet.create({
    container: {
        backgroundColor: '#EBEBF6',
    },  
    head: {
        fontFamily: "Poppins-SemiBold",
        alignSelf: 'flex-start',
        fontSize: 20,
        color: '#000000'

    },
})