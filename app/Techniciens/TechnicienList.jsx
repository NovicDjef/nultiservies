import { View, Text, ScrollView, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'; // Pour afficher l'icône d'étoile
import { router, useRouter } from 'expo-router'

export default function TechnicienList() {


    const ListTechnicians = [
        {
          id: 1,
          name: "Jean Dupont",
          profession: "Plombier",
          location: "Sept-Îles, QC",
          rating: 4.7,
          experience: "10 ans",
          description: "Plombier expérimenté spécialisé en installation et réparation de systèmes de plomberie.",
          services: [
            {
              name: "Réparation de fuites",
              price: 60.00,
              currency: "CAD"
            },
            {
              name: "Installation de chauffe-eau",
              price: 150.00,
              currency: "CAD"
            }
          ],
          availability: {
            monday: "08:00 - 18:00",
            tuesday: "08:00 - 18:00",
            wednesday: "08:00 - 18:00",
            thursday: "08:00 - 18:00",
            friday: "08:00 - 18:00",
            saturday: "10:00 - 16:00",
            sunday: "Fermé"
          },
          contact: {
            phone: "+1 418-555-1234",
            email: "jean.dupont@example.com"
          },
          images: [
            "https://esm63v53ype.exactdn.com/wp-content/uploads/2023/09/cv-plombier-corpofp.png?strip=all&lossy=1&ssl=1",
            "https://example.com/plumber_work.jpg"
          ]
        },
        {
          id: 2,
          name: "Marie Tremblay",
          profession: "Électricienne",
          location: "Sept-Îles, QC",
          rating: 4.9,
          experience: "8 ans",
          images: "https://modele-cv.com/wp-content/uploads/2024/11/profil-plombier-4.jpg",
          description: "Électricienne qualifiée offrant des services résidentiels et commerciaux.",
          services: [
            {
              name: "Installation de prises électriques",
              price: 50.00,
              currency: "CAD"
            },
            {
              name: "Mise aux normes électriques",
              price: 200.00,
              currency: "CAD"
            }
          ],
          availability: {
            monday: "08:00 - 17:00",
            tuesday: "08:00 - 17:00",
            wednesday: "08:00 - 17:00",
            thursday: "08:00 - 17:00",
            friday: "08:00 - 17:00",
            saturday: "09:00 - 14:00",
            sunday: "Fermé"
          },
          contact: {
            phone: "+1 418-555-5678",
            email: "marie.tremblay@example.com"
          },
          images: [
            "https://cpqmci.org/wp-content/uploads/2020/05/elec-3a.jpg",
            "https://example.com/electrician_work.jpg"
          ]
        },
        {
          id: 3,
          name: "Alexandre Gagnon",
          profession: "Mécanicien",
          location: "Sept-Îles, QC",
          rating: 4.6,
          experience: "12 ans",
          description: "Expert en entretien et réparation de véhicules toutes marques.",
          services: [
            {
              name: "Changement d'huile",
              price: 40.00,
              currency: "CAD"
            },
            {
              name: "Réparation de freins",
              price: 120.00,
              currency: "CAD"
            }
          ],
          availability: {
            monday: "09:00 - 19:00",
            tuesday: "09:00 - 19:00",
            wednesday: "09:00 - 19:00",
            thursday: "09:00 - 19:00",
            friday: "09:00 - 19:00",
            saturday: "10:00 - 16:00",
            sunday: "Fermé"
          },
          contact: {
            phone: "+1 418-555-7890",
            email: "alexandre.gagnon@example.com"
          },
          images: [
            "https://img.freepik.com/photos-gratuite/portrait-mecanicien-automobile-beau-professionnel-tenant-cles-face-automobile-capot-ouvert_342744-261.jpg",
            "https://example.com/mechanic_work.jpg"
          ]
        }
      ];
      
      

  return (
    <View>
       <ScrollView 
            horizontal={true}  // Activer le défilement horizontal
            contentContainerStyle={[styles.containerHotel]}>
            <View>
                <FlatList
                    data={ListTechnicians}
                    horizontal={true}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={TechnicianCard}
                />
            </View>
           
   
              </ScrollView>
    </View>
  )
}

const TechnicianCard = ({ item }) => (
    <TouchableOpacity style={styles.card} 
    onPress={() => router.push({ 
      pathname: '/Techniciens/DetailTechnicien', 
      params: { item: JSON.stringify(item)}})}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.images[0] }} style={styles.profileImage} />
        <View style={styles.ratingContainer}>
          <AntDesign name="star" size={16} color="gold" />
        <Text style={styles.rating}>{item.rating}</Text>
      </View>
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.profession}>{item.profession}</Text>
      <Text style={styles.experience}>{item.experience} d'expérience</Text>
      <View style={styles.addressContainer}>
        <Ionicons name="location-outline" size={24} color="#1E90EF" />
        <Text style={styles.address}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
  
    containerHotel: {
    //   backgroundColor: "#999",
      padding: 4,
    },
    card: {
      backgroundColor: "#fff",
      padding: 10,
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
      // marginTop: 0,
    },
    profession: {
      textAlign: "center",
      marginTop: -10,
      fontSize: 16,
    },
    ratingContainer: {
      position: "absolute",
      bottom: 5,
      flexDirection: "row",
      backgroundColor: "rgba(0,0,0,0.5)",
      paddingVertical: 0,
      borderRadius: 5,
    },
    rating: {
      marginTop: 20,
      fontSize: 14,
      color: "gray",
      marginLeft: 5,
    },
    experience: {
      textAlign: "center",
      fontSize: 14,
      color: "gray",
      marginTop: 5,
    },
    addressContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 5,
    },
    address: {
      fontSize: 14,
      color: "#1E90EF",
      margin: 5,
    },
   
    heart: {
      top: 10,
      // right: 10,
      marginTop: 5,
    },
  
    imageContainer: {
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 50,
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
    profileImage: {
      width: 90,
      height: 90,
      borderRadius: 50,
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
  