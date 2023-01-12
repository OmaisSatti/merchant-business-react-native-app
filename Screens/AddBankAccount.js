import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, ScrollView} from 'react-native'
import React from 'react'
import FormInputNew from '../Components/FormInputNew'
import SimpleInput from '../Components/SimpleInput'
import FormButton from '../Components/FormButton'
const AddBankAccount = ({ navigation }) => {
    React.useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Back',
            headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()}><Image style={{ alignSelf: 'center', width: 20, height: 18, resizeMode: 'stretch', marginTop: 3 }} source={require('../Images/goBack.png')} /></TouchableOpacity>),
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
        <ScrollView contentContainerStyle={myStyle.main}>
            <StatusBar backgroundColor={'#FFFFFF'} barStyle='dark-content' />
            <Text style={myStyle.head}>Add Bank Account</Text>
            <FormInputNew img={require('../Images/Calender.png')} placeholderText={'04 Sept 2022'} />
            <SimpleInput placeholderText={'Bank Name'} />
            <SimpleInput placeholderText={'Account Number'} />
            <SimpleInput placeholderText={'Account Holder Name'} />
            <SimpleInput placeholderText={'IFSC Code'} />
            <FormButton buttonTitle={'Save'} onPress={() =>navigation.navigate('Bank')}/>
        </ScrollView>
    )
}
export default AddBankAccount
const myStyle = StyleSheet.create({
    main: {
        backgroundColor: '#EBEBF6',
        alignItems: 'center'
    },
    head: {
        fontFamily: "Poppins-SemiBold",
        alignSelf: 'flex-start',
        margin: 10,
        marginLeft: 20,
        fontSize: 18,
        color: '#000000'
    },
})