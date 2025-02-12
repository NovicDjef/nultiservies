import { View, Text, ScrollView, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { router, useRouter } from 'expo-router'

export default function RestaurantList() {

    
    const ListRestaurants = [
        {
            id: 1,
            name: "st hubert",
            location: "789 Boulevard des Forges, Sept-Îles, QC",
            rating: 4.6,
            cuisine: "Canadienne, Contemporaine",
            dishes: [
              {
                name: "Trempette Chaude",
                description: "Mélange crémeux de fromages fondus servi avec des croûtons",
                price: 9.99,
                currency: "CAD",
                image: "https://example.com/trempette_chaude.jpg"
              },
              {
                name: "Pétoncles Cochon",
                description: "Pétoncles poêlés accompagnés de bacon croustillant",
                price: 19.99,
                currency: "CAD",
                image: "https://example.com/petoncles_cochon.jpg"
              }
            ],
            images: [
              "https://dynl.mktgcdn.com/p/TzFGULJi6npgEeDJ33ZC91_ldR2ndAE5qILiREe96Xk/1200x1200.jpg",
              "https://dynl.mktgcdn.com/p/TzFGULJi6npgEeDJ33ZC91_ldR2ndAE5qILiREe96Xk/1200x1200.jpg",
            ],
            availability: true
          },
        {
          id: 2,
          name: "Chez Sophie",
          location: "123 Rue Principale, Sept-Îles, QC",
          rating: 4.5,
          cuisine: "Française, Pizza",
          dishes: [
            {
              name: "Pizza Margherita",
              description: "Pizza classique avec sauce tomate, mozzarella et basilic frais",
              price: 15.99,
              currency: "CAD",
              image: "https://example.com/pizza_margherita.jpg"
            },
            {
              name: "Quiche Lorraine",
              description: "Tarte salée aux lardons, œufs et crème fraîche",
              price: 12.99,
              currency: "CAD",
              image: "https://example.com/quiche_lorraine.jpg"
            }
          ],
          images: [
            "https://ssmscdn.yp.ca/image/resize/73d0690d-21cd-4a84-8f8c-a3719122f2d2/ypui-m-mp-pic-gal-lg/chez-sophie-10.jpg",
            "https://cote-nord.quoifaire.com/wp-content/uploads/sites/15/2023/02/chez-sophie.jpeg"
          ],
          availability: true
        },
        {
          id: 3,
          name: "Les Terrasses du Capitaine",
          location: "456 Avenue du Port, Sept-Îles, QC",
          rating: 4.7,
          cuisine: "Fruits de mer, Canadienne",
          dishes: [
            {
              name: "Homard Grillé",
              description: "Homard frais grillé servi avec beurre à l'ail",
              price: 29.99,
              currency: "CAD",
              image: "https://example.com/homard_grille.jpg"
            },
            {
              name: "Poutine aux Crevettes",
              description: "Frites croustillantes garnies de crevettes nordiques et de sauce maison",
              price: 14.99,
              currency: "CAD",
              image: "https://example.com/poutine_crevettes.jpg"
            }
          ],
          images: [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/8a/91/7d/photo2jpg.jpg?w=900&h=500&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/8a/91/7e/photo3jpg.jpg?w=900&h=500&s=1"
          ],
          availability: true
        },
      
      ];
      

  return (
    <View>
       <ScrollView 
            horizontal={true}  // Activer le défilement horizontal
            contentContainerStyle={[styles.containerHotel]}>
            <View>
                <FlatList
                    data={ListRestaurants}
                    horizontal={true}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
            </View>
                 
              </ScrollView>
    </View>
  )
}

const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}
      onPress={() => router.push({
        pathname: '/Restaurants/DetailRestaurants',
        params: { item: JSON.stringify(item)} })}>
      {/* Image de l'hôtel avec overlay */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.images[0] }} style={styles.image} />
        {/* Rating & Favoris sur l'image */}
        <View style={styles.overlay}>
          <Text style={styles.rating}>⭐ {item.rating}</Text>
          <Ionicons name="heart-outline" size={24} color="red" />
        </View>
        {/* Nom en bas de l'image */}
        <View style={styles.nameOverlay}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </View>
  
      {/* Adresse */}
      <View style={styles.addressContainer}>
        <Ionicons name="location-outline" size={24} color="#1E90EF" />
        <Text style={styles.address}>{item.location}</Text>
      </View>
     
  
      {/* Icônes des équipements */}
      <View style={styles.iconsContainer}>
        <Text style={styles.distance}>a 1,8 km</Text>
        <Text style={styles.open}>ouvert</Text>
        <MaterialCommunityIcons name="wifi" size={24} color="#FF4500" />
        <MaterialCommunityIcons name="silverware-fork-knife" size={24} color="#FFD700" />
      </View>
       {/* Prix */}
       <Text style={styles.cuisine}>
     cuisine {item.cuisine}
      </Text>
      <Text style={styles.reserver}>
     Reservez maintenant
      </Text>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
  
    containerHotel: {
    //   backgroundColor: "#999",
      padding: 4,
    },
    card: {
      backgroundColor: "#fff",
      padding: 1,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      elevation: 3,
      margin: 3
    },
    image: {
      width: 280,
      height: 180,
      borderRadius: 8,
      
    },
    name: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 0,
    },
    addressContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 5,
    },
    address: {
      fontSize: 14,
      color: "gray",
      margin: 5,
    },
   
  
    heart: {
      top: 10,
      // right: 10,
      marginTop: 5,
    },
  
    imageContainer: {
      position: "relative",
    },
  
    overlay: {
      position: "absolute",
      top: 10,
      left: 10,
      right: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 10,
      backgroundColor: "rgba(0,0,0,0.5)",
      borderRadius: 5,
      paddingVertical: 5,
    },
    reserver: {
      color: "green",
      fontWeight: "bold",
      fontSize: 16,
      textAlign: "center",
      padding : 10
    },
    rating: {
      color: "#FFD700",
      fontWeight: "bold",
      fontSize: 16,
    },
    nameOverlay: {
      position: "absolute",
      bottom: 10,
      left: 10,
      right: 10,
      backgroundColor: "rgba(0,0,0,0.5)",
      paddingVertical: 5,
      borderRadius: 5,
    },
    distance: {
      color: "#1E90EF",
      fontWeight: "bold",
      fontSize: 16,
    },
    open: {
      color: "green",
      fontWeight: "bold",
      fontSize: 16,
    },
    name: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
    },
    cuisine: {
      fontSize: 11,
      flexDirection: "row",
      fontWeight: 300,
      margin: 10,
    },
    iconsContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 10,
    },
  });
  