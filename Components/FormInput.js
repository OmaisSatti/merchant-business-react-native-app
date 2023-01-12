import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import { windowHeight, windowWidth } from '../utils/Dimentions'
const FormInput = ({ labelValue, placeholderText, iconType, ...rest }) => {
  const [yes, setYes] = useState(true)
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor='#A1A1A1'
        secureTextEntry={yes}
        {...rest}
      />
      <TouchableOpacity onPress={()=>setYes(!yes)}>
        <Image source={require('../Images/view.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default FormInput;
const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 8,
    marginBottom: 8,
    width: windowWidth / 1.1,
    height: windowHeight / 11,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#A1A1A1',
    borderRadius: 15,
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
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    width: '90%',
    height: windowHeight / 11,
    borderRadius: 15,
    paddingLeft: 15,
    color: '#A1A1A1',
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    fontFamily: 'Poppins-Light',
  },
});
