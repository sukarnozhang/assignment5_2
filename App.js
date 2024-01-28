import React, { useState } from 'react'; 
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper'; 

const simpleForm = ()  => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [likeCoffee, setLikeCoffee] = useState('');

  const handleSubmit = () => {
    Alert.alert(
      'Name: ' + name + '\n Age: ' + age +  'like coffee :' + likeCoffee

    )
  }

  return (
    <View style={styles.container}>

      <View styles={styles.row_container}>
        <Text>Name :</Text>
        <TextInput 
          style={styles.textinput}
          value={name}
          onChangeText={a => setName(a)}
        />
      </View>

      <View styles={styles.row_container}>
        <Text>Age :</Text>
        <TextInput 
          style={styles.textinput}
          value={age}
          onChangeText={text => setAge(text)}
        />
      </View>

      <View styles={styles.row_container}>
        <Text>Like coffee? :</Text>
        <RadioButton 
          value="yes"
          onPress={ ()=> setLikeCoffee(true)}
          status={likeCoffee === true ? "checked" : "unchecked" }
        />
        <Text>Yes</Text>

        <RadioButton 
          value="no"
          onPress={ ()=> setLikeCoffee(false)}
          status={likeCoffee === false ? "checked" : "unchecked" }
        />
        <Text>No</Text>
        
      </View>
      <Button title='submit' onPress={handleSubmit} />

    </View>
  );
}



export default simpleForm;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    // alignItems: 'left',
    // justifyContent: 'left',
  },

  row_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 20
  },

  text1: {


  },

  textinput: {

    borderWidth: 1,
    width: 150
  }
});
