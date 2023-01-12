import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimentions';
const SimpleInput = ({ labelValue, placeholderText, iconType, ...rest }) => {
    return (
        <TextInput
            value={labelValue}
            style={styles.input}
            numberOfLines={1}
            placeholder={placeholderText}
            placeholderTextColor={'#A1A1A1'}
            {...rest}
        />
    );
};
export default SimpleInput;
const styles = StyleSheet.create({
    input: {
        marginTop:8,
        marginBottom:8,
        width: windowWidth/1.1,
        height: windowHeight / 11,
        borderRadius: 15,
        paddingLeft: 15,
        color: '#A1A1A1',
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
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
});
