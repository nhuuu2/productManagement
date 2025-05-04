import {View, Text, StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedProduct } from '../redux/features/productSlice';

export default ProductDetail = ({route}) => {
  const {product} = route.params;
  const dispatch = useDispatch();
  
  // Cập nhật selectedProduct trong Redux store
  React.useEffect(() => {
    dispatch(setSelectedProduct(product));
  }, [product, dispatch]);

  return(
    <View style={{alignItems: 'center', flex: 1}}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price} USD</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  price: {
    fontSize: 20
  },
  description: {
    fontSize: 18
  }
});