import { View, StyleSheet } from 'react-native'
import React from 'react'
import Receipt from '../Components/Receipt';
const PaymentReceipt = ({ navigation }) => {
    React.useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Back',
            headerShown: false
        }); //
    }, [navigation]);
    return (
        <View style={myStyle.container}>
            <Receipt />
        </View>
    )
}
export default PaymentReceipt
const myStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#EBEBF6',
    },
})