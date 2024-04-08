import React from 'react';
import { View, StyleSheet } from 'react-native';
import CircularProgress from './CircularProgress';

export default function App() {
  return (
    <View style={styles.container} > 
      
      <CircularProgress />

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
