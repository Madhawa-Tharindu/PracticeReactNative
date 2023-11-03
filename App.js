import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>Hi Lakindu</Text>
      {/* <Button title="Click Me" onPress={() => alert('Button Clicked')}></Button> */}
      <Button title="Click Me" onPress={() => {Linking.openURL('https://www.youtube.com/watch?v=ANdSdIlgsEw&list=PLGaOwEr4JYjdwgmFVqU6ZMeNrNNR-zTtm&index=3')}}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abf7b1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
