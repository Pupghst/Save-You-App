import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import React from 'react';


 export function Registro()  {
 const [username, setUsername] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const handleSignUp = () => {
    if (username === '' || email === '' || password === '') {
      Alert.alert('Error', 'Por favor, complete todos los campos.');
    } else {
      Alert.alert('Exito', 'Se ha creado su cuenta.');
    }
 };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear una cuenta</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Crear cuenta</Text>
      </TouchableOpacity>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
 },
 title: {
    fontSize: 24,
    marginBottom: 20,
 },
 input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
 },
 button: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
    width: '80%',
 },
 buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
 },
});
