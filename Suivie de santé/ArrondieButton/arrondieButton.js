import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const BoutonCercle = ({ onPress, titre }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.bouton}>
      <Text style={styles.texte}>{titre} Start</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bouton: {
    width: 33,
    height: 33,
    borderRadius: 50,
    backgroundColor: 'red', // couleur de fond du bouton
    //justifyContent: 'center',
    //alignItems: 'center',
    top:280,
    left:340,
    
  },
  texte: {
    color: 'white', // couleur du texte
    fontSize: 10,
    //fontWeight: 'bold',
    top:8,
    left:2,
  },
});

export default BoutonCercle;
