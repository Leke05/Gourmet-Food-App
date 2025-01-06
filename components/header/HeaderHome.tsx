import {View, Text} from 'react-native';
import React from 'react';
import Header from './Header';
import HeaderSearch from './HeaderSearch';

const HeaderHome = () => {
  return (
    <View>
      <Header />
      <HeaderSearch />
    </View>
  );
};

export default HeaderHome;
