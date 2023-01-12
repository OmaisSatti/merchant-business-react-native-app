import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Cash from './Cash';
import Expenses from './Expenses';
import Main from './Main';
import User from './User';
import Video from './Video';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();
import { Image } from 'react-native';
export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{
        tabBarActiveTintColor: '#E33224',
        tabBarInactiveTintColor:'#FFFFFF',
        tabBarInactiveBackgroundColor:'#242134',
        tabBarActiveBackgroundColor:'#242134'
      }}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cash"
        component={Cash}
        options={{
          tabBarLabel: 'Cash',
          tabBarIcon: ({ color, size }) => (
            //<Image style={{width:25,height:25}} source={require('../Images/cash.png')}/>
            <MaterialCommunityIcons name="cash-fast" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Expenses"
        component={Expenses}
        options={{
          tabBarLabel: 'Expenses',
          tabBarIcon: ({ color, size }) => (
            //<Image style={{width:25,height:25}} source={require('../Images/exp.png')}/>
            <MaterialCommunityIcons name="wallet" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Video"
        component={Video}
        options={{
          tabBarLabel: 'Video',
          tabBarIcon: ({ color, size }) => (
            //<Image style={{width:25,height:25}} source={require('../Images/vid.png')}/>
            <MaterialCommunityIcons name="video" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}