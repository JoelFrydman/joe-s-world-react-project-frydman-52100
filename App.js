import { Button, Image, StyleSheet, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput placeholder='elemento de la lista' style={styles.input}/>
      <Button
      title='Presiona aqui'
      onPress={()=>console.log("presiona aqui")}/>
      </View>
      <View>
      <Image
        style={styles.tinyLogo}
        source={require('./assets/imgs/logo.png')}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  
  inputContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },

  input:{
    borderBottomColor:"black",
    borderBottomWidth:2,
    width:200,
  },
  tinyLogo: {
    width: 150,
    height: 100,
  },
});
