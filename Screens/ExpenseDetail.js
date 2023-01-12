import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView} from 'react-native'
import React,{useState} from 'react'
import { windowHeight, windowWidth } from '../utils/Dimentions'
import ExpenseCard2 from '../Components/ExpenseCard2';
const ExpenseDetail = ({navigation}) => {
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
            <Text style={myStyle.head}>Expenses</Text>
            <View style={myStyle.smallCard}>
                <View>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular' }}>Total Expenses</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 28, color: '#1D8136', fontFamily: 'Poppins-SemiBold' }}>₹</Text>
                        <Text style={{ fontSize: 28, color: '#000000', fontFamily: 'Poppins-SemiBold' }}> 50,1250</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() =>navigation.navigate('AddExpenses')}>
                    <Image style={{ width: 90, height: 90, resizeMode: 'stretch' }} source={require('../Images/cPlus.png')} />
                </TouchableOpacity>
            </View>
            <ExpenseCard2 type={'Bank'}/>
            <ExpenseCard2 type={'Hnad Cash'}/>
            <ExpenseCard2 type={'Bank'}/>
            <ExpenseCard2 type={'Hnad Cash'}/>
        </ScrollView>
    )
}

export default ExpenseDetail
const myStyle = StyleSheet.create({
    container: {
        backgroundColor: '#EBEBF6',
        alignItems: 'center',
    },
    smallCard: {
        height: windowHeight / 7,
        width: windowWidth / 1.1,
        backgroundColor: '#FFFFFF',
        shadowColor: '#EBEBF6',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent:'space-between',
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
    centeredView: {
        flex: 1,
        alignItems: "center",
        paddingTop: 40,
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    modalView: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '93%',
        height: '45%',
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalView2: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '93%',
        height: '73%',
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalImg: {
        width: windowWidth / 3,
        height: windowHeight / 7,
        margin: 10,
        resizeMode: 'stretch'
    },
})