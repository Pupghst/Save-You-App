import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image} from 'react-native';

/*Pantallas*/ 

import Login from './pantallas/Login';

export default function App() {
  return <Login />;
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

