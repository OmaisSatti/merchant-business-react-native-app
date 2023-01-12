import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native'
import { windowHeight, windowWidth } from '../utils/Dimentions'
const DateInput = ({placeholderText,img, ...rest }) => {
  return (
    <View style={styles.inputContainer}>
      <Image style={{width:20,height:30,resizeMode:'stretch'}} source={img} />
      <TextInput
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor='#000000'
        {...rest}
      />
    </View>
  );
};

export default DateInput;
const styles = StyleSheet.create({
  inputContainer: {
    marginTop:5,
    marginBottom:5,
    width: windowWidth / 1.2,
    height: windowHeight / 12,
    borderColor: '#DBDBDB',
    borderWidth:1,
    borderRadius: 15,
    paddingLeft:15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    fontFamily: 'Poppins-Medium',
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    width: '90%',
    height: windowHeight / 11,
    borderRadius: 15,
    paddingLeft: 15,
    borderColor: '#DBDBDB',
    color: '#000000',
    fontFamily: 'Poppins-Medium',
  },
});
