import { View, Text, Image, TouchableOpacity, StatusBar, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ExpenseCard from '../Components/ExpenseCard';
import { windowHeight, windowWidth } from '../utils/Dimentions';
import FormSearch from '../Components/FormSearch2';
const Expense = ({ navigation }) => {
  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerLeft: () => (<TouchableOpacity><Image style={{ alignSelf: 'center', width: 20, height: 18, resizeMode: 'stretch', marginTop: 3, marginLeft: 10 }} source={require('../Images/home.png')} /></TouchableOpacity>),
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
      <StatusBar backgroundColor={'#FFFFFF'} barStyle='dark-content' />
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', padding: 10 }}>
        <Text style={myStyle.head}>Expenses</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddExpenses')} style={{ borderRadius: 10, backgroundColor: '#E33224', width: windowWidth / 3.2, height: windowHeight / 20, justifyContent: 'center' }}>
          <Text style={{ fontFamily: 'Poppins-Semibold', alignSelf: 'center', color: '#FFFFFF' }}>Add Expenses</Text>
        </TouchableOpacity>
      </View>
      <FormSearch placeholderText={'Expenses Name'} />
      <View style={{flexDirection: 'row', alignItems: 'baseline', padding: 10, marginLeft: 10 }}>
        <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#FFFFFF', width: windowWidth / 3.2, height: windowHeight / 15, justifyContent: 'center' }}>
          <Text style={{ fontFamily: 'Poppins-Semibold', alignSelf: 'center', color: '#000000', fontSize: 14 }}>Paid Mode</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#1D8136', width: windowWidth / 3.2, height: windowHeight / 15, justifyContent: 'center', marginLeft: 10 }}>
          <Text style={{ fontFamily: 'Poppins-Semibold', alignSelf: 'center', color: '#FFFFFF', fontSize: 14 }}>Date Range</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5 }}>
        <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#FFFFFF', width: windowWidth / 2.2, height: windowHeight / 13, justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
          <Image style={{ resizeMode: 'stretch', width: 20, height: 20 }} source={require('../Images/Calender.png')} />
          <Text style={{ fontFamily: 'Poppins-Semibold', alignSelf: 'center', color: '#000000', fontSize: 14 }}>04 Sept 2022</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 16, color: '#000000', fontFamily: 'Poppins-SemiBold', paddingTop: 10}}>To</Text>
        <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#FFFFFF', width: windowWidth / 2.4, height: windowHeight / 13, justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
          <Image style={{ resizeMode: 'stretch', width: 20, height: 20 }} source={require('../Images/Calender.png')} />
          <Text style={{ fontFamily: 'Poppins-Semibold', alignSelf: 'center', color: '#000000', fontSize: 14 }}>10 Sept 2022</Text>
        </TouchableOpacity>
      </View>
      <ExpenseCard onPress={() => navigation.navigate('ExpenseDetail')} />
      <ExpenseCard onPress={() => navigation.navigate('ExpenseDetail')} />
      <ExpenseCard onPress={() => navigation.navigate('ExpenseDetail')} />
      <ExpenseCard onPress={() => navigation.navigate('ExpenseDetail')} />
    </View>
  )
}
export default Expense
const myStyle = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#EBEBF6',
  },
  head: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    color: '#000000'
  },
  txt:{ 
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Poppins-SemiBold',
    paddingTop: 15
  },
  btnText: {
    fontFamily: 'Poppins-Semibold',
    alignSelf: 'center',
    color: '#000000',
    fontSize: 14
  },
  img:{
    resizeMode: 'stretch',
    width: 20,
    height: 20
  },
  mini: {
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    width: windowWidth / 2.8,
    height: windowHeight / 11.5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginRight:15
  }
})