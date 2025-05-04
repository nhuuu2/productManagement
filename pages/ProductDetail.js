import {View,Text, StyleSheet} from 'react-native';

const Detail = ({route}) => {
  const {product} = route.params;
  return(
    <View style={{alignItems: 'center', flex: 1}}>
     
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price} USD</Text>
        <Text style={styles.description}>{product.description}</Text>
    </View>
  )
}
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
})

export default Detail;