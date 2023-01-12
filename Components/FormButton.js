import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {windowHeight, windowWidth} from '../utils/Dimentions';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const FormButton = ({ buttonTitle, ...rest }) => {
    return (
        <TouchableOpacity style={myStyle.btn} {...rest}>
            <Text style={myStyle.btnText}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}
export default FormButton
const myStyle = StyleSheet.create({
    btn: {
        marginTop: 10,
        marginBottom:10,
        width: '90%',
        height: windowHeight / 11,
        backgroundColor: '#E33224',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      },
    btnText: {
        color: '#FFFFFF',
        alignSelf: 'center',
        fontSize: RFPercentage(3)
    }
})