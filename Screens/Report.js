import { View, Text,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import FormInput2 from '../Components/FormInput2'

const Report = ({navigation}) => {
  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Back',
      headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack()}><Image style={{alignSelf:'center',width: 20, height: 18, resizeMode: 'stretch',marginTop:3}} source={require('../Images/goBack.png')} /></TouchableOpacity>),
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
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#EBEBF6'}}>
      <Text style={{fontFamily:"Poppins-SemiBold",alignSelf:'flex-start',marginLeft:30,fontSize:20,color:'#000000'}}>Report</Text>
      <FormInput2 placeholderText={'Auctiin'} color='#000000' fontSize={18}/>
      <FormInput2 placeholderText={'Paid'} color='#000000' fontSize={18}/>
      <FormInput2 placeholderText={'Received'} color='#000000' fontSize={18}/>
      <FormInput2 placeholderText={'Incentive'} color='#000000' fontSize={18}/>
      <FormInput2 placeholderText={'Due'} color='#000000' fontSize={18}/>
      <FormInput2 placeholderText={'Expense'} color='#000000' fontSize={18}/>
    </View>
  )
}

export default Report