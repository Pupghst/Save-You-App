import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

export function Login(){
    return(
        <View style={styles.container}>
        <Text>Login</Text>
        <StatusBar style="auto" />
      </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulos: {
    fontSize: 30,
  }
});