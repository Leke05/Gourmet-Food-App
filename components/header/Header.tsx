import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.location}>
          <Icon name="location-outline" size={20} color="#000" />
          <Text style={styles.locationText}>15 Water Street Fremont</Text>
        </View>

        <View style={styles.iconContainer}>
          <Icon name="heart-outline" size={20} color="#000" />
          <Icon name="notifications-outline" size={20} color="#000" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  location: {
    flexDirection: 'row',
    gap: 4,
  },
  locationText: {
    color: '#868684',
    fontSize: 14,
    marginTop: 2,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 5,
  },
});
