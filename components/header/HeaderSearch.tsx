import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#888" style={styles.icon} />

      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#888"
        // onChangeText={this.}
      />
      <TouchableOpacity>
        <Icon name="mic" size={20} color="#888" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f4da',
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    marginHorizontal: 20,
  },
  icon: {
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default SearchBar;
