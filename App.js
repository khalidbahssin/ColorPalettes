import React from 'react';
//import { StyleSheet, View } from 'react-native';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import AddNewPalette from './screens/AddNewPalette';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
        <Stack.Screen name="AddNewPalette" component={AddNewPalette} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
