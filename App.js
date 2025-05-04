import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./pages/Home";
import Product from './pages/ProductDetail';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"screenOptions={{ headerStyle: { backgroundColor: 'tomato' } }}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home Screen' }} />
        <Stack.Screen name="Product" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}