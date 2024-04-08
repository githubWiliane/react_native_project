import React, { Component } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

export default class CircularProgress extends Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      }
    ).start(() => this.spin());
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.innerCircle, { transform: [{ rotate: spin }] }]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  innerCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 2,
    borderColor: 'green',
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
    position: 'absolute',
    transform: [{ rotate: '45deg' }],
  },
});
