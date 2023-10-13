import './AppDataBase/firebase.js'

import react from 'react';

<script async id='map'
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD0IGp-U2WQNvjTFiV90CrsMbIwtnM5fvM&callback=initMap">
</script>


import { StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {

<link rel='stylesheet' type='css' href='inicio.css'></link>

const mapDiv = document.getElementById['map'];
let map;

async function initMap() {
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
  
    map = new Map(document.getElementById("map"), {
      center: { lat: -34, lng: -64 },
      zoom: 5,
    });
  }
}
const style = StyleSheet.create({
   
})


