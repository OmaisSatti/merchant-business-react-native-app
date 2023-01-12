import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../utils/Dimentions'
const VegCard = ({ img, title, amount }) => {
  return (
    <View style={myStyle.smallCard}>
      <Image style={myStyle.img} source={img} />
      <View style={{ padding: 10 }}>
        <Text style={{ color: '#000000', fontSize: 20, fontFamily: 'Poppins-Medium' }}>{title}</Text>
        <View style={{flexDirection:'row'}}>
          <Text style={{ color: '#1D8136', fontSize: 16, fontFamily: 'Poppins-Medium' }}>{amount}</Text>
          <Text style={{ color: '#6E6E6E', fontSize: 14, fontFamily: 'Poppins-Medium' }}>  1Pic.</Text>
        </View>
      </View>
    </View>
  )
}
export default VegCard
const myStyle = StyleSheet.create({
  smallCard: {
    margin: 10,
    height: windowHeight / 5.8,
    width: windowWidth / 1.1,
    backgroundColor: '#FFFFFF',
    shadowColor: '#EBEBF6',
    borderRadius: 10,
    flexDirection: 'row',
    alignContent: 'center',
    alignSelf: 'center',
    padding: 10,
    paddingLeft: 10,
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 10.19,
    elevation: 10,
  },
  img: {
    width: '28%',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: 12
  }
})