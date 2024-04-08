import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-web'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const TEST = () => {
  return (

    
    <View style={styles.container}>
                
     <Button color={'#00AAAA'} title='suivant' />
      
    <View style={styles.container_1}>
     <Button color={'#00AAAA'} title='sauvegarde' />
    </View>
    </View>   
     
  )
}

export default TEST

const styles = StyleSheet.create({

container:{
  
  flexDirection:'column-reverse',
  paddingRight:80,
  paddingLeft:80,
  paddingTop:20,
  bottom:300,
  justifyContent:'space-around',
  
},
button:{
  top:150,
    
},
container_1:{
  top:9,

},


})