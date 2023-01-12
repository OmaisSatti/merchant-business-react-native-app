import React from 'react';
import {View, TextInput, StyleSheet,Image} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';
const FormSearch3 = ({labelValue, placeholderText, iconType, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <Image style={styles.img} source={require('../Images/search2.png')}/>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor='#A1A1A1'
        {...rest}
      />
    </View>
  );
};

export default FormSearch3;
const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 10,
    width: windowWidth/1.55,
    marginLeft:5,
    height: windowHeight / 11,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf:'center',
    backgroundColor: '#fff',
    color:'#A1A1A1',
    borderRadius:15,
    fontFamily:'Poppins-Light',
    shadowColor: '#EBEBF6',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 10.19,
    elevation: 10,
  },
  input:{
      marginTop:10,
      marginBottom:10,
      width:'80%',
      height:windowHeight/11,
      borderRadius:15,
      color:'#A1A1A1',
      backgroundColor:'#FFFFFF',
      borderColor:'#FFFFFF',
      fontFamily:'Poppins-Light',
  },
  img:{
    marginLeft:10
  }
});
