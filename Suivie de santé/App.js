import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Button, StyleSheet, ViewComponent } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MyTabs from './tabs';
import { StatusBar } from 'expo-status-bar';



const Tab = createBottomTabNavigator();


const App = () => {
  return (
 
    <View style={{flex:1}}> 
   
    <MyTabs/>
      
     <StatusBar hidden={true}/>
      </View>
    
    
  
  )
}

export default App;


