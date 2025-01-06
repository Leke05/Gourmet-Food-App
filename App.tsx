import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import HeaderHome from './components/header/HeaderHome';
import PickCard from './components/picks/PickCard';

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <ScrollView>
        <HeaderHome />
        <PickCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#fffded',
  },
});
