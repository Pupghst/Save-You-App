import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import{styledContainer, InnerContainer, PageLogo, PageTitle}

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
   </View>

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
    color: '#000',
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
  }

  /*css para logo*/
  
});

