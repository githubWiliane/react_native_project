import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Button, StyleSheet, ViewComponent } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'expo-status-bar';
import  { useState } from 'react';
import Barr from '../statuBar';
import HeartRateGraph from '../graphique';
import TEST from '../saveNext';
import CircularProgress from 'react-native-circular-progress-indicator';
import IMC from '../ICM/Icm';
import BoutonCercle from '../ArrondieButton/arrondieButton';
import { BackHandler } from 'react-native';

const Tab = createBottomTabNavigator();
const handleExit = () => {
  BackHandler.exitApp(); 
  
};

function MyTabs() {

 
  return (
    
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        activeTintColor: '#e91e63', tabBarActiveTintColor:'white', tabBarShowLabel:false, tabBarActiveBackgroundColor:'#00AAAA',
        tabBarInactiveBackgroundColor:'gray',
        headerTintColor:'gray',        
      }}
    >

<Tab.Screen
        name="Aceuille"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image source={require('../assets/home.png')} style={{width:40, height:40, tintColor:'white'}} />
          ),
         
        }}
      />

      <Tab.Screen
        name=" Cardiographe"
        component={Cardio}
        options={{
          tabBarLabel: 'Cardiographe', headerShadowVisible :false,
          tabBarIcon: () => (
            <Image source={require('../assets/pulse.png')} style={{width:35, height:35, tintColor:'white', borderColor:'white',}} />
          ),
        }}
      />
      <Tab.Screen
        name="Indicateur de masse corporelle"
        component={MyScreen_1}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: () => (
            <Image source={require('../assets/arterielle.png')} style={{width:37, height:37, tintColor:'white'}} />
          ),
         
        }}
      />

      <Tab.Screen
          name="Exit"
          component={ExitScreen}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              e.preventDefault(); 
              handleExit(); 
            },
          })}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="exit-to-app" color={'white'} size={size} />
            ),
          }}
        />
    </Tab.Navigator>
    </NavigationContainer>
    
   
  );


}

const MyScreen_1 = () => {
  return (
    <View>
     
    <IMC/>

    </View>
  )
}


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
  
    
<View>

  <BoutonCercle/>
  
     <View> 
    
<TEST/>
  
     <Barr/>
     

<View style={styles.ViewBar} > 
   <CircularProgress
  value={60}
  radius={120}
  duration={2000}
  progressValueColor={'#00AAAA'}
  maxValue={200}
  title={'BPM'}
  titleColor={'#555555'}
  titleStyle={{fontWeight: 'bold',}}
/></View>

     </View>
     </View>
  
  )
   
}

const  History = () => {
  return (
    <View>
      <Text>This is page of Mesurement</Text>
    </View>
  )
}

const  Home = () => {
  return (
   
      <SafeAreaView>

      <Text style={styles.text}> R-Cardio </Text>


      <Image fadeDuration={1000} source={require('../assets/heart2.jpg')} style={{width:375, height:200, top:12, left:18, borderRadius:20,  }}/>
      
      <Image fadeDuration={3000}  source={require('../assets/pression.jpeg')} style={{width:375, height:155, top:30, left:18, borderRadius:10,  }}/>


<View > 
      
</View>

      </SafeAreaView>   
    
  )
}

const  ExitScreen = () => {
  return (
    <View>
      <Text>This is page exit</Text>
    </View>
  )
}




const styles = StyleSheet.create({

  title: {
    textAlign: 'center',
    marginVertical: 9,
    paddingHorizontal:15,
  },
    
  text: {
    color: '#AAAAAA',
    fontSize: 42,
    lineHeight: 40,
    marginTop:25,
    paddingTop:5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  text_2:{
   top:60,
   left:17,

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  ViewBar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    top:60,

  },

  container_6:{
  backgroundColor:'#FF5555',
  
  borderRadius:60,
 
  margin:300,
  bottom:300,
  },
  Text_AR:{
    color: '#AAAAAA',
    fontSize: 42,
    lineHeight: 40,
    marginTop:25,
    paddingTop:5,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  container_BC:{



  }
  


});

export default MyTabs;




  
