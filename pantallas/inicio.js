import { TextInput } from 'react-native';
import './AppDataBase/firebase.js'

import react from 'react';

<script async id='map'
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD0IGp-U2WQNvjTFiV90CrsMbIwtnM5fvM&libraries=places&callback=initMap">
</script>


import { StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {

<link rel='stylesheet' type='css' href='inicio.css'></link>
let map;
let marker;
let autocomplete;
const argCords = { lat: -34, lng: -64 }; //valoe constante de las cordenadas de argentina
async function initMap() { 
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const input = document.getElementById('place_input');
    const mapDiv = document.getElementById['map'];
    map = new Map(document.getElementById("map"), {
      center: argCords,
      zoom: 5,
    });
  }
    marker = new google.maps.Marker({ //se crea el marcador
        position: argCords,
        map: map,
        
    })
    function initAutocomplete(){
        autocomplete = new google.maps.places.Autocomplete(input)
        autocomplete.addListener('place_changed', function(){
            const place = autocomplete.getplace(); //autocompleta el nombre del lugar al cual querres ir
            map.setcenter(place.geometry.location); //pone el mapa en la ubicacion puesta en el buscador
            marker.setposition(place.geometry.location); //ppne el marcador en el lugar indicado por el buscador
        })

    }
}
const style = StyleSheet.create({
   
})


