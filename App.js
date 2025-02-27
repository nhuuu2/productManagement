import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./pages/Home";
import About from "./pages/About";
import Product from './pages/Product';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"screenOptions={{ headerStyle: { backgroundColor: 'tomato' } }}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home Screen' }} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Product" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}