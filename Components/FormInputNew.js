import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native'
import { windowHeight, windowWidth } from '../utils/Dimentions'
const FormInput = ({placeholderText,img, ...rest }) => {
  return (
    <View style={styles.inputContainer}>
      <Image style={{width:20,height:30,resizeMode:'stretch'}} source={img} />
      <TextInput
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor='#A1A1A1'
        {...rest}
      />
    </View>
  );
};

export default FormInput;
const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: windowWidth / 1.1,
    height: windowHeight / 11,
    borderRadius: 15,
    paddingLeft:15,
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
