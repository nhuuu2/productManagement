import { Text, View, Button } from 'react-native';
const Home = ({navigation})=>{
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>Home Page</Text>
            <Button title="About Us" onPress={() => navigation.navigate('About', { name: 'Quan' })}/>
        </View>
    );
}
export default Home;