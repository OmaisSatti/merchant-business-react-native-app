import React from 'react'
import MyStack from './Screens/MyStack'
import {enableLatestRenderer} from 'react-native-maps';
const App = () => {
  enableLatestRenderer();
  return (
    <MyStack />
  )
}
export default App