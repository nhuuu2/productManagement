import { Text, View, Button, StyleSheet } from 'react-native';
const About = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>About Page</Text>
      <Button style={styles.btn} title="Go to Product" onPress={() => navigation.push('Product')} />
      <Button style={styles.btn} title="Go Back" onPress={() => navigation.goBack()} />
      <Button style={styles.btn} title="Go Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  btn:{
    marginBottom: 10
  }
});