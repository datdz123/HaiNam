import { View, Text } from 'react-native'
import React from 'react'
import Detail from '../Detail';
import Acount from '../Acount';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Icon from "react-native-feather";
import Home from '../HomeScreen';
import Cart from '../Cart';


export default function BottomNavigator() {
const Tab = createBottomTabNavigator();
  return (

    <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={Home}
     options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <Icon.Home width={size} height={size} stroke={color} fill={color} />
      ),
    }}
    />  

    <Tab.Screen name="Detail" component={Detail} 
       options={{
        tabBarLabel: 'Detail',
        tabBarIcon: ({ color, size }) => (
          <Icon.ShoppingCart width={size} height={size} stroke={color} fill={color} />
        ),
      }}
      
      />
      
    <Tab.Screen name="Acount" component={Acount} 
       options={{
        tabBarLabel: 'Account',
        tabBarIcon: ({ color, size }) => (
          <Icon.User width={size} height={size} stroke={color} fill={color} />
        ),
      }}
      />
    {/* <Tab.Screen name="OrderScreen" component={RestaurantScreen} /> */}
    {/* <Tab.Screen name="Restaurant" component={RestaurantScreen} /> */}
    {/* Add more screens as needed */}
  </Tab.Navigator>
  )
}