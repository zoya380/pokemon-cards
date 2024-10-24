import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import PokemonCard from './components/PokemonCard';
 
const App = () => {

  const pokemonData = {
    name: "Pokemon",
    image: require("./assets/Pokie.jpeg"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch, ", "Leer"],
    weakness: ["Water, ", "Rock"],
  };

  const mickeyData = {
    name: "Mickey",
    image: require("./assets/Mickey.PNG.jpg"),
    type: "Water",
    hp: 44,
    moves: ["Tackle, ", "Water gun"],
    weakness: ["Electric, ", "Grass"],
  };

  const teddyData = {
    name: "Teddy",
    image: require("./assets/Teddy.JPG.jpg"),
    type: "Grass",
    hp: 45,
    moves: ["Quick Attack, ", "Thunder Bolt"],
    weakness: ["Fire, ", "Ice"],
  };

  const mendoData = {
    name: "Mendo",
    image: require("./assets/Mendo.PNG.jpg"),
    type: "Electric",
    hp: 35,
    moves: ["Tackle, ", "Growl"],
    weakness: ["Ground"],
  }



  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      
      <PokemonCard {...pokemonData}/>
     
      <PokemonCard {...mickeyData}/>

      <PokemonCard {...teddyData}/>
      <PokemonCard {...mendoData}/>
     
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
  },
});

export default App;
