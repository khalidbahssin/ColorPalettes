import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

const PalettePreview = ({ colors }) => {
  return (
    <FlatList
      style={styles.list}
      data={colors.slice(0, 5)}
      keyExtractor={(item) => item.hexCode}
      renderItem={({ item }) => (
        <View style={[styles.box, { backgroundColor: item.hexCode }]} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
  },
  box: {
    width: 50,
    height: 50,
    margin: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
  },
});

export default PalettePreview;
