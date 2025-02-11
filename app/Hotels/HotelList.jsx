import { View, Text, ScrollView, Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

export default function HotelList() {

    
    const Listhotels = [
        {
        id: 1,
        name: "Hotel le Gouverneur",
        location: "456 Avenue du Lac, Sept-Îles, QC",
        rating: 4.2,
        from: 90.00,
        currency: "CAD",
        amenities: ["WiFi gratuit", "Restaurant", "Salle de sport"],
        room_types: [
            {
            type: "Chambre Économique",
            price: 90.00,
            capacity: 2
            },
            {
            type: "Suite Familiale",
            price: 180.00,
            capacity: 5
            }
        ],
        images: [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/f0/d6/10/caption.jpg?w=700&h=-1&s=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/58212792.jpg?k=9d56562093c61a118b18d79a0decd2c23fbad6008a5fda7427a5e1efa11f7220&o=&hp=1"
        ], 
        availability: false
        },
        {
        id: 2,
        name: "Hôtel Sept-Îles",
        location: "123 Rue de la Plage, Sept-Îles, QC",
        rating: 4.5,
        from: 120.00,
        currency: "CAD",
        amenities: ["WiFi gratuit", "Parking", "Piscine", "Petit-déjeuner inclus"],
        room_types: [
        {
            type: "Chambre Standard",
            price: 120.00,
            capacity: 2
        },
        {
            type: "Suite Deluxe",
            price: 200.00,
            capacity: 4
        }
        ],
        images: [
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/413282400.jpg?k=b64dddb5f7bfa0667ea0ff009e526a903698cf8576bc700879b8882bb2ccfda3&o=&hp=1",
        "https://lenord-cotier.com/wp-content/uploads/sites/3/2019/03/02h24v10_Vente_HotelSeptIles-1600x1063.jpg"
        ],
        availability: true
    },
    {
        id: 2,
        name: "Hotel mingan",
        location: "456 Avenue du Lac, Sept-Îles, QC",
        rating: 4.2,
        from: 90.00,
        currency: "CAD",
        amenities: ["WiFi gratuit", "Restaurant", "Salle de sport"],
        room_types: [
        {
            type: "Chambre Économique",
            price: 90.00,
            capacity: 2
        },
        {
            type: "Suite Familiale",
            price: 180.00,
            capacity: 5
        }
        ],
        images: [
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/71545076.jpg?k=a5bea5423d196ace50c6b606eaf45a8376fca6c017f2bf2fe74108c36b848a28&o=&hp=1",
        "https://media-cdn.tripadvisor.com/media/photo-m/1280/1d/09/08/43/7.jpg"
        ], 
        availability: false
    }
    ]

  return (
    <View>
       <ScrollView 
            horizontal={true}  // Activer le défilement horizontal
            contentContainerStyle={[styles.containerHotel]}>
            <View>
                <FlatList
                    data={Listhotels}
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
    <View style={styles.card}>
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
        <MaterialCommunityIcons name="pool" size={24} color="#1E90FF" />
        <MaterialCommunityIcons name="wifi" size={24} color="#FF4500" />
        <MaterialCommunityIcons name="hot-tub" size={24} color="#8B0000" />
        <MaterialCommunityIcons name="spa" size={24} color="#228B22" />
        <MaterialCommunityIcons name="silverware-fork-knife" size={24} color="#FFD700" />
      </View>
       {/* Prix */}
       <Text style={styles.price}>
       A partir {item.from} {item.currency} / nuit
      </Text>
    </View>
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
    name: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
    },
    price: {
      fontSize: 16,
      fontWeight: "bold",
      margin: 10,
    },
    iconsContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 10,
    },
  });
  