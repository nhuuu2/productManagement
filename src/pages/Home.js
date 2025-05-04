import React, { useState } from 'react';
import {
  Button,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../redux/features/productSlice';
//<Button title="About Us" onPress={() => navigation.navigate('About', { name: 'Quan' })}/>

const Home = ({ navigation }) => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  const addButton = () => {
    if(newProduct.name && newProduct.price) {
      const productToAdd = {
        id: (products.length + 1).toString(),
        ...newProduct
      };
      dispatch(addProduct(productToAdd));
      setNewProduct({
        name: "",
        price: "",
        description: "",
      });
    }
  };

  return (
    <View style={styles.container}>
       <View style={{ alignItems: 'center' }}>
       <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Product list application</Text>
       </View>
       <View style={styles.boxlist}>
        <FlatList 
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <TouchableOpacity 
          onPress={() => navigation.navigate('ProductDetail', {product: item})}
          style={styles.itemBox}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price} USD</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        )}
        />
      </View>
      <View style={styles.textbox}>
        <TextInput 
        style={styles.input}
        placeholder='product name'
        value={newProduct.name}
        onChangeText={(text) => setNewProduct({...newProduct, name: text})}
        />
        <TextInput 
        style={styles.input}
        placeholder='product price'
        value={newProduct.price}
        onChangeText={(text) => setNewProduct({...newProduct, price: text})}
        />
        <TextInput 
        style={styles.input}
        placeholder='product description'
        value={newProduct.description}
        onChangeText={(text) => setNewProduct({...newProduct, description: text})}
        />
      </View>
      <Pressable style={styles.button} onPress={addButton}>
        <Text style={styles.textbutton}>add to cart</Text>
      </Pressable>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  boxlist: {
    marginTop: 10,
    backgroundColor: '#fff',
    maxHeight: 400
  },
  itemBox: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#FFCCCC',
    borderRadius: 10,
    
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  price: {
    fontSize:18,
    marginBottom: 10
  },
  description: {
    fontSize: 18,
    marginBottom: 5
  },
  textbox: {
    marginTop: 10,
    backgroundColor: 'rgb(255,160,122)',
    borderRadius: 10,
    borderWidth: 2,
    
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10
  },
  button: {
    backgroundColor: '#9999FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 10,
    margin: 90
  },
  textbutton: {
    fontSize: 20,
    fontWeight: 'bold'
  }
  
});

export default Home;