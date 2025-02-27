import { Text, View, Button, StyleSheet } from 'react-native';
const Product = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Product Page</Text>
      <Button style={styles.btn} title="Product Us... again" onPress={() => navigation.push('Product')} />
      <Button style={styles.btn} title="Go Back" onPress={() => navigation.goBack()} />
      <Button style={styles.btn} title="Back to First Screen in Stack" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  btn:{
    marginBottom: 10
  }
});