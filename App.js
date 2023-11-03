import react, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  Linking 
} from 'react-native';

export default function App() {

const [name, setName] = useState('Lakindu');
const [session, setSession] = useState({number: 6, title: 'state'});

const onClickHandler = () => {
  setName('Lakindu');
  setSession({number: 7, title: 'moved to next session'});
}

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.text}>I'm {name}</Text>
      <Text style={styles.text}>this is session number  {session.number} and about {session.title}</Text>
      {/* <Button title="Click Me" onPress={() => alert('Button Clicked')}></Button> */}
      {/* <Button title="Click Me" onPress={() => {Linking.openURL('https://www.youtube.com/watch?v=ANdSdIlgsEw&list=PLGaOwEr4JYjdwgmFVqU6ZMeNrNNR-zTtm&index=3')}}></Button> */}
      <Button title="Update The Name" onPress={onClickHandler}></Button>
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
