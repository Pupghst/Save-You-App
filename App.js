import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
  return (
   <View style={style.container}>
    <Text style={style.titulo}>Login</Text>
    <Text style={style.subTitulo}>Inicia Sesión</Text>
    <TextInput 
      placeholder='Email'
    />
    <TextInput 
      placeholder='Contraseña'
    />

    <StatusBar style='auto' />
   </View>

  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
  },

  subTitulo:{
    fontSize: 20,
    color: 'gray'
  }

});

