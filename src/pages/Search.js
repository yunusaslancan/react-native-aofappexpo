import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Search = () => {
  return (
    <View style={styles.container}>
      <Text>Search Page</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', justifyContent: 'center'},
});
