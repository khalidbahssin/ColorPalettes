import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation, route }) => {
  const [palettes, setPalettes] = useState([]);
  const getColorPalettes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    const palettes = await result.json();
    setPalettes(palettes);
  }, []);
  useEffect(() => {
    getColorPalettes();
  }, []);

  const newPallete = route.params ? route.params.newPallete : undefined;

  useEffect(() => {
    if (newPallete) {
      setPalettes((newp) => [newPallete, ...newp]);
    }
  }, [newPallete]);
  console.log(palettes);
  return (
    <View style={{ backgroundColor: 'white', margin: 5 }}>
      <TouchableOpacity onPress={() => navigation.navigate('AddNewPalette')}>
        <Text style={styles.btnText}>Add new colors schema...</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.list}
        data={palettes}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => navigation.navigate('ColorPalette', item)}
          >
            <Text style={styles.listText}>{item.paletteName}</Text>
            <PalettePreview colors={item.colors} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 20,
  },
  listItem: {
    marginBottom: 20,
  },
  listText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnText: {
    color: 'teal',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Home;
