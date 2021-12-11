import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Colors from './constants/colors';
import Navigation from './navigations';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primaryColor}/>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
