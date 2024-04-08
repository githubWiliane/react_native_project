import React from 'react';
import { View, StyleSheet } from 'react-native';
import CircularProgress from 'react-native-svg-circular-progress';

export default function App() {
  return (
    <View style={styles.container}>
      <CircularProgress
        percentage={75} // Pourcentage de progression
        radius={50} // Rayon du cercle
        strokeWidth={5} // Largeur de la ligne
        duration={3000} // Durée de l'animation en ms
        color="#3498db" // Couleur de la ligne
        delay={0} // Délai avant le démarrage de l'animation en ms
        backgroundColor="#f0f0f0" // Couleur de fond
        startDegree={0} // Degré de début de la progression
        linecap="round" // Terminaison de la ligne (round, square)
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});








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

export default App


