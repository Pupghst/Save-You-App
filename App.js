import { StatusBar } from 'expo-status-bar';
import React from 'react';
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

    />

    
    <StatusBar style='auto' />
   </View>,

   <View2 style={style.olvideContra}>
    <Text style={style.olvideContra}>Olvide Contraseña</Text>
    <StatusBar style='auto' />
   </View2>

  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  /*Para titulos de botones*/
  titulo: {
    fontSize: 30,
    color: '#34434D',
    fontWeight: 'bold',
  },

  subTitulo:{
    fontSize: 20,
    color: 'gray'
  },

  TextInput:{
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
    alignItems: 'flex-end'
  }

  /*css para logo*/
});

