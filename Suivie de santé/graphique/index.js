import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
};

const HeartRateGraph = () => {
  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={350}
        height={220}
        yAxisSuffix="bpm"
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default HeartRateGraph;
