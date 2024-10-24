import React from 'react';
import { Text, View, StyleSheet, Platform, Image } from 'react-native';


const getTypeDetails = (type) => {

  switch (type.toLowerCase()){

    case "electric":
      return {borderColor: 'yellow', emoji: "⚡"};
    case "water": 
      return {borderColor: 'blue', emoji: "💧"};
    case "fire":
      return {borderColor: 'red', emoji: "🔥"};
    case "grass": 
      return {borderColor: 'green', emoji: "🌿"};
    default: 
      return {borderColor: 'grey', emoji: "❓"};
  }
}

export default function PokemonCard ({name, image, type, hp, moves, weakness}) {

  const {borderColor, emoji} = getTypeDetails (type)


  return (
    <View style= {Styles.Card}>
        <View style={Styles.nameContainer}>
          <Text style={Styles.name}>{name}</Text>
          <Text style={Styles.hp}>❤️{hp}</Text>

        </View>

      <Image source={image} style = {Styles.image} accessibilityLabel={`${name} pokemon`}
      resizeMode='contain'/>


       
 
        <View style = {Styles.typeContainer}>
          <View style = {[Styles.badge, {borderColor}]}>
             <Text style = {Styles.typeEmoji}>{emoji}</Text>
             <Text style = {Styles.typeText}>{type}</Text>

          </View>
          
        </View>

       <View style = {Styles.movesContainer}>
        <Text style = {Styles.movesText}>Moves: {moves}</Text>
      </View> 

      <View style = {Styles.weaknessContainer}>
        <Text style = {Styles.weaknessText}>weakness: {weakness}</Text>
      </View> 
     
    </View>
  );
}

const Styles = StyleSheet.create ({

  Card: {
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 2,
    margin: 16,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#333',    
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: {width: 2, height: 2},    
      },
      android: {
        elevation: 5
      }
    })

  },

  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
   name: {
    fontSize: 30,
    fontWeight: 'bold',
   },

   hp: {
    fontSize: 22,
    marginTop: 7
   },

   image: {
    width: "100",
    height: 200,
    marginBottom: 16
   },

   typeContainer: {
    marginBottom: 40,
    alignItems: 'center',
   },

   badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,

   },

   typeEmoji: {
    fontSize: 30,
    marginRight: 12,

   },

   typeText: {
    fontSize: 22,
    fontWeight: 'bold',
   },
  
   movesContainer: {
    marginBottom: 16,
   },

   movesText: {
    fontSize: 22,
    fontWeight: 'bold'
   },

   weaknessContainer: {
    marginBottom: 8,
    
   },

   weaknessText: {
    fontSize: 22,
    fontWeight: 'bold',
   }
})



