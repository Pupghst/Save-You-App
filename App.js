import { StatusBar } from 'expo-status-bar';
import React from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      <Text style={styles.subTitulo}>Inicia Sesión</Text>
      <TextInput 
        placeholder='Email'
        style={styles.textInput}
      />
      <TextInput 
        placeholder='Contraseña'
        style={styles.textInput} keyboardType='visible-password'
      />

      <Text style={styles.olvideContra}>Olvidé la Contraseña</Text>
=======
import { StyleSheet, Text, View, TextInput, Image} from 'react-native';

export default function App() {
  return (
   <View style={style.container}>
    <Text style={style.titulo}>Login</Text>
    <Text style={style.subTitulo}>Inicia Sesión</Text>
    <TextInput 
      placeholder='Email'
      style={style.TextInput}
    />
    <TextInput 
      placeholder='Contraseña'
      style={style.TextInput}
>>>>>>> d48b3ce9a017964b76a52d9648296b77a85ff9d6

      <Button title="Iniciar sesión" onPress={() => handleLogin()} />

      <Text style={styles.registrate}>¿No tienes una cuenta? Regístrate</Text>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 30,
    color: '#34434D',
    fontWeight: 'bold',
  },
  subTitulo: {
    fontSize: 20,
    color: 'gray'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    paddingStart: 30,
    padding: 10,
    width: '80%',
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff'
  },
  olvideContra: {
    fontSize: 16,
    marginTop: 10, // Añade un espacio entre el texto y el botón "Iniciar sesión"
  },
  registrate: {
    fontSize: 16,
    marginTop: 20, // Añade un espacio entre el botón "Iniciar sesión" y el texto "¿No tienes una cuenta? Regístrate"
  }
});

// Función para manejar la acción de iniciar sesión
function handleLogin() {
  // Aquí puedes implementar la lógica de inicio de sesión
  // Por ejemplo, puedes navegar a la pantalla de inicio después de iniciar sesión.
}



