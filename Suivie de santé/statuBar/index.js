import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Barr = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/bycicle.png')} style={styles.icon} />
      <Image source={require('../assets/swimm.png')} style={styles.icon} />
      <Image source={require('../assets/yoga.png')} style={styles.icon} />
     
      <Image source={require('../assets/running-icon-26692.png')} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    
    top:375,
    right:1,
    marginHorizontal:60,
    
    
  },
  icon: {
    width: 40,
    height: 40,
    borderWidth:1,
    alignItems:'center',
    tintColor:'gray',
    
    
  },
});

export default Barr;
