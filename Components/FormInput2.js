import React from 'react';
import {View, TextInput, StyleSheet,Image} from 'react-native'
import {windowHeight, windowWidth} from '../utils/Dimentions'
const FormInput2 = ({placeholderText,fontSize,color,...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input,{fontSize:fontSize}]}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor={color}
        {...rest}
      />
      <Image style={{width:20,height:20}} source={require('../Images/path.png')}/>
    </View>
  );
};

export default FormInput2;
const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: windowWidth/1.1,
    height: windowHeight / 11,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
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
      width:'90%',
      height:windowHeight/11,
      borderRadius:15,
      paddingLeft:15,
      color:'#A1A1A1',
      backgroundColor:'#FFFFFF',
      borderColor:'#FFFFFF',
      fontFamily:'Poppins-Regular'
  },
});
