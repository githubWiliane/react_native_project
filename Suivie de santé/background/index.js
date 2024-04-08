import { View, Text, SafeAreaView, ImageBackground, ScrollView, Image, TouchableOpacity, Button, StyleSheet, ViewComponent } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import App from '../testtabnav';
import  { useState } from 'react';
import Barr from '../statuBar';
import HeartRateGraph from '../graphique';
import TEST from '../saveNext';

const Tab = createBottomTabNavigator();


const Mybackground= (props) => {
  return (

    
    <ImageBackground style={styles.background} source={require('../assets/pa2nfr.jpg')}>
    
    <View style={styles.Tabnav}>
    
    </View>

    <View style={styles.Tabnav2}>
   
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>

    </View>
    </ImageBackground>
    
  )
}

export default Mybackground



const Settings = () => {
    return (
      <View>
        <Text>This is settings page</Text>
      </View>
    )
  }
  
  const  Cardio = () => {
    const [isNextPressed, setIsNextPressed] = useState(false);
    const [isSavePressed, setIsSavePressed] = useState(false);
  
    const handleNextPress = () => {
      setIsNextPressed(true);
    };
  
    const handleSavePress = () => {
      setIsSavePressed(true);
    };
    return (
    
        <View> text </View>
      )
     
  }
  
  const  History = () => {
    return (
      <View>
        <Text>This is page of Mesurement</Text>
      </View>
    )
  }







const styles = StyleSheet.create({
background:{
    
    flex:1,
},
Tabnav:{
backgroundColor:'brown',
width:'100%',
height:'10%',

},
Tabnav2:{
    
    backgroundColor:'brown',
    width:'100%',
    height:'10%',
    top:549,
    borderRadius:20,
      
},
akory:{
    backgroundColor:'transparent',
      
  
    },

})